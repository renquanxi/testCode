(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af141"],{"0d90":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn",on:{click:function(e){return t.start()}}},[t._v("开始录音1.14")]),n("button",{staticClass:"btn",on:{click:function(e){return t.stop()}}},[t._v("结束录音2")]),n("audio",{attrs:{id:"a",preload:"metadata",src:t.src,controls:"controls"}})])},o=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("ac1f"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),{name:"luyin",data:function(){return{src:""}},methods:{start:function(){console.log(1),window.dsBridge.call("testAsyn","startRecord",(function(t){console.log("开始录音了"),console.log(t)}))},stop:function(){var t=this;console.log(12),console.log(t.src),window.dsBridge.call("testAsyn","stopRecord",(function(e){console.log("结束录音了"),e=JSON.parse(e);var n=t.dataURLtoFile(e.data.url,"liuyin.mp3","blob");t.src=URL.createObjectURL(n)}))},dataURLtoFile:function(t,e,n){var c=t.split(","),o="mp3",a=atob(c[0]),r=a.length,s=new Uint8Array(r);while(r--)s[r]=a.charCodeAt(r);return"file"==n?new File([s],e,{type:o}):"blob"==n?new Blob([s],{type:o}):void 0},down:function(t,e){var n=URL.createObjectURL(t),c=document.createElement("a");c.setAttribute("style","display:none"),c.setAttribute("href",n),c.setAttribute("download",e),c.click(),URL.revokeObjectURL(n)}}}),r=a,s=n("2877"),l=Object(s["a"])(r,c,o,!1,null,"5cdb45c9",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0af141.5b4314f4.js.map