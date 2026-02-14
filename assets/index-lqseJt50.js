function NM(a,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function OM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vd={exports:{}},Jo={};var N0;function PM(){if(N0)return Jo;N0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Jo.Fragment=e,Jo.jsx=i,Jo.jsxs=i,Jo}var O0;function FM(){return O0||(O0=1,Vd.exports=PM()),Vd.exports}var lt=FM(),kd={exports:{}},yt={};var P0;function zM(){if(P0)return yt;P0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function S(F,te,_e){this.props=F,this.context=te,this.refs=E,this.updater=_e||b}S.prototype.isReactComponent={},S.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=S.prototype;function L(F,te,_e){this.props=F,this.context=te,this.refs=E,this.updater=_e||b}var O=L.prototype=new D;O.constructor=L,T(O,S.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function B(){}var A={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function R(F,te,_e){var Re=_e.ref;return{$$typeof:a,type:F,key:te,ref:Re!==void 0?Re:null,props:_e}}function U(F,te){return R(F.type,te,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function ee(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_e){return te[_e]})}var ae=/\/+/g;function ce(F,te){return typeof F=="object"&&F!==null&&F.key!=null?ee(""+F.key):te.toString(36)}function se(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(te){F.status==="pending"&&(F.status="fulfilled",F.value=te)},function(te){F.status==="pending"&&(F.status="rejected",F.reason=te)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function P(F,te,_e,Re,ze){var ie=typeof F;(ie==="undefined"||ie==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ie){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case a:case e:ve=!0;break;case v:return ve=F._init,P(ve(F._payload),te,_e,Re,ze)}}if(ve)return ze=ze(F),ve=Re===""?"."+ce(F,0):Re,z(ze)?(_e="",ve!=null&&(_e=ve.replace(ae,"$&/")+"/"),P(ze,te,_e,"",function(Je){return Je})):ze!=null&&(H(ze)&&(ze=U(ze,_e+(ze.key==null||F&&F.key===ze.key?"":(""+ze.key).replace(ae,"$&/")+"/")+ve)),te.push(ze)),1;ve=0;var Le=Re===""?".":Re+":";if(z(F))for(var tt=0;tt<F.length;tt++)Re=F[tt],ie=Le+ce(Re,tt),ve+=P(Re,te,_e,ie,ze);else if(tt=y(F),typeof tt=="function")for(F=tt.call(F),tt=0;!(Re=F.next()).done;)Re=Re.value,ie=Le+ce(Re,tt++),ve+=P(Re,te,_e,ie,ze);else if(ie==="object"){if(typeof F.then=="function")return P(se(F),te,_e,Re,ze);throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ve}function V(F,te,_e){if(F==null)return F;var Re=[],ze=0;return P(F,Re,"","",function(ie){return te.call(_e,ie,ze++)}),Re}function Z(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(_e){(F._status===0||F._status===-1)&&(F._status=1,F._result=_e)},function(_e){(F._status===0||F._status===-1)&&(F._status=2,F._result=_e)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var ye=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Se={map:V,forEach:function(F,te,_e){V(F,function(){te.apply(this,arguments)},_e)},count:function(F){var te=0;return V(F,function(){te++}),te},toArray:function(F){return V(F,function(te){return te})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return yt.Activity=g,yt.Children=Se,yt.Component=S,yt.Fragment=i,yt.Profiler=l,yt.PureComponent=L,yt.StrictMode=s,yt.Suspense=m,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,yt.__COMPILER_RUNTIME={__proto__:null,c:function(F){return A.H.useMemoCache(F)}},yt.cache=function(F){return function(){return F.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(F,te,_e){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Re=T({},F.props),ze=F.key;if(te!=null)for(ie in te.key!==void 0&&(ze=""+te.key),te)!W.call(te,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&te.ref===void 0||(Re[ie]=te[ie]);var ie=arguments.length-2;if(ie===1)Re.children=_e;else if(1<ie){for(var ve=Array(ie),Le=0;Le<ie;Le++)ve[Le]=arguments[Le+2];Re.children=ve}return R(F.type,ze,Re)},yt.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},yt.createElement=function(F,te,_e){var Re,ze={},ie=null;if(te!=null)for(Re in te.key!==void 0&&(ie=""+te.key),te)W.call(te,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(ze[Re]=te[Re]);var ve=arguments.length-2;if(ve===1)ze.children=_e;else if(1<ve){for(var Le=Array(ve),tt=0;tt<ve;tt++)Le[tt]=arguments[tt+2];ze.children=Le}if(F&&F.defaultProps)for(Re in ve=F.defaultProps,ve)ze[Re]===void 0&&(ze[Re]=ve[Re]);return R(F,ie,ze)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(F){return{$$typeof:d,render:F}},yt.isValidElement=H,yt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:Z}},yt.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},yt.startTransition=function(F){var te=A.T,_e={};A.T=_e;try{var Re=F(),ze=A.S;ze!==null&&ze(_e,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,ye)}catch(ie){ye(ie)}finally{te!==null&&_e.types!==null&&(te.types=_e.types),A.T=te}},yt.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},yt.use=function(F){return A.H.use(F)},yt.useActionState=function(F,te,_e){return A.H.useActionState(F,te,_e)},yt.useCallback=function(F,te){return A.H.useCallback(F,te)},yt.useContext=function(F){return A.H.useContext(F)},yt.useDebugValue=function(){},yt.useDeferredValue=function(F,te){return A.H.useDeferredValue(F,te)},yt.useEffect=function(F,te){return A.H.useEffect(F,te)},yt.useEffectEvent=function(F){return A.H.useEffectEvent(F)},yt.useId=function(){return A.H.useId()},yt.useImperativeHandle=function(F,te,_e){return A.H.useImperativeHandle(F,te,_e)},yt.useInsertionEffect=function(F,te){return A.H.useInsertionEffect(F,te)},yt.useLayoutEffect=function(F,te){return A.H.useLayoutEffect(F,te)},yt.useMemo=function(F,te){return A.H.useMemo(F,te)},yt.useOptimistic=function(F,te){return A.H.useOptimistic(F,te)},yt.useReducer=function(F,te,_e){return A.H.useReducer(F,te,_e)},yt.useRef=function(F){return A.H.useRef(F)},yt.useState=function(F){return A.H.useState(F)},yt.useSyncExternalStore=function(F,te,_e){return A.H.useSyncExternalStore(F,te,_e)},yt.useTransition=function(){return A.H.useTransition()},yt.version="19.2.4",yt}var F0;function Up(){return F0||(F0=1,kd.exports=zM()),kd.exports}var le=Up();const IM=OM(le),BM=NM({__proto__:null,default:IM},[le]);var Xd={exports:{}},$o={},Wd={exports:{}},qd={};var z0;function HM(){return z0||(z0=1,(function(a){function e(P,V){var Z=P.length;P.push(V);e:for(;0<Z;){var ye=Z-1>>>1,Se=P[ye];if(0<l(Se,V))P[ye]=V,P[Z]=Se,Z=ye;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var V=P[0],Z=P.pop();if(Z!==V){P[0]=Z;e:for(var ye=0,Se=P.length,F=Se>>>1;ye<F;){var te=2*(ye+1)-1,_e=P[te],Re=te+1,ze=P[Re];if(0>l(_e,Z))Re<Se&&0>l(ze,_e)?(P[ye]=ze,P[Re]=Z,ye=Re):(P[ye]=_e,P[te]=Z,ye=te);else if(Re<Se&&0>l(ze,Z))P[ye]=ze,P[Re]=Z,ye=Re;else break e}}return V}function l(P,V){var Z=P.sortIndex-V.sortIndex;return Z!==0?Z:P.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,y=!1,b=!1,T=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=P)s(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function z(P){if(T=!1,O(P),!b)if(i(m)!==null)b=!0,B||(B=!0,ee());else{var V=i(p);V!==null&&se(z,V.startTime-P)}}var B=!1,A=-1,W=5,R=-1;function U(){return E?!0:!(a.unstable_now()-R<W)}function H(){if(E=!1,B){var P=a.unstable_now();R=P;var V=!0;try{e:{b=!1,T&&(T=!1,D(A),A=-1),y=!0;var Z=x;try{t:{for(O(P),g=i(m);g!==null&&!(g.expirationTime>P&&U());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,x=g.priorityLevel;var Se=ye(g.expirationTime<=P);if(P=a.unstable_now(),typeof Se=="function"){g.callback=Se,O(P),V=!0;break t}g===i(m)&&s(m),O(P)}else s(m);g=i(m)}if(g!==null)V=!0;else{var F=i(p);F!==null&&se(z,F.startTime-P),V=!1}}break e}finally{g=null,x=Z,y=!1}V=void 0}}finally{V?ee():B=!1}}}var ee;if(typeof L=="function")ee=function(){L(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=H,ee=function(){ce.postMessage(null)}}else ee=function(){S(H,0)};function se(P,V){A=S(function(){P(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(P){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var Z=x;x=V;try{return P()}finally{x=Z}},a.unstable_requestPaint=function(){E=!0},a.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=x;x=P;try{return V()}finally{x=Z}},a.unstable_scheduleCallback=function(P,V,Z){var ye=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,P={id:v++,callback:V,priorityLevel:P,startTime:Z,expirationTime:Se,sortIndex:-1},Z>ye?(P.sortIndex=Z,e(p,P),i(m)===null&&P===i(p)&&(T?(D(A),A=-1):T=!0,se(z,Z-ye))):(P.sortIndex=Se,e(m,P),b||y||(b=!0,B||(B=!0,ee()))),P},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(P){var V=x;return function(){var Z=x;x=V;try{return P.apply(this,arguments)}finally{x=Z}}}})(qd)),qd}var I0;function GM(){return I0||(I0=1,Wd.exports=HM()),Wd.exports}var Yd={exports:{}},Qn={};var B0;function VM(){if(B0)return Qn;B0=1;var a=Up();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Qn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Qn.requestFormReset=function(m){s.d.r(m)},Qn.unstable_batchedUpdates=function(m,p){return m(p)},Qn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qn.version="19.2.4",Qn}var H0;function gx(){if(H0)return Yd.exports;H0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Yd.exports=VM(),Yd.exports}var G0;function kM(){if(G0)return $o;G0=1;var a=GM(),e=Up(),i=gx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return m(c),t;if(h===o)return m(c),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=h;else{for(var M=!1,w=c.child;w;){if(w===r){M=!0,r=c,o=h;break}if(w===o){M=!0,o=c,r=h;break}w=w.sibling}if(!M){for(w=h.child;w;){if(w===r){M=!0,r=h,o=c;break}if(w===o){M=!0,o=h,r=c;break}w=w.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var se=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function F(t){return{current:t}}function te(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function _e(t,n){Se++,ye[Se]=t.current,t.current=n}var Re=F(null),ze=F(null),ie=F(null),ve=F(null);function Le(t,n){switch(_e(ie,n),_e(ze,t),_e(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?n0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=n0(n),t=i0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Re),_e(Re,t)}function tt(){te(Re),te(ze),te(ie)}function Je(t){t.memoizedState!==null&&_e(ve,t);var n=Re.current,r=i0(n,t.type);n!==r&&(_e(ze,t),_e(Re,r))}function Tt(t){ze.current===t&&(te(Re),te(ze)),ve.current===t&&(te(ve),jo._currentValue=Z)}var At,_t;function Et(t){if(At===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);At=n&&n[1]||"",_t=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+_t}var Gt=!1;function pt(t,n){if(!t||Gt)return"";Gt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ge){var de=ge}Reflect.construct(t,[],be)}else{try{be.call()}catch(ge){de=ge}t.call(be.prototype)}}else{try{throw Error()}catch(ge){de=ge}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ge){if(ge&&de&&typeof ge.stack=="string")return[ge.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],w=h[1];if(M&&w){var k=M.split(`
`),oe=w.split(`
`);for(c=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;c<oe.length&&!oe[c].includes("DetermineComponentFrameRoot");)c++;if(o===k.length||c===oe.length)for(o=k.length-1,c=oe.length-1;1<=o&&0<=c&&k[o]!==oe[c];)c--;for(;1<=o&&0<=c;o--,c--)if(k[o]!==oe[c]){if(o!==1||c!==1)do if(o--,c--,0>c||k[o]!==oe[c]){var xe=`
`+k[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=c);break}}}finally{Gt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Et(r):""}function dn(t,n){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return t.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return Et("Activity");default:return""}}function X(t){try{var n="",r=null;do n+=dn(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,Nt=a.unstable_scheduleCallback,Vt=a.unstable_cancelCallback,it=a.unstable_shouldYield,N=a.unstable_requestPaint,_=a.unstable_now,I=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,me=a.unstable_UserBlockingPriority,ne=a.unstable_NormalPriority,Ie=a.unstable_LowPriority,Ne=a.unstable_IdlePriority,$e=a.log,ct=a.unstable_setDisableYieldValue,we=null,Ce=null;function je(t){if(typeof $e=="function"&&ct(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(we,t)}catch{}}var qe=Math.clz32?Math.clz32:Y,Be=Math.log,St=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Be(t)/St|0)|0}var He=256,Ue=262144,Xe=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ee(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?c=Te(o):(M&=w,M!==0?c=Te(M):r||(r=w&~t,r!==0&&(c=Te(r))))):(w=o&~h,w!==0?c=Te(w):M!==0?c=Te(M):r||(r=o&~t,r!==0&&(c=Te(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function gt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(){var t=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),t}function Dt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,r,o,c,h){var M=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,k=t.expirationTimes,oe=t.hiddenUpdates;for(r=M&~r;0<r;){var xe=31-qe(r),be=1<<xe;w[xe]=0,k[xe]=-1;var de=oe[xe];if(de!==null)for(oe[xe]=null,xe=0;xe<de.length;xe++){var ge=de[xe];ge!==null&&(ge.lane&=-536870913)}r&=~be}o!==0&&rs(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function rs(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-qe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function G(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-qe(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function K(t,n){var r=n&-n;return r=(r&42)!==0?1:he(r),(r&(t.suspendedLanes|n))!==0?0:r}function he(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ae(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oe(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:A0(t.type))}function nt(t,n){var r=V.p;try{return V.p=t,n()}finally{V.p=r}}var We=Math.random().toString(36).slice(2),Ve="__reactFiber$"+We,Ze="__reactProps$"+We,at="__reactContainer$"+We,dt="__reactEvents$"+We,st="__reactListeners$"+We,Ot="__reactHandles$"+We,Ut="__reactResources$"+We,hn="__reactMarker$"+We;function gn(t){delete t[Ve],delete t[Ze],delete t[dt],delete t[st],delete t[Ot]}function vn(t){var n=t[Ve];if(n)return n;for(var r=t.parentNode;r;){if(n=r[at]||r[Ve]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=c0(t);t!==null;){if(r=t[Ve])return r;t=c0(t)}return n}t=r,r=t.parentNode}return null}function Pt(t){if(t=t[Ve]||t[at]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function An(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Kn(t){var n=t[Ut];return n||(n=t[Ut]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[hn]=!0}var j=new Set,fe={};function ue(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(fe[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ke={},Ge={};function De(t){return $t.call(Ge,t)?!0:$t.call(Ke,t)?!1:Fe.test(t)?Ge[t]=!0:(Ke[t]=!0,!1)}function ke(t,n,r){if(De(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function ut(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function et(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function It(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){r=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){if(!t._valueTracker){var n=It(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=It(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Kt=/[\n"\\]/g;function xt(t){return t.replace(Kt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hn(t,n,r,o,c,h,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Gn(t,M,Qe(n)):r!=null?Gn(t,M,Qe(r)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Qe(w):t.removeAttribute("name")}function ga(t,n,r,o,c,h,M,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){sn(t);return}r=r!=null?""+Qe(r):"",n=n!=null?""+Qe(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),sn(t)}function Gn(t,n,r){n==="number"&&ft(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ti(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Qe(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function tn(t,n,r){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Qe(r):""}function Vn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(se(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Qe(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),sn(t)}function On(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var kn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xn(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||kn.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function ss(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&Xn(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Xn(t,h,n[h])}function Vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return Dy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function va(){}var Ic=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function tm(t){var n=Pt(t);if(n&&(t=n.stateNode)){var r=t[Ze]||null;e:switch(t=n.stateNode,n.type){case"input":if(Hn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[Ze]||null;if(!c)throw Error(s(90));Hn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&en(o)}break e;case"textarea":tn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Ti(t,!!r.multiple,n,!1)}}}var Hc=!1;function nm(t,n,r){if(Hc)return t(n,r);Hc=!0;try{var o=t(n);return o}finally{if(Hc=!1,(os!==null||ls!==null)&&(Mu(),os&&(n=os,t=ls,ls=os=null,tm(n),t)))for(n=0;n<t.length;n++)tm(t[n])}}function co(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Ze]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(_a)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Gc=!1}var qa=null,Vc=null,Fl=null;function im(){if(Fl)return Fl;var t,n=Vc,r=n.length,o,c="value"in qa?qa.value:qa.textContent,h=c.length;for(t=0;t<r&&n[t]===c[t];t++);var M=r-t;for(o=1;o<=M&&n[r-o]===c[h-o];o++);return Fl=c.slice(t,1<o?1-o:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function am(){return!1}function ai(t){function n(r,o,c,h,M){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Il:am,this.isPropagationStopped=am,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=ai(Rr),ho=g({},Rr,{view:0,detail:0}),Uy=ai(ho),kc,Xc,po,Hl=g({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(kc=t.screenX-po.screenX,Xc=t.screenY-po.screenY):Xc=kc=0,po=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),rm=ai(Hl),Ly=g({},Hl,{dataTransfer:0}),Ny=ai(Ly),Oy=g({},ho,{relatedTarget:0}),Wc=ai(Oy),Py=g({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=ai(Py),zy=g({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iy=ai(zy),By=g({},Rr,{data:0}),sm=ai(By),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vy[t])?!!n[t]:!1}function qc(){return ky}var Xy=g({},ho,{key:function(t){if(t.key){var n=Hy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=ai(Xy),qy=g({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=ai(qy),Yy=g({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),jy=ai(Yy),Zy=g({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=ai(Zy),Qy=g({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=ai(Qy),$y=g({},Rr,{newState:0,oldState:0}),eS=ai($y),tS=[9,13,27,32],Yc=_a&&"CompositionEvent"in window,mo=null;_a&&"documentMode"in document&&(mo=document.documentMode);var nS=_a&&"TextEvent"in window&&!mo,lm=_a&&(!Yc||mo&&8<mo&&11>=mo),um=" ",cm=!1;function fm(t,n){switch(t){case"keyup":return tS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function iS(t,n){switch(t){case"compositionend":return dm(n);case"keypress":return n.which!==32?null:(cm=!0,um);case"textInput":return t=n.data,t===um&&cm?null:t;default:return null}}function aS(t,n){if(us)return t==="compositionend"||!Yc&&fm(t,n)?(t=im(),Fl=Vc=qa=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lm&&n.locale!=="ko"?null:n.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rS[t.type]:n==="textarea"}function pm(t,n,r,o){os?ls?ls.push(o):ls=[o]:os=o,n=wu(n,"onChange"),0<n.length&&(r=new Bl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var go=null,vo=null;function sS(t){Kv(t,0)}function Gl(t){var n=An(t);if(en(n))return t}function mm(t,n){if(t==="change")return n}var gm=!1;if(_a){var jc;if(_a){var Zc="oninput"in document;if(!Zc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Zc=typeof vm.oninput=="function"}jc=Zc}else jc=!1;gm=jc&&(!document.documentMode||9<document.documentMode)}function _m(){go&&(go.detachEvent("onpropertychange",xm),vo=go=null)}function xm(t){if(t.propertyName==="value"&&Gl(vo)){var n=[];pm(n,vo,t,Bc(t)),nm(sS,n)}}function oS(t,n,r){t==="focusin"?(_m(),go=n,vo=r,go.attachEvent("onpropertychange",xm)):t==="focusout"&&_m()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(vo)}function uS(t,n){if(t==="click")return Gl(n)}function cS(t,n){if(t==="input"||t==="change")return Gl(n)}function fS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var pi=typeof Object.is=="function"?Object.is:fS;function _o(t,n){if(pi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!$t.call(n,c)||!pi(t[c],n[c]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,n){var r=ym(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ym(r)}}function Mm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Mm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ft(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=ft(t.document)}return n}function Kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dS=_a&&"documentMode"in document&&11>=document.documentMode,cs=null,Qc=null,xo=null,Jc=!1;function bm(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Jc||cs==null||cs!==ft(o)||(o=cs,"selectionStart"in o&&Kc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&_o(xo,o)||(xo=o,o=wu(Qc,"onSelect"),0<o.length&&(n=new Bl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=cs)))}function Cr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var fs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},$c={},Tm={};_a&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function wr(t){if($c[t])return $c[t];if(!fs[t])return t;var n=fs[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Tm)return $c[t]=n[r];return t}var Am=wr("animationend"),Rm=wr("animationiteration"),Cm=wr("animationstart"),hS=wr("transitionrun"),pS=wr("transitionstart"),mS=wr("transitioncancel"),wm=wr("transitionend"),Dm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function ki(t,n){Dm.set(t,n),ue(n,[t])}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],ds=0,tf=0;function kl(){for(var t=ds,n=tf=ds=0;n<t;){var r=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var c=Ai[n];Ai[n++]=null;var h=Ai[n];if(Ai[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}h!==0&&Um(r,c,h)}}function Xl(t,n,r,o){Ai[ds++]=t,Ai[ds++]=n,Ai[ds++]=r,Ai[ds++]=o,tf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function nf(t,n,r,o){return Xl(t,n,r,o),Wl(t)}function Dr(t,n){return Xl(t,null,null,n),Wl(t)}function Um(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-qe(r),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function Wl(t){if(50<Go)throw Go=0,dd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hs={};function gS(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,n,r,o){return new gS(t,n,r,o)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var r=t.alternate;return r===null?(r=mi(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Lm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,r,o,c,h){var M=0;if(o=t,typeof t=="function")af(t)&&(M=1);else if(typeof t=="string")M=SM(t,r,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=mi(31,r,n,c),t.elementType=R,t.lanes=h,t;case T:return Ur(r.children,c,h,n);case E:M=8,c|=24;break;case S:return t=mi(12,r,n,c|2),t.elementType=S,t.lanes=h,t;case z:return t=mi(13,r,n,c),t.elementType=z,t.lanes=h,t;case B:return t=mi(19,r,n,c),t.elementType=B,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:M=10;break e;case D:M=9;break e;case O:M=11;break e;case A:M=14;break e;case W:M=16,o=null;break e}M=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=mi(M,r,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function Ur(t,n,r,o){return t=mi(7,t,o,n),t.lanes=r,t}function rf(t,n,r){return t=mi(6,t,null,n),t.lanes=r,t}function Nm(t){var n=mi(18,null,null,0);return n.stateNode=t,n}function sf(t,n,r){return n=mi(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Om=new WeakMap;function Ri(t,n){if(typeof t=="object"&&t!==null){var r=Om.get(t);return r!==void 0?r:(n={value:t,source:n,stack:X(n)},Om.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var ps=[],ms=0,Yl=null,yo=0,Ci=[],wi=0,Ya=null,ia=1,aa="";function ya(t,n){ps[ms++]=yo,ps[ms++]=Yl,Yl=t,yo=n}function Pm(t,n,r){Ci[wi++]=ia,Ci[wi++]=aa,Ci[wi++]=Ya,Ya=t;var o=ia;t=aa;var c=32-qe(o)-1;o&=~(1<<c),r+=1;var h=32-qe(n)+c;if(30<h){var M=c-c%5;h=(o&(1<<M)-1).toString(32),o>>=M,c-=M,ia=1<<32-qe(n)+c|r<<c|o,aa=h+t}else ia=1<<h|r<<c|o,aa=t}function of(t){t.return!==null&&(ya(t,1),Pm(t,1,0))}function lf(t){for(;t===Yl;)Yl=ps[--ms],ps[ms]=null,yo=ps[--ms],ps[ms]=null;for(;t===Ya;)Ya=Ci[--wi],Ci[wi]=null,aa=Ci[--wi],Ci[wi]=null,ia=Ci[--wi],Ci[wi]=null}function Fm(t,n){Ci[wi++]=ia,Ci[wi++]=aa,Ci[wi++]=Ya,ia=n.id,aa=n.overflow,Ya=t}var Wn=null,pn=null,kt=!1,ja=null,Di=!1,uf=Error(s(519));function Za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(Ri(n,t)),uf}function zm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[Ve]=t,n[Ze]=o,r){case"dialog":zt("cancel",n),zt("close",n);break;case"iframe":case"object":case"embed":zt("load",n);break;case"video":case"audio":for(r=0;r<ko.length;r++)zt(ko[r],n);break;case"source":zt("error",n);break;case"img":case"image":case"link":zt("error",n),zt("load",n);break;case"details":zt("toggle",n);break;case"input":zt("invalid",n),ga(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":zt("invalid",n);break;case"textarea":zt("invalid",n),Vn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||e0(n.textContent,r)?(o.popover!=null&&(zt("beforetoggle",n),zt("toggle",n)),o.onScroll!=null&&zt("scroll",n),o.onScrollEnd!=null&&zt("scrollend",n),o.onClick!=null&&(n.onclick=va),n=!0):n=!1,n||Za(t,!0)}function Im(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Wn=Wn.return}}function gs(t){if(t!==Wn)return!1;if(!kt)return Im(t),kt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Rd(t.type,t.memoizedProps)),r=!r),r&&pn&&Za(t),Im(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));pn=u0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));pn=u0(t)}else n===27?(n=pn,ur(t.type)?(t=Ld,Ld=null,pn=t):pn=n):pn=Wn?Li(t.stateNode.nextSibling):null;return!0}function Lr(){pn=Wn=null,kt=!1}function cf(){var t=ja;return t!==null&&(li===null?li=t:li.push.apply(li,t),ja=null),t}function So(t){ja===null?ja=[t]:ja.push(t)}var ff=F(null),Nr=null,Sa=null;function Ka(t,n,r){_e(ff,n._currentValue),n._currentValue=r}function Ma(t){t._currentValue=ff.current,te(ff)}function df(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function hf(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var M=c.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=c;for(var k=0;k<n.length;k++)if(w.context===n[k]){h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),df(h.return,r,t),o||(M=null);break e}h=w.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(s(341));M.lanes|=r,h=M.alternate,h!==null&&(h.lanes|=r),df(M,r,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function vs(t,n,r,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=c.type;pi(c.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(c===ve.current){if(M=c.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}c=c.return}t!==null&&hf(n,t,r,o),n.flags|=262144}function jl(t){for(t=t.firstContext;t!==null;){if(!pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Nr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return Bm(Nr,t)}function Zl(t,n){return Nr===null&&Or(t),Bm(t,n)}function Bm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Sa===null){if(t===null)throw Error(s(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return r}var vS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},_S=a.unstable_scheduleCallback,xS=a.unstable_NormalPriority,Rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new vS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&_S(xS,function(){t.controller.abort()})}var Eo=null,mf=0,_s=0,xs=null;function yS(t,n){if(Eo===null){var r=Eo=[];mf=0,_s=_d(),xs={status:"pending",value:void 0,then:function(o){r.push(o)}}}return mf++,n.then(Hm,Hm),n}function Hm(){if(--mf===0&&Eo!==null){xs!==null&&(xs.status="fulfilled");var t=Eo;Eo=null,_s=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SS(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Gm=P.S;P.S=function(t,n){bv=_(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yS(t,n),Gm!==null&&Gm(t,n)};var Pr=F(null);function gf(){var t=Pr.current;return t!==null?t:fn.pooledCache}function Kl(t,n){n===null?_e(Pr,Pr.current):_e(Pr,n.pool)}function Vm(){var t=gf();return t===null?null:{parent:Rn._currentValue,pool:t}}var ys=Error(s(460)),vf=Error(s(474)),Ql=Error(s(542)),Jl={then:function(){}};function km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(va,va),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qm(t),t;default:if(typeof n.status=="string")n.then(va,va);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qm(t),t}throw zr=n,ys}}function Fr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(zr=r,ys):r}}var zr=null;function Wm(){if(zr===null)throw Error(s(459));var t=zr;return zr=null,t}function qm(t){if(t===ys||t===Ql)throw Error(s(483))}var Ss=null,bo=0;function $l(t){var n=bo;return bo+=1,Ss===null&&(Ss=[]),Xm(Ss,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function eu(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ym(t){function n(Q,q){if(t){var re=Q.deletions;re===null?(Q.deletions=[q],Q.flags|=16):re.push(q)}}function r(Q,q){if(!t)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function o(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function c(Q,q){return Q=xa(Q,q),Q.index=0,Q.sibling=null,Q}function h(Q,q,re){return Q.index=re,t?(re=Q.alternate,re!==null?(re=re.index,re<q?(Q.flags|=67108866,q):re):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,q,re,Me){return q===null||q.tag!==6?(q=rf(re,Q.mode,Me),q.return=Q,q):(q=c(q,re),q.return=Q,q)}function k(Q,q,re,Me){var ht=re.type;return ht===T?xe(Q,q,re.props.children,Me,re.key):q!==null&&(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===W&&Fr(ht)===q.type)?(q=c(q,re.props),To(q,re),q.return=Q,q):(q=ql(re.type,re.key,re.props,null,Q.mode,Me),To(q,re),q.return=Q,q)}function oe(Q,q,re,Me){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=sf(re,Q.mode,Me),q.return=Q,q):(q=c(q,re.children||[]),q.return=Q,q)}function xe(Q,q,re,Me,ht){return q===null||q.tag!==7?(q=Ur(re,Q.mode,Me,ht),q.return=Q,q):(q=c(q,re),q.return=Q,q)}function be(Q,q,re){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=rf(""+q,Q.mode,re),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return re=ql(q.type,q.key,q.props,null,Q.mode,re),To(re,q),re.return=Q,re;case b:return q=sf(q,Q.mode,re),q.return=Q,q;case W:return q=Fr(q),be(Q,q,re)}if(se(q)||ee(q))return q=Ur(q,Q.mode,re,null),q.return=Q,q;if(typeof q.then=="function")return be(Q,$l(q),re);if(q.$$typeof===L)return be(Q,Zl(Q,q),re);eu(Q,q)}return null}function de(Q,q,re,Me){var ht=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return ht!==null?null:w(Q,q,""+re,Me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case y:return re.key===ht?k(Q,q,re,Me):null;case b:return re.key===ht?oe(Q,q,re,Me):null;case W:return re=Fr(re),de(Q,q,re,Me)}if(se(re)||ee(re))return ht!==null?null:xe(Q,q,re,Me,null);if(typeof re.then=="function")return de(Q,q,$l(re),Me);if(re.$$typeof===L)return de(Q,q,Zl(Q,re),Me);eu(Q,re)}return null}function ge(Q,q,re,Me,ht){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return Q=Q.get(re)||null,w(q,Q,""+Me,ht);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case y:return Q=Q.get(Me.key===null?re:Me.key)||null,k(q,Q,Me,ht);case b:return Q=Q.get(Me.key===null?re:Me.key)||null,oe(q,Q,Me,ht);case W:return Me=Fr(Me),ge(Q,q,re,Me,ht)}if(se(Me)||ee(Me))return Q=Q.get(re)||null,xe(q,Q,Me,ht,null);if(typeof Me.then=="function")return ge(Q,q,re,$l(Me),ht);if(Me.$$typeof===L)return ge(Q,q,re,Zl(q,Me),ht);eu(q,Me)}return null}function rt(Q,q,re,Me){for(var ht=null,Yt=null,ot=q,Rt=q=0,Ht=null;ot!==null&&Rt<re.length;Rt++){ot.index>Rt?(Ht=ot,ot=null):Ht=ot.sibling;var jt=de(Q,ot,re[Rt],Me);if(jt===null){ot===null&&(ot=Ht);break}t&&ot&&jt.alternate===null&&n(Q,ot),q=h(jt,q,Rt),Yt===null?ht=jt:Yt.sibling=jt,Yt=jt,ot=Ht}if(Rt===re.length)return r(Q,ot),kt&&ya(Q,Rt),ht;if(ot===null){for(;Rt<re.length;Rt++)ot=be(Q,re[Rt],Me),ot!==null&&(q=h(ot,q,Rt),Yt===null?ht=ot:Yt.sibling=ot,Yt=ot);return kt&&ya(Q,Rt),ht}for(ot=o(ot);Rt<re.length;Rt++)Ht=ge(ot,Q,Rt,re[Rt],Me),Ht!==null&&(t&&Ht.alternate!==null&&ot.delete(Ht.key===null?Rt:Ht.key),q=h(Ht,q,Rt),Yt===null?ht=Ht:Yt.sibling=Ht,Yt=Ht);return t&&ot.forEach(function(pr){return n(Q,pr)}),kt&&ya(Q,Rt),ht}function mt(Q,q,re,Me){if(re==null)throw Error(s(151));for(var ht=null,Yt=null,ot=q,Rt=q=0,Ht=null,jt=re.next();ot!==null&&!jt.done;Rt++,jt=re.next()){ot.index>Rt?(Ht=ot,ot=null):Ht=ot.sibling;var pr=de(Q,ot,jt.value,Me);if(pr===null){ot===null&&(ot=Ht);break}t&&ot&&pr.alternate===null&&n(Q,ot),q=h(pr,q,Rt),Yt===null?ht=pr:Yt.sibling=pr,Yt=pr,ot=Ht}if(jt.done)return r(Q,ot),kt&&ya(Q,Rt),ht;if(ot===null){for(;!jt.done;Rt++,jt=re.next())jt=be(Q,jt.value,Me),jt!==null&&(q=h(jt,q,Rt),Yt===null?ht=jt:Yt.sibling=jt,Yt=jt);return kt&&ya(Q,Rt),ht}for(ot=o(ot);!jt.done;Rt++,jt=re.next())jt=ge(ot,Q,Rt,jt.value,Me),jt!==null&&(t&&jt.alternate!==null&&ot.delete(jt.key===null?Rt:jt.key),q=h(jt,q,Rt),Yt===null?ht=jt:Yt.sibling=jt,Yt=jt);return t&&ot.forEach(function(LM){return n(Q,LM)}),kt&&ya(Q,Rt),ht}function un(Q,q,re,Me){if(typeof re=="object"&&re!==null&&re.type===T&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case y:e:{for(var ht=re.key;q!==null;){if(q.key===ht){if(ht=re.type,ht===T){if(q.tag===7){r(Q,q.sibling),Me=c(q,re.props.children),Me.return=Q,Q=Me;break e}}else if(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===W&&Fr(ht)===q.type){r(Q,q.sibling),Me=c(q,re.props),To(Me,re),Me.return=Q,Q=Me;break e}r(Q,q);break}else n(Q,q);q=q.sibling}re.type===T?(Me=Ur(re.props.children,Q.mode,Me,re.key),Me.return=Q,Q=Me):(Me=ql(re.type,re.key,re.props,null,Q.mode,Me),To(Me,re),Me.return=Q,Q=Me)}return M(Q);case b:e:{for(ht=re.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){r(Q,q.sibling),Me=c(q,re.children||[]),Me.return=Q,Q=Me;break e}else{r(Q,q);break}else n(Q,q);q=q.sibling}Me=sf(re,Q.mode,Me),Me.return=Q,Q=Me}return M(Q);case W:return re=Fr(re),un(Q,q,re,Me)}if(se(re))return rt(Q,q,re,Me);if(ee(re)){if(ht=ee(re),typeof ht!="function")throw Error(s(150));return re=ht.call(re),mt(Q,q,re,Me)}if(typeof re.then=="function")return un(Q,q,$l(re),Me);if(re.$$typeof===L)return un(Q,q,Zl(Q,re),Me);eu(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,q!==null&&q.tag===6?(r(Q,q.sibling),Me=c(q,re),Me.return=Q,Q=Me):(r(Q,q),Me=rf(re,Q.mode,Me),Me.return=Q,Q=Me),M(Q)):r(Q,q)}return function(Q,q,re,Me){try{bo=0;var ht=un(Q,q,re,Me);return Ss=null,ht}catch(ot){if(ot===ys||ot===Ql)throw ot;var Yt=mi(29,ot,null,Q.mode);return Yt.lanes=Me,Yt.return=Q,Yt}}}var Ir=Ym(!0),jm=Ym(!1),Qa=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Qt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Wl(t),Um(t,null,r),n}return Xl(t,o,n,r),Wl(t)}function Ao(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,G(t,r)}}function yf(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=M:h=h.next=M,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Sf=!1;function Ro(){if(Sf){var t=xs;if(t!==null)throw t}}function Co(t,n,r,o){Sf=!1;var c=t.updateQueue;Qa=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var k=w,oe=k.next;k.next=null,M===null?h=oe:M.next=oe,M=k;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==M&&(w===null?xe.firstBaseUpdate=oe:w.next=oe,xe.lastBaseUpdate=k))}if(h!==null){var be=c.baseState;M=0,xe=oe=k=null,w=h;do{var de=w.lane&-536870913,ge=de!==w.lane;if(ge?(Bt&de)===de:(o&de)===de){de!==0&&de===_s&&(Sf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var rt=t,mt=w;de=n;var un=r;switch(mt.tag){case 1:if(rt=mt.payload,typeof rt=="function"){be=rt.call(un,be,de);break e}be=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=mt.payload,de=typeof rt=="function"?rt.call(un,be,de):rt,de==null)break e;be=g({},be,de);break e;case 2:Qa=!0}}de=w.callback,de!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=c.callbacks,ge===null?c.callbacks=[de]:ge.push(de))}else ge={lane:de,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(oe=xe=ge,k=be):xe=xe.next=ge,M|=de;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;ge=w,w=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);xe===null&&(k=be),c.baseState=k,c.firstBaseUpdate=oe,c.lastBaseUpdate=xe,h===null&&(c.shared.lanes=0),ar|=M,t.lanes=M,t.memoizedState=be}}function Zm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Km(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Zm(r[t],n)}var Ms=F(null),tu=F(0);function Qm(t,n){t=Ua,_e(tu,t),_e(Ms,n),Ua=t|n.baseLanes}function Mf(){_e(tu,Ua),_e(Ms,Ms.current)}function Ef(){Ua=tu.current,te(Ms),te(tu)}var gi=F(null),Ui=null;function er(t){var n=t.alternate;_e(Mn,Mn.current&1),_e(gi,t),Ui===null&&(n===null||Ms.current!==null||n.memoizedState!==null)&&(Ui=t)}function bf(t){_e(Mn,Mn.current),_e(gi,t),Ui===null&&(Ui=t)}function Jm(t){t.tag===22?(_e(Mn,Mn.current),_e(gi,t),Ui===null&&(Ui=t)):tr()}function tr(){_e(Mn,Mn.current),_e(gi,gi.current)}function vi(t){te(gi),Ui===t&&(Ui=null),te(Mn)}var Mn=F(0);function nu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Dd(r)||Ud(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,bt=null,on=null,Cn=null,iu=!1,Es=!1,Br=!1,au=0,wo=0,bs=null,MS=0;function xn(){throw Error(s(321))}function Tf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!pi(t[r],n[r]))return!1;return!0}function Af(t,n,r,o,c,h){return Ea=h,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Pg:Gf,Br=!1,h=r(o,c),Br=!1,Es&&(h=eg(n,r,o,c)),$m(t),h}function $m(t){P.H=Lo;var n=on!==null&&on.next!==null;if(Ea=0,Cn=on=bt=null,iu=!1,wo=0,bs=null,n)throw Error(s(300));t===null||wn||(t=t.dependencies,t!==null&&jl(t)&&(wn=!0))}function eg(t,n,r,o){bt=t;var c=0;do{if(Es&&(bs=null),wo=0,Es=!1,25<=c)throw Error(s(301));if(c+=1,Cn=on=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Fg,h=n(r,o)}while(Es);return h}function ES(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(on!==null?on.memoizedState:null)!==t&&(bt.flags|=1024),n}function Rf(){var t=au!==0;return au=0,t}function Cf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function wf(t){if(iu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}iu=!1}Ea=0,Cn=on=bt=null,Es=!1,wo=au=0,bs=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?bt.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function En(){if(on===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var n=Cn===null?bt.memoizedState:Cn.next;if(n!==null)Cn=n,on=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},Cn===null?bt.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=wo;return wo+=1,bs===null&&(bs=[]),t=Xm(bs,t,n),n=bt,(Cn===null?n.memoizedState:Cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Pg:Gf),t}function su(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===L)return qn(t)}throw Error(s(438,String(t)))}function Df(t){var n=null,r=bt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=ru(),bt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=U;return n.index++,r}function ba(t,n){return typeof n=="function"?n(t):n}function ou(t){var n=En();return Uf(n,on,t)}function Uf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var w=M=null,k=null,oe=n,xe=!1;do{var be=oe.lane&-536870913;if(be!==oe.lane?(Bt&be)===be:(Ea&be)===be){var de=oe.revertLane;if(de===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),be===_s&&(xe=!0);else if((Ea&de)===de){oe=oe.next,de===_s&&(xe=!0);continue}else be={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},k===null?(w=k=be,M=h):k=k.next=be,bt.lanes|=de,ar|=de;be=oe.action,Br&&r(h,be),h=oe.hasEagerState?oe.eagerState:r(h,be)}else de={lane:be,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},k===null?(w=k=de,M=h):k=k.next=de,bt.lanes|=be,ar|=be;oe=oe.next}while(oe!==null&&oe!==n);if(k===null?M=h:k.next=w,!pi(h,t.memoizedState)&&(wn=!0,xe&&(r=xs,r!==null)))throw r;t.memoizedState=h,t.baseState=M,t.baseQueue=k,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Lf(t){var n=En(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);pi(h,n.memoizedState)||(wn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function tg(t,n,r){var o=bt,c=En(),h=kt;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var M=!pi((on||c).memoizedState,r);if(M&&(c.memoizedState=r,wn=!0),c=c.queue,Pf(ag.bind(null,o,c,t),[t]),c.getSnapshot!==n||M||Cn!==null&&Cn.memoizedState.tag&1){if(o.flags|=2048,Ts(9,{destroy:void 0},ig.bind(null,o,c,r,n),null),fn===null)throw Error(s(349));h||(Ea&127)!==0||ng(o,n,r)}return r}function ng(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=bt.updateQueue,n===null?(n=ru(),bt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function ig(t,n,r,o){n.value=r,n.getSnapshot=o,rg(n)&&sg(t)}function ag(t,n,r){return r(function(){rg(n)&&sg(t)})}function rg(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!pi(t,r)}catch{return!0}}function sg(t){var n=Dr(t,2);n!==null&&ui(n,t,2)}function Nf(t){var n=ti();if(typeof t=="function"){var r=t;if(t=r(),Br){je(!0);try{r()}finally{je(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function og(t,n,r,o){return t.baseState=r,Uf(t,on,typeof o=="function"?o:ba)}function bS(t,n,r,o,c){if(cu(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};P.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,lg(n,h)):(h.next=r.next,n.pending=r.next=h)}}function lg(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=P.T,M={};P.T=M;try{var w=r(c,o),k=P.S;k!==null&&k(M,w),ug(t,n,w)}catch(oe){Of(t,n,oe)}finally{h!==null&&M.types!==null&&(h.types=M.types),P.T=h}}else try{h=r(c,o),ug(t,n,h)}catch(oe){Of(t,n,oe)}}function ug(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){cg(t,n,o)},function(o){return Of(t,n,o)}):cg(t,n,r)}function cg(t,n,r){n.status="fulfilled",n.value=r,fg(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,lg(t,r)))}function Of(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,fg(n),n=n.next;while(n!==o)}t.action=null}function fg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dg(t,n){return n}function hg(t,n){if(kt){var r=fn.formState;if(r!==null){e:{var o=bt;if(kt){if(pn){t:{for(var c=pn,h=Di;c.nodeType!==8;){if(!h){c=null;break t}if(c=Li(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){pn=Li(c.nextSibling),o=c.data==="F!";break e}}Za(o)}o=!1}o&&(n=r[0])}}return r=ti(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dg,lastRenderedState:n},r.queue=o,r=Lg.bind(null,bt,o),o.dispatch=r,o=Nf(!1),h=Hf.bind(null,bt,!1,o.queue),o=ti(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=bS.bind(null,bt,c,h,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function pg(t){var n=En();return mg(n,on,t)}function mg(t,n,r){if(n=Uf(t,n,dg)[0],t=ou(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Do(n)}catch(M){throw M===ys?Ql:M}else o=n;n=En();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(bt.flags|=2048,Ts(9,{destroy:void 0},TS.bind(null,c,r),null)),[o,h,t]}function TS(t,n){t.action=n}function gg(t){var n=En(),r=on;if(r!==null)return mg(n,r,t);En(),n=n.memoizedState,r=En();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Ts(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=ru(),bt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function vg(){return En().memoizedState}function lu(t,n,r,o){var c=ti();bt.flags|=t,c.memoizedState=Ts(1|n,{destroy:void 0},r,o===void 0?null:o)}function uu(t,n,r,o){var c=En();o=o===void 0?null:o;var h=c.memoizedState.inst;on!==null&&o!==null&&Tf(o,on.memoizedState.deps)?c.memoizedState=Ts(n,h,r,o):(bt.flags|=t,c.memoizedState=Ts(1|n,h,r,o))}function _g(t,n){lu(8390656,8,t,n)}function Pf(t,n){uu(2048,8,t,n)}function AS(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=ru(),bt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function xg(t){var n=En().memoizedState;return AS({ref:n,nextImpl:t}),function(){if((Qt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function yg(t,n){return uu(4,2,t,n)}function Sg(t,n){return uu(4,4,t,n)}function Mg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Eg(t,n,r){r=r!=null?r.concat([t]):null,uu(4,4,Mg.bind(null,n,t),r)}function Ff(){}function bg(t,n){var r=En();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Tf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Tg(t,n){var r=En();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Tf(n,o[1]))return o[0];if(o=t(),Br){je(!0);try{t()}finally{je(!1)}}return r.memoizedState=[o,n],o}function zf(t,n,r){return r===void 0||(Ea&1073741824)!==0&&(Bt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Av(),bt.lanes|=t,ar|=t,r)}function Ag(t,n,r,o){return pi(r,n)?r:Ms.current!==null?(t=zf(t,r,o),pi(t,n)||(wn=!0),t):(Ea&42)===0||(Ea&1073741824)!==0&&(Bt&261930)===0?(wn=!0,t.memoizedState=r):(t=Av(),bt.lanes|=t,ar|=t,n)}function Rg(t,n,r,o,c){var h=V.p;V.p=h!==0&&8>h?h:8;var M=P.T,w={};P.T=w,Hf(t,!1,n,r);try{var k=c(),oe=P.S;if(oe!==null&&oe(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var xe=SS(k,o);Uo(t,n,xe,yi(t))}else Uo(t,n,o,yi(t))}catch(be){Uo(t,n,{then:function(){},status:"rejected",reason:be},yi())}finally{V.p=h,M!==null&&w.types!==null&&(M.types=w.types),P.T=M}}function RS(){}function If(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=Cg(t).queue;Rg(t,c,n,Z,r===null?RS:function(){return wg(t),r(o)})}function Cg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Z},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wg(t){var n=Cg(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},yi())}function Bf(){return qn(jo)}function Dg(){return En().memoizedState}function Ug(){return En().memoizedState}function CS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=yi();t=Ja(r);var o=$a(n,t,r);o!==null&&(ui(o,n,r),Ao(o,n,r)),n={cache:pf()},t.payload=n;return}n=n.return}}function wS(t,n,r){var o=yi();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(t)?Ng(n,r):(r=nf(t,n,r,o),r!==null&&(ui(r,t,o),Og(r,n,o)))}function Lg(t,n,r){var o=yi();Uo(t,n,r,o)}function Uo(t,n,r,o){var c={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(cu(t))Ng(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,w=h(M,r);if(c.hasEagerState=!0,c.eagerState=w,pi(w,M))return Xl(t,n,c,0),fn===null&&kl(),!1}catch{}if(r=nf(t,n,c,o),r!==null)return ui(r,t,o),Og(r,n,o),!0}return!1}function Hf(t,n,r,o){if(o={lane:2,revertLane:_d(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(t)){if(n)throw Error(s(479))}else n=nf(t,r,o,2),n!==null&&ui(n,t,2)}function cu(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function Ng(t,n){Es=iu=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Og(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,G(t,r)}}var Lo={readContext:qn,use:su,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Lo.useEffectEvent=xn;var Pg={readContext:qn,use:su,useCallback:function(t,n){return ti().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:_g,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,lu(4194308,4,Mg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return lu(4194308,4,t,n)},useInsertionEffect:function(t,n){lu(4,2,t,n)},useMemo:function(t,n){var r=ti();n=n===void 0?null:n;var o=t();if(Br){je(!0);try{t()}finally{je(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=ti();if(r!==void 0){var c=r(n);if(Br){je(!0);try{r(n)}finally{je(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=wS.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=ti();return t={current:t},n.memoizedState=t},useState:function(t){t=Nf(t);var n=t.queue,r=Lg.bind(null,bt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Ff,useDeferredValue:function(t,n){var r=ti();return zf(r,t,n)},useTransition:function(){var t=Nf(!1);return t=Rg.bind(null,bt,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=bt,c=ti();if(kt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),fn===null)throw Error(s(349));(Bt&127)!==0||ng(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,_g(ag.bind(null,o,h,t),[t]),o.flags|=2048,Ts(9,{destroy:void 0},ig.bind(null,o,h,r,n),null),r},useId:function(){var t=ti(),n=fn.identifierPrefix;if(kt){var r=aa,o=ia;r=(o&~(1<<32-qe(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=au++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=MS++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bf,useFormState:hg,useActionState:hg,useOptimistic:function(t){var n=ti();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Hf.bind(null,bt,!0,r),r.dispatch=n,[t,n]},useMemoCache:Df,useCacheRefresh:function(){return ti().memoizedState=CS.bind(null,bt)},useEffectEvent:function(t){var n=ti(),r={impl:t};return n.memoizedState=r,function(){if((Qt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Gf={readContext:qn,use:su,useCallback:bg,useContext:qn,useEffect:Pf,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:ou,useRef:vg,useState:function(){return ou(ba)},useDebugValue:Ff,useDeferredValue:function(t,n){var r=En();return Ag(r,on.memoizedState,t,n)},useTransition:function(){var t=ou(ba)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Bf,useFormState:pg,useActionState:pg,useOptimistic:function(t,n){var r=En();return og(r,on,t,n)},useMemoCache:Df,useCacheRefresh:Ug};Gf.useEffectEvent=xg;var Fg={readContext:qn,use:su,useCallback:bg,useContext:qn,useEffect:Pf,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Lf,useRef:vg,useState:function(){return Lf(ba)},useDebugValue:Ff,useDeferredValue:function(t,n){var r=En();return on===null?zf(r,t,n):Ag(r,on.memoizedState,t,n)},useTransition:function(){var t=Lf(ba)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Bf,useFormState:gg,useActionState:gg,useOptimistic:function(t,n){var r=En();return on!==null?og(r,on,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Df,useCacheRefresh:Ug};Fg.useEffectEvent=xg;function Vf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var kf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=yi(),c=Ja(o);c.payload=n,r!=null&&(c.callback=r),n=$a(t,c,o),n!==null&&(ui(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=yi(),c=Ja(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=$a(t,c,o),n!==null&&(ui(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=yi(),o=Ja(r);o.tag=2,n!=null&&(o.callback=n),n=$a(t,o,r),n!==null&&(ui(n,t,r),Ao(n,t,r))}};function zg(t,n,r,o,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!_o(r,o)||!_o(c,h):!0}function Ig(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Hr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}function Bg(t){Vl(t)}function Hg(t){console.error(t)}function Gg(t){Vl(t)}function fu(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xf(t,n,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){fu(t,n)},r}function kg(t){return t=Ja(t),t.tag=3,t}function Xg(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){Vg(n,r,o)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Vg(n,r,o),typeof c!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function DS(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&vs(n,r,c,!0),r=gi.current,r!==null){switch(r.tag){case 31:case 13:return Ui===null?Eu():r.alternate===null&&yn===0&&(yn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Jl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),md(t,o,c)),!1;case 22:return r.flags|=65536,o===Jl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),md(t,o,c)),!1}throw Error(s(435,r.tag))}return md(t,o,c),Eu(),!1}if(kt)return n=gi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==uf&&(t=Error(s(422),{cause:o}),So(Ri(t,r)))):(o!==uf&&(n=Error(s(423),{cause:o}),So(Ri(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Ri(o,r),c=Xf(t.stateNode,o,c),yf(t,c),yn!==4&&(yn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ri(h,r),Ho===null?Ho=[h]:Ho.push(h),yn!==4&&(yn=2),n===null)return!0;o=Ri(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Xf(r.stateNode,o,t),yf(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rr===null||!rr.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=kg(c),Xg(c,t,r,o),yf(r,c),!1}r=r.return}while(r!==null);return!1}var Wf=Error(s(461)),wn=!1;function Yn(t,n,r,o){n.child=t===null?jm(n,null,r,o):Ir(n,t.child,r,o)}function Wg(t,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return Or(n),o=Af(t,n,r,M,h,c),w=Rf(),t!==null&&!wn?(Cf(t,n,c),Ta(t,n,c)):(kt&&w&&of(n),n.flags|=1,Yn(t,n,o,c),n.child)}function qg(t,n,r,o,c){if(t===null){var h=r.type;return typeof h=="function"&&!af(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Yg(t,n,h,o,c)):(t=ql(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!$f(t,c)){var M=h.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(M,o)&&t.ref===n.ref)return Ta(t,n,c)}return n.flags|=1,t=xa(h,o),t.ref=n.ref,t.return=n,n.child=t}function Yg(t,n,r,o,c){if(t!==null){var h=t.memoizedProps;if(_o(h,o)&&t.ref===n.ref)if(wn=!1,n.pendingProps=o=h,$f(t,c))(t.flags&131072)!==0&&(wn=!0);else return n.lanes=t.lanes,Ta(t,n,c)}return qf(t,n,r,o,c)}function jg(t,n,r,o){var c=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return Zg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(n,h!==null?h.cachePool:null),h!==null?Qm(n,h):Mf(),Jm(n);else return o=n.lanes=536870912,Zg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Kl(n,h.cachePool),Qm(n,h),tr(),n.memoizedState=null):(t!==null&&Kl(n,null),Mf(),tr());return Yn(t,n,c,r),n.child}function No(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zg(t,n,r,o,c){var h=gf();return h=h===null?null:{parent:Rn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Kl(n,null),Mf(),Jm(n),t!==null&&vs(t,n,o,!0),n.childLanes=c,null}function du(t,n){return n=pu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Kg(t,n,r){return Ir(n,t.child,null,r),t=du(n,n.pendingProps),t.flags|=2,vi(n),n.memoizedState=null,t}function US(t,n,r){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(kt){if(o.mode==="hidden")return t=du(n,o),n.lanes=536870912,No(null,t);if(bf(n),(t=pn)?(t=l0(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=Nm(t),r.return=n,n.child=r,Wn=n,pn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return du(n,o)}var h=t.memoizedState;if(h!==null){var M=h.dehydrated;if(bf(n),c)if(n.flags&256)n.flags&=-257,n=Kg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(wn||vs(t,n,r,!1),c=(r&t.childLanes)!==0,wn||c){if(o=fn,o!==null&&(M=K(o,r),M!==0&&M!==h.retryLane))throw h.retryLane=M,Dr(t,M),ui(o,t,M),Wf;Eu(),n=Kg(t,n,r)}else t=h.treeContext,pn=Li(M.nextSibling),Wn=n,kt=!0,ja=null,Di=!1,t!==null&&Fm(n,t),n=du(n,o),n.flags|=4096;return n}return t=xa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function hu(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function qf(t,n,r,o,c){return Or(n),r=Af(t,n,r,o,void 0,c),o=Rf(),t!==null&&!wn?(Cf(t,n,c),Ta(t,n,c)):(kt&&o&&of(n),n.flags|=1,Yn(t,n,r,c),n.child)}function Qg(t,n,r,o,c,h){return Or(n),n.updateQueue=null,r=eg(n,o,r,c),$m(t),o=Rf(),t!==null&&!wn?(Cf(t,n,h),Ta(t,n,h)):(kt&&o&&of(n),n.flags|=1,Yn(t,n,r,h),n.child)}function Jg(t,n,r,o,c){if(Or(n),n.stateNode===null){var h=hs,M=r.contextType;typeof M=="object"&&M!==null&&(h=qn(M)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=kf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},_f(n),M=r.contextType,h.context=typeof M=="object"&&M!==null?qn(M):hs,h.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Vf(n,r,M,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&kf.enqueueReplaceState(h,h.state,null),Co(n,o,h,c),Ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,k=Hr(r,w);h.props=k;var oe=h.context,xe=r.contextType;M=hs,typeof xe=="object"&&xe!==null&&(M=qn(xe));var be=r.getDerivedStateFromProps;xe=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||oe!==M)&&Ig(n,h,o,M),Qa=!1;var de=n.memoizedState;h.state=de,Co(n,o,h,c),Ro(),oe=n.memoizedState,w||de!==oe||Qa?(typeof be=="function"&&(Vf(n,r,be,o),oe=n.memoizedState),(k=Qa||zg(n,r,k,o,de,oe,M))?(xe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),h.props=o,h.state=oe,h.context=M,o=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,xf(t,n),M=n.memoizedProps,xe=Hr(r,M),h.props=xe,be=n.pendingProps,de=h.context,oe=r.contextType,k=hs,typeof oe=="object"&&oe!==null&&(k=qn(oe)),w=r.getDerivedStateFromProps,(oe=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==be||de!==k)&&Ig(n,h,o,k),Qa=!1,de=n.memoizedState,h.state=de,Co(n,o,h,c),Ro();var ge=n.memoizedState;M!==be||de!==ge||Qa||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof w=="function"&&(Vf(n,r,w,o),ge=n.memoizedState),(xe=Qa||zg(n,r,xe,o,de,ge,k)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ge,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ge,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),h.props=o,h.state=ge,h.context=k,o=xe):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,hu(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ir(n,t.child,null,c),n.child=Ir(n,null,r,c)):Yn(t,n,r,c),n.memoizedState=h.state,t=n.child):t=Ta(t,n,c),t}function $g(t,n,r,o){return Lr(),n.flags|=256,Yn(t,n,r,o),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:Vm()}}function Zf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=xi),t}function ev(t,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(kt){if(c?er(n):tr(),(t=pn)?(t=l0(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=Nm(t),r.return=n,n.child=r,Wn=n,pn=null)):t=null,t===null)throw Za(n);return Ud(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,c?(tr(),c=n.mode,w=pu({mode:"hidden",children:w},c),o=Ur(o,c,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=jf(r),o.childLanes=Zf(t,M,r),n.memoizedState=Yf,No(null,o)):(er(n),Kf(n,w))}var k=t.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(h)n.flags&256?(er(n),n.flags&=-257,n=Qf(t,n,r)):n.memoizedState!==null?(tr(),n.child=t.child,n.flags|=128,n=null):(tr(),w=o.fallback,c=n.mode,o=pu({mode:"visible",children:o.children},c),w=Ur(w,c,r,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Ir(n,t.child,null,r),o=n.child,o.memoizedState=jf(r),o.childLanes=Zf(t,M,r),n.memoizedState=Yf,n=No(null,o));else if(er(n),Ud(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var oe=M.dgst;M=oe,o=Error(s(419)),o.stack="",o.digest=M,So({value:o,source:null,stack:null}),n=Qf(t,n,r)}else if(wn||vs(t,n,r,!1),M=(r&t.childLanes)!==0,wn||M){if(M=fn,M!==null&&(o=K(M,r),o!==0&&o!==k.retryLane))throw k.retryLane=o,Dr(t,o),ui(M,t,o),Wf;Dd(w)||Eu(),n=Qf(t,n,r)}else Dd(w)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,pn=Li(w.nextSibling),Wn=n,kt=!0,ja=null,Di=!1,t!==null&&Fm(n,t),n=Kf(n,o.children),n.flags|=4096);return n}return c?(tr(),w=o.fallback,c=n.mode,k=t.child,oe=k.sibling,o=xa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,oe!==null?w=xa(oe,w):(w=Ur(w,c,r,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,No(null,o),o=n.child,w=t.child.memoizedState,w===null?w=jf(r):(c=w.cachePool,c!==null?(k=Rn._currentValue,c=c.parent!==k?{parent:k,pool:k}:c):c=Vm(),w={baseLanes:w.baseLanes|r,cachePool:c}),o.memoizedState=w,o.childLanes=Zf(t,M,r),n.memoizedState=Yf,No(t.child,o)):(er(n),r=t.child,t=r.sibling,r=xa(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=r,n.memoizedState=null,r)}function Kf(t,n){return n=pu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pu(t,n){return t=mi(22,t,null,n),t.lanes=0,t}function Qf(t,n,r){return Ir(n,t.child,null,r),t=Kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tv(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),df(t.return,n,r)}function Jf(t,n,r,o,c,h){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=r,M.tailMode=c,M.treeForkCount=h)}function nv(t,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var M=Mn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,_e(Mn,M),Yn(t,n,o,r),o=kt?yo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tv(t,r,n);else if(t.tag===19)tv(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&nu(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Jf(n,!1,c,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&nu(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Jf(n,!0,r,null,h,o);break;case"together":Jf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ta(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),ar|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(vs(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=xa(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=xa(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function LS(t,n,r){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Ka(n,Rn,t.memoizedState.cache),Lr();break;case 27:case 5:Je(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(er(n),n.flags|=128,null):(r&n.child.childLanes)!==0?ev(t,n,r):(er(n),t=Ta(t,n,r),t!==null?t.sibling:null);er(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(vs(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return nv(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(Mn,Mn.current),o)break;return null;case 22:return n.lanes=0,jg(t,n,r,n.pendingProps);case 24:Ka(n,Rn,t.memoizedState.cache)}return Ta(t,n,r)}function iv(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)wn=!0;else{if(!$f(t,r)&&(n.flags&128)===0)return wn=!1,LS(t,n,r);wn=(t.flags&131072)!==0}else wn=!1,kt&&(n.flags&1048576)!==0&&Pm(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fr(n.elementType),n.type=t,typeof t=="function")af(t)?(o=Hr(t,o),n.tag=1,n=Jg(null,n,t,o,r)):(n.tag=0,n=qf(null,n,t,o,r));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Wg(null,n,t,o,r);break e}else if(c===A){n.tag=14,n=qg(null,n,t,o,r);break e}}throw n=ce(t)||t,Error(s(306,n,""))}}return n;case 0:return qf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=Hr(o,n.pendingProps),Jg(t,n,o,c,r);case 3:e:{if(Le(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,xf(t,n),Co(n,o,null,r);var M=n.memoizedState;if(o=M.cache,Ka(n,Rn,o),o!==h.cache&&hf(n,[Rn],r,!0),Ro(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=$g(t,n,o,r);break e}else if(o!==c){c=Ri(Error(s(424)),n),So(c),n=$g(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,pn=Li(t.firstChild),Wn=n,kt=!0,ja=null,Di=!0,r=jm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),o===c){n=Ta(t,n,r);break e}Yn(t,n,o,r)}n=n.child}return n;case 26:return hu(t,n),t===null?(r=p0(n.type,null,n.pendingProps,null))?n.memoizedState=r:kt||(r=n.type,t=n.pendingProps,o=Du(ie.current).createElement(r),o[Ve]=n,o[Ze]=t,jn(o,r,t),C(o),n.stateNode=o):n.memoizedState=p0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&kt&&(o=n.stateNode=f0(n.type,n.pendingProps,ie.current),Wn=n,Di=!0,c=pn,ur(n.type)?(Ld=c,pn=Li(o.firstChild)):pn=c),Yn(t,n,n.pendingProps.children,r),hu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&kt&&((c=o=pn)&&(o=lM(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Wn=n,pn=Li(o.firstChild),Di=!1,c=!0):c=!1),c||Za(n)),Je(n),c=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,Rd(c,h)?o=null:M!==null&&Rd(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Af(t,n,ES,null,null,r),jo._currentValue=c),hu(t,n),Yn(t,n,o,r),n.child;case 6:return t===null&&kt&&((t=r=pn)&&(r=uM(r,n.pendingProps,Di),r!==null?(n.stateNode=r,Wn=n,pn=null,t=!0):t=!1),t||Za(n)),null;case 13:return ev(t,n,r);case 4:return Le(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ir(n,null,o,r):Yn(t,n,o,r),n.child;case 11:return Wg(t,n,n.type,n.pendingProps,r);case 7:return Yn(t,n,n.pendingProps,r),n.child;case 8:return Yn(t,n,n.pendingProps.children,r),n.child;case 12:return Yn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ka(n,n.type,o.value),Yn(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Or(n),c=qn(c),o=o(c),n.flags|=1,Yn(t,n,o,r),n.child;case 14:return qg(t,n,n.type,n.pendingProps,r);case 15:return Yg(t,n,n.type,n.pendingProps,r);case 19:return nv(t,n,r);case 31:return US(t,n,r);case 22:return jg(t,n,r,n.pendingProps);case 24:return Or(n),o=qn(Rn),t===null?(c=gf(),c===null&&(c=fn,h=pf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},_f(n),Ka(n,Rn,c)):((t.lanes&r)!==0&&(xf(t,n),Co(n,null,null,r),Ro()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ka(n,Rn,o)):(o=h.cache,Ka(n,Rn,o),o!==c.cache&&hf(n,[Rn],r,!0))),Yn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Aa(t){t.flags|=4}function ed(t,n,r,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Dv())t.flags|=8192;else throw zr=Jl,vf}else t.flags&=-16777217}function av(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!x0(n))if(Dv())t.flags|=8192;else throw zr=Jl,vf}function mu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Wt():536870912,t.lanes|=n,ws|=n)}function Oo(t,n){if(!kt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function mn(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function NS(t,n,r){var o=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ma(Rn),tt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gs(n)?Aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),mn(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(Aa(n),h!==null?(mn(n),av(n,h)):(mn(n),ed(n,c,null,o,r))):h?h!==t.memoizedState?(Aa(n),mn(n),av(n,h)):(mn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Aa(n),mn(n),ed(n,c,t,o,r)),null;case 27:if(Tt(n),r=ie.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}t=Re.current,gs(n)?zm(n):(t=f0(c,o,r),n.stateNode=t,Aa(n))}return mn(n),null;case 5:if(Tt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(h=Re.current,gs(n))zm(n);else{var M=Du(ie.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(c,{is:o.is}):M.createElement(c)}}h[Ve]=n,h[Ze]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;e:switch(jn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Aa(n)}}return mn(n),ed(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,gs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=Wn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[Ve]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||e0(t.nodeValue,r)),t||Za(n,!0)}else t=Du(t).createTextNode(o),t[Ve]=n,n.stateNode=t}return mn(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=gs(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ve]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),t=!1}else r=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(vi(n),n):(vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ve]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),c=!1}else c=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(vi(n),n):(vi(n),null)}return vi(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),mu(n,n.updateQueue),mn(n),null);case 4:return tt(),t===null&&Md(n.stateNode.containerInfo),mn(n),null;case 10:return Ma(n.type),mn(n),null;case 19:if(te(Mn),o=n.memoizedState,o===null)return mn(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)Oo(o,!1);else{if(yn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=nu(t),h!==null){for(n.flags|=128,Oo(o,!1),t=h.updateQueue,n.updateQueue=t,mu(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Lm(r,t),r=r.sibling;return _e(Mn,Mn.current&1|2),kt&&ya(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&_()>yu&&(n.flags|=128,c=!0,Oo(o,!1),n.lanes=4194304)}else{if(!c)if(t=nu(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,mu(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!kt)return mn(n),null}else 2*_()-o.renderingStartTime>yu&&r!==536870912&&(n.flags|=128,c=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_(),t.sibling=null,r=Mn.current,_e(Mn,c?r&1|2:r&1),kt&&ya(n,o.treeForkCount),t):(mn(n),null);case 22:case 23:return vi(n),Ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),r=n.updateQueue,r!==null&&mu(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&te(Pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(Rn),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OS(t,n){switch(lf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(Rn),tt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Tt(n),null;case 31:if(n.memoizedState!==null){if(vi(n),n.alternate===null)throw Error(s(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(Mn),null;case 4:return tt(),null;case 10:return Ma(n.type),null;case 22:case 23:return vi(n),Ef(),t!==null&&te(Pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(Rn),null;case 25:return null;default:return null}}function rv(t,n){switch(lf(n),n.tag){case 3:Ma(Rn),tt();break;case 26:case 27:case 5:Tt(n);break;case 4:tt();break;case 31:n.memoizedState!==null&&vi(n);break;case 13:vi(n);break;case 19:te(Mn);break;case 10:Ma(n.type);break;case 22:case 23:vi(n),Ef(),t!==null&&te(Pr);break;case 24:Ma(Rn)}}function Po(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var h=r.create,M=r.inst;o=h(),M.destroy=o}r=r.next}while(r!==c)}}catch(w){an(n,n.return,w)}}function nr(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,c=n;var k=r,oe=w;try{oe()}catch(xe){an(c,k,xe)}}}o=o.next}while(o!==h)}}catch(xe){an(n,n.return,xe)}}function sv(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Km(n,r)}catch(o){an(t,t.return,o)}}}function ov(t,n,r){r.props=Hr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){an(t,n,o)}}function Fo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){an(t,n,c)}}function ra(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){an(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){an(t,n,c)}else r.current=null}function lv(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){an(t,t.return,c)}}function td(t,n,r){try{var o=t.stateNode;nM(o,t.type,r,n),o[Ze]=n}catch(c){an(t,t.return,c)}}function uv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=va));else if(o!==4&&(o===27&&ur(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(id(t,n,r),t=t.sibling;t!==null;)id(t,n,r),t=t.sibling}function gu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&ur(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(gu(t,n,r),t=t.sibling;t!==null;)gu(t,n,r),t=t.sibling}function cv(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);jn(n,o,r),n[Ve]=t,n[Ze]=r}catch(h){an(t,t.return,h)}}var Ra=!1,Dn=!1,ad=!1,fv=typeof WeakSet=="function"?WeakSet:Set,In=null;function PS(t,n){if(t=t.containerInfo,Td=zu,t=Em(t),Kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var M=0,w=-1,k=-1,oe=0,xe=0,be=t,de=null;t:for(;;){for(var ge;be!==r||c!==0&&be.nodeType!==3||(w=M+c),be!==h||o!==0&&be.nodeType!==3||(k=M+o),be.nodeType===3&&(M+=be.nodeValue.length),(ge=be.firstChild)!==null;)de=be,be=ge;for(;;){if(be===t)break t;if(de===r&&++oe===c&&(w=M),de===h&&++xe===o&&(k=M),(ge=be.nextSibling)!==null)break;be=de,de=be.parentNode}be=ge}r=w===-1||k===-1?null:{start:w,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ad={focusedElem:t,selectionRange:r},zu=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)c=t[r],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,c=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var rt=Hr(r.type,c);t=o.getSnapshotBeforeUpdate(rt,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){an(r,r.return,mt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)wd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function dv(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:wa(t,r),o&4&&Po(5,r);break;case 1:if(wa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(M){an(r,r.return,M)}else{var c=Hr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){an(r,r.return,M)}}o&64&&sv(r),o&512&&Fo(r,r.return);break;case 3:if(wa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Km(t,n)}catch(M){an(r,r.return,M)}}break;case 27:n===null&&o&4&&cv(r);case 26:case 5:wa(t,r),n===null&&o&4&&lv(r),o&512&&Fo(r,r.return);break;case 12:wa(t,r);break;case 31:wa(t,r),o&4&&mv(t,r);break;case 13:wa(t,r),o&4&&gv(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=XS.bind(null,r),cM(t,r))));break;case 22:if(o=r.memoizedState!==null||Ra,!o){n=n!==null&&n.memoizedState!==null||Dn,c=Ra;var h=Dn;Ra=o,(Dn=n)&&!h?Da(t,r,(r.subtreeFlags&8772)!==0):wa(t,r),Ra=c,Dn=h}break;case 30:break;default:wa(t,r)}}function hv(t){var n=t.alternate;n!==null&&(t.alternate=null,hv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&gn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _n=null,ri=!1;function Ca(t,n,r){for(r=r.child;r!==null;)pv(t,n,r),r=r.sibling}function pv(t,n,r){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(we,r)}catch{}switch(r.tag){case 26:Dn||ra(r,n),Ca(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Dn||ra(r,n);var o=_n,c=ri;ur(r.type)&&(_n=r.stateNode,ri=!1),Ca(t,n,r),Wo(r.stateNode),_n=o,ri=c;break;case 5:Dn||ra(r,n);case 6:if(o=_n,c=ri,_n=null,Ca(t,n,r),_n=o,ri=c,_n!==null)if(ri)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(r.stateNode)}catch(h){an(r,n,h)}else try{_n.removeChild(r.stateNode)}catch(h){an(r,n,h)}break;case 18:_n!==null&&(ri?(t=_n,s0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),zs(t)):s0(_n,r.stateNode));break;case 4:o=_n,c=ri,_n=r.stateNode.containerInfo,ri=!0,Ca(t,n,r),_n=o,ri=c;break;case 0:case 11:case 14:case 15:nr(2,r,n),Dn||nr(4,r,n),Ca(t,n,r);break;case 1:Dn||(ra(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ov(r,n,o)),Ca(t,n,r);break;case 21:Ca(t,n,r);break;case 22:Dn=(o=Dn)||r.memoizedState!==null,Ca(t,n,r),Dn=o;break;default:Ca(t,n,r)}}function mv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(r){an(n,n.return,r)}}}function gv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(r){an(n,n.return,r)}}function FS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fv),n;default:throw Error(s(435,t.tag))}}function vu(t,n){var r=FS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var c=WS.bind(null,t,o);o.then(c,c)}})}function si(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],h=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(ur(w.type)){_n=w.stateNode,ri=!1;break e}break;case 5:_n=w.stateNode,ri=!1;break e;case 3:case 4:_n=w.stateNode.containerInfo,ri=!0;break e}w=w.return}if(_n===null)throw Error(s(160));pv(h,M,c),_n=null,ri=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vv(n,t),n=n.sibling}var Xi=null;function vv(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),o&4&&(nr(3,t,t.return),Po(3,t),nr(5,t,t.return));break;case 1:si(n,t),oi(t),o&512&&(Dn||r===null||ra(r,r.return)),o&64&&Ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Xi;if(si(n,t),oi(t),o&512&&(Dn||r===null||ra(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[hn]||h[Ve]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),jn(h,o,r),h[Ve]=t,C(h),o=h;break e;case"link":var M=v0("link","href",c).get(o+(r.href||""));if(M){for(var w=0;w<M.length;w++)if(h=M[w],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(w,1);break t}}h=c.createElement(o),jn(h,o,r),c.head.appendChild(h);break;case"meta":if(M=v0("meta","content",c).get(o+(r.content||""))){for(w=0;w<M.length;w++)if(h=M[w],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(w,1);break t}}h=c.createElement(o),jn(h,o,r),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[Ve]=t,C(h),o=h}t.stateNode=o}else _0(c,t.type,t.stateNode);else t.stateNode=g0(c,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?_0(c,t.type,t.stateNode):g0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&td(t,t.memoizedProps,r.memoizedProps)}break;case 27:si(n,t),oi(t),o&512&&(Dn||r===null||ra(r,r.return)),r!==null&&o&4&&td(t,t.memoizedProps,r.memoizedProps);break;case 5:if(si(n,t),oi(t),o&512&&(Dn||r===null||ra(r,r.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(rt){an(t,t.return,rt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,td(t,c,r!==null?r.memoizedProps:c)),o&1024&&(ad=!0);break;case 6:if(si(n,t),oi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(rt){an(t,t.return,rt)}}break;case 3:if(Nu=null,c=Xi,Xi=Uu(n.containerInfo),si(n,t),Xi=c,oi(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(rt){an(t,t.return,rt)}ad&&(ad=!1,_v(t));break;case 4:o=Xi,Xi=Uu(t.stateNode.containerInfo),si(n,t),oi(t),Xi=o;break;case 12:si(n,t),oi(t);break;case 31:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,vu(t,o)));break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=_()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,vu(t,o)));break;case 22:c=t.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,oe=Ra,xe=Dn;if(Ra=oe||c,Dn=xe||k,si(n,t),Dn=xe,Ra=oe,oi(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||k||Ra||Dn||Gr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){k=r=n;try{if(h=k.stateNode,c)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=k.stateNode;var be=k.memoizedProps.style,de=be!=null&&be.hasOwnProperty("display")?be.display:null;w.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(rt){an(k,k.return,rt)}}}else if(n.tag===6){if(r===null){k=n;try{k.stateNode.nodeValue=c?"":k.memoizedProps}catch(rt){an(k,k.return,rt)}}}else if(n.tag===18){if(r===null){k=n;try{var ge=k.stateNode;c?o0(ge,!0):o0(k.stateNode,!1)}catch(rt){an(k,k.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,vu(t,r))));break;case 19:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,vu(t,o)));break;case 30:break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(uv(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,h=nd(t);gu(t,h,c);break;case 5:var M=r.stateNode;r.flags&32&&(On(M,""),r.flags&=-33);var w=nd(t);gu(t,w,M);break;case 3:case 4:var k=r.stateNode.containerInfo,oe=nd(t);id(t,oe,k);break;default:throw Error(s(161))}}catch(xe){an(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _v(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_v(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function wa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dv(t,n.alternate,n),n=n.sibling}function Gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:nr(4,n,n.return),Gr(n);break;case 1:ra(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&ov(n,n.return,r),Gr(n);break;case 27:Wo(n.stateNode);case 26:case 5:ra(n,n.return),Gr(n);break;case 22:n.memoizedState===null&&Gr(n);break;case 30:Gr(n);break;default:Gr(n)}t=t.sibling}}function Da(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Da(c,h,r),Po(4,h);break;case 1:if(Da(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(oe){an(o,o.return,oe)}if(o=h,c=o.updateQueue,c!==null){var w=o.stateNode;try{var k=c.shared.hiddenCallbacks;if(k!==null)for(c.shared.hiddenCallbacks=null,c=0;c<k.length;c++)Zm(k[c],w)}catch(oe){an(o,o.return,oe)}}r&&M&64&&sv(h),Fo(h,h.return);break;case 27:cv(h);case 26:case 5:Da(c,h,r),r&&o===null&&M&4&&lv(h),Fo(h,h.return);break;case 12:Da(c,h,r);break;case 31:Da(c,h,r),r&&M&4&&mv(c,h);break;case 13:Da(c,h,r),r&&M&4&&gv(c,h);break;case 22:h.memoizedState===null&&Da(c,h,r),Fo(h,h.return);break;case 30:break;default:Da(c,h,r)}n=n.sibling}}function rd(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Mo(r))}function sd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Wi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xv(t,n,r,o),n=n.sibling}function xv(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(t,n,r,o),c&2048&&Po(9,n);break;case 1:Wi(t,n,r,o);break;case 3:Wi(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(c&2048){Wi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,w=h.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){an(n,n.return,k)}}else Wi(t,n,r,o);break;case 31:Wi(t,n,r,o);break;case 13:Wi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Wi(t,n,r,o):zo(t,n):h._visibility&2?Wi(t,n,r,o):(h._visibility|=2,As(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&rd(M,n);break;case 24:Wi(t,n,r,o),c&2048&&sd(n.alternate,n);break;default:Wi(t,n,r,o)}}function As(t,n,r,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,M=n,w=r,k=o,oe=M.flags;switch(M.tag){case 0:case 11:case 15:As(h,M,w,k,c),Po(8,M);break;case 23:break;case 22:var xe=M.stateNode;M.memoizedState!==null?xe._visibility&2?As(h,M,w,k,c):zo(h,M):(xe._visibility|=2,As(h,M,w,k,c)),c&&oe&2048&&rd(M.alternate,M);break;case 24:As(h,M,w,k,c),c&&oe&2048&&sd(M.alternate,M);break;default:As(h,M,w,k,c)}n=n.sibling}}function zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:zo(r,o),c&2048&&rd(o.alternate,o);break;case 24:zo(r,o),c&2048&&sd(o.alternate,o);break;default:zo(r,o)}n=n.sibling}}var Io=8192;function Rs(t,n,r){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)yv(t,n,r),t=t.sibling}function yv(t,n,r){switch(t.tag){case 26:Rs(t,n,r),t.flags&Io&&t.memoizedState!==null&&MM(r,Xi,t.memoizedState,t.memoizedProps);break;case 5:Rs(t,n,r);break;case 3:case 4:var o=Xi;Xi=Uu(t.stateNode.containerInfo),Rs(t,n,r),Xi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,Rs(t,n,r),Io=o):Rs(t,n,r));break;default:Rs(t,n,r)}}function Sv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,Ev(o,t)}Sv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mv(t),t=t.sibling}function Mv(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&nr(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_u(t)):Bo(t);break;default:Bo(t)}}function _u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,Ev(o,t)}Sv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nr(8,n,n.return),_u(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,_u(n));break;default:_u(n)}t=t.sibling}}function Ev(t,n){for(;In!==null;){var r=In;switch(r.tag){case 0:case 11:case 15:nr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,In=o;else e:for(r=t;In!==null;){o=In;var c=o.sibling,h=o.return;if(hv(o),o===r){In=null;break e}if(c!==null){c.return=h,In=c;break e}In=h}}}var zS={getCacheForType:function(t){var n=qn(Rn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return qn(Rn).controller.signal}},IS=typeof WeakMap=="function"?WeakMap:Map,Qt=0,fn=null,Ft=null,Bt=0,nn=0,_i=null,ir=!1,Cs=!1,od=!1,Ua=0,yn=0,ar=0,Vr=0,ld=0,xi=0,ws=0,Ho=null,li=null,ud=!1,xu=0,bv=0,yu=1/0,Su=null,rr=null,Pn=0,sr=null,Ds=null,La=0,cd=0,fd=null,Tv=null,Go=0,dd=null;function yi(){return(Qt&2)!==0&&Bt!==0?Bt&-Bt:P.T!==null?_d():Oe()}function Av(){if(xi===0)if((Bt&536870912)===0||kt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),xi=t}else xi=536870912;return t=gi.current,t!==null&&(t.flags|=32),xi}function ui(t,n,r){(t===fn&&(nn===2||nn===9)||t.cancelPendingCommit!==null)&&(Us(t,0),or(t,Bt,xi,!1)),Nn(t,r),((Qt&2)===0||t!==fn)&&(t===fn&&((Qt&2)===0&&(Vr|=r),yn===4&&or(t,Bt,xi,!1)),sa(t))}function Rv(t,n,r){if((Qt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),c=o?GS(t,n):pd(t,n,!0),h=o;do{if(c===0){Cs&&!o&&or(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!BS(r)){c=pd(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;c=Ho;var k=w.current.memoizedState.isDehydrated;if(k&&(Us(w,M).flags|=256),M=pd(w,M,!1),M!==2){if(od&&!k){w.errorRecoveryDisabledLanes|=h,Vr|=h,c=4;break e}h=li,li=c,h!==null&&(li===null?li=h:li.push.apply(li,h))}c=M}if(h=!1,c!==2)continue}}if(c===1){Us(t,0),or(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:or(o,n,xi,!ir);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=xu+300-_(),10<c)){if(or(o,n,xi,!ir),Ee(o,0,!0)!==0)break e;La=n,o.timeoutHandle=a0(Cv.bind(null,o,r,li,Su,ud,n,xi,Vr,ws,ir,h,"Throttled",-0,0),c);break e}Cv(o,r,li,Su,ud,n,xi,Vr,ws,ir,h,null,-0,0)}}break}while(!0);sa(t)}function Cv(t,n,r,o,c,h,M,w,k,oe,xe,be,de,ge){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},yv(n,h,be);var rt=(h&62914560)===h?xu-_():(h&4194048)===h?bv-_():0;if(rt=EM(be,rt),rt!==null){La=h,t.cancelPendingCommit=rt(Fv.bind(null,t,n,h,r,o,c,M,w,k,xe,be,null,de,ge)),or(t,h,M,!oe);return}}Fv(t,n,h,r,o,c,M,w,k)}function BS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!pi(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(t,n,r,o){n&=~ld,n&=~Vr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-qe(c),M=1<<h;o[h]=-1,c&=~M}r!==0&&rs(t,r,n)}function Mu(){return(Qt&6)===0?(Vo(0),!1):!0}function hd(){if(Ft!==null){if(nn===0)var t=Ft.return;else t=Ft,Sa=Nr=null,wf(t),Ss=null,bo=0,t=Ft;for(;t!==null;)rv(t.alternate,t),t=t.return;Ft=null}}function Us(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,rM(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),La=0,hd(),fn=t,Ft=r=xa(t.current,null),Bt=n,nn=0,_i=null,ir=!1,Cs=Pe(t,n),od=!1,ws=xi=ld=Vr=ar=yn=0,li=Ho=null,ud=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-qe(o),h=1<<c;n|=t[c],o&=~h}return Ua=n,kl(),r}function wv(t,n){bt=null,P.H=Lo,n===ys||n===Ql?(n=Wm(),nn=3):n===vf?(n=Wm(),nn=4):nn=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Ft===null&&(yn=1,fu(t,Ri(n,t.current)))}function Dv(){var t=gi.current;return t===null?!0:(Bt&4194048)===Bt?Ui===null:(Bt&62914560)===Bt||(Bt&536870912)!==0?t===Ui:!1}function Uv(){var t=P.H;return P.H=Lo,t===null?Lo:t}function Lv(){var t=P.A;return P.A=zS,t}function Eu(){yn=4,ir||(Bt&4194048)!==Bt&&gi.current!==null||(Cs=!0),(ar&134217727)===0&&(Vr&134217727)===0||fn===null||or(fn,Bt,xi,!1)}function pd(t,n,r){var o=Qt;Qt|=2;var c=Uv(),h=Lv();(fn!==t||Bt!==n)&&(Su=null,Us(t,n)),n=!1;var M=yn;e:do try{if(nn!==0&&Ft!==null){var w=Ft,k=_i;switch(nn){case 8:hd(),M=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(n=!0);var oe=nn;if(nn=0,_i=null,Ls(t,w,k,oe),r&&Cs){M=0;break e}break;default:oe=nn,nn=0,_i=null,Ls(t,w,k,oe)}}HS(),M=yn;break}catch(xe){wv(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Sa=Nr=null,Qt=o,P.H=c,P.A=h,Ft===null&&(fn=null,Bt=0,kl()),M}function HS(){for(;Ft!==null;)Nv(Ft)}function GS(t,n){var r=Qt;Qt|=2;var o=Uv(),c=Lv();fn!==t||Bt!==n?(Su=null,yu=_()+500,Us(t,n)):Cs=Pe(t,n);e:do try{if(nn!==0&&Ft!==null){n=Ft;var h=_i;t:switch(nn){case 1:nn=0,_i=null,Ls(t,n,h,1);break;case 2:case 9:if(km(h)){nn=0,_i=null,Ov(n);break}n=function(){nn!==2&&nn!==9||fn!==t||(nn=7),sa(t)},h.then(n,n);break e;case 3:nn=7;break e;case 4:nn=5;break e;case 7:km(h)?(nn=0,_i=null,Ov(n)):(nn=0,_i=null,Ls(t,n,h,7));break;case 5:var M=null;switch(Ft.tag){case 26:M=Ft.memoizedState;case 5:case 27:var w=Ft;if(M?x0(M):w.stateNode.complete){nn=0,_i=null;var k=w.sibling;if(k!==null)Ft=k;else{var oe=w.return;oe!==null?(Ft=oe,bu(oe)):Ft=null}break t}}nn=0,_i=null,Ls(t,n,h,5);break;case 6:nn=0,_i=null,Ls(t,n,h,6);break;case 8:hd(),yn=6;break e;default:throw Error(s(462))}}VS();break}catch(xe){wv(t,xe)}while(!0);return Sa=Nr=null,P.H=o,P.A=c,Qt=r,Ft!==null?0:(fn=null,Bt=0,kl(),yn)}function VS(){for(;Ft!==null&&!it();)Nv(Ft)}function Nv(t){var n=iv(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,n===null?bu(t):Ft=n}function Ov(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Qg(r,n,n.pendingProps,n.type,void 0,Bt);break;case 11:n=Qg(r,n,n.pendingProps,n.type.render,n.ref,Bt);break;case 5:wf(n);default:rv(r,n),n=Ft=Lm(n,Ua),n=iv(r,n,Ua)}t.memoizedProps=t.pendingProps,n===null?bu(t):Ft=n}function Ls(t,n,r,o){Sa=Nr=null,wf(n),Ss=null,bo=0;var c=n.return;try{if(DS(t,c,n,r,Bt)){yn=1,fu(t,Ri(r,t.current)),Ft=null;return}}catch(h){if(c!==null)throw Ft=c,h;yn=1,fu(t,Ri(r,t.current)),Ft=null;return}n.flags&32768?(kt||o===1?t=!0:Cs||(Bt&536870912)!==0?t=!1:(ir=t=!0,(o===2||o===9||o===3||o===6)&&(o=gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pv(n,t)):bu(n)}function bu(t){var n=t;do{if((n.flags&32768)!==0){Pv(n,ir);return}t=n.return;var r=NS(n.alternate,n,Ua);if(r!==null){Ft=r;return}if(n=n.sibling,n!==null){Ft=n;return}Ft=n=t}while(n!==null);yn===0&&(yn=5)}function Pv(t,n){do{var r=OS(t.alternate,t);if(r!==null){r.flags&=32767,Ft=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Ft=t;return}Ft=t=r}while(t!==null);yn=6,Ft=null}function Fv(t,n,r,o,c,h,M,w,k){t.cancelPendingCommit=null;do Tu();while(Pn!==0);if((Qt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=tf,hi(t,r,h,M,w,k),t===fn&&(Ft=fn=null,Bt=0),Ds=n,sr=t,La=r,cd=h,fd=c,Tv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qS(ne,function(){return Gv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=V.p,V.p=2,M=Qt,Qt|=4;try{PS(t,n,r)}finally{Qt=M,V.p=c,P.T=o}}Pn=1,zv(),Iv(),Bv()}}function zv(){if(Pn===1){Pn=0;var t=sr,n=Ds,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=V.p;V.p=2;var c=Qt;Qt|=4;try{vv(n,t);var h=Ad,M=Em(t.containerInfo),w=h.focusedElem,k=h.selectionRange;if(M!==w&&w&&w.ownerDocument&&Mm(w.ownerDocument.documentElement,w)){if(k!==null&&Kc(w)){var oe=k.start,xe=k.end;if(xe===void 0&&(xe=oe),"selectionStart"in w)w.selectionStart=oe,w.selectionEnd=Math.min(xe,w.value.length);else{var be=w.ownerDocument||document,de=be&&be.defaultView||window;if(de.getSelection){var ge=de.getSelection(),rt=w.textContent.length,mt=Math.min(k.start,rt),un=k.end===void 0?mt:Math.min(k.end,rt);!ge.extend&&mt>un&&(M=un,un=mt,mt=M);var Q=Sm(w,mt),q=Sm(w,un);if(Q&&q&&(ge.rangeCount!==1||ge.anchorNode!==Q.node||ge.anchorOffset!==Q.offset||ge.focusNode!==q.node||ge.focusOffset!==q.offset)){var re=be.createRange();re.setStart(Q.node,Q.offset),ge.removeAllRanges(),mt>un?(ge.addRange(re),ge.extend(q.node,q.offset)):(re.setEnd(q.node,q.offset),ge.addRange(re))}}}}for(be=[],ge=w;ge=ge.parentNode;)ge.nodeType===1&&be.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<be.length;w++){var Me=be[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}zu=!!Td,Ad=Td=null}finally{Qt=c,V.p=o,P.T=r}}t.current=n,Pn=2}}function Iv(){if(Pn===2){Pn=0;var t=sr,n=Ds,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=V.p;V.p=2;var c=Qt;Qt|=4;try{dv(t,n.alternate,n)}finally{Qt=c,V.p=o,P.T=r}}Pn=3}}function Bv(){if(Pn===4||Pn===3){Pn=0,N();var t=sr,n=Ds,r=La,o=Tv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pn=5:(Pn=0,Ds=sr=null,Hv(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(rr=null),Ae(r),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(we,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=V.p,V.p=2,P.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var w=o[M];h(w.value,{componentStack:w.stack})}}finally{P.T=n,V.p=c}}(La&3)!==0&&Tu(),sa(t),c=t.pendingLanes,(r&261930)!==0&&(c&42)!==0?t===dd?Go++:(Go=0,dd=t):Go=0,Vo(0)}}function Hv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function Tu(){return zv(),Iv(),Bv(),Gv()}function Gv(){if(Pn!==5)return!1;var t=sr,n=cd;cd=0;var r=Ae(La),o=P.T,c=V.p;try{V.p=32>r?32:r,P.T=null,r=fd,fd=null;var h=sr,M=La;if(Pn=0,Ds=sr=null,La=0,(Qt&6)!==0)throw Error(s(331));var w=Qt;if(Qt|=4,Mv(h.current),xv(h,h.current,M,r),Qt=w,Vo(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(we,h)}catch{}return!0}finally{V.p=c,P.T=o,Hv(t,n)}}function Vv(t,n,r){n=Ri(r,n),n=Xf(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(Nn(t,2),sa(t))}function an(t,n,r){if(t.tag===3)Vv(t,t,r);else for(;n!==null;){if(n.tag===3){Vv(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(rr===null||!rr.has(o))){t=Ri(r,t),r=kg(2),o=$a(n,r,2),o!==null&&(Xg(r,o,n,t),Nn(o,2),sa(o));break}}n=n.return}}function md(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new IS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(od=!0,c.add(r),t=kS.bind(null,t,n,r),n.then(t,t))}function kS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,fn===t&&(Bt&r)===r&&(yn===4||yn===3&&(Bt&62914560)===Bt&&300>_()-xu?(Qt&2)===0&&Us(t,0):ld|=r,ws===Bt&&(ws=0)),sa(t)}function kv(t,n){n===0&&(n=Wt()),t=Dr(t,n),t!==null&&(Nn(t,n),sa(t))}function XS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),kv(t,r)}function WS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),kv(t,r)}function qS(t,n){return Nt(t,n)}var Au=null,Ns=null,gd=!1,Ru=!1,vd=!1,lr=0;function sa(t){t!==Ns&&t.next===null&&(Ns===null?Au=Ns=t:Ns=Ns.next=t),Ru=!0,gd||(gd=!0,jS())}function Vo(t,n){if(!vd&&Ru){vd=!0;do for(var r=!1,o=Au;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var M=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-qe(42|t)+1)-1,h&=c&~(M&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,Yv(o,h))}else h=Bt,h=Ee(o,o===fn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Pe(o,h)||(r=!0,Yv(o,h));o=o.next}while(r);vd=!1}}function YS(){Xv()}function Xv(){Ru=gd=!1;var t=0;lr!==0&&aM()&&(t=lr);for(var n=_(),r=null,o=Au;o!==null;){var c=o.next,h=Wv(o,n);h===0?(o.next=null,r===null?Au=c:r.next=c,c===null&&(Ns=r)):(r=o,(t!==0||(h&3)!==0)&&(Ru=!0)),o=c}Pn!==0&&Pn!==5||Vo(t),lr!==0&&(lr=0)}function Wv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-qe(h),w=1<<M,k=c[M];k===-1?((w&r)===0||(w&o)!==0)&&(c[M]=gt(w,n)):k<=n&&(t.expiredLanes|=w),h&=~w}if(n=fn,r=Bt,r=Ee(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(nn===2||nn===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Vt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Pe(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Vt(o),Ae(r)){case 2:case 8:r=me;break;case 32:r=ne;break;case 268435456:r=Ne;break;default:r=ne}return o=qv.bind(null,t),r=Nt(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Vt(o),t.callbackPriority=2,t.callbackNode=null,2}function qv(t,n){if(Pn!==0&&Pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Tu()&&t.callbackNode!==r)return null;var o=Bt;return o=Ee(t,t===fn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Rv(t,o,n),Wv(t,_()),t.callbackNode!=null&&t.callbackNode===r?qv.bind(null,t):null)}function Yv(t,n){if(Tu())return null;Rv(t,n,!0)}function jS(){sM(function(){(Qt&6)!==0?Nt(J,YS):Xv()})}function _d(){if(lr===0){var t=_s;t===0&&(t=He,He<<=1,(He&261888)===0&&(He=256)),lr=t}return lr}function jv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(""+t)}function Zv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function ZS(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=jv((c[Ze]||null).action),M=o.submitter;M&&(n=(n=M[Ze]||null)?jv(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var w=new Bl("action","action",null,o,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var k=M?Zv(c,M):new FormData(c);If(r,{pending:!0,data:k,method:c.method,action:h},null,k)}}else typeof h=="function"&&(w.preventDefault(),k=M?Zv(c,M):new FormData(c),If(r,{pending:!0,data:k,method:c.method,action:h},h,k))},currentTarget:c}]})}}for(var xd=0;xd<ef.length;xd++){var yd=ef[xd],KS=yd.toLowerCase(),QS=yd[0].toUpperCase()+yd.slice(1);ki(KS,"on"+QS)}ki(Am,"onAnimationEnd"),ki(Rm,"onAnimationIteration"),ki(Cm,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(hS,"onTransitionRun"),ki(pS,"onTransitionStart"),ki(mS,"onTransitionCancel"),ki(wm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function Kv(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],k=w.instance,oe=w.currentTarget;if(w=w.listener,k!==h&&c.isPropagationStopped())break e;h=w,c.currentTarget=oe;try{h(c)}catch(xe){Vl(xe)}c.currentTarget=null,h=k}else for(M=0;M<o.length;M++){if(w=o[M],k=w.instance,oe=w.currentTarget,w=w.listener,k!==h&&c.isPropagationStopped())break e;h=w,c.currentTarget=oe;try{h(c)}catch(xe){Vl(xe)}c.currentTarget=null,h=k}}}}function zt(t,n){var r=n[dt];r===void 0&&(r=n[dt]=new Set);var o=t+"__bubble";r.has(o)||(Qv(n,t,2,!1),r.add(o))}function Sd(t,n,r){var o=0;n&&(o|=4),Qv(r,t,o,n)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Md(t){if(!t[Cu]){t[Cu]=!0,j.forEach(function(r){r!=="selectionchange"&&(JS.has(r)||Sd(r,!1,t),Sd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cu]||(n[Cu]=!0,Sd("selectionchange",!1,n))}}function Qv(t,n,r,o){switch(A0(n)){case 2:var c=AM;break;case 8:c=RM;break;default:c=zd}r=c.bind(null,n,r,t),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Ed(t,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===c)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;w!==null;){if(M=vn(w),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=h=M;continue e}w=w.parentNode}}o=o.return}nm(function(){var oe=h,xe=Bc(r),be=[];e:{var de=Dm.get(t);if(de!==void 0){var ge=Bl,rt=t;switch(t){case"keypress":if(zl(r)===0)break e;case"keydown":case"keyup":ge=Wy;break;case"focusin":rt="focus",ge=Wc;break;case"focusout":rt="blur",ge=Wc;break;case"beforeblur":case"afterblur":ge=Wc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=jy;break;case Am:case Rm:case Cm:ge=Fy;break;case wm:ge=Ky;break;case"scroll":case"scrollend":ge=Uy;break;case"wheel":ge=Jy;break;case"copy":case"cut":case"paste":ge=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=om;break;case"toggle":case"beforetoggle":ge=eS}var mt=(n&4)!==0,un=!mt&&(t==="scroll"||t==="scrollend"),Q=mt?de!==null?de+"Capture":null:de;mt=[];for(var q=oe,re;q!==null;){var Me=q;if(re=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||re===null||Q===null||(Me=co(q,Q),Me!=null&&mt.push(Xo(q,Me,re))),un)break;q=q.return}0<mt.length&&(de=new ge(de,rt,null,r,xe),be.push({event:de,listeners:mt}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",de&&r!==Ic&&(rt=r.relatedTarget||r.fromElement)&&(vn(rt)||rt[at]))break e;if((ge||de)&&(de=xe.window===xe?xe:(de=xe.ownerDocument)?de.defaultView||de.parentWindow:window,ge?(rt=r.relatedTarget||r.toElement,ge=oe,rt=rt?vn(rt):null,rt!==null&&(un=u(rt),mt=rt.tag,rt!==un||mt!==5&&mt!==27&&mt!==6)&&(rt=null)):(ge=null,rt=oe),ge!==rt)){if(mt=rm,Me="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(mt=om,Me="onPointerLeave",Q="onPointerEnter",q="pointer"),un=ge==null?de:An(ge),re=rt==null?de:An(rt),de=new mt(Me,q+"leave",ge,r,xe),de.target=un,de.relatedTarget=re,Me=null,vn(xe)===oe&&(mt=new mt(Q,q+"enter",rt,r,xe),mt.target=re,mt.relatedTarget=un,Me=mt),un=Me,ge&&rt)t:{for(mt=$S,Q=ge,q=rt,re=0,Me=Q;Me;Me=mt(Me))re++;Me=0;for(var ht=q;ht;ht=mt(ht))Me++;for(;0<re-Me;)Q=mt(Q),re--;for(;0<Me-re;)q=mt(q),Me--;for(;re--;){if(Q===q||q!==null&&Q===q.alternate){mt=Q;break t}Q=mt(Q),q=mt(q)}mt=null}else mt=null;ge!==null&&Jv(be,de,ge,mt,!1),rt!==null&&un!==null&&Jv(be,un,rt,mt,!0)}}e:{if(de=oe?An(oe):window,ge=de.nodeName&&de.nodeName.toLowerCase(),ge==="select"||ge==="input"&&de.type==="file")var Yt=mm;else if(hm(de))if(gm)Yt=cS;else{Yt=lS;var ot=oS}else ge=de.nodeName,!ge||ge.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?oe&&Vi(oe.elementType)&&(Yt=mm):Yt=uS;if(Yt&&(Yt=Yt(t,oe))){pm(be,Yt,r,xe);break e}ot&&ot(t,de,oe),t==="focusout"&&oe&&de.type==="number"&&oe.memoizedProps.value!=null&&Gn(de,"number",de.value)}switch(ot=oe?An(oe):window,t){case"focusin":(hm(ot)||ot.contentEditable==="true")&&(cs=ot,Qc=oe,xo=null);break;case"focusout":xo=Qc=cs=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,bm(be,r,xe);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":bm(be,r,xe)}var Rt;if(Yc)e:{switch(t){case"compositionstart":var Ht="onCompositionStart";break e;case"compositionend":Ht="onCompositionEnd";break e;case"compositionupdate":Ht="onCompositionUpdate";break e}Ht=void 0}else us?fm(t,r)&&(Ht="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Ht="onCompositionStart");Ht&&(lm&&r.locale!=="ko"&&(us||Ht!=="onCompositionStart"?Ht==="onCompositionEnd"&&us&&(Rt=im()):(qa=xe,Vc="value"in qa?qa.value:qa.textContent,us=!0)),ot=wu(oe,Ht),0<ot.length&&(Ht=new sm(Ht,t,null,r,xe),be.push({event:Ht,listeners:ot}),Rt?Ht.data=Rt:(Rt=dm(r),Rt!==null&&(Ht.data=Rt)))),(Rt=nS?iS(t,r):aS(t,r))&&(Ht=wu(oe,"onBeforeInput"),0<Ht.length&&(ot=new sm("onBeforeInput","beforeinput",null,r,xe),be.push({event:ot,listeners:Ht}),ot.data=Rt)),ZS(be,t,oe,r,xe)}Kv(be,n)})}function Xo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function wu(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=co(t,r),c!=null&&o.unshift(Xo(t,c,h)),c=co(t,n),c!=null&&o.push(Xo(t,c,h))),t.tag===3)return o;t=t.return}return[]}function $S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jv(t,n,r,o,c){for(var h=n._reactName,M=[];r!==null&&r!==o;){var w=r,k=w.alternate,oe=w.stateNode;if(w=w.tag,k!==null&&k===o)break;w!==5&&w!==26&&w!==27||oe===null||(k=oe,c?(oe=co(r,h),oe!=null&&M.unshift(Xo(r,oe,k))):c||(oe=co(r,h),oe!=null&&M.push(Xo(r,oe,k)))),r=r.return}M.length!==0&&t.push({event:n,listeners:M})}var eM=/\r\n?/g,tM=/\u0000|\uFFFD/g;function $v(t){return(typeof t=="string"?t:""+t).replace(eM,`
`).replace(tM,"")}function e0(t,n){return n=$v(n),$v(t)===n}function ln(t,n,r,o,c,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":ut(t,"class",o);break;case"tabIndex":ut(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(t,r,o);break;case"style":ss(t,o,h);break;case"data":if(n!=="object"){ut(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Pl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&ln(t,n,"name",c.name,c,null),ln(t,n,"formEncType",c.formEncType,c,null),ln(t,n,"formMethod",c.formMethod,c,null),ln(t,n,"formTarget",c.formTarget,c,null)):(ln(t,n,"encType",c.encType,c,null),ln(t,n,"method",c.method,c,null),ln(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Pl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=va);break;case"onScroll":o!=null&&zt("scroll",t);break;case"onScrollEnd":o!=null&&zt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":zt("beforetoggle",t),zt("toggle",t),ke(t,"popover",o);break;case"xlinkActuate":et(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":et(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":et(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":et(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":et(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":et(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":et(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":et(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":et(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=wy.get(r)||r,ke(t,r,o))}}function bd(t,n,r,o,c,h){switch(r){case"style":ss(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&zt("scroll",t);break;case"onScrollEnd":o!=null&&zt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),h=t[Ze]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):ke(t,r,o)}}}function jn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",t),zt("load",t);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var M=r[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(t,n,h,M,r,null)}}c&&ln(t,n,"srcSet",r.srcSet,r,null),o&&ln(t,n,"src",r.src,r,null);return;case"input":zt("invalid",t);var w=h=M=c=null,k=null,oe=null;for(o in r)if(r.hasOwnProperty(o)){var xe=r[o];if(xe!=null)switch(o){case"name":c=xe;break;case"type":M=xe;break;case"checked":k=xe;break;case"defaultChecked":oe=xe;break;case"value":h=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:ln(t,n,o,xe,r,null)}}ga(t,h,w,k,oe,M,c,!1);return;case"select":zt("invalid",t),o=M=h=null;for(c in r)if(r.hasOwnProperty(c)&&(w=r[c],w!=null))switch(c){case"value":h=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:ln(t,n,c,w,r,null)}n=h,r=M,t.multiple=!!o,n!=null?Ti(t,!!o,n,!1):r!=null&&Ti(t,!!o,r,!0);return;case"textarea":zt("invalid",t),h=c=o=null;for(M in r)if(r.hasOwnProperty(M)&&(w=r[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":c=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ln(t,n,M,w,r,null)}Vn(t,o,c,h);return;case"option":for(k in r)r.hasOwnProperty(k)&&(o=r[k],o!=null)&&(k==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":ln(t,n,k,o,r,null));return;case"dialog":zt("beforetoggle",t),zt("toggle",t),zt("cancel",t),zt("close",t);break;case"iframe":case"object":zt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)zt(ko[o],t);break;case"image":zt("error",t),zt("load",t);break;case"details":zt("toggle",t);break;case"embed":case"source":case"link":zt("error",t),zt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in r)if(r.hasOwnProperty(oe)&&(o=r[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(t,n,oe,o,r,null)}return;default:if(Vi(n)){for(xe in r)r.hasOwnProperty(xe)&&(o=r[xe],o!==void 0&&bd(t,n,xe,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&ln(t,n,w,o,r,null))}function nM(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,M=null,w=null,k=null,oe=null,xe=null;for(ge in r){var be=r[ge];if(r.hasOwnProperty(ge)&&be!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":k=be;default:o.hasOwnProperty(ge)||ln(t,n,ge,null,o,be)}}for(var de in o){var ge=o[de];if(be=r[de],o.hasOwnProperty(de)&&(ge!=null||be!=null))switch(de){case"type":h=ge;break;case"name":c=ge;break;case"checked":oe=ge;break;case"defaultChecked":xe=ge;break;case"value":M=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==be&&ln(t,n,de,ge,o,be)}}Hn(t,M,w,k,oe,xe,h,c);return;case"select":ge=M=w=de=null;for(h in r)if(k=r[h],r.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":ge=k;default:o.hasOwnProperty(h)||ln(t,n,h,null,o,k)}for(c in o)if(h=o[c],k=r[c],o.hasOwnProperty(c)&&(h!=null||k!=null))switch(c){case"value":de=h;break;case"defaultValue":w=h;break;case"multiple":M=h;default:h!==k&&ln(t,n,c,h,o,k)}n=w,r=M,o=ge,de!=null?Ti(t,!!r,de,!1):!!o!=!!r&&(n!=null?Ti(t,!!r,n,!0):Ti(t,!!r,r?[]:"",!1));return;case"textarea":ge=de=null;for(w in r)if(c=r[w],r.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ln(t,n,w,null,o,c)}for(M in o)if(c=o[M],h=r[M],o.hasOwnProperty(M)&&(c!=null||h!=null))switch(M){case"value":de=c;break;case"defaultValue":ge=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&ln(t,n,M,c,o,h)}tn(t,de,ge);return;case"option":for(var rt in r)de=r[rt],r.hasOwnProperty(rt)&&de!=null&&!o.hasOwnProperty(rt)&&(rt==="selected"?t.selected=!1:ln(t,n,rt,null,o,de));for(k in o)de=o[k],ge=r[k],o.hasOwnProperty(k)&&de!==ge&&(de!=null||ge!=null)&&(k==="selected"?t.selected=de&&typeof de!="function"&&typeof de!="symbol":ln(t,n,k,de,o,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in r)de=r[mt],r.hasOwnProperty(mt)&&de!=null&&!o.hasOwnProperty(mt)&&ln(t,n,mt,null,o,de);for(oe in o)if(de=o[oe],ge=r[oe],o.hasOwnProperty(oe)&&de!==ge&&(de!=null||ge!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:ln(t,n,oe,de,o,ge)}return;default:if(Vi(n)){for(var un in r)de=r[un],r.hasOwnProperty(un)&&de!==void 0&&!o.hasOwnProperty(un)&&bd(t,n,un,void 0,o,de);for(xe in o)de=o[xe],ge=r[xe],!o.hasOwnProperty(xe)||de===ge||de===void 0&&ge===void 0||bd(t,n,xe,de,o,ge);return}}for(var Q in r)de=r[Q],r.hasOwnProperty(Q)&&de!=null&&!o.hasOwnProperty(Q)&&ln(t,n,Q,null,o,de);for(be in o)de=o[be],ge=r[be],!o.hasOwnProperty(be)||de===ge||de==null&&ge==null||ln(t,n,be,de,o,ge)}function t0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var c=r[o],h=c.transferSize,M=c.initiatorType,w=c.duration;if(h&&w&&t0(M)){for(M=0,w=c.responseEnd,o+=1;o<r.length;o++){var k=r[o],oe=k.startTime;if(oe>w)break;var xe=k.transferSize,be=k.initiatorType;xe&&t0(be)&&(k=k.responseEnd,M+=xe*(k<w?1:(w-oe)/(k-oe)))}if(--o,n+=8*(h+M)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Td=null,Ad=null;function Du(t){return t.nodeType===9?t:t.ownerDocument}function n0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cd=null;function aM(){var t=window.event;return t&&t.type==="popstate"?t===Cd?!1:(Cd=t,!0):(Cd=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,sM=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(oM)}:a0;function oM(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function s0(t,n){var r=n,o=0;do{var c=r.nextSibling;if(t.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(c),zs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Wo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Wo(r);for(var h=r.firstChild;h;){var M=h.nextSibling,w=h.nodeName;h[hn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=M}}else r==="body"&&Wo(t.ownerDocument.body);r=c}while(r);zs(n)}function o0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function wd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":wd(r),gn(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function lM(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[hn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Li(t.nextSibling),t===null)break}return null}function uM(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Li(t.nextSibling),t===null))return null;return t}function l0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Li(t.nextSibling),t===null))return null;return t}function Dd(t){return t.data==="$?"||t.data==="$~"}function Ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cM(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ld=null;function u0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Li(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function c0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function f0(t,n,r){switch(n=Du(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);gn(t)}var Ni=new Map,d0=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=V.d;V.d={f:fM,r:dM,D:hM,C:pM,L:mM,m:gM,X:_M,S:vM,M:xM};function fM(){var t=Na.f(),n=Mu();return t||n}function dM(t){var n=Pt(t);n!==null&&n.tag===5&&n.type==="form"?wg(n):Na.r(t)}var Os=typeof document>"u"?null:document;function h0(t,n,r){var o=Os;if(o&&typeof n=="string"&&n){var c=xt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),d0.has(c)||(d0.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),jn(n,"link",t),C(n),o.head.appendChild(n)))}}function hM(t){Na.D(t),h0("dns-prefetch",t,null)}function pM(t,n){Na.C(t,n),h0("preconnect",t,n)}function mM(t,n,r){Na.L(t,n,r);var o=Os;if(o&&t&&n){var c='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+xt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+xt(r.imageSizes)+'"]')):c+='[href="'+xt(t)+'"]';var h=c;switch(n){case"style":h=Ps(t);break;case"script":h=Fs(t)}Ni.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Ni.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Yo(h))||(n=o.createElement("link"),jn(n,"link",t),C(n),o.head.appendChild(n)))}}function gM(t,n){Na.m(t,n);var r=Os;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xt(o)+'"][href="'+xt(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Fs(t)}if(!Ni.has(h)&&(t=g({rel:"modulepreload",href:t},n),Ni.set(h,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Yo(h)))return}o=r.createElement("link"),jn(o,"link",t),C(o),r.head.appendChild(o)}}}function vM(t,n,r){Na.S(t,n,r);var o=Os;if(o&&t){var c=Kn(o).hoistableStyles,h=Ps(t);n=n||"default";var M=c.get(h);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(qo(h)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Ni.get(h))&&Nd(t,r);var k=M=o.createElement("link");C(k),jn(k,"link",t),k._p=new Promise(function(oe,xe){k.onload=oe,k.onerror=xe}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Lu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},c.set(h,M)}}}function _M(t,n){Na.X(t,n);var r=Os;if(r&&t){var o=Kn(r).hoistableScripts,c=Fs(t),h=o.get(c);h||(h=r.querySelector(Yo(c)),h||(t=g({src:t,async:!0},n),(n=Ni.get(c))&&Od(t,n),h=r.createElement("script"),C(h),jn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function xM(t,n){Na.M(t,n);var r=Os;if(r&&t){var o=Kn(r).hoistableScripts,c=Fs(t),h=o.get(c);h||(h=r.querySelector(Yo(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Ni.get(c))&&Od(t,n),h=r.createElement("script"),C(h),jn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function p0(t,n,r,o){var c=(c=ie.current)?Uu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Ps(r.href),r=Kn(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ps(r.href);var h=Kn(c).hoistableStyles,M=h.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=c.querySelector(qo(t)))&&!h._p&&(M.instance=h,M.state.loading=5),Ni.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ni.set(t,r),h||yM(c,t,r,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fs(r),r=Kn(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+xt(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function m0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yM(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),jn(n,"link",r),C(n),t.head.appendChild(n))}function Fs(t){return'[src="'+xt(t)+'"]'}function Yo(t){return"script[async]"+t}function g0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+xt(r.href)+'"]');if(o)return n.instance=o,C(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),jn(o,"style",c),Lu(o,r.precedence,t),n.instance=o;case"stylesheet":c=Ps(r.href);var h=t.querySelector(qo(c));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=m0(r),(c=Ni.get(c))&&Nd(o,c),h=(t.ownerDocument||t).createElement("link"),C(h);var M=h;return M._p=new Promise(function(w,k){M.onload=w,M.onerror=k}),jn(h,"link",o),n.state.loading|=4,Lu(h,r.precedence,t),n.instance=h;case"script":return h=Fs(r.src),(c=t.querySelector(Yo(h)))?(n.instance=c,C(c),c):(o=r,(c=Ni.get(h))&&(o=g({},r),Od(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),C(c),jn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Lu(o,r.precedence,t));return n.instance}function Lu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)h=w;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nu=null;function v0(t,n,r){if(Nu===null){var o=new Map,c=Nu=new Map;c.set(r,o)}else c=Nu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var h=r[c];if(!(h[hn]||h[Ve]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var w=o.get(M);w?w.push(h):o.set(M,[h])}}return o}function _0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function SM(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function MM(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Ps(o.href),h=n.querySelector(qo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ou.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,C(h);return}h=n.ownerDocument||n,o=m0(o),(c=Ni.get(c))&&Nd(o,c),h=h.createElement("link"),C(h);var M=h;M._p=new Promise(function(w,k){M.onload=w,M.onerror=k}),jn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Ou.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Pd=0;function EM(t,n){return t.stylesheets&&t.count===0&&Fu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Pd===0&&(Pd=62500*iM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Pd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pu=null;function Fu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,n.forEach(bM,t),Pu=null,Ou.call(t))}function bM(t,n){if(!(n.state.loading&4)){var r=Pu.get(t);if(r)var o=r.get(null);else{r=new Map,Pu.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var M=c[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),o=M)}o&&r.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),h=r.get(M)||o,h===o&&r.set(null,c),r.set(M,c),this.count++,o=Ou.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var jo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function TM(t,n,r,o,c,h,M,w,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function y0(t,n,r,o,c,h,M,w,k,oe,xe,be){return t=new TM(t,n,r,M,k,oe,xe,be,w),n=1,h===!0&&(n|=24),h=mi(3,null,null,n),t.current=h,h.stateNode=t,n=pf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},_f(h),t}function S0(t){return t?(t=hs,t):hs}function M0(t,n,r,o,c,h){c=S0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ja(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=$a(t,o,n),r!==null&&(ui(r,t,n),Ao(r,t,n))}function E0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Fd(t,n){E0(t,n),(t=t.alternate)&&E0(t,n)}function b0(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&ui(n,t,67108864),Fd(t,67108864)}}function T0(t){if(t.tag===13||t.tag===31){var n=yi();n=he(n);var r=Dr(t,n);r!==null&&ui(r,t,n),Fd(t,n)}}var zu=!0;function AM(t,n,r,o){var c=P.T;P.T=null;var h=V.p;try{V.p=2,zd(t,n,r,o)}finally{V.p=h,P.T=c}}function RM(t,n,r,o){var c=P.T;P.T=null;var h=V.p;try{V.p=8,zd(t,n,r,o)}finally{V.p=h,P.T=c}}function zd(t,n,r,o){if(zu){var c=Id(o);if(c===null)Ed(t,n,o,Iu,r),R0(t,o);else if(wM(c,t,n,r,o))o.stopPropagation();else if(R0(t,o),n&4&&-1<CM.indexOf(t)){for(;c!==null;){var h=Pt(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Te(h.pendingLanes);if(M!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var k=1<<31-qe(M);w.entanglements[1]|=k,M&=~k}sa(h),(Qt&6)===0&&(yu=_()+500,Vo(0))}}break;case 31:case 13:w=Dr(h,2),w!==null&&ui(w,h,2),Mu(),Fd(h,2)}if(h=Id(o),h===null&&Ed(t,n,o,Iu,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else Ed(t,n,o,null,r)}}function Id(t){return t=Bc(t),Bd(t)}var Iu=null;function Bd(t){if(Iu=null,t=vn(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Iu=t,null}function A0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case J:return 2;case me:return 8;case ne:case Ie:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Hd=!1,cr=null,fr=null,dr=null,Zo=new Map,Ko=new Map,hr=[],CM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,r,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Pt(n),n!==null&&b0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function wM(t,n,r,o,c){switch(n){case"focusin":return cr=Qo(cr,t,n,r,o,c),!0;case"dragenter":return fr=Qo(fr,t,n,r,o,c),!0;case"mouseover":return dr=Qo(dr,t,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return Zo.set(h,Qo(Zo.get(h)||null,t,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Ko.set(h,Qo(Ko.get(h)||null,t,n,r,o,c)),!0}return!1}function C0(t){var n=vn(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,nt(t.priority,function(){T0(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,nt(t.priority,function(){T0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Id(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ic=o,r.target.dispatchEvent(o),Ic=null}else return n=Pt(r),n!==null&&b0(n),t.blockedOn=r,!1;n.shift()}return!0}function w0(t,n,r){Bu(t)&&r.delete(n)}function DM(){Hd=!1,cr!==null&&Bu(cr)&&(cr=null),fr!==null&&Bu(fr)&&(fr=null),dr!==null&&Bu(dr)&&(dr=null),Zo.forEach(w0),Ko.forEach(w0)}function Hu(t,n){t.blockedOn===n&&(t.blockedOn=null,Hd||(Hd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,DM)))}var Gu=null;function D0(t){Gu!==t&&(Gu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Bd(o||r)===null)continue;break}var h=Pt(r);h!==null&&(t.splice(n,3),n-=3,If(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function zs(t){function n(k){return Hu(k,t)}cr!==null&&Hu(cr,t),fr!==null&&Hu(fr,t),dr!==null&&Hu(dr,t),Zo.forEach(n),Ko.forEach(n);for(var r=0;r<hr.length;r++){var o=hr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<hr.length&&(r=hr[0],r.blockedOn===null);)C0(r),r.blockedOn===null&&hr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],M=c[Ze]||null;if(typeof h=="function")M||D0(r);else if(M){var w=null;if(h&&h.hasAttribute("formAction")){if(c=h,M=h[Ze]||null)w=M.formAction;else if(Bd(c)!==null)continue}else w=M.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),D0(r)}}}function U0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return c=M})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Gd(t){this._internalRoot=t}Vu.prototype.render=Gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=yi();M0(r,o,t,n,null,null)},Vu.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;M0(t.current,2,null,t,null,null),Mu(),n[at]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Oe();t={blockedOn:null,target:t,priority:n};for(var r=0;r<hr.length&&n!==0&&n<hr[r].priority;r++);hr.splice(r,0,t),r===0&&C0(t)}};var L0=e.version;if(L0!=="19.2.4")throw Error(s(527,L0,"19.2.4"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var UM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{we=ku.inject(UM),Ce=ku}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=Bg,h=Hg,M=Gg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=y0(t,1,!1,null,null,r,o,null,c,h,M,U0),t[at]=n.current,Md(t),new Gd(n)},$o.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",h=Bg,M=Hg,w=Gg,k=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),n=y0(t,1,!0,n,r??null,o,c,k,h,M,w,U0),n.context=S0(null),r=n.current,o=yi(),o=he(o),c=Ja(o),c.callback=null,$a(r,c,o),r=o,n.current.lanes=r,Nn(n,r),sa(n),t[at]=n.current,Md(t),new Vu(n)},$o.version="19.2.4",$o}var V0;function XM(){if(V0)return Xd.exports;V0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Xd.exports=kM(),Xd.exports}var WM=XM();var vx=a=>{throw TypeError(a)},qM=(a,e,i)=>e.has(a)||vx("Cannot "+i),jd=(a,e,i)=>(qM(a,e,"read from private field"),i?i.call(a):e.get(a)),YM=(a,e,i)=>e.has(a)?vx("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,i),k0="popstate";function jM(a={}){function e(l,u){let{pathname:f="/",search:d="",hash:m=""}=Wa(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),_l("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:da(u))}function s(l,u){bn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return KM(e,i,s,a)}function Lt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function bn(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZM(){return Math.random().toString(36).substring(2,10)}function X0(a,e){return{usr:a.state,key:a.key,idx:e}}function _l(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Wa(e):e,state:i,key:e&&e.key||s||ZM()}}function da({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Wa(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function KM(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let E=v(),S=E==null?null:E-p;p=E,m&&m({action:d,location:T.location,delta:S})}function x(E,S){d="PUSH";let D=_l(T.location,E,S);i&&i(D,E),p=v()+1;let L=X0(D,p),O=T.createHref(D);try{f.pushState(L,"",O)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(O)}u&&m&&m({action:d,location:T.location,delta:1})}function y(E,S){d="REPLACE";let D=_l(T.location,E,S);i&&i(D,E),p=v();let L=X0(D,p),O=T.createHref(D);f.replaceState(L,"",O),u&&m&&m({action:d,location:T.location,delta:0})}function b(E){return _x(E)}let T={get action(){return d},get location(){return a(l,f)},listen(E){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(k0,g),m=E,()=>{l.removeEventListener(k0,g),m=null}},createHref(E){return e(l,E)},createURL:b,encodeLocation(E){let S=b(E);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:y,go(E){return f.go(E)}};return T}function _x(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Lt(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:da(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}var fl,W0=class{constructor(a){if(YM(this,fl,new Map),a)for(let[e,i]of a)this.set(e,i)}get(a){if(jd(this,fl).has(a))return jd(this,fl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,e){jd(this,fl).set(a,e)}};fl=new WeakMap;var QM=new Set(["lazy","caseSensitive","path","id","index","children"]);function JM(a){return QM.has(a)}var $M=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function eE(a){return $M.has(a)}function tE(a){return a.index===!0}function xl(a,e,i=[],s={},l=!1){return a.map((u,f)=>{let d=[...i,String(f)],m=typeof u.id=="string"?u.id:d.join("-");if(Lt(u.index!==!0||!u.children,"Cannot specify children on an index route"),Lt(l||!s[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),tE(u)){let p={...u,id:m};return s[m]=q0(p,e(p)),p}else{let p={...u,id:m,children:void 0};return s[m]=q0(p,e(p)),u.children&&(p.children=xl(u.children,e,d,s,l)),p}})}function q0(a,e){return Object.assign(a,{...e,...typeof e.lazy=="object"&&e.lazy!=null?{lazy:{...a.lazy,...e.lazy}}:{}})}function Sr(a,e,i="/"){return dl(a,e,i,!1)}function dl(a,e,i,s){let l=typeof e=="string"?Wa(e):e,u=Hi(l.pathname||"/",i);if(u==null)return null;let f=xx(a);iE(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=pE(u);d=dE(f[m],p,s)}return d}function nE(a,e){let{route:i,pathname:s,params:l}=a;return{id:i.id,pathname:s,params:l,data:e[i.id],loaderData:e[i.id],handle:i.handle}}function xx(a,e=[],i=[],s="",l=!1){let u=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;Lt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=ca([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Lt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xx(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:cE(g,f.index),routesMeta:x})};return a.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of yx(f.path))u(f,d,!0,m)}),e}function yx(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=yx(s.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function iE(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:fE(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var aE=/^:[\w-]+$/,rE=3,sE=2,oE=1,lE=10,uE=-2,Y0=a=>a==="*";function cE(a,e){let i=a.split("/"),s=i.length;return i.some(Y0)&&(s+=uE),e&&(s+=sE),i.filter(l=>!Y0(l)).reduce((l,u)=>l+(aE.test(u)?rE:u===""?oE:lE),s)}function fE(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function dE(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,v=u==="/"?e:e.slice(u.length)||"/",g=Tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=Tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ca([u,g.pathname]),pathnameBase:vE(ca([u,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(u=ca([u,g.pathnameBase]))}return f}function Tc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=hE(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let b=d[x]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const y=d[x];return g&&!y?p[v]=void 0:p[v]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:a}}function hE(a,e=!1,i=!0){bn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function pE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Hi(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function mE({basename:a,pathname:e}){return e==="/"?a:ca([a,e])}var Sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lp=a=>Sx.test(a);function gE(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Wa(a):a,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=j0(i.substring(1),"/"):u=j0(i,e)):u=e,{pathname:u,search:_E(s),hash:xE(l)}}function j0(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Zd(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mx(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Np(a){let e=Mx(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Op(a,e,i,s=!1){let l;typeof a=="string"?l=Wa(a):(l={...a},Lt(!l.pathname||!l.pathname.includes("?"),Zd("?","pathname","search",l)),Lt(!l.pathname||!l.pathname.includes("#"),Zd("#","pathname","hash",l)),Lt(!l.search||!l.search.includes("#"),Zd("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let m=gE(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ca=a=>a.join("/").replace(/\/\/+/g,"/"),vE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),_E=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,xE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Tl=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function yl(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Al(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bx(a,e){let i=a;if(typeof i!="string"||!Sx.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Ex)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),d=Hi(f.pathname,e);f.origin===u.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{bn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}var br=Symbol("Uninstrumented");function yE(a,e){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(l=>l({id:e.id,index:e.index,path:e.path,instrument(u){let f=Object.keys(i);for(let d of f)u[d]&&i[d].push(u[d])}}));let s={};if(typeof e.lazy=="function"&&i.lazy.length>0){let l=$s(i.lazy,e.lazy,()=>{});l&&(s.lazy=l)}if(typeof e.lazy=="object"){let l=e.lazy;["middleware","loader","action"].forEach(u=>{let f=l[u],d=i[`lazy.${u}`];if(typeof f=="function"&&d.length>0){let m=$s(d,f,()=>{});m&&(s.lazy=Object.assign(s.lazy||{},{[u]:m}))}})}return["loader","action"].forEach(l=>{let u=e[l];if(typeof u=="function"&&i[l].length>0){let f=u[br]??u,d=$s(i[l],f,(...m)=>Z0(m[0]));d&&(l==="loader"&&f.hydrate===!0&&(d.hydrate=!0),d[br]=f,s[l]=d)}}),e.middleware&&e.middleware.length>0&&i.middleware.length>0&&(s.middleware=e.middleware.map(l=>{let u=l[br]??l,f=$s(i.middleware,u,(...d)=>Z0(d[0]));return f?(f[br]=u,f):l})),s}function SE(a,e){let i={navigate:[],fetch:[]};if(e.forEach(s=>s({instrument(l){let u=Object.keys(l);for(let f of u)l[f]&&i[f].push(l[f])}})),i.navigate.length>0){let s=a.navigate[br]??a.navigate,l=$s(i.navigate,s,(...u)=>{let[f,d]=u;return{to:typeof f=="number"||typeof f=="string"?f:f?da(f):".",...K0(a,d??{})}});l&&(l[br]=s,a.navigate=l)}if(i.fetch.length>0){let s=a.fetch[br]??a.fetch,l=$s(i.fetch,s,(...u)=>{let[f,,d,m]=u;return{href:d??".",fetcherKey:f,...K0(a,m??{})}});l&&(l[br]=s,a.fetch=l)}return a}function $s(a,e,i){return a.length===0?null:async(...s)=>{let l=await Tx(a,i(...s),()=>e(...s),a.length-1);if(l.type==="error")throw l.value;return l.value}}async function Tx(a,e,i,s){let l=a[s],u;if(l){let f,d=async()=>(f?console.error("You cannot call instrumented handlers more than once"):f=Tx(a,e,i,s-1),u=await f,Lt(u,"Expected a result"),u.type==="error"&&u.value instanceof Error?{status:"error",error:u.value}:{status:"success",error:void 0});try{await l(d,e)}catch(m){console.error("An instrumentation function threw an error:",m)}f||await d(),await f}else try{u={type:"success",value:await i()}}catch(f){u={type:"error",value:f}}return u||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Z0(a){let{request:e,context:i,params:s,unstable_pattern:l}=a;return{request:ME(e),params:{...s},unstable_pattern:l,context:EE(i)}}function K0(a,e){return{currentUrl:da(a.state.location),..."formMethod"in e?{formMethod:e.formMethod}:{},..."formEncType"in e?{formEncType:e.formEncType}:{},..."formData"in e?{formData:e.formData}:{},..."body"in e?{body:e.body}:{}}}function ME(a){return{method:a.method,url:a.url,headers:{get:(...e)=>a.headers.get(...e)}}}function EE(a){if(TE(a)){let e={...a};return Object.freeze(e),e}else return{get:e=>a.get(e)}}var bE=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function TE(a){if(a===null||typeof a!="object")return!1;const e=Object.getPrototypeOf(a);return e===Object.prototype||e===null||Object.getOwnPropertyNames(e).sort().join("\0")===bE}var Ax=["POST","PUT","PATCH","DELETE"],AE=new Set(Ax),RE=["GET",...Ax],CE=new Set(RE),Rx=new Set([301,302,303,307,308]),wE=new Set([307,308]),Kd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},DE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},el={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},UE=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Cx="remix-router-transitions",wx=Symbol("ResetLoaderData");function LE(a){const e=a.window?a.window:typeof window<"u"?window:void 0,i=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Lt(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=a.hydrationRouteProperties||[],l=a.mapRouteProperties||UE,u=l;if(a.unstable_instrumentations){let G=a.unstable_instrumentations;u=K=>({...l(K),...yE(G.map(he=>he.route).filter(Boolean),K)})}let f={},d=xl(a.routes,u,void 0,f),m,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let v=a.dataStrategy||zE,g={...a.future},x=null,y=new Set,b=null,T=null,E=null,S=a.hydrationData!=null,D=Sr(d,a.history.location,p),L=!1,O=null,z;if(D==null&&!a.patchRoutesOnNavigation){let G=Pi(404,{pathname:a.history.location.pathname}),{matches:K,route:he}=Xu(d);z=!0,D=K,O={[he.id]:G}}else if(D&&!a.hydrationData&&Wt(D,d,a.history.location.pathname).active&&(D=null),D)if(D.some(G=>G.route.lazy))z=!1;else if(!D.some(G=>Pp(G.route)))z=!0;else{let G=a.hydrationData?a.hydrationData.loaderData:null,K=a.hydrationData?a.hydrationData.errors:null;if(K){let he=D.findIndex(Ae=>K[Ae.route.id]!==void 0);z=D.slice(0,he+1).every(Ae=>!Nh(Ae.route,G,K))}else z=D.every(he=>!Nh(he.route,G,K))}else{z=!1,D=[];let G=Wt(null,d,a.history.location.pathname);G.active&&G.matches&&(L=!0,D=G.matches)}let B,A={historyAction:a.history.action,location:a.history.location,matches:D,initialized:z,navigation:Kd,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||O,fetchers:new Map,blockers:new Map},W="POP",R=null,U=!1,H,ee=!1,ae=new Map,ce=null,se=!1,P=!1,V=new Set,Z=new Map,ye=0,Se=-1,F=new Map,te=new Set,_e=new Map,Re=new Map,ze=new Set,ie=new Map,ve,Le=null;function tt(){if(x=a.history.listen(({action:G,location:K,delta:he})=>{if(ve){ve(),ve=void 0;return}bn(ie.size===0||he!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ae=Ue({currentLocation:A.location,nextLocation:K,historyAction:G});if(Ae&&he!=null){let Oe=new Promise(nt=>{ve=nt});a.history.go(he*-1),He(Ae,{state:"blocked",location:K,proceed(){He(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),Oe.then(()=>a.history.go(he))},reset(){let nt=new Map(A.blockers);nt.set(Ae,el),At({blockers:nt})}}),R?.resolve(),R=null;return}return pt(G,K)}),i){tb(e,ae);let G=()=>nb(e,ae);e.addEventListener("pagehide",G),ce=()=>e.removeEventListener("pagehide",G)}return A.initialized||pt("POP",A.location,{initialHydration:!0}),B}function Je(){x&&x(),ce&&ce(),y.clear(),H&&H.abort(),A.fetchers.forEach((G,K)=>ct(K)),A.blockers.forEach((G,K)=>Y(K))}function Tt(G){return y.add(G),()=>y.delete(G)}function At(G,K={}){G.matches&&(G.matches=G.matches.map(Oe=>{let nt=f[Oe.route.id],We=Oe.route;return We.element!==nt.element||We.errorElement!==nt.errorElement||We.hydrateFallbackElement!==nt.hydrateFallbackElement?{...Oe,route:nt}:Oe})),A={...A,...G};let he=[],Ae=[];A.fetchers.forEach((Oe,nt)=>{Oe.state==="idle"&&(ze.has(nt)?he.push(nt):Ae.push(nt))}),ze.forEach(Oe=>{!A.fetchers.has(Oe)&&!Z.has(Oe)&&he.push(Oe)}),[...y].forEach(Oe=>Oe(A,{deletedFetchers:he,newErrors:G.errors??null,viewTransitionOpts:K.viewTransitionOpts,flushSync:K.flushSync===!0})),he.forEach(Oe=>ct(Oe)),Ae.forEach(Oe=>A.fetchers.delete(Oe))}function _t(G,K,{flushSync:he}={}){let Ae=A.actionData!=null&&A.navigation.formMethod!=null&&ei(A.navigation.formMethod)&&A.navigation.state==="loading"&&G.state?._isRedirect!==!0,Oe;K.actionData?Object.keys(K.actionData).length>0?Oe=K.actionData:Oe=null:Ae?Oe=A.actionData:Oe=null;let nt=K.loaderData?s_(A.loaderData,K.loaderData,K.matches||[],K.errors):A.loaderData,We=A.blockers;We.size>0&&(We=new Map(We),We.forEach((dt,st)=>We.set(st,el)));let Ve=se?!1:gt(G,K.matches||A.matches),Ze=U===!0||A.navigation.formMethod!=null&&ei(A.navigation.formMethod)&&G.state?._isRedirect!==!0;m&&(d=m,m=void 0),se||W==="POP"||(W==="PUSH"?a.history.push(G,G.state):W==="REPLACE"&&a.history.replace(G,G.state));let at;if(W==="POP"){let dt=ae.get(A.location.pathname);dt&&dt.has(G.pathname)?at={currentLocation:A.location,nextLocation:G}:ae.has(G.pathname)&&(at={currentLocation:G,nextLocation:A.location})}else if(ee){let dt=ae.get(A.location.pathname);dt?dt.add(G.pathname):(dt=new Set([G.pathname]),ae.set(A.location.pathname,dt)),at={currentLocation:A.location,nextLocation:G}}At({...K,actionData:Oe,loaderData:nt,historyAction:W,location:G,initialized:!0,navigation:Kd,revalidation:"idle",restoreScrollPosition:Ve,preventScrollReset:Ze,blockers:We},{viewTransitionOpts:at,flushSync:he===!0}),W="POP",U=!1,ee=!1,se=!1,P=!1,R?.resolve(),R=null,Le?.resolve(),Le=null}async function Et(G,K){if(R?.resolve(),R=null,typeof G=="number"){R||(R=c_());let Ut=R.promise;return a.history.go(G),Ut}let he=Lh(A.location,A.matches,p,G,K?.fromRouteId,K?.relative),{path:Ae,submission:Oe,error:nt}=Q0(!1,he,K),We=A.location,Ve=_l(A.location,Ae,K&&K.state);Ve={...Ve,...a.history.encodeLocation(Ve)};let Ze=K&&K.replace!=null?K.replace:void 0,at="PUSH";Ze===!0?at="REPLACE":Ze===!1||Oe!=null&&ei(Oe.formMethod)&&Oe.formAction===A.location.pathname+A.location.search&&(at="REPLACE");let dt=K&&"preventScrollReset"in K?K.preventScrollReset===!0:void 0,st=(K&&K.flushSync)===!0,Ot=Ue({currentLocation:We,nextLocation:Ve,historyAction:at});if(Ot){He(Ot,{state:"blocked",location:Ve,proceed(){He(Ot,{state:"proceeding",proceed:void 0,reset:void 0,location:Ve}),Et(G,K)},reset(){let Ut=new Map(A.blockers);Ut.set(Ot,el),At({blockers:Ut})}});return}await pt(at,Ve,{submission:Oe,pendingError:nt,preventScrollReset:dt,replace:K&&K.replace,enableViewTransition:K&&K.viewTransition,flushSync:st,callSiteDefaultShouldRevalidate:K&&K.unstable_defaultShouldRevalidate})}function Gt(){Le||(Le=c_()),me(),At({revalidation:"loading"});let G=Le.promise;return A.navigation.state==="submitting"?G:A.navigation.state==="idle"?(pt(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),G):(pt(W||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:ee===!0}),G)}async function pt(G,K,he){H&&H.abort(),H=null,W=G,se=(he&&he.startUninterruptedRevalidation)===!0,Pe(A.location,A.matches),U=(he&&he.preventScrollReset)===!0,ee=(he&&he.enableViewTransition)===!0;let Ae=m||d,Oe=he&&he.overrideNavigation,nt=he?.initialHydration&&A.matches&&A.matches.length>0&&!L?A.matches:Sr(Ae,K,p),We=(he&&he.flushSync)===!0;if(nt&&A.initialized&&!P&&WE(A.location,K)&&!(he&&he.submission&&ei(he.submission.formMethod))){_t(K,{matches:nt},{flushSync:We});return}let Ve=Wt(nt,Ae,K.pathname);if(Ve.active&&Ve.matches&&(nt=Ve.matches),!nt){let{error:gn,notFoundMatches:vn,route:Pt}=Xe(K.pathname);_t(K,{matches:vn,loaderData:{},errors:{[Pt.id]:gn}},{flushSync:We});return}H=new AbortController;let Ze=Js(a.history,K,H.signal,he&&he.submission),at=a.getContext?await a.getContext():new W0,dt;if(he&&he.pendingError)dt=[Mr(nt).route.id,{type:"error",error:he.pendingError}];else if(he&&he.submission&&ei(he.submission.formMethod)){let gn=await dn(Ze,K,he.submission,nt,at,Ve.active,he&&he.initialHydration===!0,{replace:he.replace,flushSync:We});if(gn.shortCircuited)return;if(gn.pendingActionResult){let[vn,Pt]=gn.pendingActionResult;if(Ei(Pt)&&yl(Pt.error)&&Pt.error.status===404){H=null,_t(K,{matches:gn.matches,loaderData:{},errors:{[vn]:Pt.error}});return}}nt=gn.matches||nt,dt=gn.pendingActionResult,Oe=Qd(K,he.submission),We=!1,Ve.active=!1,Ze=Js(a.history,Ze.url,Ze.signal)}let{shortCircuited:st,matches:Ot,loaderData:Ut,errors:hn}=await X(Ze,K,nt,at,Ve.active,Oe,he&&he.submission,he&&he.fetcherSubmission,he&&he.replace,he&&he.initialHydration===!0,We,dt,he&&he.callSiteDefaultShouldRevalidate);st||(H=null,_t(K,{matches:Ot||nt,...o_(dt),loaderData:Ut,errors:hn}))}async function dn(G,K,he,Ae,Oe,nt,We,Ve={}){me();let Ze=$E(K,he);if(At({navigation:Ze},{flushSync:Ve.flushSync===!0}),nt){let st=await Dt(Ae,K.pathname,G.signal);if(st.type==="aborted")return{shortCircuited:!0};if(st.type==="error"){if(st.partialMatches.length===0){let{matches:Ut,route:hn}=Xu(d);return{matches:Ut,pendingActionResult:[hn.id,{type:"error",error:st.error}]}}let Ot=Mr(st.partialMatches).route.id;return{matches:st.partialMatches,pendingActionResult:[Ot,{type:"error",error:st.error}]}}else if(st.matches)Ae=st.matches;else{let{notFoundMatches:Ot,error:Ut,route:hn}=Xe(K.pathname);return{matches:Ot,pendingActionResult:[hn.id,{type:"error",error:Ut}]}}}let at,dt=gc(Ae,K);if(!dt.route.action&&!dt.route.lazy)at={type:"error",error:Pi(405,{method:G.method,pathname:K.pathname,routeId:dt.route.id})};else{let st=eo(u,f,G,Ae,dt,We?[]:s,Oe),Ot=await I(G,st,Oe,null);if(at=Ot[dt.route.id],!at){for(let Ut of Ae)if(Ot[Ut.route.id]){at=Ot[Ut.route.id];break}}if(G.signal.aborted)return{shortCircuited:!0}}if(Jr(at)){let st;return Ve&&Ve.replace!=null?st=Ve.replace:st=i_(at.response.headers.get("Location"),new URL(G.url),p,a.history)===A.location.pathname+A.location.search,await _(G,at,!0,{submission:he,replace:st}),{shortCircuited:!0}}if(Ei(at)){let st=Mr(Ae,dt.route.id);return(Ve&&Ve.replace)!==!0&&(W="PUSH"),{matches:Ae,pendingActionResult:[st.route.id,at,dt.route.id]}}return{matches:Ae,pendingActionResult:[dt.route.id,at]}}async function X(G,K,he,Ae,Oe,nt,We,Ve,Ze,at,dt,st,Ot){let Ut=nt||Qd(K,We),hn=We||Ve||u_(Ut),gn=!se&&!at;if(Oe){if(gn){let ke=$t(st);At({navigation:Ut,...ke!==void 0?{actionData:ke}:{}},{flushSync:dt})}let De=await Dt(he,K.pathname,G.signal);if(De.type==="aborted")return{shortCircuited:!0};if(De.type==="error"){if(De.partialMatches.length===0){let{matches:ut,route:et}=Xu(d);return{matches:ut,loaderData:{},errors:{[et.id]:De.error}}}let ke=Mr(De.partialMatches).route.id;return{matches:De.partialMatches,loaderData:{},errors:{[ke]:De.error}}}else if(De.matches)he=De.matches;else{let{error:ke,notFoundMatches:ut,route:et}=Xe(K.pathname);return{matches:ut,loaderData:{},errors:{[et.id]:ke}}}}let vn=m||d,{dsMatches:Pt,revalidatingFetchers:An}=J0(G,Ae,u,f,a.history,A,he,hn,K,at?[]:s,at===!0,P,V,ze,_e,te,vn,p,a.patchRoutesOnNavigation!=null,st,Ot);if(Se=++ye,!a.dataStrategy&&!Pt.some(De=>De.shouldLoad)&&!Pt.some(De=>De.route.middleware&&De.route.middleware.length>0)&&An.length===0){let De=qe();return _t(K,{matches:he,loaderData:{},errors:st&&Ei(st[1])?{[st[0]]:st[1].error}:null,...o_(st),...De?{fetchers:new Map(A.fetchers)}:{}},{flushSync:dt}),{shortCircuited:!0}}if(gn){let De={};if(!Oe){De.navigation=Ut;let ke=$t(st);ke!==void 0&&(De.actionData=ke)}An.length>0&&(De.fetchers=Nt(An)),At(De,{flushSync:dt})}An.forEach(De=>{Ce(De.key),De.controller&&Z.set(De.key,De.controller)});let Kn=()=>An.forEach(De=>Ce(De.key));H&&H.signal.addEventListener("abort",Kn);let{loaderResults:C,fetcherResults:j}=await J(Pt,An,G,Ae);if(G.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Kn),An.forEach(De=>Z.delete(De.key));let fe=Wu(C);if(fe)return await _(G,fe.result,!0,{replace:Ze}),{shortCircuited:!0};if(fe=Wu(j),fe)return te.add(fe.key),await _(G,fe.result,!0,{replace:Ze}),{shortCircuited:!0};let{loaderData:ue,errors:$}=r_(A,he,C,st,An,j);at&&A.errors&&($={...A.errors,...$});let Fe=qe(),Ke=Be(Se),Ge=Fe||Ke||An.length>0;return{matches:he,loaderData:ue,errors:$,...Ge?{fetchers:new Map(A.fetchers)}:{}}}function $t(G){if(G&&!Ei(G[1]))return{[G[0]]:G[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function Nt(G){return G.forEach(K=>{let he=A.fetchers.get(K.key),Ae=tl(void 0,he?he.data:void 0);A.fetchers.set(K.key,Ae)}),new Map(A.fetchers)}async function Vt(G,K,he,Ae){Ce(G);let Oe=(Ae&&Ae.flushSync)===!0,nt=m||d,We=Lh(A.location,A.matches,p,he,K,Ae?.relative),Ve=Sr(nt,We,p),Ze=Wt(Ve,nt,We);if(Ze.active&&Ze.matches&&(Ve=Ze.matches),!Ve){Ie(G,K,Pi(404,{pathname:We}),{flushSync:Oe});return}let{path:at,submission:dt,error:st}=Q0(!0,We,Ae);if(st){Ie(G,K,st,{flushSync:Oe});return}let Ot=a.getContext?await a.getContext():new W0,Ut=(Ae&&Ae.preventScrollReset)===!0;if(dt&&ei(dt.formMethod)){await it(G,K,at,Ve,Ot,Ze.active,Oe,Ut,dt,Ae&&Ae.unstable_defaultShouldRevalidate);return}_e.set(G,{routeId:K,path:at}),await N(G,K,at,Ve,Ot,Ze.active,Oe,Ut,dt)}async function it(G,K,he,Ae,Oe,nt,We,Ve,Ze,at){me(),_e.delete(G);let dt=A.fetchers.get(G);ne(G,eb(Ze,dt),{flushSync:We});let st=new AbortController,Ot=Js(a.history,he,st.signal,Ze);if(nt){let Qe=await Dt(Ae,new URL(Ot.url).pathname,Ot.signal,G);if(Qe.type==="aborted")return;if(Qe.type==="error"){Ie(G,K,Qe.error,{flushSync:We});return}else if(Qe.matches)Ae=Qe.matches;else{Ie(G,K,Pi(404,{pathname:he}),{flushSync:We});return}}let Ut=gc(Ae,he);if(!Ut.route.action&&!Ut.route.lazy){let Qe=Pi(405,{method:Ze.formMethod,pathname:he,routeId:K});Ie(G,K,Qe,{flushSync:We});return}Z.set(G,st);let hn=ye,gn=eo(u,f,Ot,Ae,Ut,s,Oe),vn=await I(Ot,gn,Oe,G),Pt=vn[Ut.route.id];if(!Pt){for(let Qe of gn)if(vn[Qe.route.id]){Pt=vn[Qe.route.id];break}}if(Ot.signal.aborted){Z.get(G)===st&&Z.delete(G);return}if(ze.has(G)){if(Jr(Pt)||Ei(Pt)){ne(G,Ba(void 0));return}}else{if(Jr(Pt))if(Z.delete(G),Se>hn){ne(G,Ba(void 0));return}else return te.add(G),ne(G,tl(Ze)),_(Ot,Pt,!1,{fetcherSubmission:Ze,preventScrollReset:Ve});if(Ei(Pt)){Ie(G,K,Pt.error);return}}let An=A.navigation.location||A.location,Kn=Js(a.history,An,st.signal),C=m||d,j=A.navigation.state!=="idle"?Sr(C,A.navigation.location,p):A.matches;Lt(j,"Didn't find any matches after fetcher action");let fe=++ye;F.set(G,fe);let ue=tl(Ze,Pt.data);A.fetchers.set(G,ue);let{dsMatches:$,revalidatingFetchers:Fe}=J0(Kn,Oe,u,f,a.history,A,j,Ze,An,s,!1,P,V,ze,_e,te,C,p,a.patchRoutesOnNavigation!=null,[Ut.route.id,Pt],at);Fe.filter(Qe=>Qe.key!==G).forEach(Qe=>{let It=Qe.key,cn=A.fetchers.get(It),sn=tl(void 0,cn?cn.data:void 0);A.fetchers.set(It,sn),Ce(It),Qe.controller&&Z.set(It,Qe.controller)}),At({fetchers:new Map(A.fetchers)});let Ke=()=>Fe.forEach(Qe=>Ce(Qe.key));st.signal.addEventListener("abort",Ke);let{loaderResults:Ge,fetcherResults:De}=await J($,Fe,Kn,Oe);if(st.signal.aborted)return;if(st.signal.removeEventListener("abort",Ke),F.delete(G),Z.delete(G),Fe.forEach(Qe=>Z.delete(Qe.key)),A.fetchers.has(G)){let Qe=Ba(Pt.data);A.fetchers.set(G,Qe)}let ke=Wu(Ge);if(ke)return _(Kn,ke.result,!1,{preventScrollReset:Ve});if(ke=Wu(De),ke)return te.add(ke.key),_(Kn,ke.result,!1,{preventScrollReset:Ve});let{loaderData:ut,errors:et}=r_(A,j,Ge,void 0,Fe,De);Be(fe),A.navigation.state==="loading"&&fe>Se?(Lt(W,"Expected pending action"),H&&H.abort(),_t(A.navigation.location,{matches:j,loaderData:ut,errors:et,fetchers:new Map(A.fetchers)})):(At({errors:et,loaderData:s_(A.loaderData,ut,j,et),fetchers:new Map(A.fetchers)}),P=!1)}async function N(G,K,he,Ae,Oe,nt,We,Ve,Ze){let at=A.fetchers.get(G);ne(G,tl(Ze,at?at.data:void 0),{flushSync:We});let dt=new AbortController,st=Js(a.history,he,dt.signal);if(nt){let Pt=await Dt(Ae,new URL(st.url).pathname,st.signal,G);if(Pt.type==="aborted")return;if(Pt.type==="error"){Ie(G,K,Pt.error,{flushSync:We});return}else if(Pt.matches)Ae=Pt.matches;else{Ie(G,K,Pi(404,{pathname:he}),{flushSync:We});return}}let Ot=gc(Ae,he);Z.set(G,dt);let Ut=ye,hn=eo(u,f,st,Ae,Ot,s,Oe),vn=(await I(st,hn,Oe,G))[Ot.route.id];if(Z.get(G)===dt&&Z.delete(G),!st.signal.aborted){if(ze.has(G)){ne(G,Ba(void 0));return}if(Jr(vn))if(Se>Ut){ne(G,Ba(void 0));return}else{te.add(G),await _(st,vn,!1,{preventScrollReset:Ve});return}if(Ei(vn)){Ie(G,K,vn.error);return}ne(G,Ba(vn.data))}}async function _(G,K,he,{submission:Ae,fetcherSubmission:Oe,preventScrollReset:nt,replace:We}={}){he||(R?.resolve(),R=null),K.response.headers.has("X-Remix-Revalidate")&&(P=!0);let Ve=K.response.headers.get("Location");Lt(Ve,"Expected a Location header on the redirect Response"),Ve=i_(Ve,new URL(G.url),p,a.history);let Ze=_l(A.location,Ve,{_isRedirect:!0});if(i){let hn=!1;if(K.response.headers.has("X-Remix-Reload-Document"))hn=!0;else if(Lp(Ve)){const gn=_x(Ve,!0);hn=gn.origin!==e.location.origin||Hi(gn.pathname,p)==null}if(hn){We?e.location.replace(Ve):e.location.assign(Ve);return}}H=null;let at=We===!0||K.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:dt,formAction:st,formEncType:Ot}=A.navigation;!Ae&&!Oe&&dt&&st&&Ot&&(Ae=u_(A.navigation));let Ut=Ae||Oe;if(wE.has(K.response.status)&&Ut&&ei(Ut.formMethod))await pt(at,Ze,{submission:{...Ut,formAction:Ve},preventScrollReset:nt||U,enableViewTransition:he?ee:void 0});else{let hn=Qd(Ze,Ae);await pt(at,Ze,{overrideNavigation:hn,fetcherSubmission:Oe,preventScrollReset:nt||U,enableViewTransition:he?ee:void 0})}}async function I(G,K,he,Ae){let Oe,nt={};try{Oe=await BE(v,G,K,Ae,he,!1)}catch(We){return K.filter(Ve=>Ve.shouldLoad).forEach(Ve=>{nt[Ve.route.id]={type:"error",error:We}}),nt}if(G.signal.aborted)return nt;if(!ei(G.method))for(let We of K){if(Oe[We.route.id]?.type==="error")break;!Oe.hasOwnProperty(We.route.id)&&!A.loaderData.hasOwnProperty(We.route.id)&&(!A.errors||!A.errors.hasOwnProperty(We.route.id))&&We.shouldCallHandler()&&(Oe[We.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${We.route.id}`)})}for(let[We,Ve]of Object.entries(Oe))if(ZE(Ve)){let Ze=Ve.result;nt[We]={type:"redirect",response:kE(Ze,G,We,K,p)}}else nt[We]=await VE(Ve);return nt}async function J(G,K,he,Ae){let Oe=I(he,G,Ae,null),nt=Promise.all(K.map(async Ze=>{if(Ze.matches&&Ze.match&&Ze.request&&Ze.controller){let dt=(await I(Ze.request,Ze.matches,Ae,Ze.key))[Ze.match.route.id];return{[Ze.key]:dt}}else return Promise.resolve({[Ze.key]:{type:"error",error:Pi(404,{pathname:Ze.path})}})})),We=await Oe,Ve=(await nt).reduce((Ze,at)=>Object.assign(Ze,at),{});return{loaderResults:We,fetcherResults:Ve}}function me(){P=!0,_e.forEach((G,K)=>{Z.has(K)&&V.add(K),Ce(K)})}function ne(G,K,he={}){A.fetchers.set(G,K),At({fetchers:new Map(A.fetchers)},{flushSync:(he&&he.flushSync)===!0})}function Ie(G,K,he,Ae={}){let Oe=Mr(A.matches,K);ct(G),At({errors:{[Oe.route.id]:he},fetchers:new Map(A.fetchers)},{flushSync:(Ae&&Ae.flushSync)===!0})}function Ne(G){return Re.set(G,(Re.get(G)||0)+1),ze.has(G)&&ze.delete(G),A.fetchers.get(G)||DE}function $e(G,K){Ce(G,K?.reason),ne(G,Ba(null))}function ct(G){let K=A.fetchers.get(G);Z.has(G)&&!(K&&K.state==="loading"&&F.has(G))&&Ce(G),_e.delete(G),F.delete(G),te.delete(G),ze.delete(G),V.delete(G),A.fetchers.delete(G)}function we(G){let K=(Re.get(G)||0)-1;K<=0?(Re.delete(G),ze.add(G)):Re.set(G,K),At({fetchers:new Map(A.fetchers)})}function Ce(G,K){let he=Z.get(G);he&&(he.abort(K),Z.delete(G))}function je(G){for(let K of G){let he=Ne(K),Ae=Ba(he.data);A.fetchers.set(K,Ae)}}function qe(){let G=[],K=!1;for(let he of te){let Ae=A.fetchers.get(he);Lt(Ae,`Expected fetcher: ${he}`),Ae.state==="loading"&&(te.delete(he),G.push(he),K=!0)}return je(G),K}function Be(G){let K=[];for(let[he,Ae]of F)if(Ae<G){let Oe=A.fetchers.get(he);Lt(Oe,`Expected fetcher: ${he}`),Oe.state==="loading"&&(Ce(he),F.delete(he),K.push(he))}return je(K),K.length>0}function St(G,K){let he=A.blockers.get(G)||el;return ie.get(G)!==K&&ie.set(G,K),he}function Y(G){A.blockers.delete(G),ie.delete(G)}function He(G,K){let he=A.blockers.get(G)||el;Lt(he.state==="unblocked"&&K.state==="blocked"||he.state==="blocked"&&K.state==="blocked"||he.state==="blocked"&&K.state==="proceeding"||he.state==="blocked"&&K.state==="unblocked"||he.state==="proceeding"&&K.state==="unblocked",`Invalid blocker state transition: ${he.state} -> ${K.state}`);let Ae=new Map(A.blockers);Ae.set(G,K),At({blockers:Ae})}function Ue({currentLocation:G,nextLocation:K,historyAction:he}){if(ie.size===0)return;ie.size>1&&bn(!1,"A router only supports one blocker at a time");let Ae=Array.from(ie.entries()),[Oe,nt]=Ae[Ae.length-1],We=A.blockers.get(Oe);if(!(We&&We.state==="proceeding")&&nt({currentLocation:G,nextLocation:K,historyAction:he}))return Oe}function Xe(G){let K=Pi(404,{pathname:G}),he=m||d,{matches:Ae,route:Oe}=Xu(he);return{notFoundMatches:Ae,route:Oe,error:K}}function Te(G,K,he){if(b=G,E=K,T=he||null,!S&&A.navigation===Kd){S=!0;let Ae=gt(A.location,A.matches);Ae!=null&&At({restoreScrollPosition:Ae})}return()=>{b=null,E=null,T=null}}function Ee(G,K){return T&&T(G,K.map(Ae=>nE(Ae,A.loaderData)))||G.key}function Pe(G,K){if(b&&E){let he=Ee(G,K);b[he]=E()}}function gt(G,K){if(b){let he=Ee(G,K),Ae=b[he];if(typeof Ae=="number")return Ae}return null}function Wt(G,K,he){if(a.patchRoutesOnNavigation)if(G){if(Object.keys(G[0].params).length>0)return{active:!0,matches:dl(K,he,p,!0)}}else return{active:!0,matches:dl(K,he,p,!0)||[]};return{active:!1,matches:null}}async function Dt(G,K,he,Ae){if(!a.patchRoutesOnNavigation)return{type:"success",matches:G};let Oe=G;for(;;){let nt=m==null,We=m||d,Ve=f;try{await a.patchRoutesOnNavigation({signal:he,path:K,matches:Oe,fetcherKey:Ae,patch:(dt,st)=>{he.aborted||$0(dt,st,We,Ve,u,!1)}})}catch(dt){return{type:"error",error:dt,partialMatches:Oe}}finally{nt&&!he.aborted&&(d=[...d])}if(he.aborted)return{type:"aborted"};let Ze=Sr(We,K,p),at=null;if(Ze){if(Object.keys(Ze[0].params).length===0)return{type:"success",matches:Ze};if(at=dl(We,K,p,!0),!(at&&Oe.length<at.length&&Nn(Oe,at.slice(0,Oe.length))))return{type:"success",matches:Ze}}if(at||(at=dl(We,K,p,!0)),!at||Nn(Oe,at))return{type:"success",matches:null};Oe=at}}function Nn(G,K){return G.length===K.length&&G.every((he,Ae)=>he.route.id===K[Ae].route.id)}function hi(G){f={},m=xl(G,u,void 0,f)}function rs(G,K,he=!1){let Ae=m==null;$0(G,K,m||d,f,u,he),Ae&&(d=[...d],At({}))}return B={get basename(){return p},get future(){return g},get state(){return A},get routes(){return d},get window(){return e},initialize:tt,subscribe:Tt,enableScrollRestoration:Te,navigate:Et,fetch:Vt,revalidate:Gt,createHref:G=>a.history.createHref(G),encodeLocation:G=>a.history.encodeLocation(G),getFetcher:Ne,resetFetcher:$e,deleteFetcher:we,dispose:Je,getBlocker:St,deleteBlocker:Y,patchRoutes:rs,_internalFetchControllers:Z,_internalSetRoutes:hi,_internalSetStateDoNotUseOrYouWillBreakYourApp(G){At(G)}},a.unstable_instrumentations&&(B=SE(B,a.unstable_instrumentations.map(G=>G.router).filter(Boolean))),B}function NE(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Lh(a,e,i,s,l,u){let f,d;if(l){f=[];for(let p of e)if(f.push(p),p.route.id===l){d=p;break}}else f=e,d=e[e.length-1];let m=Op(s||".",Np(f),Hi(a.pathname,i)||a.pathname,u==="path");if(s==null&&(m.search=a.search,m.hash=a.hash),(s==null||s===""||s===".")&&d){let p=zp(m.search);if(d.route.index&&!p)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&p){let v=new URLSearchParams(m.search),g=v.getAll("index");v.delete("index"),g.filter(y=>y).forEach(y=>v.append("index",y));let x=v.toString();m.search=x?`?${x}`:""}}return i!=="/"&&(m.pathname=mE({basename:i,pathname:m.pathname})),da(m)}function Q0(a,e,i){if(!i||!NE(i))return{path:e};if(i.formMethod&&!JE(i.formMethod))return{path:e,error:Pi(405,{method:i.formMethod})};let s=()=>({path:e,error:Pi(400,{type:"invalid-body"})}),u=(i.formMethod||"get").toUpperCase(),f=Px(e);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!ei(u))return s();let g=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((x,[y,b])=>`${x}${y}=${b}
`,""):String(i.body);return{path:e,submission:{formMethod:u,formAction:f,formEncType:i.formEncType,formData:void 0,json:void 0,text:g}}}else if(i.formEncType==="application/json"){if(!ei(u))return s();try{let g=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:e,submission:{formMethod:u,formAction:f,formEncType:i.formEncType,formData:void 0,json:g,text:void 0}}}catch{return s()}}}Lt(typeof FormData=="function","FormData is not available in this environment");let d,m;if(i.formData)d=Ph(i.formData),m=i.formData;else if(i.body instanceof FormData)d=Ph(i.body),m=i.body;else if(i.body instanceof URLSearchParams)d=i.body,m=a_(d);else if(i.body==null)d=new URLSearchParams,m=new FormData;else try{d=new URLSearchParams(i.body),m=a_(d)}catch{return s()}let p={formMethod:u,formAction:f,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(ei(p.formMethod))return{path:e,submission:p};let v=Wa(e);return a&&v.search&&zp(v.search)&&d.append("index",""),v.search=`?${d}`,{path:da(v),submission:p}}function J0(a,e,i,s,l,u,f,d,m,p,v,g,x,y,b,T,E,S,D,L,O){let z=L?Ei(L[1])?L[1].error:L[1].data:void 0,B=l.createURL(u.location),A=l.createURL(m),W;if(v&&u.errors){let se=Object.keys(u.errors)[0];W=f.findIndex(P=>P.route.id===se)}else if(L&&Ei(L[1])){let se=L[0];W=f.findIndex(P=>P.route.id===se)-1}let R=L?L[1].statusCode:void 0,U=R&&R>=400,H={currentUrl:B,currentParams:u.matches[0]?.params||{},nextUrl:A,nextParams:f[0].params,...d,actionResult:z,actionStatus:R},ee=Al(f),ae=f.map((se,P)=>{let{route:V}=se,Z=null;if(W!=null&&P>W?Z=!1:V.lazy?Z=!0:Pp(V)?v?Z=Nh(V,u.loaderData,u.errors):OE(u.loaderData,u.matches[P],se)&&(Z=!0):Z=!1,Z!==null)return Oh(i,s,a,ee,se,p,e,Z);let ye=!1;typeof O=="boolean"?ye=O:U?ye=!1:(g||B.pathname+B.search===A.pathname+A.search||B.search!==A.search||PE(u.matches[P],se))&&(ye=!0);let Se={...H,defaultShouldRevalidate:ye},F=vl(se,Se);return Oh(i,s,a,ee,se,p,e,F,Se,O)}),ce=[];return b.forEach((se,P)=>{if(v||!f.some(Re=>Re.route.id===se.routeId)||y.has(P))return;let V=u.fetchers.get(P),Z=V&&V.state!=="idle"&&V.data===void 0,ye=Sr(E,se.path,S);if(!ye){if(D&&Z)return;ce.push({key:P,routeId:se.routeId,path:se.path,matches:null,match:null,request:null,controller:null});return}if(T.has(P))return;let Se=gc(ye,se.path),F=new AbortController,te=Js(l,se.path,F.signal),_e=null;if(x.has(P))x.delete(P),_e=eo(i,s,te,ye,Se,p,e);else if(Z)g&&(_e=eo(i,s,te,ye,Se,p,e));else{let Re;typeof O=="boolean"?Re=O:U?Re=!1:Re=g;let ze={...H,defaultShouldRevalidate:Re};vl(Se,ze)&&(_e=eo(i,s,te,ye,Se,p,e,ze))}_e&&ce.push({key:P,routeId:se.routeId,path:se.path,matches:_e,match:Se,request:te,controller:F})}),{dsMatches:ae,revalidatingFetchers:ce}}function Pp(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function Nh(a,e,i){if(a.lazy)return!0;if(!Pp(a))return!1;let s=e!=null&&a.id in e,l=i!=null&&i[a.id]!==void 0;return!s&&l?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!s&&!l}function OE(a,e,i){let s=!e||i.route.id!==e.route.id,l=!a.hasOwnProperty(i.route.id);return s||l}function PE(a,e){let i=a.route.path;return a.pathname!==e.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==e.params["*"]}function vl(a,e){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(e);if(typeof i=="boolean")return i}return e.defaultShouldRevalidate}function $0(a,e,i,s,l,u){let f;if(a){let p=s[a];Lt(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),f=p.children}else f=i;let d=[],m=[];if(e.forEach(p=>{let v=f.find(g=>Dx(p,g));v?m.push({existingRoute:v,newRoute:p}):d.push(p)}),d.length>0){let p=xl(d,l,[a||"_","patch",String(f?.length||"0")],s);f.push(...p)}if(u&&m.length>0)for(let p=0;p<m.length;p++){let{existingRoute:v,newRoute:g}=m[p],x=v,[y]=xl([g],l,[],{},!0);Object.assign(x,{element:y.element?y.element:x.element,errorElement:y.errorElement?y.errorElement:x.errorElement,hydrateFallbackElement:y.hydrateFallbackElement?y.hydrateFallbackElement:x.hydrateFallbackElement})}}function Dx(a,e){return"id"in a&&"id"in e&&a.id===e.id?!0:a.index===e.index&&a.path===e.path&&a.caseSensitive===e.caseSensitive?(!a.children||a.children.length===0)&&(!e.children||e.children.length===0)?!0:a.children.every((i,s)=>e.children?.some(l=>Dx(i,l))):!1}var e_=new WeakMap,Ux=({key:a,route:e,manifest:i,mapRouteProperties:s})=>{let l=i[e.id];if(Lt(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[a];if(!u)return;let f=e_.get(l);f||(f={},e_.set(l,f));let d=f[a];if(d)return d;let m=(async()=>{let p=JM(a),g=l[a]!==void 0&&a!=="hasErrorBoundary";if(p)bn(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),f[a]=Promise.resolve();else if(g)bn(!1,`Route "${l.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let x=await u();x!=null&&(Object.assign(l,{[a]:x}),Object.assign(l,s(l)))}typeof l.lazy=="object"&&(l.lazy[a]=void 0,Object.values(l.lazy).every(x=>x===void 0)&&(l.lazy=void 0))})();return f[a]=m,m},t_=new WeakMap;function FE(a,e,i,s,l){let u=i[a.id];if(Lt(u,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let v=t_.get(u);if(v)return{lazyRoutePromise:v,lazyHandlerPromise:v};let g=(async()=>{Lt(typeof a.lazy=="function","No lazy route function found");let x=await a.lazy(),y={};for(let b in x){let T=x[b];if(T===void 0)continue;let E=eE(b),D=u[b]!==void 0&&b!=="hasErrorBoundary";E?bn(!E,"Route property "+b+" is not a supported property to be returned from a lazy route function. This property will be ignored."):D?bn(!D,`Route "${u.id}" has a static property "${b}" defined but its lazy function is also returning a value for this property. The lazy route property "${b}" will be ignored.`):y[b]=T}Object.assign(u,y),Object.assign(u,{...s(u),lazy:void 0})})();return t_.set(u,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let f=Object.keys(a.lazy),d=[],m;for(let v of f){if(l&&l.includes(v))continue;let g=Ux({key:v,route:a,manifest:i,mapRouteProperties:s});g&&(d.push(g),v===e&&(m=g))}let p=d.length>0?Promise.all(d).then(()=>{}):void 0;return p?.catch(()=>{}),m?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:m}}async function n_(a){let e=a.matches.filter(l=>l.shouldLoad),i={};return(await Promise.all(e.map(l=>l.resolve()))).forEach((l,u)=>{i[e[u].route.id]=l}),i}async function zE(a){return a.matches.some(e=>e.route.middleware)?Lx(a,()=>n_(a)):n_(a)}function Lx(a,e){return IE(a,e,s=>{if(QE(s))throw s;return s},YE,i);function i(s,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:s}}));{let{matches:f}=a,d=Math.min(Math.max(f.findIndex(p=>p.route.id===l),0),Math.max(f.findIndex(p=>p.shouldCallHandler()),0)),m=Mr(f,f[d].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:s}})}}}async function IE(a,e,i,s,l){let{matches:u,request:f,params:d,context:m,unstable_pattern:p}=a,v=u.flatMap(x=>x.route.middleware?x.route.middleware.map(y=>[x.route.id,y]):[]);return await Nx({request:f,params:d,context:m,unstable_pattern:p},v,e,i,s,l)}async function Nx(a,e,i,s,l,u,f=0){let{request:d}=a;if(d.signal.aborted)throw d.signal.reason??new Error(`Request aborted: ${d.method} ${d.url}`);let m=e[f];if(!m)return await i();let[p,v]=m,g,x=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");try{return g={value:await Nx(a,e,i,s,l,u,f+1)},g.value}catch(y){return g={value:await u(y,p,g)},g.value}};try{let y=await v(a,x),b=y!=null?s(y):void 0;return l(b)?b:g?b??g.value:(g={value:await x()},g.value)}catch(y){return await u(y,p,g)}}function Ox(a,e,i,s,l){let u=Ux({key:"middleware",route:s.route,manifest:e,mapRouteProperties:a}),f=FE(s.route,ei(i.method)?"action":"loader",e,a,l);return{middleware:u,route:f.lazyRoutePromise,handler:f.lazyHandlerPromise}}function Oh(a,e,i,s,l,u,f,d,m=null,p){let v=!1,g=Ox(a,e,i,l,u);return{...l,_lazyPromises:g,shouldLoad:d,shouldRevalidateArgs:m,shouldCallHandler(x){return v=!0,m?typeof p=="boolean"?vl(l,{...m,defaultShouldRevalidate:p}):typeof x=="boolean"?vl(l,{...m,defaultShouldRevalidate:x}):vl(l,m):d},resolve(x){let{lazy:y,loader:b,middleware:T}=l.route,E=v||d||x&&!ei(i.method)&&(y||b),S=T&&T.length>0&&!b&&!y;return E&&(ei(i.method)||!S)?HE({request:i,unstable_pattern:s,match:l,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:x,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function eo(a,e,i,s,l,u,f,d=null){return s.map(m=>m.route.id!==l.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:d,shouldCallHandler:()=>!1,_lazyPromises:Ox(a,e,i,m,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Oh(a,e,i,Al(s),m,u,f,!0,d))}async function BE(a,e,i,s,l,u){i.some(p=>p._lazyPromises?.middleware)&&await Promise.all(i.map(p=>p._lazyPromises?.middleware));let f={request:e,unstable_pattern:Al(i),params:i[0].params,context:l,matches:i},m=await a({...f,fetcherKey:s,runClientMiddleware:p=>{let v=f;return Lx(v,()=>p({...v,fetcherKey:s,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return m}async function HE({request:a,unstable_pattern:e,match:i,lazyHandlerPromise:s,lazyRoutePromise:l,handlerOverride:u,scopedContext:f}){let d,m,p=ei(a.method),v=p?"action":"loader",g=x=>{let y,b=new Promise((S,D)=>y=D);m=()=>y(),a.signal.addEventListener("abort",m);let T=S=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${i.route.id}]`)):x({request:a,unstable_pattern:e,params:i.params,context:f},...S!==void 0?[S]:[]),E=(async()=>{try{return{type:"data",result:await(u?u(D=>T(D)):T())}}catch(S){return{type:"error",result:S}}})();return Promise.race([E,b])};try{let x=p?i.route.action:i.route.loader;if(s||l)if(x){let y,[b]=await Promise.all([g(x).catch(T=>{y=T}),s,l]);if(y!==void 0)throw y;d=b}else{await s;let y=p?i.route.action:i.route.loader;if(y)[d]=await Promise.all([g(y),l]);else if(v==="action"){let b=new URL(a.url),T=b.pathname+b.search;throw Pi(405,{method:a.method,pathname:T,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(x)d=await g(x);else{let y=new URL(a.url),b=y.pathname+y.search;throw Pi(404,{pathname:b})}}catch(x){return{type:"error",result:x}}finally{m&&a.signal.removeEventListener("abort",m)}return d}async function GE(a){let e=a.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?a.body==null?null:a.json():a.text()}async function VE(a){let{result:e,type:i}=a;if(Fp(e)){let s;try{s=await GE(e)}catch(l){return{type:"error",error:l}}return i==="error"?{type:"error",error:new Tl(e.status,e.statusText,s),statusCode:e.status,headers:e.headers}:{type:"data",data:s,statusCode:e.status,headers:e.headers}}return i==="error"?l_(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:qE(e),statusCode:yl(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:yl(e)?e.status:void 0}:l_(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function kE(a,e,i,s,l){let u=a.headers.get("Location");if(Lt(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lp(u)){let f=s.slice(0,s.findIndex(d=>d.route.id===i)+1);u=Lh(new URL(e.url),f,l,u),a.headers.set("Location",u)}return a}function i_(a,e,i,s){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Lp(a)){let u=a,f=u.startsWith("//")?new URL(e.protocol+u):new URL(u);if(l.includes(f.protocol))throw new Error("Invalid redirect location");let d=Hi(f.pathname,i)!=null;if(f.origin===e.origin&&d)return f.pathname+f.search+f.hash}try{let u=s.createURL(a);if(l.includes(u.protocol))throw new Error("Invalid redirect location")}catch{}return a}function Js(a,e,i,s){let l=a.createURL(Px(e)).toString(),u={signal:i};if(s&&ei(s.formMethod)){let{formMethod:f,formEncType:d}=s;u.method=f.toUpperCase(),d==="application/json"?(u.headers=new Headers({"Content-Type":d}),u.body=JSON.stringify(s.json)):d==="text/plain"?u.body=s.text:d==="application/x-www-form-urlencoded"&&s.formData?u.body=Ph(s.formData):u.body=s.formData}return new Request(l,u)}function Ph(a){let e=new URLSearchParams;for(let[i,s]of a.entries())e.append(i,typeof s=="string"?s:s.name);return e}function a_(a){let e=new FormData;for(let[i,s]of a.entries())e.append(i,s);return e}function XE(a,e,i,s=!1,l=!1){let u={},f=null,d,m=!1,p={},v=i&&Ei(i[1])?i[1].error:void 0;return a.forEach(g=>{if(!(g.route.id in e))return;let x=g.route.id,y=e[x];if(Lt(!Jr(y),"Cannot handle redirect results in processLoaderData"),Ei(y)){let b=y.error;if(v!==void 0&&(b=v,v=void 0),f=f||{},l)f[x]=b;else{let T=Mr(a,x);f[T.route.id]==null&&(f[T.route.id]=b)}s||(u[x]=wx),m||(m=!0,d=yl(y.error)?y.error.status:500),y.headers&&(p[x]=y.headers)}else u[x]=y.data,y.statusCode&&y.statusCode!==200&&!m&&(d=y.statusCode),y.headers&&(p[x]=y.headers)}),v!==void 0&&i&&(f={[i[0]]:v},i[2]&&(u[i[2]]=void 0)),{loaderData:u,errors:f,statusCode:d||200,loaderHeaders:p}}function r_(a,e,i,s,l,u){let{loaderData:f,errors:d}=XE(e,i,s);return l.filter(m=>!m.matches||m.matches.some(p=>p.shouldLoad)).forEach(m=>{let{key:p,match:v,controller:g}=m;if(g&&g.signal.aborted)return;let x=u[p];if(Lt(x,"Did not find corresponding fetcher result"),Ei(x)){let y=Mr(a.matches,v?.route.id);d&&d[y.route.id]||(d={...d,[y.route.id]:x.error}),a.fetchers.delete(p)}else if(Jr(x))Lt(!1,"Unhandled fetcher revalidation redirect");else{let y=Ba(x.data);a.fetchers.set(p,y)}}),{loaderData:f,errors:d}}function s_(a,e,i,s){let l=Object.entries(e).filter(([,u])=>u!==wx).reduce((u,[f,d])=>(u[f]=d,u),{});for(let u of i){let f=u.route.id;if(!e.hasOwnProperty(f)&&a.hasOwnProperty(f)&&u.route.loader&&(l[f]=a[f]),s&&s.hasOwnProperty(f))break}return l}function o_(a){return a?Ei(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function Mr(a,e){return(e?a.slice(0,a.findIndex(s=>s.route.id===e)+1):[...a]).reverse().find(s=>s.route.hasErrorBoundary===!0)||a[0]}function Xu(a){let e=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Pi(a,{pathname:e,routeId:i,method:s,type:l,message:u}={}){let f="Unknown Server Error",d="Unknown @remix-run/router error";return a===400?(f="Bad Request",s&&e&&i?d=`You made a ${s} request to "${e}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:l==="invalid-body"&&(d="Unable to encode submission body")):a===403?(f="Forbidden",d=`Route "${i}" does not match URL "${e}"`):a===404?(f="Not Found",d=`No route matches URL "${e}"`):a===405&&(f="Method Not Allowed",s&&e&&i?d=`You made a ${s.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:s&&(d=`Invalid request method "${s.toUpperCase()}"`)),new Tl(a||500,f,new Error(d),!0)}function Wu(a){let e=Object.entries(a);for(let i=e.length-1;i>=0;i--){let[s,l]=e[i];if(Jr(l))return{key:s,result:l}}}function Px(a){let e=typeof a=="string"?Wa(a):a;return da({...e,hash:""})}function WE(a,e){return a.pathname!==e.pathname||a.search!==e.search?!1:a.hash===""?e.hash!=="":a.hash===e.hash?!0:e.hash!==""}function qE(a){return new Tl(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function YE(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([e,i])=>typeof e=="string"&&jE(i))}function jE(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function ZE(a){return Fp(a.result)&&Rx.has(a.result.status)}function Ei(a){return a.type==="error"}function Jr(a){return(a&&a.type)==="redirect"}function l_(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Fp(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function KE(a){return Rx.has(a)}function QE(a){return Fp(a)&&KE(a.status)&&a.headers.has("Location")}function JE(a){return CE.has(a.toUpperCase())}function ei(a){return AE.has(a.toUpperCase())}function zp(a){return new URLSearchParams(a).getAll("index").some(e=>e==="")}function gc(a,e){let i=typeof e=="string"?Wa(e).search:e.search;if(a[a.length-1].route.index&&zp(i||""))return a[a.length-1];let s=Mx(a);return s[s.length-1]}function u_(a){let{formMethod:e,formAction:i,formEncType:s,text:l,formData:u,json:f}=a;if(!(!e||!i||!s)){if(l!=null)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:e,formAction:i,formEncType:s,formData:u,json:void 0,text:void 0};if(f!==void 0)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:f,text:void 0}}}function Qd(a,e){return e?{state:"loading",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $E(a,e){return{state:"submitting",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function tl(a,e){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function eb(a,e){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e?e.data:void 0}}function Ba(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function tb(a,e){try{let i=a.sessionStorage.getItem(Cx);if(i){let s=JSON.parse(i);for(let[l,u]of Object.entries(s||{}))u&&Array.isArray(u)&&e.set(l,new Set(u||[]))}}catch{}}function nb(a,e){if(e.size>0){let i={};for(let[s,l]of e)i[s]=[...l];try{a.sessionStorage.setItem(Cx,JSON.stringify(i))}catch(s){bn(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function c_(){let a,e,i=new Promise((s,l)=>{a=async u=>{s(u);try{await i}catch{}},e=async u=>{l(u);try{await i}catch{}}});return{promise:i,resolve:a,reject:e}}var is=le.createContext(null);is.displayName="DataRouter";var Rl=le.createContext(null);Rl.displayName="DataRouterState";var Fx=le.createContext(!1);function ib(){return le.useContext(Fx)}var Ip=le.createContext({isTransitioning:!1});Ip.displayName="ViewTransition";var zx=le.createContext(new Map);zx.displayName="Fetchers";var ab=le.createContext(null);ab.displayName="Await";var Gi=le.createContext(null);Gi.displayName="Navigation";var Lc=le.createContext(null);Lc.displayName="Location";var ta=le.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Bp=le.createContext(null);Bp.displayName="RouteError";var Ix="REACT_ROUTER_ERROR",rb="REDIRECT",sb="ROUTE_ERROR_RESPONSE";function ob(a){if(a.startsWith(`${Ix}:${rb}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function lb(a){if(a.startsWith(`${Ix}:${sb}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Tl(e.status,e.statusText,e.data)}catch{}}function ub(a,{relative:e}={}){Lt(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=le.useContext(Gi),{hash:l,pathname:u,search:f}=wl(a,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:ca([i,u])),s.createHref({pathname:d,search:f,hash:l})}function Cl(){return le.useContext(Lc)!=null}function as(){return Lt(Cl(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(Lc).location}var Bx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hx(a){le.useContext(Gi).static||le.useLayoutEffect(a)}function cb(){let{isDataRoute:a}=le.useContext(ta);return a?Ab():fb()}function fb(){Lt(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let a=le.useContext(is),{basename:e,navigator:i}=le.useContext(Gi),{matches:s}=le.useContext(ta),{pathname:l}=as(),u=JSON.stringify(Np(s)),f=le.useRef(!1);return Hx(()=>{f.current=!0}),le.useCallback((m,p={})=>{if(bn(f.current,Bx),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Op(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ca([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,u,l,a])}var db=le.createContext(null);function hb(a){let e=le.useContext(ta).outlet;return le.useMemo(()=>e&&le.createElement(db.Provider,{value:a},e),[e,a])}function pb(){let{matches:a}=le.useContext(ta),e=a[a.length-1];return e?e.params:{}}function wl(a,{relative:e}={}){let{matches:i}=le.useContext(ta),{pathname:s}=as(),l=JSON.stringify(Np(i));return le.useMemo(()=>Op(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function mb(a,e,i,s,l){Lt(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=le.useContext(Gi),{matches:f}=le.useContext(ta),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",v=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";Vx(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=as(),y;y=x;let b=y.pathname||"/",T=b;if(v!=="/"){let D=v.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=Sr(a,{pathname:T});return bn(g||E!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),bn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),yb(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ca([v,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:ca([v,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l)}function gb(){let a=Tb(),e=yl(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:u},"ErrorBoundary")," or"," ",le.createElement("code",{style:u},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),i?le.createElement("pre",{style:l},i):null,f)}var vb=le.createElement(gb,null),Gx=class extends le.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=lb(a.digest);i&&(a=i)}let e=a!==void 0?le.createElement(ta.Provider,{value:this.props.routeContext},le.createElement(Bp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?le.createElement(_b,{error:a},e):e}};Gx.contextType=Fx;var Jd=new WeakMap;function _b({children:a,error:e}){let{basename:i}=le.useContext(Gi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=ob(e.digest);if(s){let l=Jd.get(e);if(l)throw l;let u=bx(s.location,i);if(Ex&&!Jd.get(e))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw Jd.set(e,f),f}return le.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function xb({routeContext:a,match:e,children:i}){let s=le.useContext(is);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(ta.Provider,{value:a},i)}function yb(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let u=a,f=i?.errors;if(f!=null){let v=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Lt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,v+1))}let d=!1,m=-1;if(i)for(let v=0;v<u.length;v++){let g=u[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:y}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||b){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&s?(v,g)=>{s(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:Al(i.matches),errorInfo:g})}:void 0;return u.reduceRight((v,g,x)=>{let y,b=!1,T=null,E=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||vb,d&&(m<0&&x===0?(Vx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,E=null):m===x&&(b=!0,E=g.route.hydrateFallbackElement||null)));let S=e.concat(u.slice(0,x+1)),D=()=>{let L;return y?L=T:b?L=E:g.route.Component?L=le.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,le.createElement(xb,{match:g,routeContext:{outlet:v,matches:S,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?le.createElement(Gx,{location:i.location,revalidation:i.revalidation,component:T,error:y,children:D(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):D()},null)}function Hp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sb(a){let e=le.useContext(is);return Lt(e,Hp(a)),e}function Mb(a){let e=le.useContext(Rl);return Lt(e,Hp(a)),e}function Eb(a){let e=le.useContext(ta);return Lt(e,Hp(a)),e}function Gp(a){let e=Eb(a),i=e.matches[e.matches.length-1];return Lt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function bb(){return Gp("useRouteId")}function Tb(){let a=le.useContext(Bp),e=Mb("useRouteError"),i=Gp("useRouteError");return a!==void 0?a:e.errors?.[i]}function Ab(){let{router:a}=Sb("useNavigate"),e=Gp("useNavigate"),i=le.useRef(!1);return Hx(()=>{i.current=!0}),le.useCallback(async(l,u={})=>{bn(i.current,Bx),i.current&&(typeof l=="number"?await a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var f_={};function Vx(a,e,i){!e&&!f_[a]&&(f_[a]=!0,bn(!1,i))}var d_={};function h_(a,e){!a&&!d_[e]&&(d_[e]=!0,console.warn(e))}var Rb="useOptimistic",p_=BM[Rb],Cb=()=>{};function wb(a){return p_?p_(a):[a,Cb]}function Db(a){let e={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&bn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:le.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&bn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:le.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&bn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:le.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),e}var Ub=["HydrateFallback","hydrateFallbackElement"],Lb=class{constructor(){this.status="pending",this.promise=new Promise((a,e)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",e(i))}})}};function Nb({router:a,flushSync:e,onError:i,unstable_useTransitions:s}){s=ib()||s;let[u,f]=le.useState(a.state),[d,m]=wb(u),[p,v]=le.useState(),[g,x]=le.useState({isTransitioning:!1}),[y,b]=le.useState(),[T,E]=le.useState(),[S,D]=le.useState(),L=le.useRef(new Map),O=le.useCallback((W,{deletedFetchers:R,newErrors:U,flushSync:H,viewTransitionOpts:ee})=>{U&&i&&Object.values(U).forEach(ce=>i(ce,{location:W.location,params:W.matches[0]?.params??{},unstable_pattern:Al(W.matches)})),W.fetchers.forEach((ce,se)=>{ce.data!==void 0&&L.current.set(se,ce.data)}),R.forEach(ce=>L.current.delete(ce)),h_(H===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ae=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(h_(ee==null||ae,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ee||!ae){e&&H?e(()=>f(W)):s===!1?f(W):le.startTransition(()=>{s===!0&&m(ce=>m_(ce,W)),f(W)});return}if(e&&H){e(()=>{T&&(y?.resolve(),T.skipTransition()),x({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let ce=a.window.document.startViewTransition(()=>{e(()=>f(W))});ce.finished.finally(()=>{e(()=>{b(void 0),E(void 0),v(void 0),x({isTransitioning:!1})})}),e(()=>E(ce));return}T?(y?.resolve(),T.skipTransition(),D({state:W,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(v(W),x({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[a.window,e,T,y,s,m,i]);le.useLayoutEffect(()=>a.subscribe(O),[a,O]),le.useEffect(()=>{g.isTransitioning&&!g.flushSync&&b(new Lb)},[g]),le.useEffect(()=>{if(y&&p&&a.window){let W=p,R=y.promise,U=a.window.document.startViewTransition(async()=>{s===!1?f(W):le.startTransition(()=>{s===!0&&m(H=>m_(H,W)),f(W)}),await R});U.finished.finally(()=>{b(void 0),E(void 0),v(void 0),x({isTransitioning:!1})}),E(U)}},[p,y,a.window,s,m]),le.useEffect(()=>{y&&p&&d.location.key===p.location.key&&y.resolve()},[y,T,d.location,p]),le.useEffect(()=>{!g.isTransitioning&&S&&(v(S.state),x({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),D(void 0))},[g.isTransitioning,S]);let z=le.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:W=>a.navigate(W),push:(W,R,U)=>a.navigate(W,{state:R,preventScrollReset:U?.preventScrollReset}),replace:(W,R,U)=>a.navigate(W,{replace:!0,state:R,preventScrollReset:U?.preventScrollReset})}),[a]),B=a.basename||"/",A=le.useMemo(()=>({router:a,navigator:z,static:!1,basename:B,onError:i}),[a,z,B,i]);return le.createElement(le.Fragment,null,le.createElement(is.Provider,{value:A},le.createElement(Rl.Provider,{value:d},le.createElement(zx.Provider,{value:L.current},le.createElement(Ip.Provider,{value:g},le.createElement(zb,{basename:B,location:d.location,navigationType:d.historyAction,navigator:z,unstable_useTransitions:s},le.createElement(Ob,{routes:a.routes,future:a.future,state:d,onError:i})))))),null)}function m_(a,e){return{...a,navigation:e.navigation.state!=="idle"?e.navigation:a.navigation,revalidation:e.revalidation!=="idle"?e.revalidation:a.revalidation,actionData:e.navigation.state!=="submitting"?e.actionData:a.actionData,fetchers:e.fetchers}}var Ob=le.memo(Pb);function Pb({routes:a,future:e,state:i,onError:s}){return mb(a,void 0,i,s,e)}function Fb(a){return hb(a.context)}function zb({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Lt(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=le.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[d,l,u,f]);typeof i=="string"&&(i=Wa(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:y="default"}=i,b=le.useMemo(()=>{let T=Hi(p,d);return T==null?null:{location:{pathname:T,search:v,hash:g,state:x,key:y},navigationType:s}},[d,p,v,g,x,y,s]);return bn(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:le.createElement(Gi.Provider,{value:m},le.createElement(Lc.Provider,{children:e,value:b}))}var vc="get",_c="application/x-www-form-urlencoded";function Nc(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Ib(a){return Nc(a)&&a.tagName.toLowerCase()==="button"}function Bb(a){return Nc(a)&&a.tagName.toLowerCase()==="form"}function Hb(a){return Nc(a)&&a.tagName.toLowerCase()==="input"}function Gb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Vb(a,e){return a.button===0&&(!e||e==="_self")&&!Gb(a)}var qu=null;function kb(){if(qu===null)try{new FormData(document.createElement("form"),0),qu=!1}catch{qu=!0}return qu}var Xb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $d(a){return a!=null&&!Xb.has(a)?(bn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_c}"`),null):a}function Wb(a,e){let i,s,l,u,f;if(Bb(a)){let d=a.getAttribute("action");s=d?Hi(d,e):null,i=a.getAttribute("method")||vc,l=$d(a.getAttribute("enctype"))||_c,u=new FormData(a)}else if(Ib(a)||Hb(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(s=m?Hi(m,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||vc,l=$d(a.getAttribute("formenctype"))||$d(d.getAttribute("enctype"))||_c,u=new FormData(d,a),!kb()){let{name:p,type:v,value:g}=a;if(v==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,g)}}else{if(Nc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=vc,s=null,l=_c,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function qb(a,e,i,s){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Hi(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function Yb(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Zb(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await Yb(u,i);return f.links?f.links():[]}return[]}));return $b(s.flat(1).filter(jb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function g_(a,e,i,s,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Kb(a,e,{includeHydrateFallback:i}={}){return Qb(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Qb(a){return[...new Set(a)]}function Jb(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function $b(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(Jb(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function kx(){let a=le.useContext(is);return Vp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function eT(){let a=le.useContext(Rl);return Vp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var kp=le.createContext(void 0);kp.displayName="FrameworkContext";function Xx(){let a=le.useContext(kp);return Vp(a,"You must render this element inside a <HydratedRouter> element"),a}function tT(a,e){let i=le.useContext(kp),[s,l]=le.useState(!1),[u,f]=le.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=le.useRef(null);le.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=S=>{S.forEach(D=>{f(D.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[a]),le.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let y=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?a!=="intent"?[u,x,{}]:[u,x,{onFocus:nl(d,y),onBlur:nl(m,b),onMouseEnter:nl(p,y),onMouseLeave:nl(v,b),onTouchStart:nl(g,y)}]:[!1,x,{}]}function nl(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function nT({page:a,...e}){let{router:i}=kx(),s=le.useMemo(()=>Sr(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?le.createElement(aT,{page:a,matches:s,...e}):null}function iT(a){let{manifest:e,routeModules:i}=Xx(),[s,l]=le.useState([]);return le.useEffect(()=>{let u=!1;return Zb(a,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,i]),s}function aT({page:a,matches:e,...i}){let s=as(),{future:l,manifest:u,routeModules:f}=Xx(),{basename:d}=kx(),{loaderData:m,matches:p}=eT(),v=le.useMemo(()=>g_(a,e,p,u,s,"data"),[a,e,p,u,s]),g=le.useMemo(()=>g_(a,e,p,u,s,"assets"),[a,e,p,u,s]),x=le.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let T=new Set,E=!1;if(e.forEach(D=>{let L=u.routes[D.route.id];!L||!L.hasLoader||(!v.some(O=>O.route.id===D.route.id)&&D.route.id in m&&f[D.route.id]?.shouldRevalidate||L.hasClientLoader?E=!0:T.add(D.route.id))}),T.size===0)return[];let S=qb(a,d,l.unstable_trailingSlashAwareDataRequests,"data");return E&&T.size>0&&S.searchParams.set("_routes",e.filter(D=>T.has(D.route.id)).map(D=>D.route.id).join(",")),[S.pathname+S.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,s,u,v,e,a,f]),y=le.useMemo(()=>Kb(g,u),[g,u]),b=iT(g);return le.createElement(le.Fragment,null,x.map(T=>le.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),y.map(T=>le.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),b.map(({key:T,link:E})=>le.createElement("link",{key:T,nonce:i.nonce,...E,crossOrigin:E.crossOrigin??i.crossOrigin})))}function rT(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var sT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sT&&(window.__reactRouterVersion="7.13.0")}catch{}function oT(a,e){return LE({basename:e?.basename,getContext:e?.getContext,future:e?.future,history:jM({window:e?.window}),hydrationData:lT(),routes:a,mapRouteProperties:Db,hydrationRouteProperties:Ub,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window,unstable_instrumentations:e?.unstable_instrumentations}).initialize()}function lT(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:uT(a.errors)}),a}function uT(a){if(!a)return null;let e=Object.entries(a),i={};for(let[s,l]of e)if(l&&l.__type==="RouteErrorResponse")i[s]=new Tl(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let f=new u(l.message);f.stack="",i[s]=f}catch{}}if(i[s]==null){let u=new Error(l.message);u.stack="",i[s]=u}}else i[s]=l;return i}var Wx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xp=le.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...y},b){let{basename:T,unstable_useTransitions:E}=le.useContext(Gi),S=typeof p=="string"&&Wx.test(p),D=bx(p,T);p=D.to;let L=ub(p,{relative:l}),[O,z,B]=tT(s,y),A=dT(p,{replace:f,state:d,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:E});function W(U){e&&e(U),U.defaultPrevented||A(U)}let R=le.createElement("a",{...y,...B,href:D.absoluteURL||L,onClick:D.isExternal||u?e:W,ref:rT(b,z),target:m,"data-discover":!S&&i==="render"?"true":void 0});return O&&!S?le.createElement(le.Fragment,null,R,le.createElement(nT,{page:L})):R});Xp.displayName="Link";var hl=le.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},v){let g=wl(f,{relative:p.relative}),x=as(),y=le.useContext(Rl),{navigator:b,basename:T}=le.useContext(Gi),E=y!=null&&vT(g)&&d===!0,S=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,D=x.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(D=D.toLowerCase(),L=L?L.toLowerCase():null,S=S.toLowerCase()),L&&T&&(L=Hi(L,T)||L);const O=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let z=D===S||!l&&D.startsWith(S)&&D.charAt(O)==="/",B=L!=null&&(L===S||!l&&L.startsWith(S)&&L.charAt(S.length)==="/"),A={isActive:z,isPending:B,isTransitioning:E},W=z?e:void 0,R;typeof s=="function"?R=s(A):R=[s,z?"active":null,B?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let U=typeof u=="function"?u(A):u;return le.createElement(Xp,{...p,"aria-current":W,className:R,ref:v,style:U,to:f,viewTransition:d},typeof m=="function"?m(A):m)});hl.displayName="NavLink";var cT=le.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=vc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...y},b)=>{let{unstable_useTransitions:T}=le.useContext(Gi),E=mT(),S=gT(d,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&Wx.test(d),O=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let B=z.nativeEvent.submitter,A=B?.getAttribute("formmethod")||f,W=()=>E(B||z.currentTarget,{fetcherKey:e,method:A,navigate:i,replace:l,state:u,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?le.startTransition(()=>W()):W()};return le.createElement("form",{ref:b,method:D,action:S,onSubmit:s?m:O,...y,"data-discover":!L&&a==="render"?"true":void 0})});cT.displayName="Form";function fT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qx(a){let e=le.useContext(is);return Lt(e,fT(a)),e}function dT(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=cb(),v=as(),g=wl(a,{relative:u});return le.useCallback(x=>{if(Vb(x,e)){x.preventDefault();let y=i!==void 0?i:da(v)===da(g),b=()=>p(a,{replace:y,state:s,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d});m?le.startTransition(()=>b()):b()}},[v,p,g,i,s,e,a,l,u,f,d,m])}var hT=0,pT=()=>`__${String(++hT)}__`;function mT(){let{router:a}=qx("useSubmit"),{basename:e}=le.useContext(Gi),i=bb(),s=a.fetch,l=a.navigate;return le.useCallback(async(u,f={})=>{let{action:d,method:m,encType:p,formData:v,body:g}=Wb(u,e);if(f.navigate===!1){let x=f.fetcherKey||pT();await s(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function gT(a,{relative:e}={}){let{basename:i}=le.useContext(Gi),s=le.useContext(ta);Lt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...wl(a||".",{relative:e})},f=as();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();u.search=v?`?${v}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ca([i,u.pathname])),da(u)}function vT(a,{relative:e}={}){let i=le.useContext(Ip);Lt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=qx("useViewTransitionState"),l=wl(a,{relative:e});if(!i.isTransitioning)return!1;let u=Hi(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Hi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Tc(l.pathname,f)!=null||Tc(l.pathname,u)!=null}var _T=gx();function xT(a){return le.createElement(Nb,{flushSync:_T.flushSync,...a})}function yT(){return lt.jsx(lt.Fragment,{children:lt.jsx("div",{className:"navigation",children:lt.jsxs("div",{className:"navigationWidth",children:[lt.jsx("img",{src:"vite.svg"}),lt.jsxs("div",{className:"navigationLink",children:[lt.jsx(hl,{to:"",className:({isActive:a})=>a?"active":"none",end:!0,children:lt.jsx("button",{children:"خانه"})}),lt.jsx(hl,{to:"/Cofe",children:lt.jsx("button",{children:"کافه"})}),lt.jsx(hl,{to:"/Restaurant",children:lt.jsx("button",{children:"رستوران"})}),lt.jsx(hl,{to:"/FastFood",children:lt.jsx("button",{children:"فست فودی"})})]})]})})})}const Wp="182",ST=0,v_=1,MT=2,xc=1,ET=2,pl=3,Ar=0,fi=1,Ha=2,Ga=0,to=1,Fh=2,__=3,x_=4,bT=5,Kr=100,TT=101,AT=102,RT=103,CT=104,wT=200,DT=201,UT=202,LT=203,zh=204,Ih=205,NT=206,OT=207,PT=208,FT=209,zT=210,IT=211,BT=212,HT=213,GT=214,Bh=0,Hh=1,Gh=2,io=3,Vh=4,kh=5,Xh=6,Wh=7,Yx=0,VT=1,kT=2,fa=0,jx=1,Zx=2,Kx=3,Qx=4,Jx=5,$x=6,ey=7,ty=300,ns=301,ao=302,qh=303,Yh=304,Oc=306,jh=1e3,bi=1001,Zh=1002,Zn=1003,XT=1004,Yu=1005,Ln=1006,eh=1007,$r=1008,zi=1009,ny=1010,iy=1011,Sl=1012,qp=1013,ha=1014,Qi=1015,pa=1016,Yp=1017,jp=1018,Ml=1020,ay=35902,ry=35899,sy=1021,oy=1022,Ii=1023,ka=1026,es=1027,ly=1028,Zp=1029,ro=1030,Kp=1031,Qp=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,rp=37490,sp=37491,op=37808,lp=37809,up=37810,cp=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,_p=37819,xp=37820,yp=37821,Sp=36492,Mp=36494,Ep=36495,bp=36283,Tp=36284,Ap=36285,Rp=36286,WT=3200,qT=0,YT=1,Er="",Fi="srgb",so="srgb-linear",Ac="linear",rn="srgb",Is=7680,y_=519,jT=512,ZT=513,KT=514,Jp=515,QT=516,JT=517,$p=518,$T=519,S_=35044,M_="300 es",ua=2e3,Rc=2001;function uy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Cc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eA(){const a=Cc("canvas");return a.style.display="block",a}const E_={};function b_(...a){const e="THREE."+a.shift();console.log(e,...a)}function vt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Zt(...a){const e="THREE."+a.shift();console.error(e,...a)}function El(...a){const e=a.join(" ");e in E_||(E_[e]=!0,vt(...a))}function tA(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class lo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Cp=180/Math.PI;function Dl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]).toLowerCase()}function Xt(a,e,i){return Math.max(e,Math.min(i,a))}function nA(a,e){return(a%e+e)%e}function nh(a,e,i){return(1-i)*a+i*e}function il(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,i=0){Mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ul{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],x=u[f+0],y=u[f+1],b=u[f+2],T=u[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d>=1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==x||p!==y||v!==b){let E=m*x+p*y+v*b+g*T;E<0&&(x=-x,y=-y,b=-b,T=-T,E=-E);let S=1-d;if(E<.9995){const D=Math.acos(E),L=Math.sin(D);S=Math.sin(S*D)/L,d=Math.sin(d*D)/L,m=m*S+x*d,p=p*S+y*d,v=v*S+b*d,g=g*S+T*d}else{m=m*S+x*d,p=p*S+y*d,v=v*S+b*d,g=g*S+T*d;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[f],x=u[f+1],y=u[f+2],b=u[f+3];return e[i]=d*b+v*g+m*y-p*x,e[i+1]=m*b+v*x+p*g-d*y,e[i+2]=p*b+v*y+d*x-m*g,e[i+3]=v*b-d*g-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),x=m(s/2),y=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"YXZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"ZXY":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"ZYX":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"YZX":this._x=x*v*g+p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g-x*y*b;break;case"XZY":this._x=x*v*g-p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g+x*y*b;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(f-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(u-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(f-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-u*m,this._y=l*v+f*m+u*d-s*p,this._z=u*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,i=0,s=0){pe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(T_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(T_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+m*p+f*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new pe,T_=new Ul;class Ct{constructor(e,i,s,l,u,f,d,m,p){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p)}set(e,i,s,l,u,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],y=s[5],b=s[8],T=l[0],E=l[3],S=l[6],D=l[1],L=l[4],O=l[7],z=l[2],B=l[5],A=l[8];return u[0]=f*T+d*D+m*z,u[3]=f*E+d*L+m*B,u[6]=f*S+d*O+m*A,u[1]=p*T+v*D+g*z,u[4]=p*E+v*L+g*B,u[7]=p*S+v*O+g*A,u[2]=x*T+y*D+b*z,u[5]=x*E+y*L+b*B,u[8]=x*S+y*O+b*A,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*d*p-s*u*v+s*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*u,y=p*u-f*m,b=i*g+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-v*s)*T,e[2]=(d*s-l*f)*T,e[3]=x*T,e[4]=(v*i-l*m)*T,e[5]=(l*u-d*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new Ct,A_=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iA(){const a={enabled:!0,workingColorSpace:so,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===rn&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===rn&&(l.r=no(l.r),l.g=no(l.g),l.b=no(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return El("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return El("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[so]:{primaries:e,whitePoint:s,transfer:Ac,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fi},outputColorSpaceConfig:{drawingBufferColorSpace:Fi}},[Fi]:{primaries:e,whitePoint:s,transfer:rn,toXYZ:A_,fromXYZ:R_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fi}}}),a}const qt=iA();function Va(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function no(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Bs;class aA{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=Cc("canvas")),Bs.width=e.width,Bs.height=e.height;const l=Bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Va(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Va(i[s]/255)*255):i[s]=Va(i[s]);return{data:i,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rA=0;class em{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(rh(l[f].image)):u.push(rh(l[f]))}else u=rh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?aA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let sA=0;const sh=new pe;class ii extends lo{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=bi,l=bi,u=Ln,f=$r,d=Ii,m=zi,p=ii.DEFAULT_ANISOTROPY,v=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Dl(),this.name="",this.source=new em(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){vt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=ty;ii.DEFAULT_ANISOTROPY=1;class Sn{constructor(e=0,i=0,s=0,l=1){Sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],y=m[5],b=m[9],T=m[2],E=m[6],S=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-E)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+E)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(y+1)/2,z=(S+1)/2,B=(v+x)/4,A=(g+T)/4,W=(b+E)/4;return L>O&&L>z?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=B/s,u=A/s):O>z?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=B/l,u=W/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=A/u,l=W/u),this.set(s,l,u,i),this}let D=Math.sqrt((E-b)*(E-b)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(E-b)/D,this.y=(g-T)/D,this.z=(x-v)/D,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this.w=Xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this.w=Xt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oA extends lo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Sn(0,0,e,i),this.scissorTest=!1,this.viewport=new Sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new ii(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new em(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends oA{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class cy extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lA extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(qi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(qi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=qi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,qi):qi.fromBufferAttribute(u,f),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ju.copy(s.boundingBox)),ju.applyMatrix4(e.matrixWorld),this.union(ju)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Zu.subVectors(this.max,al),Hs.subVectors(e.a,al),Gs.subVectors(e.b,al),Vs.subVectors(e.c,al),mr.subVectors(Gs,Hs),gr.subVectors(Vs,Gs),kr.subVectors(Hs,Vs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-kr.z,kr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,kr.z,0,-kr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-kr.y,kr.x,0];return!oh(i,Hs,Gs,Vs,Zu)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Hs,Gs,Vs,Zu))?!1:(Ku.crossVectors(mr,gr),i=[Ku.x,Ku.y,Ku.z],oh(i,Hs,Gs,Vs,Zu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],qi=new pe,ju=new Ll,Hs=new pe,Gs=new pe,Vs=new pe,mr=new pe,gr=new pe,kr=new pe,al=new pe,Zu=new pe,Ku=new pe,Xr=new pe;function oh(a,e,i,s,l){for(let u=0,f=a.length-3;u<=f;u+=3){Xr.fromArray(a,u);const d=l.x*Math.abs(Xr.x)+l.y*Math.abs(Xr.y)+l.z*Math.abs(Xr.z),m=e.dot(Xr),p=i.dot(Xr),v=s.dot(Xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const uA=new Ll,rl=new pe,lh=new pe;class Pc{constructor(e=new pe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uA.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const i=rl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(rl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(lh)),this.expandByPoint(rl.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pa=new pe,uh=new pe,Qu=new pe,vr=new pe,ch=new pe,Ju=new pe,fh=new pe;class fy{constructor(e=new pe,i=new pe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){uh.copy(e).add(i).multiplyScalar(.5),Qu.copy(i).sub(e).normalize(),vr.copy(this.origin).sub(uh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Qu),d=vr.dot(this.direction),m=-vr.dot(Qu),p=vr.lengthSq(),v=Math.abs(1-f*f);let g,x,y,b;if(v>0)if(g=f*m-d,x=f*d-m,b=u*v,g>=0)if(x>=-b)if(x<=b){const T=1/v;g*=T,x*=T,y=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(uh).addScaledVector(Qu,x),y}intersectSphere(e,i){Pa.subVectors(e.center,this.origin);const s=Pa.dot(this.direction),l=Pa.dot(Pa)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,s,l,u){ch.subVectors(i,e),Ju.subVectors(s,e),fh.crossVectors(ch,Ju);let f=this.direction.dot(fh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;vr.subVectors(this.origin,e);const m=d*this.direction.dot(Ju.crossVectors(vr,Ju));if(m<0)return null;const p=d*this.direction.dot(ch.cross(vr));if(p<0||m+p>f)return null;const v=-d*vr.dot(fh);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn{constructor(e,i,s,l,u,f,d,m,p,v,g,x,y,b,T,E){Tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p,v,g,x,y,b,T,E)}set(e,i,s,l,u,f,d,m,p,v,g,x,y,b,T,E){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=g,S[14]=x,S[3]=y,S[7]=b,S[11]=T,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/ks.setFromMatrixColumn(e,0).length(),u=1/ks.setFromMatrixColumn(e,1).length(),f=1/ks.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*g,b=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+y*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,y=m*g,b=p*v,T=p*g;i[0]=x+T*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=y*d-b,i[6]=T+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,y=m*g,b=p*v,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*v,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,y=f*g,b=d*v,T=d*g;i[0]=m*v,i[4]=b*p-y,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*v,i[4]=T-x*g,i[8]=b*g+y,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*g+b,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=f*v,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cA,e,fA)}lookAt(e,i,s){const l=this.elements;return Si.subVectors(e,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),_r.crossVectors(s,Si),_r.lengthSq()===0&&(Math.abs(s.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),_r.crossVectors(s,Si)),_r.normalize(),$u.crossVectors(Si,_r),l[0]=_r.x,l[4]=$u.x,l[8]=Si.x,l[1]=_r.y,l[5]=$u.y,l[9]=Si.y,l[2]=_r.z,l[6]=$u.z,l[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],y=s[13],b=s[2],T=s[6],E=s[10],S=s[14],D=s[3],L=s[7],O=s[11],z=s[15],B=l[0],A=l[4],W=l[8],R=l[12],U=l[1],H=l[5],ee=l[9],ae=l[13],ce=l[2],se=l[6],P=l[10],V=l[14],Z=l[3],ye=l[7],Se=l[11],F=l[15];return u[0]=f*B+d*U+m*ce+p*Z,u[4]=f*A+d*H+m*se+p*ye,u[8]=f*W+d*ee+m*P+p*Se,u[12]=f*R+d*ae+m*V+p*F,u[1]=v*B+g*U+x*ce+y*Z,u[5]=v*A+g*H+x*se+y*ye,u[9]=v*W+g*ee+x*P+y*Se,u[13]=v*R+g*ae+x*V+y*F,u[2]=b*B+T*U+E*ce+S*Z,u[6]=b*A+T*H+E*se+S*ye,u[10]=b*W+T*ee+E*P+S*Se,u[14]=b*R+T*ae+E*V+S*F,u[3]=D*B+L*U+O*ce+z*Z,u[7]=D*A+L*H+O*se+z*ye,u[11]=D*W+L*ee+O*P+z*Se,u[15]=D*R+L*ae+O*V+z*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],y=e[14],b=e[3],T=e[7],E=e[11],S=e[15],D=m*y-p*x,L=d*y-p*g,O=d*x-m*g,z=f*y-p*v,B=f*x-m*v,A=f*g-d*v;return i*(T*D-E*L+S*O)-s*(b*D-E*z+S*B)+l*(b*L-T*z+S*A)-u*(b*O-T*B+E*A)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],y=e[11],b=e[12],T=e[13],E=e[14],S=e[15],D=g*E*p-T*x*p+T*m*y-d*E*y-g*m*S+d*x*S,L=b*x*p-v*E*p-b*m*y+f*E*y+v*m*S-f*x*S,O=v*T*p-b*g*p+b*d*y-f*T*y-v*d*S+f*g*S,z=b*g*m-v*T*m-b*d*x+f*T*x+v*d*E-f*g*E,B=i*D+s*L+l*O+u*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/B;return e[0]=D*A,e[1]=(T*x*u-g*E*u-T*l*y+s*E*y+g*l*S-s*x*S)*A,e[2]=(d*E*u-T*m*u+T*l*p-s*E*p-d*l*S+s*m*S)*A,e[3]=(g*m*u-d*x*u-g*l*p+s*x*p+d*l*y-s*m*y)*A,e[4]=L*A,e[5]=(v*E*u-b*x*u+b*l*y-i*E*y-v*l*S+i*x*S)*A,e[6]=(b*m*u-f*E*u-b*l*p+i*E*p+f*l*S-i*m*S)*A,e[7]=(f*x*u-v*m*u+v*l*p-i*x*p-f*l*y+i*m*y)*A,e[8]=O*A,e[9]=(b*g*u-v*T*u-b*s*y+i*T*y+v*s*S-i*g*S)*A,e[10]=(f*T*u-b*d*u+b*s*p-i*T*p-f*s*S+i*d*S)*A,e[11]=(v*d*u-f*g*u-v*s*p+i*g*p+f*s*y-i*d*y)*A,e[12]=z*A,e[13]=(v*T*l-b*g*l+b*s*x-i*T*x-v*s*E+i*g*E)*A,e[14]=(b*d*l-f*T*l-b*s*m+i*T*m+f*s*E-i*d*E)*A,e[15]=(f*g*l-v*d*l+v*s*m-i*g*m-f*s*x+i*d*x)*A,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,d=e.y,m=e.z,p=u*f,v=u*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,v=f+f,g=d+d,x=u*p,y=u*v,b=u*g,T=f*v,E=f*g,S=d*g,D=m*p,L=m*v,O=m*g,z=s.x,B=s.y,A=s.z;return l[0]=(1-(T+S))*z,l[1]=(y+O)*z,l[2]=(b-L)*z,l[3]=0,l[4]=(y-O)*B,l[5]=(1-(x+S))*B,l[6]=(E+D)*B,l[7]=0,l[8]=(b+L)*A,l[9]=(E-D)*A,l[10]=(1-(x+T))*A,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=ks.set(l[0],l[1],l[2]).length();const f=ks.set(l[4],l[5],l[6]).length(),d=ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Yi.copy(this);const p=1/u,v=1/f,g=1/d;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=v,Yi.elements[5]*=v,Yi.elements[6]*=v,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,i.setFromRotationMatrix(Yi),s.x=u,s.y=f,s.z=d,this}makePerspective(e,i,s,l,u,f,d=ua,m=!1){const p=this.elements,v=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let b,T;if(m)b=u/(f-u),T=f*u/(f-u);else if(d===ua)b=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Rc)b=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,d=ua,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,T;if(m)b=1/(f-u),T=f/(f-u);else if(d===ua)b=-2/(f-u),T=-(f+u)/(f-u);else if(d===Rc)b=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ks=new pe,Yi=new Tn,cA=new pe(0,0,0),fA=new pe(1,1,1),_r=new pe,$u=new pe,Si=new pe,C_=new Tn,w_=new Ul;class Xa{constructor(e=0,i=0,s=0,l=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return w_.setFromEuler(this),this.setFromQuaternion(w_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class dy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dA=0;const D_=new pe,Xs=new Ul,Fa=new Tn,ec=new pe,sl=new pe,hA=new pe,pA=new Ul,U_=new pe(1,0,0),L_=new pe(0,1,0),N_=new pe(0,0,1),O_={type:"added"},mA={type:"removed"},Ws={type:"childadded",child:null},dh={type:"childremoved",child:null};class di extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new pe,i=new Xa,s=new Ul,l=new pe(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Ct}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(L_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,i){return D_.copy(e).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(L_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ec.copy(e):ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(sl,ec,this.up):Fa.lookAt(ec,sl,this.up),this.quaternion.setFromRotationMatrix(Fa),l&&(Fa.extractRotation(l.matrixWorld),Xs.setFromRotationMatrix(Fa),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mA),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,hA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,pA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),y=f(e.animations),b=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}di.DEFAULT_UP=new pe(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new pe,za=new pe,hh=new pe,Ia=new pe,qs=new pe,Ys=new pe,P_=new pe,ph=new pe,mh=new pe,gh=new pe,vh=new Sn,_h=new Sn,xh=new Sn;class Ki{constructor(e=new pe,i=new pe,s=new pe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ji.subVectors(e,i),l.cross(ji);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){ji.subVectors(l,i),za.subVectors(s,i),hh.subVectors(e,i);const f=ji.dot(ji),d=ji.dot(za),m=ji.dot(hh),p=za.dot(za),v=za.dot(hh),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,y=(p*m-d*v)*x,b=(f*v-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(e,i,s,l,u,f,d,m){return this.getBarycoord(e,i,s,l,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ia.x),m.addScaledVector(f,Ia.y),m.addScaledVector(d,Ia.z),m)}static getInterpolatedAttribute(e,i,s,l,u,f){return vh.setScalar(0),_h.setScalar(0),xh.setScalar(0),vh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(vh,u.x),f.addScaledVector(_h,u.y),f.addScaledVector(xh,u.z),f}static isFrontFacing(e,i,s,l){return ji.subVectors(s,i),za.subVectors(e,i),ji.cross(za).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),za.subVectors(this.a,this.b),ji.cross(za).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ki.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ki.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,d;qs.subVectors(l,s),Ys.subVectors(u,s),ph.subVectors(e,s);const m=qs.dot(ph),p=Ys.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(e,l);const v=qs.dot(mh),g=Ys.dot(mh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(qs,f);gh.subVectors(e,u);const y=qs.dot(gh),b=Ys.dot(gh);if(b>=0&&y<=b)return i.copy(u);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ys,d);const E=v*b-y*g;if(E<=0&&g-v>=0&&y-b>=0)return P_.subVectors(u,l),d=(g-v)/(g-v+(y-b)),i.copy(l).addScaledVector(P_,d);const S=1/(E+T+x);return f=T*S,d=x*S,i.copy(s).addScaledVector(qs,f).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function yh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Jt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=qt.workingColorSpace){return this.r=e,this.g=i,this.b=s,qt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=qt.workingColorSpace){if(e=nA(e,1),i=Xt(i,0,1),s=Xt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=yh(f,u,e+1/3),this.g=yh(f,u,e),this.b=yh(f,u,e-1/3)}return qt.colorSpaceToWorking(this,l),this}setStyle(e,i=Fi){function s(u){u!==void 0&&parseFloat(u)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:vt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Fi){const s=hy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return qt.workingToColorSpace($n.copy(this),e),Math.round(Xt($n.r*255,0,255))*65536+Math.round(Xt($n.g*255,0,255))*256+Math.round(Xt($n.b*255,0,255))}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=qt.workingColorSpace){qt.workingToColorSpace($n.copy(this),i);const s=$n.r,l=$n.g,u=$n.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=qt.workingColorSpace){return qt.workingToColorSpace($n.copy(this),i),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=Fi){qt.workingToColorSpace($n.copy(this),e);const i=$n.r,s=$n.g,l=$n.b;return e!==Fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+i,xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(xr),e.getHSL(tc);const s=nh(xr.h,tc.h,i),l=nh(xr.s,tc.s,i),u=nh(xr.l,tc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Jt;Jt.NAMES=hy;let gA=0;class Nl extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=to,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Ih,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){vt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==Kr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class py extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Un=new pe,nc=new Mt;let vA=0;class $i{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vA++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=S_,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(e),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix3(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=il(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),u=ci(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S_&&(e.usage=this.usage),e}}class my extends $i{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gy extends $i{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ea extends $i{constructor(e,i,s){super(new Float32Array(e),i,s)}}let _A=0;const Oi=new Tn,Sh=new di,js=new pe,Mi=new Ll,ol=new Ll,Bn=new pe;class na extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?gy:my)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new Ct().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,i,s){return Oi.makeTranslation(e,i,s),this.applyMatrix4(Oi),this}scale(e,i,s){return Oi.makeScale(e,i,s),this.applyMatrix4(Oi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ea(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Mi.setFromBufferAttribute(u),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Mi.min,ol.min),Mi.expandByPoint(Bn),Bn.addVectors(Mi.max,ol.max),Mi.expandByPoint(Bn)):(Mi.expandByPoint(ol.min),Mi.expandByPoint(ol.max))}Mi.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)Bn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Bn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Bn.fromBufferAttribute(d,p),m&&(js.fromBufferAttribute(e,p),Bn.add(js)),l=Math.max(l,s.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new pe,m[W]=new pe;const p=new pe,v=new pe,g=new pe,x=new Mt,y=new Mt,b=new Mt,T=new pe,E=new pe;function S(W,R,U){p.fromBufferAttribute(s,W),v.fromBufferAttribute(s,R),g.fromBufferAttribute(s,U),x.fromBufferAttribute(u,W),y.fromBufferAttribute(u,R),b.fromBufferAttribute(u,U),v.sub(p),g.sub(p),y.sub(x),b.sub(x);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(T.copy(v).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(H),E.copy(g).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(H),d[W].add(T),d[R].add(T),d[U].add(T),m[W].add(E),m[R].add(E),m[U].add(E))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let W=0,R=D.length;W<R;++W){const U=D[W],H=U.start,ee=U.count;for(let ae=H,ce=H+ee;ae<ce;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new pe,O=new pe,z=new pe,B=new pe;function A(W){z.fromBufferAttribute(l,W),B.copy(z);const R=d[W];L.copy(R),L.sub(z.multiplyScalar(z.dot(R))).normalize(),O.crossVectors(B,R);const H=O.dot(m[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,H)}for(let W=0,R=D.length;W<R;++W){const U=D[W],H=U.start,ee=U.count;for(let ae=H,ce=H+ee;ae<ce;ae+=3)A(e.getX(ae+0)),A(e.getX(ae+1)),A(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new pe,u=new pe,f=new pe,d=new pe,m=new pe,p=new pe,v=new pe,g=new pe;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),T=e.getX(x+1),E=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let y=0,b=0;for(let T=0,E=m.length;T<E;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*v;for(let S=0;S<v;S++)x[b++]=p[y++]}return new $i(x,v,g)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new na,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let x=0,y=g.length;x<y;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new Tn,Wr=new fy,ic=new Pc,z_=new pe,ac=new pe,rc=new pe,sc=new pe,Mh=new pe,oc=new pe,I_=new pe,lc=new pe;class Bi extends di{constructor(e=new na,i=new py){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){oc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(Mh.fromBufferAttribute(g,e),f?oc.addScaledVector(Mh,v):oc.addScaledVector(Mh.sub(i),v))}i.add(oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ic.copy(s.boundingSphere),ic.applyMatrix4(u),Wr.copy(e.ray).recast(e.near),!(ic.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(ic,z_)===null||Wr.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(F_.copy(u).invert(),Wr.copy(e.ray).applyMatrix4(F_),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const E=x[b],S=f[E.materialIndex],D=Math.max(E.start,y.start),L=Math.min(d.count,Math.min(E.start+E.count,y.start+y.count));for(let O=D,z=L;O<z;O+=3){const B=d.getX(O),A=d.getX(O+1),W=d.getX(O+2);l=uc(this,S,e,s,p,v,g,B,A,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let E=b,S=T;E<S;E+=3){const D=d.getX(E),L=d.getX(E+1),O=d.getX(E+2);l=uc(this,f,e,s,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const E=x[b],S=f[E.materialIndex],D=Math.max(E.start,y.start),L=Math.min(m.count,Math.min(E.start+E.count,y.start+y.count));for(let O=D,z=L;O<z;O+=3){const B=O,A=O+1,W=O+2;l=uc(this,S,e,s,p,v,g,B,A,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let E=b,S=T;E<S;E+=3){const D=E,L=E+1,O=E+2;l=uc(this,f,e,s,p,v,g,D,L,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function xA(a,e,i,s,l,u,f,d){let m;if(e.side===fi?m=s.intersectTriangle(f,u,l,!0,d):m=s.intersectTriangle(l,u,f,e.side===Ar,d),m===null)return null;lc.copy(d),lc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:a}}function uc(a,e,i,s,l,u,f,d,m,p){a.getVertexPosition(d,ac),a.getVertexPosition(m,rc),a.getVertexPosition(p,sc);const v=xA(a,e,i,s,ac,rc,sc,I_);if(v){const g=new pe;Ki.getBarycoord(I_,ac,rc,sc,g),l&&(v.uv=Ki.getInterpolatedAttribute(l,d,m,p,g,new Mt)),u&&(v.uv1=Ki.getInterpolatedAttribute(u,d,m,p,g,new Mt)),f&&(v.normal=Ki.getInterpolatedAttribute(f,d,m,p,g,new pe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new pe,materialIndex:0};Ki.getNormal(ac,rc,sc,x.normal),v.face=x,v.barycoord=g}return v}class Ol extends na{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,e,f,u,0),b("z","y","x",1,-1,s,i,-e,f,u,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ea(p,3)),this.setAttribute("normal",new ea(v,3)),this.setAttribute("uv",new ea(g,2));function b(T,E,S,D,L,O,z,B,A,W,R){const U=O/A,H=z/W,ee=O/2,ae=z/2,ce=B/2,se=A+1,P=W+1;let V=0,Z=0;const ye=new pe;for(let Se=0;Se<P;Se++){const F=Se*H-ae;for(let te=0;te<se;te++){const _e=te*U-ee;ye[T]=_e*D,ye[E]=F*L,ye[S]=ce,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[E]=0,ye[S]=B>0?1:-1,v.push(ye.x,ye.y,ye.z),g.push(te/A),g.push(1-Se/W),V+=1}}for(let Se=0;Se<W;Se++)for(let F=0;F<A;F++){const te=x+F+se*Se,_e=x+F+se*(Se+1),Re=x+(F+1)+se*(Se+1),ze=x+(F+1)+se*Se;m.push(te,_e,ze),m.push(_e,Re,ze),Z+=6}d.addGroup(y,Z,R),y+=Z,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ni(a){const e={};for(let i=0;i<a.length;i++){const s=oo(a[i]);for(const l in s)e[l]=s[l]}return e}function yA(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function vy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}const SA={clone:oo,merge:ni};var MA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MA,this.fragmentShader=EA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=yA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class wc extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new pe,B_=new Mt,H_=new Mt;class Zi extends wc{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Cp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cp*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,i){return this.getViewBounds(e,B_,H_),i.subVectors(H_,B_)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Zs=-90,Ks=1;class bA extends di{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Zi(Zs,Ks,e,i);l.layers=this.layers,this.add(l);const u=new Zi(Zs,Ks,e,i);u.layers=this.layers,this.add(u);const f=new Zi(Zs,Ks,e,i);f.layers=this.layers,this.add(f);const d=new Zi(Zs,Ks,e,i);d.layers=this.layers,this.add(d);const m=new Zi(Zs,Ks,e,i);m.layers=this.layers,this.add(m);const p=new Zi(Zs,Ks,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class _y extends ii{constructor(e=[],i=ns,s,l,u,f,d,m,p,v){super(e,i,s,l,u,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xy extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new _y(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ol(5,5,5),u=new ma({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Ga});u.uniforms.tEquirect.value=i;const f=new Bi(l,u),d=i.minFilter;return i.minFilter===$r&&(i.minFilter=Ln),new bA(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}class cc extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TA={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const E=i.getJointPose(T,s),S=this._getHandJoint(p,T);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new cc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class G_ extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yy extends ii{constructor(e=null,i=1,s=1,l,u,f,d,m,p=Zn,v=Zn,g,x){super(null,f,d,m,p,v,l,u,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new pe,AA=new pe,RA=new Ct;class Zr{constructor(e=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=bh.subVectors(s,i).cross(AA.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RA.getNormalMatrix(e),l=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Pc,CA=new Mt(.5,.5),fc=new pe;class Sy{constructor(e=new Zr,i=new Zr,s=new Zr,l=new Zr,u=new Zr,f=new Zr){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua,s=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],x=u[6],y=u[7],b=u[8],T=u[9],E=u[10],S=u[11],D=u[12],L=u[13],O=u[14],z=u[15];if(l[0].setComponents(p-f,y-v,S-b,z-D).normalize(),l[1].setComponents(p+f,y+v,S+b,z+D).normalize(),l[2].setComponents(p+d,y+g,S+T,z+L).normalize(),l[3].setComponents(p-d,y-g,S-T,z-L).normalize(),s)l[4].setComponents(m,x,E,O).normalize(),l[5].setComponents(p-m,y-x,S-E,z-O).normalize();else if(l[4].setComponents(p-m,y-x,S-E,z-O).normalize(),i===ua)l[5].setComponents(p+m,y+x,S+E,z+O).normalize();else if(i===Rc)l[5].setComponents(m,x,E,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const i=CA.distanceTo(e.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(fc.x=l.normal.x>0?e.max.x:e.min.x,fc.y=l.normal.y>0?e.max.y:e.min.y,fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wA extends Nl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new pe,Uc=new pe,V_=new Tn,ll=new fy,dc=new Pc,Th=new pe,k_=new pe;class DA extends di{constructor(e=new na,i=new wA){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Dc.fromBufferAttribute(i,l-1),Uc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Dc.distanceTo(Uc);e.setAttribute("lineDistance",new ea(s,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(l),dc.radius+=u,e.ray.intersectsSphere(dc)===!1)return;V_.copy(l).invert(),ll.copy(e.ray).applyMatrix4(V_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const y=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let T=y,E=b-1;T<E;T+=p){const S=v.getX(T),D=v.getX(T+1),L=hc(this,e,ll,m,S,D,T);L&&i.push(L)}if(this.isLineLoop){const T=v.getX(b-1),E=v.getX(y),S=hc(this,e,ll,m,T,E,b-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=y,E=b-1;T<E;T+=p){const S=hc(this,e,ll,m,T,T+1,T);S&&i.push(S)}if(this.isLineLoop){const T=hc(this,e,ll,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function hc(a,e,i,s,l,u,f){const d=a.geometry.attributes.position;if(Dc.fromBufferAttribute(d,l),Uc.fromBufferAttribute(d,u),i.distanceSqToSegment(Dc,Uc,Th,k_)>s)return;Th.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Th);if(!(p<e.near||p>e.far))return{distance:p,point:k_.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const X_=new pe,W_=new pe;class UA extends DA{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)X_.fromBufferAttribute(i,l),W_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+X_.distanceTo(W_);e.setAttribute("lineDistance",new ea(s,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bl extends ii{constructor(e,i,s=ha,l,u,f,d=Zn,m=Zn,p,v=ka,g=1){if(v!==ka&&v!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,u,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class LA extends bl{constructor(e,i=ha,s=ns,l,u,f=Zn,d=Zn,m,p=ka){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,u,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class My extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ts extends na{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,x=i/m,y=[],b=[],T=[],E=[];for(let S=0;S<v;S++){const D=S*x-f;for(let L=0;L<p;L++){const O=L*g-u;b.push(O,-D,0),T.push(0,0,1),E.push(L/d),E.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const L=D+p*S,O=D+p*(S+1),z=D+1+p*(S+1),B=D+1+p*S;y.push(L,O,B),y.push(O,z,B)}this.setIndex(y),this.setAttribute("position",new ea(b,3)),this.setAttribute("normal",new ea(T,3)),this.setAttribute("uv",new ea(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class ml extends ma{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NA extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OA extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ey extends wc{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PA extends Zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class FA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function q_(a,e,i,s){const l=zA(s);switch(i){case sy:return a*e;case ly:return a*e/l.components*l.byteLength;case Zp:return a*e/l.components*l.byteLength;case ro:return a*e*2/l.components*l.byteLength;case Kp:return a*e*2/l.components*l.byteLength;case oy:return a*e*3/l.components*l.byteLength;case Ii:return a*e*4/l.components*l.byteLength;case Qp:return a*e*4/l.components*l.byteLength;case yc:case Sc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(a,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(a,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case np:case rp:case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case up:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Sp:case Mp:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*16;case bp:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ap:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zA(a){switch(a){case zi:case ny:return{byteLength:1,components:1};case Sl:case iy:case pa:return{byteLength:2,components:1};case Yp:case jp:return{byteLength:2,components:4};case ha:case qp:case Qi:return{byteLength:4,components:1};case ay:case ry:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);function by(){let a=null,e=!1,i=null,s=null;function l(u,f){i(u,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function IA(a){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,v);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];a.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var BA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_R=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ER=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$R=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:BA,alphahash_pars_fragment:HA,alphamap_fragment:GA,alphamap_pars_fragment:VA,alphatest_fragment:kA,alphatest_pars_fragment:XA,aomap_fragment:WA,aomap_pars_fragment:qA,batching_pars_vertex:YA,batching_vertex:jA,begin_vertex:ZA,beginnormal_vertex:KA,bsdfs:QA,iridescence_fragment:JA,bumpmap_pars_fragment:$A,clipping_planes_fragment:e1,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:a1,color_pars_fragment:r1,color_pars_vertex:s1,color_vertex:o1,common:l1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:c1,displacementmap_pars_vertex:f1,displacementmap_vertex:d1,emissivemap_fragment:h1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:v1,envmap_common_pars_fragment:_1,envmap_pars_fragment:x1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:U1,envmap_vertex:S1,fog_vertex:M1,fog_pars_vertex:E1,fog_fragment:b1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:R1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:w1,lights_pars_begin:D1,lights_toon_fragment:L1,lights_toon_pars_fragment:N1,lights_phong_fragment:O1,lights_phong_pars_fragment:P1,lights_physical_fragment:F1,lights_physical_pars_fragment:z1,lights_fragment_begin:I1,lights_fragment_maps:B1,lights_fragment_end:H1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:X1,map_fragment:W1,map_pars_fragment:q1,map_particle_fragment:Y1,map_particle_pars_fragment:j1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:K1,morphinstance_vertex:Q1,morphcolor_vertex:J1,morphnormal_vertex:$1,morphtarget_pars_vertex:eR,morphtarget_vertex:tR,normal_fragment_begin:nR,normal_fragment_maps:iR,normal_pars_fragment:aR,normal_pars_vertex:rR,normal_vertex:sR,normalmap_pars_fragment:oR,clearcoat_normal_fragment_begin:lR,clearcoat_normal_fragment_maps:uR,clearcoat_pars_fragment:cR,iridescence_pars_fragment:fR,opaque_fragment:dR,packing:hR,premultiplied_alpha_fragment:pR,project_vertex:mR,dithering_fragment:gR,dithering_pars_fragment:vR,roughnessmap_fragment:_R,roughnessmap_pars_fragment:xR,shadowmap_pars_fragment:yR,shadowmap_pars_vertex:SR,shadowmap_vertex:MR,shadowmask_pars_fragment:ER,skinbase_vertex:bR,skinning_pars_vertex:TR,skinning_vertex:AR,skinnormal_vertex:RR,specularmap_fragment:CR,specularmap_pars_fragment:wR,tonemapping_fragment:DR,tonemapping_pars_fragment:UR,transmission_fragment:LR,transmission_pars_fragment:NR,uv_pars_fragment:OR,uv_pars_vertex:PR,uv_vertex:FR,worldpos_vertex:zR,background_vert:IR,background_frag:BR,backgroundCube_vert:HR,backgroundCube_frag:GR,cube_vert:VR,cube_frag:kR,depth_vert:XR,depth_frag:WR,distance_vert:qR,distance_frag:YR,equirect_vert:jR,equirect_frag:ZR,linedashed_vert:KR,linedashed_frag:QR,meshbasic_vert:JR,meshbasic_frag:$R,meshlambert_vert:eC,meshlambert_frag:tC,meshmatcap_vert:nC,meshmatcap_frag:iC,meshnormal_vert:aC,meshnormal_frag:rC,meshphong_vert:sC,meshphong_frag:oC,meshphysical_vert:lC,meshphysical_frag:uC,meshtoon_vert:cC,meshtoon_frag:fC,points_vert:dC,points_frag:hC,shadow_vert:pC,shadow_frag:mC,sprite_vert:gC,sprite_frag:vC},Ye={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},la={basic:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ni([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ni([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ni([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Jt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ni([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ni([Ye.points,Ye.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ni([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ni([Ye.common,Ye.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ni([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ni([Ye.sprite,Ye.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:ni([Ye.common,Ye.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:ni([Ye.lights,Ye.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};la.physical={uniforms:ni([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const pc={r:0,b:0,g:0},Yr=new Xa,_C=new Tn;function xC(a,e,i,s,l,u,f){const d=new Jt(0);let m=u===!0?0:1,p,v,g=null,x=0,y=null;function b(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:e).get(O)),O}function T(L){let O=!1;const z=b(L);z===null?S(d,m):z&&z.isColor&&(S(z,1),O=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function E(L,O){const z=b(O);z&&(z.isCubeTexture||z.mapping===Oc)?(v===void 0&&(v=new Bi(new Ol(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:oo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,A,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Yr.copy(O.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_C.makeRotationFromEuler(Yr)),v.material.toneMapped=qt.getTransfer(z.colorSpace)!==rn,(g!==z||x!==z.version||y!==a.toneMapping)&&(v.material.needsUpdate=!0,g=z,x=z.version,y=a.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Bi(new ts(2,2),new ma({name:"BackgroundMaterial",uniforms:oo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=qt.getTransfer(z.colorSpace)!==rn,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,y=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function S(L,O){L.getRGB(pc,vy(a)),s.buffers.color.setClear(pc.r,pc.g,pc.b,O,f)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,S(d,m)},render:T,addToRenderList:E,dispose:D}}function yC(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,f=!1;function d(U,H,ee,ae,ce){let se=!1;const P=g(ae,ee,H);u!==P&&(u=P,p(u.object)),se=y(U,ae,ee,ce),se&&b(U,ae,ee,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(se||f)&&(f=!1,O(U,H,ee,ae),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function m(){return a.createVertexArray()}function p(U){return a.bindVertexArray(U)}function v(U){return a.deleteVertexArray(U)}function g(U,H,ee){const ae=ee.wireframe===!0;let ce=s[U.id];ce===void 0&&(ce={},s[U.id]=ce);let se=ce[H.id];se===void 0&&(se={},ce[H.id]=se);let P=se[ae];return P===void 0&&(P=x(m()),se[ae]=P),P}function x(U){const H=[],ee=[],ae=[];for(let ce=0;ce<i;ce++)H[ce]=0,ee[ce]=0,ae[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ee,attributeDivisors:ae,object:U,attributes:{},index:null}}function y(U,H,ee,ae){const ce=u.attributes,se=H.attributes;let P=0;const V=ee.getAttributes();for(const Z in V)if(V[Z].location>=0){const Se=ce[Z];let F=se[Z];if(F===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),Se===void 0||Se.attribute!==F||F&&Se.data!==F.data)return!0;P++}return u.attributesNum!==P||u.index!==ae}function b(U,H,ee,ae){const ce={},se=H.attributes;let P=0;const V=ee.getAttributes();for(const Z in V)if(V[Z].location>=0){let Se=se[Z];Se===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor));const F={};F.attribute=Se,Se&&Se.data&&(F.data=Se.data),ce[Z]=F,P++}u.attributes=ce,u.attributesNum=P,u.index=ae}function T(){const U=u.newAttributes;for(let H=0,ee=U.length;H<ee;H++)U[H]=0}function E(U){S(U,0)}function S(U,H){const ee=u.newAttributes,ae=u.enabledAttributes,ce=u.attributeDivisors;ee[U]=1,ae[U]===0&&(a.enableVertexAttribArray(U),ae[U]=1),ce[U]!==H&&(a.vertexAttribDivisor(U,H),ce[U]=H)}function D(){const U=u.newAttributes,H=u.enabledAttributes;for(let ee=0,ae=H.length;ee<ae;ee++)H[ee]!==U[ee]&&(a.disableVertexAttribArray(ee),H[ee]=0)}function L(U,H,ee,ae,ce,se,P){P===!0?a.vertexAttribIPointer(U,H,ee,ce,se):a.vertexAttribPointer(U,H,ee,ae,ce,se)}function O(U,H,ee,ae){T();const ce=ae.attributes,se=ee.getAttributes(),P=H.defaultAttributeValues;for(const V in se){const Z=se[V];if(Z.location>=0){let ye=ce[V];if(ye===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),ye!==void 0){const Se=ye.normalized,F=ye.itemSize,te=e.get(ye);if(te===void 0)continue;const _e=te.buffer,Re=te.type,ze=te.bytesPerElement,ie=Re===a.INT||Re===a.UNSIGNED_INT||ye.gpuType===qp;if(ye.isInterleavedBufferAttribute){const ve=ye.data,Le=ve.stride,tt=ye.offset;if(ve.isInstancedInterleavedBuffer){for(let Je=0;Je<Z.locationSize;Je++)S(Z.location+Je,ve.meshPerAttribute);U.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Je=0;Je<Z.locationSize;Je++)E(Z.location+Je);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Je=0;Je<Z.locationSize;Je++)L(Z.location+Je,F/Z.locationSize,Re,Se,Le*ze,(tt+F/Z.locationSize*Je)*ze,ie)}else{if(ye.isInstancedBufferAttribute){for(let ve=0;ve<Z.locationSize;ve++)S(Z.location+ve,ye.meshPerAttribute);U.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ve=0;ve<Z.locationSize;ve++)E(Z.location+ve);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let ve=0;ve<Z.locationSize;ve++)L(Z.location+ve,F/Z.locationSize,Re,Se,F*ze,F/Z.locationSize*ve*ze,ie)}}else if(P!==void 0){const Se=P[V];if(Se!==void 0)switch(Se.length){case 2:a.vertexAttrib2fv(Z.location,Se);break;case 3:a.vertexAttrib3fv(Z.location,Se);break;case 4:a.vertexAttrib4fv(Z.location,Se);break;default:a.vertexAttrib1fv(Z.location,Se)}}}}D()}function z(){W();for(const U in s){const H=s[U];for(const ee in H){const ae=H[ee];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete H[ee]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const ee in H){const ae=H[ee];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete H[ee]}delete s[U.id]}function A(U){for(const H in s){const ee=s[H];if(ee[U.id]===void 0)continue;const ae=ee[U.id];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete ee[U.id]}}function W(){R(),f=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:A,initAttributes:T,enableAttribute:E,disableUnusedAttributes:D}}function SC(a,e,i){let s;function l(p){s=p}function u(p,v){a.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(a.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let y=0;for(let b=0;b<g;b++)y+=v[b];i.update(y,s,1)}function m(p,v,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=v[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MC(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(A){return!(A!==Ii&&s.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(A){const W=A===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zi&&s.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qi&&!W)}function m(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(vt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),E=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),O=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),B=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:O,maxSamples:z,samples:B}}function EC(a){const e=this;let i=null,s=0,l=!1,u=!1;const f=new Zr,d=new Ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,T=g.clipIntersection,E=g.clipShadows,S=a.get(g);if(!l||b===null||b.length===0||u&&!E)u?v(null):p();else{const D=u?0:s,L=D*4;let O=S.clippingState||null;m.value=O,O=v(b,x,L,y);for(let z=0;z!==L;++z)O[z]=i[z];S.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,y,b){const T=g!==null?g.length:0;let E=null;if(T!==0){if(E=m.value,b!==!0||E===null){const S=y+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(E===null||E.length<S)&&(E=new Float32Array(S));for(let L=0,O=y;L!==T;++L,O+=4)f.copy(g[L]).applyMatrix4(D,d),f.normal.toArray(E,O),E[O+3]=f.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,E}}function bC(a){let e=new WeakMap;function i(f,d){return d===qh?f.mapping=ns:d===Yh&&(f.mapping=ao),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===qh||d===Yh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new xy(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Tr=4,Y_=[.125,.215,.35,.446,.526,.582],Qr=20,TC=256,ul=new Ey,j_=new Jt;let Ah=null,Rh=0,Ch=0,wh=!1;const AC=new pe;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=AC}=u;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ns||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:pa,format:Ii,colorSpace:so,depthBuffer:!1},l=K_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RC(u)),this._blurMaterial=wC(u,e,i),this._ggxMaterial=CC(u,e,i)}return l}_compileMaterial(e){const i=new Bi(new na,e);this._renderer.compile(i,ul)}_sceneToCubeUV(e,i,s,l,u){const m=new Zi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(j_),g.toneMapping=fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new Ol,new py({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,E=T.material;let S=!1;const D=e.background;D?D.isColor&&(E.color.copy(D),e.background=null,S=!0):(E.color.copy(j_),S=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[L],u.y,u.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[L]));const z=this._cubeSize;Qs(l,O*z,L>2?z:0,z,z),g.setRenderTarget(l),S&&g.render(T,m),g.render(e,m)}g.toneMapping=y,g.autoClear=x,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ns||e.mapping===ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Qs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ul)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,y=g*x,{_lodMax:b}=this,T=this._sizeLods[s],E=3*T*(s>b-Tr?s-b+Tr:0),S=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Qs(u,E,S,3*T,2*T),l.setRenderTarget(u),l.render(d,ul),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Qs(e,E,S,3*T,2*T),l.setRenderTarget(e),l.render(d,ul)}_blur(e,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",u),this._halfBlur(f,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Qr-1),T=u/b,E=isFinite(u)?1+Math.floor(v*T):Qr;E>Qr&&vt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Qr}`);const S=[];let D=0;for(let A=0;A<Qr;++A){const W=A/T,R=Math.exp(-W*W/2);S.push(R),A===0?D+=R:A<E&&(D+=2*R)}for(let A=0;A<S.length;A++)S[A]=S[A]/D;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=S,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-s;const O=this._sizeLods[l],z=3*O*(l>L-Tr?l-L+Tr:0),B=4*(this._cubeSize-O);Qs(i,z,B,3*O,2*O),m.setRenderTarget(i),m.render(g,ul)}}function RC(a){const e=[],i=[],s=[];let l=a;const u=a-Tr+1+Y_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>a-Tr?m=Y_[f-a+Tr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,b=6,T=3,E=2,S=1,D=new Float32Array(T*b*y),L=new Float32Array(E*b*y),O=new Float32Array(S*b*y);for(let B=0;B<y;B++){const A=B%3*2/3-1,W=B>2?0:-1,R=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];D.set(R,T*b*B),L.set(x,E*b*B);const U=[B,B,B,B,B,B];O.set(U,S*b*B)}const z=new na;z.setAttribute("position",new $i(D,T)),z.setAttribute("uv",new $i(L,E)),z.setAttribute("faceIndex",new $i(O,S)),s.push(new Bi(z,null)),l>Tr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function K_(a,e,i){const s=new Ji(a,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function CC(a,e,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function wC(a,e,i){const s=new Float32Array(Qr),l=new pe(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Q_(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function J_(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DC(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===qh||m===Yh,v=m===ns||m===ao;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Z_(a)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Z_(a)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function UC(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&El("WebGLRenderer: "+s+" extension not supported."),l}}}function LC(a,e,i,s){const l={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,O=D.length;L<O;L+=3){const z=D[L+0],B=D[L+1],A=D[L+2];x.push(z,B,B,A,A,z)}}else if(b!==void 0){const D=b.array;T=b.version;for(let L=0,O=D.length/3-1;L<O;L+=3){const z=L+0,B=L+1,A=L+2;x.push(z,B,B,A,A,z)}}else return;const E=new(uy(x)?gy:my)(x,1);E.version=T;const S=u.get(g);S&&e.remove(S),u.set(g,E)}function v(g){const x=u.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function NC(a,e,i){let s;function l(x){s=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){a.drawElements(s,y,u,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(a.drawElementsInstanced(s,y,u,x*f,b),i.update(y,s,b))}function v(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,b);let E=0;for(let S=0;S<b;S++)E+=y[S];i.update(E,s,1)}function g(x,y,b,T){if(b===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let S=0;S<x.length;S++)p(x[S]/f,y[S],T[S]);else{E.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,T,0,b);let S=0;for(let D=0;D<b;D++)S+=y[D]*T[D];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function OC(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(u/3);break;case a.LINES:i.lines+=d*(u/2);break;case a.LINE_STRIP:i.lines+=d*(u-1);break;case a.LINE_LOOP:i.lines+=d*u;break;case a.POINTS:i.points+=d*u;break;default:Zt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PC(a,e,i){const s=new WeakMap,l=new Sn;function u(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let U=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var y=U;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),T===!0&&(O=2),E===!0&&(O=3);let z=d.attributes.position.count*O,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const A=new Float32Array(z*B*4*g),W=new cy(A,z,B,g);W.type=Qi,W.needsUpdate=!0;const R=O*4;for(let H=0;H<g;H++){const ee=S[H],ae=D[H],ce=L[H],se=z*B*4*H;for(let P=0;P<ee.count;P++){const V=P*R;b===!0&&(l.fromBufferAttribute(ee,P),A[se+V+0]=l.x,A[se+V+1]=l.y,A[se+V+2]=l.z,A[se+V+3]=0),T===!0&&(l.fromBufferAttribute(ae,P),A[se+V+4]=l.x,A[se+V+5]=l.y,A[se+V+6]=l.z,A[se+V+7]=0),E===!0&&(l.fromBufferAttribute(ce,P),A[se+V+8]=l.x,A[se+V+9]=l.y,A[se+V+10]=l.z,A[se+V+11]=ce.itemSize===4?l.w:1)}}x={count:g,texture:W,size:new Mt(z,B)},s.set(d,x),d.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let b=0;for(let E=0;E<p.length;E++)b+=p[E];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function FC(a,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const zC={[jx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Kx]:"CINEON_TONE_MAPPING",[Qx]:"ACES_FILMIC_TONE_MAPPING",[$x]:"AGX_TONE_MAPPING",[ey]:"NEUTRAL_TONE_MAPPING",[Jx]:"CUSTOM_TONE_MAPPING"};function IC(a,e,i,s,l){const u=new Ji(e,i,{type:a,depthBuffer:s,stencilBuffer:l}),f=new Ji(e,i,{type:pa,depthBuffer:!1,stencilBuffer:!1}),d=new na;d.setAttribute("position",new ea([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ea([0,2,0,0,2,0],2));const m=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Bi(d,m),v=new Ey(-1,1,1,-1,0,1);let g=null,x=null,y=!1,b,T=null,E=[],S=!1;this.setSize=function(D,L){u.setSize(D,L),f.setSize(D,L);for(let O=0;O<E.length;O++){const z=E[O];z.setSize&&z.setSize(D,L)}},this.setEffects=function(D){E=D,S=E.length>0&&E[0].isRenderPass===!0;const L=u.width,O=u.height;for(let z=0;z<E.length;z++){const B=E[z];B.setSize&&B.setSize(L,O)}},this.begin=function(D,L){if(y||D.toneMapping===fa&&E.length===0)return!1;if(T=L,L!==null){const O=L.width,z=L.height;(u.width!==O||u.height!==z)&&this.setSize(O,z)}return S===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=fa,!0},this.hasRenderPass=function(){return S},this.end=function(D,L){D.toneMapping=b,y=!0;let O=u,z=f;for(let B=0;B<E.length;B++){const A=E[B];if(A.enabled!==!1&&(A.render(D,z,O,L),A.needsSwap!==!1)){const W=O;O=z,z=W}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},qt.getTransfer(g)===rn&&(m.defines.SRGB_TRANSFER="");const B=zC[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(T),D.render(p,v),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Ty=new ii,wp=new bl(1,1),Ay=new cy,Ry=new lA,Cy=new _y,$_=[],ex=[],tx=new Float32Array(16),nx=new Float32Array(9),ix=new Float32Array(4);function uo(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=$_[l];if(u===void 0&&(u=new Float32Array(l),$_[l]=u),e!==0){s.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(u,d)}return u}function Fn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function zc(a,e){let i=ex[e];i===void 0&&(i=new Int32Array(e),ex[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function BC(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function HC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function GC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Fn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function VC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function kC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;ix.set(s),a.uniformMatrix2fv(this.addr,!1,ix),zn(i,s)}}function XC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;nx.set(s),a.uniformMatrix3fv(this.addr,!1,nx),zn(i,s)}}function WC(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;tx.set(s),a.uniformMatrix4fv(this.addr,!1,tx),zn(i,s)}}function qC(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function YC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function jC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function ZC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function KC(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function QC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function JC(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function $C(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function ew(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(wp.compareFunction=i.isReversedDepthBuffer()?$p:Jp,u=wp):u=Ty,i.setTexture2D(e||u,l)}function tw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Ry,l)}function nw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Cy,l)}function iw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ay,l)}function aw(a){switch(a){case 5126:return BC;case 35664:return HC;case 35665:return GC;case 35666:return VC;case 35674:return kC;case 35675:return XC;case 35676:return WC;case 5124:case 35670:return qC;case 35667:case 35671:return YC;case 35668:case 35672:return jC;case 35669:case 35673:return ZC;case 5125:return KC;case 36294:return QC;case 36295:return JC;case 36296:return $C;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}function rw(a,e){a.uniform1fv(this.addr,e)}function sw(a,e){const i=uo(e,this.size,2);a.uniform2fv(this.addr,i)}function ow(a,e){const i=uo(e,this.size,3);a.uniform3fv(this.addr,i)}function lw(a,e){const i=uo(e,this.size,4);a.uniform4fv(this.addr,i)}function uw(a,e){const i=uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function cw(a,e){const i=uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function fw(a,e){const i=uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function dw(a,e){a.uniform1iv(this.addr,e)}function hw(a,e){a.uniform2iv(this.addr,e)}function pw(a,e){a.uniform3iv(this.addr,e)}function mw(a,e){a.uniform4iv(this.addr,e)}function gw(a,e){a.uniform1uiv(this.addr,e)}function vw(a,e){a.uniform2uiv(this.addr,e)}function _w(a,e){a.uniform3uiv(this.addr,e)}function xw(a,e){a.uniform4uiv(this.addr,e)}function yw(a,e,i){const s=this.cache,l=e.length,u=zc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));let f;this.type===a.SAMPLER_2D_SHADOW?f=wp:f=Ty;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,u[d])}function Sw(a,e,i){const s=this.cache,l=e.length,u=zc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ry,u[f])}function Mw(a,e,i){const s=this.cache,l=e.length,u=zc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Cy,u[f])}function Ew(a,e,i){const s=this.cache,l=e.length,u=zc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Ay,u[f])}function bw(a){switch(a){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return lw;case 35674:return uw;case 35675:return cw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return hw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return vw;case 36295:return _w;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Ew}}class Tw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aw(i.type)}}class Aw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bw(i.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function ax(a,e){a.seq.push(e),a.map[e.id]=e}function Cw(a,e,i){const s=a.name,l=s.length;for(Dh.lastIndex=0;;){const u=Dh.exec(s),f=Dh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){ax(i,p===void 0?new Tw(d,a,e):new Aw(d,a,e));break}else{let g=i.map[d];g===void 0&&(g=new Rw(d),ax(i,g)),i=g}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);Cw(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function rx(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const ww=37297;let Dw=0;function Uw(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const sx=new Ct;function Lw(a){qt._getMatrix(sx,qt.workingColorSpace,a);const e=`mat3( ${sx.elements.map(i=>i.toFixed(4))} )`;switch(qt.getTransfer(a)){case Ac:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ox(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+Uw(a.getShaderSource(e),d)}else return u}function Nw(a,e){const i=Lw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Ow={[jx]:"Linear",[Zx]:"Reinhard",[Kx]:"Cineon",[Qx]:"ACESFilmic",[$x]:"AgX",[ey]:"Neutral",[Jx]:"Custom"};function Pw(a,e){const i=Ow[e];return i===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new pe;function Fw(){qt.getLuminanceCoefficients(mc);const a=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function Iw(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Bw(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function gl(a){return a!==""}function lx(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ux(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(a){return a.replace(Hw,Vw)}const Gw=new Map;function Vw(a,e){let i=wt[e];if(i===void 0){const s=Gw.get(e);if(s!==void 0)i=wt[s],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dp(i)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(a){return a.replace(kw,Xw)}function Xw(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function fx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ww={[xc]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function qw(a){return Ww[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[ns]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function jw(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zw={[ao]:"ENVMAP_MODE_REFRACTION"};function Kw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Zw[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qw={[Yx]:"ENVMAP_BLENDING_MULTIPLY",[VT]:"ENVMAP_BLENDING_MIX",[kT]:"ENVMAP_BLENDING_ADD"};function Jw(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Qw[a.combine]||"ENVMAP_BLENDING_NONE"}function $w(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function e2(a,e,i,s){const l=a.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=qw(i),p=jw(i),v=Kw(i),g=Jw(i),x=$w(i),y=zw(i),b=Iw(u),T=l.createProgram();let E,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(gl).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(gl).join(`
`),S.length>0&&(S+=`
`)):(E=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),S=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?wt.tonemapping_pars_fragment:"",i.toneMapping!==fa?Pw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Nw("linearToOutputTexel",i.outputColorSpace),Fw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),f=Dp(f),f=lx(f,i),f=ux(f,i),d=Dp(d),d=lx(d,i),d=ux(d,i),f=cx(f),d=cx(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=D+E+f,O=D+S+d,z=rx(l,l.VERTEX_SHADER,L),B=rx(l,l.FRAGMENT_SHADER,O);l.attachShader(T,z),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function A(H){if(a.debug.checkShaderErrors){const ee=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(z)||"",ce=l.getShaderInfoLog(B)||"",se=ee.trim(),P=ae.trim(),V=ce.trim();let Z=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Z=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,z,B);else{const Se=ox(l,z,"vertex"),F=ox(l,B,"fragment");Zt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+se+`
`+Se+`
`+F)}else se!==""?vt("WebGLProgram: Program Info Log:",se):(P===""||V==="")&&(ye=!1);ye&&(H.diagnostics={runnable:Z,programLog:se,vertexShader:{log:P,prefix:E},fragmentShader:{log:V,prefix:S}})}l.deleteShader(z),l.deleteShader(B),W=new bc(l,T),R=Bw(l,T)}let W;this.getUniforms=function(){return W===void 0&&A(this),W};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,ww)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=B,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new i2(e),i.set(e,s)),s}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function a2(a,e,i,s,l,u,f){const d=new dy,m=new n2,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function E(R,U,H,ee,ae){const ce=ee.fog,se=ae.geometry,P=R.isMeshStandardMaterial?ee.environment:null,V=(R.isMeshStandardMaterial?i:e).get(R.envMap||P),Z=V&&V.mapping===Oc?V.image.height:null,ye=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&vt("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const Se=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=Se!==void 0?Se.length:0;let te=0;se.morphAttributes.position!==void 0&&(te=1),se.morphAttributes.normal!==void 0&&(te=2),se.morphAttributes.color!==void 0&&(te=3);let _e,Re,ze,ie;if(ye){const Dt=la[ye];_e=Dt.vertexShader,Re=Dt.fragmentShader}else _e=R.vertexShader,Re=R.fragmentShader,m.update(R),ze=m.getVertexShaderID(R),ie=m.getFragmentShaderID(R);const ve=a.getRenderTarget(),Le=a.state.buffers.depth.getReversed(),tt=ae.isInstancedMesh===!0,Je=ae.isBatchedMesh===!0,Tt=!!R.map,At=!!R.matcap,_t=!!V,Et=!!R.aoMap,Gt=!!R.lightMap,pt=!!R.bumpMap,dn=!!R.normalMap,X=!!R.displacementMap,$t=!!R.emissiveMap,Nt=!!R.metalnessMap,Vt=!!R.roughnessMap,it=R.anisotropy>0,N=R.clearcoat>0,_=R.dispersion>0,I=R.iridescence>0,J=R.sheen>0,me=R.transmission>0,ne=it&&!!R.anisotropyMap,Ie=N&&!!R.clearcoatMap,Ne=N&&!!R.clearcoatNormalMap,$e=N&&!!R.clearcoatRoughnessMap,ct=I&&!!R.iridescenceMap,we=I&&!!R.iridescenceThicknessMap,Ce=J&&!!R.sheenColorMap,je=J&&!!R.sheenRoughnessMap,qe=!!R.specularMap,Be=!!R.specularColorMap,St=!!R.specularIntensityMap,Y=me&&!!R.transmissionMap,He=me&&!!R.thicknessMap,Ue=!!R.gradientMap,Xe=!!R.alphaMap,Te=R.alphaTest>0,Ee=!!R.alphaHash,Pe=!!R.extensions;let gt=fa;R.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(gt=a.toneMapping);const Wt={shaderID:ye,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Re,defines:R.defines,customVertexShaderID:ze,customFragmentShaderID:ie,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Je,batchingColor:Je&&ae._colorsTexture!==null,instancing:tt,instancingColor:tt&&ae.instanceColor!==null,instancingMorph:tt&&ae.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:so,alphaToCoverage:!!R.alphaToCoverage,map:Tt,matcap:At,envMap:_t,envMapMode:_t&&V.mapping,envMapCubeUVHeight:Z,aoMap:Et,lightMap:Gt,bumpMap:pt,normalMap:dn,displacementMap:X,emissiveMap:$t,normalMapObjectSpace:dn&&R.normalMapType===YT,normalMapTangentSpace:dn&&R.normalMapType===qT,metalnessMap:Nt,roughnessMap:Vt,anisotropy:it,anisotropyMap:ne,clearcoat:N,clearcoatMap:Ie,clearcoatNormalMap:Ne,clearcoatRoughnessMap:$e,dispersion:_,iridescence:I,iridescenceMap:ct,iridescenceThicknessMap:we,sheen:J,sheenColorMap:Ce,sheenRoughnessMap:je,specularMap:qe,specularColorMap:Be,specularIntensityMap:St,transmission:me,transmissionMap:Y,thicknessMap:He,gradientMap:Ue,opaque:R.transparent===!1&&R.blending===to&&R.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Te,alphaHash:Ee,combine:R.combine,mapUv:Tt&&T(R.map.channel),aoMapUv:Et&&T(R.aoMap.channel),lightMapUv:Gt&&T(R.lightMap.channel),bumpMapUv:pt&&T(R.bumpMap.channel),normalMapUv:dn&&T(R.normalMap.channel),displacementMapUv:X&&T(R.displacementMap.channel),emissiveMapUv:$t&&T(R.emissiveMap.channel),metalnessMapUv:Nt&&T(R.metalnessMap.channel),roughnessMapUv:Vt&&T(R.roughnessMap.channel),anisotropyMapUv:ne&&T(R.anisotropyMap.channel),clearcoatMapUv:Ie&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:we&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(R.sheenRoughnessMap.channel),specularMapUv:qe&&T(R.specularMap.channel),specularColorMapUv:Be&&T(R.specularColorMap.channel),specularIntensityMapUv:St&&T(R.specularIntensityMap.channel),transmissionMapUv:Y&&T(R.transmissionMap.channel),thicknessMapUv:He&&T(R.thicknessMap.channel),alphaMapUv:Xe&&T(R.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(dn||it),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!se.attributes.uv&&(Tt||Xe),fog:!!ce,useFog:R.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Le,skinning:ae.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:gt,decodeVideoTexture:Tt&&R.map.isVideoTexture===!0&&qt.getTransfer(R.map.colorSpace)===rn,decodeVideoTextureEmissive:$t&&R.emissiveMap.isVideoTexture===!0&&qt.getTransfer(R.emissiveMap.colorSpace)===rn,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ha,flipSided:R.side===fi,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Pe&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&R.extensions.multiDraw===!0||Je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Wt.vertexUv1s=p.has(1),Wt.vertexUv2s=p.has(2),Wt.vertexUv3s=p.has(3),p.clear(),Wt}function S(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)U.push(H),U.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(D(U,R),L(U,R),U.push(a.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function D(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.numLightProbes),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function L(R,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),R.push(d.mask)}function O(R){const U=b[R.type];let H;if(U){const ee=la[U];H=SA.clone(ee.uniforms)}else H=R.uniforms;return H}function z(R,U){let H=g.get(U);return H!==void 0?++H.usedTimes:(H=new e2(a,U,R,u),v.push(H),g.set(U,H)),H}function B(R){if(--R.usedTimes===0){const U=v.indexOf(R);v[U]=v[v.length-1],v.pop(),g.delete(R.cacheKey),R.destroy()}}function A(R){m.remove(R)}function W(){m.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:O,acquireProgram:z,releaseProgram:B,releaseShaderCache:A,programs:v,dispose:W}}function r2(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,m){a.get(f)[d]=m}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function s2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function dx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function hx(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,y,b,T,E){let S=a[e];return S===void 0?(S={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:E},a[e]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=y,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=T,S.group=E),e++,S}function d(g,x,y,b,T,E){const S=f(g,x,y,b,T,E);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(g,x,y,b,T,E){const S=f(g,x,y,b,T,E);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,x){i.length>1&&i.sort(g||s2),s.length>1&&s.sort(x||dx),l.length>1&&l.sort(x||dx)}function v(){for(let g=e,x=a.length;g<x;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function o2(){let a=new WeakMap;function e(s,l){const u=a.get(s);let f;return u===void 0?(f=new hx,a.set(s,[f])):l>=u.length?(f=new hx,u.push(f)):f=u[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function l2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pe,color:new Jt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":i={color:new Jt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return a[e.id]=i,i}}}function u2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let c2=0;function f2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function d2(a){const e=new l2,i=u2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new pe);const l=new pe,u=new Tn,f=new Tn;function d(p){let v=0,g=0,x=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,b=0,T=0,E=0,S=0,D=0,L=0,O=0,z=0,B=0,A=0;p.sort(f2);for(let R=0,U=p.length;R<U;R++){const H=p[R],ee=H.color,ae=H.intensity,ce=H.distance;let se=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ro?se=H.shadow.map.texture:se=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=ee.r*ae,g+=ee.g*ae,x+=ee.b*ae;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],ae);A++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,Z=i.get(H);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=se,s.directionalShadowMatrix[y]=H.shadow.matrix,D++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ee).multiplyScalar(ae),P.distance=ce,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[T]=P;const V=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,V.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[T]=V.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,s.spotShadow[T]=Z,s.spotShadowMap[T]=se,O++}T++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(ee).multiplyScalar(ae),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[E]=P,E++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const V=H.shadow,Z=i.get(H);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=se,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=P,b++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(ae),P.groundColor.copy(H.groundColor).multiplyScalar(ae),s.hemi[S]=P,S++}}E>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==y||W.pointLength!==b||W.spotLength!==T||W.rectAreaLength!==E||W.hemiLength!==S||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==O||W.numSpotMaps!==z||W.numLightProbes!==A)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=E,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=O+z-B,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=A,W.directionalLength=y,W.pointLength=b,W.spotLength=T,W.rectAreaLength=E,W.hemiLength=S,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=O,W.numSpotMaps=z,W.numLightProbes=A,s.version=c2++)}function m(p,v){let g=0,x=0,y=0,b=0,T=0;const E=v.matrixWorldInverse;for(let S=0,D=p.length;S<D;S++){const L=p[S];if(L.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),g++}else if(L.isSpotLight){const O=s.spot[y];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(E),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),y++}else if(L.isRectAreaLight){const O=s.rectArea[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(E),f.identity(),u.copy(L.matrixWorld),u.premultiply(E),f.extractRotation(u),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const O=s.point[x];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(E),x++}else if(L.isHemisphereLight){const O=s.hemi[T];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(E),T++}}}return{setup:d,setupView:m,state:s}}function px(a){const e=new d2(a),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function h2(a){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new px(a),e.set(l,[d])):u>=f.length?(d=new px(a),f.push(d)):d=f[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const p2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g2=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],v2=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],mx=new Tn,cl=new pe,Uh=new pe;function _2(a,e,i){let s=new Sy;const l=new Mt,u=new Mt,f=new Sn,d=new NA,m=new OA,p={},v=i.maxTextureSize,g={[Ar]:fi,[fi]:Ar,[Ha]:Ha},x=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:p2,fragmentShader:m2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new na;b.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Bi(b,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let S=this.type;this.render=function(B,A,W){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||B.length===0)return;B.type===ET&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=xc);const R=a.getRenderTarget(),U=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(Ga),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ae=S!==this.type;ae&&A.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(se=>se.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,se=B.length;ce<se;ce++){const P=B[ce],V=P.shadow;if(V===void 0){vt("WebGLShadowMap:",P,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const Z=V.getFrameExtents();if(l.multiply(Z),u.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Z.x),l.x=u.x*Z.x,V.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Z.y),l.y=u.y*Z.y,V.mapSize.y=u.y)),V.map===null||ae===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pl){if(P.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ji(l.x,l.y,{format:ro,type:pa,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),V.map.texture.name=P.name+".shadowMap",V.map.depthTexture=new bl(l.x,l.y,Qi),V.map.depthTexture.name=P.name+".shadowMapDepth",V.map.depthTexture.format=ka,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Zn,V.map.depthTexture.magFilter=Zn}else{P.isPointLight?(V.map=new xy(l.x),V.map.depthTexture=new LA(l.x,ha)):(V.map=new Ji(l.x,l.y),V.map.depthTexture=new bl(l.x,l.y,ha)),V.map.depthTexture.name=P.name+".shadowMap",V.map.depthTexture.format=ka;const Se=a.state.buffers.depth.getReversed();this.type===xc?(V.map.depthTexture.compareFunction=Se?$p:Jp,V.map.depthTexture.minFilter=Ln,V.map.depthTexture.magFilter=Ln):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Zn,V.map.depthTexture.magFilter=Zn)}V.camera.updateProjectionMatrix()}const ye=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ye;Se++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,Se),a.clear();else{Se===0&&(a.setRenderTarget(V.map),a.clear());const F=V.getViewport(Se);f.set(u.x*F.x,u.y*F.y,u.x*F.z,u.y*F.w),ee.viewport(f)}if(P.isPointLight){const F=V.camera,te=V.matrix,_e=P.distance||F.far;_e!==F.far&&(F.far=_e,F.updateProjectionMatrix()),cl.setFromMatrixPosition(P.matrixWorld),F.position.copy(cl),Uh.copy(F.position),Uh.add(g2[Se]),F.up.copy(v2[Se]),F.lookAt(Uh),F.updateMatrixWorld(),te.makeTranslation(-cl.x,-cl.y,-cl.z),mx.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V._frustum.setFromProjectionMatrix(mx,F.coordinateSystem,F.reversedDepth)}else V.updateMatrices(P);s=V.getFrustum(),O(A,W,V.camera,P,this.type)}V.isPointLightShadow!==!0&&this.type===pl&&D(V,W),V.needsUpdate=!1}S=this.type,E.needsUpdate=!1,a.setRenderTarget(R,U,H)};function D(B,A){const W=e.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ji(l.x,l.y,{format:ro,type:pa})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(A,null,W,x,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(A,null,W,y,T,null)}function L(B,A,W,R){let U=null;const H=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)U=H;else if(U=W.isPointLight===!0?m:d,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const ee=U.uuid,ae=A.uuid;let ce=p[ee];ce===void 0&&(ce={},p[ee]=ce);let se=ce[ae];se===void 0&&(se=U.clone(),ce[ae]=se,A.addEventListener("dispose",z)),U=se}if(U.visible=A.visible,U.wireframe=A.wireframe,R===pl?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:g[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,W.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ee=a.properties.get(U);ee.light=W}return U}function O(B,A,W,R,U){if(B.visible===!1)return;if(B.layers.test(A.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===pl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const ae=e.update(B),ce=B.material;if(Array.isArray(ce)){const se=ae.groups;for(let P=0,V=se.length;P<V;P++){const Z=se[P],ye=ce[Z.materialIndex];if(ye&&ye.visible){const Se=L(B,ye,R,U);B.onBeforeShadow(a,B,A,W,ae,Se,Z),a.renderBufferDirect(W,null,ae,Se,B,Z),B.onAfterShadow(a,B,A,W,ae,Se,Z)}}}else if(ce.visible){const se=L(B,ce,R,U);B.onBeforeShadow(a,B,A,W,ae,se,null),a.renderBufferDirect(W,null,ae,se,B,null),B.onAfterShadow(a,B,A,W,ae,se,null)}}const ee=B.children;for(let ae=0,ce=ee.length;ae<ce;ae++)O(ee[ae],A,W,R,U)}function z(B){B.target.removeEventListener("dispose",z);for(const W in p){const R=p[W],U=B.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}const x2={[Bh]:Hh,[Gh]:Xh,[Vh]:Wh,[io]:kh,[Hh]:Bh,[Xh]:Gh,[Wh]:Vh,[kh]:io};function y2(a,e){function i(){let Y=!1;const He=new Sn;let Ue=null;const Xe=new Sn(0,0,0,0);return{setMask:function(Te){Ue!==Te&&!Y&&(a.colorMask(Te,Te,Te,Te),Ue=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,Ee,Pe,gt,Wt){Wt===!0&&(Te*=gt,Ee*=gt,Pe*=gt),He.set(Te,Ee,Pe,gt),Xe.equals(He)===!1&&(a.clearColor(Te,Ee,Pe,gt),Xe.copy(He))},reset:function(){Y=!1,Ue=null,Xe.set(-1,0,0,0)}}}function s(){let Y=!1,He=!1,Ue=null,Xe=null,Te=null;return{setReversed:function(Ee){if(He!==Ee){const Pe=e.get("EXT_clip_control");Ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),He=Ee;const gt=Te;Te=null,this.setClear(gt)}},getReversed:function(){return He},setTest:function(Ee){Ee?ve(a.DEPTH_TEST):Le(a.DEPTH_TEST)},setMask:function(Ee){Ue!==Ee&&!Y&&(a.depthMask(Ee),Ue=Ee)},setFunc:function(Ee){if(He&&(Ee=x2[Ee]),Xe!==Ee){switch(Ee){case Bh:a.depthFunc(a.NEVER);break;case Hh:a.depthFunc(a.ALWAYS);break;case Gh:a.depthFunc(a.LESS);break;case io:a.depthFunc(a.LEQUAL);break;case Vh:a.depthFunc(a.EQUAL);break;case kh:a.depthFunc(a.GEQUAL);break;case Xh:a.depthFunc(a.GREATER);break;case Wh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Xe=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){Te!==Ee&&(He&&(Ee=1-Ee),a.clearDepth(Ee),Te=Ee)},reset:function(){Y=!1,Ue=null,Xe=null,Te=null,He=!1}}}function l(){let Y=!1,He=null,Ue=null,Xe=null,Te=null,Ee=null,Pe=null,gt=null,Wt=null;return{setTest:function(Dt){Y||(Dt?ve(a.STENCIL_TEST):Le(a.STENCIL_TEST))},setMask:function(Dt){He!==Dt&&!Y&&(a.stencilMask(Dt),He=Dt)},setFunc:function(Dt,Nn,hi){(Ue!==Dt||Xe!==Nn||Te!==hi)&&(a.stencilFunc(Dt,Nn,hi),Ue=Dt,Xe=Nn,Te=hi)},setOp:function(Dt,Nn,hi){(Ee!==Dt||Pe!==Nn||gt!==hi)&&(a.stencilOp(Dt,Nn,hi),Ee=Dt,Pe=Nn,gt=hi)},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Wt!==Dt&&(a.clearStencil(Dt),Wt=Dt)},reset:function(){Y=!1,He=null,Ue=null,Xe=null,Te=null,Ee=null,Pe=null,gt=null,Wt=null}}}const u=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,y=[],b=null,T=!1,E=null,S=null,D=null,L=null,O=null,z=null,B=null,A=new Jt(0,0,0),W=0,R=!1,U=null,H=null,ee=null,ae=null,ce=null;const se=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,V=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=V>=2);let ye=null,Se={};const F=a.getParameter(a.SCISSOR_BOX),te=a.getParameter(a.VIEWPORT),_e=new Sn().fromArray(F),Re=new Sn().fromArray(te);function ze(Y,He,Ue,Xe){const Te=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(Y,Ee),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<Ue;Pe++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(He,0,a.RGBA,1,1,Xe,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(He+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return Ee}const ie={};ie[a.TEXTURE_2D]=ze(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=ze(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=ze(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=ze(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(a.DEPTH_TEST),f.setFunc(io),pt(!1),dn(v_),ve(a.CULL_FACE),Et(Ga);function ve(Y){v[Y]!==!0&&(a.enable(Y),v[Y]=!0)}function Le(Y){v[Y]!==!1&&(a.disable(Y),v[Y]=!1)}function tt(Y,He){return g[Y]!==He?(a.bindFramebuffer(Y,He),g[Y]=He,Y===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=He),Y===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=He),!0):!1}function Je(Y,He){let Ue=y,Xe=!1;if(Y){Ue=x.get(He),Ue===void 0&&(Ue=[],x.set(He,Ue));const Te=Y.textures;if(Ue.length!==Te.length||Ue[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Pe=Te.length;Ee<Pe;Ee++)Ue[Ee]=a.COLOR_ATTACHMENT0+Ee;Ue.length=Te.length,Xe=!0}}else Ue[0]!==a.BACK&&(Ue[0]=a.BACK,Xe=!0);Xe&&a.drawBuffers(Ue)}function Tt(Y){return b!==Y?(a.useProgram(Y),b=Y,!0):!1}const At={[Kr]:a.FUNC_ADD,[TT]:a.FUNC_SUBTRACT,[AT]:a.FUNC_REVERSE_SUBTRACT};At[RT]=a.MIN,At[CT]=a.MAX;const _t={[wT]:a.ZERO,[DT]:a.ONE,[UT]:a.SRC_COLOR,[zh]:a.SRC_ALPHA,[zT]:a.SRC_ALPHA_SATURATE,[PT]:a.DST_COLOR,[NT]:a.DST_ALPHA,[LT]:a.ONE_MINUS_SRC_COLOR,[Ih]:a.ONE_MINUS_SRC_ALPHA,[FT]:a.ONE_MINUS_DST_COLOR,[OT]:a.ONE_MINUS_DST_ALPHA,[IT]:a.CONSTANT_COLOR,[BT]:a.ONE_MINUS_CONSTANT_COLOR,[HT]:a.CONSTANT_ALPHA,[GT]:a.ONE_MINUS_CONSTANT_ALPHA};function Et(Y,He,Ue,Xe,Te,Ee,Pe,gt,Wt,Dt){if(Y===Ga){T===!0&&(Le(a.BLEND),T=!1);return}if(T===!1&&(ve(a.BLEND),T=!0),Y!==bT){if(Y!==E||Dt!==R){if((S!==Kr||O!==Kr)&&(a.blendEquation(a.FUNC_ADD),S=Kr,O=Kr),Dt)switch(Y){case to:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fh:a.blendFunc(a.ONE,a.ONE);break;case __:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case x_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Zt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case to:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case __:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",Y);break}D=null,L=null,z=null,B=null,A.set(0,0,0),W=0,E=Y,R=Dt}return}Te=Te||He,Ee=Ee||Ue,Pe=Pe||Xe,(He!==S||Te!==O)&&(a.blendEquationSeparate(At[He],At[Te]),S=He,O=Te),(Ue!==D||Xe!==L||Ee!==z||Pe!==B)&&(a.blendFuncSeparate(_t[Ue],_t[Xe],_t[Ee],_t[Pe]),D=Ue,L=Xe,z=Ee,B=Pe),(gt.equals(A)===!1||Wt!==W)&&(a.blendColor(gt.r,gt.g,gt.b,Wt),A.copy(gt),W=Wt),E=Y,R=!1}function Gt(Y,He){Y.side===Ha?Le(a.CULL_FACE):ve(a.CULL_FACE);let Ue=Y.side===fi;He&&(Ue=!Ue),pt(Ue),Y.blending===to&&Y.transparent===!1?Et(Ga):Et(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Xe=Y.stencilWrite;d.setTest(Xe),Xe&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):Le(a.SAMPLE_ALPHA_TO_COVERAGE)}function pt(Y){U!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),U=Y)}function dn(Y){Y!==ST?(ve(a.CULL_FACE),Y!==H&&(Y===v_?a.cullFace(a.BACK):Y===MT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Le(a.CULL_FACE),H=Y}function X(Y){Y!==ee&&(P&&a.lineWidth(Y),ee=Y)}function $t(Y,He,Ue){Y?(ve(a.POLYGON_OFFSET_FILL),(ae!==He||ce!==Ue)&&(a.polygonOffset(He,Ue),ae=He,ce=Ue)):Le(a.POLYGON_OFFSET_FILL)}function Nt(Y){Y?ve(a.SCISSOR_TEST):Le(a.SCISSOR_TEST)}function Vt(Y){Y===void 0&&(Y=a.TEXTURE0+se-1),ye!==Y&&(a.activeTexture(Y),ye=Y)}function it(Y,He,Ue){Ue===void 0&&(ye===null?Ue=a.TEXTURE0+se-1:Ue=ye);let Xe=Se[Ue];Xe===void 0&&(Xe={type:void 0,texture:void 0},Se[Ue]=Xe),(Xe.type!==Y||Xe.texture!==He)&&(ye!==Ue&&(a.activeTexture(Ue),ye=Ue),a.bindTexture(Y,He||ie[Y]),Xe.type=Y,Xe.texture=He)}function N(){const Y=Se[ye];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _(){try{a.compressedTexImage2D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function J(){try{a.texSubImage2D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function me(){try{a.texSubImage3D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function ne(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function Ie(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function Ne(){try{a.texStorage2D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function $e(){try{a.texStorage3D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function ct(){try{a.texImage2D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function we(){try{a.texImage3D(...arguments)}catch(Y){Zt("WebGLState:",Y)}}function Ce(Y){_e.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function je(Y){Re.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function qe(Y,He){let Ue=p.get(He);Ue===void 0&&(Ue=new WeakMap,p.set(He,Ue));let Xe=Ue.get(Y);Xe===void 0&&(Xe=a.getUniformBlockIndex(He,Y.name),Ue.set(Y,Xe))}function Be(Y,He){const Xe=p.get(He).get(Y);m.get(He)!==Xe&&(a.uniformBlockBinding(He,Xe,Y.__bindingPointIndex),m.set(He,Xe))}function St(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},ye=null,Se={},g={},x=new WeakMap,y=[],b=null,T=!1,E=null,S=null,D=null,L=null,O=null,z=null,B=null,A=new Jt(0,0,0),W=0,R=!1,U=null,H=null,ee=null,ae=null,ce=null,_e.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Le,bindFramebuffer:tt,drawBuffers:Je,useProgram:Tt,setBlending:Et,setMaterial:Gt,setFlipSided:pt,setCullFace:dn,setLineWidth:X,setPolygonOffset:$t,setScissorTest:Nt,activeTexture:Vt,bindTexture:it,unbindTexture:N,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:ct,texImage3D:we,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:$e,texSubImage2D:J,texSubImage3D:me,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ie,scissor:Ce,viewport:je,reset:St}}function S2(a,e,i,s,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,v=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,_){return y?new OffscreenCanvas(N,_):Cc("canvas")}function T(N,_,I){let J=1;const me=it(N);if((me.width>I||me.height>I)&&(J=I/Math.max(me.width,me.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ne=Math.floor(J*me.width),Ie=Math.floor(J*me.height);g===void 0&&(g=b(ne,Ie));const Ne=_?b(ne,Ie):g;return Ne.width=ne,Ne.height=Ie,Ne.getContext("2d").drawImage(N,0,0,ne,Ie),vt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ne+"x"+Ie+")."),Ne}else return"data"in N&&vt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function E(N){return N.generateMipmaps}function S(N){a.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(N,_,I,J,me=!1){if(N!==null){if(a[N]!==void 0)return a[N];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ne=_;if(_===a.RED&&(I===a.FLOAT&&(ne=a.R32F),I===a.HALF_FLOAT&&(ne=a.R16F),I===a.UNSIGNED_BYTE&&(ne=a.R8)),_===a.RED_INTEGER&&(I===a.UNSIGNED_BYTE&&(ne=a.R8UI),I===a.UNSIGNED_SHORT&&(ne=a.R16UI),I===a.UNSIGNED_INT&&(ne=a.R32UI),I===a.BYTE&&(ne=a.R8I),I===a.SHORT&&(ne=a.R16I),I===a.INT&&(ne=a.R32I)),_===a.RG&&(I===a.FLOAT&&(ne=a.RG32F),I===a.HALF_FLOAT&&(ne=a.RG16F),I===a.UNSIGNED_BYTE&&(ne=a.RG8)),_===a.RG_INTEGER&&(I===a.UNSIGNED_BYTE&&(ne=a.RG8UI),I===a.UNSIGNED_SHORT&&(ne=a.RG16UI),I===a.UNSIGNED_INT&&(ne=a.RG32UI),I===a.BYTE&&(ne=a.RG8I),I===a.SHORT&&(ne=a.RG16I),I===a.INT&&(ne=a.RG32I)),_===a.RGB_INTEGER&&(I===a.UNSIGNED_BYTE&&(ne=a.RGB8UI),I===a.UNSIGNED_SHORT&&(ne=a.RGB16UI),I===a.UNSIGNED_INT&&(ne=a.RGB32UI),I===a.BYTE&&(ne=a.RGB8I),I===a.SHORT&&(ne=a.RGB16I),I===a.INT&&(ne=a.RGB32I)),_===a.RGBA_INTEGER&&(I===a.UNSIGNED_BYTE&&(ne=a.RGBA8UI),I===a.UNSIGNED_SHORT&&(ne=a.RGBA16UI),I===a.UNSIGNED_INT&&(ne=a.RGBA32UI),I===a.BYTE&&(ne=a.RGBA8I),I===a.SHORT&&(ne=a.RGBA16I),I===a.INT&&(ne=a.RGBA32I)),_===a.RGB&&(I===a.UNSIGNED_INT_5_9_9_9_REV&&(ne=a.RGB9_E5),I===a.UNSIGNED_INT_10F_11F_11F_REV&&(ne=a.R11F_G11F_B10F)),_===a.RGBA){const Ie=me?Ac:qt.getTransfer(J);I===a.FLOAT&&(ne=a.RGBA32F),I===a.HALF_FLOAT&&(ne=a.RGBA16F),I===a.UNSIGNED_BYTE&&(ne=Ie===rn?a.SRGB8_ALPHA8:a.RGBA8),I===a.UNSIGNED_SHORT_4_4_4_4&&(ne=a.RGBA4),I===a.UNSIGNED_SHORT_5_5_5_1&&(ne=a.RGB5_A1)}return(ne===a.R16F||ne===a.R32F||ne===a.RG16F||ne===a.RG32F||ne===a.RGBA16F||ne===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function O(N,_){let I;return N?_===null||_===ha||_===Ml?I=a.DEPTH24_STENCIL8:_===Qi?I=a.DEPTH32F_STENCIL8:_===Sl&&(I=a.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ha||_===Ml?I=a.DEPTH_COMPONENT24:_===Qi?I=a.DEPTH_COMPONENT32F:_===Sl&&(I=a.DEPTH_COMPONENT16),I}function z(N,_){return E(N)===!0||N.isFramebufferTexture&&N.minFilter!==Zn&&N.minFilter!==Ln?Math.log2(Math.max(_.width,_.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?_.mipmaps.length:1}function B(N){const _=N.target;_.removeEventListener("dispose",B),W(_),_.isVideoTexture&&v.delete(_)}function A(N){const _=N.target;_.removeEventListener("dispose",A),U(_)}function W(N){const _=s.get(N);if(_.__webglInit===void 0)return;const I=N.source,J=x.get(I);if(J){const me=J[_.__cacheKey];me.usedTimes--,me.usedTimes===0&&R(N),Object.keys(J).length===0&&x.delete(I)}s.remove(N)}function R(N){const _=s.get(N);a.deleteTexture(_.__webglTexture);const I=N.source,J=x.get(I);delete J[_.__cacheKey],f.memory.textures--}function U(N){const _=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let me=0;me<_.__webglFramebuffer[J].length;me++)a.deleteFramebuffer(_.__webglFramebuffer[J][me]);else a.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)a.deleteFramebuffer(_.__webglFramebuffer[J]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=N.textures;for(let J=0,me=I.length;J<me;J++){const ne=s.get(I[J]);ne.__webglTexture&&(a.deleteTexture(ne.__webglTexture),f.memory.textures--),s.remove(I[J])}s.remove(N)}let H=0;function ee(){H=0}function ae(){const N=H;return N>=l.maxTextures&&vt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ce(N){const _=[];return _.push(N.wrapS),_.push(N.wrapT),_.push(N.wrapR||0),_.push(N.magFilter),_.push(N.minFilter),_.push(N.anisotropy),_.push(N.internalFormat),_.push(N.format),_.push(N.type),_.push(N.generateMipmaps),_.push(N.premultiplyAlpha),_.push(N.flipY),_.push(N.unpackAlignment),_.push(N.colorSpace),_.join()}function se(N,_){const I=s.get(N);if(N.isVideoTexture&&Nt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&I.__version!==N.version){const J=N.image;if(J===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,N,_);return}}else N.isExternalTexture&&(I.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,I.__webglTexture,a.TEXTURE0+_)}function P(N,_){const I=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){ie(I,N,_);return}else N.isExternalTexture&&(I.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,I.__webglTexture,a.TEXTURE0+_)}function V(N,_){const I=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version){ie(I,N,_);return}i.bindTexture(a.TEXTURE_3D,I.__webglTexture,a.TEXTURE0+_)}function Z(N,_){const I=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&I.__version!==N.version){ve(I,N,_);return}i.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+_)}const ye={[jh]:a.REPEAT,[bi]:a.CLAMP_TO_EDGE,[Zh]:a.MIRRORED_REPEAT},Se={[Zn]:a.NEAREST,[XT]:a.NEAREST_MIPMAP_NEAREST,[Yu]:a.NEAREST_MIPMAP_LINEAR,[Ln]:a.LINEAR,[eh]:a.LINEAR_MIPMAP_NEAREST,[$r]:a.LINEAR_MIPMAP_LINEAR},F={[jT]:a.NEVER,[$T]:a.ALWAYS,[ZT]:a.LESS,[Jp]:a.LEQUAL,[KT]:a.EQUAL,[$p]:a.GEQUAL,[QT]:a.GREATER,[JT]:a.NOTEQUAL};function te(N,_){if(_.type===Qi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ln||_.magFilter===eh||_.magFilter===Yu||_.magFilter===$r||_.minFilter===Ln||_.minFilter===eh||_.minFilter===Yu||_.minFilter===$r)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,ye[_.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,ye[_.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,ye[_.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Se[_.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,F[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zn||_.minFilter!==Yu&&_.minFilter!==$r||_.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||s.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,l.getMaxAnisotropy())),s.get(_).__currentAnisotropy=_.anisotropy}}}function _e(N,_){let I=!1;N.__webglInit===void 0&&(N.__webglInit=!0,_.addEventListener("dispose",B));const J=_.source;let me=x.get(J);me===void 0&&(me={},x.set(J,me));const ne=ce(_);if(ne!==N.__cacheKey){me[ne]===void 0&&(me[ne]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,I=!0),me[ne].usedTimes++;const Ie=me[N.__cacheKey];Ie!==void 0&&(me[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(_)),N.__cacheKey=ne,N.__webglTexture=me[ne].texture}return I}function Re(N,_,I){return Math.floor(Math.floor(N/I)/_)}function ze(N,_,I,J){const ne=N.updateRanges;if(ne.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,I,J,_.data);else{ne.sort((we,Ce)=>we.start-Ce.start);let Ie=0;for(let we=1;we<ne.length;we++){const Ce=ne[Ie],je=ne[we],qe=Ce.start+Ce.count,Be=Re(je.start,_.width,4),St=Re(Ce.start,_.width,4);je.start<=qe+1&&Be===St&&Re(je.start+je.count-1,_.width,4)===Be?Ce.count=Math.max(Ce.count,je.start+je.count-Ce.start):(++Ie,ne[Ie]=je)}ne.length=Ie+1;const Ne=a.getParameter(a.UNPACK_ROW_LENGTH),$e=a.getParameter(a.UNPACK_SKIP_PIXELS),ct=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let we=0,Ce=ne.length;we<Ce;we++){const je=ne[we],qe=Math.floor(je.start/4),Be=Math.ceil(je.count/4),St=qe%_.width,Y=Math.floor(qe/_.width),He=Be,Ue=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,St),a.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,St,Y,He,Ue,I,J,_.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ne),a.pixelStorei(a.UNPACK_SKIP_PIXELS,$e),a.pixelStorei(a.UNPACK_SKIP_ROWS,ct)}}function ie(N,_,I){let J=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=a.TEXTURE_3D);const me=_e(N,_),ne=_.source;i.bindTexture(J,N.__webglTexture,a.TEXTURE0+I);const Ie=s.get(ne);if(ne.version!==Ie.__version||me===!0){i.activeTexture(a.TEXTURE0+I);const Ne=qt.getPrimaries(qt.workingColorSpace),$e=_.colorSpace===Er?null:qt.getPrimaries(_.colorSpace),ct=_.colorSpace===Er||Ne===$e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let we=T(_.image,!1,l.maxTextureSize);we=Vt(_,we);const Ce=u.convert(_.format,_.colorSpace),je=u.convert(_.type);let qe=L(_.internalFormat,Ce,je,_.colorSpace,_.isVideoTexture);te(J,_);let Be;const St=_.mipmaps,Y=_.isVideoTexture!==!0,He=Ie.__version===void 0||me===!0,Ue=ne.dataReady,Xe=z(_,we);if(_.isDepthTexture)qe=O(_.format===es,_.type),He&&(Y?i.texStorage2D(a.TEXTURE_2D,1,qe,we.width,we.height):i.texImage2D(a.TEXTURE_2D,0,qe,we.width,we.height,0,Ce,je,null));else if(_.isDataTexture)if(St.length>0){Y&&He&&i.texStorage2D(a.TEXTURE_2D,Xe,qe,St[0].width,St[0].height);for(let Te=0,Ee=St.length;Te<Ee;Te++)Be=St[Te],Y?Ue&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Be.width,Be.height,Ce,je,Be.data):i.texImage2D(a.TEXTURE_2D,Te,qe,Be.width,Be.height,0,Ce,je,Be.data);_.generateMipmaps=!1}else Y?(He&&i.texStorage2D(a.TEXTURE_2D,Xe,qe,we.width,we.height),Ue&&ze(_,we,Ce,je)):i.texImage2D(a.TEXTURE_2D,0,qe,we.width,we.height,0,Ce,je,we.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Y&&He&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Xe,qe,St[0].width,St[0].height,we.depth);for(let Te=0,Ee=St.length;Te<Ee;Te++)if(Be=St[Te],_.format!==Ii)if(Ce!==null)if(Y){if(Ue)if(_.layerUpdates.size>0){const Pe=q_(Be.width,Be.height,_.format,_.type);for(const gt of _.layerUpdates){const Wt=Be.data.subarray(gt*Pe/Be.data.BYTES_PER_ELEMENT,(gt+1)*Pe/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,gt,Be.width,Be.height,1,Ce,Wt)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Be.width,Be.height,we.depth,Ce,Be.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,qe,Be.width,Be.height,we.depth,0,Be.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ue&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Be.width,Be.height,we.depth,Ce,je,Be.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Te,qe,Be.width,Be.height,we.depth,0,Ce,je,Be.data)}else{Y&&He&&i.texStorage2D(a.TEXTURE_2D,Xe,qe,St[0].width,St[0].height);for(let Te=0,Ee=St.length;Te<Ee;Te++)Be=St[Te],_.format!==Ii?Ce!==null?Y?Ue&&i.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Be.width,Be.height,Ce,Be.data):i.compressedTexImage2D(a.TEXTURE_2D,Te,qe,Be.width,Be.height,0,Be.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ue&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Be.width,Be.height,Ce,je,Be.data):i.texImage2D(a.TEXTURE_2D,Te,qe,Be.width,Be.height,0,Ce,je,Be.data)}else if(_.isDataArrayTexture)if(Y){if(He&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Xe,qe,we.width,we.height,we.depth),Ue)if(_.layerUpdates.size>0){const Te=q_(we.width,we.height,_.format,_.type);for(const Ee of _.layerUpdates){const Pe=we.data.subarray(Ee*Te/we.data.BYTES_PER_ELEMENT,(Ee+1)*Te/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ee,we.width,we.height,1,Ce,je,Pe)}_.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ce,je,we.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,qe,we.width,we.height,we.depth,0,Ce,je,we.data);else if(_.isData3DTexture)Y?(He&&i.texStorage3D(a.TEXTURE_3D,Xe,qe,we.width,we.height,we.depth),Ue&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ce,je,we.data)):i.texImage3D(a.TEXTURE_3D,0,qe,we.width,we.height,we.depth,0,Ce,je,we.data);else if(_.isFramebufferTexture){if(He)if(Y)i.texStorage2D(a.TEXTURE_2D,Xe,qe,we.width,we.height);else{let Te=we.width,Ee=we.height;for(let Pe=0;Pe<Xe;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,qe,Te,Ee,0,Ce,je,null),Te>>=1,Ee>>=1}}else if(St.length>0){if(Y&&He){const Te=it(St[0]);i.texStorage2D(a.TEXTURE_2D,Xe,qe,Te.width,Te.height)}for(let Te=0,Ee=St.length;Te<Ee;Te++)Be=St[Te],Y?Ue&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ce,je,Be):i.texImage2D(a.TEXTURE_2D,Te,qe,Ce,je,Be);_.generateMipmaps=!1}else if(Y){if(He){const Te=it(we);i.texStorage2D(a.TEXTURE_2D,Xe,qe,Te.width,Te.height)}Ue&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,je,we)}else i.texImage2D(a.TEXTURE_2D,0,qe,Ce,je,we);E(_)&&S(J),Ie.__version=ne.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function ve(N,_,I){if(_.image.length!==6)return;const J=_e(N,_),me=_.source;i.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+I);const ne=s.get(me);if(me.version!==ne.__version||J===!0){i.activeTexture(a.TEXTURE0+I);const Ie=qt.getPrimaries(qt.workingColorSpace),Ne=_.colorSpace===Er?null:qt.getPrimaries(_.colorSpace),$e=_.colorSpace===Er||Ie===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ct=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,Ce=[];for(let Ee=0;Ee<6;Ee++)!ct&&!we?Ce[Ee]=T(_.image[Ee],!0,l.maxCubemapSize):Ce[Ee]=we?_.image[Ee].image:_.image[Ee],Ce[Ee]=Vt(_,Ce[Ee]);const je=Ce[0],qe=u.convert(_.format,_.colorSpace),Be=u.convert(_.type),St=L(_.internalFormat,qe,Be,_.colorSpace),Y=_.isVideoTexture!==!0,He=ne.__version===void 0||J===!0,Ue=me.dataReady;let Xe=z(_,je);te(a.TEXTURE_CUBE_MAP,_);let Te;if(ct){Y&&He&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,St,je.width,je.height);for(let Ee=0;Ee<6;Ee++){Te=Ce[Ee].mipmaps;for(let Pe=0;Pe<Te.length;Pe++){const gt=Te[Pe];_.format!==Ii?qe!==null?Y?Ue&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,gt.width,gt.height,qe,gt.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,St,gt.width,gt.height,0,gt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,0,0,gt.width,gt.height,qe,Be,gt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe,St,gt.width,gt.height,0,qe,Be,gt.data)}}}else{if(Te=_.mipmaps,Y&&He){Te.length>0&&Xe++;const Ee=it(Ce[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,St,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(we){Y?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ce[Ee].width,Ce[Ee].height,qe,Be,Ce[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,St,Ce[Ee].width,Ce[Ee].height,0,qe,Be,Ce[Ee].data);for(let Pe=0;Pe<Te.length;Pe++){const Wt=Te[Pe].image[Ee].image;Y?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,Wt.width,Wt.height,qe,Be,Wt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,St,Wt.width,Wt.height,0,qe,Be,Wt.data)}}else{Y?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,qe,Be,Ce[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,St,qe,Be,Ce[Ee]);for(let Pe=0;Pe<Te.length;Pe++){const gt=Te[Pe];Y?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,0,0,qe,Be,gt.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Pe+1,St,qe,Be,gt.image[Ee])}}}E(_)&&S(a.TEXTURE_CUBE_MAP),ne.__version=me.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function Le(N,_,I,J,me,ne){const Ie=u.convert(I.format,I.colorSpace),Ne=u.convert(I.type),$e=L(I.internalFormat,Ie,Ne,I.colorSpace),ct=s.get(_),we=s.get(I);if(we.__renderTarget=_,!ct.__hasExternalTextures){const Ce=Math.max(1,_.width>>ne),je=Math.max(1,_.height>>ne);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,ne,$e,Ce,je,_.depth,0,Ie,Ne,null):i.texImage2D(me,ne,$e,Ce,je,0,Ie,Ne,null)}i.bindFramebuffer(a.FRAMEBUFFER,N),$t(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,me,we.__webglTexture,0,X(_)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,J,me,we.__webglTexture,ne),i.bindFramebuffer(a.FRAMEBUFFER,null)}function tt(N,_,I){if(a.bindRenderbuffer(a.RENDERBUFFER,N),_.depthBuffer){const J=_.depthTexture,me=J&&J.isDepthTexture?J.type:null,ne=O(_.stencilBuffer,me),Ie=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;$t(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),ne,_.width,_.height):I?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),ne,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ne,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,N)}else{const J=_.textures;for(let me=0;me<J.length;me++){const ne=J[me],Ie=u.convert(ne.format,ne.colorSpace),Ne=u.convert(ne.type),$e=L(ne.internalFormat,Ie,Ne,ne.colorSpace);$t(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),$e,_.width,_.height):I?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),$e,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,$e,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Je(N,_,I){const J=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,N),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(_.depthTexture);if(me.__renderTarget=_,(!me.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(me.__webglInit===void 0&&(me.__webglInit=!0,_.depthTexture.addEventListener("dispose",B)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),te(a.TEXTURE_CUBE_MAP,_.depthTexture);const ct=u.convert(_.depthTexture.format),we=u.convert(_.depthTexture.type);let Ce;_.depthTexture.format===ka?Ce=a.DEPTH_COMPONENT24:_.depthTexture.format===es&&(Ce=a.DEPTH24_STENCIL8);for(let je=0;je<6;je++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ce,_.width,_.height,0,ct,we,null)}}else se(_.depthTexture,0);const ne=me.__webglTexture,Ie=X(_),Ne=J?a.TEXTURE_CUBE_MAP_POSITIVE_X+I:a.TEXTURE_2D,$e=_.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===ka)$t(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$e,Ne,ne,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,$e,Ne,ne,0);else if(_.depthTexture.format===es)$t(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$e,Ne,ne,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,$e,Ne,ne,0);else throw new Error("Unknown depthTexture format")}function Tt(N){const _=s.get(N),I=N.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==N.depthTexture){const J=N.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const me=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",me)};J.addEventListener("dispose",me),_.__depthDisposeCallback=me}_.__boundDepthTexture=J}if(N.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let J=0;J<6;J++)Je(_.__webglFramebuffer[J],N,J);else{const J=N.texture.mipmaps;J&&J.length>0?Je(_.__webglFramebuffer[0],N,0):Je(_.__webglFramebuffer,N,0)}else if(I){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=a.createRenderbuffer(),tt(_.__webglDepthbuffer[J],N,!1);else{const me=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer[J];a.bindRenderbuffer(a.RENDERBUFFER,ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ne)}}else{const J=N.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),tt(_.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ne)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function At(N,_,I){const J=s.get(N);_!==void 0&&Le(J.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),I!==void 0&&Tt(N)}function _t(N){const _=N.texture,I=s.get(N),J=s.get(_);N.addEventListener("dispose",A);const me=N.textures,ne=N.isWebGLCubeRenderTarget===!0,Ie=me.length>1;if(Ie||(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=_.version,f.memory.textures++),ne){I.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[Ne]=[];for(let $e=0;$e<_.mipmaps.length;$e++)I.__webglFramebuffer[Ne][$e]=a.createFramebuffer()}else I.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let Ne=0;Ne<_.mipmaps.length;Ne++)I.__webglFramebuffer[Ne]=a.createFramebuffer()}else I.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let Ne=0,$e=me.length;Ne<$e;Ne++){const ct=s.get(me[Ne]);ct.__webglTexture===void 0&&(ct.__webglTexture=a.createTexture(),f.memory.textures++)}if(N.samples>0&&$t(N)===!1){I.__webglMultisampledFramebuffer=a.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Ne=0;Ne<me.length;Ne++){const $e=me[Ne];I.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,I.__webglColorRenderbuffer[Ne]);const ct=u.convert($e.format,$e.colorSpace),we=u.convert($e.type),Ce=L($e.internalFormat,ct,we,$e.colorSpace,N.isXRRenderTarget===!0),je=X(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,je,Ce,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,I.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(I.__webglDepthRenderbuffer=a.createRenderbuffer(),tt(I.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ne){i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),te(a.TEXTURE_CUBE_MAP,_);for(let Ne=0;Ne<6;Ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let $e=0;$e<_.mipmaps.length;$e++)Le(I.__webglFramebuffer[Ne][$e],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e);else Le(I.__webglFramebuffer[Ne],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);E(_)&&S(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let Ne=0,$e=me.length;Ne<$e;Ne++){const ct=me[Ne],we=s.get(ct);let Ce=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ce,we.__webglTexture),te(Ce,ct),Le(I.__webglFramebuffer,N,ct,a.COLOR_ATTACHMENT0+Ne,Ce,0),E(ct)&&S(Ce)}i.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,J.__webglTexture),te(Ne,_),_.mipmaps&&_.mipmaps.length>0)for(let $e=0;$e<_.mipmaps.length;$e++)Le(I.__webglFramebuffer[$e],N,_,a.COLOR_ATTACHMENT0,Ne,$e);else Le(I.__webglFramebuffer,N,_,a.COLOR_ATTACHMENT0,Ne,0);E(_)&&S(Ne),i.unbindTexture()}N.depthBuffer&&Tt(N)}function Et(N){const _=N.textures;for(let I=0,J=_.length;I<J;I++){const me=_[I];if(E(me)){const ne=D(N),Ie=s.get(me).__webglTexture;i.bindTexture(ne,Ie),S(ne),i.unbindTexture()}}}const Gt=[],pt=[];function dn(N){if(N.samples>0){if($t(N)===!1){const _=N.textures,I=N.width,J=N.height;let me=a.COLOR_BUFFER_BIT;const ne=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=s.get(N),Ne=_.length>1;if(Ne)for(let ct=0;ct<_.length;ct++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const $e=N.texture.mipmaps;$e&&$e.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[ct]);const we=s.get(_[ct]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,I,J,0,0,I,J,me,a.NEAREST),m===!0&&(Gt.length=0,pt.length=0,Gt.push(a.COLOR_ATTACHMENT0+ct),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Gt.push(ne),pt.push(ne),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,pt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Gt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let ct=0;ct<_.length;ct++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[ct]);const we=s.get(_[ct]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,we,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const _=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function X(N){return Math.min(l.maxSamples,N.samples)}function $t(N){const _=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Nt(N){const _=f.render.frame;v.get(N)!==_&&(v.set(N,_),N.update())}function Vt(N,_){const I=N.colorSpace,J=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||I!==so&&I!==Er&&(qt.getTransfer(I)===rn?(J!==Ii||me!==zi)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",I)),_}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=ee,this.setTexture2D=se,this.setTexture2DArray=P,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=At,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function M2(a,e){function i(s,l=Er){let u;const f=qt.getTransfer(l);if(s===zi)return a.UNSIGNED_BYTE;if(s===Yp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===jp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===ay)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===ry)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===ny)return a.BYTE;if(s===iy)return a.SHORT;if(s===Sl)return a.UNSIGNED_SHORT;if(s===qp)return a.INT;if(s===ha)return a.UNSIGNED_INT;if(s===Qi)return a.FLOAT;if(s===pa)return a.HALF_FLOAT;if(s===sy)return a.ALPHA;if(s===oy)return a.RGB;if(s===Ii)return a.RGBA;if(s===ka)return a.DEPTH_COMPONENT;if(s===es)return a.DEPTH_STENCIL;if(s===ly)return a.RED;if(s===Zp)return a.RED_INTEGER;if(s===ro)return a.RG;if(s===Kp)return a.RG_INTEGER;if(s===Qp)return a.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===Ec)if(f===rn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Qh||s===Jh||s===$h)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Kh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ep||s===tp)return f===rn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===np)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===ip)return u.COMPRESSED_R11_EAC;if(s===ap)return u.COMPRESSED_SIGNED_R11_EAC;if(s===rp)return u.COMPRESSED_RG11_EAC;if(s===sp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===op||s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===op)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===up)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yp)return f===rn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sp||s===Mp||s===Ep)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Sp)return f===rn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ep)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bp||s===Tp||s===Ap||s===Rp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===bp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ap)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const E2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new My(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ma({vertexShader:E2,fragmentShader:b2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new ts(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A2 extends lo{constructor(e,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",E=new T2,S={},D=i.getContextAttributes();let L=null,O=null;const z=[],B=[],A=new Mt;let W=null;const R=new Zi;R.viewport=new Sn;const U=new Zi;U.viewport=new Sn;const H=[R,U],ee=new PA;let ae=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=z[ie];return ve===void 0&&(ve=new Eh,z[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=z[ie];return ve===void 0&&(ve=new Eh,z[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=z[ie];return ve===void 0&&(ve=new Eh,z[ie]=ve),ve.getHandSpace()};function se(ie){const ve=B.indexOf(ie.inputSource);if(ve===-1)return;const Le=z[ve];Le!==void 0&&(Le.update(ie.inputSource,ie.frame,p||f),Le.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",V);for(let ie=0;ie<z.length;ie++){const ve=B[ie];ve!==null&&(B[ie]=null,z[ie].disconnect(ve))}ae=null,ce=null,E.reset();for(const ie in S)delete S[ie];e.setRenderTarget(L),y=null,x=null,g=null,l=null,O=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(W),e.setSize(A.width,A.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,s.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,s.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",P),l.addEventListener("inputsourceschange",V),D.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(A),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,tt=null,Je=null;D.depth&&(Je=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Le=D.stencil?es:ka,tt=D.stencil?Ml:ha);const Tt={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(Tt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Ji(x.textureWidth,x.textureHeight,{format:Ii,type:zi,depthTexture:new bl(x.textureWidth,x.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Le),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ji(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function V(ie){for(let ve=0;ve<ie.removed.length;ve++){const Le=ie.removed[ve],tt=B.indexOf(Le);tt>=0&&(B[tt]=null,z[tt].disconnect(Le))}for(let ve=0;ve<ie.added.length;ve++){const Le=ie.added[ve];let tt=B.indexOf(Le);if(tt===-1){for(let Tt=0;Tt<z.length;Tt++)if(Tt>=B.length){B.push(Le),tt=Tt;break}else if(B[Tt]===null){B[Tt]=Le,tt=Tt;break}if(tt===-1)break}const Je=z[tt];Je&&Je.connect(Le)}}const Z=new pe,ye=new pe;function Se(ie,ve,Le){Z.setFromMatrixPosition(ve.matrixWorld),ye.setFromMatrixPosition(Le.matrixWorld);const tt=Z.distanceTo(ye),Je=ve.projectionMatrix.elements,Tt=Le.projectionMatrix.elements,At=Je[14]/(Je[10]-1),_t=Je[14]/(Je[10]+1),Et=(Je[9]+1)/Je[5],Gt=(Je[9]-1)/Je[5],pt=(Je[8]-1)/Je[0],dn=(Tt[8]+1)/Tt[0],X=At*pt,$t=At*dn,Nt=tt/(-pt+dn),Vt=Nt*-pt;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Vt),ie.translateZ(Nt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Je[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const it=At+Nt,N=_t+Nt,_=X-Vt,I=$t+(tt-Vt),J=Et*_t/N*it,me=Gt*_t/N*it;ie.projectionMatrix.makePerspective(_,I,J,me,it,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function F(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let ve=ie.near,Le=ie.far;E.texture!==null&&(E.depthNear>0&&(ve=E.depthNear),E.depthFar>0&&(Le=E.depthFar)),ee.near=U.near=R.near=ve,ee.far=U.far=R.far=Le,(ae!==ee.near||ce!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),ae=ee.near,ce=ee.far),ee.layers.mask=ie.layers.mask|6,R.layers.mask=ee.layers.mask&3,U.layers.mask=ee.layers.mask&5;const tt=ie.parent,Je=ee.cameras;F(ee,tt);for(let Tt=0;Tt<Je.length;Tt++)F(Je[Tt],tt);Je.length===2?Se(ee,R,U):ee.projectionMatrix.copy(R.projectionMatrix),te(ie,ee,tt)};function te(ie,ve,Le){Le===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(Le.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Cp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ie){m=ie,x!==null&&(x.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ee)},this.getCameraTexture=function(ie){return S[ie]};let _e=null;function Re(ie,ve){if(v=ve.getViewerPose(p||f),b=ve,v!==null){const Le=v.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let tt=!1;Le.length!==ee.cameras.length&&(ee.cameras.length=0,tt=!0);for(let _t=0;_t<Le.length;_t++){const Et=Le[_t];let Gt=null;if(y!==null)Gt=y.getViewport(Et);else{const dn=g.getViewSubImage(x,Et);Gt=dn.viewport,_t===0&&(e.setRenderTargetTextures(O,dn.colorTexture,dn.depthStencilTexture),e.setRenderTarget(O))}let pt=H[_t];pt===void 0&&(pt=new Zi,pt.layers.enable(_t),pt.viewport=new Sn,H[_t]=pt),pt.matrix.fromArray(Et.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Et.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),_t===0&&(ee.matrix.copy(pt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),tt===!0&&ee.cameras.push(pt)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const _t=g.getDepthInformation(Le[0]);_t&&_t.isValid&&_t.texture&&E.init(_t,l.renderState)}if(Je&&Je.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let _t=0;_t<Le.length;_t++){const Et=Le[_t].camera;if(Et){let Gt=S[Et];Gt||(Gt=new My,S[Et]=Gt);const pt=g.getCameraImage(Et);Gt.sourceTexture=pt}}}}for(let Le=0;Le<z.length;Le++){const tt=B[Le],Je=z[Le];tt!==null&&Je!==void 0&&Je.update(tt,ve,p||f)}_e&&_e(ie,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),b=null}const ze=new by;ze.setAnimationLoop(Re),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}}const jr=new Xa,R2=new Tn;function C2(a,e){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function s(E,S){S.color.getRGB(E.fogColor.value,vy(a)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function l(E,S,D,L,O){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(E,S):S.isMeshToonMaterial?(u(E,S),g(E,S)):S.isMeshPhongMaterial?(u(E,S),v(E,S)):S.isMeshStandardMaterial?(u(E,S),x(E,S),S.isMeshPhysicalMaterial&&y(E,S,O)):S.isMeshMatcapMaterial?(u(E,S),b(E,S)):S.isMeshDepthMaterial?u(E,S):S.isMeshDistanceMaterial?(u(E,S),T(E,S)):S.isMeshNormalMaterial?u(E,S):S.isLineBasicMaterial?(f(E,S),S.isLineDashedMaterial&&d(E,S)):S.isPointsMaterial?m(E,S,D,L):S.isSpriteMaterial?p(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===fi&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===fi&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const D=e.get(S),L=D.envMap,O=D.envMapRotation;L&&(E.envMap.value=L,jr.copy(O),jr.x*=-1,jr.y*=-1,jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),E.envMapRotation.value.setFromMatrix4(R2.makeRotationFromEuler(jr)),E.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function f(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function d(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function m(E,S,D,L){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*D,E.scale.value=L*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function p(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function v(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function g(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function x(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function y(E,S,D){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===fi&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=D.texture,E.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,S){S.matcap&&(E.matcap.value=S.matcap)}function T(E,S){const D=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(D.matrixWorld),E.nearDistance.value=D.shadow.camera.near,E.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function w2(a,e,i,s){let l={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const O=L.program;s.uniformBlockBinding(D,O)}function p(D,L){let O=l[D.id];O===void 0&&(b(D),O=v(D),l[D.id]=O,D.addEventListener("dispose",E));const z=L.program;s.updateUBOMapping(D,z);const B=e.render.frame;u[D.id]!==B&&(x(D),u[D.id]=B)}function v(D){const L=g();D.__bindingPointIndex=L;const O=a.createBuffer(),z=D.__size,B=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,O),a.bufferData(a.UNIFORM_BUFFER,z,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,O),O}function g(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=l[D.id],O=D.uniforms,z=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let B=0,A=O.length;B<A;B++){const W=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,U=W.length;R<U;R++){const H=W[R];if(y(H,B,R,z)===!0){const ee=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let se=0;se<ae.length;se++){const P=ae[se],V=T(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,a.bufferSubData(a.UNIFORM_BUFFER,ee+ce,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ce),ce+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ee,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(D,L,O,z){const B=D.value,A=L+"_"+O;if(z[A]===void 0)return typeof B=="number"||typeof B=="boolean"?z[A]=B:z[A]=B.clone(),!0;{const W=z[A];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return z[A]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function b(D){const L=D.uniforms;let O=0;const z=16;for(let A=0,W=L.length;A<W;A++){const R=Array.isArray(L[A])?L[A]:[L[A]];for(let U=0,H=R.length;U<H;U++){const ee=R[U],ae=Array.isArray(ee.value)?ee.value:[ee.value];for(let ce=0,se=ae.length;ce<se;ce++){const P=ae[ce],V=T(P),Z=O%z,ye=Z%V.boundary,Se=Z+ye;O+=ye,Se!==0&&z-Se<V.storage&&(O+=z-Se),ee.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=O,O+=V.storage}}}const B=O%z;return B>0&&(O+=z-B),D.__size=O,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",D),L}function E(D){const L=D.target;L.removeEventListener("dispose",E);const O=f.indexOf(L.__bindingPointIndex);f.splice(O,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function S(){for(const D in l)a.deleteBuffer(l[D]);f=[],l={},u={}}return{bind:m,update:p,dispose:S}}const D2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function U2(){return oa===null&&(oa=new yy(D2,16,16,ro,pa),oa.name="DFG_LUT",oa.minFilter=Ln,oa.magFilter=Ln,oa.wrapS=bi,oa.wrapT=bi,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class L2{constructor(e={}){const{canvas:i=eA(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=zi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const T=y,E=new Set([Qp,Kp,Zp]),S=new Set([zi,ha,Sl,Ml,Yp,jp]),D=new Uint32Array(4),L=new Int32Array(4);let O=null,z=null;const B=[],A=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1;this._outputColorSpace=Fi;let H=0,ee=0,ae=null,ce=-1,se=null;const P=new Sn,V=new Sn;let Z=null;const ye=new Jt(0);let Se=0,F=i.width,te=i.height,_e=1,Re=null,ze=null;const ie=new Sn(0,0,F,te),ve=new Sn(0,0,F,te);let Le=!1;const tt=new Sy;let Je=!1,Tt=!1;const At=new Tn,_t=new pe,Et=new Sn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function dn(){return ae===null?_e:1}let X=s;function $t(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wp}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Wt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),X===null){const j="webgl2";if(X=$t(j,C),X===null)throw $t(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Zt("WebGLRenderer: "+C.message),C}let Nt,Vt,it,N,_,I,J,me,ne,Ie,Ne,$e,ct,we,Ce,je,qe,Be,St,Y,He,Ue,Xe,Te;function Ee(){Nt=new UC(X),Nt.init(),Ue=new M2(X,Nt),Vt=new MC(X,Nt,e,Ue),it=new y2(X,Nt),Vt.reversedDepthBuffer&&x&&it.buffers.depth.setReversed(!0),N=new OC(X),_=new r2,I=new S2(X,Nt,it,_,Vt,Ue,N),J=new bC(R),me=new DC(R),ne=new IA(X),Xe=new yC(X,ne),Ie=new LC(X,ne,N,Xe),Ne=new FC(X,Ie,ne,N),St=new PC(X,Vt,I),je=new EC(_),$e=new a2(R,J,me,Nt,Vt,Xe,je),ct=new C2(R,_),we=new o2,Ce=new h2(Nt),Be=new xC(R,J,me,it,Ne,b,m),qe=new _2(R,Ne,Vt),Te=new w2(X,N,Vt,it),Y=new SC(X,Nt,N),He=new NC(X,Nt,N),N.programs=$e.programs,R.capabilities=Vt,R.extensions=Nt,R.properties=_,R.renderLists=we,R.shadowMap=qe,R.state=it,R.info=N}Ee(),T!==zi&&(W=new IC(T,i.width,i.height,l,u));const Pe=new A2(R,X);this.xr=Pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(F,te,!1))},this.getSize=function(C){return C.set(F,te)},this.setSize=function(C,j,fe=!0){if(Pe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,te=j,i.width=Math.floor(C*_e),i.height=Math.floor(j*_e),fe===!0&&(i.style.width=C+"px",i.style.height=j+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(F*_e,te*_e).floor()},this.setDrawingBufferSize=function(C,j,fe){F=C,te=j,_e=fe,i.width=Math.floor(C*fe),i.height=Math.floor(j*fe),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(T===zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,j,fe,ue){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,j,fe,ue),it.viewport(P.copy(ie).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,j,fe,ue){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,j,fe,ue),it.scissor(V.copy(ve).multiplyScalar(_e).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){it.setScissorTest(Le=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,fe=!0){let ue=0;if(C){let $=!1;if(ae!==null){const Fe=ae.texture.format;$=E.has(Fe)}if($){const Fe=ae.texture.type,Ke=S.has(Fe),Ge=Be.getClearColor(),De=Be.getClearAlpha(),ke=Ge.r,ut=Ge.g,et=Ge.b;Ke?(D[0]=ke,D[1]=ut,D[2]=et,D[3]=De,X.clearBufferuiv(X.COLOR,0,D)):(L[0]=ke,L[1]=ut,L[2]=et,L[3]=De,X.clearBufferiv(X.COLOR,0,L))}else ue|=X.COLOR_BUFFER_BIT}j&&(ue|=X.DEPTH_BUFFER_BIT),fe&&(ue|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Wt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Be.dispose(),we.dispose(),Ce.dispose(),_.dispose(),J.dispose(),me.dispose(),Ne.dispose(),Xe.dispose(),Te.dispose(),$e.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ae),Pe.removeEventListener("sessionend",Oe),nt.stop()};function gt(C){C.preventDefault(),b_("WebGLRenderer: Context Lost."),U=!0}function Wt(){b_("WebGLRenderer: Context Restored."),U=!1;const C=N.autoReset,j=qe.enabled,fe=qe.autoUpdate,ue=qe.needsUpdate,$=qe.type;Ee(),N.autoReset=C,qe.enabled=j,qe.autoUpdate=fe,qe.needsUpdate=ue,qe.type=$}function Dt(C){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const j=C.target;j.removeEventListener("dispose",Nn),hi(j)}function hi(C){rs(C),_.remove(C)}function rs(C){const j=_.get(C).programs;j!==void 0&&(j.forEach(function(fe){$e.releaseProgram(fe)}),C.isShaderMaterial&&$e.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,fe,ue,$,Fe){j===null&&(j=Gt);const Ke=$.isMesh&&$.matrixWorld.determinant()<0,Ge=hn(C,j,fe,ue,$);it.setMaterial(ue,Ke);let De=fe.index,ke=1;if(ue.wireframe===!0){if(De=Ie.getWireframeAttribute(fe),De===void 0)return;ke=2}const ut=fe.drawRange,et=fe.attributes.position;let Qe=ut.start*ke,It=(ut.start+ut.count)*ke;Fe!==null&&(Qe=Math.max(Qe,Fe.start*ke),It=Math.min(It,(Fe.start+Fe.count)*ke)),De!==null?(Qe=Math.max(Qe,0),It=Math.min(It,De.count)):et!=null&&(Qe=Math.max(Qe,0),It=Math.min(It,et.count));const cn=It-Qe;if(cn<0||cn===1/0)return;Xe.setup($,ue,Ge,fe,De);let sn,en=Y;if(De!==null&&(sn=ne.get(De),en=He,en.setIndex(sn)),$.isMesh)ue.wireframe===!0?(it.setLineWidth(ue.wireframeLinewidth*dn()),en.setMode(X.LINES)):en.setMode(X.TRIANGLES);else if($.isLine){let ft=ue.linewidth;ft===void 0&&(ft=1),it.setLineWidth(ft*dn()),$.isLineSegments?en.setMode(X.LINES):$.isLineLoop?en.setMode(X.LINE_LOOP):en.setMode(X.LINE_STRIP)}else $.isPoints?en.setMode(X.POINTS):$.isSprite&&en.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)El("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),en.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))en.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ft=$._multiDrawStarts,Kt=$._multiDrawCounts,xt=$._multiDrawCount,Hn=De?ne.get(De).bytesPerElement:1,ga=_.get(ue).currentProgram.getUniforms();for(let Gn=0;Gn<xt;Gn++)ga.setValue(X,"_gl_DrawID",Gn),en.render(ft[Gn]/Hn,Kt[Gn])}else if($.isInstancedMesh)en.renderInstances(Qe,cn,$.count);else if(fe.isInstancedBufferGeometry){const ft=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Kt=Math.min(fe.instanceCount,ft);en.renderInstances(Qe,cn,Kt)}else en.render(Qe,cn)};function G(C,j,fe){C.transparent===!0&&C.side===Ha&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,st(C,j,fe),C.side=Ar,C.needsUpdate=!0,st(C,j,fe),C.side=Ha):st(C,j,fe)}this.compile=function(C,j,fe=null){fe===null&&(fe=C),z=Ce.get(fe),z.init(j),A.push(z),fe.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),C!==fe&&C.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const ue=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Fe=$.material;if(Fe)if(Array.isArray(Fe))for(let Ke=0;Ke<Fe.length;Ke++){const Ge=Fe[Ke];G(Ge,fe,$),ue.add(Ge)}else G(Fe,fe,$),ue.add(Fe)}),z=A.pop(),ue},this.compileAsync=function(C,j,fe=null){const ue=this.compile(C,j,fe);return new Promise($=>{function Fe(){if(ue.forEach(function(Ke){_.get(Ke).currentProgram.isReady()&&ue.delete(Ke)}),ue.size===0){$(C);return}setTimeout(Fe,10)}Nt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let K=null;function he(C){K&&K(C)}function Ae(){nt.stop()}function Oe(){nt.start()}const nt=new by;nt.setAnimationLoop(he),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){K=C,Pe.setAnimationLoop(C),C===null?nt.stop():nt.start()},Pe.addEventListener("sessionstart",Ae),Pe.addEventListener("sessionend",Oe),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const fe=Pe.enabled===!0&&Pe.isPresenting===!0,ue=W!==null&&(ae===null||fe)&&W.begin(R,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(j),j=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,ae),z=Ce.get(C,A.length),z.init(j),A.push(z),At.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),tt.setFromProjectionMatrix(At,ua,j.reversedDepth),Tt=this.localClippingEnabled,Je=je.init(this.clippingPlanes,Tt),O=we.get(C,B.length),O.init(),B.push(O),Pe.enabled===!0&&Pe.isPresenting===!0){const Ke=R.xr.getDepthSensingMesh();Ke!==null&&We(Ke,j,-1/0,R.sortObjects)}We(C,j,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Re,ze),pt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,pt&&Be.addToRenderList(O,C),this.info.render.frame++,Je===!0&&je.beginShadows();const $=z.state.shadowsArray;if(qe.render($,C,j),Je===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&W.hasRenderPass())===!1){const Ke=O.opaque,Ge=O.transmissive;if(z.setupLights(),j.isArrayCamera){const De=j.cameras;if(Ge.length>0)for(let ke=0,ut=De.length;ke<ut;ke++){const et=De[ke];Ze(Ke,Ge,C,et)}pt&&Be.render(C);for(let ke=0,ut=De.length;ke<ut;ke++){const et=De[ke];Ve(O,C,et,et.viewport)}}else Ge.length>0&&Ze(Ke,Ge,C,j),pt&&Be.render(C),Ve(O,C,j)}ae!==null&&ee===0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),ue&&W.end(R),C.isScene===!0&&C.onAfterRender(R,C,j),Xe.resetDefaultState(),ce=-1,se=null,A.pop(),A.length>0?(z=A[A.length-1],Je===!0&&je.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function We(C,j,fe,ue){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){ue&&Et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(At);const Ke=Ne.update(C),Ge=C.material;Ge.visible&&O.push(C,Ke,Ge,fe,Et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const Ke=Ne.update(C),Ge=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Et.copy(C.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Et.copy(Ke.boundingSphere.center)),Et.applyMatrix4(C.matrixWorld).applyMatrix4(At)),Array.isArray(Ge)){const De=Ke.groups;for(let ke=0,ut=De.length;ke<ut;ke++){const et=De[ke],Qe=Ge[et.materialIndex];Qe&&Qe.visible&&O.push(C,Ke,Qe,fe,Et.z,et)}}else Ge.visible&&O.push(C,Ke,Ge,fe,Et.z,null)}}const Fe=C.children;for(let Ke=0,Ge=Fe.length;Ke<Ge;Ke++)We(Fe[Ke],j,fe,ue)}function Ve(C,j,fe,ue){const{opaque:$,transmissive:Fe,transparent:Ke}=C;z.setupLightsView(fe),Je===!0&&je.setGlobalState(R.clippingPlanes,fe),ue&&it.viewport(P.copy(ue)),$.length>0&&at($,j,fe),Fe.length>0&&at(Fe,j,fe),Ke.length>0&&at(Ke,j,fe),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ze(C,j,fe,ue){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ue.id]===void 0){const Qe=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ue.id]=new Ji(1,1,{generateMipmaps:!0,type:Qe?pa:zi,minFilter:$r,samples:Vt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const Fe=z.state.transmissionRenderTarget[ue.id],Ke=ue.viewport||P;Fe.setSize(Ke.z*R.transmissionResolutionScale,Ke.w*R.transmissionResolutionScale);const Ge=R.getRenderTarget(),De=R.getActiveCubeFace(),ke=R.getActiveMipmapLevel();R.setRenderTarget(Fe),R.getClearColor(ye),Se=R.getClearAlpha(),Se<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Be.render(fe);const ut=R.toneMapping;R.toneMapping=fa;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),z.setupLightsView(ue),Je===!0&&je.setGlobalState(R.clippingPlanes,ue),at(C,fe,ue),I.updateMultisampleRenderTarget(Fe),I.updateRenderTargetMipmap(Fe),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let It=0,cn=j.length;It<cn;It++){const sn=j[It],{object:en,geometry:ft,material:Kt,group:xt}=sn;if(Kt.side===Ha&&en.layers.test(ue.layers)){const Hn=Kt.side;Kt.side=fi,Kt.needsUpdate=!0,dt(en,fe,ue,ft,Kt,xt),Kt.side=Hn,Kt.needsUpdate=!0,Qe=!0}}Qe===!0&&(I.updateMultisampleRenderTarget(Fe),I.updateRenderTargetMipmap(Fe))}R.setRenderTarget(Ge,De,ke),R.setClearColor(ye,Se),et!==void 0&&(ue.viewport=et),R.toneMapping=ut}function at(C,j,fe){const ue=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Fe=C.length;$<Fe;$++){const Ke=C[$],{object:Ge,geometry:De,group:ke}=Ke;let ut=Ke.material;ut.allowOverride===!0&&ue!==null&&(ut=ue),Ge.layers.test(fe.layers)&&dt(Ge,j,fe,De,ut,ke)}}function dt(C,j,fe,ue,$,Fe){C.onBeforeRender(R,j,fe,ue,$,Fe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(R,j,fe,ue,C,Fe),$.transparent===!0&&$.side===Ha&&$.forceSinglePass===!1?($.side=fi,$.needsUpdate=!0,R.renderBufferDirect(fe,j,ue,$,C,Fe),$.side=Ar,$.needsUpdate=!0,R.renderBufferDirect(fe,j,ue,$,C,Fe),$.side=Ha):R.renderBufferDirect(fe,j,ue,$,C,Fe),C.onAfterRender(R,j,fe,ue,$,Fe)}function st(C,j,fe){j.isScene!==!0&&(j=Gt);const ue=_.get(C),$=z.state.lights,Fe=z.state.shadowsArray,Ke=$.state.version,Ge=$e.getParameters(C,$.state,Fe,j,fe),De=$e.getProgramCacheKey(Ge);let ke=ue.programs;ue.environment=C.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(C.isMeshStandardMaterial?me:J).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Nn),ke=new Map,ue.programs=ke);let ut=ke.get(De);if(ut!==void 0){if(ue.currentProgram===ut&&ue.lightsStateVersion===Ke)return Ut(C,Ge),ut}else Ge.uniforms=$e.getUniforms(C),C.onBeforeCompile(Ge,R),ut=$e.acquireProgram(Ge,De),ke.set(De,ut),ue.uniforms=Ge.uniforms;const et=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=je.uniform),Ut(C,Ge),ue.needsLights=vn(C),ue.lightsStateVersion=Ke,ue.needsLights&&(et.ambientLightColor.value=$.state.ambient,et.lightProbe.value=$.state.probe,et.directionalLights.value=$.state.directional,et.directionalLightShadows.value=$.state.directionalShadow,et.spotLights.value=$.state.spot,et.spotLightShadows.value=$.state.spotShadow,et.rectAreaLights.value=$.state.rectArea,et.ltc_1.value=$.state.rectAreaLTC1,et.ltc_2.value=$.state.rectAreaLTC2,et.pointLights.value=$.state.point,et.pointLightShadows.value=$.state.pointShadow,et.hemisphereLights.value=$.state.hemi,et.directionalShadowMap.value=$.state.directionalShadowMap,et.directionalShadowMatrix.value=$.state.directionalShadowMatrix,et.spotShadowMap.value=$.state.spotShadowMap,et.spotLightMatrix.value=$.state.spotLightMatrix,et.spotLightMap.value=$.state.spotLightMap,et.pointShadowMap.value=$.state.pointShadowMap,et.pointShadowMatrix.value=$.state.pointShadowMatrix),ue.currentProgram=ut,ue.uniformsList=null,ut}function Ot(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=bc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ut(C,j){const fe=_.get(C);fe.outputColorSpace=j.outputColorSpace,fe.batching=j.batching,fe.batchingColor=j.batchingColor,fe.instancing=j.instancing,fe.instancingColor=j.instancingColor,fe.instancingMorph=j.instancingMorph,fe.skinning=j.skinning,fe.morphTargets=j.morphTargets,fe.morphNormals=j.morphNormals,fe.morphColors=j.morphColors,fe.morphTargetsCount=j.morphTargetsCount,fe.numClippingPlanes=j.numClippingPlanes,fe.numIntersection=j.numClipIntersection,fe.vertexAlphas=j.vertexAlphas,fe.vertexTangents=j.vertexTangents,fe.toneMapping=j.toneMapping}function hn(C,j,fe,ue,$){j.isScene!==!0&&(j=Gt),I.resetTextureUnits();const Fe=j.fog,Ke=ue.isMeshStandardMaterial?j.environment:null,Ge=ae===null?R.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:so,De=(ue.isMeshStandardMaterial?me:J).get(ue.envMap||Ke),ke=ue.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ut=!!fe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!fe.morphAttributes.position,Qe=!!fe.morphAttributes.normal,It=!!fe.morphAttributes.color;let cn=fa;ue.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(cn=R.toneMapping);const sn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,en=sn!==void 0?sn.length:0,ft=_.get(ue),Kt=z.state.lights;if(Je===!0&&(Tt===!0||C!==se)){const kn=C===se&&ue.id===ce;je.setState(ue,C,kn)}let xt=!1;ue.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Kt.state.version||ft.outputColorSpace!==Ge||$.isBatchedMesh&&ft.batching===!1||!$.isBatchedMesh&&ft.batching===!0||$.isBatchedMesh&&ft.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ft.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ft.instancing===!1||!$.isInstancedMesh&&ft.instancing===!0||$.isSkinnedMesh&&ft.skinning===!1||!$.isSkinnedMesh&&ft.skinning===!0||$.isInstancedMesh&&ft.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ft.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ft.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ft.instancingMorph===!1&&$.morphTexture!==null||ft.envMap!==De||ue.fog===!0&&ft.fog!==Fe||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==je.numPlanes||ft.numIntersection!==je.numIntersection)||ft.vertexAlphas!==ke||ft.vertexTangents!==ut||ft.morphTargets!==et||ft.morphNormals!==Qe||ft.morphColors!==It||ft.toneMapping!==cn||ft.morphTargetsCount!==en)&&(xt=!0):(xt=!0,ft.__version=ue.version);let Hn=ft.currentProgram;xt===!0&&(Hn=st(ue,j,$));let ga=!1,Gn=!1,Ti=!1;const tn=Hn.getUniforms(),Vn=ft.uniforms;if(it.useProgram(Hn.program)&&(ga=!0,Gn=!0,Ti=!0),ue.id!==ce&&(ce=ue.id,Gn=!0),ga||se!==C){it.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),tn.setValue(X,"projectionMatrix",C.projectionMatrix),tn.setValue(X,"viewMatrix",C.matrixWorldInverse);const Xn=tn.map.cameraPosition;Xn!==void 0&&Xn.setValue(X,_t.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&tn.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&tn.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),se!==C&&(se=C,Gn=!0,Ti=!0)}if(ft.needsLights&&(Kt.state.directionalShadowMap.length>0&&tn.setValue(X,"directionalShadowMap",Kt.state.directionalShadowMap,I),Kt.state.spotShadowMap.length>0&&tn.setValue(X,"spotShadowMap",Kt.state.spotShadowMap,I),Kt.state.pointShadowMap.length>0&&tn.setValue(X,"pointShadowMap",Kt.state.pointShadowMap,I)),$.isSkinnedMesh){tn.setOptional(X,$,"bindMatrix"),tn.setOptional(X,$,"bindMatrixInverse");const kn=$.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),tn.setValue(X,"boneTexture",kn.boneTexture,I))}$.isBatchedMesh&&(tn.setOptional(X,$,"batchingTexture"),tn.setValue(X,"batchingTexture",$._matricesTexture,I),tn.setOptional(X,$,"batchingIdTexture"),tn.setValue(X,"batchingIdTexture",$._indirectTexture,I),tn.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&tn.setValue(X,"batchingColorTexture",$._colorsTexture,I));const On=fe.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&St.update($,fe,Hn),(Gn||ft.receiveShadow!==$.receiveShadow)&&(ft.receiveShadow=$.receiveShadow,tn.setValue(X,"receiveShadow",$.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Vn.envMap.value=De,Vn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=U2()),Gn&&(tn.setValue(X,"toneMappingExposure",R.toneMappingExposure),ft.needsLights&&gn(Vn,Ti),Fe&&ue.fog===!0&&ct.refreshFogUniforms(Vn,Fe),ct.refreshMaterialUniforms(Vn,ue,_e,te,z.state.transmissionRenderTarget[C.id]),bc.upload(X,Ot(ft),Vn,I)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(bc.upload(X,Ot(ft),Vn,I),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&tn.setValue(X,"center",$.center),tn.setValue(X,"modelViewMatrix",$.modelViewMatrix),tn.setValue(X,"normalMatrix",$.normalMatrix),tn.setValue(X,"modelMatrix",$.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const kn=ue.uniformsGroups;for(let Xn=0,ss=kn.length;Xn<ss;Xn++){const Vi=kn[Xn];Te.update(Vi,Hn),Te.bind(Vi,Hn)}}return Hn}function gn(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function vn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,j,fe){const ue=_.get(C);ue.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),_.get(C.texture).__webglTexture=j,_.get(C.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:fe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const fe=_.get(C);fe.__webglFramebuffer=j,fe.__useDefaultFramebuffer=j===void 0};const Pt=X.createFramebuffer();this.setRenderTarget=function(C,j=0,fe=0){ae=C,H=j,ee=fe;let ue=null,$=!1,Fe=!1;if(C){const Ge=_.get(C);if(Ge.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(X.FRAMEBUFFER,Ge.__webglFramebuffer),P.copy(C.viewport),V.copy(C.scissor),Z=C.scissorTest,it.viewport(P),it.scissor(V),it.setScissorTest(Z),ce=-1;return}else if(Ge.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Ge.__hasExternalTextures)I.rebindTextures(C,_.get(C.texture).__webglTexture,_.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ut=C.depthTexture;if(Ge.__boundDepthTexture!==ut){if(ut!==null&&_.has(ut)&&(C.width!==ut.image.width||C.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Fe=!0);const ke=_.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?ue=ke[j][fe]:ue=ke[j],$=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?ue=_.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?ue=ke[fe]:ue=ke,P.copy(C.viewport),V.copy(C.scissor),Z=C.scissorTest}else P.copy(ie).multiplyScalar(_e).floor(),V.copy(ve).multiplyScalar(_e).floor(),Z=Le;if(fe!==0&&(ue=Pt),it.bindFramebuffer(X.FRAMEBUFFER,ue)&&it.drawBuffers(C,ue),it.viewport(P),it.scissor(V),it.setScissorTest(Z),$){const Ge=_.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,fe)}else if(Fe){const Ge=j;for(let De=0;De<C.textures.length;De++){const ke=_.get(C.textures[De]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+De,ke.__webglTexture,fe,Ge)}}else if(C!==null&&fe!==0){const Ge=_.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ge.__webglTexture,fe)}ce=-1},this.readRenderTargetPixels=function(C,j,fe,ue,$,Fe,Ke,Ge=0){if(!(C&&C.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(De=De[Ke]),De){it.bindFramebuffer(X.FRAMEBUFFER,De);try{const ke=C.textures[Ge],ut=ke.format,et=ke.type;if(!Vt.textureFormatReadable(ut)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(et)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ue&&fe>=0&&fe<=C.height-$&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(j,fe,ue,$,Ue.convert(ut),Ue.convert(et),Fe))}finally{const ke=ae!==null?_.get(ae).__webglFramebuffer:null;it.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,j,fe,ue,$,Fe,Ke,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(De=De[Ke]),De)if(j>=0&&j<=C.width-ue&&fe>=0&&fe<=C.height-$){it.bindFramebuffer(X.FRAMEBUFFER,De);const ke=C.textures[Ge],ut=ke.format,et=ke.type;if(!Vt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(j,fe,ue,$,Ue.convert(ut),Ue.convert(et),0);const It=ae!==null?_.get(ae).__webglFramebuffer:null;it.bindFramebuffer(X.FRAMEBUFFER,It);const cn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tA(X,cn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.deleteBuffer(Qe),X.deleteSync(cn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,fe=0){const ue=Math.pow(2,-fe),$=Math.floor(C.image.width*ue),Fe=Math.floor(C.image.height*ue),Ke=j!==null?j.x:0,Ge=j!==null?j.y:0;I.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Ke,Ge,$,Fe),it.unbindTexture()};const An=X.createFramebuffer(),Kn=X.createFramebuffer();this.copyTextureToTexture=function(C,j,fe=null,ue=null,$=0,Fe=null){Fe===null&&($!==0?(El("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=$,$=0):Fe=0);let Ke,Ge,De,ke,ut,et,Qe,It,cn;const sn=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(fe!==null)Ke=fe.max.x-fe.min.x,Ge=fe.max.y-fe.min.y,De=fe.isBox3?fe.max.z-fe.min.z:1,ke=fe.min.x,ut=fe.min.y,et=fe.isBox3?fe.min.z:0;else{const On=Math.pow(2,-$);Ke=Math.floor(sn.width*On),Ge=Math.floor(sn.height*On),C.isDataArrayTexture?De=sn.depth:C.isData3DTexture?De=Math.floor(sn.depth*On):De=1,ke=0,ut=0,et=0}ue!==null?(Qe=ue.x,It=ue.y,cn=ue.z):(Qe=0,It=0,cn=0);const en=Ue.convert(j.format),ft=Ue.convert(j.type);let Kt;j.isData3DTexture?(I.setTexture3D(j,0),Kt=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),Kt=X.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),Kt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const xt=X.getParameter(X.UNPACK_ROW_LENGTH),Hn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ga=X.getParameter(X.UNPACK_SKIP_PIXELS),Gn=X.getParameter(X.UNPACK_SKIP_ROWS),Ti=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,sn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ke),X.pixelStorei(X.UNPACK_SKIP_ROWS,ut),X.pixelStorei(X.UNPACK_SKIP_IMAGES,et);const tn=C.isDataArrayTexture||C.isData3DTexture,Vn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const On=_.get(C),kn=_.get(j),Xn=_.get(On.__renderTarget),ss=_.get(kn.__renderTarget);it.bindFramebuffer(X.READ_FRAMEBUFFER,Xn.__webglFramebuffer),it.bindFramebuffer(X.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Vi=0;Vi<De;Vi++)tn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(C).__webglTexture,$,et+Vi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(j).__webglTexture,Fe,cn+Vi)),X.blitFramebuffer(ke,ut,Ke,Ge,Qe,It,Ke,Ge,X.DEPTH_BUFFER_BIT,X.NEAREST);it.bindFramebuffer(X.READ_FRAMEBUFFER,null),it.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||_.has(C)){const On=_.get(C),kn=_.get(j);it.bindFramebuffer(X.READ_FRAMEBUFFER,An),it.bindFramebuffer(X.DRAW_FRAMEBUFFER,Kn);for(let Xn=0;Xn<De;Xn++)tn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,On.__webglTexture,$,et+Xn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,On.__webglTexture,$),Vn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,kn.__webglTexture,Fe,cn+Xn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,kn.__webglTexture,Fe),$!==0?X.blitFramebuffer(ke,ut,Ke,Ge,Qe,It,Ke,Ge,X.COLOR_BUFFER_BIT,X.NEAREST):Vn?X.copyTexSubImage3D(Kt,Fe,Qe,It,cn+Xn,ke,ut,Ke,Ge):X.copyTexSubImage2D(Kt,Fe,Qe,It,ke,ut,Ke,Ge);it.bindFramebuffer(X.READ_FRAMEBUFFER,null),it.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Kt,Fe,Qe,It,cn,Ke,Ge,De,en,ft,sn.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Kt,Fe,Qe,It,cn,Ke,Ge,De,en,sn.data):X.texSubImage3D(Kt,Fe,Qe,It,cn,Ke,Ge,De,en,ft,sn):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,Qe,It,Ke,Ge,en,ft,sn.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,Qe,It,sn.width,sn.height,en,sn.data):X.texSubImage2D(X.TEXTURE_2D,Fe,Qe,It,Ke,Ge,en,ft,sn);X.pixelStorei(X.UNPACK_ROW_LENGTH,xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Hn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ga),X.pixelStorei(X.UNPACK_SKIP_ROWS,Gn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ti),Fe===0&&j.generateMipmaps&&X.generateMipmap(Kt),it.unbindTexture()},this.initRenderTarget=function(C){_.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),it.unbindTexture()},this.resetState=function(){H=0,ee=0,ae=null,it.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),i.unpackColorSpace=qt._getUnpackColorSpace()}}function N2({mouseForce:a=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:f=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:x="",autoDemo:y=!0,autoSpeed:b=.5,autoIntensity:T=2.2,takeoverDuration:E=.25,autoResumeDelay:S=1e3,autoRampDuration:D=.6}){const L=le.useRef(null),O=le.useRef(null),z=le.useRef(null),B=le.useRef(null),A=le.useRef(null),W=le.useRef(!0),R=le.useRef(null);return le.useEffect(()=>{if(!L.current)return;function U(N){let _;Array.isArray(N)&&N.length>0?N.length===1?_=[N[0],N[0]]:_=N:_=["#ffffff","#ffffff"];const I=_.length,J=new Uint8Array(I*4);for(let ne=0;ne<I;ne++){const Ie=new Jt(_[ne]);J[ne*4+0]=Math.round(Ie.r*255),J[ne*4+1]=Math.round(Ie.g*255),J[ne*4+2]=Math.round(Ie.b*255),J[ne*4+3]=255}const me=new yy(J,I,1,Ii);return me.magFilter=Ln,me.minFilter=Ln,me.wrapS=bi,me.wrapT=bi,me.generateMipmaps=!1,me.needsUpdate=!0,me}const H=U(v),ee=new Sn(0,0,0,0);class ae{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(_){this.container=_,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new L2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Jt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new FA,this.clock.start()}resize(){if(!this.container)return;const _=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(_.width)),this.height=Math.max(1,Math.floor(_.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ce=new ae;class se{constructor(){this.mouseMoved=!1,this.coords=new Mt,this.coords_old=new Mt,this.diff=new Mt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Mt,this.takeoverTo=new Mt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(_){this.container=_,this.docTarget=_.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(_,I){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:_>=J.left&&_<=J.right&&I>=J.top&&I<=J.bottom}updateHoverState(_,I){return this.isHoverInside=this.isPointInside(_,I),this.isHoverInside}setCoords(_,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const me=(_-J.left)/J.width,ne=(I-J.top)/J.height;this.coords.set(me*2-1,-(ne*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(_,I){this.coords.set(_,I),this.mouseMoved=!0}onDocumentMouseMove(_){if(this.updateHoverState(_.clientX,_.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const J=(_.clientX-I.left)/I.width,me=(_.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(me*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(_.clientX,_.clientY),this.hasUserControl=!0}}onDocumentTouchStart(_){if(_.touches.length!==1)return;const I=_.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(_){if(_.touches.length!==1)return;const I=_.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const _=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(_>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=_*_*(3-2*_);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const P=new se;class V{constructor(_,I,J){this.mouse=_,this.manager=I,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new Mt(0,0),this.target=new Mt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Mt,this.pickNewTarget()}pickNewTarget(){const _=Math.random;this.target.set((_()*2-1)*(1-this.margin),(_()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const _=performance.now();if(_-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=_,this.activationTime=_),!this.active)return;this.mouse.isAutoActive=!0;let J=(_-this.lastTime)/1e3;this.lastTime=_,J>.2&&(J=.016);const me=this._tmpDir.subVectors(this.target,this.current),ne=me.length();if(ne<.01){this.pickNewTarget();return}me.normalize();let Ie=1;if(this.rampDurationMs>0){const ct=Math.min(1,(_-this.activationTime)/this.rampDurationMs);Ie=ct*ct*(3-2*ct)}const Ne=this.speed*J*Ie,$e=Math.min(Ne,ne);this.current.addScaledVector(me,$e),this.mouse.setNormalized(this.current.x,this.current.y)}}const Z=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ye=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,F=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,_e=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Re=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ze=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ie=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ve=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Le{constructor(_){this.props=_||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new G_,this.camera=new wc,this.uniforms&&(this.material=new ml(this.props.material),this.geometry=new ts(2,2),this.plane=new Bi(this.geometry,this.material),this.scene.add(this.plane))}update(){ce.renderer.setRenderTarget(this.props.output||null),ce.renderer.render(this.scene,this.camera),ce.renderer.setRenderTarget(null)}}class tt extends Le{constructor(_){super({material:{vertexShader:Z,fragmentShader:F,uniforms:{boundarySpace:{value:_.cellScale},px:{value:_.cellScale},fboSize:{value:_.fboSize},velocity:{value:_.src.texture},dt:{value:_.dt},isBFECC:{value:!0}}},output:_.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const _=new na,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);_.setAttribute("position",new $i(I,3));const J=new ml({vertexShader:ye,fragmentShader:F,uniforms:this.uniforms});this.line=new UA(_,J),this.scene.add(this.line)}update({dt:_,isBounce:I,BFECC:J}){this.uniforms.dt.value=_,this.line.visible=I,this.uniforms.isBFECC.value=J,super.update()}}class Je extends Le{constructor(_){super({output:_.dst}),this.init(_)}init(_){super.init();const I=new ts(1,1),J=new ml({vertexShader:Se,fragmentShader:Re,blending:Fh,depthWrite:!1,uniforms:{px:{value:_.cellScale},force:{value:new Mt(0,0)},center:{value:new Mt(0,0)},scale:{value:new Mt(_.cursor_size,_.cursor_size)}}});this.mouse=new Bi(I,J),this.scene.add(this.mouse)}update(_){const I=P.diff.x/2*_.mouse_force,J=P.diff.y/2*_.mouse_force,me=_.cursor_size*_.cellScale.x,ne=_.cursor_size*_.cellScale.y,Ie=Math.min(Math.max(P.coords.x,-1+me+_.cellScale.x*2),1-me-_.cellScale.x*2),Ne=Math.min(Math.max(P.coords.y,-1+ne+_.cellScale.y*2),1-ne-_.cellScale.y*2),$e=this.mouse.material.uniforms;$e.force.value.set(I,J),$e.center.value.set(Ie,Ne),$e.scale.value.set(_.cursor_size,_.cursor_size),super.update()}}class Tt extends Le{constructor(_){super({material:{vertexShader:Z,fragmentShader:ve,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},velocity_new:{value:_.dst_.texture},v:{value:_.viscous},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({viscous:_,iterations:I,dt:J}){let me,ne;this.uniforms.v.value=_;for(let Ie=0;Ie<I;Ie++)Ie%2===0?(me=this.props.output0,ne=this.props.output1):(me=this.props.output1,ne=this.props.output0),this.uniforms.velocity_new.value=me.texture,this.props.output=ne,this.uniforms.dt.value=J,super.update();return ne}}class At extends Le{constructor(_){super({material:{vertexShader:Z,fragmentShader:_e,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_}){this.uniforms.velocity.value=_.texture,super.update()}}class _t extends Le{constructor(_){super({material:{vertexShader:Z,fragmentShader:ze,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.dst_.texture},divergence:{value:_.src.texture},px:{value:_.cellScale}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({iterations:_}){let I,J;for(let me=0;me<_;me++)me%2===0?(I=this.props.output0,J=this.props.output1):(I=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=J,super.update();return J}}class Et extends Le{constructor(_){super({material:{vertexShader:Z,fragmentShader:ie,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.src_p.texture},velocity:{value:_.src_v.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_,pressure:I}){this.uniforms.velocity.value=_.texture,this.uniforms.pressure.value=I.texture,super.update()}}class Gt{constructor(_){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,..._},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Mt,this.cellScale=new Mt,this.boundarySpace=new Mt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?pa:Qi}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Ln,magFilter:Ln,wrapS:bi,wrapT:bi};for(let J in this.fbos)this.fbos[J]=new Ji(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new tt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Je({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Tt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new _t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Et({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const _=Math.max(1,Math.round(this.options.resolution*ce.width)),I=Math.max(1,Math.round(this.options.resolution*ce.height)),J=1/_,me=1/I;this.cellScale.set(J,me),this.fboSize.set(_,I)}resize(){this.calcSize();for(let _ in this.fbos)this.fbos[_].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let _=this.fbos.vel_1;this.options.isViscous&&(_=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:_});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:_,pressure:I})}}class pt{constructor(){this.init()}init(){this.simulation=new Gt,this.scene=new G_,this.camera=new wc,this.output=new Bi(new ts(2,2),new ml({vertexShader:Z,fragmentShader:te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Mt},palette:{value:H},bgColor:{value:ee}}})),this.scene.add(this.output)}addScene(_){this.scene.add(_)}resize(){this.simulation.resize()}render(){ce.renderer.setRenderTarget(null),ce.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class dn{constructor(_){this.props=_,ce.init(_.$wrapper),P.init(_.$wrapper),P.autoIntensity=_.autoIntensity,P.takeoverDuration=_.takeoverDuration,this.lastUserInteraction=performance.now(),P.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new V(P,this,{enabled:_.autoDemo,speed:_.autoSpeed,resumeDelay:_.autoResumeDelay,rampDuration:_.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():W.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ce.renderer.domElement),this.output=new pt}resize(){ce.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),P.update(),ce.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),P.dispose(),ce.renderer){const _=ce.renderer.domElement;_&&_.parentNode&&_.parentNode.removeChild(_),ce.renderer.dispose()}}catch{}}}const X=L.current;X.style.position=X.style.position||"relative",X.style.overflow=X.style.overflow||"hidden";const $t=new dn({$wrapper:X,autoDemo:y,autoSpeed:b,autoIntensity:T,takeoverDuration:E,autoResumeDelay:S,autoRampDuration:D});O.current=$t,(()=>{if(!O.current)return;const N=O.current.output?.simulation;if(!N)return;const _=N.options.resolution;Object.assign(N.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==_&&N.resize()})(),$t.start();const Vt=new IntersectionObserver(N=>{const _=N[0],I=_.isIntersecting&&_.intersectionRatio>0;W.current=I,O.current&&(I&&!document.hidden?O.current.start():O.current.pause())},{threshold:[0,.01,.1]});Vt.observe(X),A.current=Vt;const it=new ResizeObserver(()=>{O.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{O.current&&O.current.resize()}))});return it.observe(X),z.current=it,()=>{if(B.current&&cancelAnimationFrame(B.current),z.current)try{z.current.disconnect()}catch{}if(A.current)try{A.current.disconnect()}catch{}O.current&&O.current.dispose(),O.current=null}},[d,e,f,p,i,u,l,a,m,s,v,y,b,T,E,S,D]),le.useEffect(()=>{const U=O.current;if(!U)return;const H=U.output?.simulation;if(!H)return;const ee=H.options.resolution;Object.assign(H.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:p}),U.autoDriver&&(U.autoDriver.enabled=y,U.autoDriver.speed=b,U.autoDriver.resumeDelay=S,U.autoDriver.rampDurationMs=D*1e3,U.autoDriver.mouse&&(U.autoDriver.mouse.autoIntensity=T,U.autoDriver.mouse.takeoverDuration=E)),m!==ee&&H.resize()},[a,e,i,s,l,u,f,d,m,p,y,b,T,E,S,D]),lt.jsx("div",{ref:L,className:`liquid-ether-container ${x||""}`,style:g})}function O2(){return lt.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh"},children:[lt.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"},children:lt.jsx(N2,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#5227FF",color1:"#FF9FFC",color2:"#B19EEF"})}),lt.jsx(yT,{}),lt.jsx(Fb,{})]})}function P2(){return lt.jsx(lt.Fragment,{children:lt.jsx("div",{className:"about",children:lt.jsxs("div",{className:"aboutCenter",children:[lt.jsxs("div",{className:"aboutImg",children:[lt.jsx("img",{src:"html.svg"}),lt.jsx("img",{src:"css.svg"}),lt.jsx("img",{src:"js.svg"}),lt.jsx("img",{src:"react.svg"}),lt.jsx("img",{src:"net.svg"})]}),lt.jsxs("div",{className:"aboutText",children:[lt.jsx("h1",{style:{paddingBottom:"10px"},children:": درباره ما"}),lt.jsx("p",{children:"تخصص ما ترکیب هنر طراحی با تکنولوژی روز است تا تجربه‌ای لذت‌بخش برای مشتریان شما رقم بزنیم. هر رستوران داستان خودش را دارد. ما با درک عمیق از نیازهای صنعت غذایی، راه‌حل‌های سفارشی‌ای ارائه می‌دهیم که نه‌تنها منوی شما را زیبا نشان می‌دهد، بلکه فرآیند سفارش‌گیری را ساده‌تر و سریع‌تر می‌کند. از منوهای تعاملی با قابلیت اسکن QR گرفته تا سیستم‌های سفارش آنلاین، هدف ما این است که تکنولوژی در خدمت طعم‌های شما باشد. بیایید با هم دیجیتال‌ترین بخش رستوران شما را بسازیم"})]})]})})})}function F2(){return lt.jsx(lt.Fragment,{children:lt.jsx("div",{})})}function z2(){const a=[{name:"کافه",img:"اسپرسوبار.webp",url:"Cofe",description:"طراحی و پیاده‌سازی منوی دیجیتال با قابلیت دسته‌بندی محصولات (نوشیدنی‌های گرم، سرد، دسر) و نمایش تصاویر با کیفیت"},{name:"رستوران",img:"استیک.webp",url:"Restaurant",description:"طراحی سایت ریسپانسیو با منوی غذای قابل بروزرسانی از طریق پنل مدیریت. منو شامل بخش‌های پیش‌غذا، اصلی، دسر و نوشیدنی با امکان فیلتر بر اساس رژیم غذایی"},{name:"فست فودی",img:"برگر.webp",url:"FastFood",description:"طراحی سایت ریسپانسیو با منوی غذای قابل بروزرسانی از طریق پنل مدیریت. منو شامل بخش‌های پیش‌غذا، اصلی، دسر و نوشیدنی با امکان فیلتر بر اساس رژیم غذایی"}];return lt.jsx("div",{className:"Header",children:lt.jsx("div",{className:"Categories",children:a.map((e,i)=>lt.jsx(Xp,{to:e.url,children:lt.jsxs("div",{className:"boxCategories",children:[lt.jsx("img",{src:e.img}),lt.jsxs("div",{children:[lt.jsx("h1",{children:e.name}),lt.jsx("p",{children:e.description})]})]})}))})})}function I2(){return lt.jsxs(lt.Fragment,{children:[lt.jsx(z2,{}),lt.jsx(P2,{}),lt.jsx(F2,{})]})}const B2=({sparkColor:a="#fff",sparkSize:e=10,sparkRadius:i=15,sparkCount:s=8,duration:l=400,easing:u="ease-out",extraScale:f=1,children:d})=>{const m=le.useRef(null),p=le.useRef([]),v=le.useRef(null);le.useEffect(()=>{const y=m.current;if(!y)return;const b=y.parentElement;if(!b)return;let T;const E=()=>{const{width:L,height:O}=b.getBoundingClientRect();(y.width!==L||y.height!==O)&&(y.width=L,y.height=O)},S=()=>{clearTimeout(T),T=setTimeout(E,100)},D=new ResizeObserver(S);return D.observe(b),E(),()=>{D.disconnect(),clearTimeout(T)}},[]);const g=le.useCallback(y=>{switch(u){case"linear":return y;case"ease-in":return y*y;case"ease-in-out":return y<.5?2*y*y:-1+(4-2*y)*y;default:return y*(2-y)}},[u]);le.useEffect(()=>{const y=m.current;if(!y)return;const b=y.getContext("2d");let T;const E=S=>{v.current||(v.current=S),b.clearRect(0,0,y.width,y.height),p.current=p.current.filter(D=>{const L=S-D.startTime;if(L>=l)return!1;const O=L/l,z=g(O),B=z*i*f,A=e*(1-z),W=D.x+B*Math.cos(D.angle),R=D.y+B*Math.sin(D.angle),U=D.x+(B+A)*Math.cos(D.angle),H=D.y+(B+A)*Math.sin(D.angle);return b.strokeStyle=a,b.lineWidth=2,b.beginPath(),b.moveTo(W,R),b.lineTo(U,H),b.stroke(),!0}),T=requestAnimationFrame(E)};return T=requestAnimationFrame(E),()=>{cancelAnimationFrame(T)}},[a,e,i,s,l,g,f]);const x=y=>{const b=m.current;if(!b)return;const T=b.getBoundingClientRect(),E=y.clientX-T.left,S=y.clientY-T.top,D=performance.now(),L=Array.from({length:s},(O,z)=>({x:E,y:S,angle:2*Math.PI*z/s,startTime:D}));p.current.push(...L)};return lt.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},onClick:x,children:[lt.jsx("canvas",{ref:m,style:{width:"100%",height:"100%",display:"block",userSelect:"none",position:"absolute",top:0,left:0,pointerEvents:"none"}}),d]})};function H2(){const{detailId:a}=pb();return lt.jsx("h1",{style:{textAlign:"center"},children:a})}function G2(){const a=oT([{path:"/",element:lt.jsx(O2,{}),children:[{path:"",element:lt.jsx(I2,{})},{path:":detailId",element:lt.jsx(H2,{})}]}]);return lt.jsx(lt.Fragment,{children:lt.jsx(B2,{children:lt.jsx(xT,{router:a})})})}WM.createRoot(document.getElementById("root")).render(lt.jsx(le.StrictMode,{children:lt.jsx(G2,{})}));
