(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{684:function(e,t,n){"use strict";n.r(t);var r,o=n(1),i=n.n(o),a=(n(70),n(18)),u=n(23),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),l(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["component"]),r=this.props.location,o=this.isAuthenticated(),u=this.isExpired();return i.a.createElement(a.c,c({},n,{render:function(e){return!u&&o?i.a.createElement(t,e):f(a.b,{to:{pathname:"/login",state:{from:r}}})}}))}},{key:"isAuthenticated",value:function(){var e=u.b.getUserInfo()?u.b.getUserInfo():null,t=!(!u.b.getToken()||!function(e){return e&&e.id&&e.id.length>0}(e));return t}},{key:"isExpired",value:function(){return u.b.isExpiredToken(u.b.getToken())}}]),t}();t.default=Object(a.e)(p)}}]);