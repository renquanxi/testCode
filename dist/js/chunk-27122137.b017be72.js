(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27122137"],{"7c46":function(t,e,n){},"9bba":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("msqqq444.11")]),n("div",{staticClass:"box"},[n("div",{staticClass:"son"})]),n("div",{staticStyle:{height:"95%",width:"95%",margin:"auto"},attrs:{id:"myPDF"}})])}];console.log(document.querySelector(".box"));var c={name:"pdf",data:function(){return{scaleVal:""}},created:function(){},mounted:function(){window.$("#myPDF").pdf({source:"https://qinghuansmile.top/testCode/demo.pdf",loaded:this.loaded})},methods:{loaded:function(){var t=window.$("canvas");document.querySelector("canvas").className+="canvas",window.cat.touchjs.init(t,(function(e,n,a,o){t.css({left:e,top:n,transform:"scale("+a+") rotate("+o+"deg)","-webkit-transform":"scale("+a+") rotate("+o+"deg)"})})),window.cat.touchjs.scale(t,(function(t){this.scaleVal=window.cat.touchjs.scaleVal}))}},watch:{scaleVal:{handler:function(t){console.log(t),window.cat.touchjs.scaleVal>1&&window.cat.touchjs.drag($targetObj,(function(t,e){console.log("left",t),console.log("top",e)}))}}}},s=c,l=(n("dae0"),n("2877")),i=Object(l["a"])(s,a,o,!1,null,null,null);e["default"]=i.exports},dae0:function(t,e,n){"use strict";n("7c46")}}]);
//# sourceMappingURL=chunk-27122137.b017be72.js.map