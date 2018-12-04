const getMediaSource = () => {
  if (!window) return null;
  return window.MediaSource || window.WebKitMediaSource;
};

const isTypeSupported = mimeCodec => getMediaSource().isTypeSupported(mimeCodec);

const checkOptions = ({
  mimeCodec, urls, video, totalDuration, quality,
}) => (
  (mimeCodec && typeof mimeCodec === 'string')
    && (urls && urls.length)
    && (video && video.tagName === 'VIDEO')
    && (typeof totalDuration === 'number' || typeof totalDuration === 'undefined')
    && (typeof quality === 'string' && urls.every(url => Object.keys(url).includes(quality)))
);

const checkQuality = (quality, loadQueue) => (
  loadQueue.every(object => Object.keys(object).includes(quality))
);

const getArrayBuffer = url => new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(response => resolve(response))
    .catch(reject);
});

const getDuration = file => new Promise((resolve) => {
  const media = document.createElement('video');
  const url = URL.createObjectURL(new Blob([file]));

  media.onloadedmetadata = () => {
    resolve(media.duration);
  };

  media.src = url;
});

const calcSum = array => (
  array.reduce((a, b) => a + b, 0)
);

module.exports = {
  getMediaSource,
  isTypeSupported,
  checkOptions,
  checkQuality,
  getArrayBuffer,
  getDuration,
  calcSum,
};
