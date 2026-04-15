(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ea={exports:{}},ul={},ta={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),yc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),zc=Symbol.for("react.lazy"),$o=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var na={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ra=Object.assign,la={};function pn(e,t,n){this.props=e,this.context=t,this.refs=la,this.updater=n||na}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ia(){}ia.prototype=pn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=la,this.updater=n||na}var Gi=Vi.prototype=new ia;Gi.constructor=Vi;ra(Gi,pn.prototype);Gi.isPureReactComponent=!0;var Ho=Array.isArray,oa=Object.prototype.hasOwnProperty,qi={current:null},sa={key:!0,ref:!0,__self:!0,__source:!0};function aa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)oa.call(t,r)&&!sa.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:nr,type:e,key:i,ref:o,props:l,_owner:qi.current}}function Ec(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Rc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wo=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rc(""+e.key):t.toString(36)}function Er(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case nr:case yc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+El(o,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Wo,"$&/")+"/"),Er(l,t,n,"",function(d){return d})):l!=null&&(Yi(l)&&(l=Ec(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Wo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ho(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+El(i,s);o+=Er(i,t,n,u,l)}else if(u=Cc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+El(i,s++),o+=Er(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function cr(e,t,n){if(e==null)return e;var r=[],l=0;return Er(e,r,"","",function(i){return t.call(n,i,l++)}),r}function _c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Rr={transition:null},Ic={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:qi};function ua(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=pn;L.Fragment=vc;L.Profiler=gc;L.PureComponent=Vi;L.StrictMode=xc;L.Suspense=Nc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;L.act=ua;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ra({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)oa.call(t,u)&&!sa.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:nr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};L.createElement=aa;L.createFactory=function(e){var t=aa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Sc,render:e}};L.isValidElement=Yi;L.lazy=function(e){return{$$typeof:zc,_payload:{_status:-1,_result:e},_init:_c}};L.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=t}};L.unstable_act=ua;L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";ta.exports=L;var I=ta.exports;const Pc=mc(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=I,Lc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Kc=Object.prototype.hasOwnProperty,Oc=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bc={key:!0,ref:!0,__self:!0,__source:!0};function ca(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Kc.call(t,r)&&!bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Lc,type:e,key:i,ref:o,props:l,_owner:Oc.current}}ul.Fragment=Mc;ul.jsx=ca;ul.jsxs=ca;ea.exports=ul;var a=ea.exports,ei={},da={exports:{}},Ne={},fa={exports:{}},ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(p,S){var P=p.length;p.push(S);e:for(;0<P;){var K=P-1>>>1,H=p[K];if(0<l(H,S))p[K]=S,p[P]=H,P=K;else break e}}function n(p){return p.length===0?null:p[0]}function r(p){if(p.length===0)return null;var S=p[0],P=p.pop();if(P!==S){p[0]=P;e:for(var K=0,H=p.length,He=H>>>1;K<He;){var nt=2*(K+1)-1,Cl=p[nt],Nt=nt+1,ur=p[Nt];if(0>l(Cl,P))Nt<H&&0>l(ur,Cl)?(p[K]=ur,p[Nt]=P,K=Nt):(p[K]=Cl,p[nt]=P,K=nt);else if(Nt<H&&0>l(ur,P))p[K]=ur,p[Nt]=P,K=Nt;else break e}}return S}function l(p,S){var P=p.sortIndex-S.sortIndex;return P!==0?P:p.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],v=1,y=null,m=3,w=!1,N=!1,j=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(p){for(var S=n(d);S!==null;){if(S.callback===null)r(d);else if(S.startTime<=p)r(d),S.sortIndex=S.expirationTime,t(u,S);else break;S=n(d)}}function g(p){if(j=!1,h(p),!N)if(n(u)!==null)N=!0,Dt(z);else{var S=n(d);S!==null&&Ft(g,S.startTime-p)}}function z(p,S){N=!1,j&&(j=!1,f(_),_=-1),w=!0;var P=m;try{for(h(S),y=n(u);y!==null&&(!(y.expirationTime>S)||p&&!ue());){var K=y.callback;if(typeof K=="function"){y.callback=null,m=y.priorityLevel;var H=K(y.expirationTime<=S);S=e.unstable_now(),typeof H=="function"?y.callback=H:y===n(u)&&r(u),h(S)}else r(u);y=n(u)}if(y!==null)var He=!0;else{var nt=n(d);nt!==null&&Ft(g,nt.startTime-S),He=!1}return He}finally{y=null,m=P,w=!1}}var E=!1,R=null,_=-1,U=5,T=-1;function ue(){return!(e.unstable_now()-T<U)}function De(){if(R!==null){var p=e.unstable_now();T=p;var S=!0;try{S=R(!0,p)}finally{S?tt():(E=!1,R=null)}}else E=!1}var tt;if(typeof c=="function")tt=function(){c(De)};else if(typeof MessageChannel<"u"){var sr=new MessageChannel,ar=sr.port2;sr.port1.onmessage=De,tt=function(){ar.postMessage(null)}}else tt=function(){F(De,0)};function Dt(p){R=p,E||(E=!0,tt())}function Ft(p,S){_=F(function(){p(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(p){p.callback=null},e.unstable_continueExecution=function(){N||w||(N=!0,Dt(z))},e.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<p?Math.floor(1e3/p):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(p){switch(m){case 1:case 2:case 3:var S=3;break;default:S=m}var P=m;m=S;try{return p()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(p,S){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var P=m;m=p;try{return S()}finally{m=P}},e.unstable_scheduleCallback=function(p,S,P){var K=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?K+P:K):P=K,p){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=P+H,p={id:v++,callback:S,priorityLevel:p,startTime:P,expirationTime:H,sortIndex:-1},P>K?(p.sortIndex=P,t(d,p),n(u)===null&&p===n(d)&&(j?(f(_),_=-1):j=!0,Ft(g,P-K))):(p.sortIndex=H,t(u,p),N||w||(N=!0,Dt(z))),p},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(p){var S=m;return function(){var P=m;m=S;try{return p.apply(this,arguments)}finally{m=P}}}})(ha);fa.exports=ha;var Dc=fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=I,Se=Dc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pa=new Set,Fn={};function Ot(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Fn[e]=t,e=0;e<t.length;e++)pa.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,Ac=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qo={},Vo={};function Uc(e){return ti.call(Vo,e)?!0:ti.call(Qo,e)?!1:Ac.test(e)?Vo[e]=!0:(Qo[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xi=/[\-:]([a-z])/g;function Zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xi,Zi);le[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xi,Zi);le[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xi,Zi);le[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,l,r)&&(n=null),r||l===null?Uc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),eo=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),ma=Symbol.for("react.provider"),ya=Symbol.for("react.context"),to=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),no=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),va=Symbol.for("react.offscreen"),Go=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=Go&&e[Go]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Rl;function Cn(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var _l=!1;function Il(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function Hc(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ut:return"Portal";case ni:return"Profiler";case eo:return"StrictMode";case ri:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ya:return(e.displayName||"Context")+".Consumer";case ma:return(e._context.displayName||"Context")+".Provider";case to:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case no:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===eo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qc(e){var t=xa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=Qc(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oi(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ka(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function si(e,t){ka(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(En(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function wa(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Na=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Vc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function ja(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function za(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ja(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Gc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,en=null,tn=null;function Jo(e){if(e=ir(e)){if(typeof pi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=pl(t),pi(e.stateNode,e.type,t))}}function Ca(e){en?tn?tn.push(e):tn=[e]:en=e}function Ea(){if(en){var e=en,t=tn;if(tn=en=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function Ra(e,t){return e(t)}function _a(){}var Pl=!1;function Ia(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Ra(e,t,n)}finally{Pl=!1,(en!==null||tn!==null)&&(_a(),Ea())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var mi=!1;if(Ye)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){mi=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{mi=!1}function qc(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Pn=!1,Ar=null,Ur=!1,yi=null,Yc={onError:function(e){Pn=!0,Ar=e}};function Xc(e,t,n,r,l,i,o,s,u){Pn=!1,Ar=null,qc.apply(Yc,arguments)}function Zc(e,t,n,r,l,i,o,s,u){if(Xc.apply(this,arguments),Pn){if(Pn){var d=Ar;Pn=!1,Ar=null}else throw Error(k(198));Ur||(Ur=!0,yi=d)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(bt(e)!==e)throw Error(k(188))}function Jc(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return es(l),e;if(i===r)return es(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ta(e){return e=Jc(e),e!==null?La(e):null}function La(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=La(e);if(t!==null)return t;e=e.sibling}return null}var Ma=Se.unstable_scheduleCallback,ts=Se.unstable_cancelCallback,ed=Se.unstable_shouldYield,td=Se.unstable_requestPaint,Y=Se.unstable_now,nd=Se.unstable_getCurrentPriorityLevel,lo=Se.unstable_ImmediatePriority,Ka=Se.unstable_UserBlockingPriority,Br=Se.unstable_NormalPriority,rd=Se.unstable_LowPriority,Oa=Se.unstable_IdlePriority,cl=null,Be=null;function ld(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:sd,id=Math.log,od=Math.LN2;function sd(e){return e>>>=0,e===0?32:31-(id(e)/od|0)|0}var pr=64,mr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Rn(s):(i&=o,i!==0&&(r=Rn(i)))}else o=n&~l,o!==0?r=Rn(o):i!==0&&(r=Rn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),l=1<<n,r|=e[n],t&=~l;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ke(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=ad(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ke(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function io(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Da(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,oo,Aa,Ua,Ba,xi=!1,yr=[],ct=null,dt=null,ft=null,Bn=new Map,$n=new Map,ot=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function gn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fd(e,t,n,r,l){switch(t){case"focusin":return ct=gn(ct,e,t,n,r,l),!0;case"dragenter":return dt=gn(dt,e,t,n,r,l),!0;case"mouseover":return ft=gn(ft,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Bn.set(i,gn(Bn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,gn($n.get(i)||null,e,t,n,r,l)),!0}return!1}function $a(e){var t=Ct(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Pa(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hi=r,n.target.dispatchEvent(r),hi=null}else return t=ir(n),t!==null&&oo(t),e.blockedOn=n,!1;t.shift()}return!0}function rs(e,t,n){_r(e)&&n.delete(t)}function hd(){xi=!1,ct!==null&&_r(ct)&&(ct=null),dt!==null&&_r(dt)&&(dt=null),ft!==null&&_r(ft)&&(ft=null),Bn.forEach(rs),$n.forEach(rs)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,hd)))}function Hn(e){function t(l){return kn(l,e)}if(0<yr.length){kn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&kn(ct,e),dt!==null&&kn(dt,e),ft!==null&&kn(ft,e),Bn.forEach(t),$n.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)$a(n),n.blockedOn===null&&ot.shift()}var nn=et.ReactCurrentBatchConfig,Hr=!0;function pd(e,t,n,r){var l=O,i=nn.transition;nn.transition=null;try{O=1,so(e,t,n,r)}finally{O=l,nn.transition=i}}function md(e,t,n,r){var l=O,i=nn.transition;nn.transition=null;try{O=4,so(e,t,n,r)}finally{O=l,nn.transition=i}}function so(e,t,n,r){if(Hr){var l=gi(e,t,n,r);if(l===null)Bl(e,t,r,Wr,n),ns(e,r);else if(fd(l,e,t,n,r))r.stopPropagation();else if(ns(e,r),t&4&&-1<dd.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&Fa(i),i=gi(e,t,n,r),i===null&&Bl(e,t,r,Wr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var Wr=null;function gi(e,t,n,r){if(Wr=null,e=ro(r),e=Ct(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case lo:return 1;case Ka:return 4;case Br:case rd:return 16;case Oa:return 536870912;default:return 16}default:return 16}}var at=null,ao=null,Ir=null;function Wa(){if(Ir)return Ir;var e,t=ao,n=t.length,r,l="value"in at?at.value:at.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function ls(){return!1}function je(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vr:ls,this.isPropagationStopped=ls,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=je(mn),lr=G({},mn,{view:0,detail:0}),yd=je(lr),Ll,Ml,wn,dl=G({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Ll=e.screenX-wn.screenX,Ml=e.screenY-wn.screenY):Ml=Ll=0,wn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),is=je(dl),vd=G({},dl,{dataTransfer:0}),xd=je(vd),gd=G({},lr,{relatedTarget:0}),Kl=je(gd),kd=G({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=je(kd),Sd=G({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=je(Sd),jd=G({},mn,{data:0}),os=je(jd),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function co(){return Rd}var _d=G({},lr,{key:function(e){if(e.key){var t=zd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=je(_d),Pd=G({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=je(Pd),Td=G({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Ld=je(Td),Md=G({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=je(Md),Od=G({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=je(Od),Dd=[9,13,27,32],fo=Ye&&"CompositionEvent"in window,Tn=null;Ye&&"documentMode"in document&&(Tn=document.documentMode);var Fd=Ye&&"TextEvent"in window&&!Tn,Qa=Ye&&(!fo||Tn&&8<Tn&&11>=Tn),as=" ",us=!1;function Va(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Ad(e,t){switch(e){case"compositionend":return Ga(t);case"keypress":return t.which!==32?null:(us=!0,as);case"textInput":return e=t.data,e===as&&us?null:e;default:return null}}function Ud(e,t){if($t)return e==="compositionend"||!fo&&Va(e,t)?(e=Wa(),Ir=ao=at=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function qa(e,t,n,r){Ca(r),t=Qr(t,"onChange"),0<t.length&&(n=new uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Wn=null;function $d(e){ou(e,0)}function fl(e){var t=Qt(e);if(ga(t))return e}function Hd(e,t){if(e==="change")return t}var Ya=!1;if(Ye){var Ol;if(Ye){var bl="oninput"in document;if(!bl){var ds=document.createElement("div");ds.setAttribute("oninput","return;"),bl=typeof ds.oninput=="function"}Ol=bl}else Ol=!1;Ya=Ol&&(!document.documentMode||9<document.documentMode)}function fs(){Ln&&(Ln.detachEvent("onpropertychange",Xa),Wn=Ln=null)}function Xa(e){if(e.propertyName==="value"&&fl(Wn)){var t=[];qa(t,Wn,e,ro(e)),Ia($d,t)}}function Wd(e,t,n){e==="focusin"?(fs(),Ln=t,Wn=n,Ln.attachEvent("onpropertychange",Xa)):e==="focusout"&&fs()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Wn)}function Vd(e,t){if(e==="click")return fl(t)}function Gd(e,t){if(e==="input"||e==="change")return fl(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:qd;function Qn(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ti.call(t,l)||!be(e[l],t[l]))return!1}return!0}function hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var n=hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hs(n)}}function Za(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Za(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Ja(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Za(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ps(n,i);var o=ps(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Ye&&"documentMode"in document&&11>=document.documentMode,Ht=null,ki=null,Mn=null,wi=!1;function ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Ht==null||Ht!==Fr(r)||(r=Ht,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Qn(Mn,r)||(Mn=r,r=Qr(ki,"onSelect"),0<r.length&&(t=new uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Dl={},eu={};Ye&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function hl(e){if(Dl[e])return Dl[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return Dl[e]=t[n];return e}var tu=hl("animationend"),nu=hl("animationiteration"),ru=hl("animationstart"),lu=hl("transitionend"),iu=new Map,ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){iu.set(e,t),Ot(t,[e])}for(var Fl=0;Fl<ys.length;Fl++){var Al=ys[Fl],Zd=Al.toLowerCase(),Jd=Al[0].toUpperCase()+Al.slice(1);kt(Zd,"on"+Jd)}kt(tu,"onAnimationEnd");kt(nu,"onAnimationIteration");kt(ru,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(lu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;vs(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;vs(l,s,d),i=u}}}if(Ur)throw e=yi,Ur=!1,yi=null,e}function B(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[gr]){e[gr]=!0,pa.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Ul("selectionchange",!1,t))}}function su(e,t,n,r){switch(Ha(t)){case 1:var l=pd;break;case 4:l=md;break;default:l=so}n=l.bind(null,t,n,e),l=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Ct(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ia(function(){var d=i,v=ro(n),y=[];e:{var m=iu.get(e);if(m!==void 0){var w=uo,N=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":w=Id;break;case"focusin":N="focus",w=Kl;break;case"focusout":N="blur",w=Kl;break;case"beforeblur":case"afterblur":w=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ld;break;case tu:case nu:case ru:w=wd;break;case lu:w=Kd;break;case"scroll":w=yd;break;case"wheel":w=bd;break;case"copy":case"cut":case"paste":w=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ss}var j=(t&4)!==0,F=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,h;c!==null;){h=c;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,f!==null&&(g=Un(c,f),g!=null&&j.push(Gn(c,g,h)))),F)break;c=c.return}0<j.length&&(m=new w(m,N,null,n,v),y.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==hi&&(N=n.relatedTarget||n.fromElement)&&(Ct(N)||N[Xe]))break e;if((w||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,w?(N=n.relatedTarget||n.toElement,w=d,N=N?Ct(N):null,N!==null&&(F=bt(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(w=null,N=d),w!==N)){if(j=is,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=ss,g="onPointerLeave",f="onPointerEnter",c="pointer"),F=w==null?m:Qt(w),h=N==null?m:Qt(N),m=new j(g,c+"leave",w,n,v),m.target=F,m.relatedTarget=h,g=null,Ct(v)===d&&(j=new j(f,c+"enter",N,n,v),j.target=h,j.relatedTarget=F,g=j),F=g,w&&N)t:{for(j=w,f=N,c=0,h=j;h;h=At(h))c++;for(h=0,g=f;g;g=At(g))h++;for(;0<c-h;)j=At(j),c--;for(;0<h-c;)f=At(f),h--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=At(j),f=At(f)}j=null}else j=null;w!==null&&xs(y,m,w,j,!1),N!==null&&F!==null&&xs(y,F,N,j,!0)}}e:{if(m=d?Qt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var z=Hd;else if(cs(m))if(Ya)z=Gd;else{z=Qd;var E=Wd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Vd);if(z&&(z=z(e,d))){qa(y,z,n,v);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ai(m,"number",m.value)}switch(E=d?Qt(d):window,e){case"focusin":(cs(E)||E.contentEditable==="true")&&(Ht=E,ki=d,Mn=null);break;case"focusout":Mn=ki=Ht=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,ms(y,n,v);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ms(y,n,v)}var R;if(fo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $t?Va(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Qa&&n.locale!=="ko"&&($t||_!=="onCompositionStart"?_==="onCompositionEnd"&&$t&&(R=Wa()):(at=v,ao="value"in at?at.value:at.textContent,$t=!0)),E=Qr(d,_),0<E.length&&(_=new os(_,e,null,n,v),y.push({event:_,listeners:E}),R?_.data=R:(R=Ga(n),R!==null&&(_.data=R)))),(R=Fd?Ad(e,n):Ud(e,n))&&(d=Qr(d,"onBeforeInput"),0<d.length&&(v=new os("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:d}),v.data=R))}ou(y,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Un(e,n),i!=null&&r.unshift(Gn(e,i,l)),i=Un(e,t),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Un(n,i),u!=null&&o.unshift(Gn(n,u,s))):l||(u=Un(n,i),u!=null&&o.push(Gn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function kr(e,t,n){if(t=gs(t),gs(e)!==t&&n)throw Error(k(425))}function Vr(){}var Si=null,Ni=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,ks=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof ks<"u"?function(e){return ks.resolve(null).then(e).catch(of)}:zi;function of(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ws(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+yn,qn="__reactProps$"+yn,Xe="__reactContainer$"+yn,Ci="__reactEvents$"+yn,sf="__reactListeners$"+yn,af="__reactHandles$"+yn;function Ct(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ws(e);e!==null;){if(n=e[Ue])return n;e=ws(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function pl(e){return e[qn]||null}var Ei=[],Vt=-1;function wt(e){return{current:e}}function $(e){0>Vt||(e.current=Ei[Vt],Ei[Vt]=null,Vt--)}function A(e,t){Vt++,Ei[Vt]=e.current,e.current=t}var gt={},ae=wt(gt),ye=wt(!1),Pt=gt;function an(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function Gr(){$(ye),$(ae)}function Ss(e,t,n){if(ae.current!==gt)throw Error(k(168));A(ae,t),A(ye,n)}function au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Wc(e)||"Unknown",l));return G({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=ae.current,A(ae,e),A(ye,ye.current),!0}function Ns(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=au(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,$(ye),$(ae),A(ae,e)):$(ye),A(ye,n)}var Qe=null,ml=!1,Hl=!1;function uu(e){Qe===null?Qe=[e]:Qe.push(e)}function uf(e){ml=!0,uu(e)}function St(){if(!Hl&&Qe!==null){Hl=!0;var e=0,t=O;try{var n=Qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,ml=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),Ma(lo,St),l}finally{O=t,Hl=!1}}return null}var Gt=[],qt=0,Yr=null,Xr=0,ze=[],Ce=0,Tt=null,Ve=1,Ge="";function jt(e,t){Gt[qt++]=Xr,Gt[qt++]=Yr,Yr=e,Xr=t}function cu(e,t,n){ze[Ce++]=Ve,ze[Ce++]=Ge,ze[Ce++]=Tt,Tt=e;var r=Ve;e=Ge;var l=32-Ke(r)-1;r&=~(1<<l),n+=1;var i=32-Ke(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Ke(t)+l|n<<l|r,Ge=i+e}else Ve=1<<i|n<<l|r,Ge=e}function po(e){e.return!==null&&(jt(e,1),cu(e,1,0))}function mo(e){for(;e===Yr;)Yr=Gt[--qt],Gt[qt]=null,Xr=Gt[--qt],Gt[qt]=null;for(;e===Tt;)Tt=ze[--Ce],ze[Ce]=null,Ge=ze[--Ce],ze[Ce]=null,Ve=ze[--Ce],ze[Ce]=null}var we=null,ke=null,W=!1,Me=null;function du(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ve,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(W){var t=ke;if(t){var n=t;if(!js(e,t)){if(Ri(e))throw Error(k(418));t=ht(n.nextSibling);var r=we;t&&js(e,t)?du(r,n):(e.flags=e.flags&-4097|2,W=!1,we=e)}}else{if(Ri(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,we=e}}}function zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function wr(e){if(e!==we)return!1;if(!W)return zs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=ke)){if(Ri(e))throw fu(),Error(k(418));for(;t;)du(e,t),t=ht(t.nextSibling)}if(zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?ht(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=ke;e;)e=ht(e.nextSibling)}function un(){ke=we=null,W=!1}function yo(e){Me===null?Me=[e]:Me.push(e)}var cf=et.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cs(e){var t=e._init;return t(e._payload)}function hu(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,h,g){return c===null||c.tag!==6?(c=Xl(h,f.mode,g),c.return=f,c):(c=l(c,h),c.return=f,c)}function u(f,c,h,g){var z=h.type;return z===Bt?v(f,c,h.props.children,g,h.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===lt&&Cs(z)===c.type)?(g=l(c,h.props),g.ref=Sn(f,c,h),g.return=f,g):(g=Dr(h.type,h.key,h.props,null,f.mode,g),g.ref=Sn(f,c,h),g.return=f,g)}function d(f,c,h,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Zl(h,f.mode,g),c.return=f,c):(c=l(c,h.children||[]),c.return=f,c)}function v(f,c,h,g,z){return c===null||c.tag!==7?(c=It(h,f.mode,g,z),c.return=f,c):(c=l(c,h),c.return=f,c)}function y(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xl(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dr:return h=Dr(c.type,c.key,c.props,null,f.mode,h),h.ref=Sn(f,null,c),h.return=f,h;case Ut:return c=Zl(c,f.mode,h),c.return=f,c;case lt:var g=c._init;return y(f,g(c._payload),h)}if(En(c)||vn(c))return c=It(c,f.mode,h,null),c.return=f,c;Sr(f,c)}return null}function m(f,c,h,g){var z=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return z!==null?null:s(f,c,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case dr:return h.key===z?u(f,c,h,g):null;case Ut:return h.key===z?d(f,c,h,g):null;case lt:return z=h._init,m(f,c,z(h._payload),g)}if(En(h)||vn(h))return z!==null?null:v(f,c,h,g,null);Sr(f,h)}return null}function w(f,c,h,g,z){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(h)||null,s(c,f,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dr:return f=f.get(g.key===null?h:g.key)||null,u(c,f,g,z);case Ut:return f=f.get(g.key===null?h:g.key)||null,d(c,f,g,z);case lt:var E=g._init;return w(f,c,h,E(g._payload),z)}if(En(g)||vn(g))return f=f.get(h)||null,v(c,f,g,z,null);Sr(c,g)}return null}function N(f,c,h,g){for(var z=null,E=null,R=c,_=c=0,U=null;R!==null&&_<h.length;_++){R.index>_?(U=R,R=null):U=R.sibling;var T=m(f,R,h[_],g);if(T===null){R===null&&(R=U);break}e&&R&&T.alternate===null&&t(f,R),c=i(T,c,_),E===null?z=T:E.sibling=T,E=T,R=U}if(_===h.length)return n(f,R),W&&jt(f,_),z;if(R===null){for(;_<h.length;_++)R=y(f,h[_],g),R!==null&&(c=i(R,c,_),E===null?z=R:E.sibling=R,E=R);return W&&jt(f,_),z}for(R=r(f,R);_<h.length;_++)U=w(R,f,_,h[_],g),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?_:U.key),c=i(U,c,_),E===null?z=U:E.sibling=U,E=U);return e&&R.forEach(function(ue){return t(f,ue)}),W&&jt(f,_),z}function j(f,c,h,g){var z=vn(h);if(typeof z!="function")throw Error(k(150));if(h=z.call(h),h==null)throw Error(k(151));for(var E=z=null,R=c,_=c=0,U=null,T=h.next();R!==null&&!T.done;_++,T=h.next()){R.index>_?(U=R,R=null):U=R.sibling;var ue=m(f,R,T.value,g);if(ue===null){R===null&&(R=U);break}e&&R&&ue.alternate===null&&t(f,R),c=i(ue,c,_),E===null?z=ue:E.sibling=ue,E=ue,R=U}if(T.done)return n(f,R),W&&jt(f,_),z;if(R===null){for(;!T.done;_++,T=h.next())T=y(f,T.value,g),T!==null&&(c=i(T,c,_),E===null?z=T:E.sibling=T,E=T);return W&&jt(f,_),z}for(R=r(f,R);!T.done;_++,T=h.next())T=w(R,f,_,T.value,g),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?_:T.key),c=i(T,c,_),E===null?z=T:E.sibling=T,E=T);return e&&R.forEach(function(De){return t(f,De)}),W&&jt(f,_),z}function F(f,c,h,g){if(typeof h=="object"&&h!==null&&h.type===Bt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case dr:e:{for(var z=h.key,E=c;E!==null;){if(E.key===z){if(z=h.type,z===Bt){if(E.tag===7){n(f,E.sibling),c=l(E,h.props.children),c.return=f,f=c;break e}}else if(E.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===lt&&Cs(z)===E.type){n(f,E.sibling),c=l(E,h.props),c.ref=Sn(f,E,h),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===Bt?(c=It(h.props.children,f.mode,g,h.key),c.return=f,f=c):(g=Dr(h.type,h.key,h.props,null,f.mode,g),g.ref=Sn(f,c,h),g.return=f,f=g)}return o(f);case Ut:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=l(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Zl(h,f.mode,g),c.return=f,f=c}return o(f);case lt:return E=h._init,F(f,c,E(h._payload),g)}if(En(h))return N(f,c,h,g);if(vn(h))return j(f,c,h,g);Sr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,h),c.return=f,f=c):(n(f,c),c=Xl(h,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return F}var cn=hu(!0),pu=hu(!1),Zr=wt(null),Jr=null,Yt=null,vo=null;function xo(){vo=Yt=Jr=null}function go(e){var t=Zr.current;$(Zr),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){Jr=e,vo=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(vo!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Jr===null)throw Error(k(308));Yt=e,Jr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Et=null;function ko(e){Et===null?Et=[e]:Et.push(e)}function mu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ko(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,ko(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}function Es(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var l=e.updateQueue;it=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(i!==null){var y=l.baseState;o=0,v=d=u=null,s=i;do{var m=s.lane,w=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,j=s;switch(m=t,w=n,j.tag){case 1:if(N=j.payload,typeof N=="function"){y=N.call(w,y,m);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=j.payload,m=typeof N=="function"?N.call(w,y,m):N,m==null)break e;y=G({},y,m);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=w,u=y):v=v.next=w,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=y),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=y}}function Rs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var or={},$e=wt(or),Yn=wt(or),Xn=wt(or);function Rt(e){if(e===or)throw Error(k(174));return e}function So(e,t){switch(A(Xn,t),A(Yn,e),A($e,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}$($e),A($e,t)}function dn(){$($e),$(Yn),$(Xn)}function vu(e){Rt(Xn.current);var t=Rt($e.current),n=ci(t,e.type);t!==n&&(A(Yn,e),A($e,n))}function No(e){Yn.current===e&&($($e),$(Yn))}var Q=wt(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function jo(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var Lr=et.ReactCurrentDispatcher,Ql=et.ReactCurrentBatchConfig,Lt=0,V=null,Z=null,ee=null,nl=!1,Kn=!1,Zn=0,df=0;function ie(){throw Error(k(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,l,i){if(Lt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?mf:yf,e=n(r,l),Kn){i=0;do{if(Kn=!1,Zn=0,25<=i)throw Error(k(301));i+=1,ee=Z=null,t.updateQueue=null,Lr.current=vf,e=n(r,l)}while(Kn)}if(Lr.current=rl,t=Z!==null&&Z.next!==null,Lt=0,ee=Z=V=null,nl=!1,t)throw Error(k(300));return e}function Eo(){var e=Zn!==0;return Zn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Ie(){if(Z===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function Jn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var v=d.lane;if((Lt&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var y={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=y,o=r):u=u.next=y,V.lanes|=v,Mt|=v}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);be(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xu(){}function gu(e,t){var n=V,r=Ie(),l=t(),i=!be(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,Ro(Su.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,er(9,wu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(k(349));Lt&30||ku(n,t,l)}return l}function ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,r){t.value=n,t.getSnapshot=r,Nu(t)&&ju(e)}function Su(e,t,n){return n(function(){Nu(t)&&ju(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function ju(e){var t=Ze(e,1);t!==null&&Oe(t,e,1,-1)}function _s(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,V,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zu(){return Ie().memoizedState}function Mr(e,t,n,r){var l=Ae();V.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function yl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&zo(r,o.deps)){l.memoizedState=er(t,n,i,r);return}}V.flags|=e,l.memoizedState=er(1|t,n,i,r)}function Is(e,t){return Mr(8390656,8,e,t)}function Ro(e,t){return yl(2048,8,e,t)}function Cu(e,t){return yl(4,2,e,t)}function Eu(e,t){return yl(4,4,e,t)}function Ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,Ru.bind(null,t,e),n)}function _o(){}function Iu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Lt&21?(be(n,t)||(n=ba(),V.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function ff(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{O=n,Ql.transition=r}}function Lu(){return Ie().memoizedState}function hf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))Ku(t,n);else if(n=mu(e,t,n,r),n!==null){var l=de();Oe(n,e,r,l),Ou(n,t,r)}}function pf(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Ku(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,be(s,o)){var u=t.interleaved;u===null?(l.next=l,ko(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=mu(e,t,l,r),n!==null&&(l=de(),Oe(n,e,r,l),Ou(n,t,r))}}function Mu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ku(e,t){Kn=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ou(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}var rl={readContext:_e,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},mf={readContext:_e,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Is,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,Ru.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:_s,useDebugValue:_o,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=_s(!1),t=e[0];return e=ff.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ae();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),te===null)throw Error(k(349));Lt&30||ku(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Is(Su.bind(null,r,i,e),[e]),r.flags|=2048,er(9,wu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=te.identifierPrefix;if(W){var n=Ge,r=Ve;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yf={readContext:_e,useCallback:Iu,useContext:_e,useEffect:Ro,useImperativeHandle:_u,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:Pu,useReducer:Vl,useRef:zu,useState:function(){return Vl(Jn)},useDebugValue:_o,useDeferredValue:function(e){var t=Ie();return Tu(t,Z.memoizedState,e)},useTransition:function(){var e=Vl(Jn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:gu,useId:Lu,unstable_isNewReconciler:!1},vf={readContext:_e,useCallback:Iu,useContext:_e,useEffect:Ro,useImperativeHandle:_u,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:Pu,useReducer:Gl,useRef:zu,useState:function(){return Gl(Jn)},useDebugValue:_o,useDeferredValue:function(e){var t=Ie();return Z===null?t.memoizedState=e:Tu(t,Z.memoizedState,e)},useTransition:function(){var e=Gl(Jn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:gu,useId:Lu,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=yt(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Oe(t,e,l,r),Tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=yt(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Oe(t,e,l,r),Tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=yt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Oe(t,e,r,n),Tr(t,e,r))}};function Ps(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(l,i):!0}function bu(e,t,n){var r=!1,l=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ve(t)?Pt:ae.current,r=t.contextTypes,i=(r=r!=null)?an(e,l):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},wo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ve(t)?Pt:ae.current,l.context=an(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vl.enqueueReplaceState(l,l.state,null),el(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Hc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,$i=r),Li(e,t)},n}function Fu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var gf=et.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?pu(t,null,n,r):cn(t,e.child,n,r)}function Os(e,t,n,r,l){n=n.render;var i=t.ref;return rn(t,l),r=Co(e,t,n,r,i,l),n=Eo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(W&&n&&po(t),t.flags|=1,ce(e,t,r,l),t.child)}function bs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!bo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Au(e,t,i,r,l)):(e=Dr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(o,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Au(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Je(e,t,l)}return Mi(e,t,n,r,l)}function Uu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Zt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Zt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(Zt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(Zt,ge),ge|=r;return ce(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,l){var i=ve(n)?Pt:ae.current;return i=an(t,i),rn(t,l),n=Co(e,t,n,r,i,l),r=Eo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(W&&r&&po(t),t.flags|=1,ce(e,t,n,l),t.child)}function Ds(e,t,n,r,l){if(ve(n)){var i=!0;qr(t)}else i=!1;if(rn(t,l),t.stateNode===null)Kr(e,t),bu(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=ve(n)?Pt:ae.current,d=an(t,d));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ts(t,o,r,d),it=!1;var m=t.memoizedState;o.state=m,el(t,r,o,l),u=t.memoizedState,s!==r||m!==u||ye.current||it?(typeof v=="function"&&(Pi(t,n,v,r),u=t.memoizedState),(s=it||Ps(t,n,s,r,m,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Te(t.type,s),o.props=d,y=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ve(n)?Pt:ae.current,u=an(t,u));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||m!==u)&&Ts(t,o,r,u),it=!1,m=t.memoizedState,o.state=m,el(t,r,o,l);var N=t.memoizedState;s!==y||m!==N||ye.current||it?(typeof w=="function"&&(Pi(t,n,w,r),N=t.memoizedState),(d=it||Ps(t,n,d,r,m,N,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ki(e,t,n,r,i,l)}function Ki(e,t,n,r,l,i){Bu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ns(t,n,!1),Je(e,t,i);r=t.stateNode,gf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,s,i)):ce(e,t,s,i),t.memoizedState=r.state,l&&Ns(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?Ss(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ss(e,t.context,!1),So(e,t.containerInfo)}function Fs(e,t,n,r,l){return un(),yo(l),t.flags|=256,ce(e,t,n,r),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,l=Q.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(Q,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=kl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=Oi,e):Io(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return kf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=vt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=vt(s,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Io(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&yo(r),cn(t,e.child,null,n),e=Io(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(k(422))),Nr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=kl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=bi(o),t.memoizedState=Oi,i);if(!(t.mode&1))return Nr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=ql(i,r,void 0),Nr(e,t,o,r)}if(s=(o&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),Oe(r,e,l,-1))}return Oo(),r=ql(Error(k(421))),Nr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ke=ht(l.nextSibling),we=t,W=!0,Me=null,e!==null&&(ze[Ce++]=Ve,ze[Ce++]=Ge,ze[Ce++]=Tt,Ve=e.id,Ge=e.overflow,Tt=t),t=Io(t,r.children),t.flags|=4096,t)}function As(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function Yl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Wu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&As(e,n,t);else if(e.tag===19)As(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:$u(t),un();break;case 5:vu(t);break;case 1:ve(t.type)&&qr(t);break;case 4:So(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(Zr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(A(Q,Q.current&1),e=Je(e,t,n),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return Je(e,t,n)}var Qu,Di,Vu,Gu;Qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Di=function(){};Vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Rt($e.current);var i=null;switch(n){case"input":l=oi(e,l),r=oi(e,r),i=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":l=ui(e,l),r=ui(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}di(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Gu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sf(e,t,n){var r=t.pendingProps;switch(mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&Gr(),oe(t),null;case 3:return r=t.stateNode,dn(),$(ye),$(ae),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Qi(Me),Me=null))),Di(e,t),oe(t),null;case 5:No(t);var l=Rt(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return oe(t),null}if(e=Rt($e.current),wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)B(_n[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":qo(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Xo(r,i),B("invalid",r)}di(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&kr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&kr(r.textContent,s,e),l=["children",""+s]):Fn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":fr(r),Yo(r,i,!0);break;case"textarea":fr(r),Zo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[qn]=r,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(o=fi(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)B(_n[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":qo(e,r),l=oi(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Xo(e,r),l=ui(e,r),B("invalid",e);break;default:l=r}di(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?za(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Na(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&An(e,u):typeof u=="number"&&An(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&Ji(e,i,u,o))}switch(n){case"input":fr(e),Yo(e,r,!1);break;case"textarea":fr(e),Zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Rt(Xn.current),Rt($e.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return oe(t),null;case 13:if($(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))fu(),un(),t.flags|=98560,i=!1;else if(i=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ue]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Me!==null&&(Qi(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?J===0&&(J=3):Oo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Di(e,t),e===null&&Vn(t.stateNode.containerInfo),oe(t),null;case 10:return go(t.type._context),oe(t),null;case 17:return ve(t.type)&&Gr(),oe(t),null;case 19:if($(Q),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Nn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tl(e),o!==null){for(t.flags|=128,Nn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>hn&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!W)return oe(t),null}else 2*Y()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=Q.current,A(Q,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Nf(e,t){switch(mo(t),t.tag){case 1:return ve(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),$(ye),$(ae),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return No(t),null;case 13:if($(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Q),null;case 4:return dn(),null;case 10:return go(t.type._context),null;case 22:case 23:return Ko(),null;case 24:return null;default:return null}}var jr=!1,se=!1,jf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){q(e,t,r)}}var Us=!1;function zf(e,t){if(Si=Hr,e=Ja(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,v=0,y=e,m=null;t:for(;;){for(var w;y!==n||l!==0&&y.nodeType!==3||(s=o+l),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(w=y.firstChild)!==null;)m=y,y=w;for(;;){if(y===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++v===r&&(u=o),(w=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Hr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var j=N.memoizedProps,F=N.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Te(t.type,j),F);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return N=Us,Us=!1,N}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qu(e){var t=e.alternate;t!==null&&(e.alternate=null,qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[qn],delete t[Ci],delete t[sf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var ne=null,Le=!1;function rt(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:se||Xt(n,t);case 6:var r=ne,l=Le;ne=null,rt(e,t,n),ne=r,Le=l,ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Hn(e)):$l(ne,n.stateNode));break;case 4:r=ne,l=Le,ne=n.stateNode.containerInfo,Le=!0,rt(e,t,n),ne=r,Le=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Fi(n,t,o),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!se&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,rt(e,t,n),se=r):rt(e,t,n);break;default:rt(e,t,n)}}function $s(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jf),t.forEach(function(r){var l=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Le=!1;break e;case 3:ne=s.stateNode.containerInfo,Le=!0;break e;case 4:ne=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ne===null)throw Error(k(160));Xu(i,o,l),ne=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Fe(e),r&4){try{On(3,e,e.return),xl(3,e)}catch(j){q(e,e.return,j)}try{On(5,e,e.return)}catch(j){q(e,e.return,j)}}break;case 1:Pe(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Pe(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{An(l,"")}catch(j){q(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ka(l,i),fi(s,o);var d=fi(s,i);for(o=0;o<u.length;o+=2){var v=u[o],y=u[o+1];v==="style"?za(l,y):v==="dangerouslySetInnerHTML"?Na(l,y):v==="children"?An(l,y):Ji(l,v,y,d)}switch(s){case"input":si(l,i);break;case"textarea":wa(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Jt(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(j){q(e,e.return,j)}}break;case 6:if(Pe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){q(e,e.return,j)}}break;case 3:if(Pe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(j){q(e,e.return,j)}break;case 4:Pe(t,e),Fe(e);break;case 13:Pe(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Lo=Y())),r&4&&$s(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||v,Pe(t,e),se=d):Pe(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(y=C=v;C!==null;){switch(m=C,w=m.child,m.tag){case 0:case 11:case 14:case 15:On(4,m,m.return);break;case 1:Xt(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(j){q(r,n,j)}}break;case 5:Xt(m,m.return);break;case 22:if(m.memoizedState!==null){Ws(y);continue}}w!==null?(w.return=m,C=w):Ws(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ja("display",o))}catch(j){q(e,e.return,j)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(j){q(e,e.return,j)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Pe(t,e),Fe(e),r&4&&$s(e);break;case 21:break;default:Pe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yu(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(An(l,""),r.flags&=-33);var i=Bs(e);Bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bs(e);Ui(e,s,o);break;default:throw Error(k(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e,t,n){C=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||jr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=jr;var d=se;if(jr=o,(se=u)&&!d)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?Qs(l):u!==null?(u.return=o,C=u):Qs(l);for(;i!==null;)C=i,Ju(i),i=i.sibling;C=l,jr=s,se=d}Hs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):Hs(e)}}function Hs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Hn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&Ai(t)}catch(m){q(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ws(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Qs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var i=t.return;try{Ai(t)}catch(u){q(t,i,u)}break;case 5:var o=t.return;try{Ai(t)}catch(u){q(t,o,u)}}}catch(u){q(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Ef=Math.ceil,ll=et.ReactCurrentDispatcher,Po=et.ReactCurrentOwner,Re=et.ReactCurrentBatchConfig,M=0,te=null,X=null,re=0,ge=0,Zt=wt(0),J=0,tr=null,Mt=0,gl=0,To=0,bn=null,pe=null,Lo=0,hn=1/0,We=null,il=!1,$i=null,mt=null,zr=!1,ut=null,ol=0,Dn=0,Hi=null,Or=-1,br=0;function de(){return M&6?Y():Or!==-1?Or:Or=Y()}function yt(e){return e.mode&1?M&2&&re!==0?re&-re:cf.transition!==null?(br===0&&(br=ba()),br):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ha(e.type)),e):1}function Oe(e,t,n,r){if(50<Dn)throw Dn=0,Hi=null,Error(k(185));rr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(gl|=n),J===4&&st(e,re)),xe(e,r),n===1&&M===0&&!(t.mode&1)&&(hn=Y()+500,ml&&St()))}function xe(e,t){var n=e.callbackNode;ud(e,t);var r=$r(e,e===te?re:0);if(r===0)n!==null&&ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ts(n),t===1)e.tag===0?uf(Vs.bind(null,e)):uu(Vs.bind(null,e)),lf(function(){!(M&6)&&St()}),n=null;else{switch(Da(r)){case 1:n=lo;break;case 4:n=Ka;break;case 16:n=Br;break;case 536870912:n=Oa;break;default:n=Br}n=sc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Or=-1,br=0,M&6)throw Error(k(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=$r(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var l=M;M|=2;var i=nc();(te!==e||re!==t)&&(We=null,hn=Y()+500,_t(e,t));do try{If();break}catch(s){tc(e,s)}while(!0);xo(),ll.current=i,M=l,X!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(l=vi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=tr,_t(e,0),st(e,r),xe(e,Y()),n;if(t===6)st(e,r);else{if(l=e.current.alternate,!(r&30)&&!Rf(l)&&(t=sl(e,r),t===2&&(i=vi(e),i!==0&&(r=i,t=Wi(e,i))),t===1))throw n=tr,_t(e,0),st(e,r),xe(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:zt(e,pe,We);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Lo+500-Y(),10<t)){if($r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=zi(zt.bind(null,e,pe,We),t);break}zt(e,pe,We);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ke(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=zi(zt.bind(null,e,pe,We),r);break}zt(e,pe,We);break;case 5:zt(e,pe,We);break;default:throw Error(k(329))}}}return xe(e,Y()),e.callbackNode===n?ec.bind(null,e):null}function Wi(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=sl(e,t),e!==2&&(t=pe,pe=n,t!==null&&Qi(t)),e}function Qi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Rf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~To,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Vs(e){if(M&6)throw Error(k(327));ln();var t=$r(e,0);if(!(t&1))return xe(e,Y()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=vi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=tr,_t(e,0),st(e,t),xe(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,pe,We),xe(e,Y()),null}function Mo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(hn=Y()+500,ml&&St())}}function Kt(e){ut!==null&&ut.tag===0&&!(M&6)&&ln();var t=M;M|=1;var n=Re.transition,r=O;try{if(Re.transition=null,O=1,e)return e()}finally{O=r,Re.transition=n,M=t,!(M&6)&&St()}}function Ko(){ge=Zt.current,$(Zt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rf(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(mo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:dn(),$(ye),$(ae),jo();break;case 5:No(r);break;case 4:dn();break;case 13:$(Q);break;case 19:$(Q);break;case 10:go(r.type._context);break;case 22:case 23:Ko()}n=n.return}if(te=e,X=e=vt(e.current,null),re=ge=t,J=0,tr=null,To=gl=Mt=0,pe=bn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Et=null}return e}function tc(e,t){do{var n=X;try{if(xo(),Lr.current=rl,nl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}nl=!1}if(Lt=0,ee=Z=V=null,Kn=!1,Zn=0,Po.current=null,n===null||n.return===null){J=1,tr=t,X=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=Ms(o);if(w!==null){w.flags&=-257,Ks(w,o,s,i,t),w.mode&1&&Ls(i,d,t),t=w,u=d;var N=t.updateQueue;if(N===null){var j=new Set;j.add(u),t.updateQueue=j}else N.add(u);break e}else{if(!(t&1)){Ls(i,d,t),Oo();break e}u=Error(k(426))}}else if(W&&s.mode&1){var F=Ms(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ks(F,o,s,i,t),yo(fn(u,s));break e}}i=u=fn(u,s),J!==4&&(J=2),bn===null?bn=[i]:bn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Du(i,u,t);Es(i,f);break e;case 1:s=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(mt===null||!mt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Fu(i,s,t);Es(i,g);break e}}i=i.return}while(i!==null)}lc(n)}catch(z){t=z,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function nc(){var e=ll.current;return ll.current=rl,e===null?rl:e}function Oo(){(J===0||J===3||J===2)&&(J=4),te===null||!(Mt&268435455)&&!(gl&268435455)||st(te,re)}function sl(e,t){var n=M;M|=2;var r=nc();(te!==e||re!==t)&&(We=null,_t(e,t));do try{_f();break}catch(l){tc(e,l)}while(!0);if(xo(),M=n,ll.current=r,X!==null)throw Error(k(261));return te=null,re=0,J}function _f(){for(;X!==null;)rc(X)}function If(){for(;X!==null&&!ed();)rc(X)}function rc(e){var t=oc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?lc(e):X=t,Po.current=null}function lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nf(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(n=Sf(n,t,ge),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function zt(e,t,n){var r=O,l=Re.transition;try{Re.transition=null,O=1,Pf(e,t,n,r)}finally{Re.transition=l,O=r}return null}function Pf(e,t,n,r){do ln();while(ut!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cd(e,i),e===te&&(X=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,sc(Br,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var o=O;O=1;var s=M;M|=4,Po.current=null,zf(e,n),Zu(n,e),Yd(Ni),Hr=!!Si,Ni=Si=null,e.current=n,Cf(n),td(),M=s,O=o,Re.transition=i}else e.current=n;if(zr&&(zr=!1,ut=e,ol=l),i=e.pendingLanes,i===0&&(mt=null),ld(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(il)throw il=!1,e=$i,$i=null,e;return ol&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===Hi?Dn++:(Dn=0,Hi=e):Dn=0,St(),null}function ln(){if(ut!==null){var e=Da(ol),t=Re.transition,n=O;try{if(Re.transition=null,O=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,ol=0,M&6)throw Error(k(331));var l=M;for(M|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(C=d;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:On(8,v,i)}var y=v.child;if(y!==null)y.return=v,C=y;else for(;C!==null;){v=C;var m=v.sibling,w=v.return;if(qu(v),v===d){C=null;break}if(m!==null){m.return=w,C=m;break}C=w}}}var N=i.alternate;if(N!==null){var j=N.child;if(j!==null){N.child=null;do{var F=j.sibling;j.sibling=null,j=F}while(j!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xl(9,s)}}catch(z){q(s,s.return,z)}if(s===o){C=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,C=g;break e}C=s.return}}if(M=l,St(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{O=n,Re.transition=t}}return!1}function Gs(e,t,n){t=fn(n,t),t=Du(e,t,1),e=pt(e,t,1),t=de(),e!==null&&(rr(e,1,t),xe(e,t))}function q(e,t,n){if(e.tag===3)Gs(e,e,n);else for(;t!==null;){if(t.tag===3){Gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=Fu(t,e,1),t=pt(t,e,1),e=de(),t!==null&&(rr(t,1,e),xe(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-Lo?_t(e,0):To|=n),xe(e,t)}function ic(e,t){t===0&&(e.mode&1?(t=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):t=1);var n=de();e=Ze(e,t),e!==null&&(rr(e,t,n),xe(e,n))}function Lf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ic(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ic(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,wf(e,t,n);me=!!(e.flags&131072)}else me=!1,W&&t.flags&1048576&&cu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var l=an(t,ae.current);rn(t,n),l=Co(null,t,r,e,l,n);var i=Eo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wo(t),l.updater=vl,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ki(null,t,r,!0,i,n)):(t.tag=0,W&&i&&po(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Of(r),e=Te(r,e),l){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=Ds(null,t,r,e,n);break e;case 11:t=Os(null,t,r,e,n);break e;case 14:t=bs(null,t,r,Te(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Mi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Ds(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,yu(e,t),el(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=fn(Error(k(423)),t),t=Fs(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(k(424)),t),t=Fs(e,t,r,n,l);break e}else for(ke=ht(t.stateNode.containerInfo.firstChild),we=t,W=!0,Me=null,n=pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===l){t=Je(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&_i(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ji(r,l)?o=null:i!==null&&ji(r,i)&&(t.flags|=32),Bu(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&_i(t),null;case 13:return Hu(e,t,n);case 4:return So(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Os(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,A(Zr,r._currentValue),r._currentValue=o,i!==null)if(be(i.value,o)){if(i.children===l.children&&!ye.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ii(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ii(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=_e(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),bs(e,t,r,l,n);case 15:return Au(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Kr(e,t),t.tag=1,ve(r)?(e=!0,qr(t)):e=!1,rn(t,n),bu(t,r,l),Ti(t,r,l,n),Ki(null,t,r,!0,e,n);case 19:return Wu(e,t,n);case 22:return Uu(e,t,n)}throw Error(k(156,t.tag))};function sc(e,t){return Ma(e,t)}function Kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Kf(e,t,n,r)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Of(e){if(typeof e=="function")return bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===to)return 11;if(e===no)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")bo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bt:return It(n.children,l,i,t);case eo:o=8,l|=8;break;case ni:return e=Ee(12,n,t,l|2),e.elementType=ni,e.lanes=i,e;case ri:return e=Ee(13,n,t,l),e.elementType=ri,e.lanes=i,e;case li:return e=Ee(19,n,t,l),e.elementType=li,e.lanes=i,e;case va:return kl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ma:o=10;break e;case ya:o=9;break e;case to:o=11;break e;case no:o=14;break e;case lt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function kl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=va,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,l,i,o,s,u){return e=new bf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(i),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ac(e){if(!e)return gt;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ve(n))return au(e,n,t)}return t}function uc(e,t,n,r,l,i,o,s,u){return e=Do(n,r,!0,e,l,i,o,s,u),e.context=ac(null),n=e.current,r=de(),l=yt(n),i=qe(r,l),i.callback=t??null,pt(n,i,l),e.current.lanes=l,rr(e,l,r),xe(e,r),e}function wl(e,t,n,r){var l=t.current,i=de(),o=yt(l);return n=ac(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,o),e!==null&&(Oe(e,l,o,i),Tr(e,l,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){qs(e,t),(e=e.alternate)&&qs(e,t)}function Ff(){return null}var cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}Sl.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));wl(e,t,null,null)};Sl.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){wl(null,e,null,null)}),t[Xe]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&$a(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function Af(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=al(o);i.call(d)}}var o=uc(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=o,e[Xe]=o.current,Vn(e.nodeType===8?e.parentNode:e),Kt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=al(u);s.call(d)}}var u=Do(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=u,e[Xe]=u.current,Vn(e.nodeType===8?e.parentNode:e),Kt(function(){wl(t,u,n,r)}),u}function jl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=al(o);s.call(u)}}wl(t,o,e,l)}else o=Af(n,t,e,l,r);return al(o)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(io(t,n|1),xe(t,Y()),!(M&6)&&(hn=Y()+500,St()))}break;case 13:Kt(function(){var r=Ze(e,1);if(r!==null){var l=de();Oe(r,e,1,l)}}),Fo(e,1)}};oo=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=de();Oe(t,e,134217728,n)}Fo(e,134217728)}};Aa=function(e){if(e.tag===13){var t=yt(e),n=Ze(e,t);if(n!==null){var r=de();Oe(n,e,t,r)}Fo(e,t)}};Ua=function(){return O};Ba=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};pi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=pl(r);if(!l)throw Error(k(90));ga(r),si(r,l)}}}break;case"textarea":wa(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ra=Mo;_a=Kt;var Uf={usingClientEntryPoint:!1,Events:[ir,Qt,pl,Ca,Ea,Mo]},jn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{cl=Cr.inject(Bf),Be=Cr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(k(200));return Df(e,t,null,n)};Ne.createRoot=function(e,t){if(!Uo(e))throw Error(k(299));var n=!1,r="",l=cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Ao(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ta(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Kt(e)};Ne.hydrate=function(e,t,n){if(!Nl(t))throw Error(k(200));return jl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=cc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=uc(t,null,e,1,n??null,l,!1,i,o),e[Xe]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)};Ne.render=function(e,t,n){if(!Nl(t))throw Error(k(200));return jl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(k(40));return e._reactRootContainer?(Kt(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ne.unstable_batchedUpdates=Mo;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Nl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return jl(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)}catch(e){console.error(e)}}dc(),da.exports=Ne;var $f=da.exports,Xs=$f;ei.createRoot=Xs.createRoot,ei.hydrateRoot=Xs.hydrateRoot;function Hf({chapter:e,onChapterClick:t}){const[n,r]=I.useState(!1),l=()=>{r(i=>!i),t&&e.chunkIndex!==void 0&&t(e.chunkIndex)};return a.jsxs("div",{className:"toc-node",children:[a.jsxs("div",{className:`toc-chapter ${n?"toc-chapter-open":""}`,onClick:l,children:[a.jsx("span",{className:"toc-arrow",children:n?"▼":"▶"}),a.jsx("span",{className:"toc-chapter-title",children:e.title})]}),n&&e.sections&&e.sections.map(i=>a.jsx(Wf,{section:i,onChapterClick:t},i.id))]})}function Wf({section:e,onChapterClick:t}){const[n,r]=I.useState(!1),l=e.subsections&&e.subsections.length>0,i=()=>{l&&r(o=>!o),t&&e.chunkIndex!==void 0&&t(e.chunkIndex)};return a.jsxs("div",{className:"toc-section-node",children:[a.jsxs("div",{className:"toc-section-item",onClick:i,children:[l&&a.jsx("span",{className:"toc-section-arrow",children:n?"▾":"▸"}),a.jsx("span",{className:"toc-section-title",children:e.title})]}),n&&l&&e.subsections.map(o=>a.jsx("div",{className:"toc-subsection-item",onClick:()=>t&&t(o.chunkIndex),children:o.title},o.id))]})}const b=(e,t,n)=>({bookId:e,bookTitle:t,chapters:n}),x=(e,t,n,r)=>({id:e,title:t,chunkIndex:n,sections:r.map((l,i)=>({id:`${e}-${i+1}`,title:l,chunkIndex:n}))}),Qf={"god-1":b("god-1","이병철회장의 24가지 질문",[x("ch1","1부. 신과 우주 (1~4번)",1,["1. 신의 존재를 어떻게 증명할 수 있나? 신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?","2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?","3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데, 신의 인간창조와 어떻게 다른가? 인간이나 생물도 진화의 산물 아닌가?","4. 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?"]),x("ch2","2부. 신과 인간 (5~9번)",2,["5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?","6. 신은 왜 악인을 만들었는가? 예: 히틀러나 스탈린, 또는 갖가지 흉악범들","7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데 우리의 죄란 무엇인가? 왜 우리로 하여금 죄를 짓게 내버려 두었는가?","8. 성경은 어떻게 만들어 졌는가? 그것이 하느님의 말씀이라는 것을 어떻게 증명할 수 있나?","9. 종교란 무엇인가? 왜 인간에게 필요한가?"]),x("ch3","3부. 영혼과 내세 (10~14번)",3,["10. 영혼이란 무엇인가?","11. 종교의 종류와 특징은 무엇인가?","12. 천주교를 믿지 않고는 천국에 갈 수 없는가? 무종교인, 무신론자, 타종교인들 중에도 착한 사람이 많은데, 이들은 죽어서 어디로 가는가?","13. 종교의 목적은 모두 착하게 사는 것인데, 왜 천주교만 제일이고 다른 종교는 이단시하나?","14. 인간이 죽은 후에 영혼은 죽지 않고 천국이나 지옥으로 간다는 것을 어떻게 믿을 수 있나?"]),x("ch4","4부. 신앙과 사회 (15~20번)",4,["15. 신앙이 없어도 부귀를 누리고, 악인 중에도 부귀와 안락을 누리는 사람이 많은데, 신의 교훈은 무엇인가?","16. 성경에 부자가 천국에 가는 것을 약대가 바늘구멍에 들어가는 것에 비유했는데, 부자는 악인이란 말인가?","17. 이태리 같은 나라는 국민의 99%가 천주교도인데, 사회혼란과 범죄가 왜 그리 많으며 세계의 모범국이 되지 못하는가?","18. 신앙인은 때때로 광인처럼 되는데, 공산당원이 공산주의에 미치는 것과 어떻게 다른가?","19. 천주교와 공산주의는 상극이라고 하는데, 천주교도가 많은 나라들이 왜 공산국이 되었나? 예: 폴란드 등 동구제국","20. 우리나라는 두 집 건너 교회가 있고 신자도 많은데, 사회 범죄와 시련이 왜 그리 많은가?"]),x("ch5","5부. 교회와 종말 (21~24번)",5,["21. 로마 교황의 결정에 잘못이 없다는데, 그도 사람인데 어떻게 그런 독선이 가능한가?","22. 신부는 어떤 사람인가? 왜 독신인가? 수녀는 어떤 사람인가? 왜 독신인가?","23. 천주교의 어떤 단체는 기업주를 착취자로, 근로자를 착취 당하는 자로 단정하는데, 자본주의 체제와 미덕을 부인하는 것인가?","24. 지구의 종말은 오는가?"])]),"human-1":b("human-1","인간의 조건",[x("ch1","Ⅰ. 인간 조건",0,["노동, 작업, 행위","공적 영역과 사적 영역"]),x("ch2","Ⅱ. 노동",1,["노동의 본질","노동과 생명","노동의 인간성"]),x("ch3","Ⅲ. 작업",1,["세계의 영속성","사물의 물질성"]),x("ch4","Ⅳ. 행위",2,["인간 복수성의 원리","행위와 언어","행위의 조건"])]),"human-2":b("human-2","이기적 유전자",[x("ch1","Ⅰ. 유전자란 무엇인가",0,["복제자의 탄생","유전자의 불멸성"]),x("ch2","Ⅱ. 이기적 유전자의 행동",1,["개체와 유전자","협력과 경쟁","이타주의의 기원"]),x("ch3","Ⅲ. 밈: 문화적 유전자",2,["밈의 탄생","밈의 진화","밈과 유전자"])]),"human-3":b("human-3","사피엔스",[x("ch1","Ⅰ. 인지 혁명",0,["역사상 가장 위험한 종","역사의 나무","허구의 힘"]),x("ch2","Ⅱ. 농업 혁명",1,["역사상 최대의 사기","피라미드 건설","기억의 과부하"]),x("ch3","Ⅲ. 인류의 통합",1,["돈의 냄새","제국의 비전","종교의 법칙"]),x("ch4","Ⅳ. 과학 혁명",2,["무지의 발견","과학과 제국","자본주의 교리"])]),"family-1":b("family-1","82년생 김지영",[x("ch1","2015년",0,["어머니가 된 김지영","정신과 상담"]),x("ch2","2000년-2011년",1,["취업과 결혼","직장 내 차별","경력 단절"]),x("ch3","1995년-1999년",1,["학창시절의 차별","진로 선택"]),x("ch4","1982년-1994년",2,["어린 시절","가족 안의 차별"])]),"family-2":b("family-2","아버지와 나",[x("ch1","Ⅰ. 유년의 기억",0,["고향에서의 삶","가족의 온기"]),x("ch2","Ⅱ. 전쟁의 상흔",1,["오빠의 죽음","전쟁과 가족"]),x("ch3","Ⅲ. 삶의 재건",2,["어머니와 나","새로운 시작"])]),"enterprise-new":{bookId:"enterprise-new",bookTitle:"신입사원을 위한 직장생활 지침서",chapters:[x("ch1","Ⅰ. 직장이란?",1,["청춘은 갖추는 시기","직장은 사회 학교, 월급은 학비"]),x("ch2","Ⅱ. 직장 구성원이 가져야 할 마인드",2,["컵원리","노동자에서 연구원으로","기업이념"]),x("ch3","Ⅲ. 슬기로운 직장생활 (업무편)",3,["입사 초년생의 역할","회사에서는 회사 일을","효율적인 업무처리 방법"]),x("ch4","Ⅳ. 슬기로운 직장생활 (인간관계 편)",4,["운용의 시대, 소통의 중요성","직장에서 소통을 잘하려면","효과적인 의사표현","상대를 이해하는 TIP"]),x("ch5","Ⅴ. 슬기로운 직장생활 (급여와 자기 관리 편)",5,["급여 사용법","직장인의 재테크","연봉 협상","자기 관리법"]),x("ch6","Ⅵ. 직장 내 갈등 해결",6,["의견 충돌 이유","갈등 해결 핵심","갈등사례 해결법"]),x("ch7","Ⅶ. 이직과 퇴사",7,["이직을 원하는 이유","바른 이직 방법","나에게 맞는 일과 조직 찾는 법"])]},"enterprise-2":b("enterprise-2","제로 투 원",[x("ch1","Ⅰ. 미래에 도전하라",0,["0에서 1로","파티는 끝났는가"]),x("ch2","Ⅱ. 과거에서 배우기",1,["닷컴버블의 교훈","행복한 기업들의 공통점"]),x("ch3","Ⅲ. 독점의 철학",2,["경쟁은 패자들의 것","독점 기업의 특징"])]),"enterprise-3":b("enterprise-3","린 스타트업",[x("ch1","Ⅰ. 비전",0,["시작","정의"]),x("ch2","Ⅱ. 조종",1,["도약","테스트","측정","피벗"]),x("ch3","Ⅲ. 가속",2,["배치","성장","적응"])]),"nation-1":b("nation-1","국가론",[x("ch1","Ⅰ. 정의란 무엇인가",0,["트라시마코스의 도전","정의의 이득"]),x("ch2","Ⅱ. 이상 국가의 건설",1,["국가의 기원","수호자 계급","교육 체계"]),x("ch3","Ⅲ. 철인왕",2,["철학자의 본성","동굴의 비유","선의 이데아"]),x("ch4","Ⅳ. 정치체제의 분류",2,["과두제와 민주제","참주제"])]),"nation-2":b("nation-2","군주론",[x("ch1","Ⅰ. 군주국의 종류",0,["세습 군주국","새로운 군주국"]),x("ch2","Ⅱ. 군사력에 대하여",1,["용병과 보조군","자국군"]),x("ch3","Ⅲ. 군주의 자질",2,["덕과 운","두려움과 사랑","잔인함과 관대함"])]),"religion-1":b("religion-1","종교의 미래",[x("ch1","Ⅰ. 신에 대한 관념의 역사",0,["초기 종교","축의 시대"]),x("ch2","Ⅱ. 세계 주요 종교",1,["유대교의 진화","기독교의 발전","이슬람의 탄생"]),x("ch3","Ⅲ. 현대와 종교",2,["세속화의 도전","근본주의의 부상"]),x("ch4","Ⅳ. 종교의 미래",2,["연민의 종교","새로운 영성"])]),"religion-2":b("religion-2","신은 위대하지 않다",[x("ch1","Ⅰ. 종교가 모든 것을 망친다",0,["종교의 독성","종교적 폭력의 역사"]),x("ch2","Ⅱ. 성서의 문제",1,["구약의 잔혹함","신약의 허점"]),x("ch3","Ⅲ. 이슬람의 현실",2,["무함마드의 실제","지하드의 의미"])]),"economy-1":b("economy-1","국부론",[x("ch1","Ⅰ. 노동의 생산력",0,["분업의 원리","분업의 기원"]),x("ch2","Ⅱ. 상품의 가격",1,["노동가치설","자연가격과 시장가격"]),x("ch3","Ⅲ. 자본의 성질",2,["자본의 종류","화폐의 기능"]),x("ch4","Ⅳ. 국가의 富",2,["중상주의 비판","자유무역론"])]),"economy-2":b("economy-2","자본론",[x("ch1","Ⅰ. 상품과 화폐",0,["상품의 두 요소","교환가치","화폐의 기능"]),x("ch2","Ⅱ. 잉여가치의 생산",1,["노동력의 구매","잉여가치율","절대적 잉여가치"]),x("ch3","Ⅲ. 자본의 축적",2,["단순재생산","확대재생산","자본집적"])]),"economy-3":b("economy-3","21세기 자본",[x("ch1","Ⅰ. 소득과 자본",0,["자본/소득 비율","성장의 환상"]),x("ch2","Ⅱ. 자본/소득 비율의 동학",1,["자본의 변신","신구세계의 자본"]),x("ch3","Ⅲ. 불평등의 구조",2,["노동소득의 불평등","자본소득의 불평등"]),x("ch4","Ⅳ. 규제",2,["글로벌 자본세","공공부채"])]),"society-1":b("society-1","사회계약론",[x("ch1","Ⅰ. 사회질서의 근거",0,["최초의 협약","노예제의 권리"]),x("ch2","Ⅱ. 사회계약",1,["계약의 조건","주권자","시민적 상태"]),x("ch3","Ⅲ. 일반의지",2,["주권의 불가양도성","법률","입법자"]),x("ch4","Ⅳ. 정부의 종류",2,["민주제","귀족제","군주제"])]),"society-2":b("society-2","군중심리",[x("ch1","Ⅰ. 군중의 영혼",0,["군중의 일반적 특성","군중의 감정과 도덕성"]),x("ch2","Ⅱ. 군중의 의견과 신념",1,["간접적 요인","직접적 요인","선동가들"]),x("ch3","Ⅲ. 군중의 분류",2,["이질적 군중","동질적 군중","선거 군중"])]),"environment-1":b("environment-1","침묵의 봄",[x("ch1","Ⅰ. 생명의 그물",0,["침묵의 마을","의무의 의무"]),x("ch2","Ⅱ. 독소의 세계",1,["죽음의 묘약","표면수와 지하수","토양의 왕국"]),x("ch3","Ⅲ. 생태계의 반격",2,["새들이 사라지다","물고기의 죽음","자연의 보복"])]),"environment-2":b("environment-2","6도의 악몽",[x("ch1","Ⅰ. 1도 상승",0,["온난화의 시작","첫 번째 징후"]),x("ch2","Ⅱ. 2~3도 상승",1,["빙하의 소멸","아마존의 붕괴"]),x("ch3","Ⅲ. 4~5도 상승",2,["해수면 상승","문명의 위기"]),x("ch4","Ⅳ. 6도 상승",2,["대멸종","인류의 미래"])]),"health-1":b("health-1","몸의 일기",[x("ch1","Ⅰ. 태어나다",0,["첫 번째 몸","유아기"]),x("ch2","Ⅱ. 자라다",1,["어린 시절의 몸","청소년기"]),x("ch3","Ⅲ. 성숙과 노화",2,["욕망하는 몸","일하는 몸","늙어가는 몸"])]),"health-2":b("health-2","음식의 제국",[x("ch1","Ⅰ. 감자튀김 왕국",0,["목장에서 식탁까지","맛의 비밀"]),x("ch2","Ⅱ. 도살장의 진실",1,["노동자들","식품 안전"]),x("ch3","Ⅲ. 세계화",2,["글로벌 확산","저항 운동"])]),"universe-1":b("universe-1","코스모스",[x("ch1","Ⅰ. 코스모스의 해안",0,["우주의 크기","은하수"]),x("ch2","Ⅱ. 우주 생명",1,["생명의 탄생","외계 생명체"]),x("ch3","Ⅲ. 별들의 삶과 죽음",2,["별의 탄생","초신성","블랙홀"])]),"universe-2":b("universe-2","시간의 역사",[x("ch1","Ⅰ. 우주에 대한 우리의 그림",0,["우주론의 역사","공간과 시간"]),x("ch2","Ⅱ. 팽창하는 우주",1,["빅뱅","불확정성 원리"]),x("ch3","Ⅲ. 블랙홀과 시간",2,["블랙홀의 생성","시간의 화살","통일이론"])]),"universe-3":b("universe-3","엘러건트 유니버스",[x("ch1","Ⅰ. 끈의 가장자리",0,["이론의 문제","상대성과 양자역학"]),x("ch2","Ⅱ. 초끈이론",1,["끈의 발견","진동하는 우주"]),x("ch3","Ⅲ. M이론",2,["더 깊은 구조","막의 세계","양자 기하학"])]),"science-1":b("science-1","과학혁명의 구조",[x("ch1","Ⅰ. 역사의 역할",0,["과학사란","정상과학의 길"]),x("ch2","Ⅱ. 패러다임과 위기",1,["이상현상","위기의 시작","과학혁명"]),x("ch3","Ⅲ. 혁명의 완성",2,["패러다임 전환","진보로서의 혁명"])]),"science-2":b("science-2","부분과 전체",[x("ch1","Ⅰ. 원자론의 시작",0,["첫 번째 대화","뮌헨의 추억"]),x("ch2","Ⅱ. 코펜하겐 정신",1,["보어와의 만남","양자역학의 탄생"]),x("ch3","Ⅲ. 불확정성과 실재",2,["불확정성 원리","언어와 실재","물리학의 한계"])]),"research-1":b("research-1","총균쇠",[x("ch1","Ⅰ. 역사의 출발점",0,["얄리의 질문","역사의 자연실험"]),x("ch2","Ⅱ. 식량생산의 기원",1,["농업혁명","가축화","지리적 조건"]),x("ch3","Ⅲ. 총, 균, 쇠",2,["세균의 역할","알파벳의 확산","기술의 전파"]),x("ch4","Ⅳ. 대륙의 역사",2,["아프리카","아메리카","아시아"])]),"research-2":b("research-2","생각에 관한 생각",[x("ch1","Ⅰ. 두 시스템",0,["시스템1과 시스템2","자동 조종 장치"]),x("ch2","Ⅱ. 휴리스틱과 편향",1,["가용성 편향","대표성 편향","기준점 효과"]),x("ch3","Ⅲ. 과신과 선택",2,["전문가의 직관","프레이밍 효과","손실 회피"])])},Vf={bookId:"enterprise-new",bookTitle:"신입사원을 위한 직장생활 지침서",chapters:[{id:"ch1",title:"Ⅰ. 직장이란?",chunkIndex:1,sections:[{id:"ch1-1",title:"  1. 청춘은 갖추는 시기",chunkIndex:1,subsections:[{id:"ch1-1-1",title:"    1) 젊음이 아름다운 이유",chunkIndex:1},{id:"ch1-1-2",title:"    2) 즐거우니 청춘이다.",chunkIndex:2}]},{id:"ch1-2",title:"  2. 직장은 사회 학교, 월급은 학비",chunkIndex:3,subsections:[{id:"ch1-2-1",title:"    1) 직장의 시대적 변화",chunkIndex:3},{id:"ch1-2-2",title:"    2) 사회에 진입하는 자세",chunkIndex:4},{id:"ch1-2-3",title:"    3) 직장은 사회 학교",chunkIndex:5},{id:"ch1-2-4",title:"    4) 월급은 학비",chunkIndex:6}]}]},{id:"ch2",title:"Ⅱ. 직장 구성원이 가져야 할 마인드",chunkIndex:7,sections:[{id:"ch2-1",title:"  1. 컵원리",chunkIndex:7,subsections:[{id:"ch2-1-1",title:"    1) 컵원리",chunkIndex:8},{id:"ch2-1-2",title:"    2) 컵원리가 삶에 미치는 영향",chunkIndex:9}]},{id:"ch2-2",title:"  2. 노동자에서 연구원으로",chunkIndex:10,subsections:[{id:"ch2-2-1",title:"    1) 노동을 하면 힘든 이유",chunkIndex:10},{id:"ch2-2-2",title:"    2) 노동자와 연구원의 차이",chunkIndex:11},{id:"ch2-2-3",title:"    3) 연구를 해야 하는 이유",chunkIndex:12}]},{id:"ch2-3",title:"  3. 기업이념",chunkIndex:13,subsections:[{id:"ch2-3-1",title:"    1) 이념 있는 직장",chunkIndex:13}]}]},{id:"ch3",title:"Ⅲ. 슬기로운 직장생활 (업무편)",chunkIndex:14,sections:[{id:"ch3-1",title:"  1. 입사 초년생의 역할",chunkIndex:14,subsections:[{id:"ch3-1-1",title:"    1) 신입사원의 바른 자세",chunkIndex:14},{id:"ch3-1-2",title:"    2) 공부하는 신입사원의 자세",chunkIndex:15}]},{id:"ch3-2",title:"  2. 회사에서는 회사 일을",chunkIndex:16,subsections:[{id:"ch3-2-1",title:"    1) 업무시간에는 업무만",chunkIndex:16},{id:"ch3-2-2",title:"    2) 동료들간의 소통은 기본",chunkIndex:17},{id:"ch3-2-3",title:"    3) 여성의 업무 집중도",chunkIndex:18}]},{id:"ch3-3",title:"  3. 효율적인 업무처리 방법",chunkIndex:19,subsections:[{id:"ch3-3-1",title:"    1) 신입사원의 효율적인 업무처리 방법",chunkIndex:19},{id:"ch3-3-2",title:"    2) 신입사원의 회사생활",chunkIndex:20}]}]},{id:"ch4",title:"Ⅳ. 슬기로운 직장생활 (인간관계 편)",chunkIndex:21,sections:[{id:"ch4-1",title:"  1. 운용의 시대, 소통의 중요성",chunkIndex:21,subsections:[]},{id:"ch4-2",title:"  2. 직장에서 소통을 잘하려면 - 갑을관계 이해",chunkIndex:22,subsections:[{id:"ch4-2-1",title:"    1) 갑과 을의 관계 이해",chunkIndex:22},{id:"ch4-2-2",title:"    2) 갑의 역할",chunkIndex:23},{id:"ch4-2-3",title:"    3) 을의 역할",chunkIndex:24}]},{id:"ch4-3",title:"  3. 효과적인 의사표현을 하려면",chunkIndex:25,subsections:[{id:"ch4-3-1",title:"    1) 소통이란?",chunkIndex:25},{id:"ch4-3-2",title:"    2) 경청",chunkIndex:26},{id:"ch4-3-3",title:"    3) 상대가 물은 크기만큼 대답할 것",chunkIndex:27},{id:"ch4-3-4",title:"    4) 상대가 이해되게 말할 것",chunkIndex:28},{id:"ch4-3-5",title:"    5) 겸손",chunkIndex:29}]},{id:"ch4-4",title:"  4. 상대를 이해하는 TIP (체질)",chunkIndex:30,subsections:[{id:"ch4-4-1",title:"    1) 체질에 따른 팀구성의 중요성",chunkIndex:30},{id:"ch4-4-2",title:"    2) 체질별 특성",chunkIndex:31}]}]},{id:"ch5",title:"Ⅴ. 슬기로운 직장생활 (급여와 자기 관리 편)",chunkIndex:32,sections:[{id:"ch5-1",title:"  1. 급여 사용법",chunkIndex:32,subsections:[{id:"ch5-1-1",title:"    1) 신개념 저축법 - 나를 갖추어야 한다",chunkIndex:32},{id:"ch5-1-2",title:"    2) 바른 주식 투자법 - 30% 투자법",chunkIndex:33}]},{id:"ch5-2",title:"  2. 직장인의 재테크 - 논문 작성",chunkIndex:34,subsections:[]},{id:"ch5-3",title:"  3. 연봉 협상 해야할까?",chunkIndex:35,subsections:[]},{id:"ch5-4",title:"  4. 직장인의 자기 관리법",chunkIndex:36,subsections:[{id:"ch5-4-1",title:"    1) 시간 관리 - 24시간 활용법",chunkIndex:36},{id:"ch5-4-2",title:"    2) 스트레스 관리법",chunkIndex:37},{id:"ch5-4-3",title:"    3) 직장인의 옷차림",chunkIndex:38}]}]},{id:"ch6",title:"Ⅵ. 직장 내 갈등 해결",chunkIndex:39,sections:[{id:"ch6-1",title:"  1. 직장 내 의견 충돌 이유",chunkIndex:39,subsections:[{id:"ch6-1-1",title:"    1) 실력차이로 인한 불통",chunkIndex:39},{id:"ch6-1-2",title:"    2) 갑을관계의 오해",chunkIndex:40}]},{id:"ch6-2",title:"  2. 직장 내 갈등 해결 핵심",chunkIndex:41,subsections:[{id:"ch6-2-1",title:"    1) 실력차이를 극복하려면",chunkIndex:41},{id:"ch6-2-2",title:"    2) 월권행위를 했을때",chunkIndex:42},{id:"ch6-2-3",title:"    3) 의논하라",chunkIndex:43}]},{id:"ch6-3",title:"  3. 직장 내 갈등사례 해결법",chunkIndex:44,subsections:[{id:"ch6-3-1",title:"    1) 상사의 불합리한 요구 대처법",chunkIndex:44},{id:"ch6-3-2",title:"    2) 실력 없는 상사와 충돌 시",chunkIndex:45},{id:"ch6-3-3",title:"    3) 화내는 상사 대처법",chunkIndex:46},{id:"ch6-3-4",title:"    4) 지속적으로 자존감을 떨어뜨리는 상사",chunkIndex:47},{id:"ch6-3-5",title:"    5) 잘난체하는 직원을 대하는 법",chunkIndex:48},{id:"ch6-3-6",title:"    6) 독고다이 회사생활",chunkIndex:49},{id:"ch6-3-7",title:"    7) 상대의 말을 자주 끊는 사람 대처법",chunkIndex:50},{id:"ch6-3-8",title:"    8) 노조 가입해야 하나?",chunkIndex:51}]}]},{id:"ch7",title:"Ⅶ. 이직과 퇴사",chunkIndex:52,sections:[{id:"ch7-1",title:"  1. 이직을 원하는 이유",chunkIndex:52,subsections:[]},{id:"ch7-2",title:"  2. 바른 이직 방법",chunkIndex:53,subsections:[{id:"ch7-2-1",title:"    1) 이직할 때 마음가짐",chunkIndex:53},{id:"ch7-2-2",title:"    2) 바른 이직의 조건",chunkIndex:54}]},{id:"ch7-3",title:"  3. 나에게 맞는 일과 조직 찾는 법",chunkIndex:55,subsections:[{id:"ch7-3-1",title:"    1) 적성에 맞지 않는 일을 할 때",chunkIndex:55},{id:"ch7-3-2",title:"    2) 나에게 맞는 일을 찾아 재밌게 회사 다니기",chunkIndex:56}]},{id:"ch7-4",title:"  4. 퇴사",chunkIndex:57,subsections:[]},{id:"ch7-5",title:"  5. 이직을 고려 중이라면…",chunkIndex:58,subsections:[]}]},{id:"ch8",title:"Ⅷ. 성공적인 직장생활을 위하여",chunkIndex:59,sections:[{id:"ch8-1",title:"  1. 승진을 잘하려면?",chunkIndex:59,subsections:[]},{id:"ch8-2",title:"  2. 자리가 사람을 만든다?",chunkIndex:60,subsections:[]},{id:"ch8-3",title:"  3. 스펙! 어디까지 쌓아야 하나?",chunkIndex:61,subsections:[]},{id:"ch8-4",title:"  4. 사회를 위한 삶",chunkIndex:62,subsections:[{id:"ch8-4-1",title:"    1) 성공의 기준을 다시 묻다",chunkIndex:62},{id:"ch8-4-2",title:"    2) 직장은 배움의 현장",chunkIndex:63},{id:"ch8-4-3",title:"    3) 진로의 본질은 사회적 책임, 이념을 세워라",chunkIndex:64},{id:"ch8-4-4",title:"    4) 사회를 위한 삶",chunkIndex:65}]}]}]},Gf={bookId:"god-1",bookTitle:"이병철회장의 24가지 질문",chapters:[{id:"ch1",title:"1. 신의 존재를 어떻게 증명할 수 있나?",chunkIndex:1},{id:"ch2",title:"2. 신은 우주만물의 창조주라는데?",chunkIndex:2},{id:"ch3",title:"3. 인간도 진화과정의 산물인가?",chunkIndex:3},{id:"ch4",title:"4. 과학이 발달하면 신이 부인되는가?",chunkIndex:4},{id:"ch5",title:"5. 신은 왜 고통과 불행을 주었는가?",chunkIndex:5},{id:"ch6",title:"6. 신은 왜 악인을 만들었는가?",chunkIndex:6},{id:"ch7",title:"7. 예수는 왜 죽었는가?",chunkIndex:7},{id:"ch8",title:"8. 성경은 어떻게 만들어 졌는가?",chunkIndex:8},{id:"ch9",title:"9. 종교란 무엇인가?",chunkIndex:9},{id:"ch10",title:"5. 신은 왜 고통과 불행을 주었는가?",chunkIndex:10},{id:"ch11",title:"11. 종교의 종류와 특징은?",chunkIndex:11},{id:"ch12",title:"12. 천주교 외에도 천국에 갈 수 있나?",chunkIndex:12},{id:"ch13",title:"13. 왜 천주교만 제일인가?",chunkIndex:13},{id:"ch14",title:"14. 천국과 지옥을 어떻게 믿는가?",chunkIndex:14},{id:"ch15",title:"15. 악인도 부귀를 누리는데 신의 교훈은?",chunkIndex:15},{id:"ch16",title:"16. 부자는 악인인가?",chunkIndex:16},{id:"ch17",title:"17. 이태리는 왜 모범국이 못되나?",chunkIndex:17},{id:"ch18",title:"18. 신앙인이 광인처럼 되는 것은?",chunkIndex:18},{id:"ch19",title:"19. 천주교 국가가 왜 공산국이 되었나?",chunkIndex:19},{id:"ch20",title:"20. 한국은 왜 범죄가 많은가?",chunkIndex:20},{id:"ch21",title:"21. 교황의 독선이 어떻게 가능한가?",chunkIndex:21},{id:"ch22",title:"22. 신부와 수녀는 왜 독신인가?",chunkIndex:22},{id:"ch23",title:"23. 천주교 단체가 자본주의를 부인하는가?",chunkIndex:23},{id:"ch24",title:"24. 지구의 종말은 오는가?",chunkIndex:24}]},qf={"enterprise-new":Vf,"god-1":Gf};function Yf({selectedBook:e,onChapterClick:t}){const n=qf[e.id]||Qf[e.id];return a.jsxs("div",{className:"toc-tree",children:[a.jsxs("div",{className:"toc-book-header",children:[a.jsx("img",{src:e.cover,alt:e.title,className:"toc-book-cover"}),a.jsxs("div",{className:"toc-book-info",children:[a.jsx("p",{className:"toc-book-title",children:e.title}),a.jsx("p",{className:"toc-book-author",children:e.author})]})]}),n?a.jsxs("div",{className:"toc-list",children:[a.jsx("p",{className:"toc-section-label",children:"목차"}),n.chapters.map(r=>a.jsx(Hf,{chapter:r,onChapterClick:t},r.id))]}):a.jsx("div",{className:"toc-empty",children:a.jsx("p",{children:"목차 준비 중입니다."})})]})}function Xf({isOpen:e,selectedBook:t,onChapterClick:n}){return e?a.jsx("div",{className:"sidebar-content",children:t?a.jsx(Yf,{selectedBook:t,onChapterClick:n}):a.jsxs("div",{className:"sidebar-default",children:[a.jsx("div",{className:"sidebar-image-wrap",children:a.jsx("img",{src:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",alt:"온라인 인문학 소개 이미지",className:"sidebar-image"})}),a.jsx("div",{className:"sidebar-intro",children:a.jsxs("p",{className:"sidebar-intro-desc",children:["메뉴에서 책을 선택하면",a.jsx("br",{}),"목차가 이곳에 표시됩니다."]})})]})}):null}function Zs({children:e,minHeight:t=200}){const[n,r]=I.useState(!1),l=I.useRef(null);return I.useEffect(()=>{const i=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(r(!0),i.unobserve(s.target))})},{rootMargin:"200px",threshold:0});return l.current&&i.observe(l.current),()=>i.disconnect()},[]),a.jsx("div",{ref:l,style:{minHeight:n?"auto":`${t}px`},children:n?e:a.jsx("div",{style:{height:`${t}px`,display:"flex",alignItems:"center",justifyContent:"center",color:"#ccc",fontSize:"13px"},children:"로딩 중..."})})}const Bo={id:"enterprise-new",title:"직장 내 자기 가치를 높이는 신입사원 업무스킬",subtitle:"신입사원을 위한 직장생활 지침서",author:"김미전, 김태희 외 4인",publisher:"정법시대",publishDate:"2025년 10월 20일",isbn:"9788967997878",pages:139,size:"419 x 595 mm",price:17e3,discountRate:10,discountPrice:15300,points:850,cover:"../img/company_employee.png",badges:["MD의 선택","무료배송","소득공제"],category:"국내도서 > 자기계발 > 비즈니스능력개발 > 신입사원",intro:`신입사원 & 사회 초년생들을 위한 직장생활 지침서

이 책은 7인이 함께 '신입사원을 위한 직장생활 지침서'라는 주제로, 유튜브 jungbub2013 채널에 올라온 천공스승님의 주옥같은 법문 중 '신입사원을 위한' 내용을 정성껏 모아 엮은 것입니다.

자연의 법칙에 기반한 바른 분별력은 직장 내 인간관계의 복잡한 실타래를 풀고, 당면한 문제의 본질을 꿰뚫어 보며, 이직과 퇴사의 기로에서 현명한 선택을 내릴 수 있도록 도울 것입니다.`,authorInfo:"이 책은 정법을 공부하는 7인이 함께 집필하였습니다. 참여한 7인 중에는 정법을 20년 넘게 공부하신 분도 계시고, 2년 남짓 공부하신 분도 계십니다. 모두가 사랑하는 가족이 사회에 첫발을 내딛을 때 꼭 전해주고 싶은 가르침만 모아 이 책을 만들었습니다.",tocFull:["프롤로그","","Ⅰ. 직장이란?","  1. 청춘은 갖추는 시기","    1) 젊음이 아름다운 이유","    2) 즐거우니 청춘이다.","  2. 직장은 사회 학교, 월급은 학비","    1) 직장의 시대적 변화","    2) 사회에 진입하는 자세","    3) 직장은 사회 학교","    4) 월급은 학비","","Ⅱ. 직장 구성원이 가져야 할 마인드","  1. 컵원리","    1) 컵원리","    2) 컵원리가 삶에 미치는 영향","  2. 노동자에서 연구원으로","    1) 노동을 하면 힘든 이유","    2) 노동자와 연구원의 차이","    3) 연구를 해야 하는 이유","  3. 기업이념","    1) 이념 있는 직장","","Ⅲ. 슬기로운 직장생활 (업무편)","  1. 입사 초년생의 역할 (신입사원의 바른 자세)","    1) 신입사원의 바른 자세","    2) 공부하는 신입사원의 자세","  2. 회사에서는 회사 일을","    1) 업무시간에는 업무만","    2) 동료들간의 소통은 기본","    3) 여성의 업무 집중도","  3. 효율적인 업무처리 방법","    1) 신입사원의 효율적인 업무처리 방법","    2) 신입사원의 회사생활","","Ⅳ. 슬기로운 직장생활 (인간관계 편)","  1. 운용의 시대, 소통의 중요성","  2. 직장에서 소통을 잘하려면 - 갑을관계 이해","    1) 갑과 을의 관계 이해","    2) 갑의 역할","    3) 을의 역할","  3. 효과적인 의사표현을 하려면","    1) 소통이란?","    2) 경청","    3) 상대가 물은 크기만큼 대답할 것","    4) 상대가 이해되게 말할 것","    5) 겸손","  4. 상대를 이해하는 TIP (체질)","    1) 체질에 따른 팀구성의 중요성","    2) 체질별 특성","","Ⅴ. 슬기로운 직장생활 (급여와 자기 관리 편)","  1. 급여 사용법","    1) 신개념 저축법 - 나를 갖추어야 한다","    2) 바른 주식 투자법 - 30% 투자법","  2. 직장인의 재테크 - 논문 작성","  3. 연봉 협상 해야할까?","  4. 직장인의 자기 관리법","    1) 시간 관리 - 24시간 활용법","    2) 스트레스 관리법","    3) 직장인의 옷차림","","Ⅵ. 직장 내 갈등 해결","  1. 직장 내 의견 충돌 이유","    1) 실력차이로 인한 불통","    2) 갑을관계의 오해","  2. 직장 내 갈등 해결 핵심","    1) 실력차이를 극복하려면","    2) 월권행위를 했을때","    3) 의논하라","  3. 직장 내 갈등사례 해결법","    1) 상사의 불합리한 요구 대처법","    2) 실력 없는 상사와 충돌 시","    3) 화내는 상사 대처법","    4) 지속적으로 자존감을 떨어뜨리는 상사 대처법","    5) 잘난체하는 직원을 대하는 법","    6) 독고다이 회사생활","    7) 상대의 말을 자주 끊는 사람 대처법","    8) 노조 가입해야 하나?","","Ⅶ. 이직과 퇴사","  1. 이직을 원하는 이유","  2. 바른 이직 방법","    1) 이직할 때 마음가짐","    2) 바른 이직의 조건","  3. 나에게 맞는 일과 조직 찾는 법","    1) 적성에 맞지 않는 일을 할 때","    2) 나에게 맞는 일을 찾아 재밌게 회사를 다니는 법","  4. 퇴사","  5. 이직을 고려 중이라면…","","Ⅷ. 성공적인 직장생활을 위하여","  1. 승진을 잘하려면?","  2. 자리가 사람을 만든다?","  3. 스펙! 어디까지 쌓아야 하나?","  4. 사회를 위한 삶","    1) 성공의 기준을 다시 묻다","    2) 직장은 배움의 현장","    3) 진로의 본질은 사회적 책임, 이념을 세워라","    4) 사회를 위한 삶","","에필로그"],preview:`
젊음이라는 단어를 들으면 설렘, 기대, 희망이
느껴지면서 아름답다고 합니다. 우리는 왜 젊음을
아름답다고 할까요? 젊음이 아름다운 이유는 차곡차곡
실력을 쌓을 수 있는 기회가 있기 때문입니다. 젊은
청춘들에게는 사람들도, 환경들도 그들이 실력을 갖출 수
있도록 많은 기회를 주게 됩니다. 그래서 사회에 어디를
가더라도 예쁘게 보이는 것입니다.
하지만 이렇게 주어지는 많은 기회들과 충만해진 젊음의
패기로 지금 무언가를 이루려고 해서는 안됩니다.
젊어서는 자신을 갖추는 시기입니다. `,previewChunks:[`Ⅰ. 직장이란?
1. 청춖은 갖추는 시기
1) 젊음이 아름다운 이유
젊음이라는 단어를 들으면 설렘, 기대, 희망이
느껴지면서 아름답다고 합니다. 우리는 왜 젊음을
아름답다고 할까요? 젊음이 아름다운 이유는 차곡차곡
실력을 쌓을 수 있는 기회가 있기 때문입니다. 젊은
청춘들에게는 사람들도, 환경들도 그들이 실력을 갖출 수
있도록 많은 기회를 주게 됩니다. 그래서 사회에 어디를
가더라도 예쁘게 보이는 것입니다.
하지만 이렇게 주어지는 많은 기회들과 충만해진 젊음의
패기로 지금 무언가를 이루려고 해서는 안됩니다.
젊어서는 자신을 갖추는 시기입니다. 사람들이`,`매력적이게 보이는 건 자신의 나이에 맞는 할 일을 할 때
매력적이게 보이게 됩니다. 젊어서는 열심히 공부하고
노력하며 자신을 갖출 때에 가장 매력적이게 보이는
것입니다.
2) 즐거우니 청춖이다.
청춘은 아프면 안됩니다. 아픈 이유는 바르게 살아가는
법을 모르고 헤매기 때문에 아픔이 오는 것입니다.
그래서 우리는 젊은 시절부터 배우고 갖추어야 하며,
바른길을 찾아갈 때 멋진 인생을 열어갈 수 있습니다.
만약 고생을 하는 공부를 한다면 그것은 공부가 아닙니다.
자신이 재미있게 할 수 있는 공부를 해야 합니다. 그
속에서 조금 어렵더라도 꼭 해야 하는 것들을 해나갈 때
사회에서 낙오되지 않고 사회에 필요한 사람으로 성장할
수 있습니다. 청춘은 즐거워야 합니다.`,`2. 직장은 사회 학교, 월급은 학비
1) 직장의 시대적 변화
현재 직장이라는 의미를 네이버 국어사전에서
찾아보면 ‘사람들이 일정한 직업을 가지고 일하는 곳’,
‘생계를 꾸려 나갈 수 있는 수단으로서의 직업’ 이라고
나와 있습니다.
사전에도 나와 있는 것처럼 지금까지 많은 사람들이
직장에 대해 돈을 벌어서 먹고 살기 위한 수단으로
생각해왔습니다. 과거 우리 사회의 경제가 발전되기
전에는 먹고 사는 문제가 중요했습니다. 하지만 엄청난
발전을 거듭한 현대 사회에서 직장을 돈을 벌어서 먹고
사는 수단으로 여기며 다니게 되면, 먹고 살기 위한
생각을 중요하게 여기기 때문에 더 이상의 발전을 할 수
없게 됩니다. 시대가 변한 만큼 시대에 맞는 직장의
의미를 바르게 알고 직장을 다닐 때에 직장을 다니는
사람도, 우리가 속한 직장도, 그리고 그 사회도 모두`,`발전할 수 있습니다.
2) 사회에 짂입하는 자세
사회에는 청년 실업률이 높다며 일자리가 없다고
합니다. 반면에 기업에서는 일을 할 젊은이들을 기다리고
있습니다. 이런 사회의 현실에서 청년들은 어떠한 자세로
사회에 진입해야 할까요? 그리고 우리는 왜 직장에
들어가서 일을 해야 할까요?
일이란 회사에 들어가기 위한 명분이며, 사회에 나와서
사람을 만나고 환경을 만나기 위한 방편인 것입니다.
그래서 돈을 벌어서 먹고 살기 위한 노동으로서의 일이
아닌 사회공부을 할 수 있게 환경을 만나게 해주는
배움의 수단으로서 직장에 들어가서 일을 해야 합니다.
그래서 대학이나 대학원을 마치고 사회에 나올 때는
일을 할 수 있는 곳을 찾아야 합니다. 많은 젊은이들이
돈을 벌 수 있는 곳을 찾고 있지만, 어느 기업이든 돈을
줄려고 기다리고 있는 곳은 없습니다. 사회는 일을 할`,`젊은이들을 찾고 있습니다. 그래서 위에서 언급했던
것처럼 자신이 재미있게 할 수 있는 일을 찾아야 합니다.
그렇게 일을 할 곳을 찾는다면 분명히 갈 수 있는 곳이
있습니다.
3) 직장은 사회 학교
20대에는 대학, 대학원을 다니며 기초적인 공부를
하게 됩니다. 그리고 기초 공부를 마치고 사회에
진입하여 회사에 들어가면 실질적인 현장 학습을 하게
되는 것입니다. 회사는 청춘들이 들어와서 성장할 수
있는 환경을 만들어 놓은 곳입니다. 그래서 회사에
들어갈 때는 내가 이곳에서 무엇을 배울 수 있는지,
자신이 갖추기에 좋은 환경인지, 자신에게 맞는
환경인지를 살펴보고 들어가야 합니다. 회사에
들어갔다면 이제부터는 사회학교를 다닌다는 것을 알고
사회를 배우고 성장해 가야 합니다.`,`4) 월급은 학비
회사에서는 입사한 직원들에게 현장 학습을 위한 사회
환경뿐만 아니라 월급을 제공합니다. 이 월급은 직원들이
먹고 살 수 있도록 주는 돈이 아닙니다. 고등학교,
대학교를 다닐 때에는 학교에 학비를 내면서 공부를
했어야 합니다. 그래서 일반적으로 부모님의 지원을 받아
학교를 다니게 됩니다. 하지만 사회에 진입을 하게 되면
이제부터는 공부하는 데 필요한 경비를 쓸 수 있도록
회사에서 월급을 주며 지원해 줍니다. 학비를 내는 것이
아니라 경비를 받으면서 공부할 수 있는 환경이 주어지는
것입니다.

참조 법문
정법강의 27강 청년취업
정법강의 1489강 직장의 신-1 현대판 노예 (1/8)
정법강의 2335강 대학생들의 이념 (1/3)
정법강의 1803강 젊음이 아름다운 이유 - 일과 열정, 갖춤의 기회
(1/3)`,`Ⅱ. 직장 구성원이 가져야 핛 마인드
1. 컵원리
출근 날 아침, 당신은 어떤 모습으로 아침을 맞이하나요?
여기 두 사람이 있습니다. 이 두 사람은 컵 공장에서
근무를 합니다. 급여도 같습니다. 그러나 한 사람은 먹고
살기 위해 컵을 만듭니다. 또 다른 한 사람은 컵을 사용할
사람들을 위해 컵을 만듭니다. 그림처럼 먹고 살기 위해
컵을 만드는 사람의 출근날 아침은 A 그림에 해당될
것이고, 컵을 사용할 사람들을 위해 컵을 만드는 사람의
출근날 아침은 B 그림에 해당될 것입니다.
여러분, 여러분은 어떤 아침을 맞이하고 싶으신가요?`,`1) 컵원리
두 사람이 같은 공장에서 같은 컵을 만듭니다. 겉으로
보면 똑같이 8시간을 일하지만, 그들의 마음은 전혀
다릅니다.
한 사람은 단지 먹고 살기 위해서 공장에 갑니다. 그는
임금을 받기 위해 컵을 만들고, 하루를 억지로 일합니다..
이 사람에게 일은 단순한 노동일 뿐입니다. 시간이
지나면서 불평이 쌓이고, 일은 지루하고, 몸은 쉽게
지칩니다.

그러나 또 다른 사람은 컵을 쓸 사람을 위해 공장에
갑니다. 누군가가 이 컵을 사용하며 시원한 물을 마시고,
따뜻한 차를 즐길 것을 떠올리며 손길을 보탭니다. 그는
임금보다 의미를 바라보고, 일을 봉사와 배움의 기회로
삼습니다. 그렇게 3년을 일하다 보면 창의가 솟아나고,
지혜가 열리며, 몸도 마음도 덜 힘들게 됩니다. 같은 일을
해도 즐거움과 성장이 함께하는 것입니다.
컵은 단순히 물을 담는 그릇이 아닙니다. 누군가의
갈증을 해소하고, 삶을 편안하게 해주는 도구입니다. 일
또한 마찬가지입니다. 먹고 살기 위한 수단으로만
바라보면 무겁고 고단하지만, 누군가를 위한 마음으로
임하면 그 일은 기쁨과 성장의 통로가 됩니다.
컵의 원리는 우리에게 말합니다.
“일은 단순히 생계를 위한 수단이 아니라, 타인을
이롭게 하기 위한 창조의 과정이 될 수 있다.” 라고.`,`2) 컵원리가 삶에 미치는 영향
① A의 삶 (먹고 살기 위해 일하는 사람)
 먹고 살려고 돈을 벌면 돈의 노예가 됩니다.
 돈 벌어먹고 살아야 되니 쉽게 지치고 피곤해
하며 쉽게 스트레스가 쌓입니다.
 스트레스를 풀기 위해 재미있는 것 찾아간 곳이
엉뚱한 곳이 되며, 그곳에서 헛 돈을 쓰게 되니
결국 돈이 없습니다.
 10년이 지나도 그 환경에서 벗어나지 못하고
노동자로 일만 하며 살게 됩니다.
 회사에 위기가 발생되면 제일 먼저 제거 대상이
됩니다.
② B의 삶 (컵을 쓸 사람을 위해 일하는 사람)
 컵을 쓸 사람을 위해 일하는 사람은 피곤해 하지
않으며 굉장히 즐겁습니다.`,` 재미있고 즐거우니 공부가 되어 창의력이
일어나게 됩니다.
 창의력으로 새로운 아이템이 창출되어 기술
개발을 하게 됩니다.
 기술 개발을 통해 신용을 쌓게 되고 사회에
필요한 인재로 성장하게 됩니다.
 타인을 위한 삶, 홍익이념으로 공인이 되고
사회에 공헌하는 삶을 살게 됩니다.
2. 노동자에서 연구원으로
1) 노동을 하면 힘든 이유
노동자가 아닌 사람들이 노동을 하고 있기 때문에 힘든
것입니다. 우리는 스스로를 노동자라 하는데 자기 자신을
잘 살펴보십시오. 진짜 노동자인지.
대한민국에는 노동자가 없습니다. 과거, 지식을 갖추지`,`않았을 때에는 노동을 했습니다. 먹고 살아야 하니까
질이 높은 것을 하지 않아도 되었습니다. 그러나 지금은
지식을 갖추었음에도 계속 노동을 하고 있으니 힘든
것입니다.
지식을 갖추었다면 노동이 아닌 이 시대에 맞는
명분으로 활동을 해야 즐겁게 살아갈 수 있습니다.
2) 노동자와 연구원의 차이
과거, 지식을 갖추지 않고 살아갈 때에는 먹고 살기
위해 노동을 했기에 노동자라고 했지만, 지식을 갖춘
지금은 노동자가 아닌 연구원이 되어야 합니다.
노동자는 돈을 받은 만큼만 일을 하지만, 연구원은
시간과 장소를 불문하고 어디에서 든 연구를 합니다. 또,
노동자는 먹고 살기 위해 일을 했기 때문에 돈이 많으면
일을 하지 않습니다. 돈이 많으니 일을 할 이유가
없어지게 된 것입니다.`,`그러나 연구원은 돈이 많아도 연구를 더 잘하게 됩니다.
연구를 통해서 사회를 알아가고 새로운 패러다임의
콘텐츠를 생산하여 사회에 도움이 되는 삶을 살 수 있기
때문에 질 좋은 연구를 할 수 있습니다.
3) 연구를 해야 하는 이유
연구는 저마다의 소질을 가지고 현장에서 실습한
것들을 탐구하고 토론하며 정리하는 것입니다.
직장에서는 일을 하기 위해 사람들이 모이게 되고, 그
속에서 일어나는 모든 것들이 연구의 대상이 됩니다.
연구는 단순히 물질을 연구하는 것이 아닙니다. 이 또한
하나의 방편으로 함께 할 사람이 모이고 그 속에서
다양한 환경을 마주하게 되는데 이것도 연구의 대상이
됩니다.
연구는 지금까지 살아오던 방법에서 모순을 발견하고,
새롭게 지적인 방법들을 찾아가며, 함께 대화하고 나누고
정리를 하는 것입니다. 직장 동료들 간에 바르게 지내는

법을 찾아내고, 나아가 사회로 확장해 나갈 수 있습니다.
연구는 일상에서도 카페에서도 레스토랑에서도
어디에서나 할 수 있습니다.
연구를 통해 새로운 패러다임의 콘텐츠를 생산하고,
이것이 미래의 발전에 원동력이 됩니다. 그리고 오늘날
지식을 다 갖춘 우리는 국제사회에 필요한 사람으로
성장해야 합니다.
다시 말해, 우리는 수많은 사람들의 땀과 희생을
바탕으로 성장했지만, 지식을 갖춘 지금 노동자로
전락해서는 안 됩니다. 수준을 한단계 끌어올려야 합니다.
일을 방편으로 모두가 성장할 수 있는 길을 열어가는
연구원이 되어야 합니다.`,`3. 기업이념
1) 이념 있는 직장
이념은 단순한 슬로건이 아니라 ‘그 조직이 왜
존재하는가? (존재 이유), 어디로 가야 하는지? (방향성),
어떻게 살아남고 성장할 것인가 (행동기준)을 말합니다.
이념이 크면 큰 인재가 모이고, 큰 인재가 모이면
대기업이 되어 문화와 철학을 이끄는 기업이 됩니다.
① 존재 이유
기업은 사회 속에서 어떤 가치를 실현하고자 하는
목적이 있어야 합니다. 기업 이념은 ‘기업이 왜
존재하는지’ , ‘무엇을 위해 움직이는지’를
정의합니다. 이념을 세울 때에는 국민을 위하고
사회를 위하고 나라를 위하는 생각으로, 시대에
맞고 조직 구성원과 같이 할 수 있는 이념을 찾아야
합니다.

기업 이념이 없다면 풍전등화와 같습니다.
이념이라는 그릇을 만들어 주지 못하면 회사를
위태롭게 만들 수 있습니다.
② 방향성
기업 이념은 기업의 존재 목적과 비전을 담고
있어야 합니다. 기업 이념은 기업이 장기적으로
어떤 모습으로 성장하고자 하는지를 제시하며,
변화와 위기 속에서도 흔들지 않는 기준이 됩니다.
죽, “우리가 무엇을 위해 존재하는가, 앞으로 어디로
가야 하는가”라는 질문에 대한 답입니다.
③ 행동 기준
기업 이념은 조직 구성원 모두가 일상 업무 속에서
어떤 태도와 원칙으로 행동해야 하는지를 보여
줍니다. 이는 추상적인 비전이 아니라. 실제
행동으로 드러나는 구체적 지침입니다.

참조 법문
정법강의 577강 사회적 약자의 자존감-2 컵원리
정법강의 755강 연예인이 공인인지-2 공인의 삶, 컵원리
정법강의 828강 자괴감-2 컵원리 삶을 살라
정법강의 840강 컵원리, 돈의 노예-2
정법강의 1211강 생활 속에서 빛나는 삶-1 컵원리 삶
정법강의 1455강 컵원리, 홍익이념 -3
정법강의 1465강 어떻게 살아야-4 컵원리, 공과 사
정법강의 2045강 이념있는 회사, 이념의 크기
정법강의 2785강 컵원리-2
정법강의 4141강 예술인들의 컵원리 삶-2
정법강의 5437강 노동력의 대체 - 컵원리
정법강의 7238강 컵원리와 연구자
정법강의 7220강 노동의 의미, 직장의 의미-1
정법강의 7221강 노동의 의미, 직장의 의미-2

정법강의 7222강 노동의 의미, 직장의 의미-3
정법강의 7223강 노동의 의미, 직장의 의미-4`,`Ⅲ. 슬기로운 직장생활 (업무편)
1. 입사 초년생의 역핛(싞입사원의 바른 자세)
1) 싞입사원의 바른 자세
직장은 사회 학교입니다. 우리가 직장에 가는 것은 그
직장에서 내가 무엇을 배우는가에 집중하고 어떻게
성장하는지가 중요합니다. 매일의 경험이 나의 실력과
질량을 키우는 과정입니다. 이런 태도로 임한다면 직장은
단순한 일터가 아니라 나를 성장시키는 정말 소중한
배움터가 될 것입니다.

2) 공부하는 싞입사원의 자세
공부하는 사람이 돈을 탐내고, 먹고 살기 위해 일을
하면 스스로 돈의 노예가 되는 것입니다. 회사에
가더라도 공부하는 사람이 되어야 합니다.
또한 직위를 탐하지 않아야 합니다. 직위에 집착하면
배움보다는 경쟁과 집착이 앞서게 됩니다.
공부하는 자는 욕심을 내면 지식이 무식이 됩니다.
우리가 학교에서 배운 것을 바탕으로 사회에 나와 어떤
일을 맡게 되었을 때 배우는 자세로 즐겁게 하면 성공할
수 있습니다. 탐을 내지 않고 일했기 때문에 잘 되는
것입니다.
공부하는 자세는 지극히 겸손해야 합니다. 어떤 일에도
내가 겸손하면 그 상황 속에서 자연스럽게 공부가
일어나고 배움이 쌓이게 됩니다. 반대로 내가 잘 하려고
하면 욕심이 들어가서 상황이 제대로 보이지 않습니다.
겸손한 마음 안에서 모든 문제는 자연스럽게 풀리게`,`2) 공부하는 싞입사원의 자세
공부하는 사람이 돈을 탐내고, 먹고 살기 위해 일을
하면 스스로 돈의 노예가 되는 것입니다. 회사에
가더라도 공부하는 사람이 되어야 합니다.
또한 직위를 탐하지 않아야 합니다. 직위에 집착하면
배움보다는 경쟁과 집착이 앞서게 됩니다.
공부하는 자는 욕심을 내면 지식이 무식이 됩니다.
우리가 학교에서 배운 것을 바탕으로 사회에 나와 어떤
일을 맡게 되었을 때 배우는 자세로 즐겁게 하면 성공할
수 있습니다. 탐을 내지 않고 일했기 때문에 잘 되는
것입니다.
공부하는 자세는 지극히 겸손해야 합니다. 어떤 일에도
내가 겸손하면 그 상황 속에서 자연스럽게 공부가
일어나고 배움이 쌓이게 됩니다. 반대로 내가 잘 하려고
하면 욕심이 들어가서 상황이 제대로 보이지 않습니다.
겸손한 마음 안에서 모든 문제는 자연스럽게 풀리게

됩니다.
그리고 남 탓하지 말아야 합니다. 주어지는 환경을 잘
받아들이고 극복하며, 노력하도록 만들어져 있으니 그
과정에서 남을 탓하지 말아야 합니다. 모든 상황은 내가
성장할 기회로 주어지는 것입니다.
불평불만 또한 하지 말아야 합니다. 나에게 일어나는
모든 일은 결국 내가 살아온 방식의 결과입니다.
불평한다고 바뀌는 것이 아니므로, 어떤 상황에서도 내가
배우고 얻은 것을 정리하며 회사에 적응해 나가면, 일도
점점 수월해지고 그것이 곧 내 실력이 됩니다.`,`2. 회사에서는 회사 일을
1) 업무시간에는 업무만..
우리는 직장에 출근하면 습관처럼 업무와 관련없는
문자나 전화, 인터넷 검색등 다른 일을 하는 경우가
있습니다. 개인에게는 작은 행동이지만 그런 행동들은
개인의 업무능력을 저하시키고, 회사의 매출저하로
이어지게 됩니다. 결국 개인 뿐만 아니라 직장 동료와
회사까지도 어려움을 초래 할 수 있는 행동입니다. 업무
시간에는 업무에만 집중할 수 있도록 노력해야 겠습니다.
2) 동료들간의 소통은 기본
동료들간의 소통은 직장생활의 기본입니다. 소통은
상대에게 도움이 되는 말을 해야 하며, 말은 상대를 위해
쏟아내는 에너지이기 때문에 필요한 말을 해야 합니다.`,`2. 회사에서는 회사 일을
1) 업무시간에는 업무만..
우리는 직장에 출근하면 습관처럼 업무와 관련없는
문자나 전화, 인터넷 검색등 다른 일을 하는 경우가
있습니다. 개인에게는 작은 행동이지만 그런 행동들은
개인의 업무능력을 저하시키고, 회사의 매출저하로
이어지게 됩니다. 결국 개인 뿐만 아니라 직장 동료와
회사까지도 어려움을 초래 할 수 있는 행동입니다. 업무
시간에는 업무에만 집중할 수 있도록 노력해야 겠습니다.
2) 동료들간의 소통은 기본
동료들간의 소통은 직장생활의 기본입니다. 소통은
상대에게 도움이 되는 말을 해야 하며, 말은 상대를 위해
쏟아내는 에너지이기 때문에 필요한 말을 해야 합니다.

업무를 위한 동료들간의 소통은 원활한 업무를 위한
것입니다.
3) 여성의 업무 집중도
여성은 가사와 육아, 집안일등 업무 외적으로 감당해야
하는 경우가 남성보다 상대적으로 많습니다. 이것은 업무
능력을 저하 시킬 뿐만 아니라 개인에게 큰 스트레스를
안겨줍니다. 개인의 노력뿐 아니라 제도적 개선, 부부의
역할 분담으로 업무에 집중할 수 있는 환경을 만들어야
합니다.`,`업무를 위한 동료들간의 소통은 원활한 업무를 위한
것입니다.
3) 여성의 업무 집중도
여성은 가사와 육아, 집안일등 업무 외적으로 감당해야
하는 경우가 남성보다 상대적으로 많습니다. 이것은 업무
능력을 저하 시킬 뿐만 아니라 개인에게 큰 스트레스를
안겨줍니다. 개인의 노력뿐 아니라 제도적 개선, 부부의
역할 분담으로 업무에 집중할 수 있는 환경을 만들어야
합니다.

3. 효율적인 업무처리 방법
1) 싞입사원의 효율적인 업무처리 방법
업무처리 방식에도 신패러다임이 필요합니다. 새로운
정보를 습득하고 변화에 대응 할 준비가 되어 있어야
합니다. 항상 배우는 자세로 깨어 있어야 합니다.
① 상사로부터 업무 지시를 받았을 경우에는 업무
지시가 육하원칙에 맞는지 확인하고 반드시 기록과
확인을 통해 명확히 이해하여 신중하게 처리해야
합니다. 업무지시가 이해 되지 않았을 때에는
상사에게 무엇 때문에 이것을 시켰는지 차근차근
물어볼 줄 알아야 합니다.
② 상사에게 결재를 받을 때는 상사가 이해되기 쉽게
내용을 정리하고 문서로 작성이 어렵다면 말로
풀어서라도 전부 이해되게 해야 합니다. 결재를 받을`,`3. 효율적인 업무처리 방법
1) 싞입사원의 효율적인 업무처리 방법
업무처리 방식에도 신패러다임이 필요합니다. 새로운
정보를 습득하고 변화에 대응 할 준비가 되어 있어야
합니다. 항상 배우는 자세로 깨어 있어야 합니다.
① 상사로부터 업무 지시를 받았을 경우에는 업무
지시가 육하원칙에 맞는지 확인하고 반드시 기록과
확인을 통해 명확히 이해하여 신중하게 처리해야
합니다. 업무지시가 이해 되지 않았을 때에는
상사에게 무엇 때문에 이것을 시켰는지 차근차근
물어볼 줄 알아야 합니다.
② 상사에게 결재를 받을 때는 상사가 이해되기 쉽게
내용을 정리하고 문서로 작성이 어렵다면 말로
풀어서라도 전부 이해되게 해야 합니다. 결재를 받을

때는 부장급한테 결재받을 때 100%라고 한다면 그
아래 상사한테 결재받을 때는 70%를 내가 준비해서
결재를 받아야 합니다.
③ 상사를 설득하려고 해서는 안됩니다. 설득한다는
것은 모자란 것을 설득해서 이루어 내겠다는
것이므로, 상대가 나보다 아랫사람일 경우만
가능하기 때문에 상사에게는 문서나 말로
이해되게끔 풀어서 의견을 제시하는 것이 지혜로운
것입니다.
④ 직장생활에서는 감정관리가 매우 중요합니다.
짜증이 나는 이유는 자신의 실력 부족에서 비롯되며,
이는 집중력과 사고를 흐리게 하여 자신의 성장에
방해가 됩니다.
⑤ 업무가 과중할 때는 자신의 역량 70%까지 최선을
다하고 나머지는 솔직하게 상황을 공유하며
우선순위와 한계를 조절해야 합니다.
⑥ 특히 입사후 3년은 기초를 다지는 중요한
시기입니다. 이 기간에는 환경을 묵묵히 받아들이고

성실함과 꾸준함으로 업무에 임해야 합니다.
하루하루 일지를 작성하고 3년이 되었을 때는
보고서를 만들어 자신의 성장을 점검하고 자료를
남기는 것이 좋습니다.
⑦ 또한 내가 이 일을 왜 해야 하는지에 대한 명분을
찾아야 합니다. 사회에 뜻있고 보람있는 일을 할 때
경제는 저절로 따라오게 됩니다. 월급을 받아도
명분을 가지고 받아야 합니다.
2) 싞입사원의 회사생활
신입사원의 회사생활은 배움과 성장의 과정입니다.
처음 입사하면 첫 업무는 시키는 일부터 하게 되는데
이는 서툴지만 업무를 배우고 상황을 파악하는 중요한
시간입니다. 시간이 지나면 시키는 일을 넘어 스스로
해야 할 일을 찾게 됩니다.
맡은 업무는 나에게 주어진 기회이고 감사한`,`성실함과 꾸준함으로 업무에 임해야 합니다.
하루하루 일지를 작성하고 3년이 되었을 때는
보고서를 만들어 자신의 성장을 점검하고 자료를
남기는 것이 좋습니다.
⑦ 또한 내가 이 일을 왜 해야 하는지에 대한 명분을
찾아야 합니다. 사회에 뜻있고 보람있는 일을 할 때
경제는 저절로 따라오게 됩니다. 월급을 받아도
명분을 가지고 받아야 합니다.
2) 싞입사원의 회사생활
신입사원의 회사생활은 배움과 성장의 과정입니다.
처음 입사하면 첫 업무는 시키는 일부터 하게 되는데
이는 서툴지만 업무를 배우고 상황을 파악하는 중요한
시간입니다. 시간이 지나면 시키는 일을 넘어 스스로
해야 할 일을 찾게 됩니다.
맡은 업무는 나에게 주어진 기회이고 감사한

선물입니다. 주어지는 작은 일도 기쁘게 해내면 신뢰와
관계가 형성되며, 상대를 위해 일하는 마음가짐이
즐거움으로 이어집니다.
지금까지 부모님의 지원으로 공부를 했다면 이제는
회사가 나의 든든한 후원자가 되어 배움의 기회를
제공합니다. 따라서 ‘회사가 나를 위해 무엇을
해줄것인가’를 생각하기 보다는 후원자인 회사를 위해
‘나는 회사를 위해 무엇을 할 것인가’를 먼저 생각하며
연구해야 합니다.

참조 법문
정법강의 809강 직장에서 주장 조율법 - 상대이해(1/3)
정법강의 810강 직장 업무처리 방법(2/3)
정법강의 875강 직장생활백서-1 신입사원(1/3)
정법강의 876강 직장생활백서-2 회사에서는 회사를...(2/3)
정법강의 2064강 공부자의 자세
정법강의 2461강 귀염받는 신입사원
정법강의 3940강 직장인의 효율적인 시간관리(2/2)
정법강의 4712강 직장에서의 업무과중
정법강의 5425강 직장 내 불합리한 업무분배(2/2)
정법강의 7228강 젊은이들의 잦은 이직, 투잡
정법강의 7232강 직장내에서의 인간관계
정법강의 8662강 직장상사의 가치관에 따른 분별`,`Ⅳ. 슬기로운 직장생활(인간관계 편)
1. 운용의 시대, 소통의 중요성
인류는 진화기를 지나 성장기를 거쳐 2013년을
기점으로 운용의 시대가 도래하였습니다. 성장기에는
인류가 문명을 세우고, 사회를 조직하며, 지식과 기술을
축적한 시기입니다.
인간의 이성이 급격히 발달하였고, 종교·철학·과학 등
다양한 분야에서 진보가 이루어졌습니다. 그러나 이
성장의 근본에는 ‘나의 이익’과 ‘경쟁’이 자리하고
있었습니다. 이제 인류는 단순히 배우는 존재가 아니라,
배운 것을 바르게 실천해야 하는 존재로 성장했습니다.
운용 시대의 핵심은 바로 ‘소통’ 입니다. 성장기까지
인간에게 필요한 모든 것을 생산하였고 지식도 모두

창출하였습니다. 이제 운용 시대에는 그 생산한 것을
어떻게 쓰느냐, 즉 ‘운용의 힘’이 평가 기준이 됩니다.
자신의 이익을 위해 지식을 쓰면 사회가 혼란해지고,
인류 전체를 위한 방향으로 운용하면 세상은 조화롭게
발전합니다. 이제는 개인이 따로 존재하지 않고, 개인의
말과 행동이 사회 전체의 에너지 흐름에 직접 영향을
미치는 시대입니다. 따라서 운용의 시대에는 소통능력이
곧 실력이 되는 시대입니다.
2. 직장에서 소통을 잘하려면 - 갑을관계 이해
1) 갑과 을의 관계 이해
소통을 잘하기 위해서는 갑을관계를 바르게 이해해야
합니다. 대자연에는 반드시 갑과 을의 관계가 형성되어
있습니다. 에너지도 갑의 에너지와 을의 에너지가
있습니다. 갑과 을을 바르게 알고 상대를 대하면 자연의
법칙대로 운용되기 때문에 세상의 질서는 무너지지`,`창출하였습니다. 이제 운용 시대에는 그 생산한 것을
어떻게 쓰느냐, 즉 ‘운용의 힘’이 평가 기준이 됩니다.
자신의 이익을 위해 지식을 쓰면 사회가 혼란해지고,
인류 전체를 위한 방향으로 운용하면 세상은 조화롭게
발전합니다. 이제는 개인이 따로 존재하지 않고, 개인의
말과 행동이 사회 전체의 에너지 흐름에 직접 영향을
미치는 시대입니다. 따라서 운용의 시대에는 소통능력이
곧 실력이 되는 시대입니다.
2. 직장에서 소통을 잘하려면 - 갑을관계 이해
1) 갑과 을의 관계 이해
소통을 잘하기 위해서는 갑을관계를 바르게 이해해야
합니다. 대자연에는 반드시 갑과 을의 관계가 형성되어
있습니다. 에너지도 갑의 에너지와 을의 에너지가
있습니다. 갑과 을을 바르게 알고 상대를 대하면 자연의
법칙대로 운용되기 때문에 세상의 질서는 무너지지

않습니다. 상대에게 도움을 줄 수 있는 힘이 있다면
‘갑’의 위치이고, 도움을 받아야 한다면 ‘을’이 됩니다.
여기서 중요한 것은 갑과 을의 관계는 절대적으로
정해진 것이 아니라 상황에 따라 달라지는 관계임을
이해해야 합니다.
다음과 같이 여러 사례를 들어 갑을관계를 설명하자면,
① 아버지와 아들
가정에서 평상시에는 아버지가 ‘갑’, 아들이
‘을’입니다.
그런데 아버지가 아들에게 금전적인 도움을 청할
때는 아들이 ‘갑’이 되고, 아버지는 ‘을’이 됩니다.
아들은 ‘갑’이기 때문에 아버지에게 돈이 왜
필요하신지 물을 수 있는 자격이 있습니다. 이때
아버지가 아들에게 “뭣 하러 알려고 하냐”며 ‘갑’인
아들의 맘에 들지 않게 한다면 돈을 안 줘도 되는
것입니다. ‘을’입장인 아버지가 화를 내거나 한다면,
집안의 질서는 무너지게 됩니다.

[평상시 가정에서 아버지가 갑, 아들은 을]
[아버지가 아들에게 돈을 꾸어야 할 때 아들 갑, 아버지 을]

② 사장님과 직원
회사에서 평상시에는 사장님 ‘갑’, 직원은 ‘을’입니다.
그런데 만약 사장님이 직원에게 골프를 배우는 상황이라
면, 사장님은 ‘을’이 되고, 골프를 가르치는 직원은 ‘갑’이
됩니다. 이 때 사장님은 권위의식을 버리고 골프를
가르치는 직원에게 예를 갖추어야 합니다. 그런데 만약
골프를 가르치는 직원의 마음에 들지 않게 행동하거나
사장의 자존심을 내세우게 되면 사장님은 골프를 제대로
배우기 어려워집니다. 직원과의 관계도 나빠져서
회사에도 안 좋은 영향을 끼치게 됩니다.

[평상시 사무실에서 사장이 갑, 직원은 을]
[사장님이 직원에게 골프를 배울경우 직원이 갑, 사장은 을]

2) 갑의 역핛
갑이 을에게 말을 하면 잘 받아들여집니다.
갑은 상대에게 책임과 배려를 다하는 위치입니다.
갑은 을에게 필요한 지원과 안내, 가르침 등을 제공하되,
상대를 얕보거나 우위로 군림해서는 안됩니다. 갑의
위치는 힘과 권한을 누리는 자리가 아니라 상대를
배려하고 존중하며 책임을 다하는 자리입니다. “내가
갑이더라도 상대를 존중하며, 을이 없으면 나 또한 갑이
될 수 없다”는 마음가짐을 가져야 합니다.
3) 을의 역핛
을은 갑에게 부탁드리는 식으로 말을 해야 합니다.
을은 갑으로부터 에너지를 받아야 하고, 을은 절대로
갑을 위해서 살 수 없습니다.
을이 갑을 위해 노력한다고 하면 이것은 건방을 떠는
것이기 때문에 질서가 무너지고 안 좋은 결과로
이어집니다.`,`2) 갑의 역핛
갑이 을에게 말을 하면 잘 받아들여집니다.
갑은 상대에게 책임과 배려를 다하는 위치입니다.
갑은 을에게 필요한 지원과 안내, 가르침 등을 제공하되,
상대를 얕보거나 우위로 군림해서는 안됩니다. 갑의
위치는 힘과 권한을 누리는 자리가 아니라 상대를
배려하고 존중하며 책임을 다하는 자리입니다. “내가
갑이더라도 상대를 존중하며, 을이 없으면 나 또한 갑이
될 수 없다”는 마음가짐을 가져야 합니다.
3) 을의 역핛
을은 갑에게 부탁드리는 식으로 말을 해야 합니다.
을은 갑으로부터 에너지를 받아야 하고, 을은 절대로
갑을 위해서 살 수 없습니다.
을이 갑을 위해 노력한다고 하면 이것은 건방을 떠는
것이기 때문에 질서가 무너지고 안 좋은 결과로
이어집니다.`,`2) 갑의 역핛
갑이 을에게 말을 하면 잘 받아들여집니다.
갑은 상대에게 책임과 배려를 다하는 위치입니다.
갑은 을에게 필요한 지원과 안내, 가르침 등을 제공하되,
상대를 얕보거나 우위로 군림해서는 안됩니다. 갑의
위치는 힘과 권한을 누리는 자리가 아니라 상대를
배려하고 존중하며 책임을 다하는 자리입니다. “내가
갑이더라도 상대를 존중하며, 을이 없으면 나 또한 갑이
될 수 없다”는 마음가짐을 가져야 합니다.
3) 을의 역핛
을은 갑에게 부탁드리는 식으로 말을 해야 합니다.
을은 갑으로부터 에너지를 받아야 하고, 을은 절대로
갑을 위해서 살 수 없습니다.
을이 갑을 위해 노력한다고 하면 이것은 건방을 떠는
것이기 때문에 질서가 무너지고 안 좋은 결과로
이어집니다.

3. 효과적인 의사표현을 하려면
1) 소통이란?
우리가 흔히 말하는 ‘사람과의 소통’은 내가 부족한
에너지를 상대가 채워주고, 상대가 모자란 에너지를 내가
채워주는 것, 이것이 진정한 소통입니다. 즉, 말은 단순한
소리가 아니라 에너지가 담긴 행위입니다.
지금 이 시대는 한마디 말이 사람을 살리기도 하고
죽이기도 합니다. 대화를 바르게 하는 사람은 전쟁도
멈추게 할 수 있고, 세상도 변화시킬 수 있습니다.
대화는 인생의 꽃이며, 인생을 풀어가는 도구입니다.
그만큼 말의 힘이 크고, 말에는 질량이 있습니다. 말은 내
영혼에서 나오는 것이기 때문에 영혼을 성장시켜야만
우수한 말이 나옵니다.
지식을 쌓는 것은 영혼을 키우는 일입니다. 지식인들은
영혼이 다 컸는데 영혼의 밀도가 모자라서 지혜가 안
나오고 분별이 떨어지는 것입니다.
영혼의 밀도를 채우기 위해서는 ‘자연의 법칙과 우주의`,`3. 효과적인 의사표현을 하려면
1) 소통이란?
우리가 흔히 말하는 ‘사람과의 소통’은 내가 부족한
에너지를 상대가 채워주고, 상대가 모자란 에너지를 내가
채워주는 것, 이것이 진정한 소통입니다. 즉, 말은 단순한
소리가 아니라 에너지가 담긴 행위입니다.
지금 이 시대는 한마디 말이 사람을 살리기도 하고
죽이기도 합니다. 대화를 바르게 하는 사람은 전쟁도
멈추게 할 수 있고, 세상도 변화시킬 수 있습니다.
대화는 인생의 꽃이며, 인생을 풀어가는 도구입니다.
그만큼 말의 힘이 크고, 말에는 질량이 있습니다. 말은 내
영혼에서 나오는 것이기 때문에 영혼을 성장시켜야만
우수한 말이 나옵니다.
지식을 쌓는 것은 영혼을 키우는 일입니다. 지식인들은
영혼이 다 컸는데 영혼의 밀도가 모자라서 지혜가 안
나오고 분별이 떨어지는 것입니다.
영혼의 밀도를 채우기 위해서는 ‘자연의 법칙과 우주의

법칙’ 즉 ‘진리’를 채워야 지혜가 열리고 바른 분별을 할
수 있습니다. 지식에 진리가 더해지면 대화술이 달라지고,
사람을 대하는 법이 달라지고, 분별력이 달라집니다. 상
식에 묶여 있던 것들이 녹아 내립니다. 상식에 너무 오려
묶여 있으면 그것이 고착되어 고집불통이 되고 결국
인생이 막힙니다. 따라서 지식을 갖추었다면 ‘진리’를
공부해야만 상대의 말을 진심으로 듣고 이해할 수
있습니다.
2) 경청
소통의 출발점은 ‘듣기’입니다.
대부분의 경우 우리는 상대를 잘 모릅니다. 상대의
환경도, 감정도, 그 사람이 처한 사정도 충분히 모릅니다.
그럴 때는 반드시 먼저 들어야 합니다. 상대의 어려움과
불만, 신경질적인 성격까지도 일차적으로 들어주는 것이
대화의 시작입니다.
듣지 않고 말하는 것은 대화가 아니라 주장입니다.
상대가 말을 한다는 건 자신의 것을 털어놓는 것입니다.`,`법칙’ 즉 ‘진리’를 채워야 지혜가 열리고 바른 분별을 할
수 있습니다. 지식에 진리가 더해지면 대화술이 달라지고,
사람을 대하는 법이 달라지고, 분별력이 달라집니다. 상
식에 묶여 있던 것들이 녹아 내립니다. 상식에 너무 오려
묶여 있으면 그것이 고착되어 고집불통이 되고 결국
인생이 막힙니다. 따라서 지식을 갖추었다면 ‘진리’를
공부해야만 상대의 말을 진심으로 듣고 이해할 수
있습니다.
2) 경청
소통의 출발점은 ‘듣기’입니다.
대부분의 경우 우리는 상대를 잘 모릅니다. 상대의
환경도, 감정도, 그 사람이 처한 사정도 충분히 모릅니다.
그럴 때는 반드시 먼저 들어야 합니다. 상대의 어려움과
불만, 신경질적인 성격까지도 일차적으로 들어주는 것이
대화의 시작입니다.
듣지 않고 말하는 것은 대화가 아니라 주장입니다.
상대가 말을 한다는 건 자신의 것을 털어놓는 것입니다.

비운만큼 채워지기 때문에 상대가 먼저 말을 해야 내가
뭔가 할 수 있는 자격이 주어지는 것입니다.
3) 상대가 물은 크기만큼 대답핛 것
상대가 물었을 때 물은 크기만큼만 대답을 해야 합니다.
작은걸 물었는데 크게 대답해 버리면 받아들여지지
않습니다.
또한 상대가 묻지도 않고, 어려워하지도 않고, 자신에게
의논하지도 않았는데 상대에게 말을 하면 상대방은
준비가 안되었기 때문에 받아들여지지 않습니다.
4) 상대가 이해되게 말핛 것
말을 할 때 가장 중요한 기준은 단 하나입니다.
상대에게 이해되게 해야 합니다.
미래사회는 상대를 이해시키는 능력이 곧 실력입니다.
아무리 옳은 말을 해도 상대가 이해하지 못하면, 그것은
헛된 말입니다.`,`비운만큼 채워지기 때문에 상대가 먼저 말을 해야 내가
뭔가 할 수 있는 자격이 주어지는 것입니다.
3) 상대가 물은 크기만큼 대답핛 것
상대가 물었을 때 물은 크기만큼만 대답을 해야 합니다.
작은걸 물었는데 크게 대답해 버리면 받아들여지지
않습니다.
또한 상대가 묻지도 않고, 어려워하지도 않고, 자신에게
의논하지도 않았는데 상대에게 말을 하면 상대방은
준비가 안되었기 때문에 받아들여지지 않습니다.
4) 상대가 이해되게 말핛 것
말을 할 때 가장 중요한 기준은 단 하나입니다.
상대에게 이해되게 해야 합니다.
미래사회는 상대를 이해시키는 능력이 곧 실력입니다.
아무리 옳은 말을 해도 상대가 이해하지 못하면, 그것은
헛된 말입니다.`,`비운만큼 채워지기 때문에 상대가 먼저 말을 해야 내가
뭔가 할 수 있는 자격이 주어지는 것입니다.
3) 상대가 물은 크기만큼 대답핛 것
상대가 물었을 때 물은 크기만큼만 대답을 해야 합니다.
작은걸 물었는데 크게 대답해 버리면 받아들여지지
않습니다.
또한 상대가 묻지도 않고, 어려워하지도 않고, 자신에게
의논하지도 않았는데 상대에게 말을 하면 상대방은
준비가 안되었기 때문에 받아들여지지 않습니다.
4) 상대가 이해되게 말핛 것
말을 할 때 가장 중요한 기준은 단 하나입니다.
상대에게 이해되게 해야 합니다.
미래사회는 상대를 이해시키는 능력이 곧 실력입니다.
아무리 옳은 말을 해도 상대가 이해하지 못하면, 그것은
헛된 말입니다.

상대를 이해시키지 못한다면, 입을 닫고 자신을 더
갖추어야 합니다.
아무리 학벌이 좋아도 상대를 이해시키는 말을 못한다면
학벌은 무용지물입니다.
5) 겸손
소통을 위해서 남과 다름을 인정하라고 하는데, 다름을
인정하기 전에, 먼저 내가 어떤 위치에 있는지를 알아야
합니다. 소통이 막히는 이유는 내 위치를 인정하지 않기
때문입니다.
예를 들어, 나를 가난하게 만들어 놓으면 돈이 있는
사람보다 분별력이 약 30% 떨어지게 만듭니다. 그것이
대자연의 질서를 유지하기 위한 법칙이기 때문입니다.
돈이 없으면 없는 대로 인정하고, 그 기간 동안 바르게
공부하면 반드시 성장할 수 있도록 되어 있습니다.
그런데 많은 사람은 ‘내 자존심 때문에’ 자신을 낮추지
못합니다.
이런 마음을 버리지 못하면 결국 고비를 넘지 못하고,`,`상대를 이해시키지 못한다면, 입을 닫고 자신을 더
갖추어야 합니다.
아무리 학벌이 좋아도 상대를 이해시키는 말을 못한다면
학벌은 무용지물입니다.
5) 겸손
소통을 위해서 남과 다름을 인정하라고 하는데, 다름을
인정하기 전에, 먼저 내가 어떤 위치에 있는지를 알아야
합니다. 소통이 막히는 이유는 내 위치를 인정하지 않기
때문입니다.
예를 들어, 나를 가난하게 만들어 놓으면 돈이 있는
사람보다 분별력이 약 30% 떨어지게 만듭니다. 그것이
대자연의 질서를 유지하기 위한 법칙이기 때문입니다.
돈이 없으면 없는 대로 인정하고, 그 기간 동안 바르게
공부하면 반드시 성장할 수 있도록 되어 있습니다.
그런데 많은 사람은 ‘내 자존심 때문에’ 자신을 낮추지
못합니다.
이런 마음을 버리지 못하면 결국 고비를 넘지 못하고,

발전이 멈춥니다.
내가 아랫사람인지, 윗사람인지, 혹은 배워야 할
입장인지부터 분명히 해야 합니다. 내가 낮은 위치에
있다면 스스로를 낮추고, 아직 부족하다면 부족함을
인정해야 합니다. 인정하는 것이 진정한 겸손입니다.
자신의 현재를 인정하지 못하면, 상대의 말이 귀에
들어오지 않습니다.
반대로 나의 위치를 정확히 알고 받아들이면, 상대의
말이 들리고 마음이 열립니다.
‘인정’은 소통의 문을 여는 첫걸음입니다.
환경을 탓하지 않고 그 안에서 최선을 다하면, 대자연은
반드시 그 사람을 도와줍니다. 진정으로 자신을 낮출 때
비로소 기운이 채워집니다.
교만한 자에게는 대자연이 기운을 주지 않지만,
노력하는 자는 결코 외면하지 않습니다.
이는 대자연의 확고한 법칙입니다.`,`4. 상대를 이해하는 Tip (체질)
1) 체질에 따른 팀구성의 중요성
앞으로 시대는 혼자서는 성공하기 어렵습니다. 세상은
이미 융합의 시대가 도래했기 때문입니다.
하나의 일이 성공하려면 최소 세 사람이 팀을 이루어야
합니다. 이것을 ‘삼인일조(三人一組)’라 합니다.
세 사람이 모이면 외롭지 않고, 일이 빠르게 정리되고,
에너지가 모입니다. 혼자 일하면 어느 지점에서 막히고
발전이 더디지만, 세 사람이 모이면 서로의 부족함을
채워주고 진도가 나갑니다. 그래서 일은 반드시 팀으로,
융합으로 이루어져야 합니다.
이 시대는 단순히 일해서 먹고사는 시대가 아니라,
연구하고 융합하며 새로운 가치를 창조하는 시대입니다.
그래서 앞으로는 누구나 자신이 속한 세 명의 조를
만들어 ‘연구소’처럼 운영해야 합니다. 서로를
‘연구원’이라 부르고, 함께 하나의 주제를 연구하면
그것이 창업의 시작이 됩니다.

핵심은 사람의 융합입니다.
나의 재주, 당신의 재주, 그리고 또 다른 이의 재주가
하나로 합쳐질 때 새로운 일이 탄생합니다. 이것이
진정한 융합의 본질입니다. 아이템은 세상에 무수히
많지만, 그것을 현실로 이루어내는 것은 사람입니다.
사람이 맞지 않으면 어떤 아이디어도 꽃피지 못합니다.
따라서 체질을 공부하여 사람을 올바르게 조합하는 일이
앞으로 더욱 중요해집니다.
2) 체질별 특성
① 금체질(태양인) : 문제점 파악이 빠르기 때문에 검수
같은 일에 어울립니다. 그러나
프로젝트에 처음부터 투입되면
처음부터 문제점을 콕콕 짚어내서
시작조차 어렵기 때문에 프로젝트
초입단계에서는 제외시켜야 합니다.
마무리단계에서 문제점을 짚어내는
역할에 제격이고 검수, 전략가,`,`핵심은 사람의 융합입니다.
나의 재주, 당신의 재주, 그리고 또 다른 이의 재주가
하나로 합쳐질 때 새로운 일이 탄생합니다. 이것이
진정한 융합의 본질입니다. 아이템은 세상에 무수히
많지만, 그것을 현실로 이루어내는 것은 사람입니다.
사람이 맞지 않으면 어떤 아이디어도 꽃피지 못합니다.
따라서 체질을 공부하여 사람을 올바르게 조합하는 일이
앞으로 더욱 중요해집니다.
2) 체질별 특성
① 금체질(태양인) : 문제점 파악이 빠르기 때문에 검수
같은 일에 어울립니다. 그러나
프로젝트에 처음부터 투입되면
처음부터 문제점을 콕콕 짚어내서
시작조차 어렵기 때문에 프로젝트
초입단계에서는 제외시켜야 합니다.
마무리단계에서 문제점을 짚어내는
역할에 제격이고 검수, 전략가,

책사에 제격입니다..
② 목체질(태음인) : 가진게 많고 입이 무겁고,
어리숙하고 이해가 느려서 행동이
굼뜹니다. 그러나 한번 결정하면
빠르게 진행하는 편입니다.
사장같은 ‘장’자리에 제격입니다.
하는 것 없이 배 나와서 듬직하게
있는 사람들이 목체질입니다.
가만히 앉아만 있어도 힘이 되는
사람입니다.
③ 토체질(소양인) : 톡톡튀고 아주 발랄하고 색감에
탁월합니다. 연예인들이 토체질이
많습니다. 창의적인 편입니다.
이해가 빠르기 때문에 일을 잘
벌이고 사고를 잘 칩니다. 뒷수습을
못하기 때문에 목체질이
필요합니다. 프로젝트 시작시

토체질과 수체질이 한 팀을 이루면
결과물이 나옵니다. 그 결과물을
토대로 투자자인 목체질을 만나야
합니다. 팀장에 제격입니다.
④ 수체질(소음인) : 성실하지만 우유부단하고 소심해서
결정을 잘 못합니다. 팀장으로
결정하는 자리에 있으면 결정을 잘
못합니다. 토체질과 같이 일을 하면
일이 잘 진행됩니다. 그러나 리더
자리에 있으면 옆에서 누군가 잡아
줄 수 있는 사람이 필요합니다.
기술직이 제격입니다.

참조 법문
626강 직장생활-1 이직과 소통 (1/4)
819강 은행지점장 역할-2 자책과 욕심 (2/2)
4707강 대화의 법칙
5582강 경청을 잘 하려면
5229강 경청의 방법
6294강 소통을 잘하는 방법
7395강 경기도민의 경기도를 위한 연구 방향(1_2)
7816강 띠와 사상체질의 관계 (2/2)
10825강 경청과 솔직한 의사 표현
11376강 체질의 한계를 넘어 성공적인 팀을 이루는 법
12635강 상대를 존중하는 소통관계란?
13460강 언어와 비언어적 소통의 조화`,`Ⅴ. 슬기로운 직장생활
(급여와 자기 관리 편)
1. 급여 사용법
1) 싞개념 저축법 - 나를 갖추어야 핚다
급여는 앞서 짚어본 바와 같이 직장이라는
사회학교에서 우리가 공부하며 성장할 수 있도록 지원해
주는 것입니다. 그런데 우리에게 주어지는 이 경비를
먹고 살기 위해서만 쓰다보면 성장하지 못하고 사회에
뒤쳐져 결국 회사에서도 더 이상 경비를 지원해주지 않는
상황에 놓이게 될 것입니다. 그렇다면 우리에게 주어지는
이 급여를 어떻게 사용해야 할까요?
월급을 받았다면 은행에 저축을 해서 돈을 모으려고
하지 말고 자신에게 저축해야 합니다. 즉, 나를 갖추는 데

사용해야 합니다. 자신의 마인드를 성장시키고, 자신을
갖추는 데에 먼저 사용하고 나서 조금 남으면 비축을
해두어야 합니다. 다음에 어떤 일이 다가올지 모르기
때문에 10% 내지 15% 정도만 이 달이 지나도 남을 수
있게 비축을 해야 합니다. 그런데 만약 전체 급여의 30%
혹은 그 이상을 저축해 버리면 자신이 발전하는 데에
필요한 비용을 묶어 버리게 되어 발전할 수 있는 기회를
놓치게 됩니다.
그래서 우리는 기본적인 생활을 하면서, 필요한 영양도
채우고, 필요한 책도 보고, 연극, 오페라 같은 문화생활도
하면서 건강한 정신과 육체를 가질 수 있도록 급여를
바르게 사용해야 합니다.
그리고 자신의 마인드가 좋으면 나이가 들어도
소외받지 않습니다. 소외받지 않으면 노후 걱정을 할
필요가 없습니다. 왜냐하면 사람들이 필요로 하는 사람이
되어 있기 때문에 노후에도 계속 경제가 일어나게 되어
있습니다. 그래서 사람들에게 필요한 사람이 되기 위해
노력을 해야 합니다. 그런데 돈을 모으려고 한다면 결국

사회에 뒤떨어져서 분별력이 떨어지고, 모은 돈도 욕심을
내다가 결국 사기를 당하게 됩니다.
그래서 돈을 모으려고 하지 말고 자신을 갖추는데
투자해야 합니다. 이것이 신개념 저축법입니다.
2) 바른 주식 투자법 – 30% 투자법
만약 자신이 바르게 쓰지 못하는 돈이 있다면 주식에
투자할 수도 있습니다. 하지만 투자를 할 때에 돈을 벌기
위해 투자를 하게 되면 욕심으로 인해 결국 돈을 잃게
되어 있습니다. 그래서 바른 법칙을 알고 투자를 해야
합니다.
내가 가지고 있는 돈을 지금 어디에 쓸 수가 없다면 이
돈을 가지고 돈 벌겠다는 생각을 하지 말고, 사회에
필요한 일을 하며 성장하는 우량 기업을 찾아서,
동업자의 마인드로 투자해야 합니다. 그리고 이때는 전체
금액의 30%만 투자를 해야 합니다. 적은 금액으로
투자를 해야 욕심이 들어가지 않고 남은 돈으로 운용을`,`사회에 뒤떨어져서 분별력이 떨어지고, 모은 돈도 욕심을
내다가 결국 사기를 당하게 됩니다.
그래서 돈을 모으려고 하지 말고 자신을 갖추는데
투자해야 합니다. 이것이 신개념 저축법입니다.
2) 바른 주식 투자법 – 30% 투자법
만약 자신이 바르게 쓰지 못하는 돈이 있다면 주식에
투자할 수도 있습니다. 하지만 투자를 할 때에 돈을 벌기
위해 투자를 하게 되면 욕심으로 인해 결국 돈을 잃게
되어 있습니다. 그래서 바른 법칙을 알고 투자를 해야
합니다.
내가 가지고 있는 돈을 지금 어디에 쓸 수가 없다면 이
돈을 가지고 돈 벌겠다는 생각을 하지 말고, 사회에
필요한 일을 하며 성장하는 우량 기업을 찾아서,
동업자의 마인드로 투자해야 합니다. 그리고 이때는 전체
금액의 30%만 투자를 해야 합니다. 적은 금액으로
투자를 해야 욕심이 들어가지 않고 남은 돈으로 운용을

하면서 자신의 일에 충실히 하며 집중할 수 있습니다.
또한 이것은 저축의 개념도 겸할 수 있어, 필요한 경우
언제든지 찾아 사용할 수 있습니다.
그렇게 해서 안전한 곳에 정확하게 투자를 하면 자신이
바르게 쓰지 못한 돈을 기업에서 바르게 쓰는 것이 되어
그 기업도 성장하고 자신도 성장하게 됩니다.
2. 직장인의 재테크 - 논문 작성
그 외 직장인의 재테크는 무엇이 있을까요? 바로
자신의 작품을 만드는 것입니다. 직장은 사회 공부를
하는 곳입니다. 직장에서 마주하는 환경 속에서 사람을
대하며 매일 보고, 듣고, 느낀 점을 체계적으로 기록하고
정리하면서 리포트를 써야 합니다. 그렇게 3년 동안
정리를 하게 되면 자신의 논문을 작성하여, 책을 낼 수`,`하면서 자신의 일에 충실히 하며 집중할 수 있습니다.
또한 이것은 저축의 개념도 겸할 수 있어, 필요한 경우
언제든지 찾아 사용할 수 있습니다.
그렇게 해서 안전한 곳에 정확하게 투자를 하면 자신이
바르게 쓰지 못한 돈을 기업에서 바르게 쓰는 것이 되어
그 기업도 성장하고 자신도 성장하게 됩니다.
2. 직장인의 재테크 - 논문 작성
그 외 직장인의 재테크는 무엇이 있을까요? 바로
자신의 작품을 만드는 것입니다. 직장은 사회 공부를
하는 곳입니다. 직장에서 마주하는 환경 속에서 사람을
대하며 매일 보고, 듣고, 느낀 점을 체계적으로 기록하고
정리하면서 리포트를 써야 합니다. 그렇게 3년 동안
정리를 하게 되면 자신의 논문을 작성하여, 책을 낼 수

있게 됩니다. 이렇게 만들어진 책은 앞으로 회사에
들어올 후배들에게 길잡이가 되어줄 수 있습니다. 또한
사회에 필요한 콘텐츠가 되어, 책 판매 수입이나 강의를
통해 부수입도 발생할 수 있게 됩니다.
3. 연봉 협상 해야핛까?
회사에서 월급를 주는 것은 내가 활동하고 성장하는
데에 경비가 들어가기 때문에 주는 것입니다. 예를 들어
직원들이 바깥에서 안 좋은 일을 겪고, 어려운 일이
생기면 회사에 와서 능력 발휘를 할 수가 없습니다.
사회와 회사는 둘이 아니라 하나로 연결되어 있기
때문입니다. 직원들이나 아랫사람들이 어려움을 겪는 건
없는지를 살피고, 함께 연구하기 위해서 노력한다면
거기에는 경비가 더 들어가게 됩니다. 그래서 회사의
환경에 성실하게 임하고, 활동 영역이 넓어지거나 승진을`,`있게 됩니다. 이렇게 만들어진 책은 앞으로 회사에
들어올 후배들에게 길잡이가 되어줄 수 있습니다. 또한
사회에 필요한 콘텐츠가 되어, 책 판매 수입이나 강의를
통해 부수입도 발생할 수 있게 됩니다.
3. 연봉 협상 해야핛까?
회사에서 월급를 주는 것은 내가 활동하고 성장하는
데에 경비가 들어가기 때문에 주는 것입니다. 예를 들어
직원들이 바깥에서 안 좋은 일을 겪고, 어려운 일이
생기면 회사에 와서 능력 발휘를 할 수가 없습니다.
사회와 회사는 둘이 아니라 하나로 연결되어 있기
때문입니다. 직원들이나 아랫사람들이 어려움을 겪는 건
없는지를 살피고, 함께 연구하기 위해서 노력한다면
거기에는 경비가 더 들어가게 됩니다. 그래서 회사의
환경에 성실하게 임하고, 활동 영역이 넓어지거나 승진을

하게 되면 그에 따른 경비가 더 들어가기 때문에 연봉도
더 주게 되는 것입니다.
그런데 오래 일했다고 연봉을 더 많이 받으려고 해서는
안됩니다. 또 자신이 하는 일에 비해서 더 많이 받으려고
해서도 안됩니다. 자신의 역량보다 더 많은 연봉을 받게
되면 결국은 어려움을 겪게 됩니다. 연봉을 더 받으려고
애쓰는 시간에 다른 것을 하지 못해서 자신의 개발을
하지 못하게 되어 발전을 저해하게 됩니다. 그렇게
늦어진 만큼 맞이하는 환경들을 소화하지 못하고
부딪히면서 자신은 어려움을 겪게 됩니다. 그래서 연봉을
올리려고 하기보다는 자신의 할 일을 열심히 하며,
자신을 갖추고 성장하는 데에 집중해야 합니다.

4. 직장인의 자기 관리법
1) 시간 관리 - 24시간 활용법
우리에게는 모두 똑같이 하루에 24시간이 주어집니다.
그리고 이 시간을 3등분으로 나누게 되면 8시간씩 나눌
수가 있습니다. 그래서 먼저 8시간은 회사를 위해서
최선을 다해야 합니다. 이 직장은 우리에게 공부할 수
있는 환경과 경비를 제공하여 내가 사회 학교를 다닐 수
있도록 뒷바라지를 해주고 있기 때문에 불평을 해서도
안되고 그 직장을 아끼고 사랑하며 할 일을 해야 합니다
그 다음 8시간은 쉬는 시간입니다. 우리가 하루동안
섭취한 안 좋은 음식도, 안 좋은 생각도 수면을 취할 때
정리가 되고 회복이 됩니다. 그래서 이 8시간을 잘
활용하여 휴식을 취하고 수면을 취하는 것도 중요합니다.
마지막으로 남은 8시간은 자신에게 주어진
자유시간입니다. 이 8시간을 놀러 다니면서 낭비를 하게
되면 사회에 뒤처지고 어려움을 겪게 됩니다. 하지만 이
시간을 활용하여 책을 보거나, 강의를 듣는 등 인성을`,`4. 직장인의 자기 관리법
1) 시간 관리 - 24시간 활용법
우리에게는 모두 똑같이 하루에 24시간이 주어집니다.
그리고 이 시간을 3등분으로 나누게 되면 8시간씩 나눌
수가 있습니다. 그래서 먼저 8시간은 회사를 위해서
최선을 다해야 합니다. 이 직장은 우리에게 공부할 수
있는 환경과 경비를 제공하여 내가 사회 학교를 다닐 수
있도록 뒷바라지를 해주고 있기 때문에 불평을 해서도
안되고 그 직장을 아끼고 사랑하며 할 일을 해야 합니다
그 다음 8시간은 쉬는 시간입니다. 우리가 하루동안
섭취한 안 좋은 음식도, 안 좋은 생각도 수면을 취할 때
정리가 되고 회복이 됩니다. 그래서 이 8시간을 잘
활용하여 휴식을 취하고 수면을 취하는 것도 중요합니다.
마지막으로 남은 8시간은 자신에게 주어진
자유시간입니다. 이 8시간을 놀러 다니면서 낭비를 하게
되면 사회에 뒤처지고 어려움을 겪게 됩니다. 하지만 이
시간을 활용하여 책을 보거나, 강의를 듣는 등 인성을

갖추고, 배우기 위해 노력한다면 실력자로 성장하여 밝은
미래를 열어갈 수 있습니다.
2) 스트레스 관리법
직장은 공부를 하면서 실력을 쌓아가는 곳입니다.
직장에 가서 무엇을 배우고, 나를 갖추고 성장하기
위해서 노력을 하는 사람은 자신에게 주어지는 환경을
공부 자료로 여기고 어떻게 해야 할지 연구를 하면서
받아들이기 때문에 스트레스를 받지 않습니다. 그런데
공부하는 자세로 가는 것이 아니라 돈을 벌고, 출세하고,
높은 자리에 올라가려고만 하는 사람은 욕심을 내고 있어
실력을 쌓지 못하게 됩니다. 결국 주어지는 환경들을
소화하지 못하다 보니 자꾸 부딪혀서 힘들어지는
것입니다. 스트레스가 올 수 있는 환경은 자신이
만들어서 자신이 뒤집어 쓰는 것입니다.
기본적으로 스트레스는 직장을 돈 버는 곳이라는
잘못된 인식에서부터 출발합니다. 직장은 사회 학교라는`,`갖추고, 배우기 위해 노력한다면 실력자로 성장하여 밝은
미래를 열어갈 수 있습니다.
2) 스트레스 관리법
직장은 공부를 하면서 실력을 쌓아가는 곳입니다.
직장에 가서 무엇을 배우고, 나를 갖추고 성장하기
위해서 노력을 하는 사람은 자신에게 주어지는 환경을
공부 자료로 여기고 어떻게 해야 할지 연구를 하면서
받아들이기 때문에 스트레스를 받지 않습니다. 그런데
공부하는 자세로 가는 것이 아니라 돈을 벌고, 출세하고,
높은 자리에 올라가려고만 하는 사람은 욕심을 내고 있어
실력을 쌓지 못하게 됩니다. 결국 주어지는 환경들을
소화하지 못하다 보니 자꾸 부딪혀서 힘들어지는
것입니다. 스트레스가 올 수 있는 환경은 자신이
만들어서 자신이 뒤집어 쓰는 것입니다.
기본적으로 스트레스는 직장을 돈 버는 곳이라는
잘못된 인식에서부터 출발합니다. 직장은 사회 학교라는

바른 인식을 가지고 공부하는 자세로 임한다면 자신에게
주어지는 환경을 스트레스로 받아들이는 것이 아니라
자신의 성장의 재료로서 소화해가면서 발전해 갈
것입니다.
3) 직장인의 옷차림
우리가 흔히 말하는 의식주에서 의는 옷을 뜻합니다.
옷이 가장 앞에 있는 것은 밥 먹는 것보다도 중요하기
때문입니다. 그만큼 우리에게 의복은 중요한 것입니다.
어떤 옷을 입느냐에 따라 자신의 정신 상태가 바뀌기
때문입니다.
우리가 밖에 나올 때 옷매무새를 갖추는 것은 상대를
위해서 우리가 옷을 갖춰서 잘 입고 나오는 것이지,
자신이 좋으려고 하는 것이 아닙니다. 그래서 집에 있을
때는 자신이 좋으려고 양말도 벗고, 윗도리도 벗고 할 수
있습니다. 상대가 없기 때문입니다. 하지만 밖에 나올
때는 상대를 위해서 노력을 해야 합니다. 특히 공무`,`바른 인식을 가지고 공부하는 자세로 임한다면 자신에게
주어지는 환경을 스트레스로 받아들이는 것이 아니라
자신의 성장의 재료로서 소화해가면서 발전해 갈
것입니다.
3) 직장인의 옷차림
우리가 흔히 말하는 의식주에서 의는 옷을 뜻합니다.
옷이 가장 앞에 있는 것은 밥 먹는 것보다도 중요하기
때문입니다. 그만큼 우리에게 의복은 중요한 것입니다.
어떤 옷을 입느냐에 따라 자신의 정신 상태가 바뀌기
때문입니다.
우리가 밖에 나올 때 옷매무새를 갖추는 것은 상대를
위해서 우리가 옷을 갖춰서 잘 입고 나오는 것이지,
자신이 좋으려고 하는 것이 아닙니다. 그래서 집에 있을
때는 자신이 좋으려고 양말도 벗고, 윗도리도 벗고 할 수
있습니다. 상대가 없기 때문입니다. 하지만 밖에 나올
때는 상대를 위해서 노력을 해야 합니다. 특히 공무

자리나, 많은 사람들을 접하는 자리에서는 조금
불편하더라도 옷을 벗거나 편안하게 하는 데에 선을
넘어가면 안됩니다. 의복을 너무 편하게 입어버리면 정신
상태가 느슨해지기 때문입니다. 정신 상태가 느슨해지면
업무의 질이 떨어지고, 자세가 나태해집니다. 사람을
많이 대하는 사람일수록 자신을 정확하게 갖추고 나와야
하고, 지위가 높으면 높을수록 깔끔하게 정장을 입어서
빈틈없이 다녀야 하는 것입니다.
우리는 어느 자리에 참석하는가에 따라, 또 누구를
만나느냐에 따라 의복이 바뀌게 됩니다. 옷을 입을
때에는 비싸고 화려한 것이 중요한 것이 아니라, 자신의
자리에 맞게 단정하고, 청결하며, 조화롭게 갖춰 입어야
합니다.

참조 법문
정법강의 94강 젊은이들의 월급 저축-1 어느 정도?
정법강의 96강 젊은이들의 월급 저축-3 주식투자
정법강의 776강 공무원 의복 - 맵시 있게 입어라
정법강의 3939강 가죽공예 작가의 진로고민(1/2)
정법강의 6024강 중간관리자로서 스트레스 받는 남편
정법강의 7236강 직장인의 스트레스(1_2)
정법강의 7268강 연봉을 올리는 방법
정법강의 7298강 연봉 책정의 기준
정법강의 7566강 공인의 옷차림(1_2)`,`Ⅵ. 직장 내 갈등 해결
1. 직장 내 의견 충돌 이유
1) 실력차이로 인핚 불통
직장에 입사 후 약 3년간은 열정적으로 실력을
발휘합니다. 그러나 문제는 대부분의 사람들은 3년의
성과에 안주하며 멈춰버립니다. 7년이 지나도 여전히
처음 인정받았던 ‘그때의 실력’에 머물러 있고, 새로운
발전이 없습니다. 그러다 보니 최근 지식을 섭렵한
후배가 들어오면 선배를 금새 따라잡습니다. 그럼에도
불구하고 선배가 여전히 “나는 너보다 위다”라는 태도를
유지한다면, 당연히 후배는 받아들이지 못하고 충돌하게
됩니다. 충돌이 일어나는 이유는 부딪쳤다는 것인데,
부딪친다는 것은 실력의 크기가 똑같기 때문에 부딪치는

것입니다.
새로 들어오는 젊은 세대는 새로운 지식으로 무장하고
등장합니다. 예를 들어, 하버드 대학을 졸업한 젊은
인재가 10살 이상 어린 나이로 입사했는데, 오랜 경력을
가진 선배보다 훨씬 빠르게 성과를 냅니다. 이때 선배가
자존심 때문에 그를 인정하지 못하면, 조직은 곧 갈등에
빠집니다.
기존의 세대는 멈춰 있었고, 새로운 세대는 계속
배우고 있었기 때문입니다. 또한 오늘날의 교육은 훨씬
깊고 실질적이며, 시작점 자체가 과거보다 훨씬 높습니다.
따라서 계속 공부하지 않으면 누구든지 성장하지
못합니다..
인간관계가 수직의 구조인 직장에서 상사가 과거
버전에 머물러 있다면, 후배들은 점점 상사를 존경하지
않게 됩니다. 직장인들이 처음에 입사해서는 잘 지내다가
시간이 지나면서 관계가 틀어지고 소통이 막히는 이유가
이러한 이유 때문입니다.

직장이 ‘성과 우선주의’로 평가 한다면 성과를 내는
신입사원이 오히려 유리하기 때문에 선배들은
‘하향평준화’를 바랍니다. 그러나 경영자인 오너는
성과를 바랍니다. 지금 현재 이 세상에 살아남으려면
성과가 있어야 하기 때문입니다. 직장에서 오래 근무한
선배들이 인정받지 못하다 보니 모든 불만이 쌓이고
이직을 고려하게 됩니다. 각종 리서치 기관에서 조사한
자료에 따르면 직장인 이직 사유 1위가 ‘대우나 봉급의
불만족’이라고 하는데 그 이전에 선후배간 ‘실력차이’로
인한 소통의 어려움이 가장 중요한 원인인 것입니다.
2) 갑을관계의 오해
바른 소통을 위해서는 ‘갑을관계 이해’가 필수입니다.
충돌이 일어나는 원인은 갑을관계를 잘못 이해하고
상대를 대하기 때문에 일어나는 것입니다.
‘갑’은 도움을 주는 사람이고 ‘을’은 도움을 받는
사람입니다. 갑과 을이 항상 정해져 있는 것이 아니고`,`직장이 ‘성과 우선주의’로 평가 한다면 성과를 내는
신입사원이 오히려 유리하기 때문에 선배들은
‘하향평준화’를 바랍니다. 그러나 경영자인 오너는
성과를 바랍니다. 지금 현재 이 세상에 살아남으려면
성과가 있어야 하기 때문입니다. 직장에서 오래 근무한
선배들이 인정받지 못하다 보니 모든 불만이 쌓이고
이직을 고려하게 됩니다. 각종 리서치 기관에서 조사한
자료에 따르면 직장인 이직 사유 1위가 ‘대우나 봉급의
불만족’이라고 하는데 그 이전에 선후배간 ‘실력차이’로
인한 소통의 어려움이 가장 중요한 원인인 것입니다.
2) 갑을관계의 오해
바른 소통을 위해서는 ‘갑을관계 이해’가 필수입니다.
충돌이 일어나는 원인은 갑을관계를 잘못 이해하고
상대를 대하기 때문에 일어나는 것입니다.
‘갑’은 도움을 주는 사람이고 ‘을’은 도움을 받는
사람입니다. 갑과 을이 항상 정해져 있는 것이 아니고

상황에 따라 갑과 을이 바뀝니다. 평상시에는 조직에서
윗자리에 있는 사람이 갑입니다. 그러나 윗사람이
아랫사람에게 부탁할 일이 생긴다면 윗사람은 ‘을’이
되는 것입니다. 자신이 ‘을’임을 인지하지 못하고 ‘을’이
‘갑’한테 월권행위를 할 때 충돌이 일어나는 것입니다.
아래 갑을관계의 오해로 발생하는 충돌 사례를 보면,
① 상사가 평소엔 갑이지만 아랫사람에게 돈을 빌릴 때,
상사는 을, 아랫사람은 갑이 됩니다. 갑은 을에게
돈의 사용처를 물을 수 있습니다.
② 프로젝트를 할 때, 아랫사람이 실력이 뛰어나서
상사가 부탁 하는 경우, 아랫사람이 ‘갑’, 상사는
‘을’이 됩니다.
③ 부모님이 자식에 대해 평소에는 갑이지만 자식에게
컴퓨터를 배워야 한다면 부모님은 을, 자식은 갑이
됩니다.

④ 대통령이 학식이 짧은 골프강사에게 레슨을
받는다면 골프강사가 갑이고 대통령은 을이 됩니다.
대통령이 골프를 배워야 하는, 즉 도움을 받아야
하는 입장이기 때문에 대통령은 을이 됩니다.
⑤ 남편이 맛있는 집밥을 먹고 싶을 때 아내는 갑,
남편은 을이 됩니다. 집밥을 먹을려면 을은 자신을
낮추어서 갑의 비위를 맞춰야 합니다.
2. 직장 내 갈등해결의 핵심
1) 실력차이를 극복하려면
내 실력이 부족하면 상대와 대등한 소통이 이루어질 수
없습니다. 그러므로 답은 분명합니다. 내가 더 배워야
합니다. 배우고 성장해야만 원활한 소통이 가능합니다.
직장에 들어가서 3년 동안 실력을 발휘한 이후부터는`,`④ 대통령이 학식이 짧은 골프강사에게 레슨을
받는다면 골프강사가 갑이고 대통령은 을이 됩니다.
대통령이 골프를 배워야 하는, 즉 도움을 받아야
하는 입장이기 때문에 대통령은 을이 됩니다.
⑤ 남편이 맛있는 집밥을 먹고 싶을 때 아내는 갑,
남편은 을이 됩니다. 집밥을 먹을려면 을은 자신을
낮추어서 갑의 비위를 맞춰야 합니다.
2. 직장 내 갈등해결의 핵심
1) 실력차이를 극복하려면
내 실력이 부족하면 상대와 대등한 소통이 이루어질 수
없습니다. 그러므로 답은 분명합니다. 내가 더 배워야
합니다. 배우고 성장해야만 원활한 소통이 가능합니다.
직장에 들어가서 3년 동안 실력을 발휘한 이후부터는

반드시 다시 ‘공부’를 시작해야 합니다.
직장에서 일하는 것은70%, 나머지 30%는 공부로
채워야 합니다. 그러면 항상 성장합니다.
2) 월권행위를 했을 때
자신이 ‘을’임에도 월권행위 한 것을 인지했다면
최대한 빨리 찾아가서 사과를 해야합니다. 그러면 상대도
오해가 풀리고 나에 대한 신용이 더해집니다. 그러나
시간이 지나도 자신의 잘못을 인지하지 못한다면 자연의
법칙을 역행했기 때문에 어려움이 옵니다. 갑을관계는
자연의 법도이고 철칙입니다. 지혜로워야지 미련하면
안됩니다.
3) 의논하라
의논과 주장은 관계의 질을 결정합니다. 만약 상대가
동등한 위치의 동료이거나 함께 협력해야 하는 관계라면,
주장을 해서는 안 됩니다. 이 경우에는 오직 의논만이`,`반드시 다시 ‘공부’를 시작해야 합니다.
직장에서 일하는 것은70%, 나머지 30%는 공부로
채워야 합니다. 그러면 항상 성장합니다.
2) 월권행위를 했을 때
자신이 ‘을’임에도 월권행위 한 것을 인지했다면
최대한 빨리 찾아가서 사과를 해야합니다. 그러면 상대도
오해가 풀리고 나에 대한 신용이 더해집니다. 그러나
시간이 지나도 자신의 잘못을 인지하지 못한다면 자연의
법칙을 역행했기 때문에 어려움이 옵니다. 갑을관계는
자연의 법도이고 철칙입니다. 지혜로워야지 미련하면
안됩니다.
3) 의논하라
의논과 주장은 관계의 질을 결정합니다. 만약 상대가
동등한 위치의 동료이거나 함께 협력해야 하는 관계라면,
주장을 해서는 안 됩니다. 이 경우에는 오직 의논만이`,`반드시 다시 ‘공부’를 시작해야 합니다.
직장에서 일하는 것은70%, 나머지 30%는 공부로
채워야 합니다. 그러면 항상 성장합니다.
2) 월권행위를 했을 때
자신이 ‘을’임에도 월권행위 한 것을 인지했다면
최대한 빨리 찾아가서 사과를 해야합니다. 그러면 상대도
오해가 풀리고 나에 대한 신용이 더해집니다. 그러나
시간이 지나도 자신의 잘못을 인지하지 못한다면 자연의
법칙을 역행했기 때문에 어려움이 옵니다. 갑을관계는
자연의 법도이고 철칙입니다. 지혜로워야지 미련하면
안됩니다.
3) 의논하라
의논과 주장은 관계의 질을 결정합니다. 만약 상대가
동등한 위치의 동료이거나 함께 협력해야 하는 관계라면,
주장을 해서는 안 됩니다. 이 경우에는 오직 의논만이

바른 길입니다.
의논은 서로의 생각을 공유하고 지혜를 모으는
과정이지만, 주장은 상대의 의견을 막고 자신의 생각을
강요하는 행위이기 때문입니다.
반대로 상대가 명확한 상하관계에 있고, 상대가 내게
의존하거나 나의 지도를 받아야 하는 관계라면, 그때는
책임자의 입장에서 분명한 방향을 제시하는 주장이
필요할 수도 있습니다. 그러나 그 주장조차도 상대의
성장을 막는 명령이 아니라, 의논을 바탕으로 한 결론의
제시여야 합니다.
의논은 서로의 의견을 제시하면서 지식의 깊이를
높이는 것입니다. 내가 의견을 제시하면 상대도 의견을
냅니다. 그럼 두 사람의 생각이 서로 부딪히고 섞이면서
지식의 질량이 커지고, 그 속에서 새로운 통찰이
태어납니다. 이 과정을 두세 번 반복하면, 처음보다 훨씬
깊은 ‘분별의 답’이 나오게 됩니다.
주장을 하면 상대는 더 이상 말하지 않습니다.

왜냐하면 내가 “내가 맞다”고 고집하는 순간, 상대의
의견을 들을 이유가 사라지기 때문입니다. 그래서
주장하는 사람 곁에는 시간이 지나면 사람이 남지
않습니다.
처음에는 지식이 많아 보이고 똑똑해 보이지만, 결국
주변의 사람이 떠나게 됩니다. 똑똑한 사람일수록
외로워지는 이유가 여기에 있습니다. 자신의 주장이
상대의 말을 막고, 결국 함께 공부할 사람이 사라지기
때문입니다.
상대의 말을 듣고, 나의 의견을 제시하고, 다시 그것을
받아들이는 과정 속에서 양쪽 지식의 질량이 함께
커집니다. 주장은 한쪽이 상대의 성장을 막는 행동입니다.
“내 말이 답이다”라는 태도는 상대의 분별 기회를
빼앗습니다. 의논은 ‘내가 옳다’가 아니라, ‘함께 옳음을
찾아가자’는 자세입니다.
“주장하지 말고, 의논하라.”
이것이 바른 인간관계의 첫걸음입니다.

3. 직장 내 갈등사례 해결법
1) 상사의 불합리핚 요구 대처법
이 문제는 내가 처한 상황이 어떠한가에 따라 판단해야
합니다. 예를 들어, “나는 저 상사와 더 이상 일하기
싫다”라고 마음이 들고 불평불만을 하고 있다면 그
직장을 나와야 합니다.
하지만 회사를 그만두면 당장 월급이 없어지는 현실이
따른다면, 그 순간에는 상사의 요구를 따를 수밖에
없습니다. 내가 이곳에 돈을 벌기 위해 왔다면,
터무니없는 요구를 하더라도, ‘나는 돈을 벌러 왔다’는
사실을 명확히 인식하고 분별하지 말아야 합니다. 회사에
인격 대우 받으러 온 것이 아니라, 돈을 벌러 온 것이기
때문입니다. 그것은 내가 선택한 조건 속에서 오는
필연적 결과입니다.
이 세상에는 ‘이유 없는 어려움’이 존재하지 않습니다.
대자연의 법칙 속에서, 사람이 감당해야 할 무게는`,`3. 직장 내 갈등사례 해결법
1) 상사의 불합리핚 요구 대처법
이 문제는 내가 처한 상황이 어떠한가에 따라 판단해야
합니다. 예를 들어, “나는 저 상사와 더 이상 일하기
싫다”라고 마음이 들고 불평불만을 하고 있다면 그
직장을 나와야 합니다.
하지만 회사를 그만두면 당장 월급이 없어지는 현실이
따른다면, 그 순간에는 상사의 요구를 따를 수밖에
없습니다. 내가 이곳에 돈을 벌기 위해 왔다면,
터무니없는 요구를 하더라도, ‘나는 돈을 벌러 왔다’는
사실을 명확히 인식하고 분별하지 말아야 합니다. 회사에
인격 대우 받으러 온 것이 아니라, 돈을 벌러 온 것이기
때문입니다. 그것은 내가 선택한 조건 속에서 오는
필연적 결과입니다.
이 세상에는 ‘이유 없는 어려움’이 존재하지 않습니다.
대자연의 법칙 속에서, 사람이 감당해야 할 무게는

언제나 자신이 취한 만큼의 대가로 온다는 것입니다.
그러므로 내가 그 환경 속에서 체면이 구겨지고,
자존심이 상하고, 비굴해지는 상황이 오더라도, 돈을
벌러 왔다면 비굴함도 감수해야 합니다. 그것이 바로
경우에 맞는 행동입니다.
반대로, “나는 돈이 아니라 나의 가치와 신념을 위해
일한다”라고 확신한다면, 그때는 단호히 거절해야
합니다. 이 역시 경우에 따른 선택입니다.
사람은 모두 자신의 조건에 맞게 살아가는 존재입니다.
그러므로 어느 쪽이 옳고 그르다고 단정할 수 없습니다.
어떤 때는 비굴하게 사는 것이 잘하는 것이고, 또 어떤
때는 비굴하지 않는 것이 옳을 때가 있습니다. 모든 것은
때와 상황에 따라 다릅니다.
타인의 행동을 보며 “저 사람은 왜 저렇게 비굴하게
사나?”, “왜 저런 요구를 다 들어주지?”이렇게 판단하지
마십시오.

그 사람의 환경과 사정을 모른다면 그를 함부로 판단할
자격이 없습니다. 어쩌면 그는 지금 돈이 끊기면 가족이
굶어야 하는 절박한 상황일 수도 있습니다. 그렇다면
그가 상사의 불합리한 요구를 들어주는 것도 그 나름의
최선의 선택입니다.
사람은 자기 환경에 맞게 살아가는 동물입니다.
그러니 남을 함부로 판단하거나 돌을 던지지 마십시오.
그 사람의 깊이를 모르면 그 어떤 평가도 할 수 없습니다.
이것이 바로 우리가 지금 대한민국에서 마주하고 있는
현실이며, 그 안에서 배워야 할 삶의 이치입니다.
결국, 상사의 터무니없는 요구를 대하는 법이란
“상황에 따라, 내 환경에 따라, 나의 선택 기준에 따라
다르다”는 것입니다.
그것을 올바르게 분별하는 힘이 바로 ‘공부’입니다.

2) 실력 없는 상사와 충돌 시
아랫사람이 실력이 더 뛰어날지라도 윗사람을 좀
이해해 주어야 합니다. 윗사람은 실력이 모자라도
회사에서 필요하기 때문에 그 자리에 있는 것입니다.
예를 들어 편법으로 해야 할 일이나, 얼굴 두꺼운 사람이
처리해야 되는 일처럼 그 상사만이 할 수 있는 일이 있기
때문에 그 자리에 있는 것입니다.
그런데 아랫사람이 실력으로 윗상사를 이기려 한다거나
힘겨루기를 해서 충돌해버리면 보일게 안보이게 되고
무식해져 버립니다. 윗사람은 나중에 불이익을
당하더라도 당장은 아랫사람이 무조건 집니다. 내
실력으로 이기려 한다면 충돌이 일어나고 그 직장에서
나와야 하는 일이 발생합니다.
윗상사가 이해 안 되는 행동을 해도 ‘참 얼마나
힘들겠나.’ 이렇게 생각하고 소화를 해버리면 안 보였던
것이 보입니다. 즉 아랫사람이 할 수 없지만 그 상사만이
할 수 있는 일이 보입니다.`,`2) 실력 없는 상사와 충돌 시
아랫사람이 실력이 더 뛰어날지라도 윗사람을 좀
이해해 주어야 합니다. 윗사람은 실력이 모자라도
회사에서 필요하기 때문에 그 자리에 있는 것입니다.
예를 들어 편법으로 해야 할 일이나, 얼굴 두꺼운 사람이
처리해야 되는 일처럼 그 상사만이 할 수 있는 일이 있기
때문에 그 자리에 있는 것입니다.
그런데 아랫사람이 실력으로 윗상사를 이기려 한다거나
힘겨루기를 해서 충돌해버리면 보일게 안보이게 되고
무식해져 버립니다. 윗사람은 나중에 불이익을
당하더라도 당장은 아랫사람이 무조건 집니다. 내
실력으로 이기려 한다면 충돌이 일어나고 그 직장에서
나와야 하는 일이 발생합니다.
윗상사가 이해 안 되는 행동을 해도 ‘참 얼마나
힘들겠나.’ 이렇게 생각하고 소화를 해버리면 안 보였던
것이 보입니다. 즉 아랫사람이 할 수 없지만 그 상사만이
할 수 있는 일이 보입니다.

직장에서는 한사람을 접하더라도 내 공부자료라는
생각을 하고, 내 옆에 있는 사람이 나한테는 은인입니다.
또 같이 힘을 쓸 수가 있고, 이 자료가 없으면 내 공부를
못합니다.
40세 이하의 사람들은 무엇이든지 공부를 하려고
해야지 내실력으로 이기려고 들면 상처를 입습니다.
3) 화내는 상사 대처법
윗사람이 아랫사람에게 화를 내는 것은 “내가
부족하다”라고 스스로 고백하는 것과 같습니다.
정확한 자연의 질서 속에서 아랫사람은 모르는
사람이기 때문에 배우는 입장이고, 윗사람은 알고 있기
때문에 가르치는 위치에 있습니다.
그런데 아랫사람이 잘 모른다고 화를 낸다면, 그것은
윗사람이 아랫사람보다 실력이 모자라다는 뜻입니다.
윗사람이 아랫사람에게 화를 내면 결국 인기를 잃고`,`직장에서는 한사람을 접하더라도 내 공부자료라는
생각을 하고, 내 옆에 있는 사람이 나한테는 은인입니다.
또 같이 힘을 쓸 수가 있고, 이 자료가 없으면 내 공부를
못합니다.
40세 이하의 사람들은 무엇이든지 공부를 하려고
해야지 내실력으로 이기려고 들면 상처를 입습니다.
3) 화내는 상사 대처법
윗사람이 아랫사람에게 화를 내는 것은 “내가
부족하다”라고 스스로 고백하는 것과 같습니다.
정확한 자연의 질서 속에서 아랫사람은 모르는
사람이기 때문에 배우는 입장이고, 윗사람은 알고 있기
때문에 가르치는 위치에 있습니다.
그런데 아랫사람이 잘 모른다고 화를 낸다면, 그것은
윗사람이 아랫사람보다 실력이 모자라다는 뜻입니다.
윗사람이 아랫사람에게 화를 내면 결국 인기를 잃고

신뢰를 잃게 됩니다.
진정한 리더는 아랫사람이 부족하더라도 그 부족함을
채워주고, 실수를 포용할 수 있어야 윗사람의 자격을
갖춘 것입니다.
그런데 내가 아랫사람의 위치에 있고, 상사가 화를 잘
낸다면 어떻게 해야 할까요?
그럴 때는 상사를 원망하지 말고, 그 또한 내 공부의
과정으로 보아야 합니다. 내가 아직 미숙하기 때문에
그런 상사를 만난 것입니다. 화내는 사람도 부족하고,
그것을 받아 괴로워하는 나도 부족합니다.
따라서 어느 쪽이 더 많이 배워야 하는가의 비율만 다를
뿐, 결국은 둘 다 공부 중인 것입니다.
아랫사람의 지혜란, 상사의 부족함을 탓하지 않고 내가
먼저 내 자리를 잘 지키며 묵묵히 해야 할 일을 하는 것이
바른 자세입니다.
상사가 짜증을 내고 화를 내는 것도 상사 혼자만의

잘못이 아닙니다.
상사가 화내는 정도는 100 이라면 70 정도만 화를
냅니다. 나머지 30은 상사 스스로 감내하는 것입니다.
만약 그가 100을 다 쏟아냈다면 사건이 터졌을 것입니다.
즉, 내가 받은 70%의 불편함 속에는 내가 해야 할 몫을
다하지 못한 부분이 있습니다.
직장의 역할은 위에서는 40%, 중간관리자급 30%,
직원급 30% 의 비율로 조화되어야 조직이 원활히
돌아갑니다.
그런데 중간관리자급이나 직원급에서 나태해지거나
책임을 다하지 않으면, 그 불균형이 결국 ‘짜증’이라는
형태로 내려오는 것입니다.
따라서 상사가 화를 낼 때 상사를 탓하기 보다 자신이
책임을 다했는지를 돌아보아야 합니다.
앞서 말했듯이 직장은 단순히 돈을 버는 곳이 아니라
‘사회공부를 하는 학교’입니다. 월급은 단순한 댓가가
아니라, 자신이 성장하는 동안 사회가 나를 위해

지불하는 학비입니다. 대부분의 사람들은 이 원리를
모르고 월급을 모으는 데만 신경을 쓰며 직장을 불평의
대상으로 여깁니다. 이것이 바로 사회구조를 모르고
접근한 태도입니다.
직장을 공부의 장으로 받아들이면, 사회가 나를
키워주고 있다는 사실이 감사로 느껴집니다. 그런데
직장을 다니면서 불만을 품으면, 결국 그 에너지가 쌓여
어려움으로 되돌아옵니다.
결국, 문제는 내가 특별히 잘못해서가 아니라 직장을
접근하는 근본 태도가 잘못된 것입니다.
직장을 바르게 바라보면, 노력하지 않아도 자연히 해야
할 일들이 보입니다.
만약 상사와의 불화로 직장을 그만두었다면, “아, 내가
사회를 접근하는 법을 잘못했구나” 하고 깨닫고 다시는
같은 실수를 반복하지 않도록 마음을 세워야 합니다.
다음 직장에서는 주어진 일을 공부의 기회로 삼고,
회사에 도움을 주며 나의 성장을 사회와 연결시켜야

합니다. 그렇게 하면 다시는 어려운 일이 생기지 않으며,
회사에서도 버림받지 않습니다.
직장을 사랑해야 합니다.
직장을 사랑하려면 명분이 필요합니다. 그 명분은 바로
“이 직장은 나를 키워주는 학교이며, 사회가 내 성장을
지원해주는 곳이다”라는 깨달음입니다. 이 명분을
깨닫는 순간, 사람은 더 이상 불평하지 않게 됩니다.
40대가 되면 이 깨달음이 실제로 눈에 보이고, 세상을
정리하고 처리할 수 있는 실력자가 됩니다. 실력을 쌓지
못하고 나이만 먹으면, 사회는 “이제 네 공부를 지원해줄
시간이 끝났다”라며 내보냅니다.
그것이 바로 명예퇴직입니다.
직장이 우리를 내치는 것이 아니라, 더 배워야 할 시기가
끝났기 때문에 다음 단계로 나아가라고 하는 것입니다.
만약 상사와의 불화로 직장을 그만두게 되었다면 그
실패의 원인을 반드시 찾아야 합니다. 그 과정을 거치지

않고 상대를 탓하면, 그 순간부터 일은 풀리지 않습니다.
새로운 직장에 들어가도 또다시 비슷한 상황을 맞게
됩니다.
결국 인생의 시간을 낭비하며 같은 공부를 반복하게
되는 것입니다.
따라서 직장을 그만두었다면, “왜 내가 그곳에서
적응하지 못했는가”, “왜 사람들과 부딪혔는가”를 깊이
공부해야 합니다. 이것이 바로 ‘사회 공부’입니다.
지금이라도 깨닫는다면 늦지 않았습니다.
“다음 직장에서는 바르게 공부하겠다”는 마음으로
나아가면, 사회는 반드시 또 다른 기회를 줍니다. 그때는
이전과 전혀 다른 결과를 얻게 됩니다.
4) 지속적으로 자존감을 떨어뜨리는 상사 대처법
함께 일하는 상사가 나의 자존감을 지속적으로
떨어뜨리고, 일에 대한 의욕마저 꺾이게 할 경우 도저히`,`않고 상대를 탓하면, 그 순간부터 일은 풀리지 않습니다.
새로운 직장에 들어가도 또다시 비슷한 상황을 맞게
됩니다.
결국 인생의 시간을 낭비하며 같은 공부를 반복하게
되는 것입니다.
따라서 직장을 그만두었다면, “왜 내가 그곳에서
적응하지 못했는가”, “왜 사람들과 부딪혔는가”를 깊이
공부해야 합니다. 이것이 바로 ‘사회 공부’입니다.
지금이라도 깨닫는다면 늦지 않았습니다.
“다음 직장에서는 바르게 공부하겠다”는 마음으로
나아가면, 사회는 반드시 또 다른 기회를 줍니다. 그때는
이전과 전혀 다른 결과를 얻게 됩니다.
4) 지속적으로 자존감을 떨어뜨리는 상사 대처법
함께 일하는 상사가 나의 자존감을 지속적으로
떨어뜨리고, 일에 대한 의욕마저 꺾이게 할 경우 도저히

그 환경이 자신의 성장에 도움이 되지 않는다면 과감히
떠나는 것이 옳습니다. 그런 사람 옆에서 득이 될 일이
없기 때문입니다.
그러나 생활 여건이나 조건 때문에 그 자리를 못 떠나고
있다면 그 말을 듣고서도 눌러 앉아야 할 만큼 내가 잘 못
산 것이 있기 때문입니다. 만약 내가 바르게 살고, 내
일을 스스로 일궈왔다면 그 자리를 떠나더라도 내 할
일은 반드시 있습니다. 그렇게 살지 못했기에 지금은 그
자리를 벗어나지 못하고 있는 것입니다.
그렇다면 어떻게 해야 할까요?
자신이 대차져서 상사의 부당한 말에 단호히 치고
나가야 합니다. 그런 상사일수록 ‘약한 사람’입니다.
그렇기 때문에 내가 단호히 하면 함부로 못합니다.
약한 사람은 자신보다 약한 사람을 만나면 더 강하게
나옵니다. 따라서 대차게 치고 나가던지, 아니면
떠나던지 둘 중 하나를 택해야 합니다.
무턱대고 자신을 낮추어서는 안됩니다. 아닌 것은

아니라고 단호히 말 할 수 있어야 합니다. 불편한 상황이
생겼을 때는 다음과 같이 표현하십시오.
“그것은 이러한 이유로 아닌 것 같습니다.”
“이 부분은 조금 불편합니다.”
단호하되, 예의를 잃지 않는 태도로 말한 후에는 더 이상
그 사람을 바라보지 말고, 조용히 내 일에 집중하십시오.
말을 했으면 굽혀도 되지만 말을 안 하고 굽히면 상대는
더 강하게 나옵니다.
말은 영혼이 하는 것입니다. 입이 말하는 것이 아니라,
영혼이 육신을 통해 에너지를 꺼내어 전달하는 것입니다.
내가 말을 했다면 그 말은 상대의 마음속으로 들어가
운동력을 일으키며, 결국 상대를 변화시킵니다. 한 번
정확히 말하면 그 말은 이미 에너지로 작용하여 상황을
바꿉니다.
이것이 바로 ‘말의 운동력’입니다.
그러므로 말을 참지 말고 하십시오. 그래야 세상을

바꾸고 내 앞에 사람을 변화시킵니다.
5) 잘난체하는 직원을 대하는 법
직장생활을 하다 보면 어디에나 ‘모르는 것을 아는
체하며 말하는 사람’이 있습니다.
무슨 이야기를 하든 “그거 알아요”, “나 그거 해봤어요”
하며 으스대지만, 막상 깊이 물어보면 구체적인 대답을
피하거나 얼버무리는 경우가 많습니다. 이런 사람과 한
사무실에서 일하다 보면 불편하고 답답한 마음이 들 수
있습니다. 그러나 이런 상황 또한 내 공부의 재료입니다.
그 사람은 자신의 환경 속에서 그렇게 살아온 것입니다.
따라서 그를 탓하거나 바꾸려 들기보다, 있는 그대로
보아야 합니다. 시간이 지나면 그 사람의 실력과 한계는
자연히 드러납니다. 그 사람이 어떻게 처신하든 그것을
나쁘게 판단하지 말고, “저 사람은 저 방식으로 자기
역할을 하고 있구나” 하고 인정하는 태도가 필요합니다.
그 사람을 비난하거나 담을 쌓으면, 오히려 나의 공부가`,`바꾸고 내 앞에 사람을 변화시킵니다.
5) 잘난체하는 직원을 대하는 법
직장생활을 하다 보면 어디에나 ‘모르는 것을 아는
체하며 말하는 사람’이 있습니다.
무슨 이야기를 하든 “그거 알아요”, “나 그거 해봤어요”
하며 으스대지만, 막상 깊이 물어보면 구체적인 대답을
피하거나 얼버무리는 경우가 많습니다. 이런 사람과 한
사무실에서 일하다 보면 불편하고 답답한 마음이 들 수
있습니다. 그러나 이런 상황 또한 내 공부의 재료입니다.
그 사람은 자신의 환경 속에서 그렇게 살아온 것입니다.
따라서 그를 탓하거나 바꾸려 들기보다, 있는 그대로
보아야 합니다. 시간이 지나면 그 사람의 실력과 한계는
자연히 드러납니다. 그 사람이 어떻게 처신하든 그것을
나쁘게 판단하지 말고, “저 사람은 저 방식으로 자기
역할을 하고 있구나” 하고 인정하는 태도가 필요합니다.
그 사람을 비난하거나 담을 쌓으면, 오히려 나의 공부가

끊깁니다. 내가 미리 판단을 내려버리면, 나중에 그
사람이 내 일에 도움이 될 부분이 나타나더라도 막히게
됩니다.
세상에는 쓸모 없는 인연이 없습니다. 부족해 보이는
사람조차도 언젠가는 나에게 꼭 필요한 순간이 오게 돼
있습니다. 따라서 그를 ‘못난 사람’으로 보지 말고,
아량을 가지고 봐줄 수 있는 마음을 길러야 합니다.
내가 그를 잘 봐주면, 어느 순간 그 사람은 나에게
배워야 할 것이 생기고 나를 인정하기 시작합니다.
이때부터는 그가 나에게 묻고 배우는 관계로 바뀌며, 그
과정에서 서로의 버릇이 다듬어지고 좋은 인연으로
성장하게 됩니다.
세상에는 나쁜 것이 단 하나도 없습니다. 내가 잘못 쓰면
나쁜 것이 되는 거고 잘 쓰게 되면 이로운 게 되는 겁니다.
공부의 재료로 바라보면 어떤 인연도 나를 이롭게 합니다.
그러나 내가 그릇이 부족하면 그 인연이 괴롭게 느껴질
뿐입니다.

따라서 동료의 단점이나 부족함도 나의 공부로 삼아야
합니다. 그렇게 서로 상생하려는 마음으로 바라보면,
모든 관계는 결국 풀리게 되어 있습니다.
6) 독고다이 회사생활
사람과 함께하는 자리에 갔다면, 사람과 어울릴 줄
알아야 합니다. 그것이 내 실력입니다. 만약 사람들과
어울릴 수 없는 자리에 갔다면, 그 자리가 나와 맞지
않다는 뜻입니다. 그럴 때는 사람들과 섞이지 말고 그
자리에서 나와야 하며, 다른 사람의 불편함을 먼저
헤아려야 합니다.
내가 불편하다고 느끼는 것이 아니라, 사실은 다른
직원들이 나 때문에 불편한 것입니다. 그 자리에 억지로
남아 있으면서도 그 불편함을 모른다면, 결국 그 결과는
시간이 지나 나에게 어려움으로 돌아옵니다.
즉 내가 다른 사람들한테 뿌린 불편함이 되돌아오는
원리입니다.`,`따라서 동료의 단점이나 부족함도 나의 공부로 삼아야
합니다. 그렇게 서로 상생하려는 마음으로 바라보면,
모든 관계는 결국 풀리게 되어 있습니다.
6) 독고다이 회사생활
사람과 함께하는 자리에 갔다면, 사람과 어울릴 줄
알아야 합니다. 그것이 내 실력입니다. 만약 사람들과
어울릴 수 없는 자리에 갔다면, 그 자리가 나와 맞지
않다는 뜻입니다. 그럴 때는 사람들과 섞이지 말고 그
자리에서 나와야 하며, 다른 사람의 불편함을 먼저
헤아려야 합니다.
내가 불편하다고 느끼는 것이 아니라, 사실은 다른
직원들이 나 때문에 불편한 것입니다. 그 자리에 억지로
남아 있으면서도 그 불편함을 모른다면, 결국 그 결과는
시간이 지나 나에게 어려움으로 돌아옵니다.
즉 내가 다른 사람들한테 뿌린 불편함이 되돌아오는
원리입니다.

7) 상대의 말을 자주 끊는 사람 대처법
‘옹니’는 뽑아내야 합니다. 팀을 이루었을 때 조화를
이루지 못하는 사람은 뽑아내야 합니다. 단지 무리없이
자리에서 빼내는 방법을 찾아내야 하는 것이 관건입니다.
운용시대의 초기에는 성장기까지 있었던 모순들을
정리하는 시기로 이런 문제들이 많이 일어납니다. 그래서
팀이 모임과 해체를 반복하면서 결국 모일 사람들끼리
모이게 됩니다.
‘팀웍(team work)’이라는 것이 있습니다. 팀을 잘
만들어야 여기서 하는 일이 성공하게 됩니다.
초기 팀에서 상대의 말을 끊고 자기주장을 하는 사람을
빨리 걷어내지 않고 그냥 놔두면 아무리 해도 성과가
나오지 않고 결국 팀이 와해되는 상황까지 생깁니다.
비슷한 사람끼리 모여야 1차적인 팀웍이 이루어지고
거기서 성과가 나왔을 때, 2차적으로 똑똑한 사람이 낄
수 있습니다. 2차적으로 모인 팀에서 성과가 나왔다면
아무리 똑똑한 사람이 와도 큰소리를 칠 수 없게 돼`,`7) 상대의 말을 자주 끊는 사람 대처법
‘옹니’는 뽑아내야 합니다. 팀을 이루었을 때 조화를
이루지 못하는 사람은 뽑아내야 합니다. 단지 무리없이
자리에서 빼내는 방법을 찾아내야 하는 것이 관건입니다.
운용시대의 초기에는 성장기까지 있었던 모순들을
정리하는 시기로 이런 문제들이 많이 일어납니다. 그래서
팀이 모임과 해체를 반복하면서 결국 모일 사람들끼리
모이게 됩니다.
‘팀웍(team work)’이라는 것이 있습니다. 팀을 잘
만들어야 여기서 하는 일이 성공하게 됩니다.
초기 팀에서 상대의 말을 끊고 자기주장을 하는 사람을
빨리 걷어내지 않고 그냥 놔두면 아무리 해도 성과가
나오지 않고 결국 팀이 와해되는 상황까지 생깁니다.
비슷한 사람끼리 모여야 1차적인 팀웍이 이루어지고
거기서 성과가 나왔을 때, 2차적으로 똑똑한 사람이 낄
수 있습니다. 2차적으로 모인 팀에서 성과가 나왔다면
아무리 똑똑한 사람이 와도 큰소리를 칠 수 없게 돼

있습니다. 따라서 처음에 성과를 내려면 소통되는
사람들끼리 팀을 이루어야 합니다.
만약 처음 팀을 이루었을 때 누군가 상대의 말을 끊고
흐름을 깨면 “한 번”하고 경고를 줘야 합니다. 그 사람을
제외한 다른 팀원끼리 대화를 하다가 또다시 상대의 말을
끊고 끼어들면 “두 번” 이렇게 경고를 줍니다. 그리고 “세
번 경고를 받으면 여기서 나가야 한다”고 말을 하십시오.
그러면 상대의 말을 끊는 사람이 탈퇴를 하더라도 뒷말을
하지 못합니다.
이때 중요한 것은 탈퇴한 사람에게 “당신은 너무
똑똑해서 우리와 맞지 않습니다, 세번 경고를 했음에도
그렇게 하는 것은 우리와 맞지 않으니까 일단 빠져
주십시오” 라고 전해야 합니다. 당신이 모자라서
빠져달라는 것이 아니라 너무 똑똑해서 빠져달라고
말해야 합니다.
‘똑똑한 바보’가 있습니다. 진정 똑똑한 사람은 많이
알아도 그 분위기를 맞출 줄 아는 사람입니다. 그런

사람이 ‘실력자’입니다. 똑똑할수록 실력자가 되어야지,
똑똑하지만 실력이 없는 사람은 ‘옹니’가 되는 것입니다.
‘옹니’인 사람은 빨리 팀에서 거부해줘야 합니다.
그렇게 따돌림을 당하면서 자신을 깨우치게 만들어줘야
합니다.
단호할 때는 단호해야 합니다. 그것이 ‘옹니’인 사람을
치료하는 방법입니다. ‘옹니’는 절대적으로 뽑아내야
합니다.
8) 노조 가입해야 하나?
신입사원의 경우 선배들의 압력이나 회사 분위기상
노조 가입을 해야 하는 경우가 있습니다. 노조 가입 여부
자체는 정답이 없습니다. 다만, 노조의 원리·역사·장단점
을 먼저 공부해야 합니다.
노조가 사회에 어떤 역할을 해왔는지, 노조에 들어갔을
때, 혹은 들어가지 않았을 때 어떤 결과가 있는지 공부를`,`사람이 ‘실력자’입니다. 똑똑할수록 실력자가 되어야지,
똑똑하지만 실력이 없는 사람은 ‘옹니’가 되는 것입니다.
‘옹니’인 사람은 빨리 팀에서 거부해줘야 합니다.
그렇게 따돌림을 당하면서 자신을 깨우치게 만들어줘야
합니다.
단호할 때는 단호해야 합니다. 그것이 ‘옹니’인 사람을
치료하는 방법입니다. ‘옹니’는 절대적으로 뽑아내야
합니다.
8) 노조 가입해야 하나?
신입사원의 경우 선배들의 압력이나 회사 분위기상
노조 가입을 해야 하는 경우가 있습니다. 노조 가입 여부
자체는 정답이 없습니다. 다만, 노조의 원리·역사·장단점
을 먼저 공부해야 합니다.
노조가 사회에 어떤 역할을 해왔는지, 노조에 들어갔을
때, 혹은 들어가지 않았을 때 어떤 결과가 있는지 공부를

해봐야 합니다. 공부 없이 단순히 분위기나 압박에 의해
선택하는 것은 바람직하지 않습니다.
만약 가입을 했다면 그 후에도 상황에 따라 스스로
판단해야 합니다. 이해되는 것은 따르고, 이해되지 않는
것은 따르지 않아도 됩니다. “대세라서 한다”는 식의
태도는 지식인의 태도가 아닙니다. 내 인생은 내가
책임져야 하므로, 이해가 되었을 때 행동해야 합니다.
그리고 큰 결정을 할 때는 최소 100일 정도는 공부와
고민이 필요하므로 노조 관련 자료를 찾아보고 스스로
연구한 후 결정해야 합니다. 노력을 거친 후 내린 결정은
잘못되지 않습니다.

참조 법문
정법강의 627강 직장생활-2 자신을 낮추되 환경에
정법강의 626강 직장생활-1 이직과 소통 (1/4)
정법강의 627강 직장생활-2 자신을 낮추되 환경에
정법강의 812강 직장내 의견충돌
정법강의 10081강 지속적으로 자존감을 떨어뜨리는 상사
정법강의 2120강 잘난체 하는 직원, 화내는 상사, 아랫사람
대하기
정법강의 2254강 신입사원의 노조 가입
정법강의 3191강 상사와의 불화로 퇴사한 직원, 직원이 마음에
들지 않는 고용주
정법강의 4184강 현명한 부탁과 거절법
정법강의 5208강 의견충돌 대처 방법
정법강의 5238강 난득호도 - 갑을관계(1_2)
정법강의 5583강 대화를 자주 끊는 사람
정법강의 8835강 독고다이 회사 생활

정법강의 5829강 의논의 정도
정법강의 4184강 현명한 부탁과 거절법`,`Ⅶ. 이직과 퇴사
신입사원 때 회사가 마음에 들지 않아 다른 직장으로
이직하거나, 싫어서 퇴사하려는 마음을 먹어 보신 적
있으십니까?
지금부터 이직과 퇴사에 대해 살펴보겠습니다.
1. 이직을 원하는 이유
이직을 원하는 것에는 다양한 이유들이 있습니다.
1) 현재 다니고 있는 직장에서 오래 정체되어 좋은
일이 생기지 않을 때 이직을 고려합니다.
2) 일이 힘들고 재미가 없을 때는 내 소질과 역량이
더 적합한 일을 찾으라는 신호일 수 있습니다. 대
한민국 사람은 누구나 저마다의 고유한 소질을

가지고 태어났습니다. 따라서 자신의 소질에 맞
는 일을 찾아 즐겁게 몰입할 수 있는 환경으로 이
동하는 것이 성장을 위한 자연스런 과정입니다.
3) 직장에 다니는데 몸이 아파 오거나 상황이 어렵
게 된다면 자연이 보내는 시그널임을 인지하고,
‘이 환경은 나와 맞지 않는구나’ 하고 판단하여
이직을 고려해야 합니다. 어려워졌다는 것은 앞
에서 30% 이상 잘못을 하고 있다는 것입니다. 30%
가 넘어서면 빠른 시간내에 나빠지기 때문에 표
적을 주어 멈추게 하는 것입니다.
4) 자신의 발전을 위해 질량이 좋은 환경과 공부할
수 있는 조건이 더 좋은 직장으로 움직이려 합니
다. 경험을 바탕으로 보다 전문성을 살릴 수 있는
환경으로 이동해야 합니다. 좋은 직장에 가면 질
량이 높은 환경이 펼쳐지고 공부할 수 있는 조건
또한 좋아집니다.

2. 바른 이직 방법
1) 이직핛 때 마음가짐
바르게 이직을 하기 위해서는 먼저, 자신이 왜
직장을 나가는지에 대해 스스로에 물어보아야 합니다.
자신이 생각하는 방향과 다른 현실에 대한 것, 자신의
판단이 잘못된 것임을 인정하고 나가야 합니다.
이직을 할 때는 직장을 탓하거나 욕해서는 안 됩니다.
그리고 다니고 있는 직장을 통해 자신이 받은 환경에
대한 감사함을 가지고 이직해야 합니다. 혹여, 자신이
잘못 선택하여 입사를 하였더라도 그 곳에 간 이유는
분명이 있습니다. 그러니 그 곳에서 자신이 해야 할
일과 배울 것이 있음을 인지해야 합니다.
이직은 도피가 아닌 성장을 위한 이동이어야 하며,
새로운 환경과 인연 속에서 공부하겠다는 명분을
가지고 해야 합니다. 그리고 어디를 가든 겸손해야
합니다. 의리에 얽매이지 말고, 자신이 가고자 하는`,`2. 바른 이직 방법
1) 이직핛 때 마음가짐
바르게 이직을 하기 위해서는 먼저, 자신이 왜
직장을 나가는지에 대해 스스로에 물어보아야 합니다.
자신이 생각하는 방향과 다른 현실에 대한 것, 자신의
판단이 잘못된 것임을 인정하고 나가야 합니다.
이직을 할 때는 직장을 탓하거나 욕해서는 안 됩니다.
그리고 다니고 있는 직장을 통해 자신이 받은 환경에
대한 감사함을 가지고 이직해야 합니다. 혹여, 자신이
잘못 선택하여 입사를 하였더라도 그 곳에 간 이유는
분명이 있습니다. 그러니 그 곳에서 자신이 해야 할
일과 배울 것이 있음을 인지해야 합니다.
이직은 도피가 아닌 성장을 위한 이동이어야 하며,
새로운 환경과 인연 속에서 공부하겠다는 명분을
가지고 해야 합니다. 그리고 어디를 가든 겸손해야
합니다. 의리에 얽매이지 말고, 자신이 가고자 하는

방향과 더 높은 이념을 향해 나아가야 합니다. 자기
자신을 위한 이직이 아니라, 직장을 위한 이직이어야
바른 이직이 될 것입니다.
2) 바른 이직의 조건
① 바른 명분을 가져라
새로운 환경을 배우고 새로운 사람과 교류하고
성장을 위한 명분을 세우고 공부하는 자세로 이직을
해야 합니다. 돈을 많이 벌겠다는 생각으로 이직을
하면 반드시 실패하여 원래 자리로 돌아가게 될
것입니다.
② 이념을 가져라
‘어떤 가치를 실현할 것인가’, ‘사회에 어떤 기여를
할 것인가’에 대한 이념이 있어야 합니다. 그 이념이
없다면 직장뿐만 아니라 자신도 성장하지 못하게 될
것입니다.`,`방향과 더 높은 이념을 향해 나아가야 합니다. 자기
자신을 위한 이직이 아니라, 직장을 위한 이직이어야
바른 이직이 될 것입니다.
2) 바른 이직의 조건
① 바른 명분을 가져라
새로운 환경을 배우고 새로운 사람과 교류하고
성장을 위한 명분을 세우고 공부하는 자세로 이직을
해야 합니다. 돈을 많이 벌겠다는 생각으로 이직을
하면 반드시 실패하여 원래 자리로 돌아가게 될
것입니다.
② 이념을 가져라
‘어떤 가치를 실현할 것인가’, ‘사회에 어떤 기여를
할 것인가’에 대한 이념이 있어야 합니다. 그 이념이
없다면 직장뿐만 아니라 자신도 성장하지 못하게 될
것입니다.

③ 불평불만과 남 탓을 하지 마라
사회에 모순이 많다는 것은 우리가 해야 할 일들이
많다는 것입니다. 그러니 불평불만과 남 탓을 하기
보다는 우리에게 어려움이 왜 왔는가를 찾아
노력해야 합니다. 우리에게 준 환경은 스스로에게
도움이 되기에 온 환경입니다. 그런데 불평불만을
하게 되면 자신이 성장할 수 있는 길을 막아버리고
눈을 가려서 헤매게 만듭니다.
④ 배움의 자세로 임하라
과거에 얽매이지 말고 배우겠다는 자세로 임하며
경제적 조건보다는 성장의 기회를 삼아야 할
것입니다. 스스로 “나는 공부 중”이라는 생각으로
임하면 분별력이 달라질 것입니다. 배우는 자세로
다가가면 상대의 행동이 달라집니다. 생각을 어떻게
하고 접근하느냐에 따라 적응력 또한 달라집니다.
⑤ 주어진 환경을 잘 흡수하라
30대에는 어떤 불평불만도 하지 말고 자신에게 온

환경을 모두 흡수해야 합니다. 30대는 공부하는
시기입니다. 자신에게 온 환경도 알아가며 살피고
기운도 다스리고 받아들이며 자신을 갖추는 시간을
가져야 합니다. 만일, 돈을 벌려고 하면
실력부족으로 필요 없는 사람이 됩니다. 그러니 20,
30대는 절대 돈을 벌려 하지 말고 자신이 할 수 있는
일이 무엇인가를 찾아야 합니다.
3. 나에게 맞는 일과 조직 찾는 법
1) 적성에 맞지 않는 일을 핛 때
① 변화하기 어려운 이유
적성에 맞지 않는 일을 할 때 변화하고 싶어도
변화하지 못하는 이유는 평소에 주어진 환경에서
관찰하고 흡수하며 받아들이지 않았기 때문입니다.
그래서 변화를 하려고 해도 다른 대안이 없기 때문에`,`환경을 모두 흡수해야 합니다. 30대는 공부하는
시기입니다. 자신에게 온 환경도 알아가며 살피고
기운도 다스리고 받아들이며 자신을 갖추는 시간을
가져야 합니다. 만일, 돈을 벌려고 하면
실력부족으로 필요 없는 사람이 됩니다. 그러니 20,
30대는 절대 돈을 벌려 하지 말고 자신이 할 수 있는
일이 무엇인가를 찾아야 합니다.
3. 나에게 맞는 일과 조직 찾는 법
1) 적성에 맞지 않는 일을 핛 때
① 변화하기 어려운 이유
적성에 맞지 않는 일을 할 때 변화하고 싶어도
변화하지 못하는 이유는 평소에 주어진 환경에서
관찰하고 흡수하며 받아들이지 않았기 때문입니다.
그래서 변화를 하려고 해도 다른 대안이 없기 때문에

바꾸기 어려운 것입니다.
② 변화하기 위한 방법
지금부터라도 공부하는 자세를 가져야 합니다.
공부를 하게 되면 평소에는 보이지 않던 것들이
보이게 됩니다. 배우는 자세로 임할 때는 보이지
않던 것들이 보이면서 재미가 있어집니다. 그렇게
재미있게 하다 보면 새로운 환경을 할 수 있는
환경이 주어집니다. 좀 더 질량 있는 공부를 할 수
있도록 자리를 바꿔주게 되는 것입니다. 그래서
지그재그로 자신에게 맞는 자리를 찾아 올라가게
됩니다.
2) 나에게 맞는 일을 찾아 재밌게 회사를 다니는 법
① 소질을 계발하기
우리에게는 다양한 소질이 주어집니다. 그리고 그
소질은 큰 것에서부터 작은 것까지 다양하게 가지고`,`바꾸기 어려운 것입니다.
② 변화하기 위한 방법
지금부터라도 공부하는 자세를 가져야 합니다.
공부를 하게 되면 평소에는 보이지 않던 것들이
보이게 됩니다. 배우는 자세로 임할 때는 보이지
않던 것들이 보이면서 재미가 있어집니다. 그렇게
재미있게 하다 보면 새로운 환경을 할 수 있는
환경이 주어집니다. 좀 더 질량 있는 공부를 할 수
있도록 자리를 바꿔주게 되는 것입니다. 그래서
지그재그로 자신에게 맞는 자리를 찾아 올라가게
됩니다.
2) 나에게 맞는 일을 찾아 재밌게 회사를 다니는 법
① 소질을 계발하기
우리에게는 다양한 소질이 주어집니다. 그리고 그
소질은 큰 것에서부터 작은 것까지 다양하게 가지고

있습니다. 그래서 그 소질을 잘 찾아서 갖추어 가야
합니다. 소질을 찾는 방법은 자신이 재미있는 것을
접근해 보는 것입니다. 재미가 없다면 그것은
자신의 소질이 아닌 것입니다. 먼저 좋은 것부터
접근하면서 또 다른 좋은 것도 찾아서 접근해 보는
것입니다. 그렇게 하면서 재미있는 것은 계속
해나가고 재미가 없다면 그만두면서 그것을
익혀나가면 됩니다. 그렇게 갖춘 다양한 소질은
자신이 가장 크게 가지고 있는 소질을 쓸 때에 함께
작용하여 다른 소질을 가진 사람들과 융합할 수 있게
됩니다.
② 새로운 환경 접하기
직장은 사회학교라는 바른 인식을 가지고
공부하고 성장하기 위해 노력해야 합니다. 우리는
일하면서 배워야 할 것들이 있고, 인연을 만나게
됩니다. 그래서 이런 것들을 잘 소화를 하면서
배우게 되면 더 질량 있는 공부를 할 수 있도록
진급도 빠르게 할 수 있습니다. 그러면 자신에게

주어지는 환경이 달라지고, 여기서 만나는 사람이
다르고 새로운 공부를 할 수 있는 환경이 됩니다.
그래서 바른 길을 알고 가면 소화가 빠르고, 새로운
공부 환경이 주어져 재미있게 일을 할 수 있게
됩니다.
4. 퇴사
퇴사의 시기는 현재의 직장과 나의 상황이 맞지 않을
때 발생됩니다. 더 이상 직장에서 버틸 수 없는 한계를
느꼈을 때 일어납니다. 그럴 때에는 잠시 멈추고, 자기
자신을 새롭게 세우기 위한 시간을 가져야 합니다. 그
시간이 ‘퇴사’입니다. 앞으로의 길을 준비하는 ‘숨
고르기’와 같습니다. 즉, 퇴사는 재정비하는 과정이라
할 수 있습니다.
들어간 직장이 자신과 맞지 않는다면 과감히 나와야
합니다. 억지로 끌려가듯 다니는 직장 또한 받아들이지`,`주어지는 환경이 달라지고, 여기서 만나는 사람이
다르고 새로운 공부를 할 수 있는 환경이 됩니다.
그래서 바른 길을 알고 가면 소화가 빠르고, 새로운
공부 환경이 주어져 재미있게 일을 할 수 있게
됩니다.
4. 퇴사
퇴사의 시기는 현재의 직장과 나의 상황이 맞지 않을
때 발생됩니다. 더 이상 직장에서 버틸 수 없는 한계를
느꼈을 때 일어납니다. 그럴 때에는 잠시 멈추고, 자기
자신을 새롭게 세우기 위한 시간을 가져야 합니다. 그
시간이 ‘퇴사’입니다. 앞으로의 길을 준비하는 ‘숨
고르기’와 같습니다. 즉, 퇴사는 재정비하는 과정이라
할 수 있습니다.
들어간 직장이 자신과 맞지 않는다면 과감히 나와야
합니다. 억지로 끌려가듯 다니는 직장 또한 받아들이지

않아야 합니다. 직장에서 바라는 조건이 있듯이 자신의
직장에 바라는 조건이 있어야 합니다. 그리고 좋지 않은
일로 그만 두겠다고 표현을 했을 경우에는 우유부단하
지 말고 당장 그 직장에서 떠나야 합니다. 다시 말해,
퇴사는 끝을 의미하는 실패가 아니라, 삶의 신호에 대한
지혜입니다.
그러니 퇴사 이후에는 어떤 환경도 감사히 여기며 그
기간동안 ‘나를 찾는 시간’이 되어야 합니다. 주어진
비용과 조건 안에서 움직이며, 자신을 단단히 세워 나갈
때 더 나은 삶을 향한 선택이 됩니다.
 퇴사를 고민하는 신입사원들에게 해주고 싶은 말
은… -
첫째, 자신을 상품화하라. – 실력을 갖추어
자신을 실력 있는 상품으로 만들어라.
둘째, 원망 대신 공부하라. - 30대까지는 어떤
일이든 공부라 여겨야 한다.

셋째, 직장을 사랑하라. – 직장은 자신을
성장시키고 사회 속에 설 자리를 만들어 주는
곳임을 알아야 한다.
넷째, 불평불만을 줄여라 – 현재의 환경을
흡수하고 성장의 기회로 삼아야 한다.
다섯째, 배우는 자세로 임하라 – 감사하는 태도와
주어진 환경에서 배우려는 자세가 필요하다.
여섯째, 공부에 아낌없이 투자하라 – 내가 쓴
노력과 비용은 실력이 되어 다시 자신에게
돌아온다.
일곱번째, 인연을 바꾸어라 – 영혼의 질량이
높아지면 새로운 인연이 온다.

5. 이직을 고려 중 이라면…
이직을 원하는 이유, 바른 이직 방법, 나에게 맞는 일과
조직 찾는 법, 이 3가지는 교집합이 있습니다. ‘왜 옮기고,
어떻게 옮기고, 어디로 옮길 것인가?’ 라는 것이 한
나무의 가지와 같습니다.
이직하는 이유는 지금의 자리를 떠나야 하는 이유로,
건강, 성장의 한계, 가치 불일치, 더 큰 기회 추구 등
과거와 현재의 문제에서 출발합니다.
또한, 바른 이직 방법은 도피가 아니라 새로운 도전으로
만드는 태도가 중요합니다.
나에게 맞는 일과 조직을 찾는데 있어서는 내 가치와
성향 장점을 먼저 정의해봐야 합니다. 그리고 조직의
문화와 비전(이념), 그리고 성장 방향이 나와 맞는지
확인해야 합니다.`,`5. 이직을 고려 중 이라면…
이직을 원하는 이유, 바른 이직 방법, 나에게 맞는 일과
조직 찾는 법, 이 3가지는 교집합이 있습니다. ‘왜 옮기고,
어떻게 옮기고, 어디로 옮길 것인가?’ 라는 것이 한
나무의 가지와 같습니다.
이직하는 이유는 지금의 자리를 떠나야 하는 이유로,
건강, 성장의 한계, 가치 불일치, 더 큰 기회 추구 등
과거와 현재의 문제에서 출발합니다.
또한, 바른 이직 방법은 도피가 아니라 새로운 도전으로
만드는 태도가 중요합니다.
나에게 맞는 일과 조직을 찾는데 있어서는 내 가치와
성향 장점을 먼저 정의해봐야 합니다. 그리고 조직의
문화와 비전(이념), 그리고 성장 방향이 나와 맞는지
확인해야 합니다.

참조 법문
정법강의 134강 중소기업 인재체용
정법강의 629강 직장생활-4 이직이 기회인지
정법강의 2606강 40대 회사원 이직 고민-1
정법강의 5435강 이직해야 하는지
정법강의 3191강 상사와의 불화로 퇴사한 직원, 직원이 마음에
들지 않는 고용주
정법강의 4599강 회사를 그만두고 싶다는 생각이 든다
정법강의 5435강 이직해야 하는지
정법강의 5391강 회사를 떠나야 하는지
정법강의 5955강 억울한 퇴사
정법강의 6168강 공공기간 근무자의 지방 이직 고민
정법강의 6526강 망할 것만 같은 직장에서 이직
정법강의 6406강 퇴사 후 새로운 시작을 위한 마음가짐
정법강의 6468강 희망 퇴사 과정 중, 불편해진 관계
정법강의 8212강 직장 이직
정법강의 12073강 이직에 대한 끌림이 올 때
정법강의 12939강 현재 질량보다 조금 낮은 곳으로의 이직
정법강의 13283강 이직에 대한 분별
정법강의 13717강 이직해야 하는 분별이 서지 않는다
럽앤리 215강 사회 초년생의 이직을 판단하는 기준`,`Ⅷ. 성공적인 직장생활을 위하여
1. 승짂을 잘하려면?
흔히 승진은 직급, 지위의 상승, 그에 따른 연봉 상승,
권한 및 책임의 증가를 의미합니다.
그러나 승진은 단순히 직위가 높아지고 보상이 커지는
일이 아닙니다. 승진은 더 큰 공부의 장으로 나아가는
것입니다. 평사원일 때는 맡은 일을 배우고 익히는 공부
를 하지만, 과장이 되면 사람을 관리하는 공부가
시작됩니다. 부장, 임원으로 갈수록 더 많은 사람과
조직을 운영해야 하기 때문에는 사람 공부의 기회가
이어집니다. 즉, 임원은 단순한 지위가 아니라 임원학을
배우는 사람이며, 승진은 사회와 사람을 공부하는 과정의
확장입니다.

공무원 중에는 승진을 꺼리는 이들이 있습니다. 이는
자리에 오르는 것이 공적 책임과 사회적 의무가 더해지기
때문입니다. 그것은 곧 공인의 본분을 다하기 위한 공부
의 기회입니다. 공무원의 승진은 나의 욕심을 채우기
위한 것이 아니라, 국민과 사회를 위해 더 크게 기여할
수 있는 자리에 서는 것입니다. 따라서 승진은 개인적
성취가 아니라 사회적 책임을 넓혀가는 과정으로
해석됩니다.
회사를 다니면서 “회사가 나를 반드시 승진시켜야
한다” 라는 생각을 가져서는 안 됩니다. 회사는 공부하고
수련할 수 있도록 환경을 제공하는 곳이며, 공부를 할 수
있도록 공부 비용을 제공합니다.
중요한 것은 자신이 현장에서 무엇을 노력했는가
입니다. 자신이 회사를 아끼고 사랑하며 진심으로 노력을
기울였는가, 아니면 부족했는가를 돌아보아야 합니다.
부족했을 때 회사에서 불이익을 받는 것은 당연합니다.
사회 어디에 있든, 그 자리에서 자신이 어떤 노력을
했는지가 중요합니다.

만약 바른 노력을 했다면, 사회는 결코 자신을 어렵게
하지 않습니다. 승진이 안 되더라도 감사히 일할 수 있는
환경을 받았다면, 다시금 열심히 노력해야 합니다.
승진이 중요한 것이 아니라, 자신의 실력이 중요한
것입니다. 실력 없이 승진만 하면 더 큰 책임이 주어지고
스트레스도 커지며, 결국 더 안 좋은 결과를 맞게 됩니다.
사회는 정확히 노력한 만큼의 환경을 줍니다. 불평이나
원망은 소용없습니다. 승진하지 못한 자리에도 이유가
있으며, 그 이유를 찾지 못했다면 지금부터 찾아야 합니
다. 운용 시대에는 반드시 노력한 만큼의 결실을 얻게
됩니다.
만약 실력 없이 높은 자리에 올랐다면, 사회는 다시
제자리를 찾게 하거나 더 낮추어 버리기도 합니다.
이것이 소탐대실하는 격입니다. 그러나 진심으로 노력을
쌓았다면, 일시적으로 배척을 당해도 결국 더 좋은
자리에 오르게 됩니다. 그러므로 자연을 믿어야 합니다.
노력에는 원리가 있습니다.

작은 문제를 풀 때에는 100일의 노력이 필요하고, 큰
질서를 바로잡고 기운을 바꾸려면 3년의 노력이
필요합니다. 자연은 결코 헛되이 움직이지 않습니다.
노력한 만큼 반드시 길이 열립니다.
바르게 노력하는 자는 자연이 스스로 돕고, 게으르고
불평하는 자는 역경을 통해 다시 성장하도록 이끕니다.
따라서 승진 여부에 얽매이지 마십시오. 사회가 나를
뒷받침하며 공부할 수 있게 해주는 것 자체가 고마운
일입니다. 이번에 승진이 안 되었더라도 불평하는 자는
일이 더 안 풀리지만, 감사하며 나를 더 갖추는 자는
시간이 지나 두 단계 더 높은 자리로 오르기도 합니다.
우리는 주어진 환경을 탓할 권리가 없습니다. 자연은 단
0.1mm도 틀리지 않게 운행되기 때문입니다. 노력한
만큼 반드시 이루어집니다. 불평하지 말고 내 모자람을
조금씩 갖추어야 합니다.

2. 자리가 사람을 만든다?
흔히 “자리가 사람을 만든다”라는 말을 합니다. 그러나
이 말은 준비된 사람이 자리에 올랐을 때를 말합니다.
준비되지 않은 채 자리에 올랐을 때, 그 자리는 오히려
나를 무너뜨리는 시험대가 됩니다.
자신이 30% 갖추었다면 자리에 오를 욕심이 아예
생기지 않습니다.
50% 갖추었다면 욕심이 발동합니다. 그러나 이때
자리에 오르면 준비가 부족하기 때문에 자리에 맞는 힘을
감당하지 못하고, 결국은 다시 밀려 내려오게 됩니다. 곧
자리에 맞지 않는다는 사실이 드러나고, 다시 제자리로
돌아오게 됩니다.
60%를 갖추면 “조금만 더 하면 될 것 같다”는 생각이
들고, 스스로도 자리에 오르고 싶은 욕구가 강하게
생깁니다. 그래서 더욱 자리에 대한 집착이 커집니다.
하지만 이때는 아직 채워지지 않은 부분이 남아 있어`,`2. 자리가 사람을 만든다?
흔히 “자리가 사람을 만든다”라는 말을 합니다. 그러나
이 말은 준비된 사람이 자리에 올랐을 때를 말합니다.
준비되지 않은 채 자리에 올랐을 때, 그 자리는 오히려
나를 무너뜨리는 시험대가 됩니다.
자신이 30% 갖추었다면 자리에 오를 욕심이 아예
생기지 않습니다.
50% 갖추었다면 욕심이 발동합니다. 그러나 이때
자리에 오르면 준비가 부족하기 때문에 자리에 맞는 힘을
감당하지 못하고, 결국은 다시 밀려 내려오게 됩니다. 곧
자리에 맞지 않는다는 사실이 드러나고, 다시 제자리로
돌아오게 됩니다.
60%를 갖추면 “조금만 더 하면 될 것 같다”는 생각이
들고, 스스로도 자리에 오르고 싶은 욕구가 강하게
생깁니다. 그래서 더욱 자리에 대한 집착이 커집니다.
하지만 이때는 아직 채워지지 않은 부분이 남아 있어

자리에 오르면 곧 버거움을 느끼고 무너지게 됩니다. 즉,
스스로는 준비가 다 된 듯 착각하지만, 사실은 가장
불안정한 구간이라 할 수 있습니다.
그렇다면 70%를 갖춘 사람은 어떨까요? 이때부터는
상황이 달라집니다. 억지로 자리에 가고 싶다고 해서
가는 것이 아니라, 대자연이 자신을 그 자리에 앉히게
됩니다. 주변 사람들이 자연스럽게 길을 열어주고,
에너지가 모이면, 자리에 오를 수 있는 토대가
마련됩니다. 이때 자리에 오른 사람은 억지로 애쓰지
않아도 빛이 나며, 자리가 오히려 사람을 더욱
완성시킵니다. 이 순간에 비로소 “자리가 사람을
만든다”라는 말의 참뜻을 이해할 수 있습니다.
이 원리 뒤에는 대자연의 법칙이 있습니다. 대자연은
모든 것을 3:7의 법칙으로 운행합니다. 70%를 갖추면
대자연이 나를 움직여 자리에 올려주고, 부족한 30%는
자리 속에서 채워가게 됩니다.

3. 스펙! 어디까지 쌓아야 하나?
현대 사회에서 직장인은 학력, 자격증, 외국어 능력과
같은 이른바 ‘스펙’을 준비하며 경쟁에 나섭니다. 물론
기본적인 역량을 다지는 차원에서 스펙은 필요합니다.
하지만 스펙은 직장에 들어가기 위한 입장권에
불과합니다. 입사 과정이나 초반에는 도움이 되지만,
시간이 지날수록 사람의 됨됨이, 내면의 실력, 그리고
분별력이 더 크게 작용합니다. 스펙만으로는 직장에서
오래도록 인정받을 수 없습니다.
즉, 스펙은 사회에서 실력을 발휘하기 위한 최소한의
준비라는 점이 핵심입니다. 한 가지 분야에서 충분한
기초를 갖추면, 다른 분야를 배우는 과정이 훨씬
수월해집니다. 예를 들어, 태권도의 기초가 잘 다져진
사람은 합기도, 유도, 권투 등 다른 무술을 배우는 것이
상대적으로 쉽습니다.
스펙은 경험, 실습이 결합될 때 의미가 있습니다.`,`3. 스펙! 어디까지 쌓아야 하나?
현대 사회에서 직장인은 학력, 자격증, 외국어 능력과
같은 이른바 ‘스펙’을 준비하며 경쟁에 나섭니다. 물론
기본적인 역량을 다지는 차원에서 스펙은 필요합니다.
하지만 스펙은 직장에 들어가기 위한 입장권에
불과합니다. 입사 과정이나 초반에는 도움이 되지만,
시간이 지날수록 사람의 됨됨이, 내면의 실력, 그리고
분별력이 더 크게 작용합니다. 스펙만으로는 직장에서
오래도록 인정받을 수 없습니다.
즉, 스펙은 사회에서 실력을 발휘하기 위한 최소한의
준비라는 점이 핵심입니다. 한 가지 분야에서 충분한
기초를 갖추면, 다른 분야를 배우는 과정이 훨씬
수월해집니다. 예를 들어, 태권도의 기초가 잘 다져진
사람은 합기도, 유도, 권투 등 다른 무술을 배우는 것이
상대적으로 쉽습니다.
스펙은 경험, 실습이 결합될 때 의미가 있습니다.

단순히 학벌이나 자격증만으로는 사회에서 필요한
능력을 증명할 수 없습니다. 대학 과정에서 스펙을 쌓을
때 자신이 어떤 분야에서, 어떤 역할을 수행할지를
계획해야 합니다. 단순히 높은 학점, 명문 대학 출신,
자격증 숫자에 집착하면서 필요 이상 스펙을 쌓을 필요는
없습니다. 중요한 것은 사회에서 실력을 발휘할 수 있는
방향으로 스펙을 활용해야 합니다.
앞으로는 학교나 학벌보다 실제 실력과 경험이 평가
기준이 됩니다. 즉, 사회에서 필요한 최소한의 스펙을
갖추고, 나머지는 실무 경험을 통해 실력을 쌓아야
합니다. 큰 기업이나 관공서 같은 조직 생활을 목표로
삼으면 스펙이 필요합니다. 큰 회사에 가면 절차를
밟으며 성장할 수 있다는 장점이 있습니다. 반면 스펙을
요구하지 않는 곳에서 인연을 만난다면 다른 방식으로
성장할 기회를 얻는다는 이점도 있습니다. 그런데 앞으로
조직 사회에서는 개인이 조직의 일원으로 빛나는 시대가
아니라, 개인의 실력에 따라 빛나는 시대로 변합니다.
그렇다면 우리는 어떤 방식으로 살아가야 할까요?

만일 영어를 잘 한다면 영어권 진입을 해서 실력을
펼칠 수 있습니다. 가령 유튜브로 콘텐츠를 만들어 올릴
수 있습니다. 유튜브에 콘텐츠를 올린다면 경비를 얻을
수 있고, 국제 사회에 영어를 하는 사람들에게 실력을
펼친다면 국제적으로 인연이 옵니다. 사회가 필요로 하는
작품을 만드십시오. 자신이 가진 재주를 바르게 쓰면
세상은 ‘나’를 필요로 하게 되어 있습니다.
진정한 실력은 사람을 이해시키는 능력입니다.
앞으로는 국제 사회는 상대를 이해시킬 수 있는 사람을
실력자로 인정하는 시대가 옵니다. 어떤 나라도 이해를
시키면 그 나라가 우리를 따르게 됩니다. 그러므로
실력을 쌓아야 합니다.

4. 사회를 위핚 삶
1) 성공의 기준을 다시 묻다
우리는 일반적으로 성공을 돈과 명예로 판단합니다.
그러나 경제력, 지식, 재주, 외모 등은 성공을 위한 준비
단계일 뿐이며, 이를 ‘1안’이라 합니다. 진정한 성공은
‘2안’에서 시작됩니다. 자신이 갖춘 것을 사회를 위해
어떻게 활용하는가, 그것이 성공의 본질입니다. “경제는
쓰기 위해 갖추는 것이며, 지식은 사회를 이롭게 하기
위해 배우는 것입니다.” 성공은 단순한 축적이 아니라,
운용의 철학입니다. 자신이 가진 것을 사회에 환원하고,
사람을 널리 이롭게 할 때 비로소 성공은 빛을 발합니다.
2) 직장은 배움의 현장
직장은 단순한 생계의 공간이 아닙니다. 그것은 나의
부족함을 배우고 실력을 갖추는 배움터입니다. 겸손한
자세로 직장을 대하고, 주어진 환경을 통해 성장할 때, 더`,`4. 사회를 위핚 삶
1) 성공의 기준을 다시 묻다
우리는 일반적으로 성공을 돈과 명예로 판단합니다.
그러나 경제력, 지식, 재주, 외모 등은 성공을 위한 준비
단계일 뿐이며, 이를 ‘1안’이라 합니다. 진정한 성공은
‘2안’에서 시작됩니다. 자신이 갖춘 것을 사회를 위해
어떻게 활용하는가, 그것이 성공의 본질입니다. “경제는
쓰기 위해 갖추는 것이며, 지식은 사회를 이롭게 하기
위해 배우는 것입니다.” 성공은 단순한 축적이 아니라,
운용의 철학입니다. 자신이 가진 것을 사회에 환원하고,
사람을 널리 이롭게 할 때 비로소 성공은 빛을 발합니다.
2) 직장은 배움의 현장
직장은 단순한 생계의 공간이 아닙니다. 그것은 나의
부족함을 배우고 실력을 갖추는 배움터입니다. 겸손한
자세로 직장을 대하고, 주어진 환경을 통해 성장할 때, 더`,`4. 사회를 위핚 삶
1) 성공의 기준을 다시 묻다
우리는 일반적으로 성공을 돈과 명예로 판단합니다.
그러나 경제력, 지식, 재주, 외모 등은 성공을 위한 준비
단계일 뿐이며, 이를 ‘1안’이라 합니다. 진정한 성공은
‘2안’에서 시작됩니다. 자신이 갖춘 것을 사회를 위해
어떻게 활용하는가, 그것이 성공의 본질입니다. “경제는
쓰기 위해 갖추는 것이며, 지식은 사회를 이롭게 하기
위해 배우는 것입니다.” 성공은 단순한 축적이 아니라,
운용의 철학입니다. 자신이 가진 것을 사회에 환원하고,
사람을 널리 이롭게 할 때 비로소 성공은 빛을 발합니다.
2) 직장은 배움의 현장
직장은 단순한 생계의 공간이 아닙니다. 그것은 나의
부족함을 배우고 실력을 갖추는 배움터입니다. 겸손한
자세로 직장을 대하고, 주어진 환경을 통해 성장할 때, 더

높은 자리에서 공부할 기회가 주어집니다. 이것이
‘학급이 올라가는 것’이며, 지도자로의 길입니다.
특히 40대는 인생의 면접 시기입니다. 그 동안 얼마나
바르게 공부했는지, 실력이 있는지, 삶의 태도가
어땠는지가 시험을 치는 시기입니다. 40대 시험에
합격하면 사회에 필요한 사람이 되어 50대에 실력을
펼치게 됩니다. 반면, 실력이 없다면 40대 시험에
불합격하여 명예퇴직 등으로 ‘새로 다시’ 인생공부를
해야 하는 어려움이 옵니다.
내가 잘 살고 싶다면, 내가 사회에 무엇을 하고 있는지를
먼저 생각해야 합니다.
3) 짂로의 본질은 사회적 책임, 이념을 세워라
대학 졸업 후 진로를 고민하시는 분들은 “내가 사회에
무엇을 할 수 있는가?” 질문했을 때, 진로는 자신의
재능을 사회에 어떻게 쓸 것인지에 대한 답입니다.
단순히 돈을 벌기 위한 선택이 아니라, 사회를 이롭게`,`높은 자리에서 공부할 기회가 주어집니다. 이것이
‘학급이 올라가는 것’이며, 지도자로의 길입니다.
특히 40대는 인생의 면접 시기입니다. 그 동안 얼마나
바르게 공부했는지, 실력이 있는지, 삶의 태도가
어땠는지가 시험을 치는 시기입니다. 40대 시험에
합격하면 사회에 필요한 사람이 되어 50대에 실력을
펼치게 됩니다. 반면, 실력이 없다면 40대 시험에
불합격하여 명예퇴직 등으로 ‘새로 다시’ 인생공부를
해야 하는 어려움이 옵니다.
내가 잘 살고 싶다면, 내가 사회에 무엇을 하고 있는지를
먼저 생각해야 합니다.
3) 짂로의 본질은 사회적 책임, 이념을 세워라
대학 졸업 후 진로를 고민하시는 분들은 “내가 사회에
무엇을 할 수 있는가?” 질문했을 때, 진로는 자신의
재능을 사회에 어떻게 쓸 것인지에 대한 답입니다.
단순히 돈을 벌기 위한 선택이 아니라, 사회를 이롭게

하기 위한 방향이어야 합니다. 대학을 가는 것은 자신의
이념을 찾기 위함입니다. 대학을 졸업하고 사회에
진출하여 30대까지는 자신의 이념을 정립하는 것이
핵심입니다.
4) 사회를 위핚 삶
사회를 위한 삶이란, 자신이 가진 것을 사회에
환원하는 삶입니다. 시대는 바뀌었고 이제는 자신을
위해서가 아니라, 사회를 위해 살아야 할 때입니다.
사회를 위한 삶은 자신의 삶을 넘어, 모두를 이롭게 하는
길입니다.
고생하며 각자의 소질과 능력을 계발하며 갖추었다면,
갖춘 것을 이롭게 쓰고 빛나게 사는 시대로 나아가야
합니다. 고생 끝에 낙이 오는 것이며, 그 낙은 즐거움
입니다.
지도자란 대통령이나 대기업 회장만을 의미하지
않습니다. 기술, 사무, 식당의 그릇 닦기까지 모든`,`하기 위한 방향이어야 합니다. 대학을 가는 것은 자신의
이념을 찾기 위함입니다. 대학을 졸업하고 사회에
진출하여 30대까지는 자신의 이념을 정립하는 것이
핵심입니다.
4) 사회를 위핚 삶
사회를 위한 삶이란, 자신이 가진 것을 사회에
환원하는 삶입니다. 시대는 바뀌었고 이제는 자신을
위해서가 아니라, 사회를 위해 살아야 할 때입니다.
사회를 위한 삶은 자신의 삶을 넘어, 모두를 이롭게 하는
길입니다.
고생하며 각자의 소질과 능력을 계발하며 갖추었다면,
갖춘 것을 이롭게 쓰고 빛나게 사는 시대로 나아가야
합니다. 고생 끝에 낙이 오는 것이며, 그 낙은 즐거움
입니다.
지도자란 대통령이나 대기업 회장만을 의미하지
않습니다. 기술, 사무, 식당의 그릇 닦기까지 모든

영역에는 지도자가 있습니다. 내가 그릇을 20년
닦았다면, 그릇을 닦는 철학을 강의할 수 있어야 합니다.
단순한 반복이 아니라, 그 안에서 깊이를 깨닫고 실력을
갖춘 사람은 도인이 됩니다. 무엇이든 바르게 공부하였다
면, 그 분야의 도인이 될 수 있습니다.
지도자는 실력을 갖춘 사람입니다. 상대를 이해시킬 수
있는 실력을 갖추어야 합니다. 사회는 그런 사람을 필요
로 하며, 하늘은 그런 사람에게 힘을 줍니다.

참조 법문
정법강의 45강 청년들의 실력(스펙)쌓기
정법강의 136 승진 인사
정법강의 1135강 멘토의 조건-1 공적인 마인드, 너의 이념
정법강의 1136강 멘토의 조건-2 사람을 대할 줄 아는 실력
정법강의 2336강 대학 졸업 후 진로 (2/3)
정법강의 6082강 남편의 승진과 부인의 적극적인 활동 (1-2)
정법강의 6596강 실력의 정의 9081강 스펙을 요구하는 사회 통념
정법강의 3332강 멀티플레이어, 어디까지 스펙을 쌓아야 하나
정법강의 3341, 3342, 3343강 승진을 꺼리는 공무원
정법강의 4624강. 계약직 회사원의 진급
정법강의 4787강 성공적인 직장생활 - 새로다시와 메시지
정법강의 5944강 시대변화에 맞는 성공(1_2)
정법강의 6082강 남편의 승진과 부인의 적극적인 활동(1-2)
정법강의 7297강 기업의 승진제도
정법강의 1492강 직장의 신-4 신지식인이 사회를 위해 살라 (4/8)

정법강의 11024강 세상이 원하는 스펙, 꼭 필요한가 (1-3)
정법강의 11025강 세상이 원하는 스펙, 꼭 필요한가 (2-3)
정법강의 11026강 세상이 원하는 스펙, 꼭 필요한가 (3-3)
정법강의 12121강 지본과 사회부모클럽`],totalRating:10,ratingCount:3,reviews:[{id:"r1",user:"kh*****",date:"2024.07.03",rating:5,tag:"집중돼요",content:"도움되는 내용이 많아요",type:"구매자"},{id:"r2",user:"ys*****",date:"2023.11.27",rating:5,tag:"추천해요",content:"간단하고 좋습니다!!!!",type:"구매자"}]},D=(e,t,n,r,l,i)=>({id:e,title:t,author:n,publisher:"인문학출판사",publishDate:"2023년 01월 01일",isbn:"9788900000000",pages:280,size:"135 * 205 mm",price:18e3,discountRate:10,discountPrice:16200,points:900,cover:"img/24question.png",badges:["무료배송","소득공제"],category:r,intro:l,authorInfo:`${n}는 해당 분야의 권위 있는 학자로, 오랜 연구와 저술 활동을 통해 깊은 통찰을 전달하고 있습니다. 이 책은 저자의 대표작으로 많은 독자들에게 사랑받고 있습니다.`,tocPreview:i.slice(0,6),tocFull:i,preview:`이 책은 ${t}에 관한 깊은 통찰을 제공합니다.

저자 ${n}는 오랜 연구를 통해 핵심적인 개념들을 명쾌하게 설명합니다. 독자들은 이 책을 통해 새로운 시각으로 세상을 바라볼 수 있게 됩니다.`,previewChunks:[`제1장에서는 기본 개념들을 소개합니다. ${t}의 핵심 주제를 이해하기 위한 기초적인 내용들을 다루며, 독자들이 쉽게 접근할 수 있도록 구성되었습니다.

저자는 복잡한 개념들을 일상적인 언어로 풀어내어 누구나 이해할 수 있도록 했습니다.`,`제2장에서는 심화 내용을 다룹니다. 기본 개념을 바탕으로 더 깊은 통찰을 제공하며, 실제 사례들을 통해 이론을 검증합니다.

다양한 관점에서 주제를 분석하여 독자들이 비판적 사고를 기를 수 있도록 돕습니다.`,`제3장에서는 실천적 적용 방법을 제시합니다. 이론을 실생활에 어떻게 적용할 수 있는지, 구체적인 방법론을 제시합니다.

저자의 경험에서 우러난 조언들은 독자들에게 실질적인 도움이 될 것입니다.`],chapterAnchors:{ch1:0,ch2:1,ch3:2},totalRating:9,ratingCount:5,reviews:[{id:"r1",user:"reader1***",date:"2024.03.15",rating:5,tag:"추천해요",content:"정말 좋은 책입니다. 많은 것을 배웠어요.",type:"구매자"},{id:"r2",user:"book_lover**",date:"2024.01.20",rating:4,tag:"도움돼요",content:"깊이 있는 내용이 인상적이었습니다.",type:"구매자"}]}),fc={"enterprise-new":Bo,"god-1":D("god-1","이병철회장의 24가지 질문","이병철","국내도서 > 인문학 > 종교철학",`삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문을 담은 책입니다.

죽음을 앞두고 인생의 근본적인 물음들을 탐구하며, 신의 존재, 인간의 본질, 삶의 의미에 대한 깊은 성찰을 담았습니다.`,["1. 신의 존재를 어떻게 증명할 수 있나? 신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?","2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?","3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데, 신의 인간창조와 어떻게 다른가? 인간이나 생물도 진화의 산물 아닌가?","4. 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?","5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?","6. 신은 왜 악인을 만들었는가? 예: 히틀러나 스탈린, 또는 갖가지 흉악범들","7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데 우리의 죄란 무엇인가? 왜 우리로 하여금 죄를 짓게 내버려 두었는가?","8. 성경은 어떻게 만들어 졌는가? 그것이 하느님의 말씀이라는 것을 어떻게 증명할 수 있나?","9. 종교란 무엇인가? 왜 인간에게 필요한가?","10. 영혼이란 무엇인가?","11. 종교의 종류와 특징은 무엇인가?","12. 천주교를 믿지 않고는 천국에 갈 수 없는가? 무종교인, 무신론자, 타종교인들 중에도 착한 사람이 많은데, 이들은 죽어서 어디로 가는가?","13. 종교의 목적은 모두 착하게 사는 것인데, 왜 천주교만 제일이고 다른 종교는 이단시하나?","14. 인간이 죽은 후에 영혼은 죽지 않고 천국이나 지옥으로 간다는 것을 어떻게 믿을 수 있나?","15. 신앙이 없어도 부귀를 누리고, 악인 중에도 부귀와 안락을 누리는 사람이 많은데, 신의 교훈은 무엇인가?","16. 성경에 부자가 천국에 가는 것을 약대가 바늘구멍에 들어가는 것에 비유했는데, 부자는 악인이란 말인가?","17. 이태리 같은 나라는 국민의 99%가 천주교도인데, 사회혼란과 범죄가 왜 그리 많으며 세계의 모범국이 되지 못하는가?","18. 신앙인은 때때로 광인처럼 되는데, 공산당원이 공산주의에 미치는 것과 어떻게 다른가?","19. 천주교와 공산주의는 상극이라고 하는데, 천주교도가 많은 나라들이 왜 공산국이 되었나? 예: 폴란드 등 동구제국","20. 우리나라는 두 집 건너 교회가 있고 신자도 많은데, 사회 범죄와 시련이 왜 그리 많은가?","21. 로마 교황의 결정에 잘못이 없다는데, 그도 사람인데 어떻게 그런 독선이 가능한가?","22. 신부는 어떤 사람인가? 왜 독신인가? 수녀는 어떤 사람인가? 왜 독신인가?","23. 천주교의 어떤 단체는 기업주를 착취자로, 근로자를 착취 당하는 자로 단정하는데, 자본주의 체제와 미덕을 부인하는 것인가?","24. 지구의 종말은 오는가?"]),"human-1":D("human-1","인간의 조건","한나 아렌트","국내도서 > 인문학 > 철학",`한나 아렌트의 대표작으로, 인간 활동의 본질을 노동, 작업, 행위의 세 가지로 분류하여 분석합니다.

현대 사회에서 인간 존재의 의미를 깊이 탐구하며, 공적 영역과 사적 영역의 관계를 철학적으로 성찰합니다.`,["Ⅰ. 인간 조건","1. 노동, 작업, 행위","2. 공적 영역과 사적 영역","Ⅱ. 노동","1. 노동의 본질","2. 노동과 생명","Ⅲ. 작업","1. 세계의 영속성","Ⅳ. 행위","1. 인간 복수성의 원리"]),"human-2":D("human-2","이기적 유전자","리처드 도킨스","국내도서 > 과학 > 진화론",`리처드 도킨스의 혁명적인 저작으로, 진화를 유전자의 관점에서 바라봅니다.

생물의 행동이 유전자의 생존과 번식을 극대화하는 방향으로 진화한다는 '이기적 유전자' 이론을 통해 인간 본성의 근원을 탐구합니다.`,["Ⅰ. 유전자란 무엇인가","1. 복제자의 탄생","2. 유전자의 불멸성","Ⅱ. 이기적 유전자의 행동","1. 개체와 유전자","2. 협력과 경쟁","Ⅲ. 밈: 문화적 유전자","1. 밈의 탄생","2. 밈의 진화"]),"human-3":D("human-3","사피엔스","유발 하라리","국내도서 > 역사 > 세계사",`인류의 역사를 완전히 새로운 시각으로 조명한 혁신적인 책입니다.

인지 혁명, 농업 혁명, 과학 혁명을 통해 호모 사피엔스가 어떻게 지구의 지배자가 되었는지를 탐구합니다.`,["Ⅰ. 인지 혁명","1. 역사상 가장 위험한 종","2. 역사의 나무","Ⅱ. 농업 혁명","1. 역사상 최대의 사기","2. 피라미드 건설","Ⅲ. 인류의 통합","1. 돈의 냄새","2. 제국의 비전","Ⅳ. 과학 혁명","1. 무지의 발견"]),"family-1":D("family-1","82년생 김지영","조남주","국내도서 > 소설 > 한국소설",`1982년생 김지영의 삶을 통해 한국 사회의 여성 차별 문제를 날카롭게 고발한 소설입니다.

평범한 여성의 일상을 통해 우리 사회에 만연한 성차별과 불평등을 섬세하게 그려냅니다.`,["Ⅰ. 2015년","1. 어머니가 된 김지영","Ⅱ. 2000년-2011년","1. 사회에 나온 김지영","Ⅲ. 1995년-1999년","1. 학창시절의 김지영","Ⅳ. 1982년-1994년","1. 어린 시절의 김지영"]),"family-2":D("family-2","아버지와 나","박완서","국내도서 > 소설 > 한국소설",`박완서 작가의 자전적 소설로, 전쟁과 가족의 이야기를 담담하게 그려냅니다.

한국 현대사의 아픔 속에서 가족의 의미와 사랑을 성찰하는 감동적인 작품입니다.`,["Ⅰ. 유년의 기억","1. 고향에서의 삶","Ⅱ. 전쟁의 상흔","1. 오빠의 죽음","Ⅲ. 어머니와 나","1. 삶의 재건","Ⅳ. 글쓰기의 시작","1. 작가가 되다"]),"enterprise-2":D("enterprise-2","제로 투 원","피터 틸","국내도서 > 경제경영 > 창업",`페이팔 창업자 피터 틸이 스탠퍼드 대학에서 강의한 내용을 바탕으로 쓴 창업 필독서입니다.

경쟁을 피하고 독점을 창조하라는 역설적인 메시지로, 진정한 혁신이 무엇인지 깊이 있게 탐구합니다.`,["Ⅰ. 미래에 도전하라","1. 0에서 1로","2. 파티는 끝났는가","Ⅱ. 과거에서 배우기","1. 닷컴버블의 교훈","2. 행복한 기업들의 공통점","Ⅲ. 독점의 철학","1. 경쟁은 패자들의 것","2. 독점 기업의 특징","Ⅳ. 스타트업의 비밀","1. 창업팀 구성","2. 비밀을 찾아라"]),"enterprise-3":D("enterprise-3","린 스타트업","에릭 리스","국내도서 > 경제경영 > 창업",`낭비 없는 창업 방법론인 '린 스타트업'을 소개하는 혁신적인 경영서입니다.

만들기-측정-학습의 피드백 순환을 통해 빠르게 실험하고 검증하는 방법을 제시합니다.`,["Ⅰ. 비전","1. 시작","2. 정의","Ⅱ. 조종","1. 도약","2. 테스트","3. 측정","4. 피벗","Ⅲ. 가속","1. 배치","2. 성장","3. 적응"]),"nation-1":D("nation-1","국가론","플라톤","국내도서 > 인문학 > 서양철학",`플라톤의 대표 저작으로, 이상적인 국가의 형태와 정의로운 삶에 대한 소크라테스와 제자들의 대화를 담고 있습니다.

철학자가 통치하는 이상 국가를 제시하며, 정의, 교육, 정치체제에 관한 심오한 논의를 전개합니다.`,["Ⅰ. 정의란 무엇인가","1. 트라시마코스의 도전","2. 정의의 이득","Ⅱ. 이상 국가의 건설","1. 국가의 기원","2. 수호자 계급","Ⅲ. 철인왕","1. 철학자의 본성","2. 동굴의 비유","Ⅳ. 정치체제의 분류","1. 과두제와 민주제"]),"nation-2":D("nation-2","군주론","마키아벨리","국내도서 > 인문학 > 정치철학",`르네상스 시대 마키아벨리가 쓴 정치학의 고전으로, 현실주의적 정치론을 담고 있습니다.

도덕보다 효율을 중시하는 현실 정치의 원리를 냉철하게 분석하여 권력 유지의 방법을 제시합니다.`,["Ⅰ. 군주국의 종류","1. 세습 군주국","2. 새로운 군주국","Ⅱ. 군사력에 대하여","1. 용병과 보조군","2. 자국군","Ⅲ. 군주의 자질","1. 덕과 운","2. 두려움과 사랑","Ⅳ. 이탈리아의 해방"]),"religion-1":D("religion-1","종교의 미래","카렌 암스트롱","국내도서 > 인문학 > 종교",`종교학의 권위자 카렌 암스트롱이 종교의 본질과 미래를 탐구한 역작입니다.

인류 역사 속에서 종교가 어떻게 진화해왔는지 살펴보고, 현대 사회에서 종교의 역할을 새롭게 정의합니다.`,["Ⅰ. 신에 대한 관념의 역사","1. 초기 종교","2. 축의 시대","Ⅱ. 세계 주요 종교","1. 유대교의 진화","2. 기독교의 발전","Ⅲ. 현대와 종교","1. 세속화의 도전","2. 근본주의의 부상","Ⅳ. 종교의 미래","1. 연민의 종교"]),"religion-2":D("religion-2","신은 위대하지 않다","크리스토퍼 히친스","국내도서 > 인문학 > 무신론",`저명한 지식인 크리스토퍼 히친스가 종교에 대해 날카롭게 비판한 무신론 선언서입니다.

역사적, 과학적 증거를 통해 종교의 해악을 지적하고 이성과 과학에 기반한 세계관을 주장합니다.`,["Ⅰ. 종교가 모든 것을 망친다","1. 종교의 독성","2. 종교적 폭력의 역사","Ⅱ. 구약의 잔혹함","1. 창세기의 모순","2. 십계명의 문제","Ⅲ. 신약의 허점","1. 예수의 실제","2. 기적의 거짓말","Ⅳ. 이슬람의 현실"]),"economy-1":D("economy-1","국부론","애덤 스미스","국내도서 > 경제경영 > 경제학",`근대 경제학의 아버지 애덤 스미스의 대표작으로, 자본주의 경제의 원리를 체계적으로 설명합니다.

분업, 자유시장, 보이지 않는 손의 개념을 통해 국가 부의 원천을 탐구합니다.`,["Ⅰ. 노동의 생산력","1. 분업의 원리","2. 분업의 기원","Ⅱ. 상품의 가격","1. 노동가치설","2. 자연가격과 시장가격","Ⅲ. 자본의 성질","1. 자본의 종류","2. 화폐의 기능","Ⅳ. 국가의 富","1. 중상주의 비판"]),"economy-2":D("economy-2","자본론","카를 마르크스","국내도서 > 경제경영 > 경제학",`마르크스의 필생의 역작으로, 자본주의 경제의 구조와 모순을 분석합니다.

잉여가치론을 중심으로 자본가와 노동자 사이의 착취 관계를 과학적으로 규명합니다.`,["Ⅰ. 상품과 화폐","1. 상품의 두 요소","2. 교환가치","Ⅱ. 화폐의 변신","1. 상품유통","2. 화폐축장","Ⅲ. 잉여가치의 생산","1. 노동력의 구매","2. 잉여가치율","Ⅳ. 자본의 축적","1. 단순재생산"]),"economy-3":D("economy-3","21세기 자본","토마 피케티","국내도서 > 경제경영 > 경제학",`프랑스 경제학자 토마 피케티가 300년간의 데이터를 분석하여 불평등의 심화를 경고한 책입니다.

r > g (자본수익률 > 경제성장률) 공식으로 자본주의의 본질적 불평등을 증명합니다.`,["Ⅰ. 소득과 자본","1. 자본/소득 비율","2. 성장의 환상","Ⅱ. 자본/소득 비율의 동학","1. 자본의 변신","2. 신구세계의 자본","Ⅲ. 불평등의 구조","1. 노동소득의 불평등","2. 자본소득의 불평등","Ⅳ. 21세기의 자본 규제"]),"society-1":D("society-1","사회계약론","장 자크 루소","국내도서 > 인문학 > 정치철학",`루소의 대표작으로, 정당한 정치 권력의 기초를 사회계약에서 찾는 정치철학의 고전입니다.

인민주권론을 바탕으로 자유롭고 평등한 사회의 기초를 탐구하며, 프랑스 혁명에 큰 영향을 미쳤습니다.`,["Ⅰ. 사회질서의 근거","1. 최초의 협약","2. 노예제의 권리","Ⅱ. 사회계약","1. 계약의 조건","2. 주권자","Ⅲ. 일반의지","1. 주권의 불가양도성","2. 법률","Ⅳ. 정부의 종류","1. 민주제"]),"society-2":D("society-2","군중심리","귀스타브 르봉","국내도서 > 인문학 > 사회심리학",`군중심리학의 창시자 르봉이 집단 행동의 심리를 분석한 고전적 저작입니다.

군중 속의 개인이 어떻게 이성을 잃고 집단적 감정에 지배받는지를 분석하여 대중 정치의 본질을 파헤칩니다.`,["Ⅰ. 군중의 영혼","1. 군중의 일반적 특성","2. 군중의 감정과 도덕성","Ⅱ. 군중의 의견과 신념","1. 간접적 요인","2. 직접적 요인","Ⅲ. 군중의 지도자","1. 지도자의 위신","2. 선동의 방법","Ⅳ. 선거 군중"]),"environment-1":D("environment-1","침묵의 봄","레이철 카슨","국내도서 > 과학 > 환경",`현대 환경운동의 출발점이 된 레이철 카슨의 기념비적 저작입니다.

DDT를 비롯한 살충제가 생태계와 인간에 미치는 치명적 영향을 고발하며 환경 보호의 중요성을 일깨웠습니다.`,["Ⅰ. 내일을 위한 우화","1. 침묵의 마을","Ⅱ. 참아야 할 의무","1. 인내의 한계","Ⅲ. 죽음의 묘약","1. 농약의 위험성","Ⅳ. 표면수와 지하수","1. 수질 오염","Ⅴ. 토양의 왕국","1. 토양 생태계","Ⅵ. 지구의 녹색 외투"]),"environment-2":D("environment-2","6도의 악몽","마크 라이너스","국내도서 > 과학 > 기후변화",`기후변화 전문가 마크 라이너스가 지구 온도 상승 시나리오별로 미래를 예측한 경고의 책입니다.

1도부터 6도까지 기온이 상승할 때마다 어떤 재앙이 닥치는지를 과학적 데이터로 생생하게 그립니다.`,["Ⅰ. 1도 상승","1. 온난화의 시작","Ⅱ. 2도 상승","1. 빙하의 소멸","Ⅲ. 3도 상승","1. 아마존의 붕괴","Ⅳ. 4도 상승","1. 해수면 상승","Ⅴ. 5도 상승","1. 문명의 위기","Ⅵ. 6도 상승","1. 대멸종"]),"health-1":D("health-1","몸의 일기","다니엘 페나크","국내도서 > 문학 > 프랑스소설",`프랑스 작가 다니엘 페나크가 자신의 몸과 함께한 87년의 삶을 기록한 독특한 자전 에세이입니다.

태어나서 죽기까지 몸이 겪는 변화를 섬세하고 유머러스하게 그려내며 삶의 의미를 탐구합니다.`,["Ⅰ. 태어나다","1. 첫 번째 몸","Ⅱ. 자라다","1. 어린 시절의 몸","Ⅲ. 청춘","1. 욕망하는 몸","Ⅳ. 성숙","1. 일하는 몸","Ⅴ. 노화","1. 늙어가는 몸","Ⅵ. 죽음","1. 마지막 몸"]),"health-2":D("health-2","음식의 제국","에릭 슐로서","국내도서 > 사회과학 > 식품산업",`패스트푸드 산업의 어두운 면을 파헤친 충격적인 르포르타주입니다.

맥도날드로 대표되는 패스트푸드 산업이 어떻게 미국과 세계의 식문화, 농업, 노동 환경을 바꾸었는지 고발합니다.`,["Ⅰ. 감자튀김 왕국","1. 목장에서 식탁까지","Ⅱ. 맛의 비밀","1. 식품 첨가물","2. 향미 산업","Ⅲ. 도살장의 진실","1. 노동자들","2. 식품 안전","Ⅳ. 세계를 바꾼 햄버거","1. 글로벌 확산"]),"universe-1":D("universe-1","코스모스","칼 세이건","국내도서 > 과학 > 천문학",`천문학자 칼 세이건이 우주의 장엄함과 인류의 위치를 아름다운 문체로 써내려간 과학 교양의 고전입니다.

빅뱅에서 현재까지 우주의 역사를 탐구하며, 우리가 왜 별의 먼지인지를 깨닫게 해줍니다.`,["Ⅰ. 코스모스의 해안","1. 우주의 크기","Ⅱ. 우주 생명의 기원","1. 생명의 탄생","Ⅲ. 천국과 지옥","1. 금성 탐사","Ⅳ. 천국과 지옥","1. 화성 탐사","Ⅴ. 블루스 포 어 레드 플래닛","1. 외계 생명체"]),"universe-2":D("universe-2","시간의 역사","스티븐 호킹","국내도서 > 과학 > 물리학","스티븐 호킹이 빅뱅, 블랙홀, 시간의 화살 등 우주의 근본 원리를 일반인도 이해할 수 있게 설명한 과학 베스트셀러입니다.",["Ⅰ. 우주에 대한 우리의 그림","1. 우주론의 역사","Ⅱ. 공간과 시간","1. 상대성이론","Ⅲ. 팽창하는 우주","1. 빅뱅","Ⅳ. 불확정성 원리","1. 양자역학","Ⅴ. 블랙홀","1. 블랙홀의 생성","Ⅵ. 시간의 화살"]),"universe-3":D("universe-3","엘러건트 유니버스","브라이언 그린","국내도서 > 과학 > 물리학",`초끈이론과 M이론을 통해 우주의 통일 이론을 탐구하는 물리학 교양서입니다.

11차원의 우주와 초끈이론이 어떻게 자연의 모든 힘을 하나로 통합할 수 있는지 설명합니다.`,["Ⅰ. 끈의 가장자리","1. 이론의 문제","Ⅱ. 초끈이론","1. 끈의 발견","2. 진동하는 우주","Ⅲ. 더 깊은 구조","1. M이론","2. 막의 세계","Ⅳ. 양자 기하학","1. 공간의 양자화"]),"science-1":D("science-1","과학혁명의 구조","토마스 쿤","국내도서 > 과학 > 과학철학",`과학철학의 패러다임 개념을 도입한 혁명적인 저작입니다.

과학이 단순한 지식의 축적이 아니라 패러다임의 전환을 통해 발전한다는 쿤의 주장은 과학사와 철학에 큰 영향을 미쳤습니다.`,["Ⅰ. 역사의 역할","1. 과학사란","Ⅱ. 정상과학의 길","1. 패러다임","2. 퍼즐 풀기","Ⅲ. 이상현상","1. 정상과학의 위기","Ⅳ. 과학혁명","1. 혁명의 본질","2. 패러다임 전환","Ⅴ. 혁명의 해결"]),"science-2":D("science-2","부분과 전체","베르너 하이젠베르크","국내도서 > 과학 > 물리학",`양자역학의 창시자 하이젠베르크가 자신의 과학적 여정과 철학적 성찰을 담은 자전적 에세이입니다.

과학과 철학, 예술과 종교의 경계를 넘나들며 원자물리학의 발전 과정을 생생하게 기록했습니다.`,["Ⅰ. 첫 번째 대화","1. 원자론의 시작","Ⅱ. 학창 시절","1. 뮌헨의 추억","Ⅲ. 코펜하겐 정신","1. 보어와의 만남","Ⅳ. 양자역학","1. 불확정성 원리","Ⅴ. 언어와 실재","1. 물리학의 한계"]),"research-1":D("research-1","총균쇠","재레드 다이아몬드","국내도서 > 역사 > 세계사",`퓰리처상 수상작으로, 왜 어떤 민족은 다른 민족을 정복했는지를 지리적, 생태적 관점에서 분석합니다.

총과 균과 쇠(금속)라는 세 가지 키워드로 인류 문명의 불평등한 발전 과정을 설명합니다.`,["Ⅰ. 얄리의 질문","1. 역사의 출발점","Ⅱ. 역사의 자연실험","1. 폴리네시아의 역사","Ⅲ. 식량생산의 기원","1. 농업혁명","2. 가축화","Ⅳ. 이상한 결과","1. 세균의 역할","2. 알파벳의 확산","Ⅴ. 대륙의 역사"]),"research-2":D("research-2","생각에 관한 생각","다니엘 카너먼","국내도서 > 경제경영 > 행동경제학",`노벨경제학상 수상자 다니엘 카너먼이 인간의 사고 과정을 빠른 시스템1과 느린 시스템2로 분석한 역작입니다.

우리가 얼마나 비합리적으로 판단하는지를 보여주며, 더 나은 의사결정을 위한 통찰을 제공합니다.`,["Ⅰ. 두 시스템","1. 시스템1과 시스템2","2. 자동 조종 장치","Ⅱ. 휴리스틱과 편향","1. 가용성 편향","2. 대표성 편향","Ⅲ. 과신","1. 우리는 과신한다","2. 전문가의 직관","Ⅳ. 선택","1. 프레이밍 효과","2. 손실 회피"])},hc={id:"god-1",title:"이병철회장의 24가지 질문",subtitle:"삼성그룹 창업자가 던진 신에 관한 24가지 질문",author:"이병철",publisher:"정법시대",publishDate:"2023년 01월 01일",isbn:"9788900000001",pages:280,size:"135 * 205 mm",price:18e3,discountRate:10,discountPrice:16200,points:900,cover:"img/24question.png",badges:["무료배송","소득공제"],category:"국내도서 > 인문학 > 종교철학",intro:`삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문을 담은 책입니다.

죽음을 앞두고 인생의 근본적인 물음들을 탐구하며, 신의 존재, 인간의 본질, 삶의 의미에 대한 깊은 성찰을 담았습니다. 이 책은 가톨릭 신부와의 대화를 통해 24가지 질문에 대한 답을 찾아가는 여정을 담고 있습니다.`,authorInfo:"이병철 회장은 삼성그룹의 창업자로, 대한민국 경제 발전에 큰 공헌을 했습니다. 말년에 신의 존재와 삶의 의미에 대한 깊은 질문을 던지며 종교적 성찰을 이어갔습니다.",tocFull:["들어가며","","1. 신의 존재를 어떻게 증명할 수 있나?","   신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?","2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?","3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데,","   신의 인간창조와 어떻게 다른가?","4. 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?","5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?","6. 신은 왜 악인을 만들었는가?","7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데","   우리의 죄란 무엇인가?","8. 성경은 어떻게 만들어 졌는가?","9. 종교란 무엇인가? 왜 인간에게 필요한가?","10. 영혼이란 무엇인가?","11. 종교의 종류와 특징은 무엇인가?","12. 천주교를 믿지 않고는 천국에 갈 수 없는가?","13. 왜 천주교만 제일이고, 다른 종교는 이단시하나?","14. 인간이 죽은 후에 영혼은 천국이나 지옥으로 간다는 것을","    어떻게 믿을 수 있나?","15. 신앙이 없어도 부귀를 누리는 사람이 많은데,","    신의 교훈은 무엇인가?","16. 성경에서 부자가 천국에 가는 것을 바늘구멍에 비유했는데,","    부자는 악인이란 말인가?","17. 이태리 같은 나라는 국민의 99%가 천주교도인데,","    사회혼란과 범죄가 왜 그리 많은가?","18. 신앙인은 때때로 광인처럼 되는데,","    공산당원이 공산주의에 미치는 것과 어떻게 다른가?","19. 천주교도가 많은 나라들이 왜 공산국이 되었나?","20. 우리나라는 교회가 많은데 사회 범죄와 시련이 왜 그리 많은가?","21. 로마 교황의 결정에 잘못이 없다는데,","    어떻게 그런 독선이 가능한가?","22. 신부와 수녀는 어떤 사람인가? 왜 독신인가?","23. 천주교 단체가 기업주를 착취자로 단정하는데,","    자본주의를 부인하는 것인가?","24. 지구의 종말은 오는가?","","에필로그"],preview:`이 책은 삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문을 담고 있습니다.

한 시대를 풍미한 기업인이 죽음을 앞두고 신의 존재와 삶의 의미에 대해 진지하게 탐구한 내용은 많은 독자들에게 깊은 감동과 성찰을 안겨줍니다.`,previewChunks:[`1. 신(하느님)의 존재를 어떻게 증명할 수 있나?
신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?

우리가 하느님을 어떻게 증명하느냐? 하느님을 누가 이렇다 하니까 하느님이 그런 줄 알았던 거예요. 누가 이렇다고 한 것이지 하느님을 본 사람이 없습니다. 하느님을 본 사람은 없다는 거죠. 요런 느낌을 나는 하느님이라고 알고 있다, 요런 거지 하느님의 실체는 없습니다. 누구도 하느님의 실체를 본 자는 없다. 없습니다. 이거는 단호한 소리입니다.

어떻게 말을 했든 그 말은 있을 수 있는데 하느님을 본 자는 없습니다. 왜 없느냐? 하느님의 존재를 내가 가르쳐 줄 테니까 그러면 왜 못 보았는지를 알게 된다.

하느님의 존재는 뭐냐? 하느님은 스스로 계신다. 이 대자연에 에너지는 스스로 있다. 이것이 하느님이예요. 에너지다 이 말이죠. 하느님은 에너지이고, 인간 또한 에너지예요.

[IMG:img/god1/fig1.png|그림 1 — 하느님은 대자연 전체의 에너지. 별·물·바람·불·인간 모두 그 안에 있다.]

인간이 에너지인데 육기(肉氣)에너지가 있고, 인기(人氣)에너지가 있고. 인기도 에너지이고 육기도 에너지예요. 육신, 인신 이것도 에너지라는 얘기죠. 인신, 인기가 어디 들어가 있냐면, 이 육기 안에 지금 존재한다. 내가 이 육신 안에 있다 이 말이죠.

헌데 언제 나를 볼 수 있느냐? 육신과 분리되고 나서 나를 볼 수 있습니다. 영혼이 되고 나서. 영혼신, 영혼기는 왜 영혼신 영혼기냐? 이 에너지가 육신에 들어와서 살아가면서 모든 걸 기억장치를 가지고 있다는 거죠. 살아가면서 기억장치가 있어가지고 이 기억장치가 이 에너지 영혼기에 잔재로 남아있다는 거죠. 잔재로 남아있기 때문에 영적인 데도 볼 수 있는 영이 되어있다는 거죠.

그래서 우리가 꿈에 본다거나, 기도할 때 싹 나타나는 걸 본다거나, 신경을 우리가 놓았을 때 이때 살짝 보인다 말이죠.

[IMG:img/god1/fig2.png|그림 2 — 살아있을 때는 영혼(인기)이 육신 안에 있다. 육신과 분리되면 영혼기(영혼)가 되어 영적으로 보인다.]

허나 하느님은 볼 수 있느냐? 못 봅니다. 왜? 육신에 들어와서 집착한 게 없기 때문에 그 기운은 보이는 성격의 것이 될 수가 없다. 이 말이예요. 그런데 하느님은 존재 하느냐? 존재합니다.

하느님이라는 용어를 어떻게 부르느냐를 인자 풀어봐야 될 겁니다. 서양에서 할 때에는 God, 유일신 God 요렇게 부르고, 알라라고 하기도 하고, 우리 한국으로 들어오게 되면 하느님이라고 부릅니다. 과거에는 한울님이라고도 하고, 천지신명이라고 이름을 붙여서 부르기도 했죠. 요래 되면 천지 에너지다 이 말이거든요. 천신이다. 이게 하느님입니다.

하느님이 있냐? 없냐? 이걸 따지기 이전에 나는 누구인가를 찾아라. 인간은 나는 누구인가를 찾게 되면 이 대자연에 소속하고 있는 하나의 세포임을 알게 된다. 그러면 이 대자연의 에너지는 무엇이냐? 이래 들어가는 것이 인자 스스로 있는 에너지이다. 이것이 천신이요, 이것이 하느님이라고 우리가 부른다.

그러면 하느님과 우리는 어떤 관계이고 하느님은 왜 나투시지 않는가? 몸이 없어 나투실 수 없고, 어떠한 홀로그램으로 안에 집착성을 가지고 있는 게 없어 나투실 수 없고, 우리가 쳐다보는 것은 우리가 아는 만큼 쳐다보는 겁니다.

인간으로 살고 간 영혼은 영적으로 볼 수 있지만 하느님은 영적으로도 볼 수 없는 겁니다. 그러면 어떻게 알 수 있냐? 느낌으로 알 수 있다. 영이 맑은 사람들은 느낌으로 안다.

모든 인간은 하느님을 느끼게 된다. 대자연의 기운을 항상 느끼기 때문이다.

"네가 생각을 할 때, 뭔가를 원하지 않느냐? 이때 이 느낌이 하느님입니다. 너 인간이 뭔가에 매달리지 않느냐? 깨끗하게 매달릴 그때 그 기운을 느끼는 게 너의 하느님이니라. 천(天) · 지(地) · 인(人) — 너희들과 나는 둘이 아니요 하나니라."`,`2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?

우주의 정교한 질서와 법칙, 생명의 복잡성과 다양성, 자연의 아름다움과 조화로움은 우연의 산물이라고 보기 어렵습니다.

물리학의 미세조정 논증에 따르면, 우주의 기본 상수들이 조금이라도 달랐다면 생명이 존재할 수 없었을 것입니다. 이러한 정밀함이 설계자, 즉 창조주의 존재를 암시한다고 볼 수 있습니다.`,`3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데, 신의 인간창조와 어떻게 다른가?
인간이나 생물도 진화의 산물 아닌가?

 `,`4. 언젠가 생명의 합성, 무병장수의 시대도 가능할 것 같다.
이처럼 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?

 `,`5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?

이 질문은 '악의 문제'로 신학에서 가장 오래된 논쟁 중 하나입니다.

 `,`6. 신은 왜 악인을 만들었는가?
예: 히틀러나 스탈린, 또는 갖가지 흉악범들

`,`7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데 우리의 죄란 무엇인가?
왜 우리로 하여금 죄를 짓게 내버려 두었는가?

`,`8. 성경은 어떻게 만들어 졌는가?
그것이 하느님의 말씀이라는 것을 어떻게 증명할 수 있나?

`,`9. 종교란 무엇인가? 왜 인간에게 필요한가?

`,`10. 영혼이란 무엇인가?

`,`11. 종교의 종류와 특징은 무엇인가?

`,`12. 천주교를 믿지 않고는 천국에 갈 수 없는가?
무종교인, 무신론자, 타종교인들 중에도 착한 사람이 많은데, 이들은 죽어서 어디로 가는가?

`,`13. 종교의 목적은 모두 착하게 사는 것인데
왜 천주교만 제일이고, 다른 종교는 이단시하나?

`,`14. 인간이 죽은 후에 영혼은 죽지 않고, 천국이나 지옥으로 간다는 것을 어떻게 믿을 수 있나?

`,`15. 신앙이 없어도 부귀를 누리고, 악인 중에도 부귀와 안락을 누리는 사람이 많은데,
신의 교훈은 무엇인가?

`,`16. 성경에 부자가 천국에 가는 것을 약대가 바늘구명에 들어가는 것에 비유했는데,
부자는 악인이란 말인가?

`,`17. 이태리 같은 나라는 국민의 99%가 천주교도인데,
사회혼란과 범죄가 왜 그리 많으며, 세계의 모범국이 되지 못하는가?

`,`18. 신앙인은 때때로 광인처럼 되는데,
공산당원이 공산주의에 미치는 것과 어떻게 다른가?

`,`19. 천주교와 공산주의는 상극이라고 하는데,
천주교도가 많은 나라들이 왜 공산국이 되었나?
예: 폴란드 등 동구제국, 니카라과 등

`,`20. 우리나라는 두집 건너 교회가 있고, 신자도 많은데 사회 범죄와 시련이 왜그리 많은가?

`,`21. 로마 교황의 경정에 잘못이 없다는데, 그도 사람인데 어떻게 그런 독선이 가능한가?

`,`22. 신부는 어떤 사람인가? 왜 독신인가?
수녀는 어떤 사람인가? 왜 독신인가?

`,`23. 천주교의 어떤 단체는 기업주를 착취자로, 근로자를 착취 당하는 자로 단정,
기업의 분열과 파괴를 조장하는데 자본주의 체제와 미덕을 부인하는 것인가?

`,`24. 지구의 종말은 오는가?

`],htmlChunks:{0:`
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=Noto+Sans+KR:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.wrap{max-width:680px;margin:0 auto;padding:0 0 4rem;font-family:'Noto Sans KR',sans-serif;color:var(--color-text-primary)}
.cover{background:#16120a;padding:3rem 2rem;text-align:left}
.cover-label{font-size:11px;letter-spacing:4px;color:#7a6020;margin-bottom:1rem}
.cover-line{width:40px;height:1px;background:#7a6020;margin:0 auto .8rem}
.cover-title{font-family:'Noto Serif KR',serif;font-size:2rem;font-weight:700;color:#f0d97a;line-height:1.4;margin-bottom:.4rem}
.cover-sub{font-size:.9rem;color:#9a7a30;margin-bottom:1.2rem}
.cover-info{font-size:11px;color:#5a4510;letter-spacing:1px}

.q-block{padding:2rem 1.6rem}
.q-num{display:inline-block;background:#16120a;color:#f0d97a;font-size:11px;font-weight:500;letter-spacing:2px;padding:4px 12px;border-radius:2px;margin-bottom:.8rem}
.q-title{font-family:'Noto Serif KR',serif;font-size:1.2rem;font-weight:700;color:var(--color-text-primary);line-height:1.5;margin-bottom:.5rem;border-left:3px solid #c4a84d;padding-left:.8rem}
.q-meta{font-size:12px;color:var(--color-text-tertiary);margin-bottom:1.4rem;padding-left:1.1rem}
.body{font-size:15px;line-height:2;color:var(--color-text-primary);margin-bottom:.9rem;word-break:keep-all}
.body b{color:#b38a20;font-weight:500}

.illus-wrap{margin:1.6rem 0;background:var(--color-background-secondary);border-radius:10px;padding:1.2rem 1rem .8rem;border:1px solid var(--color-border-tertiary)}
.illus-cap{font-size:11px;color:var(--color-text-tertiary);text-align:center;margin-top:.7rem;letter-spacing:.3px}

.divider{border:none;border-top:1px solid var(--color-border-tertiary);margin:0 1.6rem}

.key-quote{background:#FF11;border-radius:8px;padding:1.2rem 1.4rem;margin:1.2rem 0;border-left:3px solid #c4a84d}
.key-quote p{font-family:'Noto Serif KR',serif;font-size:.95rem;color:#494700;line-height:1.8}
</style>

<div class="wrap">

<div class="cover">
    
    <div class="cover-sub">첫번째 질문</div>
    <div class="cover-line"></div>
    <div class="cover-title">신(하느님)의 존재를 어떻게 증명할 수 있나? 신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?</div>
    <div class="cover-label">삼성 故 이병철 회장이 생전에 남긴 질문들</div>
    <!--  <div class="cover-line"></div>
    <div class="cover-info">강의일 2025.01.18 · 천안</div>-->
</div>   

<!-- Q1 -->
<div class="q-block">
  <div class="q-num">질문 1</div>
  <div class="q-title">신(하느님)의 존재를 어떻게 증명할 수 있나?<br>신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?</div>

  <p class="body">우리가 하느님을 어떻게 증명하느냐? 하느님을 누가 이렇다 하니까 하느님이 그런 줄 알았던 거예요. 누가 이렇다고 한 것이지 하느님을 본 사람이 없습니다. 하느님을 본 사람은 없다는 거죠. 요런 느낌을 나는 하느님이라고 알고 있다, 요런 거지 하느님의 실체는 없습니다. 누구도 하느님의 실체를 본 자는 없다. 없습니다. 이거는 단호한 소리입니다.</p>

  <p class="body">어떻게 말을 했든 그 말은 있을 수 있는데 하느님을 본 자는 없습니다. 왜 없느냐? 하느님의 존재를 내가 가르쳐 줄 테니까 그러면 왜 못 보았는지를 알게 된다.</p>

  <p class="body"><b>하느님의 존재는 뭐냐? 하느님은 스스로 계신다. 이 대자연에 에너지는 스스로 있다. 이것이 하느님이예요. 에너지다 이 말이죠. 하느님은 에너지이고, 인간 또한 에너지예요.</b></p>

  <!-- 그림 1: 하느님 = 에너지 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>하느님은 에너지 — 대자연의 모든 것이 하나의 에너지</title>
      <desc>하느님이라는 거대한 에너지 안에 별, 물, 바람, 인간이 모두 포함된 그림</desc>
      <rect width="640" height="220" fill="none"/>
      <!-- 바깥 큰 원 = 하느님(대자연 에너지) -->
      <ellipse cx="320" cy="110" rx="290" ry="95" fill="none" stroke="#c4a84d" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="320" y="22" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#c4a84d" font-weight="600">하느님 = 대자연의 에너지 (스스로 계심)</text>

      <!-- 별 -->
      <circle cx="120" cy="80" r="22" fill="#2a1f08" stroke="#f0d97a" stroke-width="1"/>
      <text x="120" y="75" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#f0d97a">⭐</text>
      <text x="120" y="91" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#c4a84d">별·우주</text>

      <!-- 물 -->
      <circle cx="210" cy="145" r="22" fill="#0a1a2a" stroke="#6ab0d4" stroke-width="1"/>
      <text x="210" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6ab0d4">💧</text>
      <text x="210" y="156" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6ab0d4">물·대지</text>

      <!-- 바람/공기 -->
      <circle cx="320" cy="75" r="22" fill="#0f1a10" stroke="#7abf7a" stroke-width="1"/>
      <text x="320" y="70" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7abf7a">🌿</text>
      <text x="320" y="86" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#7abf7a">바람·기운</text>

      <!-- 불 -->
      <circle cx="430" cy="145" r="22" fill="#2a0f08" stroke="#e07a30" stroke-width="1"/>
      <text x="430" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#e07a30">🔥</text>
      <text x="430" y="156" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#e07a30">불·빛·열</text>

      <!-- 인간 -->
      <circle cx="520" cy="80" r="22" fill="#1a0a2a" stroke="#b070d4" stroke-width="1"/>
      <text x="520" y="75" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#b070d4">🧑</text>
      <text x="520" y="91" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">인간·생명</text>

      <!-- 연결선 -->
      <line x1="142" y1="80" x2="208" y2="125" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="232" y1="130" x2="298" y2="90" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="342" y1="90" x2="408" y2="128" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="452" y1="128" x2="498" y2="95" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>

      <text x="320" y="208" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#7a6020">모든 것은 하나의 에너지 안에 있다 — 이것이 하느님</text>
    </svg>
    <div class="illus-cap">그림 1 — 하느님은 대자연 전체의 에너지. 별·물·바람·불·인간 모두 그 안에 있다.</div>
  </div>

  <p class="body">인간이 에너지인데 육기(肉氣)에너지가 있고, 인기(人氣)에너지가 있고. 인기도 에너지이고 육기도 에너지예요. 육신, 인신 이것도 에너지라는 얘기죠. 인신, 인기가 어디 들어가 있냐면, 이 육기 안에 지금 존재한다. 내가 이 육신 안에 있다 이 말이죠.</p>

  <p class="body">헌데 언제 나를 볼 수 있느냐? 육신과 분리되고 나서 나를 볼 수 있습니다. 영혼이 되고 나서. 영혼신, 영혼기는 왜 영혼신 영혼기냐? 이 에너지가 육신에 들어와서 살아가면서 모든 걸 기억장치를 가지고 있다는 거죠. 살아가면서 기억장치가 있어가지고 이 기억장치가 이 에너지 영혼기에 잔재로 남아있다는 거죠. 잔재로 남아있기 때문에 영적인 데도 볼 수 있는 영이 되어있다는 거죠.</p>

  <p class="body">그래서 우리가 꿈에 본다거나, 기도할 때 싹 나타나는 걸 본다거나, 신경을 우리가 놓았을 때 이때 살짝 보인다 말이죠.</p>

  <!-- 그림 2: 육신과 인기/영혼 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>육신 안의 인기(영혼)와 분리 과정</title>
      <desc>살아있을 때는 육신 안에 영혼이 들어있고, 죽으면 영혼이 분리되어 나온다</desc>
      <rect width="640" height="200" fill="none"/>
      <!-- 왼쪽: 살아있는 상태 -->
      <rect x="40" y="30" width="240" height="140" rx="8" fill="none" stroke="var(--color-border-tertiary)" stroke-width="1"/>
      <text x="160" y="52" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="var(--color-text-secondary)">살아있을 때</text>
      <!-- 육신 -->
      <ellipse cx="160" cy="115" rx="70" ry="55" fill="#2a1808" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="160" y="108" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#c4a84d">육신(肉身)</text>
      <!-- 인기/영혼 = 안에 작은 원 -->
      <ellipse cx="160" cy="115" rx="30" ry="24" fill="#3a1a50" stroke="#b070d4" stroke-width="1.2"/>
      <text x="160" y="113" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="10" fill="#d4a0f0">인기</text>
      <text x="160" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">(영혼)</text>
      <text x="160" y="185" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">영혼이 육신 안에 있음</text>

      <!-- 화살표 -->
      <text x="320" y="118" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="22" fill="var(--color-text-tertiary)">→</text>
      <text x="320" y="138" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="var(--color-text-tertiary)">육신 분리</text>

      <!-- 오른쪽: 분리된 상태 -->
      <rect x="360" y="30" width="240" height="140" rx="8" fill="none" stroke="var(--color-border-tertiary)" stroke-width="1"/>
      <text x="480" y="52" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="var(--color-text-secondary)">육신과 분리 후</text>
      <!-- 빈 육신 -->
      <ellipse cx="430" cy="120" rx="45" ry="38" fill="#1a1208" stroke="#9a7a30" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="430" y="124" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6020">빈 육신</text>
      <!-- 분리된 영혼 -->
      <ellipse cx="530" cy="100" rx="35" ry="28" fill="#3a1a50" stroke="#b070d4" stroke-width="1.5"/>
      <text x="530" y="97" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#d4a0f0">영혼기</text>
      <text x="530" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">(기억 보존)</text>
      <!-- 빛 효과 -->
      <line x1="510" y1="80" x2="495" y2="65" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <line x1="530" y1="73" x2="530" y2="58" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <line x1="550" y1="80" x2="565" y2="65" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <text x="480" y="185" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">영혼이 됨 — 비로소 보이기 시작</text>
    </svg>
    <div class="illus-cap">그림 2 — 살아있을 때는 영혼(인기)이 육신 안에 있다. 육신과 분리되면 영혼기(영혼)가 되어 영적으로 보인다.</div>
  </div>

  <p class="body">허나 하느님은 볼 수 있느냐? <b>못 봅니다. 왜? 육신에 들어와서 집착한 게 없기 때문에 그 기운은 보이는 성격의 것이 될 수가 없다.</b> 이 말이예요. 그런데 하느님은 존재 하느냐? 존재합니다.</p>

  <p class="body">하느님이라는 용어를 어떻게 부르느냐를 인자 풀어봐야 될 겁니다. 서양에서 할 때에는 God, 유일신 God 요렇게 부르고, 알라라고 하기도 하고, 우리 한국으로 들어오게 되면 하느님이라고 부릅니다. 과거에는 한울님이라고도 하고, 천지신명이라고 이름을 붙여서 부르기도 했죠. 요래 되면 천지 에너지다 이 말이거든요. 천신이다. 이게 하느님입니다.</p>

  <p class="body">그래서 <b>하느님이 있냐? 없냐? 이걸 따지기 이전에 나는 누구인가를 찾아라. 인간은 나는 누구인가를 찾게 되면 이 대자연에 소속하고 있는 하나의 세포임을 알게 된다.</b> 그러면 이 대자연의 에너지는 무엇이냐? 이래 들어가는 것이 인자 스스로 있는 에너지이다. 이것이 천신이요, 이것이 하느님이라고 우리가 부른다.</p>

  <p class="body">그러면 하느님과 우리는 어떤 관계이고 하느님은 왜 나투시지 않는가? 몸이 없어 나투실 수 없고, 어떠한 홀로그램으로 안에 집착성을 가지고 있는 게 없어 나투실 수 없고, 우리가 쳐다보는 것은 우리가 아는 만큼 쳐다보는 겁니다.</p>

  <p class="body">인간으로 살고 간 영혼은 영적으로 볼 수 있지만 하느님은 영적으로도 볼 수 없는 겁니다. 그러면 어떻게 알 수 있냐? <b>느낌으로 알 수 있다. 영이 맑은 사람들은 느낌으로 안다.</b> 그리고 또 어떻게 알 수 있냐? 모든 인간은 하느님을 느끼게 된다. 대자연의 기운을 항상 느끼기 때문이다.</p>

  <div class="key-quote">
    <p>"네가 생각을 할 때, 뭔가를 원하지 않느냐? 이때 이 느낌이 하느님입니다.<br>
    너 인간이 뭔가에 매달리지 않느냐? 깨끗하게 매달릴 그때 그 기운을 느끼는 게 너의 하느님이니라.<br><br>
    천(天) · 지(地) · 인(人) — 너희들과 나는 둘이 아니요 하나니라."</p>
  </div>
</div>

<hr class="divider">

<!-- Q2 -->
<div class="q-block">
  <div class="q-num">질문 2</div>
  <div class="q-title">하느님의 음성을 듣고, 하느님을 만났다는 사람들은 거짓말을 하는 것입니까?</div>

  <p class="body">그 사람이 거짓말을 하는 것이 아니고 그 사람은 무언가를 들은 것이지요. 이게 하느님 음성을 들었는지, 지금 역할하는 신들의 음성을 들었는지 들은 거는 분명하되, <b>영적으로 들은 겁니다.</b></p>

  <p class="body">우리가 영적으로 듣고 접한다고 해서 하느님을 접하고 있는 게 아니예요. 하느님이 운용하시는 이 차원계는 무수한 영을 운용을 한다. 이것이 어떠한 영이냐라고 할 때, 대신들이라고 하는데, 신들이라는 것을 알고 있다라는 거죠.</p>

  <!-- 그림 3: 하느님 → 대신 → 인간 전달 구조 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>하느님의 말씀이 전달되는 구조</title>
      <desc>하느님이 대신(천사·신들)을 통해 인간에게 메시지를 전달하는 계층 구조</desc>
      <rect width="640" height="230" fill="none"/>

      <!-- 하느님 -->
      <ellipse cx="320" cy="55" rx="90" ry="38" fill="#16120a" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="320" y="50" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#f0d97a" font-weight="600">하느님</text>
      <text x="320" y="67" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">(천지 에너지 · 형상 없음)</text>

      <!-- 화살표 하느님→대신 -->
      <line x1="260" y1="88" x2="200" y2="122" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <line x1="320" y1="93" x2="320" y2="120" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <line x1="380" y1="88" x2="440" y2="122" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <defs>
        <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#c4a84d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>

      <!-- 대신들 3종류 -->
      <rect x="130" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="195" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">대역 대신</text>
      <text x="195" y="164" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">하느님의 대변인</text>

      <rect x="255" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="320" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">예수·싯다르타·</text>
      <text x="320" y="162" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">마리아 신</text>

      <rect x="380" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="445" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">조상신·나라신·</text>
      <text x="445" y="163" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">천사 등</text>

      <!-- 대신→인간 -->
      <line x1="195" y1="176" x2="260" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <line x1="320" y1="176" x2="320" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <line x1="445" y1="176" x2="380" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>

      <!-- 인간 -->
      <ellipse cx="320" cy="212" rx="100" ry="16" fill="#1a1208" stroke="#7a6020" stroke-width="1"/>
      <text x="320" y="216" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">인간 (영적으로 받음)</text>

      <text x="45" y="152" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">천상계</text>
      <text x="45" y="212" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">인간계</text>
    </svg>
    <div class="illus-cap">그림 3 — 하느님은 대신(대역신)을 통해 인간에게 메시지를 전달한다. 대통령이 직접 말하지 않고 대변인을 통하는 것과 같다.</div>
  </div>

  <p class="body">그러니까 특정한 자한테 하느님이 말씀해주시고 하시는데 일반 사람한테는 하느님이 말씀해주시지 않는다. <b>하느님은 누구를 상대하나? 최고를 상대합니다. 인간신 중에서도 최고들을 상대한다. 최고들을 나중에 내가 풀어주겠지만 그걸 단이라고 합니다. 단. 단이 최고의 신이예요.</b></p>

  <p class="body">이거 내가 다음에 다 풀어줄 거니까. 지금 풀면 혼란해져서 안 됩니다. 그러니까 인자 그런 데에 직접적인 교류를 하신다. 이때는 그러면 들릴 때 귀로 들리느냐? 아녜요. <b>그냥 자연의 소리로 내 몸 전체로 들린다.</b> 몸 전체로 들립니다.</p>

  <p class="body">하느님이 프랑스어로 하는 것도 아니고 한국말로 하는 것도 아녜요. <b>네가 알게 들려준다. 하느님은 네가 알게 들려주는 것이지 어떤 음향으로 들리는 게 아닙니다.</b> 그러면 내가 한국말로 들을 수 있는 사람일 때에는 한국말로 들어옵니다.</p>

  <p class="body">어떤 말로 해서 아는 것이 아니고 영은 접하는 것이다. 그래서 우리가 하느님이 말씀하심도 우리는 영으로 듣는 것이다. 그래서 영으로 듣는데, 이걸 들을 수 있는 자가 있고 이걸 들을 수 없는 자가 있다. 하느님은 지도자하고 말씀하신다. 그러니까 나투시고 안 나투시고 하시는 게 아니고 스스로 계신다. 그래서 나투실 수 없다.</p>
</div>

<hr class="divider">

<!-- Q3 -->
<div class="q-block">
  <div class="q-num">질문 3</div>
  <div class="q-title">신의 계시를 받으면서 몸에 어떤 떨림을 경험했다는 사람들은 하느님의 말씀을 들었다고 봐야 합니까?</div>

  <p class="body">아닙니다. 우리가 신들과 접신할 때 우리는 육신을 가지고 있는 동물이기 때문에, <b>신들과 접신할 때에는 이 동물의 피부가 떨리고 여러 가지 현상들이 일어납니다. 신과 접신할 때. 이거는 신과 접신한 것이지 하느님과 접신한 것이 아니다.</b></p>

  <p class="body">하느님은 너하고 항상 같이 있기 때문에 접신하고 말 게 없다 이 말이죠. 그러나 하느님이 너에게 느낌을 줄 때에는 네가 좀 다르지요. 느낌을 주는 게 있고, 접신하는 건 틀리지요. 우리는 하느님 기운 속에 있기 때문에 우리는 항상 같이 있는 겁니다.</p>

  <!-- 그림 4: 접신(떨림) vs 하느님 느낌 비교 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 190" role="img">
      <title>접신(신과 만남)과 하느님의 느낌 비교</title>
      <desc>왼쪽은 신과의 접신(떨림·이상 현상), 오른쪽은 하느님과 항상 함께 있음(평온한 느낌)</desc>
      <rect width="640" height="190" fill="none"/>

      <!-- 왼쪽: 접신 -->
      <rect x="30" y="20" width="270" height="150" rx="8" fill="none" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="44" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#e07a30" font-weight="600">신(神)과의 접신</text>
      <!-- 사람 -->
      <ellipse cx="165" cy="105" rx="28" ry="38" fill="#2a1808" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="109" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#e07a30">🧑</text>
      <!-- 떨림 선 -->
      <path d="M100 80 Q108 68 115 80 Q122 92 130 80 Q138 68 145 80" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M185 80 Q193 68 200 80 Q207 92 215 80 Q222 68 230 80" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M100 125 Q108 113 115 125 Q122 137 130 125 Q138 113 145 125" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M185 125 Q193 113 200 125 Q207 137 215 125 Q222 113 230 125" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <!-- 신 아이콘 -->
      <ellipse cx="165" cy="62" rx="18" ry="14" fill="#3a1a08" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="67" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#e07a30">대신</text>
      <line x1="165" y1="76" x2="165" y2="68" stroke="#e07a30" stroke-width="1" marker-end="url(#a1)"/>
      <text x="165" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a6030">몸 떨림·이상 현상 발생</text>

      <!-- 오른쪽: 하느님 느낌 -->
      <rect x="340" y="20" width="270" height="150" rx="8" fill="none" stroke="#6ab0d4" stroke-width="1"/>
      <text x="475" y="44" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#6ab0d4" font-weight="600">하느님과 항상 함께</text>
      <!-- 큰 원 = 하느님 기운 -->
      <ellipse cx="475" cy="105" rx="100" ry="55" fill="#0a1520" stroke="#6ab0d4" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="475" y="66" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">하느님(천지 에너지)</text>
      <!-- 사람 안에 있음 -->
      <ellipse cx="475" cy="110" rx="28" ry="38" fill="#1a2030" stroke="#4a90b4" stroke-width="1"/>
      <text x="475" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6ab0d4">🧑</text>
      <!-- 조용한 물결 -->
      <path d="M390 100 Q410 96 430 100 Q450 104 470 100" fill="none" stroke="#4a90b4" stroke-width="0.8" opacity="0.5"/>
      <path d="M390 118 Q410 114 430 118 Q450 122 470 118" fill="none" stroke="#4a90b4" stroke-width="0.8" opacity="0.5"/>
      <text x="475" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4a7090">항상 함께 · 느낌으로 앎</text>
    </svg>
    <div class="illus-cap">그림 4 — 신(대신)과 접신하면 몸에 이상 현상이 생긴다. 그러나 하느님은 항상 우리 안에 있어 접신과 무관하다.</div>
  </div>

  <p class="body">그렇지만 차원세계와 차원세계가 틀린 영혼, 대신 이러한 신들을 접신할 때. 이거 접신할 때에는 우리가 이상 징후가 일어납니다. 몸에서. 갑자기 까무러치기도 하고, 막 떨리기도 하고 뭐가 나도 모르고 휘파람이 쌕 불기도 하고, 여러 가지 현상이 일어나, 눈물이 폭 쏟아지기도 하고. <b>이거는 영혼접신이다.</b></p>

  <p class="body">영혼이라 해서 무조건 낮은 게 아녜요. 하느님의 일을 하시는 모든 영혼 신들을 대신이라고 하는 겁니다. 대역대신이라 한다. 그렇게 해서 우리 인간들이 접신을 하면서 그쪽 라인에 메시지를 받아서 우리는 세상에서 또 행하고, 이런 것들이 세상에 이것을 전달해 놓아야 될 필요가 있을 때 그 대신이 와서 어떤 제자와 같이 접신을 해서 그 말을 남겨놓는다. 이거를 말로 해버리고 있는 자가 있고, 이걸 글로 또 기록을 해놓는 자도 있고. 이렇게 해서 기록해놓은 거는 이 세상에 남았고, 말로 하고 만 거는 소멸되었다.</p>
</div>

<hr class="divider">

<!-- Q4 -->
<div class="q-block">
  <div class="q-num">질문 4</div>
  <div class="q-title">기독교인들이 방언하는 것은 어떻게 봐야 하나요?</div>

  <p class="body">그것 또한 접신입니다. 접신은 오만 방법으로 한다. 내무부도 있고, 외무부도 있고, 총무부도 있고, 교육부도 있고 뭐가 많아요. <b>이런 신들하고 접신을 하는 겁니다.</b> 그래서 방언을 한다.</p>

  <p class="body">나한테 지금 전해는 주는데 내가 어떻게 쓰느냐 따라서 용도가 쓰이며 달라지는 거지. 분명히 나한테 전해서 세상에 내놓을 때에는 이유가 있고 뜻이 있다.</p>

  <div class="key-quote">
    <p>"나는 천신한테 받았다 이런 생각을 하려고 들지 말고. 도깨비한테 받았어도 이것이 세상에 필요해서 나오는 거니까.<br><br>
    어떤 메시지를 나한테 전했다면 이것이 세상에 잘 유용하게 쓰이게끔 하라. 잡신 또한 하느님의 일꾼이야. 세상에 모두가 운용하는 것은 하느님이 스스로 운용한다."</p>
  </div>
</div>

<hr class="divider">

<!-- Q5 -->
<div class="q-block">
  <div class="q-num">질문 5</div>
  <div class="q-title">인간이 죽으면 하느님을 만날 수 있는가요?</div>

  <p class="body">못 만납니다. 하느님은 니가 죽든 살든 같이 있는데 니가 직접 대면해서 모양으로 만나는 것은 아니라는 거죠. 하느님을 모양으로 만나는 게 아니고.</p>

  <p class="body">만일에 차원세계에 지옥이 형성되어 있다. <b>거기도 하느님의 몸 안에 있는 겁니다. 인간세계에서 뭐를 하고 있든 너는 하느님 몸 안이예요. 천지 대자연 기운 안이라는 겁니다.</b></p>

  <!-- 그림 5: 하느님 몸 안에 있는 모든 차원 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 240" role="img">
      <title>하느님 몸 안에 있는 모든 세계</title>
      <desc>하느님이라는 가장 큰 원 안에 천상계, 인간계, 지옥계가 모두 포함되어 있다</desc>
      <rect width="640" height="240" fill="none"/>
      <!-- 하느님 = 가장 큰 원 -->
      <ellipse cx="320" cy="118" rx="300" ry="108" fill="none" stroke="#f0d97a" stroke-width="1.5" stroke-dasharray="8,5"/>
      <text x="320" y="22" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="600">하느님 (천지 대자연 기운)</text>

      <!-- 천상계 -->
      <ellipse cx="200" cy="90" rx="100" ry="55" fill="#16120a" stroke="#f0d97a" stroke-width="1"/>
      <text x="200" y="82" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">천상계</text>
      <text x="200" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#c4a84d">대신·영혼들</text>

      <!-- 인간계 -->
      <ellipse cx="390" cy="90" rx="100" ry="55" fill="#0f1a10" stroke="#7abf7a" stroke-width="1"/>
      <text x="390" y="82" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#7abf7a">인간계</text>
      <text x="390" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">3차원 지구</text>

      <!-- 지옥계 -->
      <ellipse cx="295" cy="175" rx="100" ry="46" fill="#1a0808" stroke="#e05050" stroke-width="1"/>
      <text x="295" y="169" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#e05050">지옥계</text>
      <text x="295" y="184" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#a03030">방편으로 존재</text>

      <!-- 화살표 (삶→죽음→영계) -->
      <path d="M330 105 Q320 130 308 155" fill="none" stroke="#c4a84d" stroke-width="0.8" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <text x="345" y="128" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">사후</text>

      <text x="320" y="228" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#9a7a30">살아서도 죽어서도 — 모든 곳이 하느님 몸 안</text>
    </svg>
    <div class="illus-cap">그림 5 — 천상계, 인간계, 지옥계 모두 하느님의 몸 안에 있다. 어디에 있든 하느님과 분리될 수 없다.</div>
  </div>

  <p class="body">우리가 부처님 손바닥 안에 있다 그러지요? 부처님 손바닥 안에. 이게 무슨 소리냐면, 부처님은 누구냐? 스승이예요. 스승의 가르침을 받은 자는 스승 손바닥을 못 벗어난다는 소리를 하는 겁니다. <b>하느님 몸 속에서 니는 벗어날 수가 없는 것이다. 이 말이죠.</b></p>

  <p class="body">그러하듯이 우리는 하느님을 만나는 것이 아니고 스스로 하느님과 같이 있다. 너가 바르게 살지 못했다라는 걸 아르켜 주기 위해서 빚어놓은 것이 지옥이니. 지옥에 들어간다고 니가 타죽는 게 아니다 이 말이죠.</p>

  <div class="key-quote">
    <p>"오늘날 너희들이 지식이 갖추어졌으므로 뭐든지 분별할 수 있는 자가 되었다. 다 컸다.<br><br>
    너희들은 사람으로 살아나가는 시대를 열 것이니, 이제부터 이런 방편에 매이지 말라. 인자는 놓아라."</p>
  </div>
</div>

<hr class="divider">

<!-- Q6 -->
<div class="q-block">
  <div class="q-num">질문 6</div>
  <div class="q-title">천주교의 성부·성자·성신 삼위일체와 천지인(天地人)은 어떤 연관이 있는가요?</div>

  <p class="body">성부, 성자, 성신도 삼신사상에서 비로 나온 것이고, 이것이 어디서 나왔다 이런 걸 따지기 이전에, 어디가 우월하다 우수하다 이거를 놓아라. 인자부터는. 하느님의 계시를 바랄 뿐이지 어디에 나의 종교에서 나와야만 하느님의 계시다, 나의 단체에서 나와야만 하느님의 계시라는 것을 이러한 아닛된 생각을 놓아라. 그래야 하느님의 말씀을 들을 수 있느니라.</p>

  <!-- 그림 6: 천지인 = 삼위일체 = 불법승 같은 뿌리 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 210" role="img">
      <title>천지인, 삼위일체, 불법승은 같은 하나의 진리</title>
      <desc>중앙의 천지인 3기에서 기독교의 삼위일체, 불교의 불법승이 파생된 그림</desc>
      <rect width="640" height="210" fill="none"/>

      <!-- 중앙: 천지인 3기 -->
      <ellipse cx="320" cy="80" rx="95" ry="52" fill="#16120a" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="320" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="600">천(天) · 지(地) · 인(人)</text>
      <text x="320" y="90" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">3기 (三氣) — 하느님의 원 에너지</text>

      <!-- 왼쪽 화살표: 기독교 -->
      <line x1="228" y1="96" x2="165" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#a1)"/>

      <!-- 기독교 -->
      <rect x="50" y="145" width="220" height="52" rx="7" fill="#16120a" stroke="#6ab0d4" stroke-width="1"/>
      <text x="160" y="165" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#6ab0d4">성부 · 성자 · 성신</text>
      <text x="160" y="182" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">기독교·천주교 삼위일체</text>

      <!-- 오른쪽 화살표: 불교 -->
      <line x1="412" y1="96" x2="475" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#a1)"/>

      <!-- 불교 -->
      <rect x="370" y="145" width="220" height="52" rx="7" fill="#16120a" stroke="#7abf7a" stroke-width="1"/>
      <text x="480" y="165" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#7abf7a">불(佛) · 법(法) · 승(僧)</text>
      <text x="480" y="182" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">불교 삼보(三寶)</text>

      <text x="320" y="198" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">같은 진리 — 각 문화권에서 다르게 표현되었을 뿐</text>
    </svg>
    <div class="illus-cap">그림 6 — 천지인(天地人) 3기가 뿌리. 기독교의 삼위일체, 불교의 불법승은 같은 진리를 각각의 방식으로 표현한 것이다.</div>
  </div>

  <p class="body"><b>성부, 성자, 성신. 이거는 천지인 이것이 똑같은 것을 어디에서 어떤 자들이 쓰기 좋게 만들은 것이고, 불법승 이것은 천라신 지라신 인니란 — 천지인을 풀어준 것이다.</b></p>

  <p class="body">그래서 하느님의 말씀하신 이 경이 있습니다. 이 경이 뭐냐? <b>천부경이다. 하느님이 말씀하신 경은 이 천부경 하나밖에 없습니다.</b> 이것이 이 땅에 태초로 온 지도자 혈통에게 내려준 경입니다. 이것이 81자로 되어 있는데 이것은 천지창조로부터 원시반본이 될 때까지 쓸 계율과 법칙이다. 너희들이 이 속에서 살면서 지켜야 될 법칙과 계율이 81자로 압축시켜 놓은 게 천부경. 이것이 하느님의 말씀 천부경입니다.</p>

  <p class="body">이 경을 풀 수 있는 사람은 하느님의 계시를 받고, 하느님의 명령을 받은 사람만이 푸는 겁니다. 이 경을 풀고 나면 인자 진짜 <b>인본시대(人本時代)</b>가 열리는 겁니다.</p>

  <div class="key-quote">
    <p>"하느님의 말씀은 사람의 입을 통해서 전할 것이다.<br>
    깨친 자가 나와서 전할 것이니라.<br>
    그 말은 그 사람이 하는 것이 아니요, 하느님의 계시를 전할 뿐이다."</p>
  </div>
</div>

</div>
`,1:`
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=Noto+Sans+KR:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.bookdetail-html-chunk{
  --gold:#b8890a;
  --gold-dim:#9a7010;
  --gold-dark:#7a5808;
  --gold-deeper:#5a4006;
  --bg-deep:#fdf8ef;
  --bg-cover:#16120a;
  --text-body:#2a1e08;
  --text-secondary:#5a4418;
  --text-dim:#8a6828;
  --border:#e8dfc0;
  --border-light:#d8cfaa;
  --blue:#1a6090;
  --green:#2a7a3a;
  --purple:#7030a0;
  --red:#c03030;
  --orange:#c05a10;
}
.wrap{max-width:680px;margin:0 auto;padding:0 0 5rem;font-family:'Noto Sans KR',sans-serif;color:var(--text-body);background:#ffffff}

/* ── COVER ── */
.cover{
  background:var(--bg-cover);
  padding:4rem 2rem 3rem;
  text-align:center;
  border-bottom:1px solid var(--border-light);
  position:relative;
  overflow:hidden;
}
.cover::before{
  content:'';
  position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 55% at 50% 80%,rgba(192,160,40,.08) 0%,transparent 70%);
  pointer-events:none;
}
.cover-eyebrow{font-size:10px;letter-spacing:5px;color:var(--gold-dim);margin-bottom:1.2rem;text-transform:uppercase}
.cover-deco{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-bottom:1.4rem}
.cover-deco-line{flex:1;max-width:60px;height:1px;background:var(--gold-dim)}
.cover-deco-diamond{width:6px;height:6px;background:var(--gold-dim);transform:rotate(45deg)}
.cover-title{font-family:'Noto Serif KR',serif;font-size:2.2rem;font-weight:700;color:var(--gold);line-height:1.35;margin-bottom:.6rem}
.cover-subtitle{font-size:.95rem;color:var(--gold-dark);margin-bottom:.5rem}
.cover-desc{font-size:12px;color:var(--text-dim);line-height:1.8;max-width:380px;margin:.8rem auto 1.4rem}
.cover-info{font-size:11px;color:var(--text-dim);letter-spacing:1px}
.lecture-badge{display:inline-block;border:1px solid var(--gold-dim);color:var(--gold-dim);font-size:10px;letter-spacing:2px;padding:3px 10px;border-radius:2px;margin-bottom:1rem}

/* ── CHAPTER ── */
.ch-block{padding:2.2rem 1.8rem}
.ch-num{display:inline-block;background:var(--bg-deep);color:var(--gold);font-size:10px;font-weight:500;letter-spacing:3px;padding:4px 14px;border-radius:2px;margin-bottom:.9rem}
.ch-title{font-family:'Noto Serif KR',serif;font-size:1.25rem;font-weight:700;color:var(--text-body);line-height:1.5;margin-bottom:.4rem;border-left:3px solid var(--gold-dim);padding-left:.9rem}
.ch-src{font-size:11px;color:var(--text-dim);margin-bottom:1.5rem;padding-left:1.2rem;letter-spacing:.5px}
.body{font-size:15px;line-height:2.1;color:var(--text-body);margin-bottom:1rem;word-break:keep-all}
.body b{color:var(--gold-dim);font-weight:500}

/* ── ILLUSTRATION ── */
.illus-wrap{margin:1.8rem 0;background:#fdf9f0;border-radius:10px;padding:1.3rem 1rem .9rem;border:1px solid var(--border-light)}
.illus-cap{font-size:11px;color:var(--text-dim);text-align:center;margin-top:.8rem;letter-spacing:.3px;line-height:1.7}

/* ── DIVIDER ── */
.divider{border:none;border-top:1px solid var(--border);margin:0 1.8rem}
.section-divider{
  display:flex;align-items:center;justify-content:center;
  gap:.8rem;margin:0;padding:1.6rem 1.8rem;
}
.section-divider span{font-size:10px;letter-spacing:3px;color:var(--text-dim)}
.section-divider::before,.section-divider::after{content:'';flex:1;height:1px;background:#e8dfc0}

/* ── KEY QUOTE ── */
.key-quote{background:#fdf3d8;border-radius:8px;padding:1.3rem 1.5rem;margin:1.4rem 0;border-left:3px solid var(--gold-dim)}
.key-quote p{font-family:'Noto Serif KR',serif;font-size:.95rem;color:#5a3808;line-height:2}

/* ── CONCEPT BOX ── */
.concept-box{background:#f0f8f0;border:1px solid #b8d8b8;border-radius:8px;padding:1.2rem 1.4rem;margin:1.4rem 0}
.concept-box .label{font-size:10px;letter-spacing:3px;color:#2a6a3a;margin-bottom:.5rem}
.concept-box p{font-size:14px;color:#1a4a28;line-height:1.9}
</style>

<div class="wrap">

<!-- ══════════════════════════════════════════
     COVER
════════════════════════════════════════════ -->
<div class="cover">
    
    <div class="cover-sub">두번째 질문</div>
    <div class="cover-line"></div>
    <div class="cover-title">신은 우주만물의 창조주라는데</div>
    <div class="cover-title">무엇으로 증명할 수 있는가?</div>
    <div class="cover-label">삼성 故 이병철 회장이 생전에 남긴 질문들</div>
    <!--  <div class="cover-line"></div>
    <div class="cover-info">강의일 2025.01.18 · 천안</div>-->
</div>    


<!--
<div class="cover">
  <div class="cover-eyebrow">정법 강의록</div>
  <div class="lecture-badge">제 9426강 · 제 13918강</div>
  <div class="cover-deco">
    <div class="cover-deco-line"></div>
    <div class="cover-deco-diamond"></div>
    <div class="cover-deco-line"></div>
  </div>
  <div class="cover-title">천지창조와<br>신(神)의 본질</div>
  <div class="cover-subtitle">대자연은 어떻게 시작되었는가</div>
  <div class="cover-desc">태초의 공한(空寒)으로부터 빅뱅, 소우주의 탄생,<br>그리고 인간의 역할까지 — 창조의 전 과정을 밝힌다.</div>
  <div class="cover-deco">
    <div class="cover-deco-line"></div>
    <div class="cover-deco-diamond"></div>
    <div class="cover-deco-line"></div>
  </div>
  <div class="cover-info">천공 스승님 강의</div>
</div>-->


<!-- ══════════════════════════════════════════
     CHAPTER 1 — 태초의 공한
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 1 장</div>
  <div class="ch-title">태초의 공한(空寒) — 대우주의 시작</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">그 질문은 대자연의 천지창조를 풀어야 대답이 됩니다. 진화론이 있고 창조론이 있지요. 대자연이 어떻게 생겼는가부터 알아야 합니다.</p>

  <p class="body"><b>'원래 원 대자연은 공한(空寒)했다'</b> 이 공한한 대우주 상태일 때에는 우리 인간이 지구에 있었느냐? 없었어요. 공한할 때에는 대우주의 에너지가 둘로 분리되지 않았다는 말이죠.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>태초의 공한 — 분리 이전의 대우주</title>
      <defs>
        <radialGradient id="voidGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e8dfc0" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#f5f0e0" stop-opacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="640" height="200" fill="#ffffff"/>
      <!-- 별 점들 -->
      <circle cx="60" cy="30" r="1" fill="#f0d97a" opacity="0.3"/>
      <circle cx="180" cy="55" r="1.2" fill="#c4a84d" opacity="0.2"/>
      <circle cx="500" cy="20" r="1" fill="#f0d97a" opacity="0.25"/>
      <circle cx="580" cy="80" r="0.8" fill="#c4a84d" opacity="0.2"/>
      <circle cx="80" cy="160" r="1" fill="#f0d97a" opacity="0.15"/>
      <circle cx="400" cy="170" r="1.2" fill="#c4a84d" opacity="0.2"/>
      <circle cx="620" cy="150" r="0.8" fill="#f0d97a" opacity="0.18"/>
      <!-- 중심 원 = 공한한 대우주 -->
      <ellipse cx="320" cy="100" rx="260" ry="80" fill="url(#voidGrad)"/>
      <ellipse cx="320" cy="100" rx="260" ry="80" fill="none" stroke="#c8b870" stroke-width="1" stroke-dasharray="5,8"/>
      <!-- 중심 텍스트 -->
      <text x="320" y="88" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#c4a84d" font-weight="600" filter="url(#glow)">空 寒</text>
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="14" fill="#6a5010">에너지가 분리되지 않은 상태</text>
      <text x="320" y="126" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#7a6030">하나의 대우주 — 비어 있으나 가득 찬</text>
      <!-- 하단 레이블 -->
      <text x="320" y="188" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#8a7040">인간도, 물질도 없고, 시.공간 분리도 없었다</text>
    </svg>
    <div class="illus-cap">그림 1 — 태초의 공한. 에너지는 하나로 있었고, 무한우주와 유한우주의 구분도 아직 없었다.</div>
  </div>

  <p class="body">그러면 지금 둘로 분리되었습니까? 하고 물어야 되는 건데, 이것도 지금 물을 줄도 모르지요? <b>지금 대자연에는 둘로 분리가 되어 있습니다.</b> 무한우주가 있고, 유한우주가 있어요.</p>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 2 — 3:7의 법칙
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 2 장</div>
  <div class="ch-title">3:7의 법칙 — 무한우주와 유한우주</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">무한우주에 있는 에너지는 얼마나 있고 유한우주에 에너지가 얼마나 있느냐? <b>무한우주에 있는 에너지는 70%가 있고, 천지창조에 의해 따로 분리된 유한우주에는 30%가 있어요. 우주의 모든 것은 3:7의 법칙으로 운행됩니다.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 240" role="img">
      <title>3:7의 법칙 — 무한우주 70%, 유한우주 30%</title>
      <defs>
        <radialGradient id="infiniteGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f0e8d0"/>
          <stop offset="100%" stop-color="#f5f0e0"/>
        </radialGradient>
        <radialGradient id="finiteGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f0e4c8"/>
          <stop offset="100%" stop-color="#0f0904"/>
        </radialGradient>
      </defs>
      <rect width="640" height="240" fill="#ffffff"/>
      <!-- 무한우주 큰 원 (70%) -->
      <ellipse cx="240" cy="120" rx="210" ry="100" fill="url(#infiniteGrad)" stroke="#c4a84d" stroke-width="1.5" stroke-dasharray="8,5"/>
      <text x="240" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#0ba6ee" font-weight="700">무한우주</text>
      <text x="240" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#c4a84d" font-weight="300">70%</text>
      <text x="240" y="152" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">맑은 에너지</text>
      <!-- 유한우주 작은 원 (30%) -->
      <ellipse cx="520" cy="140" rx="100" ry="75" fill="url(#finiteGrad)" stroke="#e07a30" stroke-width="1.2"/>
      <text x="520" y="115" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#fdf908" font-weight="700">유한우주</text>
      <text x="520" y="148" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#c45a10" font-weight="300">30%</text>
      <text x="520" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#f74803">탁한 에너지 · 물질세계</text>
      <!-- 분리 화살표 -->
      <path d="M390 110 Q430 90 415 125" fill="none" stroke="#9a7a30" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#sep)"/>
      <defs>
        <marker id="sep" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#9a7a30"/>
        </marker>
      </defs>
      <!-- 비율 레이블 
      <text x="320" y="228" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">에너지의 분리 — 이것이 천지창조의 근거가 되는 3:7의 법칙</text>-->
    </svg>
    <div class="illus-cap">그림 2 — 3:7의 법칙. 대우주 에너지의 70%는 무한우주(맑은 에너지), 30%는 유한우주(탁한 에너지·물질)로 나뉘었다.</div>
  </div>

  <p class="body">처음에는 공한했는데 두 개가 분리됩니다. 두개를 분리되게 한 장본인 바로 인간. 창조의 주인공들이 나오는 것이 바로 이 지점이에요. 우리 인간도 에너지입니다. 에너지인데 어떤 에너지냐? 인간의 몸 육신이라고 하는 육기(肉氣) 에너지가 있고, 그 안에 들어가 있는 <b>원소(元素)라는 에너지</b>가 있습니다.</p>

  <p class="body">적절한 단어가 없어서 '원소'라고 하겠습니다. 원소라는 이 에너지는 어떠한 에너지냐? <b>'대우주에 스스로 있는, 대우주 운용을 하고 있는 이 주체 에너지들이다'</b> 이 말이죠.</p>
</div>

<div class="section-divider"><span>억업죄</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 3 — 억업죄와 탁해짐
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 3 장</div>
  <div class="ch-title">억업죄(億業罪) — 원소의 탁해짐</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">대우주 에너지 안에 하나의 세포들이 있는데, 이 세포들이 스스로 운용을 하면서 이 대자연에서 움직입니다. 이것은 자동운용입니다. 자동운용인데, <b>이것이 서로 간에 조금씩 미세하게 역행하면서 크릭이 갑니다.</b></p>

  <p class="body">크릭이 이래 가면서 에너지에 조금씩 상처를 입고, 이것이 조금씩 조금씩 탁해져요. 억업년(億業年) — 말로 만들 수 없는 엄청난 시간에 걸쳐서. 이것을 보고 <b>억업죄(億業罪)를 지었다</b>고 이야기하는 겁니다.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>원소 에너지가 억업년에 걸쳐 탁해지는 과정</title>
      <defs>
        <linearGradient id="clearToMurky" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#c4a84d" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#a07a20" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#3a2808" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="640" height="200" fill="#ffffff"/>
      <!-- 타임라인 바 -->
      <rect x="60" y="90" width="520" height="14" rx="7" fill="url(#clearToMurky)"/>
      <!-- 단계 원 -->
      <circle cx="60" cy="97" r="40" fill="#fef6e8" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="60" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#c4a84d">맑음</text>
      <text x="60" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#c4a84d">원소상태</text>

      <circle cx="250" cy="97" r="40" fill="#fdf5e8" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="250" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#c4a84d">탁해짐</text>
      <text x="250" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">역행·상처</text>

      <circle cx="450" cy="97" r="40" fill="#fef4e8" stroke="#e07a30" stroke-width="1.2"/>
      <text x="450" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#e07a30">30%</text>
      <text x="450" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#b05a10">임계점</text>

      <circle cx="580" cy="97" r="42" fill="#2a1e08" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="580" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#f0d97a">분리</text>
      <text x="580" y="110" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#f0d97a">시작</text>
      <text x="580" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="7" fill="#c4a84d"></text>

      <!-- 화살표 선 -->
      <text x="155" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>
      <text x="350" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>
      <text x="515" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>

      <!-- 레이블 -->
      <text x="60" y="160" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">태초</text>
      <text x="250" y="162" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">억업년 경과</text>
      <text x="450" y="162" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">30% 탁해짐</text>
      <text x="580" y="160" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">천지창조</div>
       </svg>
    <div class="illus-cap">그림 3 — 원소 에너지가 서로 역행하며 억업년에 걸쳐 탁해지는 과정. 30%가 탁해지는 순간 물리현상이 발생한다.</div>
  </div>

  <p class="body">탁해진 분량, 에너지가 <b>30%가 정확하게 딱 차는 순간에 이것이 대자연에 물리현상이 일어납니다.</b> 탁한 것은 무거워서 아래로 쏠리고, 맑은 것은 가벼워서 떠오릅니다. 이것이 문리가 일어나 정리가 되어버리는 거죠.</p>

  <div class="key-quote">
    <p>"대자연에서 30%의 탁한 것이 아래로 모이게 되면 무게라는 것이 생겨요. 이것이 자동으로 딱 발아(發芽)가 되면서 툭 분리가 되버립니다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 4 — 빅뱅의 탄생
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 4 장</div>
  <div class="ch-title">빅뱅(Big Bang) — 대자연 최초의 섬광</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">30% 에너지들이 전부 다 일정한 곳으로 확 몰리고, 서로가 서로의 에너지를 당기기 시작하는 거죠. 에너지 법칙은 끼리끼리 놀게 되어 있어요. 탁한 것들이 전부 다 서로 힘을 당기기 시작하면서 밑에서도 오고, 위에서도 오고, 옆에서도 오고 — 일정한 곳으로 모이기 시작합니다.</p>

  <p class="body">이 에너지가 모이는 것이 시간이 갈수록 속도를 내면서 <b>가속이 붙습니다. 가속이 배가, 배가, 또 배가</b> — 이런 식으로 속도가 붙어 어마어마한 속도가 됩니다. 그러다 한 일점(一點)으로 쫙 모여들면서, <b>이것이 한점으로 딱 받치는 순간 어마어마한 폭팔이 일어납니다. 이것이 과학자들이 말하는 '빅뱅'이라는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 260" role="img">
      <title>빅뱅 — 에너지가 한 점으로 모여 폭발하는 순간</title>
      <defs>
        <radialGradient id="bangGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8e0" stop-opacity="1"/>
          <stop offset="15%" stop-color="#f0d97a" stop-opacity="0.9"/>
          <stop offset="40%" stop-color="#c45a10" stop-opacity="0.6"/>
          <stop offset="70%" stop-color="#6a1a04" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#080604" stop-opacity="0"/>
        </radialGradient>
        <filter id="bigGlow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d" opacity="0.7"/>
        </marker>
      </defs>
      <rect width="640" height="260" fill="#ffffff"/>

      <!-- 수렴 화살표들 -->
      <line x1="60" y1="40" x2="300" y2="125" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="320" y1="20" x2="320" y2="108" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="580" y1="40" x2="340" y2="125" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="60" y1="200" x2="300" y2="140" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="580" y1="200" x2="340" y2="140" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="160" y1="30" x2="308" y2="118" stroke="#e07a30" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.4" marker-end="url(#arr)"/>
      <line x1="480" y1="30" x2="332" y2="118" stroke="#e07a30" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.4" marker-end="url(#arr)"/>

      <!-- 빅뱅 중심 -->
      <circle cx="320" cy="130" r="95" fill="url(#bangGrad)" filter="url(#bigGlow)"/>
      <circle cx="320" cy="130" r="28" fill="#fff9e8" opacity="0.95"/>
      <text x="320" y="120" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#2a1e08" font-weight="700">빅뱅</text>
      <text x="320" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#5a4010">一點</text>

      <!-- 섬광 선들 -->
      <line x1="320" y1="108" x2="320" y2="50" stroke="#f0d97a" stroke-width="0.8" opacity="0.4"/>
      <line x1="338" y1="113" x2="390" y2="64" stroke="#f0d97a" stroke-width="0.8" opacity="0.35"/>
      <line x1="302" y1="113" x2="250" y2="64" stroke="#f0d97a" stroke-width="0.8" opacity="0.35"/>
      <line x1="342" y1="130" x2="405" y2="130" stroke="#f0d97a" stroke-width="0.8" opacity="0.3"/>
      <line x1="298" y1="130" x2="235" y2="130" stroke="#f0d97a" stroke-width="0.8" opacity="0.3"/>

      <text x="320" y="250" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">탁한 에너지가 한 점으로 모여 충돌 — 말할 수 없는 온도와 섬광이 일어난다</text>
    </svg>
    <div class="illus-cap">그림 4 — 빅뱅. 탁한 에너지가 배가(倍加)의 속도로 한 일점(一點)에 모여 충돌하면서 엄청난 섬광과 열이 발생한다.</div>
  </div>

  <p class="body">지금 과학으로 이야기하는 빅뱅의 섬광이라는 것이 이것입니다. 전부 다 한쪽에 모여가지고 어마어마한 속도로 비물질 에너지들이 한점으로 딱 받치는 순간에 엄청난 섬광이 일어나서 말할 수 없는 온도가 일어나요. 이것이 열처리가 되면서 <b>거대한 힘이 생기고, 모든 에너지가 열처리 되면서 밀어내기 시작합니다. 이 힘으로 — 열의 힘 때문에.</b></p>

  <p class="body">이것이 밀어내면서 팽창해요. 열로 해서 움직인다는 얘기지요. 이것이 지금 소우주(小宇宙)가 팽창하고 있다는 것입니다.</p>
</div>

<div class="section-divider"><span>소우주의 탄생</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 5 — 소우주의 팽창
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 5 장</div>
  <div class="ch-title">소우주(小宇宙)의 탄생과 팽창</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">이 30% 에너지가 열처리되면서 공간에서 아직도 팽창 중입니다. <b>아직까지 열처리가 일어나고 있기 때문이죠.</b> 이동해서 터지고, 모여서 또 이동해서 터지고 하는 열처리가 계속 일어나요.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 290" role="img">
      <title>무한우주 안에서 소우주(유한우주)가 팽창하는 구조</title>
      <defs>
        <!-- 무한우주: 밝고 따뜻한 황금빛 -->
        <radialGradient id="infUni5" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#fff8e8"/>
          <stop offset="55%"  stop-color="#fef3d0"/>
          <stop offset="100%" stop-color="#f5e8b8"/>
        </radialGradient>
        <!-- 소우주: 하늘색 계열, 어둡게 -->
        <radialGradient id="finUni5" cx="50%" cy="45%" r="55%">
          <stop offset="0%"   stop-color="#1a3a5c"/>
          <stop offset="50%"  stop-color="#0d2640"/>
          <stop offset="100%" stop-color="#081828"/>
        </radialGradient>
        <!-- 태양 빛 -->
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#fff5a0"/>
          <stop offset="60%"  stop-color="#f0c030"/>
          <stop offset="100%" stop-color="#c88010"/>
        </radialGradient>
        <!-- 지구 -->
        <radialGradient id="earthGrad" cx="40%" cy="35%" r="55%">
          <stop offset="0%"   stop-color="#60b8e0"/>
          <stop offset="45%"  stop-color="#2878b8"/>
          <stop offset="100%" stop-color="#104880"/>
        </radialGradient>
        <!-- 은하 -->
        <radialGradient id="galaxyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#e8d8ff"/>
          <stop offset="50%"  stop-color="#a080e0"/>
          <stop offset="100%" stop-color="#503090"/>
        </radialGradient>
        <!-- 팽창 화살표 -->
        <marker id="expArr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a90c0"/>
        </marker>
        <!-- 별빛 필터 -->
        <filter id="starGlow5">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sunGlow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="640" height="290" fill="#f8f4ec"/>

      <!-- ① 무한우주 — 밝고 넓은 황금빛 타원 -->
      <ellipse cx="320" cy="148" rx="300" ry="128" fill="url(#infUni5)" stroke="#c8a030" stroke-width="1.8" stroke-dasharray="9,6"/>

      <!-- 무한우주 레이블 -->
      <text x="320" y="26" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#8a6010" font-weight="700">무한우주 (70%) — 맑고 밝은 에너지</text>

      <!-- ② 소우주 — 어두운 하늘색 타원 (무한우주 안에) -->
      <ellipse cx="320" cy="162" rx="188" ry="95" fill="url(#finUni5)" stroke="#4a90c0" stroke-width="2"/>

      <!-- 소우주 안 별들 (작은 흰 점) -->
      <circle cx="240" cy="130" r="1.2" fill="#ffffff" opacity="0.7" filter="url(#starGlow5)"/>
      <circle cx="280" cy="118" r="0.9" fill="#ffffff" opacity="0.6"/>
      <circle cx="370" cy="122" r="1.1" fill="#ffffff" opacity="0.7" filter="url(#starGlow5)"/>
      <circle cx="400" cy="140" r="0.8" fill="#ffffff" opacity="0.5"/>
      <circle cx="255" cy="168" r="0.8" fill="#ffffff" opacity="0.5"/>
      <circle cx="388" cy="175" r="1.0" fill="#ffffff" opacity="0.6"/>
      <circle cx="340" cy="108" r="0.7" fill="#ffffff" opacity="0.5"/>
      <circle cx="300" cy="195" r="0.8" fill="#ffffff" opacity="0.4"/>
      <circle cx="420" cy="160" r="0.9" fill="#ffffff" opacity="0.5"/>

      <!-- 은하 — 나선 모양 표현 -->
      <g transform="translate(248,178)">
        <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#galaxyGrad)" opacity="0.9" transform="rotate(-20)"/>
        <ellipse cx="0" cy="0" rx="14" ry="6" fill="#d0b8ff" opacity="0.6" transform="rotate(-20)"/>
        <circle  cx="0" cy="0" r="3.5" fill="#fff8ff" opacity="0.95" filter="url(#starGlow5)"/>
        <!-- 나선팔 암시 -->
        <path d="M3,-5 Q10,-12 18,-8" fill="none" stroke="#c0a0f0" stroke-width="1.2" opacity="0.6" transform="rotate(-20)"/>
        <path d="M-3,5 Q-10,12 -18,8" fill="none" stroke="#c0a0f0" stroke-width="1.2" opacity="0.6" transform="rotate(-20)"/>
      </g>
      <text x="248" y="200" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#d8c8ff" font-weight="500">은하</text>

      <!-- 태양 — 빛나는 노란 원 -->
      <g transform="translate(340,148)">
        <circle cx="0" cy="0" r="18" fill="#f5e080" opacity="0.35" filter="url(#sunGlow)"/>
        <circle cx="0" cy="0" r="13" fill="url(#sunGrad)" filter="url(#sunGlow)"/>
        <!-- 태양 코로나 빛살 -->
        <line x1="0" y1="-17" x2="0" y2="-22" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="12" y1="-12" x2="16" y2="-16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="17" y1="0" x2="22" y2="0" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="12" y1="12" x2="16" y2="16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="0" y1="17" x2="0" y2="22" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-12" y1="12" x2="-16" y2="16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-17" y1="0" x2="-22" y2="0" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-12" y1="-12" x2="-16" y2="-16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
      </g>
      <text x="340" y="176" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#f8e080" font-weight="500">태양</text>

      <!-- 지구 — 태양 주위 궤도 -->
      <ellipse cx="340" cy="148" rx="46" ry="14" fill="none" stroke="#4090c0" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
      <g transform="translate(384,155)">
        <circle cx="0" cy="0" r="8" fill="url(#earthGrad)"/>
        <!-- 대륙 암시 -->
        <ellipse cx="-2" cy="-1" rx="4" ry="3" fill="#4a9a40" opacity="0.7" transform="rotate(-15)"/>
        <ellipse cx="2" cy="2" rx="2.5" ry="2" fill="#4a9a40" opacity="0.6" transform="rotate(20)"/>
      </g>
      <text x="388" y="176" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#80d0ff" font-weight="500">지구</text>

      <!-- 소우주 레이블 (상단) -->
      <text x="320" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#a0d0f0" font-weight="700">소우주 · 유한우주 (30%)</text>
      <text x="320" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6aa8d0">팽창 중인 물질 우주</text>

      <!-- 팽창 화살표 (소우주 바깥으로) -->
      <path d="M134 155 L78 145" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <path d="M506 155 L562 145" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <path d="M320 68 L320 30" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <text x="56" y="144" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="5" fill="#6a90b0">팽창</text>
      <text x="584" y="144" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="5" fill="#6a90b0">팽창</text>

      <!-- 하단 설명 -->
      <text x="320" y="272" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">소우주는 무한우주 안 70% 선에 위치하며 아직도 팽창 중</text>
    </svg>
    <div class="illus-cap">그림 5 — 밝은 무한우주(70%) 안에 위치한 어두운 하늘빛 소우주(유한우주·30%). 소우주 안에는 은하·태양·지구가 존재하며, 지금도 팽창하고 있다.</div>
  </div>

  <p class="body">우주가 이만하다고 치면, 유한우주·물질우주는 요만하다고 치면 3:7의 법칙으로 70% 선에 있어야 될 겁니다. 이것이 아직까지 팽창을 하고 있는 중이에요. <b>조금씩 미세하게 하지만 이것도 아직도 팽창 중입니다.</b> 이 팽창하고 있는 것이 계속 내 공간을 더 늘려나간다라는 거죠.</p>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 6 — 천지창조의 의미
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 6 장</div>
  <div class="ch-title">천지창조(天地創造)의 의미</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">그래서 여기에 무한우주, 여기에는 유한우주. 이렇게 해가지고 지금 천지창조라는 게 일어났다. 천지창조는 무엇을 이야기하느냐?</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>천지창조의 의미 — 천(天)과 지(地)의 정의</title>
      <rect width="640" height="200" fill="#ffffff"/>

      <!-- 왼쪽: 천(天) -->
      <rect x="30" y="30" width="265" height="140" rx="8" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.2"/>
      <text x="162" y="62" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="22" fill="#f0d97a" font-weight="700">天</text>
      <text x="162" y="84" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#c4a84d">무(無)의 에너지</text>
      <text x="162" y="103" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">무한우주 · 맑은 에너지</text>
      <text x="162" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">깨끗한 에너지가 있는 곳</text>
      <text x="162" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">천상(天上) · 정신세계</text>
      <text x="162" y="158" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#8a7040">= 70%의 에너지</text>

      <!-- 가운데 + -->
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#6a5010">+</text>

      <!-- 오른쪽: 지(地) -->
      <rect x="345" y="30" width="265" height="140" rx="8" fill="#fef4e8" stroke="#e07a30" stroke-width="1.2"/>
      <text x="478" y="62" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="22" fill="#e07a30" font-weight="700">地</text>
      <text x="478" y="84" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#c47a30">유한우주 · 물질</text>
      <text x="478" y="103" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a5a20">탁한 에너지가 만들어진 곳</text>
      <text x="478" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">지구 + 은하계 통합</text>
      <text x="478" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#5a3008">물질세계 · 현실</text>
      <text x="478" y="158" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#3a1804">= 30%의 에너지</text>

      
    </svg>
    <div class="illus-cap">그림 6 — 천지창조의 구조. 천(天)은 무한우주·맑은 에너지, 지(地)는 유한우주·탁한 에너지·물질세계. 이 둘이 창조를 이룬다.</div>
  </div>

  <p class="body"><b>무(無)의 에너지를 천이라 하고, 아직까지 천상 — 깨끗한 에너지가 그냥 있는 곳이다. 이게 천(天).</b> 그다음 유한우주, 물질이 있는 곳, 탁한 곳 — 탁한 곳이 만들어진 게 지(地). 지구와 은하계를 다 합해서 지라 한다. 천지창조 — 이렇게 일어나는 겁니다.</p>
</div>

<div class="section-divider"><span>창조물의 본질</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 7 — 창조물과 하느님의 몸
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 7 장</div>
  <div class="ch-title">창조된 모든 물질 — 하느님의 몸이 스스로 변한 것</div>
  <div class="ch-src">출처 · 제 9426강 · 제 13918강</div>

  <p class="body">우주 만물의 창조물이라고 하는데, 하느님 자체가 대자연의 에너지이기 때문에 스스로 만드는 거예요. 지금 창조라고 이야기하는 것은 물질을 이야기하는 겁니다. <b>에너지 갖고 물질로 변화시키는 것을 이야기하는 거예요.</b></p>

  <p class="body">그래서 우리 몸도 신께서 만들었다고 이야기하는 게 맞는 겁니다. 우리 육신은 신께서 만든 게 맞습니다. 무한한 변화 속에서 이 몸을 만들기 위한 세포까지도, 세포 안에 우리 미네랄까지도 신께서 만들었습니다. 이게 창조물이죠.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>하느님의 몸이 에너지에서 물질로 변화하는 창조 과정</title>
      <defs>
        <linearGradient id="transGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#c4a84d" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#e07a30" stop-opacity="0.8"/>
        </linearGradient>
        <marker id="transArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="220" fill="#ffffff"/>

      <!-- 단계 1: 대자연 에너지 -->
      <rect x="20" y="60" width="130" height="90" rx="8" fill="#fdf8ef" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="85" y="98" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#f0d97a">대자연</text>
      <text x="85" y="114" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#f0d97a">에너지</text>
      <text x="85" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">하느님의 몸</text>

      <!-- 화살표 -->
      <line x1="155" y1="105" x2="195" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="175" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">변화</text>

      <!-- 단계 2: 행성/원소 -->
      <rect x="200" y="60" width="130" height="90" rx="8" fill="#f4f8f4" stroke="#7abf7a" stroke-width="1.2"/>
      <text x="265" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#7abf7a">행성·원소</text>
      <text x="265" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">태양계·지구</text>
      <text x="265" y="130" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#3a6f3a">수억 년 작업</text>

      <!-- 화살표 -->
      <line x1="335" y1="105" x2="375" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="355" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">담금질</text>

      <!-- 단계 3: 생명 -->
      <rect x="380" y="60" width="130" height="90" rx="8" fill="#f0f4fa" stroke="#1a6090" stroke-width="1.2"/>
      <text x="445" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#6ab0d4">생명 잉태</text>
      <text x="445" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">세포·미네랄</text>
      <text x="445" y="130" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#2a6094">자연 진화</text>

      <!-- 화살표 -->
      <line x1="515" y1="105" x2="555" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="535" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">완성</text>

      <!-- 단계 4: 인간 -->
      <rect x="560" y="60" width="65" height="90" rx="8" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.2"/>
      <text x="592" y="100" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#b070d4">인간</text>
      <text x="592" y="118" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#8040a4">창조물</text>
      <text x="592" y="134" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6020a0">완성품</text>

      <!-- 하단 레이블 -->
      <text x="320" y="200" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">에너지 → 물질 → 생명 → 인간 — 하느님 몸이 스스로 변하며 이루어지는 창조</text>
      <text x="320" y="215" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6030">이것을 천지기운(天地氣運)이라 한다</text>
    </svg>
    <div class="illus-cap">그림 7 — 대자연 에너지(하느님의 몸)가 행성·원소·생명·인간으로 변화하는 창조 과정. 자연 진화도 하느님의 변화 속에서 일어난다.</div>
  </div>

  <p class="body">몇 십억 년 전에 우리 태양계를 만들 때까지 몇 백 년 동안 계속 물질을 생산하여, 이 물질들이 일로 모여들게 해서 여기서 태양계가 만들어졌고 지구가 만들어졌고, 지구를 두드리고 담금질을 해가지고 여기서 변화를 일으켜가지고 결국은 생명을 잉태했고, <b>생명 안에는 모든 이게 원소들이 들어가 있는 거죠.</b></p>

  <p class="body">이 육신을 하느님이 만드는 게 맞습니다. <b>자연 진화라고 하는 것이 이것이 전부 다 하느님의 변화 속에 일어나는 것이다. 하느님의 에너지가 변화하면서 일어나는 거예요. 그래서 만물 창조라는 게 하느님 몸이 스스로 변해가며 만들어지는 것이다.</b></p>

  <div class="key-quote">
    <p>"대자연의 에너지 자체가 만물 창조의 작품이다. 이것을 천지기운(天地氣運)이라 한다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 8 — 인기(人氣) — 천지인 삼기
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 8 장</div>
  <div class="ch-title">인기(人氣) — 천지인 삼기(三氣)의 완성체</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">천지기운 말고 하나의 에너지가 있습니다. 지금 우리가 붙여 놓은 이름 '인기(人氣)'라고 하는 거예요. <b>인기는 삼기(三氣)를 동시에 만들어서 해가지고 인기라고 되어 있는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>인기(人氣) = 천기(天氣) + 지기(地氣) + 인기(人氣) — 삼기의 합</title>
      <defs>
        <marker id="tArr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="230" fill="#ffffff"/>

      <!-- 천(天) -->
      <circle cx="200" cy="85" r="55" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.3"/>
      <text x="200" y="78" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="18" fill="#f0d97a" font-weight="700">天</text>
      <text x="200" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">천기</text>
      <text x="200" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">정신·무한</text>

      <!-- 지(地) -->
      <circle cx="440" cy="85" r="55" fill="#fef4e8" stroke="#e07a30" stroke-width="1.3"/>
      <text x="440" y="78" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="18" fill="#e07a30" font-weight="700">地</text>
      <text x="440" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c47a30">지기</text>
      <text x="440" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a5a20">물질·유한</text>

      <!-- 합산 화살표 -->
      <line x1="258" y1="100" x2="295" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#tArr)" opacity="0.7"/>
      <line x1="382" y1="100" x2="345" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#tArr)" opacity="0.7"/>

      <!-- 원소 (위에서 내려옴) -->
      <line x1="320" y1="20" x2="320" y2="130" stroke="#b070d4" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#tArr)" opacity="0.7"/>
      <text x="320" y="14" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#b070d4">원소 에너지</text>

      <!-- 인기(人氣) — 합 -->
      <ellipse cx="320" cy="168" rx="100" ry="44" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.5"/>
      <text x="320" y="160" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="16" fill="#d4a0f0" font-weight="700">人氣 (인기)</text>
      <text x="320" y="178" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9060c0">천·지·원소 삼기의 완성체</text>

      <text x="320" y="218" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">천지기운 안에 원소가 들어와 이루어진 것 — 이것이 인신(人神)이다</text>
    </svg>
    <div class="illus-cap">그림 8 — 인기(人氣)의 구조. 천기(天氣)·지기(地氣)·원소가 어우러진 작품이 인기이며, 이것을 인신(人神)이라 한다.</div>
  </div>

  <p class="body">삼기 천·지·인 삼기가 어우러진 작품이 지금 인기라고 이야기하고 인신(人神)이라고 이야기하는 거예요. 사람의 신. 그러니까 천지기운이 다 들어가 있고, 원소가 이 안에 있기 때문에 이것이 하나의 작품이 되어 있는 거예요. 이것을 보고 인기라고 이야기하고 신이라고 이야기한다.</p>

  <p class="body">그 인신들이 진화를 하면서 윤회하면서 계속 진화를 해가지고 <b>인신이 제대로 전부 다 정리가 된 이때가 2012년 12월 22일까지입니다. 진화 끝! 인기의 완성품 진화가 끝나는 겁니다.</b></p>

  <div class="concept-box">
    <div class="label">다음 코스 · 우주</div>
    <p>인간이 진화가 끝나고 나면 우리는 어디로 달려가느냐 — 자연으로 달려가고, 우주로 나가려고 해요. 그다음 코스이기 때문입니다. 인간으로 땅에서 전부 다 완성되고 나면 그다음 코스를 가는 게 우주예요. <b>우리 대한민국 사람은 우주 공부를 해야만 되는 겁니다.</b></p>
  </div>
</div>

<div class="section-divider"><span>물질과 비물질</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 9 — 물질 에너지와 비물질 에너지
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 9 장</div>
  <div class="ch-title">물질 에너지와 비물질 에너지</div>
  <div class="ch-src">출처 · 제 13918강</div>

  <p class="body">모든 것을 창조한 것은 아닙니다. 물질로 갖고 변화 창조를 하는 거지, 그러면 신께서 — 하느님이 창조 못하는 게 딱 하나 있습니다. <b>신들이라고 이야기하는 내 자신. 개체 신. 영혼 신. 요거는 물질 에너지가 아니고 비물질 에너지라고 하는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>물질 에너지(하느님)와 비물질 에너지(원소·영혼신)의 구조</title>
      <rect width="640" height="220" fill="#ffffff"/>

      <!-- 물질 에너지 = 하느님 -->
      <rect x="30" y="40" width="270" height="140" rx="10" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.3"/>
      <text x="165" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="700">물질 에너지</text>
      <text x="165" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#c4a84d">= 하느님</text>
      <text x="165" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">별·지구·은하·육신</text>
      <text x="165" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">만물을 창조하고 운용</text>
      <text x="165" y="150" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6030">천지 대자연 기운</text>
      <text x="165" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#8a7040">스스로 변화하며 만물을 빚음</text>

      <!-- 중간 vs -->
      <text x="320" y="118" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#6a5010">VS</text>

      <!-- 비물질 에너지 = 원소·영혼신 -->
      <rect x="340" y="40" width="270" height="140" rx="10" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.3"/>
      <text x="475" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#b070d4" font-weight="700">비물질 에너지</text>
      <text x="475" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#9050c0">= 원소 · 영혼신</text>
      <text x="475" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7040a0">개체 신 · 영혼</text>
      <text x="475" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#5030a0">하느님이 창조 못한 에너지</text>
      <text x="475" y="150" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4020a0">말·지식·진리를 생산</text>
      <text x="475" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#301898">우주를 운용하는 주체</text>

      <!-- 하단 -->
      <text x="320" y="205" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">두 에너지가 공동으로 작업하여 만물이 생산된다</text>
    </svg>
    <div class="illus-cap">그림 9 — 물질 에너지(하느님)와 비물질 에너지(원소·영혼신). 하느님은 만물을 창조하지만, 개체 신(영혼신)은 하느님이 창조하지 못한 별도의 에너지이다.</div>
  </div>

  <p class="body">비물질 에너지가 있고, 물질 에너지가 있는데, 물질 에너지는 하느님. 비물질 에너지는 개체 신들. 그러면 우리 인간은 물질을 덮어 쓴, 물질을 연장으로 쓰고 내가 지금 활동을 하고 있는 지구촌의 <b>비물질 에너지 개체 신. 그래서 영혼신이라고 해요.</b></p>

  <p class="body">그러면 이 비물질 에너지가 없으면 어떻게 되냐? <b>천지기운은 가만히 계시사 운용이 안 되고 그냥 있는 겁니다. 그러면 우리 비물질 에너지들이 활동 속에서 일으키는 이 말의 질량, 이것 때문에 대자연의 천지기운이 운용이 되고 있는 거예요. 우리가 이 우주를 움직이는 주체라는 거죠.</b></p>

  <div class="key-quote">
    <p>"말의 질량이 높아질 때 우주를 운행할 수 있어지는 겁니다. 우리가 한 말 에너지가 전부 다 비물질 에너지예요. 이걸 조금 더 이렇게 생산의 질량이 높아지니까 이걸 지식이라고 이야기하고, 질량이 더 높은 말을 하니까 이걸 진리라고 이야기한다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 10 — 지식의 주인은 인간이다
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 10 장</div>
  <div class="ch-title">지식(知識)의 주인은 인간이다</div>
  <div class="ch-src">출처 · 제 9426강 · 제 13918강</div>

  <p class="body">그래서 모든 창조는 천지 대자연의 에너지가 하는 겁니다. 이것이 신이고, 그러니까 창조주가 맞는 거죠. <b>만물을 창조주는 하느님의 한 게 맞아요.</b></p>

  <p class="body">그러면 이게 창조주인데, 여기서 <b>지식주(知識主)는 누구일까? 지식의 주인, 하느님일까? 인간이에요. 지식의 주인은 인간이다. 영혼도 아니고 원소도 아니고 인간이에요. 지식은 인간이 배양하는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>창조주(하느님)와 지식주(인간)의 역할 분담</title>
      <defs>
        <marker id="roleArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="230" fill="#ffffff"/>

      <!-- 하느님 = 창조주 -->
      <ellipse cx="180" cy="110" rx="145" ry="75" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="180" y="85" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#f0d97a" font-weight="700">하느님</text>
      <text x="180" y="105" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#c4a84d">창조주(創造主)</text>
      <text x="180" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">물질 에너지로</text>
      <text x="180" y="142" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">만물을 창조</text>

      <!-- 화살표 양쪽 -->
      <line x1="328" y1="95" x2="312" y2="95" stroke="#c4a84d" stroke-width="1" marker-end="url(#roleArr)"/>
      <line x1="312" y1="125" x2="328" y2="125" stroke="#c4a84d" stroke-width="1" marker-end="url(#roleArr)"/>
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">협력</text>

      <!-- 인간 = 지식주 -->
      <ellipse cx="460" cy="110" rx="145" ry="75" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.5"/>
      <text x="460" y="85" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#b070d4" font-weight="700">인간</text>
      <text x="460" y="105" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#9050c0">지식주(知識主)</text>
      <text x="460" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7040a0">비물질 에너지로</text>
      <text x="460" y="142" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#5030a0">지식과 진리를 배양</text>

      <!-- 하단 -->
      <text x="320" y="205" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#c4a84d" font-weight="600">창조주는 하느님 · 지식주는 인간</text>
      <text x="320" y="222" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">함께 창조하고 함께 우주를 운행한다</text>
    </svg>
    <div class="illus-cap">그림 10 — 창조주(하느님)와 지식주(인간)의 역할. 하느님은 물질 에너지로 만물을 창조하고, 인간은 비물질 에너지(말·지식·진리)로 우주를 운용한다.</div>
  </div>

  <p class="body">그래서 인간 육신이 필요했던 거예요. 육신은 하느님의 작품으로 필요했던 거고, 이 작품 속에 우리가 영혼이 들어가서 이걸 이제부터 발전을 시키는 거죠. 이래서 지식이 탄생을 합니다.</p>

  <p class="body">지식이 뭐냐면 이 컵의 이름을 만드는 게 지식이에요. 지식이 무르익고 나면 뭐든지 대상을 증명해요. 컵 중에서도 이것은 크리스털이라고 이름까지 붙여. <b>사람마다 이름을 만들고 사람마다 관리할 수 있는 이러한 공부도 하고 있고 그러면서 생각하는 거예요. 이런 모두 지식의 주인은 인간으로서 비롯되는 거죠.</b></p>

  <p class="body">인간들이 만들어 놓은 것은 하느님과 우리 원소가 같이 만든 작품이기 때문에 인간이에요 이게. 그럼 이 인간이 작품을 만들어서 <b>앞으로 미래의 우주를 통치한다. 우주를 운행한다.</b> 이 말이죠.</p>

  <div class="key-quote">
    <p>"창조물은 신의 몸으로 스스로 빚은 것이다.<br><br>
    그것을 가지고 우리는 같이 지금 쓰기 위해서 — 인간 육신 창조물까지 해놓은 것을 여기에 쫘악 들어와가지고, 우리는 같이 이 창조물을 쓰고 있는 거라.<br><br>
    이렇게 이해하면 됩니다."</p>
  </div>

  <p class="body">그렇게 해서 모든 게 앞으로는 이 세상에 인기들이 오면 육신을 쓰면 완성품으로 다 오는데, 이것이 어떤 역할을 하고 마무리를 할 거냐 — <b>지금 이 시대에 있는 것이다.</b></p>
</div>

<div class="section-divider"><span>◇</span></div>

</div>
`},totalRating:9,ratingCount:5,reviews:[{id:"r1",user:"reader1***",date:"2024.03.15",rating:5,tag:"추천해요",content:"깊은 성찰을 담은 책입니다. 신의 존재에 대해 진지하게 생각하게 됩니다.",type:"구매자"},{id:"r2",user:"book_lover**",date:"2024.01.20",rating:4,tag:"도움돼요",content:"인생의 근본적인 질문들을 다루고 있어 인상적이었습니다.",type:"구매자"}]},Zf={"enterprise-new":Bo,"god-1":hc},Jf=e=>e.trim()?/^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]/.test(e)?"chunk-title-1":/^\d+\./.test(e.trim())?"chunk-title-2":/^\d+\)/.test(e.trim())?"chunk-title-3":"chunk-body":"chunk-body",Jl=(e,t)=>{const n=e.match(/^\[IMG:([^\|]+)\|?([^\]]*)\]$/);if(n){const[,r,l]=n;return a.jsxs("span",{className:"chunk-img-wrap",children:[a.jsx("img",{src:r,alt:l,className:"chunk-img"}),l&&a.jsx("span",{className:"chunk-img-caption",children:l})]},t)}return a.jsxs("span",{className:Jf(e),children:[e,a.jsx("br",{})]},t)};function e0({selectedBook:e,bookDetailRef:t}){var Dt,Ft;const n=Zf[e.id]||fc[e.id],[r,l]=I.useState("소개"),[i,o]=I.useState(!1),[s,u]=I.useState(!1),[d,v]=I.useState(0),[y,m]=I.useState(()=>{try{const p=localStorage.getItem(`reviews_${e.id}`);return p?JSON.parse(p):[]}catch{return[]}}),[w,N]=I.useState(""),[j,F]=I.useState(5),[f,c]=I.useState("추천해요");I.useEffect(()=>{try{const p=localStorage.getItem(`reviews_${e.id}`);m(p?JSON.parse(p):[])}catch{m([])}},[e.id]);const h=p=>{localStorage.setItem(`reviews_${e.id}`,JSON.stringify(p)),m(p)},g=()=>{if(!w.trim())return alert("리뷰 내용을 입력해주세요.");const p={id:`user_${Date.now()}`,user:"나",date:new Date().toLocaleDateString("ko-KR").replace(/\. /g,".").replace(".",""),rating:j,tag:f,content:w.trim(),type:"작성자",isOwn:!0};h([p,...y]),N("")},z=p=>{window.confirm("리뷰를 삭제하시겠습니까?")&&h(y.filter(S=>S.id!==p))},E=I.useRef(null),R=I.useRef(null),_=I.useRef(null),U=I.useRef([]),T=I.useRef(!1),ue=I.useRef("소개"),De=I.useRef(null),tt=I.useCallback(p=>{const S=document.querySelector(".right-side");if(!S||!(p!=null&&p.current))return;const P=S.getBoundingClientRect().top,K=p.current.getBoundingClientRect().top,H=S.scrollTop+(K-P)-53;S.scrollTo({top:H,behavior:"smooth"})},[]),sr=p=>{if(ue.current=r,l(p),p==="책속으로"&&u(!1),T.current=!0,setTimeout(()=>{T.current=!1},1e3),p==="리뷰")return;const S={소개:E,목차:R,책속으로:_};ue.current==="리뷰"?setTimeout(()=>tt(S[p]),50):tt(S[p])},ar=I.useCallback(p=>{console.log("chunkIndex:",p),De.current=p,u(!0),ue.current=r,l("책속으로"),v(S=>S+1)},[r]);return I.useEffect(()=>{if(De.current===null)return;const p=De.current;De.current=null,requestAnimationFrame(()=>{requestAnimationFrame(()=>{const S=document.querySelector(".right-side");if(!S)return;let P=null;if(p===0?P=_.current:U.current[p-1]&&(P=U.current[p-1]),P){const K=S.getBoundingClientRect().top,H=P.getBoundingClientRect().top,He=S.scrollTop+(H-K)-53;S.scrollTo({top:He,behavior:"smooth"})}})})},[d]),I.useEffect(()=>{const p=document.querySelector(".right-side");if(!p)return;const S=()=>{if(T.current||r==="리뷰")return;const P=[{tab:"소개",ref:E},{tab:"목차",ref:R},{tab:"책속으로",ref:_}];let K="소개";P.forEach(({tab:H,ref:He})=>{He.current&&He.current.getBoundingClientRect().top<120&&(K=H)}),l(K)};return p.addEventListener("scroll",S),()=>p.removeEventListener("scroll",S)},[r]),I.useEffect(()=>{t&&(t.current=ar)},[ar]),n?a.jsxs("div",{className:"bookdetail-wrap",children:[a.jsxs("section",{className:"bookdetail-hero",children:[a.jsx("div",{className:"bookdetail-cover-wrap",children:a.jsx("img",{src:n.cover,alt:n.title,className:"bookdetail-cover"})}),a.jsxs("div",{className:"bookdetail-purchase",children:[a.jsx("div",{className:"bookdetail-badges",children:n.badges.map((p,S)=>a.jsx("span",{className:"bookdetail-badge",children:p},S))}),a.jsxs("div",{className:"bookdetail-price-wrap",children:[a.jsxs("span",{className:"bookdetail-discount-rate",children:[n.discountRate,"%"]}),a.jsxs("span",{className:"bookdetail-price",children:[n.discountPrice.toLocaleString(),"원"]}),a.jsxs("span",{className:"bookdetail-original-price",children:[n.price.toLocaleString(),"원"]})]}),a.jsxs("div",{className:"bookdetail-points",children:[a.jsx("span",{className:"bookdetail-points-label",children:"적립/혜택"}),a.jsxs("span",{className:"bookdetail-points-value",children:[n.points.toLocaleString(),"P"]})]}),a.jsxs("div",{className:"bookdetail-delivery",children:[a.jsx("span",{className:"bookdetail-delivery-label",children:"배송안내"}),a.jsx("span",{className:"bookdetail-delivery-value",children:"무료배송"})]}),a.jsxs("div",{className:"bookdetail-btns",children:[a.jsx("button",{className:"bookdetail-btn-buy",children:"구매하기"}),a.jsx("button",{className:"bookdetail-btn-cart",children:"장바구니"}),a.jsx("button",{className:"bookdetail-btn-wish",children:"알림신청"})]})]})]}),a.jsxs("section",{className:"bookdetail-title-section",children:[a.jsx("h1",{className:"bookdetail-title",children:n.title}),a.jsx("p",{className:"bookdetail-subtitle",children:n.subtitle}),a.jsxs("p",{className:"bookdetail-author-line",children:["저자: ",n.author," | 출판사: ",n.publisher]}),a.jsx("p",{className:"bookdetail-category",children:n.category})]}),a.jsx("div",{className:"bookdetail-tabs",children:["소개","목차","책속으로",`리뷰 (${n.ratingCount})`].map(p=>{const S=p.split(" ")[0];return a.jsx("button",{className:`bookdetail-tab ${r===S?"bookdetail-tab-active":""}`,onClick:()=>sr(S),children:p},p)})}),r==="리뷰"?a.jsxs("section",{className:"bookdetail-block",children:[a.jsxs("h2",{className:"bookdetail-block-title",children:["리뷰 (",(((Dt=n.reviews)==null?void 0:Dt.length)||0)+y.length,")"]}),a.jsxs("div",{className:"bookdetail-rating-summary",children:[a.jsxs("div",{className:"bookdetail-rating-score",children:[a.jsx("span",{className:"bookdetail-rating-num",children:n.totalRating}),a.jsx("span",{className:"bookdetail-rating-max",children:"/10"})]}),a.jsx("p",{className:"bookdetail-rating-label",children:"사용자 총점"})]}),a.jsxs("div",{className:"review-form",children:[a.jsx("h3",{className:"review-form-title",children:"리뷰 작성"}),a.jsxs("div",{className:"review-form-row",children:[a.jsx("label",{className:"review-form-label",children:"별점"}),a.jsxs("div",{className:"review-stars",children:[[1,2,3,4,5].map(p=>a.jsx("span",{className:`review-star ${p<=j?"active":""}`,onClick:()=>F(p),children:"★"},p)),a.jsxs("span",{className:"review-rating-text",children:[j,"점"]})]})]}),a.jsxs("div",{className:"review-form-row",children:[a.jsx("label",{className:"review-form-label",children:"태그"}),a.jsx("div",{className:"review-tags",children:["추천해요","도움돼요","집중돼요","쉬웠어요","최고예요"].map(p=>a.jsx("button",{className:`review-tag-btn ${f===p?"active":""}`,onClick:()=>c(p),children:p},p))})]}),a.jsx("textarea",{className:"review-textarea",placeholder:"리뷰 내용을 입력해주세요 (최소 10자)",value:w,onChange:p=>N(p.target.value),rows:4}),a.jsxs("div",{className:"review-form-footer",children:[a.jsxs("span",{className:"review-char-count",children:[w.length,"자"]}),a.jsx("button",{className:"review-submit-btn",onClick:g,children:"등록"})]})]}),y.length>0&&a.jsxs("div",{className:"bookdetail-reviews",children:[a.jsx("h3",{className:"review-section-label",children:"내가 쓴 리뷰"}),y.map(p=>a.jsxs("div",{className:"bookdetail-review-item review-own",children:[a.jsxs("div",{className:"bookdetail-review-header",children:[a.jsx("span",{className:"bookdetail-review-type",children:p.type}),a.jsx("span",{className:"bookdetail-review-user",children:p.user}),a.jsx("span",{className:"bookdetail-review-date",children:p.date}),a.jsx("span",{className:"bookdetail-review-tag",children:p.tag}),a.jsxs("span",{className:"review-stars-small",children:["★".repeat(p.rating),"☆".repeat(5-p.rating)]}),a.jsx("button",{className:"review-delete-btn",onClick:()=>z(p.id),children:"삭제"})]}),a.jsx("p",{className:"bookdetail-review-content",children:p.content})]},p.id))]}),a.jsxs("div",{className:"bookdetail-reviews",children:[y.length>0&&a.jsx("h3",{className:"review-section-label",children:"전체 리뷰"}),(Ft=n.reviews)==null?void 0:Ft.map(p=>a.jsxs("div",{className:"bookdetail-review-item",children:[a.jsxs("div",{className:"bookdetail-review-header",children:[a.jsx("span",{className:"bookdetail-review-type",children:p.type}),a.jsx("span",{className:"bookdetail-review-user",children:p.user}),a.jsx("span",{className:"bookdetail-review-date",children:p.date}),a.jsx("span",{className:"bookdetail-review-tag",children:p.tag})]}),a.jsx("p",{className:"bookdetail-review-content",children:p.content})]},p.id))]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("section",{ref:E,className:"bookdetail-block",children:[a.jsx("h2",{className:"bookdetail-block-title",children:"책 소개"}),a.jsx("p",{className:"bookdetail-category-path",children:n.category}),a.jsx("p",{className:"bookdetail-intro-text",children:n.intro.split(`
`).map((p,S)=>a.jsxs("span",{children:[p,a.jsx("br",{})]},S))}),a.jsxs("div",{className:"bookdetail-author-card",style:{marginTop:"24px"},children:[a.jsx("div",{className:"bookdetail-author-avatar",children:n.author.charAt(0)}),a.jsxs("div",{className:"bookdetail-author-info",children:[a.jsx("p",{className:"bookdetail-author-name",children:n.author}),a.jsx("span",{className:"bookdetail-author-role",children:"저자"}),a.jsx("p",{className:"bookdetail-author-desc",children:n.authorInfo})]})]})]}),a.jsxs("section",{ref:R,className:"bookdetail-block",children:[a.jsx("h2",{className:"bookdetail-block-title",children:"목차"}),a.jsx("div",{className:"bookdetail-toc-preview",children:n.tocFull&&n.tocFull.slice(0,8).map((p,S)=>a.jsx("p",{className:`bookdetail-toc-line ${p.startsWith("Ⅰ")||p.startsWith("Ⅱ")||p.startsWith("Ⅲ")||p.startsWith("Ⅳ")||p.startsWith("Ⅴ")||p.startsWith("Ⅵ")||p.startsWith("Ⅶ")?"bookdetail-toc-part":""}`,children:p||" "},S))}),i&&a.jsx(Zs,{minHeight:300,children:a.jsx("div",{className:"bookdetail-toc-full",children:n.tocFull&&n.tocFull.slice(8).map((p,S)=>a.jsx("p",{className:`bookdetail-toc-line ${p.startsWith("Ⅰ")||p.startsWith("Ⅱ")||p.startsWith("Ⅲ")||p.startsWith("Ⅳ")||p.startsWith("Ⅴ")||p.startsWith("Ⅵ")||p.startsWith("Ⅶ")?"bookdetail-toc-part":""}`,children:p||" "},S))})}),a.jsx("button",{className:"bookdetail-expand-btn",onClick:()=>o(p=>!p),children:i?"접기 ∧":"펼치기 ∨"})]}),a.jsxs("section",{ref:_,className:"bookdetail-block",children:[a.jsx("h2",{className:"bookdetail-block-title",children:"책 속으로"}),!s&&n.previewChunks&&a.jsxs("p",{className:"bookdetail-preview-text",children:[n.previewChunks[0].split(`
`).slice(0,7).map((p,S)=>Jl(p,S)),a.jsx("span",{className:"preview-fade",children:"..."})]}),s&&n.previewChunks&&n.previewChunks.map((p,S)=>a.jsx("div",{ref:P=>U.current[S]=P,children:n.htmlChunks&&n.htmlChunks[S]?a.jsx("div",{className:"bookdetail-preview-chunk bookdetail-html-chunk",dangerouslySetInnerHTML:{__html:n.htmlChunks[S]}}):d>0?a.jsx("div",{className:"bookdetail-preview-chunk",children:a.jsx("p",{className:"bookdetail-preview-text",children:p.split(`
`).map((P,K)=>Jl(P,K))})}):a.jsx(Zs,{minHeight:150,children:a.jsx("div",{className:"bookdetail-preview-chunk",children:a.jsx("p",{className:"bookdetail-preview-text",children:p.split(`
`).map((P,K)=>Jl(P,K))})})})},S)),a.jsx("button",{className:"bookdetail-expand-btn",onClick:()=>u(p=>!p),children:s?"접기 ∧":"펼치기 ∨"}),a.jsxs("div",{style:{marginTop:"32px",borderTop:"1px solid #eee",paddingTop:"24px"},children:[a.jsx("h2",{className:"bookdetail-block-title",children:"기본정보"}),a.jsx("table",{className:"bookdetail-info-table",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"ISBN"}),a.jsx("td",{children:n.isbn})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"발행(출시)일자"}),a.jsx("td",{children:n.publishDate})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"쪽수"}),a.jsxs("td",{children:[n.pages,"쪽"]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"크기"}),a.jsx("td",{children:n.size})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"총권수"}),a.jsx("td",{children:"1권"})]})]})})]})]})]})]}):a.jsxs("div",{className:"bookdetail-empty",children:[a.jsx("img",{src:e.cover,alt:e.title,className:"bookdetail-empty-cover"}),a.jsx("p",{className:"bookdetail-empty-title",children:e.title}),a.jsx("p",{className:"bookdetail-empty-msg",children:"상세 정보를 준비 중입니다."})]})}function t0({onHome:e}){const t=()=>{const n=document.querySelector(".right-side");n&&n.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("div",{className:"floating-btns",children:[a.jsxs("button",{className:"floating-btn floating-btn-home",onClick:e,title:"홈으로",children:[a.jsx("span",{className:"floating-btn-icon",children:"∧"}),a.jsx("span",{className:"floating-btn-label",children:"HOME"})]}),a.jsxs("button",{className:"floating-btn floating-btn-top",onClick:t,title:"맨 위로",children:[a.jsx("span",{className:"floating-btn-icon",children:"∧"}),a.jsx("span",{className:"floating-btn-label",children:"TOP"})]})]})}const zn=[{id:"god-1",menu:"신",title:"이병철회장의 24가지 질문",author:"이병철",publisher:"hongethos",cover:"img/24question.png",desc:"삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문",bgColor:"#1a3a5c"},{id:"enterprise-new",menu:"기업",title:"신입사원을 위한 직장생활 지침서",author:"황순임, 안국빈 외",publisher:"hongethos",cover:"img/company_employee.png",desc:"신입사원 & 사회 초년생들을 위한 직장생활 필독서",bgColor:"#1a4a3a"},{id:"enterprise-labor",menu:"기업",title:"노동개혁",author:"이병철",publisher:"hongethos",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546533.jpg",desc:"새로운 시대를 위한 노동의 본질과 개혁 방향을 탐구한 책",bgColor:"#3a1a1a"},{id:"nation-politics",menu:"국가",title:"정치개혁",author:"이병철",publisher:"hongethos",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546526.jpg",desc:"현대 정치의 문제점과 진정한 개혁의 방향을 제시하는 책",bgColor:"#1a1a4a"},{id:"family-1",menu:"가족",title:"가족의 재발견",author:"전민재",publisher:"작가와",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D241108120.jpg",desc:"정법강의 기반, 현대사회 가족관계의 위기와 해결",bgColor:"#3a2a1a"}];function n0({onBookClick:e}){const[t,n]=I.useState(0),[r,l]=I.useState(!1),i=I.useCallback(()=>{n(u=>(u+1)%zn.length)},[]),o=()=>{n(u=>(u-1+zn.length)%zn.length)};I.useEffect(()=>{if(r)return;const u=setInterval(i,2e3);return()=>clearInterval(u)},[r,i]);const s=zn[t];return a.jsxs("div",{className:"hero-slider",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[a.jsx("div",{className:"hero-slider-bg",style:{backgroundColor:s.bgColor}}),a.jsxs("div",{className:"hero-slider-content",children:[a.jsx("div",{className:"hero-slider-cover-wrap",onClick:()=>e&&e({id:s.id,title:s.title,author:s.author,cover:s.cover}),children:a.jsx("img",{src:s.cover,alt:s.title,className:"hero-slider-cover"})}),a.jsxs("div",{className:"hero-slider-info",children:[a.jsxs("p",{className:"hero-slider-author",children:[s.author," · ",s.publisher]}),a.jsx("h2",{className:"hero-slider-title",onClick:()=>e&&e({id:s.id,title:s.title,author:s.author,cover:s.cover}),children:s.title}),a.jsx("p",{className:"hero-slider-desc",children:s.desc}),a.jsx("button",{className:"hero-slider-btn",onClick:()=>e&&e({id:s.id,title:s.title,author:s.author,cover:s.cover}),children:"자세히 보기 →"})]})]}),a.jsx("button",{className:"hero-slider-prev",onClick:o,children:"❮"}),a.jsx("button",{className:"hero-slider-next",onClick:i,children:"❯"}),a.jsx("div",{className:"hero-slider-indicators",children:zn.map((u,d)=>a.jsx("button",{className:`hero-slider-dot ${d===t?"hero-slider-dot-active":""}`,onClick:()=>n(d)},d))})]})}const r0=void 0,l0="https://dapi.kakao.com/v3/search/book",on=async e=>{const t=new URLSearchParams(e).toString(),n=await fetch(`${l0}?${t}`,{headers:{Authorization:`KakaoAK ${r0}`}});if(!n.ok)throw new Error("API 오류");return(await n.json()).documents||[]};function zl({book:e,onClick:t}){var n;return a.jsxs("div",{className:"kakao-book-card",onClick:()=>t&&t(e),children:[a.jsx("div",{className:"kakao-book-cover-wrap",children:e.thumbnail?a.jsx("img",{src:e.thumbnail,alt:e.title,className:"kakao-book-cover"}):a.jsx("div",{className:"kakao-book-cover-empty",children:"📚"})}),a.jsxs("div",{className:"kakao-book-info",children:[a.jsx("p",{className:"kakao-book-title",children:e.title}),a.jsx("p",{className:"kakao-book-author",children:(n=e.authors)==null?void 0:n.join(", ")}),a.jsx("p",{className:"kakao-book-publisher",children:e.publisher}),e.sale_price>0&&a.jsxs("p",{className:"kakao-book-price",children:[e.sale_price.toLocaleString(),"원"]})]})]})}function i0({onBookClick:e}){const[t,n]=I.useState([]),[r,l]=I.useState(!0);return I.useEffect(()=>{on({query:"베스트셀러",sort:"accuracy",size:6}).then(n).catch(console.error).finally(()=>l(!1))},[]),a.jsxs("section",{className:"kakao-section",children:[a.jsx("h2",{className:"kakao-section-title",children:"🔥 HOT BOOK"}),r?a.jsx("div",{className:"kakao-loading",children:"로딩 중..."}):a.jsx("div",{className:"kakao-book-grid",children:t.map((i,o)=>a.jsx(zl,{book:i,onClick:e},o))})]})}function o0({onBookClick:e}){const[t,n]=I.useState([]),[r,l]=I.useState(!0);return I.useEffect(()=>{on({query:"인문학",sort:"latest",size:6}).then(n).catch(console.error).finally(()=>l(!1))},[]),a.jsxs("section",{className:"kakao-section",children:[a.jsx("h2",{className:"kakao-section-title",children:"🆕 이번 주 신작"}),r?a.jsx("div",{className:"kakao-loading",children:"로딩 중..."}):a.jsx("div",{className:"kakao-book-grid",children:t.map((i,o)=>a.jsx(zl,{book:i,onClick:e},o))})]})}function s0({onBookClick:e}){const[t,n]=I.useState([]),[r,l]=I.useState(!0);return I.useEffect(()=>{on({query:"고전",sort:"accuracy",size:6}),on({query:"인문학 필독서",sort:"accuracy",size:6}),on({query:"세계 명작",sort:"accuracy",size:6}).then(n).catch(console.error).finally(()=>l(!1))},[]),a.jsxs("section",{className:"kakao-section",children:[a.jsx("h2",{className:"kakao-section-title",children:"🏆 21세기 최고의 책"}),r?a.jsx("div",{className:"kakao-loading",children:"로딩 중..."}):a.jsx("div",{className:"kakao-book-grid",children:t.map((i,o)=>a.jsx(zl,{book:i,onClick:e},o))})]})}function a0({onSearch:e}){const t=["인문학","철학","자기계발","경제경영","역사","과학","사회","심리학"];return a.jsxs("section",{className:"kakao-section",children:[a.jsx("h2",{className:"kakao-section-title",children:"🔍 인기 검색어"}),a.jsx("div",{className:"kakao-keywords",children:t.map((n,r)=>a.jsxs("button",{className:"kakao-keyword-btn",onClick:()=>e&&e(n),children:[r+1,". ",n]},r))})]})}function u0({keyword:e,onBookClick:t}){const[n,r]=I.useState([]),[l,i]=I.useState(!0);return I.useEffect(()=>{e&&(i(!0),on({query:e,sort:"accuracy",size:6}).then(r).catch(console.error).finally(()=>i(!1)))},[e]),e?a.jsx("section",{className:"kakao-section",children:l?a.jsx("div",{className:"kakao-loading",children:"로딩 중..."}):a.jsx("div",{className:"kakao-book-grid",children:n.map((o,s)=>a.jsx(zl,{book:o,onClick:t},s))})}):null}function c0({onBookClick:e}){const[t,n]=I.useState("인문학"),r=l=>{l.url&&window.open(l.url,"_blank")};return a.jsxs("div",{className:"kakao-sections-wrap",children:[a.jsx(i0,{onBookClick:r}),a.jsx(a0,{onSearch:n}),t&&a.jsx(u0,{keyword:t,onBookClick:r}),a.jsx(o0,{onBookClick:r}),a.jsx(s0,{onBookClick:r})]})}const d0={...fc,"enterprise-new":Bo,"god-1":hc},Js=(e,t)=>{const n=t.find(o=>e.toLowerCase().includes(o.toLowerCase()));if(!n)return e.slice(0,200)+"...";const r=e.toLowerCase().indexOf(n.toLowerCase()),l=Math.max(0,r-80),i=Math.min(e.length,r+120);return(l>0?"...":"")+e.slice(l,i)+(i<e.length?"...":"")};function f0({text:e,words:t}){if(!e||!t.length)return a.jsx("span",{children:e});const n=new RegExp(`(${t.map(l=>l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})`,"gi"),r=e.split(n);return a.jsx("span",{children:r.map((l,i)=>t.some(o=>l.toLowerCase()===o.toLowerCase())?a.jsx("mark",{className:"search-highlight",children:l},i):a.jsx("span",{children:l},i))})}function h0({missing:e}){return e.length?a.jsxs("div",{className:"search-missing",children:[a.jsx("span",{className:"search-missing-label",children:"누락된 검색어: "}),e.map((t,n)=>a.jsxs("span",{children:[a.jsx("s",{className:"search-missing-word",children:t}),a.jsxs("span",{className:"search-missing-required",children:[" | 필수 포함 항목: ",t]}),n<e.length-1&&" "]},n))]}):null}function p0({query:e,onBookClick:t}){const n=I.useMemo(()=>e.trim().split(/\s+/).filter(Boolean),[e]),r=I.useMemo(()=>{if(!n.length)return[];const l=[];return Object.values(d0).forEach(i=>{if(!(!i||!i.previewChunks)&&(i.previewChunks.forEach((o,s)=>{const u=o.toLowerCase(),d=n.filter(m=>u.includes(m.toLowerCase())),v=n.filter(m=>!u.includes(m.toLowerCase()));if(d.length===0)return;const y=Js(o,d);l.push({bookId:i.id,bookTitle:i.title,bookCover:i.cover,bookAuthor:i.author,chunkIndex:s+1,preview:y,foundWords:d,missingWords:v,score:d.length})}),i.intro)){const o=i.intro.toLowerCase(),s=n.filter(d=>o.includes(d.toLowerCase())),u=n.filter(d=>!o.includes(d.toLowerCase()));s.length>0&&l.push({bookId:i.id,bookTitle:i.title,bookCover:i.cover,bookAuthor:i.author,chunkIndex:0,preview:Js(i.intro,s),foundWords:s,missingWords:u,score:s.length})}}),l.sort((i,o)=>o.score-i.score)},[n]);return e.trim()?a.jsxs("div",{className:"search-result-wrap",children:[a.jsxs("div",{className:"search-result-header",children:[a.jsxs("span",{className:"search-result-query",children:['"',e,'"']}),a.jsxs("span",{className:"search-result-count",children:[" 검색 결과 ",r.length,"건"]})]}),r.length===0?a.jsxs("div",{className:"search-result-empty",children:[a.jsx("p",{children:"검색 결과가 없습니다."}),a.jsx("p",{className:"search-result-empty-sub",children:"다른 검색어를 입력해보세요."})]}):a.jsx("div",{className:"search-result-list",children:r.map((l,i)=>a.jsxs("div",{className:"search-result-item",onClick:()=>t&&t({id:l.bookId,title:l.bookTitle,author:l.bookAuthor,cover:l.bookCover},l.chunkIndex),children:[a.jsxs("div",{className:"search-result-book-info",children:[a.jsx("img",{src:l.bookCover,alt:l.bookTitle,className:"search-result-cover"}),a.jsxs("div",{children:[a.jsx("p",{className:"search-result-book-title",children:l.bookTitle}),a.jsx("p",{className:"search-result-book-author",children:l.bookAuthor})]})]}),l.missingWords.length>0&&a.jsx(h0,{missing:l.missingWords}),a.jsx("p",{className:"search-result-preview",children:a.jsx(f0,{text:l.preview,words:l.foundWords})})]},i))})]}):null}function m0({selectedBook:e,onHome:t,bookDetailRef:n,onBookClick:r,searchQuery:l,setSearchQuery:i,activeQuery:o,setActiveQuery:s}){const u=()=>{s(l)},d=y=>{y.key==="Enter"&&u()},v=(y,m)=>{r&&r(y),s(""),i(""),m>0&&(n!=null&&n.current)&&setTimeout(()=>{n.current(m)},300)};return a.jsxs("main",{className:"main-frame",children:[a.jsx("div",{className:"main-search-wrap",children:a.jsxs("div",{className:"main-search-bar",children:[a.jsxs("select",{className:"search-type-select",children:[a.jsx("option",{children:"통합검색"}),a.jsx("option",{children:"제목"}),a.jsx("option",{children:"저자"})]}),a.jsx("div",{className:"search-divider"}),a.jsx("input",{type:"text",className:"main-search-input",placeholder:"검색어를 입력하세요",value:l,onChange:y=>i(y.target.value),onKeyDown:d}),a.jsx("button",{className:"main-search-btn",onClick:u,children:"🔍"})]})}),o?a.jsx(p0,{query:o,onBookClick:v}):e?a.jsxs("div",{className:"bookdetail-layout",children:[a.jsx("div",{className:"bookdetail-content",children:a.jsx(e0,{selectedBook:e,bookDetailRef:n})}),a.jsx("div",{className:"bookdetail-btn-col",children:a.jsx(t0,{onHome:t})})]}):a.jsxs(a.Fragment,{children:[a.jsx(n0,{onBookClick:r}),a.jsx(c0,{onBookClick:r})]})]})}const pc=[{id:"god",label:"종교",books:[{id:"god-1",title:"이병철회장의 24가지 질문",author:"이병철",cover:"/img/24question.png"}]},{id:"family",label:"가족",books:[{id:"family-1",title:"82년생 김지영",author:"조남주",cover:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80"},{id:"family-new",title:"가족의 재발견",author:"전민재",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D241108120.jpg"},{id:"family-2",title:"아버지와 나",author:"박완서",cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80"}]},{id:"enterprise",label:"기업",books:[{id:"enterprise-new",title:"신입사원을 위한 직장생활 지침서",author:"저자명",cover:"/img/company_employee.png"},{id:"enterprise-labor",title:"노동개혁",author:"이천공",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546533.jpg"},{id:"enterprise-2",title:"제로 투 원",author:"피터 틸",cover:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80"},{id:"enterprise-3",title:"린 스타트업",author:"에릭 리스",cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80"}]},{id:"nation",label:"국가",books:[{id:"nation-politics",title:"정치개혁",author:"이천공",cover:"https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546526.jpg"},{id:"nation-1",title:"국가론",author:"플라톤",cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80"},{id:"nation-2",title:"군주론",author:"마키아벨리",cover:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80"}]},{id:"economy",label:"경제",books:[{id:"economy-1",title:"국부론",author:"애덤 스미스",cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80"},{id:"economy-2",title:"자본론",author:"카를 마르크스",cover:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80"},{id:"economy-3",title:"21세기 자본",author:"토마 피케티",cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80"}]},{id:"society",label:"사회",books:[{id:"society-1",title:"사회계약론",author:"장 자크 루소",cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80"},{id:"society-2",title:"군중심리",author:"귀스타브 르봉",cover:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80"}]},{id:"environment",label:"환경",books:[{id:"environment-1",title:"침묵의 봄",author:"레이철 카슨",cover:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80"},{id:"environment-2",title:"6도의 악몽",author:"마크 라이너스",cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80"}]},{id:"health",label:"체질",books:[{id:"health-1",title:"몸의 일기",author:"다니엘 페나크",cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80"},{id:"health-2",title:"음식의 제국",author:"에릭 슐로서",cover:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80"}]},{id:"universe",label:"우주",books:[{id:"universe-1",title:"코스모스",author:"칼 세이건",cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80"},{id:"universe-2",title:"시간의 역사",author:"스티븐 호킹",cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80"},{id:"universe-3",title:"엘러건트 유니버스",author:"브라이언 그린",cover:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80"}]},{id:"science",label:"과학",books:[{id:"science-1",title:"과학혁명의 구조",author:"토마스 쿤",cover:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80"},{id:"science-2",title:"부분과 전체",author:"베르너 하이젠베르크",cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80"}]},{id:"research",label:"연구",books:[{id:"research-1",title:"총균쇠",author:"재레드 다이아몬드",cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80"},{id:"research-2",title:"생각에 관한 생각",author:"다니엘 카너먼",cover:"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80"}]}];function y0({books:e,onBookClick:t,onMouseLeave:n}){return a.jsx("div",{className:"nav-dropdown",onMouseLeave:n,children:a.jsx("ul",{className:"nav-dropdown-list",children:e.map(r=>a.jsxs("li",{className:"nav-dropdown-item",onClick:()=>t(r),children:[a.jsx("img",{src:r.cover,alt:r.title,className:"nav-dropdown-cover"}),a.jsxs("div",{className:"nav-dropdown-info",children:[a.jsx("span",{className:"nav-dropdown-title",children:r.title}),a.jsx("span",{className:"nav-dropdown-author",children:r.author})]})]},r.id))})})}function v0({onClose:e,onBookClick:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"megamenu-overlay",onClick:e}),a.jsx("div",{className:"megamenu-dropdown",children:a.jsx("div",{className:"megamenu-grid",children:pc.map(n=>a.jsxs("div",{className:"megamenu-category",children:[a.jsx("p",{className:"megamenu-category-title",children:n.label}),a.jsx("ul",{className:"megamenu-book-list",children:n.books.map(r=>a.jsx("li",{className:"megamenu-book-item",onClick:()=>{t(r),e()},children:r.title},r.id))})]},n.id))})})]})}function x0({onBookClick:e}){const[t,n]=I.useState(null),[r,l]=I.useState(!1),i=u=>n(u),o=()=>n(null),s=u=>{n(null),l(!1),e(u)};return a.jsxs("nav",{className:"navbar",children:[a.jsxs("ul",{className:"navbar-menu",children:[a.jsx("li",{className:"navbar-toggle-item",children:a.jsx("button",{className:`navbar-mega-btn ${r?"active":""}`,onClick:()=>l(u=>!u),title:"분야보기",children:"☰"})}),pc.map(u=>a.jsxs("li",{className:`navbar-item ${t===u.id?"navbar-item-active":""}`,onMouseEnter:()=>i(u.id),onMouseLeave:o,children:[a.jsx("span",{className:"navbar-label",children:u.label}),t===u.id&&a.jsx(y0,{books:u.books,onBookClick:s,onMouseLeave:o})]},u.id))]}),r&&a.jsx(v0,{onClose:()=>l(!1),onBookClick:s})]})}function g0(){const[e,t]=I.useState(!0),[n,r]=I.useState(null),[l,i]=I.useState(""),[o,s]=I.useState(""),u=I.useRef(null),d=()=>t(w=>!w),v=w=>{r(w),s(""),i(""),e||t(!0);const N=document.querySelector(".right-side");N&&N.scrollTo({top:0})},y=()=>{r(null),s(""),i("");const w=document.querySelector(".right-side");w&&w.scrollTo({top:0})},m=w=>{u.current&&u.current(w)};return a.jsx("div",{className:"app-wrapper",children:a.jsxs("div",{className:"app-layout",children:[a.jsxs("div",{className:`left-side ${e?"left-side-open":"left-side-closed"}`,children:[a.jsxs("div",{className:"left-header",children:[e&&a.jsx("span",{className:"sidebar-site-title",onClick:y,style:{cursor:"pointer"},children:"온라인 인문학"}),a.jsx("button",{className:"sidebar-toggle-btn",onClick:d,children:e?"◧":"◨"})]}),a.jsx(Xf,{isOpen:e,selectedBook:n,onChapterClick:m})]}),a.jsxs("div",{className:"right-side",children:[a.jsx(x0,{onBookClick:v}),a.jsx(m0,{selectedBook:n,onHome:y,bookDetailRef:u,onBookClick:v,searchQuery:l,setSearchQuery:i,activeQuery:o,setActiveQuery:s})]})]})})}const k0=ei.createRoot(document.getElementById("root"));k0.render(a.jsx(Pc.StrictMode,{children:a.jsx(g0,{})}));
