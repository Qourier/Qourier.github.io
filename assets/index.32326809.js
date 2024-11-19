import{e as fe}from"./events.69a36a1e.js";import{a as _e}from"./index.cdfb8998.js";const Ee="PARSE_ERROR",Oe="INVALID_REQUEST",Re="METHOD_NOT_FOUND",Te="INVALID_PARAMS",le="INTERNAL_ERROR",k="SERVER_ERROR",Pe=[-32700,-32600,-32601,-32602,-32603],M={[Ee]:{code:-32700,message:"Parse error"},[Oe]:{code:-32600,message:"Invalid Request"},[Re]:{code:-32601,message:"Method not found"},[Te]:{code:-32602,message:"Invalid params"},[le]:{code:-32603,message:"Internal error"},[k]:{code:-32e3,message:"Server error"}},he=k;function Se(r){return Pe.includes(r)}function Q(r){return Object.keys(M).includes(r)?M[r]:M[he]}function Ae(r){const t=Object.values(M).find(s=>s.code===r);return t||M[he]}function je(r,t,s){return r.message.includes("getaddrinfo ENOTFOUND")||r.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${s} RPC url at ${t}`):r}var De={},de={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(r){var t,s,p,h,y,w,x,N,q,E,j,D,b,O,L,H,$,J,I,U,V,G,R;(function(g){var C=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof this=="object"?this:{};g(o(C,o(r.exports)));function o(a,c){return a!==C&&(typeof Object.create=="function"?Object.defineProperty(a,"__esModule",{value:!0}):a.__esModule=!0),function(e,n){return a[e]=c?c(e,n):n}}})(function(g){var C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var c in a)a.hasOwnProperty(c)&&(o[c]=a[c])};t=function(o,a){C(o,a);function c(){this.constructor=o}o.prototype=a===null?Object.create(a):(c.prototype=a.prototype,new c)},s=Object.assign||function(o){for(var a,c=1,e=arguments.length;c<e;c++){a=arguments[c];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n])}return o},p=function(o,a){var c={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&a.indexOf(e)<0&&(c[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(o);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(c[e[n]]=o[e[n]]);return c},h=function(o,a,c,e){var n=arguments.length,i=n<3?a:e===null?e=Object.getOwnPropertyDescriptor(a,c):e,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,a,c,e);else for(var l=o.length-1;l>=0;l--)(u=o[l])&&(i=(n<3?u(i):n>3?u(a,c,i):u(a,c))||i);return n>3&&i&&Object.defineProperty(a,c,i),i},y=function(o,a){return function(c,e){a(c,e,o)}},w=function(o,a){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,a)},x=function(o,a,c,e){function n(i){return i instanceof c?i:new c(function(u){u(i)})}return new(c||(c=Promise))(function(i,u){function l(m){try{f(e.next(m))}catch(T){u(T)}}function d(m){try{f(e.throw(m))}catch(T){u(T)}}function f(m){m.done?i(m.value):n(m.value).then(l,d)}f((e=e.apply(o,a||[])).next())})},N=function(o,a){var c={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(f){return function(m){return d([f,m])}}function d(f){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,n&&(i=f[0]&2?n.return:f[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,f[1])).done)return i;switch(n=0,i&&(f=[f[0]&2,i.value]),f[0]){case 0:case 1:i=f;break;case 4:return c.label++,{value:f[1],done:!1};case 5:c.label++,n=f[1],f=[0];continue;case 7:f=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(f[0]===6||f[0]===2)){c=0;continue}if(f[0]===3&&(!i||f[1]>i[0]&&f[1]<i[3])){c.label=f[1];break}if(f[0]===6&&c.label<i[1]){c.label=i[1],i=f;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(f);break}i[2]&&c.ops.pop(),c.trys.pop();continue}f=a.call(o,c)}catch(m){f=[6,m],n=0}finally{e=i=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},R=function(o,a,c,e){e===void 0&&(e=c),o[e]=a[c]},q=function(o,a){for(var c in o)c!=="default"&&!a.hasOwnProperty(c)&&(a[c]=o[c])},E=function(o){var a=typeof Symbol=="function"&&Symbol.iterator,c=a&&o[a],e=0;if(c)return c.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&e>=o.length&&(o=void 0),{value:o&&o[e++],done:!o}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},j=function(o,a){var c=typeof Symbol=="function"&&o[Symbol.iterator];if(!c)return o;var e=c.call(o),n,i=[],u;try{for(;(a===void 0||a-- >0)&&!(n=e.next()).done;)i.push(n.value)}catch(l){u={error:l}}finally{try{n&&!n.done&&(c=e.return)&&c.call(e)}finally{if(u)throw u.error}}return i},D=function(){for(var o=[],a=0;a<arguments.length;a++)o=o.concat(j(arguments[a]));return o},b=function(){for(var o=0,a=0,c=arguments.length;a<c;a++)o+=arguments[a].length;for(var e=Array(o),n=0,a=0;a<c;a++)for(var i=arguments[a],u=0,l=i.length;u<l;u++,n++)e[n]=i[u];return e},O=function(o){return this instanceof O?(this.v=o,this):new O(o)},L=function(o,a,c){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=c.apply(o,a||[]),n,i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(_){e[_]&&(n[_]=function(B){return new Promise(function(W,me){i.push([_,B,W,me])>1||l(_,B)})})}function l(_,B){try{d(e[_](B))}catch(W){T(i[0][3],W)}}function d(_){_.value instanceof O?Promise.resolve(_.value.v).then(f,m):T(i[0][2],_)}function f(_){l("next",_)}function m(_){l("throw",_)}function T(_,B){_(B),i.shift(),i.length&&l(i[0][0],i[0][1])}},H=function(o){var a,c;return a={},e("next"),e("throw",function(n){throw n}),e("return"),a[Symbol.iterator]=function(){return this},a;function e(n,i){a[n]=o[n]?function(u){return(c=!c)?{value:O(o[n](u)),done:n==="return"}:i?i(u):u}:i}},$=function(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=o[Symbol.asyncIterator],c;return a?a.call(o):(o=typeof E=="function"?E(o):o[Symbol.iterator](),c={},e("next"),e("throw"),e("return"),c[Symbol.asyncIterator]=function(){return this},c);function e(i){c[i]=o[i]&&function(u){return new Promise(function(l,d){u=o[i](u),n(l,d,u.done,u.value)})}}function n(i,u,l,d){Promise.resolve(d).then(function(f){i({value:f,done:l})},u)}},J=function(o,a){return Object.defineProperty?Object.defineProperty(o,"raw",{value:a}):o.raw=a,o},I=function(o){if(o&&o.__esModule)return o;var a={};if(o!=null)for(var c in o)Object.hasOwnProperty.call(o,c)&&(a[c]=o[c]);return a.default=o,a},U=function(o){return o&&o.__esModule?o:{default:o}},V=function(o,a){if(!a.has(o))throw new TypeError("attempted to get private field on non-instance");return a.get(o)},G=function(o,a,c){if(!a.has(o))throw new TypeError("attempted to set private field on non-instance");return a.set(o,c),c},g("__extends",t),g("__assign",s),g("__rest",p),g("__decorate",h),g("__param",y),g("__metadata",w),g("__awaiter",x),g("__generator",N),g("__exportStar",q),g("__createBinding",R),g("__values",E),g("__read",j),g("__spread",D),g("__spreadArrays",b),g("__await",O),g("__asyncGenerator",L),g("__asyncDelegator",H),g("__asyncValues",$),g("__makeTemplateObject",J),g("__importStar",I),g("__importDefault",U),g("__classPrivateFieldGet",V),g("__classPrivateFieldSet",G)})})(de);var P={},K;function Ce(){if(K)return P;K=1,Object.defineProperty(P,"__esModule",{value:!0}),P.isBrowserCryptoAvailable=P.getSubtleCrypto=P.getBrowerCrypto=void 0;function r(){return(globalThis==null?void 0:globalThis.crypto)||(globalThis==null?void 0:globalThis.msCrypto)||{}}P.getBrowerCrypto=r;function t(){const p=r();return p.subtle||p.webkitSubtle}P.getSubtleCrypto=t;function s(){return!!r()&&!!t()}return P.isBrowserCryptoAvailable=s,P}var S={},Y;function Be(){if(Y)return S;Y=1,Object.defineProperty(S,"__esModule",{value:!0}),S.isBrowser=S.isNode=S.isReactNative=void 0;function r(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}S.isReactNative=r;function t(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}S.isNode=t;function s(){return!r()&&!t()}return S.isBrowser=s,S}(function(r){Object.defineProperty(r,"__esModule",{value:!0});const t=de.exports;t.__exportStar(Ce(),r),t.__exportStar(Be(),r)})(De);function ye(r=3){const t=Date.now()*Math.pow(10,r),s=Math.floor(Math.random()*Math.pow(10,r));return t+s}function Fe(r=6){return BigInt(ye(r))}function xe(r,t,s){return{id:s||ye(),jsonrpc:"2.0",method:r,params:t}}function vt(r,t){return{id:r,jsonrpc:"2.0",result:t}}function Le(r,t,s){return{id:r,jsonrpc:"2.0",error:Ie(t,s)}}function Ie(r,t){return typeof r>"u"?Q(le):(typeof r=="string"&&(r=Object.assign(Object.assign({},Q(k)),{message:r})),typeof t<"u"&&(r.data=t),Se(r.code)&&(r=Ae(r.code)),r)}class pe{}class bt extends pe{constructor(t){super()}}class Ue extends pe{constructor(){super()}}class Me extends Ue{constructor(t){super()}}const Ne="^https?:",qe="^wss?:";function He(r){const t=r.match(new RegExp(/^\w+:/,"gi"));if(!(!t||!t.length))return t[0]}function ge(r,t){const s=He(r);return typeof s>"u"?!1:new RegExp(t).test(s)}function Z(r){return ge(r,Ne)}function wt(r){return ge(r,qe)}function mt(r){return new RegExp("wss?://localhost(:d{2,5})?").test(r)}function ve(r){return typeof r=="object"&&"id"in r&&"jsonrpc"in r&&r.jsonrpc==="2.0"}function _t(r){return ve(r)&&"method"in r}function $e(r){return ve(r)&&(Je(r)||be(r))}function Je(r){return"result"in r}function be(r){return"error"in r}class Et extends Me{constructor(t){super(t),this.events=new fe.exports.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,s){this.events.on(t,s)}once(t,s){this.events.once(t,s)}off(t,s){this.events.off(t,s)}removeListener(t,s){this.events.removeListener(t,s)}async request(t,s){return this.requestStrict(xe(t.method,t.params||[],t.id||Fe().toString()),s)}async requestStrict(t,s){return new Promise(async(p,h)=>{if(!this.connection.connected)try{await this.open()}catch(y){h(y)}this.events.on(`${t.id}`,y=>{be(y)?h(y.error):p(y.result)});try{await this.connection.send(t,s)}catch(y){h(y)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),$e(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var z={exports:{}};(function(r,t){var s=function(){function h(){this.fetch=!1,this.DOMException=globalThis.DOMException}return h.prototype=globalThis,new h}();(function(h){(function(y){var w={searchParams:"URLSearchParams"in h,iterable:"Symbol"in h&&"iterator"in Symbol,blob:"FileReader"in h&&"Blob"in h&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in h,arrayBuffer:"ArrayBuffer"in h};function x(e){return e&&DataView.prototype.isPrototypeOf(e)}if(w.arrayBuffer)var N=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],q=ArrayBuffer.isView||function(e){return e&&N.indexOf(Object.prototype.toString.call(e))>-1};function E(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function j(e){return typeof e!="string"&&(e=String(e)),e}function D(e){var n={next:function(){var i=e.shift();return{done:i===void 0,value:i}}};return w.iterable&&(n[Symbol.iterator]=function(){return n}),n}function b(e){this.map={},e instanceof b?e.forEach(function(n,i){this.append(i,n)},this):Array.isArray(e)?e.forEach(function(n){this.append(n[0],n[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(n){this.append(n,e[n])},this)}b.prototype.append=function(e,n){e=E(e),n=j(n);var i=this.map[e];this.map[e]=i?i+", "+n:n},b.prototype.delete=function(e){delete this.map[E(e)]},b.prototype.get=function(e){return e=E(e),this.has(e)?this.map[e]:null},b.prototype.has=function(e){return this.map.hasOwnProperty(E(e))},b.prototype.set=function(e,n){this.map[E(e)]=j(n)},b.prototype.forEach=function(e,n){for(var i in this.map)this.map.hasOwnProperty(i)&&e.call(n,this.map[i],i,this)},b.prototype.keys=function(){var e=[];return this.forEach(function(n,i){e.push(i)}),D(e)},b.prototype.values=function(){var e=[];return this.forEach(function(n){e.push(n)}),D(e)},b.prototype.entries=function(){var e=[];return this.forEach(function(n,i){e.push([i,n])}),D(e)},w.iterable&&(b.prototype[Symbol.iterator]=b.prototype.entries);function O(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function L(e){return new Promise(function(n,i){e.onload=function(){n(e.result)},e.onerror=function(){i(e.error)}})}function H(e){var n=new FileReader,i=L(n);return n.readAsArrayBuffer(e),i}function $(e){var n=new FileReader,i=L(n);return n.readAsText(e),i}function J(e){for(var n=new Uint8Array(e),i=new Array(n.length),u=0;u<n.length;u++)i[u]=String.fromCharCode(n[u]);return i.join("")}function I(e){if(e.slice)return e.slice(0);var n=new Uint8Array(e.byteLength);return n.set(new Uint8Array(e)),n.buffer}function U(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:w.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:w.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:w.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():w.arrayBuffer&&w.blob&&x(e)?(this._bodyArrayBuffer=I(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):w.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||q(e))?this._bodyArrayBuffer=I(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):w.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},w.blob&&(this.blob=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?O(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(H)}),this.text=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return $(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(J(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},w.formData&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}var V=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function G(e){var n=e.toUpperCase();return V.indexOf(n)>-1?n:e}function R(e,n){n=n||{};var i=n.body;if(e instanceof R){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new b(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!i&&e._bodyInit!=null&&(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=n.credentials||this.credentials||"same-origin",(n.headers||!this.headers)&&(this.headers=new b(n.headers)),this.method=G(n.method||this.method||"GET"),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}R.prototype.clone=function(){return new R(this,{body:this._bodyInit})};function g(e){var n=new FormData;return e.trim().split("&").forEach(function(i){if(i){var u=i.split("="),l=u.shift().replace(/\+/g," "),d=u.join("=").replace(/\+/g," ");n.append(decodeURIComponent(l),decodeURIComponent(d))}}),n}function C(e){var n=new b,i=e.replace(/\r?\n[\t ]+/g," ");return i.split(/\r?\n/).forEach(function(u){var l=u.split(":"),d=l.shift().trim();if(d){var f=l.join(":").trim();n.append(d,f)}}),n}U.call(R.prototype);function o(e,n){n||(n={}),this.type="default",this.status=n.status===void 0?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new b(n.headers),this.url=n.url||"",this._initBody(e)}U.call(o.prototype),o.prototype.clone=function(){return new o(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},o.error=function(){var e=new o(null,{status:0,statusText:""});return e.type="error",e};var a=[301,302,303,307,308];o.redirect=function(e,n){if(a.indexOf(n)===-1)throw new RangeError("Invalid status code");return new o(null,{status:n,headers:{location:e}})},y.DOMException=h.DOMException;try{new y.DOMException}catch{y.DOMException=function(n,i){this.message=n,this.name=i;var u=Error(n);this.stack=u.stack},y.DOMException.prototype=Object.create(Error.prototype),y.DOMException.prototype.constructor=y.DOMException}function c(e,n){return new Promise(function(i,u){var l=new R(e,n);if(l.signal&&l.signal.aborted)return u(new y.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function f(){d.abort()}d.onload=function(){var m={status:d.status,statusText:d.statusText,headers:C(d.getAllResponseHeaders()||"")};m.url="responseURL"in d?d.responseURL:m.headers.get("X-Request-URL");var T="response"in d?d.response:d.responseText;i(new o(T,m))},d.onerror=function(){u(new TypeError("Network request failed"))},d.ontimeout=function(){u(new TypeError("Network request failed"))},d.onabort=function(){u(new y.DOMException("Aborted","AbortError"))},d.open(l.method,l.url,!0),l.credentials==="include"?d.withCredentials=!0:l.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&w.blob&&(d.responseType="blob"),l.headers.forEach(function(m,T){d.setRequestHeader(T,m)}),l.signal&&(l.signal.addEventListener("abort",f),d.onreadystatechange=function(){d.readyState===4&&l.signal.removeEventListener("abort",f)}),d.send(typeof l._bodyInit>"u"?null:l._bodyInit)})}return c.polyfill=!0,h.fetch||(h.fetch=c,h.Headers=b,h.Request=R,h.Response=o),y.Headers=b,y.Request=R,y.Response=o,y.fetch=c,Object.defineProperty(y,"__esModule",{value:!0}),y})({})})(s),s.fetch.ponyfill=!0,delete s.fetch.polyfill;var p=s;t=p.fetch,t.default=p.fetch,t.fetch=p.fetch,t.Headers=p.Headers,t.Request=p.Request,t.Response=p.Response,r.exports=t})(z,z.exports);const ee=_e(z.exports),Ve=r=>JSON.stringify(r,(t,s)=>typeof s=="bigint"?s.toString()+"n":s),Ge=r=>{const t=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,s=r.replace(t,'$1"$2n"$3');return JSON.parse(s,(p,h)=>typeof h=="string"&&h.match(/^\d+n$/)?BigInt(h.substring(0,h.length-1)):h)};function We(r){if(typeof r!="string")throw new Error(`Cannot safe json parse value of type ${typeof r}`);try{return Ge(r)}catch{return r}}function te(r){return typeof r=="string"?r:Ve(r)||""}var ze=Object.defineProperty,Xe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,ne=(r,t,s)=>t in r?ze(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,oe=(r,t)=>{for(var s in t||(t={}))Qe.call(t,s)&&ne(r,s,t[s]);if(re)for(var s of re(t))Ke.call(t,s)&&ne(r,s,t[s]);return r},ie=(r,t)=>Xe(r,ke(t));const Ye={Accept:"application/json","Content-Type":"application/json"},Ze="POST",se={headers:Ye,method:Ze},ae=10;class Ot{constructor(t,s=!1){if(this.url=t,this.disableProviderPing=s,this.events=new fe.exports.EventEmitter,this.isAvailable=!1,this.registering=!1,!Z(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=s}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,s){this.events.on(t,s)}once(t,s){this.events.once(t,s)}off(t,s){this.events.off(t,s)}removeListener(t,s){this.events.removeListener(t,s)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const s=te(t),p=await(await ee(this.url,ie(oe({},se),{body:s}))).json();this.onPayload({data:p})}catch(s){this.onError(t.id,s)}}async register(t=this.url){if(!Z(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const s=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=s||this.events.listenerCount("open")>=s)&&this.events.setMaxListeners(s+1),new Promise((p,h)=>{this.events.once("register_error",y=>{this.resetMaxListeners(),h(y)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return h(new Error("HTTP connection is missing or invalid"));p()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const s=te({id:1,jsonrpc:"2.0",method:"test",params:[]});await ee(t,ie(oe({},se),{body:s}))}this.onOpen()}catch(s){const p=this.parseError(s);throw this.events.emit("register_error",p),this.onClose(),p}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const s=typeof t.data=="string"?We(t.data):t.data;this.events.emit("payload",s)}onError(t,s){const p=this.parseError(s),h=p.message||p.toString(),y=Le(t,h);this.events.emit("payload",y)}parseError(t,s=this.url){return je(t,s,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>ae&&this.events.setMaxListeners(ae)}}var v={};Object.defineProperty(v,"__esModule",{value:!0});v.getLocalStorage=v.getLocalStorageOrThrow=v.getCrypto=v.getCryptoOrThrow=ct=v.getLocation=v.getLocationOrThrow=it=v.getNavigator=v.getNavigatorOrThrow=rt=v.getDocument=v.getDocumentOrThrow=v.getFromWindowOrThrow=v.getFromWindow=void 0;function A(r){let t;return typeof window<"u"&&typeof window[r]<"u"&&(t=window[r]),t}v.getFromWindow=A;function F(r){const t=A(r);if(!t)throw new Error(`${r} is not defined in Window`);return t}v.getFromWindowOrThrow=F;function et(){return F("document")}v.getDocumentOrThrow=et;function tt(){return A("document")}var rt=v.getDocument=tt;function nt(){return F("navigator")}v.getNavigatorOrThrow=nt;function ot(){return A("navigator")}var it=v.getNavigator=ot;function st(){return F("location")}v.getLocationOrThrow=st;function at(){return A("location")}var ct=v.getLocation=at;function ut(){return F("crypto")}v.getCryptoOrThrow=ut;function ft(){return A("crypto")}v.getCrypto=ft;function lt(){return F("localStorage")}v.getLocalStorageOrThrow=lt;function ht(){return A("localStorage")}v.getLocalStorage=ht;var Rt=r=>encodeURIComponent(r).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),we="%[a-f0-9]{2}",ce=new RegExp("("+we+")|([^%]+?)","gi"),ue=new RegExp("("+we+")+","gi");function X(r,t){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;t=t||1;var s=r.slice(0,t),p=r.slice(t);return Array.prototype.concat.call([],X(s),X(p))}function dt(r){try{return decodeURIComponent(r)}catch{for(var t=r.match(ce)||[],s=1;s<t.length;s++)r=X(t,s).join(""),t=r.match(ce)||[];return r}}function yt(r){for(var t={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},s=ue.exec(r);s;){try{t[s[0]]=decodeURIComponent(s[0])}catch{var p=dt(s[0]);p!==s[0]&&(t[s[0]]=p)}s=ue.exec(r)}t["%C2"]="\uFFFD";for(var h=Object.keys(t),y=0;y<h.length;y++){var w=h[y];r=r.replace(new RegExp(w,"g"),t[w])}return r}var Tt=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch{return yt(r)}},Pt=(r,t)=>{if(!(typeof r=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[r];const s=r.indexOf(t);return s===-1?[r]:[r.slice(0,s),r.slice(s+t.length)]};export{Rt as a,De as b,v as c,Tt as d,Et as e,Le as f,Ot as g,te as h,We as i,it as j,rt as k,ct as l,wt as m,mt as n,bt as o,ye as p,je as q,Fe as r,Pt as s,_t as t,$e as u,vt as v,be as w,xe as x,Je as y};