require("source-map-support/source-map-support.js").install(),module.exports=function(e){var r={};function __webpack_require__(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,n){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)__webpack_require__.d(n,t,function(r){return e[r]}.bind(null,t));return n},__webpack_require__.n=function(e){var r=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(e,r){e.exports=require("electron")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("url")},function(e,r,n){e.exports=n(4)},function(e,r,n){"use strict";n.r(r);var t=n(0),o=n(1),_=n.n(o),a=n(2),u=n.n(a);let i;function createMainWindow(){const e=new t.BrowserWindow({title:"Game Installer",frame:!1,width:550,height:350,resizable:!1,fullscreenable:!1,maximizable:!1,backgroundColor:"#0c0d10",webPreferences:{nodeIntegration:!0,contextIsolation:!1,enableRemoteModule:!0}});return e.loadURL(u.a.format({pathname:_.a.join(__dirname,"index.html"),protocol:"file",slashes:!0})),e.on("closed",()=>i=null),e.webContents.on("devtools-opened",()=>{e.focus(),setImmediate(()=>e.focus())}),e.webContents.on("new-window",(e,r)=>{e.preventDefault(),t.shell.openExternal(r)}),e}t.app.name="Game",t.app.on("window-all-closed",()=>t.app.quit()),t.app.on("activate",()=>{null===i&&(i=createMainWindow())}),t.app.on("ready",async()=>i=createMainWindow())}]);
//# sourceMappingURL=main.js.map