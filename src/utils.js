const getMediaSource = () => {
  if (!window) return null;
  return window.MediaSource || window.WebKitMediaSource;
};

const isTypeSupported = (mimeCodec) => {
  return getMediaSource().isTypeSupported(mimeCodec);
};

const checkOptions = ({chunkDuration, mimeCodec, urls, video, totalDuration, quality}) => {
  return (
    (chunkDuration && typeof chunkDuration === 'number') &&
    (mimeCodec && typeof mimeCodec === 'string') &&
    (urls && urls.length) &&
    (video && video.tagName === 'VIDEO') &&
    (typeof totalDuration === 'number' || typeof totalDuration === 'undefined') &&
    (typeof quality === 'string' && urls.every(url => Object.keys(url).includes(quality)))
  );
};

const getArrayBuffer = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then((response) => resolve(response))
      .catch(reject);
  })
};

const getDuration = (file) => {
  // TODO: reject

  return new Promise((resolve) => {
    const media = document.createElement('video');
    const url = URL.createObjectURL(new Blob([file]));

    media.onloadedmetadata = () => {
      resolve(media.duration);
    }

    media.src = url;
  })
};

module.exports = {
  getMediaSource,
  isTypeSupported,
  checkOptions,
  getArrayBuffer,
  getDuration,
};
