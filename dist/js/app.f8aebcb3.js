(function(e){function t(t){for(var n,c,a=t[0],i=t[1],f=t[2],l=0,s=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(s.length)s.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-6f0b9788":"94e3ef25"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var f=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",f.name="ChunkLoadError",f.type=n,f.request=u,r[1](f)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=f;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"4ffd":function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("4ffd")}}),n("el-button",{on:{click:e.goRouter}},[e._v("录音")]),n("router-view")],1)},u=[],c={name:"App",methods:{goRouter:function(){this.$router.push({name:"recorderDemo"})}}},a=c,i=(r("034f"),r("2877")),f=Object(i["a"])(a,o,u,!1,null,null,null),l=f.exports,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["default"].use(p["a"]);var s=[{path:"/recorderDemo",name:"recorderDemo",component:function(){return r.e("chunk-6f0b9788").then(r.bind(null,"3766"))}}],d=new p["a"]({routes:s}),h=r("5c96"),m=r.n(h);r("0fae");n["default"].use(m.a),n["default"].config.productionTip=!1,new n["default"]({router:d,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.f8aebcb3.js.map