(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/vue-carousel/dist/vue-carousel.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-carousel/dist/vue-carousel.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-carousel v0.16.2
 * (c) 2018 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=50)}([function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(30)("wks"),i=n(15),o=n(2).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(7),i=n(40),o=n(18),a=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(0)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),i=n(11),o=n(6),a=n(10),s=n(29),u=function(t,e,n){var c,l,f,d,h=t&u.F,p=t&u.G,g=t&u.S,v=t&u.P,y=t&u.B,m=p?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,b=p?i:i[e]||(i[e]={}),x=b.prototype||(b.prototype={});for(c in p&&(n=e),n)f=((l=!h&&m&&void 0!==m[c])?m:n)[c],d=y&&l?s(f,r):v&&"function"==typeof f?s(Function.call,f):f,m&&a(m,c,f,t&u.U),b[c]!=f&&o(b,c,d),v&&x[c]!=f&&(x[c]=f)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(3),i=n(14);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(2),i=n(6),o=n(8),a=n(15)("src"),s=Function.toString,u=(""+s).split("toString");n(11).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this)})},function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(46),i=n(19);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(47),i=n(33);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!1},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){c=n,f=i||{};var a=r(t,e);return g(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,n.push(u)}for(e?g(a=r(t,e)):a=[],i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(h){var i=u++;r=s||(s=v()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(d,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,n){var r=n(89);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(24).default)("1c9d4ce3",r,!1,{})},function(t,e,n){var r=n(91);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(24).default)("6a175419",r,!1,{})},function(t,e,n){var r=n(95);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(24).default)("07c48036",r,!1,{})},function(t,e,n){var r=n(97);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(24).default)("6eff00d0",r,!1,{})},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),i=n(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(20)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(7),i=n(65),o=n(33),a=n(32)("IE_PROTO"),s=function(){},u=function(){var t,e=n(41)("iframe"),r=o.length;for(e.style.display="none",n(68).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(30)("keys"),i=n(15);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3).f,i=n(8),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(47),i=n(33).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(22),i=n(14),o=n(12),a=n(18),s=n(8),u=n(40),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(2),i=n(8),o=n(21),a=n(84),s=n(18),u=n(0),c=n(36).f,l=n(37).f,f=n(3).f,d=n(86).trim,h=r.Number,p=h,g=h.prototype,v="Number"==o(n(31)(g)),y="trim"in String.prototype,m=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?u(function(){g.valueOf.call(n)}):"Number"!=o(n))?a(new p(m(e)),n,h):m(e)};for(var b,x=n(4)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;x.length>P;P++)i(p,b=x[P])&&!i(h,b)&&f(h,b,l(p,b));h.prototype=g,g.constructor=h,n(10)(r,"Number",h)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(4)&&!n(0)(function(){return 7!=Object.defineProperty(n(41)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(9),i=n(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(43),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(61),i=n(62),o=n(17),a=n(12);t.exports=n(63)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(8),i=n(12),o=n(66)(!1),a=n(32)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(2),i=n(11),o=n(20),a=n(49),s=n(3).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){t.exports=n(98)},function(t,e,n){"use strict";var r=n(29),i=n(5),o=n(16),a=n(52),s=n(53),u=n(42),c=n(54),l=n(55);i(i.S+i.F*!n(57)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,d=o(t),h="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g,y=0,m=l(d);if(v&&(g=r(g,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&s(m))for(n=new h(e=u(d.length));e>y;y++)c(n,y,v?g(d[y],y):d[y]);else for(f=m.call(d),n=new h;!(i=f.next()).done;y++)c(n,y,v?a(f,g,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(7);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(17),i=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(3),i=n(14);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(56),i=n(1)("iterator"),o=n(17);t.exports=n(11).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(21),i=n(1)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(1)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";n(59);var r=n(7),i=n(44),o=n(4),a=/./.toString,s=function(t){n(10)(RegExp.prototype,"toString",t,!0)};n(0)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=a.name&&s(function(){return a.call(this)})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(3).f(RegExp.prototype,"flags",{configurable:!0,get:n(44)})},function(t,e,n){for(var r=n(45),i=n(13),o=n(10),a=n(2),s=n(6),u=n(17),c=n(1),l=c("iterator"),f=c("toStringTag"),d=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),g=0;g<p.length;g++){var v,y=p[g],m=h[y],b=a[y],x=b&&b.prototype;if(x&&(x[l]||s(x,l,d),x[f]||s(x,f,y),u[y]=d,m))for(v in r)x[v]||o(x,v,r[v],!0)}},function(t,e,n){var r=n(1)("unscopables"),i=Array.prototype;void 0==i[r]&&n(6)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(20),i=n(5),o=n(10),a=n(6),s=n(17),u=n(64),c=n(34),l=n(69),f=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,p,g,v,y){u(n,e,p);var m,b,x,P=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",C="values"==g,w=!1,O=t.prototype,T=O[f]||O["@@iterator"]||g&&O[g],_=T||P(g),E=g?C?P("entries"):_:void 0,j="Array"==e&&O.entries||T;if(j&&(x=l(j.call(new t)))!==Object.prototype&&x.next&&(c(x,S,!0),r||"function"==typeof x[f]||a(x,f,h)),C&&T&&"values"!==T.name&&(w=!0,_=function(){return T.call(this)}),r&&!y||!d&&!w&&O[f]||a(O,f,_),s[e]=_,s[S]=h,g)if(m={values:C?_:P("values"),keys:v?_:P("keys"),entries:E},y)for(b in m)b in O||o(O,b,m[b]);else i(i.P+i.F*(d||w),e,m);return m}},function(t,e,n){"use strict";var r=n(31),i=n(14),o=n(34),a={};n(6)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(3),i=n(7),o=n(13);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(12),i=n(42),o=n(67);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(43),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(8),i=n(16),o=n(32)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(16),i=n(13);n(71)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(5),i=n(11),o=n(0);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},function(t,e,n){n(48)("asyncIterator")},function(t,e,n){"use strict";var r=n(2),i=n(8),o=n(4),a=n(5),s=n(10),u=n(74).KEY,c=n(0),l=n(30),f=n(34),d=n(15),h=n(1),p=n(49),g=n(48),v=n(75),y=n(76),m=n(7),b=n(9),x=n(12),P=n(18),S=n(14),C=n(31),w=n(77),O=n(37),T=n(3),_=n(13),E=O.f,j=T.f,A=w.f,M=r.Symbol,N=r.JSON,k=N&&N.stringify,L=h("_hidden"),V=h("toPrimitive"),$={}.propertyIsEnumerable,I=l("symbol-registry"),W=l("symbols"),D=l("op-symbols"),F=Object.prototype,R="function"==typeof M,H=r.QObject,B=!H||!H.prototype||!H.prototype.findChild,z=o&&c(function(){return 7!=C(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(F,e);r&&delete F[e],j(t,e,n),r&&t!==F&&j(F,e,r)}:j,U=function(t){var e=W[t]=C(M.prototype);return e._k=t,e},X=R&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},G=function(t,e,n){return t===F&&G(D,e,n),m(t),e=P(e,!0),m(n),i(W,e)?(n.enumerable?(i(t,L)&&t[L][e]&&(t[L][e]=!1),n=C(n,{enumerable:S(0,!1)})):(i(t,L)||j(t,L,S(1,{})),t[L][e]=!0),z(t,e,n)):j(t,e,n)},Y=function(t,e){m(t);for(var n,r=v(e=x(e)),i=0,o=r.length;o>i;)G(t,n=r[i++],e[n]);return t},q=function(t){var e=$.call(this,t=P(t,!0));return!(this===F&&i(W,t)&&!i(D,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,L)&&this[L][t])||e)},J=function(t,e){if(t=x(t),e=P(e,!0),t!==F||!i(W,e)||i(D,e)){var n=E(t,e);return!n||!i(W,e)||i(t,L)&&t[L][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=A(x(t)),r=[],o=0;n.length>o;)i(W,e=n[o++])||e==L||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===F,r=A(n?D:x(t)),o=[],a=0;r.length>a;)!i(W,e=r[a++])||n&&!i(F,e)||o.push(W[e]);return o};R||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(D,n),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),z(this,t,S(1,n))};return o&&B&&z(F,t,{configurable:!0,set:e}),U(t)}).prototype,"toString",function(){return this._k}),O.f=J,T.f=G,n(36).f=w.f=K,n(22).f=q,n(35).f=Q,o&&!n(20)&&s(F,"propertyIsEnumerable",q,!0),p.f=function(t){return U(h(t))}),a(a.G+a.W+a.F*!R,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=_(h.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=M(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),a(a.S+a.F*!R,"Object",{create:function(t,e){return void 0===e?C(t):Y(C(t),e)},defineProperty:G,defineProperties:Y,getOwnPropertyDescriptor:J,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),N&&a(a.S+a.F*(!R||c(function(){var t=M();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!X(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,k.apply(N,r)}}),M.prototype[V]||n(6)(M.prototype,V,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){var r=n(15)("meta"),i=n(9),o=n(8),a=n(3).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(0)(function(){return u(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return c&&f.NEED&&u(t)&&!o(t,r)&&l(t),t}}},function(t,e,n){var r=n(13),i=n(35),o=n(22);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),u=o.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(12),i=n(36).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){var r=n(5);r(r.S,"Math",{sign:n(79)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,n){n(81)("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},function(t,e,n){"use strict";var r=n(6),i=n(10),o=n(0),a=n(19),s=n(1);t.exports=function(t,e,n){var u=s(t),c=n(a,u,""[t]),l=c[0],f=c[1];o(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,l),r(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){"use strict";var r=n(5),i=n(39),o=n(16),a=n(0),s=[].sort,u=[1,2,3];r(r.P+r.F*(a(function(){u.sort(void 0)})||!a(function(){u.sort(null)})||!n(83)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var r=n(9),i=n(85).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(9),i=n(7),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(29)(Function.call,n(37).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(5),i=n(19),o=n(0),a=n(87),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(25);n.n(r).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,'\n.VueCarousel-navigation-button[data-v-453ad8cd] {\n  position: absolute;\n  top: 50%;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n}\n.VueCarousel-navigation-button[data-v-453ad8cd]:focus {\n  outline: 1px solid lightblue;\n}\n.VueCarousel-navigation-next[data-v-453ad8cd] {\n  right: 0;\n  transform: translateY(-50%) translateX(100%);\n  font-family: "system";\n}\n.VueCarousel-navigation-prev[data-v-453ad8cd] {\n  left: 0;\n  transform: translateY(-50%) translateX(-100%);\n  font-family: "system";\n}\n.VueCarousel-navigation--disabled[data-v-453ad8cd] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* Define the "system" font family */\n@font-face {\n  font-family: system;\n  font-style: normal;\n  font-weight: 300;\n  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),\n    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),\n    local("Roboto-Light"), local("DroidSans"), local("Tahoma");\n}\n',""])},function(t,e,n){"use strict";var r=n(26);n.n(r).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel-pagination[data-v-438fd353] {\n  width: 100%;\n  text-align: center;\n}\n.VueCarousel-pagination--top-overlay[data-v-438fd353] {\n  position: absolute;\n  top: 0;\n}\n.VueCarousel-pagination--bottom-overlay[data-v-438fd353] {\n  position: absolute;\n  bottom: 0;\n}\n.VueCarousel-dot-container[data-v-438fd353] {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n}\n.VueCarousel-dot[data-v-438fd353] {\n  display: inline-block;\n  cursor: pointer;\n  appearance: none;\n  border: none;\n  background-clip: content-box;\n  box-sizing: content-box;\n  padding: 0;\n  border-radius: 100%;\n  outline: none;\n}\n.VueCarousel-dot[data-v-438fd353]:focus {\n  outline: 1px solid lightblue;\n}\n",""])},function(t,e,n){var r=n(5);r(r.S+r.F,"Object",{assign:n(93)})},function(t,e,n){"use strict";var r=n(13),i=n(35),o=n(22),a=n(16),s=n(46),u=Object.assign;t.exports=!u||n(0)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,l=i.f,f=o.f;u>c;)for(var d,h=s(arguments[c++]),p=l?r(h).concat(l(h)):r(h),g=p.length,v=0;g>v;)f.call(h,d=p[v++])&&(n[d]=h[d]);return n}:u},function(t,e,n){"use strict";var r=n(27);n.n(r).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel-slide {\n  flex-basis: inherit;\n  flex-grow: 0;\n  flex-shrink: 0;\n  user-select: none;\n  backface-visibility: hidden;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  outline: none;\n}\n.VueCarousel-slide-adjustableHeight {\n  display: table;\n  flex-basis: auto;\n  width: 100%;\n}\n",""])},function(t,e,n){"use strict";var r=n(28);n.n(r).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.VueCarousel--reverse {\n  flex-direction: column-reverse;\n}\n.VueCarousel-wrapper {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.VueCarousel-inner {\n  display: flex;\n  flex-direction: row;\n  backface-visibility: hidden;\n}\n.VueCarousel-inner--center {\n  justify-content: center;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[n("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t._v(" "),t.navigationEnabled?t._t("navigation",[t.isNavigationRequired?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]):t._e(),t._v(" "),t.paginationEnabled?t._t("pagination",[n("pagination",{on:{paginationclick:function(e){t.goToPage(e,"pagination")}}})]):t._e()],2)};r._withStripped=!0,n(51),n(58),n(60),n(45),n(70),n(72),n(73),n(78),n(80),n(82),n(38);var i={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay:function(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage:function(){this.advancePage(this.autoplayDirection)}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel-navigation"},[n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance("backward")}}}),t._v(" "),n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance()}}})])};o._withStripped=!0;var a={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}};function s(t,e,n,r,i,o,a,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n(88);var u=s(a,o,[],!1,null,"453ad8cd",null);u.options.__file="src/Navigation.vue";var c=u.exports,l=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[r("div",{staticClass:"VueCarousel-dot-container",style:"margin-top: "+2*e.carousel.paginationPadding+"px;",attrs:{role:"tablist"}},e._l(e.paginationCount,function(t,n){return r("button",{key:t+"_"+n,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(n)},style:"\n        margin-"+e.paginationPropertyBasedOnPosition+": "+2*e.carousel.paginationPadding+"px;\n        padding: "+e.carousel.paginationPadding+"px;\n        width: "+e.carousel.paginationSize+"px;\n        height: "+e.carousel.paginationSize+"px;\n        background-color: "+(e.isCurrentDot(n)?e.carousel.paginationActiveColor:e.carousel.paginationColor)+";\n      ",attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(n),value:e.getDotTitle(n),"aria-label":e.getDotTitle(n),"aria-selected":e.isCurrentDot(n)?"true":"false"},on:{click:function(t){e.goToPage(n)}}})}))])};l._withStripped=!0;var f=(n(90),s({name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount&&this.carousel.currentPerPage?this.carousel.slideCount-this.carousel.currentPerPage+1:0}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)}}},l,[],!1,null,"438fd353",null));f.options.__file="src/Pagination.vue";var d=f.exports,h=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":this.isActive,"VueCarousel-slide-center":this.isCenter,"VueCarousel-slide-adjustableHeight":this.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!this.isActive,role:"tabpanel"}},[this._t("default")],2)};h._withStripped=!0,n(92);var p={name:"slide",props:["title"],data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",function(t){return t.preventDefault()}),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){for(var t=this.carousel,e=t.currentPage,n=t.perPage,r=[],i=t.$children.filter(function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0}).map(function(t){return t._uid}),o=0;o<n;){var a=i[e*n+o];r.push(a),o++}return r},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.perPage;return!(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){return this.carousel.adjustableHeight}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&this.$emit("slideclick",Object.assign({},t.currentTarget.dataset))}}},g=(n(94),s(p,h,[],!1,null,null,null));g.options.__file="src/Slide.vue";var v=g.exports;function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},x=function(){for(var t in b)if(t in window)return b[t]},P={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:c,Pagination:d,Slide:v},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[i],provide:function(){return{carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:Number,default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===m(t)?(0==t[1]&&(this.dragging=!0,setTimeout(function(){e.dragging=!1},this.refreshRate)),this.$nextTick(function(){e.goToPage(t[0])})):this.$nextTick(function(){e.goToPage(t)})}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("input",t)},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,n=t.sort(function(t,e){return t[0]>e[0]?-1:1}).filter(function(t){return e>=t[0]});return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired:function(){return!(this.slideCount<=this.currentPerPage)},isCenterModeEnabled:function(){return!(!this.centerMode||this.isNavigationRequired)},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout(function(){t.dragging=!1},this.refreshRate),this.$nextTick(function(){t.goToPage(t.pageCount)})},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,data:!0};if(this.adjustableHeight&&(n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}({},n,{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e(function(){t.$nextTick(function(){t.computeCarouselWidth(),t.computeCarouselHeight()})}),this.$parent.$el)for(var r=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<r.length;i++)this.mutationObserver.observe(r[i],n)}},handleNavigation:function(t){this.advancePage(t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),e=0;e<t.length;e++)t[e].clientWidth>0&&(this.carouselWidth=t[e].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return"auto";var e=this.currentPerPage*(this.currentPage+1)-1,n=function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(Array(this.currentPerPage)).map(function(n,r){return t.getSlide(e+r)}).reduce(function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)},0);return this.currentHeight=0===n?"auto":"".concat(n,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(function(e){return e.tag&&null!==e.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))}).length||0},getSlide:function(t){var e=this;return this.$children.filter(function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))})[t]},goToPage:function(t){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):Math.min(this.slideWidth*t,this.maxOffset),this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t)},onStart:function(t){document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){var r=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(r/2)}this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,i=this.dragStartY-n;if(!(this.isTouch&&Math.abs(r)<Math.abs(i))){t.stopImmediatePropagation(),this.dragOffset=r;var o=this.offset+this.dragOffset;o<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):o>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout(function(){t.dragging=!1},this.refreshRate)},render:function(){this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),n=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+n)/2?this.offset=n:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight:function(){this.getCarouselHeight()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart")},handleTransitionEnd:function(){this.$emit("transitionEnd")}},mounted:function(){window.addEventListener("resize",function(t,e,n){var r;return function(){var i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(void 0)},e),i&&t.apply(void 0)}}(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=x(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=x(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}},S=(n(96),s(P,r,[],!1,null,null,null));S.options.__file="src/Carousel.vue";var C=S.exports;n.d(e,"Carousel",function(){return C}),n.d(e,"Slide",function(){return v}),e.default={install:function(t){t.component("carousel",C),t.component("slide",v)}}}])});

/***/ }),

/***/ "./node_modules/vue-nestable/dist/vue-nestable.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-nestable/dist/vue-nestable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var store={};var groupsObserver = {methods:{registerNestable:function c(a){var b=this._getByGroup(a.group);b.onDragStartListeners.push(a.onDragStart),b.onMouseEnterListeners.push(a.onMouseEnter),b.onMouseMoveListeners.push(a.onMouseMove);},notifyDragStart:function k(a,b,c){var d=this._getByGroup(a),e=!0,f=!1,g=void 0;try{for(var h,i,j=d.onDragStartListeners[Symbol.iterator]();!(e=(h=j.next()).done);e=!0)i=h.value,i(b,c);}catch(a){f=!0,g=a;}finally{try{e||null==j.return||j.return();}finally{if(f)throw g}}},notifyMouseEnter:function l(a,b,c,d){var e=this._getByGroup(a),f=!0,g=!1,h=void 0;try{for(var i,j,k=e.onMouseEnterListeners[Symbol.iterator]();!(f=(i=k.next()).done);f=!0)j=i.value,j(b,c,d);}catch(a){g=!0,h=a;}finally{try{f||null==k.return||k.return();}finally{if(g)throw h}}},notifyMouseMove:function j(a,b){var c=this._getByGroup(a),d=!0,e=!1,f=void 0;try{for(var g,h,i=c.onMouseMoveListeners[Symbol.iterator]();!(d=(g=i.next()).done);d=!0)h=g.value,h(b);}catch(a){e=!0,f=a;}finally{try{d||null==i.return||i.return();}finally{if(e)throw f}}},_getByGroup:function b(a){// the group already exists, return the reference
  return store[a]?store[a]:(store[a]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null},store[a]);// otherwise create a new object for the group
  }}};

  var script = {name:"NestableItem",mixins:[groupsObserver],props:{item:{type:Object,required:!0,default:function b(){return {}}},index:{type:Number,required:!1,default:null},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function b(){return {}}}},inject:["listId","group"],computed:{isDragging:function c(){var b=this.options.dragItem;return !this.isCopy&&b&&b[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function b(){return this.item[this.options.childrenProp]&&0<this.item[this.options.childrenProp].length},hasHandle:function b(){return !!this.$scopedSlots.handler},normalizedClassProp:function c(){var b=this.item[this.options.classProp];// if the classprop is not set, return an empty array
  return b?Array.isArray(b)?b:"object"===("undefined"==typeof a?"undefined":_typeof(a))?[b]:[b]:[]},itemClasses:function c(){var b=this.isDragging?["is-dragging"]:[];return ["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(b,_toConsumableArray(this.normalizedClassProp))}},methods:{onMouseEnter:function d(b){if(this.options.dragItem){var c=this.item||this.$parent.item;this.notifyMouseEnter(this.group,b,this.listId,c);}}}};

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.itemClasses},[_c('div',{staticClass:"nestable-item-content",on:{"mouseenter":_vm.onMouseEnter}},[_vm._t("default",null,{index:_vm.index,item:_vm.item})],2),_vm._v(" "),(_vm.hasChildren)?_c('ol',{staticClass:"nestable-list"},[_vm._l((_vm.item[_vm.options.childrenProp]),function(child,childIndex){return [_c('NestableItem',{key:childIndex,attrs:{"index":childIndex,"item":child,"options":_vm.options,"is-copy":_vm.isCopy},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})]})],2):_vm._e()])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "NestableItem.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var NestableItem = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  //
  var script$1 = {name:"Placeholder",mixins:[groupsObserver],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function a(){return {}}}},inject:["listId","group"],computed:{isDragging:function b(){var a=this.options.dragItem;return a}},methods:{onMouseEnter:function b(a){this.options.dragItem&&this.notifyMouseEnter(this.group,a,this.listId,null);}}};

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('div',{staticClass:"nestable-list-empty",on:{"mouseenter":_vm.onMouseEnter}},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "Placeholder.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Placeholder = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var nestableHelpers = {methods:{// ––––––––––––––––––––––––––––––––––––
  // Getter methods
  // ––––––––––––––––––––––––––––––––––––
  getPathById:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=[];return c.every(function(c,e){if(c[b.keyProp]===a)d.push(e);else if(c[b.childrenProp]){var f=b.getPathById(a,c[b.childrenProp]);f.length&&(d=d.concat(e).concat(f));}return 0===d.length}),d},getItemByPath:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=null;return a.forEach(function(a){var e=d&&d[b.childrenProp]?d[b.childrenProp]:c;d=e[a];}),d},getItemDepth:function c(a){var b=1;if(a[this.childrenProp]&&0<a[this.childrenProp].length){var d=a[this.childrenProp].map(this.getItemDepth);b+=Math.max.apply(Math,_toConsumableArray(d));}return b},getSplicePath:function h(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c={},d=b.numToRemove||0,e=b.itemsToInsert||[],f=a.length-1,g=c;return a.forEach(function(a,c){if(c===f)g.$splice=[[a,d].concat(_toConsumableArray(e))];else{var h={};g[a]=_defineProperty({},b.childrenProp,h),g=h;}}),c},getRealNextPath:function e(a,b){var c=a.length-1,d=b.length-1;if(a.length<b.length){// move into deep
  var f=!1;return b.map(function(e,g){return f?g===d?e+1:e:"number"==typeof a[g]?b[g]>a[g]&&g===c?(f=!0,e-1):e:e})}if(a.length===b.length&&b[d]>a[d])// if move bottom + move to item with children => make it a first child instead of swap
  {var g=this.getItemByPath(b);if(g[this.childrenProp]&&g[this.childrenProp].length&&!this.isCollapsed(g))return b.slice(0,-1).concat(b[d]-1).concat(0)}return b}// getItemOptions() {
  //   const { renderItem, renderCollapseIcon, handler, childrenProp } = this.props;
  //   const { dragItem } = this.state;
  //   return {
  //     dragItem,
  //     childrenProp,
  //     renderItem,
  //     renderCollapseIcon,
  //     handler,
  //     onDragStart: this.onDragStart,
  //     onMouseEnter: this.onMouseEnter,
  //     isCollapsed: this.isCollapsed,
  //     onToggleCollapse: this.onToggleCollapse
  //   };
  // }
  }};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function (condition, format, a, b, c, d, e, f) {

    if (!condition) {
      var error;

      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame

      throw error;
    }
  };

  var browser = invariant;

  var immutabilityHelper = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var splice = Array.prototype.splice;
    var toString = Object.prototype.toString;

    function type(obj) {
      return toString.call(obj).slice(8, -1);
    }

    var assign = Object.assign ||
    /* istanbul ignore next */
    function (target, source) {
      getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      });
      return target;
    };

    var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ? function (obj) {
      return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
    }
    /* istanbul ignore next */
    : function (obj) {
      return Object.keys(obj);
    };

    function copy(object) {
      return Array.isArray(object) ? assign(object.constructor(object.length), object) : type(object) === 'Map' ? new Map(object) : type(object) === 'Set' ? new Set(object) : object && typeof object === 'object' ? assign(Object.create(Object.getPrototypeOf(object)), object)
      /* istanbul ignore next */
      : object;
    }

    var Context =
    /** @class */
    function () {
      function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this); // Deprecated: update.extend, update.isEquals and update.newContext

        this.update.extend = this.extend = this.extend.bind(this);

        this.update.isEquals = function (x, y) {
          return x === y;
        };

        this.update.newContext = function () {
          return new Context().update;
        };
      }

      Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
          return this.update.isEquals;
        },
        set: function (value) {
          this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
      });

      Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
      };

      Context.prototype.update = function (object, $spec) {
        var _this = this;

        var spec = typeof $spec === 'function' ? {
          $apply: $spec
        } : $spec;

        if (!(Array.isArray(object) && Array.isArray(spec))) {
          browser(!Array.isArray(spec), 'update(): You provided an invalid spec to update(). The spec may ' + 'not contain an array except as the value of $set, $push, $unshift, ' + '$splice or any custom command allowing an array value.');
        }

        browser(typeof spec === 'object' && spec !== null, 'update(): You provided an invalid spec to update(). The spec and ' + 'every included key path must be plain objects containing one of the ' + 'following commands: %s.', Object.keys(this.commands).join(', '));
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
          if (hasOwnProperty.call(_this.commands, key)) {
            var objectWasNextObject = object === nextObject;
            nextObject = _this.commands[key](spec[key], nextObject, spec, object);

            if (objectWasNextObject && _this.isEquals(nextObject, object)) {
              nextObject = object;
            }
          } else {
            var nextValueForKey = type(object) === 'Map' ? _this.update(object.get(key), spec[key]) : _this.update(object[key], spec[key]);
            var nextObjectValue = type(nextObject) === 'Map' ? nextObject.get(key) : nextObject[key];

            if (!_this.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
              if (nextObject === object) {
                nextObject = copy(object);
              }

              if (type(nextObject) === 'Map') {
                nextObject.set(key, nextValueForKey);
              } else {
                nextObject[key] = nextValueForKey;
              }
            }
          }
        });
        return nextObject;
      };

      return Context;
    }();

    exports.Context = Context;
    var defaultCommands = {
      $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
      },
      $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
      },
      $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
          invariantSplice(args);

          if (nextObject === originalObject && args.length) {
            nextObject = copy(originalObject);
          }

          splice.apply(nextObject, args);
        });
        return nextObject;
      },
      $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
      },
      $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
          nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
      },
      $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
          if (Object.hasOwnProperty.call(nextObject, key)) {
            if (nextObject === originalObject) {
              nextObject = copy(originalObject);
            }

            delete nextObject[key];
          }
        });
        return nextObject;
      },
      $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');

        if (type(nextObject) === 'Map') {
          values.forEach(function (_a) {
            var key = _a[0],
                value = _a[1];

            if (nextObject === originalObject && nextObject.get(key) !== value) {
              nextObject = copy(originalObject);
            }

            nextObject.set(key, value);
          });
        } else {
          values.forEach(function (value) {
            if (nextObject === originalObject && !nextObject.has(value)) {
              nextObject = copy(originalObject);
            }

            nextObject.add(value);
          });
        }

        return nextObject;
      },
      $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
          if (nextObject === originalObject && nextObject.has(key)) {
            nextObject = copy(originalObject);
          }

          nextObject.delete(key);
        });
        return nextObject;
      },
      $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
          if (value[key] !== nextObject[key]) {
            if (nextObject === originalObject) {
              nextObject = copy(originalObject);
            }

            nextObject[key] = value[key];
          }
        });
        return nextObject;
      },
      $apply: function (value, original) {
        invariantApply(value);
        return value(original);
      }
    };
    var defaultContext = new Context();
    exports.isEquals = defaultContext.update.isEquals;
    exports.extend = defaultContext.extend;
    exports.default = defaultContext.update; // @ts-ignore

    exports.default.default = module.exports = assign(exports.default, exports); // invariants

    function invariantPushAndUnshift(value, spec, command) {
      browser(Array.isArray(value), 'update(): expected target of %s to be an array; got %s.', command, value);
      invariantSpecArray(spec[command], command);
    }

    function invariantSpecArray(spec, command) {
      browser(Array.isArray(spec), 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, spec);
    }

    function invariantSplices(value, spec) {
      browser(Array.isArray(value), 'Expected $splice target to be an array; got %s', value);
      invariantSplice(spec.$splice);
    }

    function invariantSplice(value) {
      browser(Array.isArray(value), 'update(): expected spec of $splice to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', value);
    }

    function invariantApply(fn) {
      browser(typeof fn === 'function', 'update(): expected spec of $apply to be a function; got %s.', fn);
    }

    function invariantSet(spec) {
      browser(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with $set');
    }

    function invariantMerge(target, specValue) {
      browser(specValue && typeof specValue === 'object', 'update(): $merge expects a spec of type \'object\'; got %s', specValue);
      browser(target && typeof target === 'object', 'update(): $merge expects a target of type \'object\'; got %s', target);
    }

    function invariantMapOrSet(target, command) {
      var typeOfTarget = type(target);
      browser(typeOfTarget === 'Map' || typeOfTarget === 'Set', 'update(): %s expects a target of type Set or Map; got %s', command, typeOfTarget);
    }
  });
  var update = unwrapExports(immutabilityHelper);
  var immutabilityHelper_1 = immutabilityHelper.Context;
  var immutabilityHelper_2 = immutabilityHelper.isEquals;
  var immutabilityHelper_3 = immutabilityHelper.extend;

  var closest=function(a,b){// closest(e.target, '.field')
  for(;a;){if(a.matches&&a.matches(b))return a;a=a.parentNode;}return null};var getOffsetRect=function(a){var b=Math.round,c=a.getBoundingClientRect(),d=document.body,e=document.documentElement,f=window.pageYOffset||e.scrollTop||d.scrollTop,g=window.pageXOffset||e.scrollLeft||d.scrollLeft,h=e.clientTop||d.clientTop||0,i=e.clientLeft||d.clientLeft||0,j=c.top+f-h,k=c.left+g-i;return {top:b(j),left:b(k)}};var getTotalScroll=function(a){for(var b=0,c=0;a=a.parentNode;)b+=a.scrollTop||0,c+=a.scrollLeft||0;return {top:b,left:c}};var getTransformProps=function(a,b){return {transform:"translate("+a+"px, "+b+"px)"}};var listWithChildren=function(a,b){return a.map(function(a){return _objectSpread({},a,_defineProperty({},b,a[b]?listWithChildren(a[b],b):[]))})};

  var script$2 = {name:"VueNestable",components:{NestableItem:NestableItem,Placeholder:Placeholder},mixins:[nestableHelpers,groupsObserver],props:{value:{type:Array,required:!0,default:function a(){return []}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function a(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1}},provide:function a(){return {listId:this.listId,group:this.group,onDragEnd:this.onDragEnd}},data:function a(){return {itemsOld:null,// revert to copy in case of cancelling drag
  dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function a(){return 0===this.value.length},itemOptions:function a(){return {dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var a=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),b={};return a&&(b.width="".concat(a.clientWidth,"px")),this.elCopyStyles&&(b=_objectSpread({},b,this.elCopyStyles)),b}},created:function b(){var a=listWithChildren(this.value,this.childrenProp);this.$emit("input",a),this.isDirty=!1,this.registerNestable(this);},beforeDestroy:function a(){this.stopTrackMouse();},methods:{startTrackMouse:function a(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown);},stopTrackMouse:function a(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null;},onDragStart:function c(a,b){a&&(a.preventDefault(),a.stopPropagation()),this.el=closest(a.target,".nestable-item"),this.startTrackMouse(),this.dragItem=b,this.itemsOld=this.value,this.onMouseMove(a);},onDragEnd:function c(a,b){a&&a.preventDefault(),this.stopTrackMouse(),this.el=null,b?this.dragRevert():this.dragApply();},onKeyDown:function b(a){27===a.which&&this.onDragEnd(null,!0);},getXandYFromEvent:function h(a){var b=a.clientX,c=a.clientY,d=a.targetTouches;// get touch event
  // if there is a touch event, use this
  if(d){var i=d[0];b=i.clientX,c=i.clientY;// we rely on the mouseenter event to track if a node should be moved
  // since this event does not exist, we need to simulate it.
  var e=new Event("mouseenter"),f=document.elementFromPoint(b,c),g=f&&(f.closest(".nestable-item-content")||f.closest(".nestable-list-empty"));g&&g.dispatchEvent(e);}return {clientX:b,clientY:c}},onMouseMove:function j(a){var b=Math.abs,c=this.getXandYFromEvent(a),d=c.clientX,e=c.clientY,f=getTransformProps(d,e),g=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(!this.elCopyStyles){var h=getOffsetRect(this.el),i=getTotalScroll(this.el);this.elCopyStyles=_objectSpread({marginTop:"".concat(h.top-e-i.top,"px"),marginLeft:"".concat(h.left-d-i.left,"px")},f);}else{for(var k in this.elCopyStyles=_objectSpread({},this.elCopyStyles,f),f)f.hasOwnProperty(k)&&(g.style[k]=f[k]);var l=d-this.mouse.last.x;0<=l&&0<=this.mouse.shift.x||0>=l&&0>=this.mouse.shift.x?this.mouse.shift.x+=l:this.mouse.shift.x=0,this.mouse.last.x=d,b(this.mouse.shift.x)>this.threshold&&(0<this.mouse.shift.x?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0);}},moveItem:function i(a){var b=a.dragItem,c=a.pathFrom,d=a.pathTo,e=this.getRealNextPath(c,d),f=this.getSplicePath(c,{numToRemove:1,childrenProp:this.childrenProp}),g=this.getSplicePath(e,{numToRemove:0,itemsToInsert:[b],childrenProp:this.childrenProp}),h=this.value;h=update(h,f),h=update(h,g),this.isDirty=!0,this.$emit("input",h);},tryIncreaseDepth:function e(a){var b=this.getPathById(a[this.keyProp]),c=b[b.length-1],d=b.length+this.getItemDepth(a);// has previous sibling and isn't at max depth
  if(0<c&&d<=this.maxDepth){var f=this.getItemByPath(b.slice(0,-1).concat(c-1));// previous sibling is not collapsed
  if(f[this.childrenProp]&&(!f[this.childrenProp].length||!this.isCollapsed(f))){var g=b.slice(0,-1).concat(c-1).concat(f[this.childrenProp].length);// if collapsed by default
  // and was no children here
  // open this node
  // let collapseProps = {};
  // if (collapsed && !prevSibling[this.childrenProp].length) {
  //   collapseProps = this.onToggleCollapse(prevSibling, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  this.moveItem({dragItem:a,pathFrom:b,pathTo:g});}}},tryDecreaseDepth:function d(a){var b=this.getPathById(a[this.keyProp]),c=b[b.length-1];// has parent
  if(1<b.length){var e=this.getItemByPath(b.slice(0,-1));// is last (by order) item in array
  if(c+1===e[this.childrenProp].length){var f=b.slice(0,-1);// if collapsed by default
  // and is last (by count) item in array
  // remove this node from list of open nodes
  // let collapseProps = {};
  // if (collapsed && parent[this.childrenProp].length == 1) {
  //   collapseProps = this.onToggleCollapse(parent, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  f[f.length-1]+=1,this.moveItem({dragItem:a,pathFrom:b,pathTo:f});}}},onMouseEnter:function i(a,b,c){a&&(a.preventDefault(),a.stopPropagation());var d=this.dragItem;// if the event does not have a valid item that belongs to this list, ignore it
  if(null===c||d[this.keyProp]!==c[this.keyProp]){// calculate the path the item is comming from
  var e=this.getPathById(d[this.keyProp]);// if the event is not emitted from this list and the item was not removed from this list,
  // we can ignore this event
  if(b===this.listId||0!==e.length){var f=null===c?0<e.length?[]:[0]:this.getPathById(c[this.keyProp]);// if we are dragging to an empty list, we need to remove
  // the item from the origin list and append it to the start of the new list
  // if the move to the new depth is greater than max depth,
  // don't move
  var g=this.getRealNextPath(e,f).length+(this.getItemDepth(d)-1);if(!(g>this.maxDepth)){// if collapsed by default
  // and move last (by count) child
  // remove parent node from list of open nodes
  var h={};if(this.collapsed&&1<e.length){var j=this.getItemByPath(e.slice(0,-1));1===j[this.childrenProp].length&&(h=this.onToggleCollapse(j,!0));}this.moveItem({dragItem:d,pathFrom:e,pathTo:f},h);}}}},isCollapsed:function b(a){return !!(-1<this.collapsedGroups.indexOf(a[this.keyProp])^this.collapsed)},dragApply:function a(){this.$emit("change",this.dragItem),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;},dragRevert:function a(){this.$emit("input",this.itemsOld),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;}}};

  /* script */
              const __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['nestable', ("nestable-" + _vm.group)]},[_c('ol',{staticClass:"nestable-list nestable-group"},[(_vm.listIsEmpty)?_c('Placeholder',{attrs:{"options":_vm.itemOptions}},[_vm._t("placeholder",[_vm._v("\n        No content\n      ")])],2):_vm._e(),_vm._v(" "),_vm._l((_vm.value),function(item,index){return [_c('NestableItem',{key:index,attrs:{"index":index,"item":item,"options":_vm.itemOptions},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})]})],2),_vm._v(" "),(_vm.dragItem)?[_c('div',{staticClass:"nestable-drag-layer"},[_c('ol',{staticClass:"nestable-list",style:(_vm.listStyles)},[_c('NestableItem',{attrs:{"item":_vm.dragItem,"options":_vm.itemOptions,"is-copy":true},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})],1)])]:_vm._e()],2)};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "VueNestable.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var VueNestable = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //
  var script$3 = {name:"VueNestableHandle",mixins:[groupsObserver],props:{item:{type:Object,required:!1,default:function a(){return {}}}},inject:["group","onDragEnd"],methods:{dragstart:function c(a){var b=this.item||this.$parent.item;this.notifyDragStart(this.group,a,b);},touchend:function b(a){this.onDragEnd(a);},touchmove:function b(a){this.notifyMouseMove(this.group,a);}}};

  /* script */
              const __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nestable-handle",attrs:{"draggable":""},on:{"dragstart":_vm.dragstart,"touchstart":_vm.dragstart,"touchend":_vm.touchend,"touchmove":_vm.touchmove}},[_vm._t("default")],2)};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "VueNestableHandle.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var VueNestableHandle = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  var index = {install:function b(a){a.component("VueNestable",VueNestable),a.component("VueNestableHandle",VueNestableHandle);}};

  exports.VueNestable = VueNestable;
  exports.VueNestableHandle = VueNestableHandle;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ })

}]);