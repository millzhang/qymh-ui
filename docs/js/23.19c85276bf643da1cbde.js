(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{e1VO:function(t,e,o){"use strict";o.r(e);var r=o("YKMj"),n=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),c=function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.getProduct=function(){this.$axios.get(this,"/v2/book/1220562",{}).then(function(t){console.log(t)})},e=c([Object(r.a)({})],e)}(r.d),l=o("KHd+"),s=Object(l.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"axios"},[e("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[e("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"$axios 请求",rightEmpty:!0}})],1),e("q-row",{attrs:{h:"12"}}),e("q-row",{attrs:{pl:"2",pr:"2"}},[e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),e("q-row",{on:{clicked:this.getProduct}},[this._v("123")])],1)],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);