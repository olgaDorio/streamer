/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mappers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mappers.js */ \"./src/mappers.js\");\n/* harmony import */ var _mappers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mappers_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\n * Создает экземпляр класса Streamer\n\n * @namespace\n * @property {object}           options               - Streamer options.\n\n * @property {string}           options.mimeCodec     - mimetype and codec\n * @property {array}            options.urls          - array of urls\n * @property {HTMLVideoElement} options.video         - The default number of players.\n * @property {string}           options.quality       - Default quality\n * @property {number}           options.totalDuration - Video duration\n */\n\nclass Streamer {\n  constructor(options, callback) {\n    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"checkOptions\"])(options)) {\n      console.error('Invalid Configuration');\n      return;\n    }\n\n    this.mimeCodec = options.mimeCodec;\n    this.urls = options.urls;\n    this.video = options.video;\n    this.quality = options.quality;\n    this.loadQueue = Object(_mappers_js__WEBPACK_IMPORTED_MODULE_0__[\"getLoadQueue\"])(this.urls);\n    this.duration = options.totalDuration || Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"calcSum\"])(this.urls.map(o => o.chunkDuration));\n\n    this.callback = callback;\n\n    this.create();\n\n    this.isFetching = false;\n    this.isDestroyed = true;\n  }\n\n  create() {\n    this.isDestroyed = false;\n\n    const MSE = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getMediaSource\"])();\n\n    if (!MSE) {\n      console.error('MSE not supported');\n      return;\n    }\n\n    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"isTypeSupported\"])(this.mimeCodec)) {\n      console.error('Unsupported MIME type or codec: ', this.mimeCodec);\n      return;\n    }\n\n    if (this.callback) {\n      this.video.addEventListener('timeupdate', () => {\n        const index = this.getCurrentChunk();\n        if (index < 0) return;\n        this.callback(index);\n      });\n    }\n\n    this.mediaSource = new MSE();\n    this.video.src = URL.createObjectURL(this.mediaSource);\n    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen.bind(this));\n  }\n\n  destroy() {\n    this.isDestroyed = true;\n    this.loadQueue = [];\n  }\n\n  onSourceOpen() {\n    this.mediaSource.duration = this.duration;\n    this.sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);\n    this.appendBuffer();\n    this.getVideo(0);\n  }\n\n  /**\n  * Tells streamer which quality to use\n  * @param {string} quality - quality value\n  */\n\n  setQuality(quality) {\n    const isValid = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"checkQuality\"])(quality, this.loadQueue);\n\n    if (!isValid) {\n      console.error(`${quality} does not exist in ${this.loadQueue}`);\n      return;\n    }\n\n    this.quality = quality;\n    this.loadQueue = Object(_mappers_js__WEBPACK_IMPORTED_MODULE_0__[\"updateLoadQueue\"])(this.loadQueue);\n\n    if (this.isFetching) {\n      console.log('Streamer is busy, it will fetch next chunk when will finish the last one');\n      return;\n    }\n\n    this.onBufferReceive();\n  }\n\n  getCurrentChunk() {\n    const chunkDurations = this.urls.map(u => u.chunkDuration);\n    const { currentTime } = this.video;\n\n    return chunkDurations.findIndex((v, index) => {\n      const valueCurrent = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"calcSum\"])(chunkDurations.slice(0, index));\n      const valueAfter = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"calcSum\"])(chunkDurations.slice(0, index + 1));\n      return currentTime < valueAfter && currentTime >= valueCurrent;\n    });\n  }\n\n  onBufferReceive() {\n    if (this.isEverythingLoaded() || this.isDestroyed) {\n      return;\n    }\n\n    const currIndex = this.getCurrentChunk();\n    const nextIndex = currIndex + 1;\n\n    if (!this.isChunkLoaded(currIndex)) {\n      this.getVideo(currIndex);\n      return;\n    }\n\n    if (this.loadQueue[nextIndex] && !this.isChunkLoaded(nextIndex)) {\n      this.getVideo(nextIndex);\n      return;\n    }\n\n    const notLoaded = this.getNotLoadedChunks(currIndex);\n\n    if (!notLoaded.after.length && !notLoaded.before.length) {\n      return;\n    }\n\n    const loadNext = notLoaded.after.length\n      ? Math.min(...notLoaded.after)\n      : Math.max(...notLoaded.before);\n\n    this.getVideo(loadNext);\n  }\n\n  getVideo(index) {\n    if (this.isDestroyed) {\n      return;\n    }\n\n    this.isFetching = true;\n\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getArrayBuffer\"])(this.loadQueue[index][this.quality].url)\n      .then((file) => {\n        this.isFetching = false;\n        return this.updateQueue(file, index);\n      })\n      .then(() => this.onBufferReceive())\n      .catch((e) => {\n        console.log(index, e.message);\n      });\n  }\n\n  appendBuffer() {\n    if (this.isDestroyed) {\n      return;\n    }\n\n    const index = this.loadQueue.findIndex((source) => {\n      const currentSource = source[this.quality];\n      return currentSource.loaded && !currentSource.pushed;\n    });\n\n    if (index < 0) {\n      requestAnimationFrame(this.appendBuffer.bind(this));\n      return;\n    }\n\n    const chunk = this.loadQueue[index][this.quality];\n\n    if (this.sourceBuffer && !this.sourceBuffer.updating && chunk) {\n      this.sourceBuffer.timestampOffset = index ? index * chunk.mediaDuration : index;\n      this.sourceBuffer.appendBuffer(chunk.mediaBuffer);\n      chunk.pushed = true;\n    }\n\n    // TODO: check if it's necessary to call `endOfStream` method of mediaSource\n\n    requestAnimationFrame(this.appendBuffer.bind(this));\n  }\n\n  isEverythingLoaded() {\n    return this.loadQueue.every(item => item[this.quality].loaded);\n  }\n\n  isChunkLoaded(index) {\n    return this.loadQueue[index][this.quality].loaded;\n  }\n\n  getNotLoadedChunks(currIndex) {\n    return this.loadQueue.reduce((accumulator, currentValue, index) => {\n      if (!this.isChunkLoaded(index)) {\n        const object = { ...accumulator };\n        const property = index < currIndex ? 'before' : 'after';\n        object[property] = object[property].concat(index);\n        return object;\n      }\n\n      return accumulator;\n    }, { before: [], after: [] });\n  }\n\n  updateQueue(mediaBuffer, index) {\n    return new Promise((resolve) => {\n      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getDuration\"])(mediaBuffer)\n        .then((mediaDuration) => {\n          this.loadQueue[index][this.quality] = {\n            ...this.loadQueue[index][this.quality],\n            mediaBuffer,\n            mediaDuration,\n            loaded: true,\n            pushed: false,\n          };\n\n          resolve();\n        });\n    });\n  }\n}\n\nif (window) {\n  window.Streamer = Streamer;\n} else {\n  module.exports = Streamer;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mappers.js":
/*!************************!*\
  !*** ./src/mappers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getLoadQueue = urls => urls.map((url) => {\n  const object = {};\n\n  Object.keys(url).forEach((level) => {\n    object[level] = {\n      url: url[level],\n      loaded: false,\n    };\n  });\n\n  return object;\n});\n\nconst updateLoadQueue = loadQueue => loadQueue.map((object) => {\n  const newObject = {};\n\n  Object.keys(object).forEach((key) => {\n    newObject[key] = {\n      ...object[key],\n      pushed: false,\n    };\n  });\n\n  return newObject;\n});\n\nmodule.exports = {\n  getLoadQueue,\n  updateLoadQueue,\n};\n\n\n//# sourceURL=webpack:///./src/mappers.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getMediaSource = () => {\n  if (!window) return null;\n  return window.MediaSource || window.WebKitMediaSource;\n};\n\nconst isTypeSupported = mimeCodec => getMediaSource().isTypeSupported(mimeCodec);\n\nconst checkOptions = ({\n  mimeCodec, urls, video, totalDuration, quality,\n}) => (\n  (mimeCodec && typeof mimeCodec === 'string')\n    && (urls && urls.length)\n    && (video && video.tagName === 'VIDEO')\n    && (typeof totalDuration === 'number' || typeof totalDuration === 'undefined')\n    && (typeof quality === 'string' && urls.every(url => Object.keys(url).includes(quality)))\n);\n\nconst checkQuality = (quality, loadQueue) => (\n  loadQueue.every(object => Object.keys(object).includes(quality))\n);\n\nconst getArrayBuffer = url => new Promise((resolve, reject) => {\n  fetch(url)\n    .then(response => response.arrayBuffer())\n    .then(response => resolve(response))\n    .catch(reject);\n});\n\nconst getDuration = file => new Promise((resolve) => {\n  const media = document.createElement('video');\n  const url = URL.createObjectURL(new Blob([file]));\n\n  media.onloadedmetadata = () => {\n    resolve(media.duration);\n  };\n\n  media.src = url;\n});\n\nconst calcSum = array => (\n  array.reduce((a, b) => a + b, 0)\n);\n\nmodule.exports = {\n  getMediaSource,\n  isTypeSupported,\n  checkOptions,\n  checkQuality,\n  getArrayBuffer,\n  getDuration,\n  calcSum,\n};\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });