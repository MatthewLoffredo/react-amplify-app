(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KnAW:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.getScrollbarWidth=i,t.setScrollbarWidth=s,t.isBodyOverflowing=c,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)},t.setGlobalCssModule=function(e){r=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=r);return t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach(function(o){-1===t.indexOf(o)&&(n[o]=e[o])}),n},t.pick=function(e,t){var n,o=Array.isArray(t)?t:[t],r=o.length,a={};for(;r>0;)n=o[r-=1],a[n]=e[n];return a},t.warnOnce=l,t.deprecated=function(e,t){return function(n,o,r){null!==n[o]&&"undefined"!==typeof n[o]&&l('"'+o+'" property of "'+r+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,o,r].concat(i))}},t.DOMElement=f,t.isReactRefObj=g,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===b(e))return NaN;if(v(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=v(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var o=/^0b[01]+$/i.test(e);return o||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),o?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=v,t.isFunction=h,t.findDOMElements=E,t.isArrayOrNodeList=w,t.getTarget=function(e,t){var n=E(e);if(w(n)&&!t)return n[0];return n},t.addMultipleEventListeners=function(e,t,n,o){var r=e;w(r)||(r=[r]);var a=n;"string"===typeof a&&(a=a.split(/\s+/));if(!w(r)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,function(e){Array.prototype.forEach.call(r,function(n){n.addEventListener(e,t,o)})}),function(){Array.prototype.forEach.call(a,function(e){Array.prototype.forEach.call(r,function(n){n.removeEventListener(e,t,o)})})}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var r,a=o(n("17x9"));function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}var u={};function l(e){u[e]||("undefined"!==typeof console&&console.error(e),u[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=a.default.oneOfType([a.default.string,a.default.func,f,a.default.shape({current:a.default.any})]);t.targetPropType=p;var y=a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func}),a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func})]))]);t.tagPropType=y;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return!(!e||"object"!==typeof e)&&"current"in e}function b(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function v(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function h(e){if(!v(e))return!1;var t=b(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(g(e))return e.current;if(h(e))return e();if("string"===typeof e&&m){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function w(e){return null!==e&&(Array.isArray(e)||m&&"number"===typeof e.length)}t.canUseDOM=m;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},RNiq:function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),r=n.n(o),a=n("eVuF"),i=n.n(a);function s(e,t,n,o,r,a,s){try{var c=e[a](s),u=c.value}catch(l){return void n(l)}c.done?t(u):i.a.resolve(u).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new i.a(function(o,r){var a=e.apply(t,n);function i(e){s(a,o,r,i,c,"next",e)}function c(e){s(a,o,r,i,c,"throw",e)}i(void 0)})}}var u=n("q1tI"),l=n.n(u),d=n("56M5"),f=(n("q4sD"),n("apDj"),n("zgjP")),p=n.n(f),y=n("rhny"),m=n("wx14"),g=n("zLVn"),b=n("17x9"),v=n.n(b),h=n("TSYQ"),E=n.n(h),w=n("33Jr"),T={tag:w.i,inverse:v.a.bool,color:v.a.string,body:v.a.bool,outline:v.a.bool,className:v.a.string,cssModule:v.a.object,innerRef:v.a.oneOfType([v.a.object,v.a.string,v.a.func])},j=function(e){var t=e.className,n=e.cssModule,o=e.color,r=e.body,a=e.inverse,i=e.outline,s=e.tag,c=e.innerRef,u=Object(g.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=Object(w.f)(E()(t,"card",!!a&&"text-white",!!r&&"card-body",!!o&&(i?"border":"bg")+"-"+o),n);return l.a.createElement(s,Object(m.a)({},u,{className:d,ref:c}))};j.propTypes=T,j.defaultProps={tag:"div"};var O=j,N={tag:w.i,top:v.a.bool,bottom:v.a.bool,className:v.a.string,cssModule:v.a.object},x=function(e){var t=e.className,n=e.cssModule,o=e.top,r=e.bottom,a=e.tag,i=Object(g.a)(e,["className","cssModule","top","bottom","tag"]),s="card-img";o&&(s="card-img-top"),r&&(s="card-img-bottom");var c=Object(w.f)(E()(t,s),n);return l.a.createElement(a,Object(m.a)({},i,{className:c}))};x.propTypes=N,x.defaultProps={tag:"img"};var M=x,P={tag:w.i,className:v.a.string,cssModule:v.a.object,innerRef:v.a.oneOfType([v.a.object,v.a.string,v.a.func])},R=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,r=e.tag,a=Object(g.a)(e,["className","cssModule","innerRef","tag"]),i=Object(w.f)(E()(t,"card-body"),n);return l.a.createElement(r,Object(m.a)({},a,{className:i,ref:o}))};R.propTypes=P,R.defaultProps={tag:"div"};var A=R,S={tag:w.i,className:v.a.string,cssModule:v.a.object},k=function(e){var t=e.className,n=e.cssModule,o=e.tag,r=Object(g.a)(e,["className","cssModule","tag"]),a=Object(w.f)(E()(t,"card-title"),n);return l.a.createElement(o,Object(m.a)({},r,{className:a}))};k.propTypes=S,k.defaultProps={tag:"div"};var D=k,C=n("ZEP6"),I=n.n(C),q=l.a.createElement,W=function(e){var t=function(e){return e},n={aspectRatio:1.5,minWidth:500,maxWidth:500,minHeight:300,maxHeight:400,resizeMode:"contain"},o=t(e.goods),r=Object(u.useState)(o),a=r[0],i=r[1];return q(d.default,{handleSearch:function(e){e=t(e),i(e)},handleNextPage:function(e){e=t(e);var n=a.concat(e);i(n)}},q(I.a,null,a.map(function(e){return q(y.a,{lg:4,md:6,sm:4,key:e.id},q(O,null,q(M,{top:!0,src:e.picture,style:n}),q(A,null,q(D,{tag:"h4"},q("a",{href:e.link},e.name)),q("h5",{style:{color:"red"}},"$",e.price),q("strike",{style:{color:"grey"}},"$",e.regPrice),"\xa0\xa0",q("span",null,e.seller.name))))})))};W.getInitialProps=c(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("http://localhost:8080/goods");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{goods:n});case 8:case"end":return e.stop()}},e)}));t.default=W},ZEP6:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),a=o(n("8OQS")),i=o(n("q1tI")),s=o(n("17x9")),c=o(n("TSYQ")),u=n("KnAW"),l={tag:u.tagPropType,noGutters:s.default.bool,className:s.default.string,cssModule:s.default.object,form:s.default.bool},d=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,l=e.form,d=(0,a.default)(e,["className","cssModule","noGutters","tag","form"]),f=(0,u.mapToCssModules)((0,c.default)(t,o?"no-gutters":null,l?"form-row":"row"),n);return i.default.createElement(s,(0,r.default)({},d,{className:f}))};d.propTypes=l,d.defaultProps={tag:"div"};var f=d;t.default=f},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,8]]]);