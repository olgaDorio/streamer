import { getLoadQueue, updateLoadQueue } from './mappers.js';
import {
  getMediaSource, isTypeSupported, checkOptions, checkQuality, getArrayBuffer, getDuration, calcSum,
} from './utils.js';

/**
 * Создает экземпляр класса Streamer

 * @namespace
 * @property {object}           options               - Streamer options.

 * @property {string}           options.mimeCodec     - mimetype and codec
 * @property {array}            options.urls          - array of urls
 * @property {HTMLVideoElement} options.video         - The default number of players.
 * @property {string}           options.quality       - Default quality
 * @property {number}           options.totalDuration - Video duration
 */

class Streamer {
  constructor(options, callback) {
    if (!checkOptions(options)) {
      console.error('Invalid Configuration');
      return;
    }

    this.mimeCodec = options.mimeCodec;
    this.urls = options.urls;
    this.video = options.video;
    this.quality = options.quality;
    this.loadQueue = getLoadQueue(this.urls);
    this.duration = options.totalDuration || calcSum(this.urls.map(o => o.chunkDuration));

    this.callback = callback;

    this.create();

    this.isFetching = false;
    this.isDestroyed = true;
  }

  create() {
    this.isDestroyed = false;

    const MSE = getMediaSource();

    if (!MSE) {
      console.error('MSE not supported');
      return;
    }

    if (!isTypeSupported(this.mimeCodec)) {
      console.error('Unsupported MIME type or codec: ', this.mimeCodec);
      return;
    }

    if (this.callback) {
      this.video.addEventListener('timeupdate', () => {
        const index = this.getCurrentChunk();
        if (index < 0) return;
        this.callback(index);
      });
    }

    this.mediaSource = new MSE();
    this.video.src = URL.createObjectURL(this.mediaSource);
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen.bind(this));
  }

  destroy() {
    this.isDestroyed = true;
    this.loadQueue = [];
  }

  onSourceOpen() {
    this.mediaSource.duration = this.duration;
    this.sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
    this.appendBuffer();
    this.getVideo(0);
  }

  /**
  * Tells streamer which quality to use
  * @param {string} quality - quality value
  */

  setQuality(quality) {
    const isValid = checkQuality(quality, this.loadQueue);

    if (!isValid) {
      console.error(`${quality} does not exist in ${this.loadQueue}`);
      return;
    }

    this.quality = quality;
    this.loadQueue = updateLoadQueue(this.loadQueue);

    if (this.isFetching) {
      console.log('Streamer is busy, it will fetch next chunk when will finish the last one');
      return;
    }

    this.onBufferReceive();
  }

  getCurrentChunk() {
    const chunkDurations = this.urls.map(u => u.chunkDuration);
    const { currentTime } = this.video;

    return chunkDurations.findIndex((v, index) => {
      const valueCurrent = calcSum(chunkDurations.slice(0, index));
      const valueAfter = calcSum(chunkDurations.slice(0, index + 1));
      return currentTime < valueAfter && currentTime >= valueCurrent;
    });
  }

  onBufferReceive() {
    if (this.isEverythingLoaded() || this.isDestroyed) {
      return;
    }

    const currIndex = this.getCurrentChunk();
    const nextIndex = currIndex + 1;

    if (!this.isChunkLoaded(currIndex)) {
      this.getVideo(currIndex);
      return;
    }

    if (this.loadQueue[nextIndex] && !this.isChunkLoaded(nextIndex)) {
      this.getVideo(nextIndex);
      return;
    }

    const notLoaded = this.getNotLoadedChunks(currIndex);

    if (!notLoaded.after.length && !notLoaded.before.length) {
      return;
    }

    const loadNext = notLoaded.after.length
      ? Math.min(...notLoaded.after)
      : Math.max(...notLoaded.before);

    this.getVideo(loadNext);
  }

  getVideo(index) {
    if (this.isDestroyed) {
      return;
    }

    this.isFetching = true;

    getArrayBuffer(this.loadQueue[index][this.quality].url)
      .then((file) => {
        this.isFetching = false;
        return this.updateQueue(file, index);
      })
      .then(() => this.onBufferReceive())
      .catch((e) => {
        console.log(index, e.message);
      });
  }

  appendBuffer() {
    if (this.isDestroyed) {
      return;
    }

    const index = this.loadQueue.findIndex((source) => {
      const currentSource = source[this.quality];
      return currentSource.loaded && !currentSource.pushed;
    });

    if (index < 0) {
      requestAnimationFrame(this.appendBuffer.bind(this));
      return;
    }

    const chunk = this.loadQueue[index][this.quality];

    if (this.sourceBuffer && !this.sourceBuffer.updating && chunk) {
      this.sourceBuffer.timestampOffset = index ? index * chunk.mediaDuration : index;
      this.sourceBuffer.appendBuffer(chunk.mediaBuffer);
      chunk.pushed = true;
    }

    // TODO: check if it's necessary to call `endOfStream` method of mediaSource

    requestAnimationFrame(this.appendBuffer.bind(this));
  }

  isEverythingLoaded() {
    return this.loadQueue.every(item => item[this.quality].loaded);
  }

  isChunkLoaded(index) {
    return this.loadQueue[index][this.quality].loaded;
  }

  getNotLoadedChunks(currIndex) {
    return this.loadQueue.reduce((accumulator, currentValue, index) => {
      if (!this.isChunkLoaded(index)) {
        const object = { ...accumulator };
        const property = index < currIndex ? 'before' : 'after';
        object[property] = object[property].concat(index);
        return object;
      }

      return accumulator;
    }, { before: [], after: [] });
  }

  updateQueue(mediaBuffer, index) {
    return new Promise((resolve) => {
      getDuration(mediaBuffer)
        .then((mediaDuration) => {
          this.loadQueue[index][this.quality] = {
            ...this.loadQueue[index][this.quality],
            mediaBuffer,
            mediaDuration,
            loaded: true,
            pushed: false,
          };

          resolve();
        });
    });
  }
}

if (window) {
  window.Streamer = Streamer;
} else {
  module.exports = Streamer;
}
