const getLoadQueue = urls => urls.map((url) => {
  const object = {};

  Object.keys(url).forEach((level) => {
    object[level] = {
      url: url[level],
      loaded: false,
    };
  });

  return object;
});

const updateLoadQueue = loadQueue => loadQueue.map((object) => {
  const newObject = {};

  Object.keys(object).forEach((key) => {
    newObject[key] = {
      ...object[key],
      pushed: false,
    };
  });

  return newObject;
});

module.exports = {
  getLoadQueue,
  updateLoadQueue,
};
