!function(e){var t={};function i(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t){const i=()=>window?window.MediaSource||window.WebKitMediaSource:null;e.exports={getMediaSource:i,isTypeSupported:e=>i().isTypeSupported(e),checkOptions:({chunkDuration:e,mimeCodec:t,urls:i,video:r,totalDuration:o,quality:u})=>e&&"number"==typeof e&&t&&"string"==typeof t&&i&&i.length&&r&&"VIDEO"===r.tagName&&("number"==typeof o||void 0===o)&&"string"==typeof u&&i.every(e=>Object.keys(e).includes(u)),getArrayBuffer:e=>new Promise((t,i)=>{fetch(e).then(e=>e.arrayBuffer()).then(e=>t(e)).catch(i)}),getDuration:e=>new Promise(t=>{const i=document.createElement("video"),r=URL.createObjectURL(new Blob([e]));i.onloadedmetadata=(()=>{t(i.duration)}),i.src=r})}},function(e,t){e.exports={getLoadQueue:e=>e.map(e=>{const t={};return Object.keys(e).forEach(i=>{t[i]={url:e[i],loaded:!1}}),t}),updateLoadQueue:e=>e.map(e=>{const t={};return Object.keys(e).forEach(i=>{t[i]={...e[i],pushed:!1}}),t})}},function(e,t,i){"use strict";i.r(t),function(e){var t=i(1),r=i(0);class o{constructor(e){Object(r.checkOptions)(e)?(this.chunkDuration=e.chunkDuration,this.mimeCodec=e.mimeCodec,this.urls=e.urls,this.video=e.video,this.quality=e.quality,this.loadQueue=Object(t.getLoadQueue)(this.urls),this.duration=e.totalDuration||this.loadQueue.length*this.chunkDuration,this.connect(),this.isFetching=!1):console.error("Invalid Configuration")}connect(){Object(r.getMediaSource)()?Object(r.isTypeSupported)(this.mimeCodec)?(this.mediaSource=new MediaSource,this.video.src=URL.createObjectURL(this.mediaSource),this.mediaSource.addEventListener("sourceopen",this.onSourceOpen.bind(this))):console.error("Unsupported MIME type or codec: ",this.mimeCodec):console.error("MSE not supported")}onSourceOpen(){this.mediaSource.duration=this.duration,this.sourceBuffer=this.mediaSource.addSourceBuffer(this.mimeCodec),this.appendBuffer(),this.getVideo(0)}setQuality(e){this.quality=e,this.loadQueue=Object(t.updateLoadQueue)(this.loadQueue),this.isFetching?console.log("Streamer is busy, it will fetch next chunk when will finish the last one"):this.onBufferReceive()}getCurrentChunk(){return Math.floor(this.video.currentTime/this.chunkDuration)}onBufferReceive(){if(this.isEverythingLoaded())return;const e=this.getCurrentChunk(),t=e+1;if(!this.isChunkLoaded(e))return void this.getVideo(e);if(this.loadQueue[t]&&!this.isChunkLoaded(t))return void this.getVideo(t);const i=this.loadQueue.findIndex(e=>!e[this.quality].loaded);i>-1&&this.getVideo(i)}getVideo(e){this.isFetching=!0,Object(r.getArrayBuffer)(this.loadQueue[e][this.quality].url).then(t=>(this.isFetching=!1,this.updateQueue(t,e))).then(()=>this.onBufferReceive()).catch(t=>{console.log(e,t.message)})}appendBuffer(){const e=this.loadQueue.findIndex(e=>{const t=e[this.quality];return t.loaded&&!t.pushed});if(e<0)return void requestAnimationFrame(this.appendBuffer.bind(this));const t=this.loadQueue[e][this.quality];this.sourceBuffer&&!this.sourceBuffer.updating&&t&&(this.sourceBuffer.timestampOffset=e?e*t.mediaDuration:e,this.sourceBuffer.appendBuffer(t.mediaBuffer),t.pushed=!0),requestAnimationFrame(this.appendBuffer.bind(this))}isEverythingLoaded(){return this.loadQueue.every(e=>e[this.quality].loaded)}isChunkLoaded(e){return this.loadQueue[e][this.quality].loaded}updateQueue(e,t){return new Promise(i=>{Object(r.getDuration)(e).then(r=>{this.loadQueue[t][this.quality]={...this.loadQueue[t][this.quality],mediaBuffer:e,mediaDuration:r,loaded:!0,pushed:!1},i()})})}}window?window.Streamer=o:e.exports=o}.call(this,i(3)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);