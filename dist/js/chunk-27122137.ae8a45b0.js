(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27122137"],{"7c46":function(t,n,o){},"9bba":function(t,n,o){"use strict";o.r(n);var c=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("span",[t._v("msqqq666.14")]),o("div",{staticClass:"box"},[o("div",{staticClass:"son"})]),o("div",{staticStyle:{height:"95%",width:"95%",margin:"auto"},attrs:{id:"myPDF"}})])}],a={name:"pdf",data:function(){return{scaleVal:""}},created:function(){},mounted:function(){window.$("#myPDF").pdf({source:"https://qinghuansmile.top/testCode/demo.pdf",loaded:this.loaded})},methods:{init:function(t){window.cat.touchjs.init(t,(function(n,o,c,e){t.css({left:n,top:o,transform:"scale("+c+") rotate("+e+"deg)","-webkit-transform":"scale("+c+") rotate("+e+"deg)"})}))},loaded:function(){var t=this,n=window.$("canvas");document.querySelector("canvas").className+="canvas",t.init(n),console.log("缩放比例：",window.cat.touchjs.scaleVal),window.cat.touchjs.drag(n,(function(t,n){console.log("left",t),console.log("top",n)})),window.cat.touchjs.scale(n,(function(o){window.cat.touchjs.scaleVal<=1&&(t.init(n),console.log("init:",window.cat.touchjs.top,window.cat.touchjs.left))}))}}},s=a,i=(o("dae0"),o("2877")),l=Object(i["a"])(s,c,e,!1,null,null,null);n["default"]=l.exports},dae0:function(t,n,o){"use strict";o("7c46")}}]);
//# sourceMappingURL=chunk-27122137.ae8a45b0.js.map