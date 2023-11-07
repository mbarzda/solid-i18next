import{c as O,t as E,i as k}from"./index-4ac2505d.js";import{i as te,L as re,E as U,T as ne,a as oe}from"./index-701901db.js";function ve(i,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const a=Object.getOwnPropertyDescriptor(n,s);a&&Object.defineProperty(i,s,a.get?a:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}function F(i){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(i)}var ie=[],we=ie.forEach,_e=ie.slice;function X(i){return we.call(_e.call(arguments,1),function(t){if(t)for(var r in t)i[r]===void 0&&(i[r]=t[r])}),i}function se(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":F(XMLHttpRequest))==="object"}function Te(i){return!!i&&typeof i.then=="function"}function Oe(i){return Te(i)?i:Promise.resolve(i)}var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pe(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ae(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var $={exports:{}},L={exports:{}},J;function Ee(){return J||(J=1,function(i,t){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof j<"u"&&j,n=function(){function a(){this.fetch=!1,this.DOMException=r.DOMException}return a.prototype=r,new a}();(function(a){(function(f){var u=typeof a<"u"&&a||typeof self<"u"&&self||typeof u<"u"&&u,c={searchParams:"URLSearchParams"in u,iterable:"Symbol"in u&&"iterator"in Symbol,blob:"FileReader"in u&&"Blob"in u&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in u,arrayBuffer:"ArrayBuffer"in u};function w(e){return e&&DataView.prototype.isPrototypeOf(e)}if(c.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};function g(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function v(e){return typeof e!="string"&&(e=String(e)),e}function q(e){var o={next:function(){var l=e.shift();return{done:l===void 0,value:l}}};return c.iterable&&(o[Symbol.iterator]=function(){return o}),o}function y(e){this.map={},e instanceof y?e.forEach(function(o,l){this.append(l,o)},this):Array.isArray(e)?e.forEach(function(o){this.append(o[0],o[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(o){this.append(o,e[o])},this)}y.prototype.append=function(e,o){e=g(e),o=v(o);var l=this.map[e];this.map[e]=l?l+", "+o:o},y.prototype.delete=function(e){delete this.map[g(e)]},y.prototype.get=function(e){return e=g(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(g(e))},y.prototype.set=function(e,o){this.map[g(e)]=v(o)},y.prototype.forEach=function(e,o){for(var l in this.map)this.map.hasOwnProperty(l)&&e.call(o,this.map[l],l,this)},y.prototype.keys=function(){var e=[];return this.forEach(function(o,l){e.push(l)}),q(e)},y.prototype.values=function(){var e=[];return this.forEach(function(o){e.push(o)}),q(e)},y.prototype.entries=function(){var e=[];return this.forEach(function(o,l){e.push([l,o])}),q(e)},c.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function R(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function V(e){return new Promise(function(o,l){e.onload=function(){o(e.result)},e.onerror=function(){l(e.error)}})}function le(e){var o=new FileReader,l=V(o);return o.readAsArrayBuffer(e),l}function ce(e){var o=new FileReader,l=V(o);return o.readAsText(e),l}function de(e){for(var o=new Uint8Array(e),l=new Array(o.length),p=0;p<o.length;p++)l[p]=String.fromCharCode(o[p]);return l.join("")}function z(e){if(e.slice)return e.slice(0);var o=new Uint8Array(e.byteLength);return o.set(new Uint8Array(e)),o.buffer}function W(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:c.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:c.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c.arrayBuffer&&c.blob&&w(e)?(this._bodyArrayBuffer=z(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||h(e))?this._bodyArrayBuffer=z(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var e=R(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=R(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(le)}),this.text=function(){var e=R(this);if(e)return e;if(this._bodyBlob)return ce(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(de(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(ye)}),this.json=function(){return this.text().then(JSON.parse)},this}var he=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function pe(e){var o=e.toUpperCase();return he.indexOf(o)>-1?o:e}function A(e,o){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');o=o||{};var l=o.body;if(e instanceof A){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,o.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!l&&e._bodyInit!=null&&(l=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=o.credentials||this.credentials||"same-origin",(o.headers||!this.headers)&&(this.headers=new y(o.headers)),this.method=pe(o.method||this.method||"GET"),this.mode=o.mode||this.mode||null,this.signal=o.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&l)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(l),(this.method==="GET"||this.method==="HEAD")&&(o.cache==="no-store"||o.cache==="no-cache")){var p=/([?&])_=[^&]*/;if(p.test(this.url))this.url=this.url.replace(p,"$1_="+new Date().getTime());else{var m=/\?/;this.url+=(m.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})};function ye(e){var o=new FormData;return e.trim().split("&").forEach(function(l){if(l){var p=l.split("="),m=p.shift().replace(/\+/g," "),d=p.join("=").replace(/\+/g," ");o.append(decodeURIComponent(m),decodeURIComponent(d))}}),o}function be(e){var o=new y,l=e.replace(/\r?\n[\t ]+/g," ");return l.split("\r").map(function(p){return p.indexOf(`
`)===0?p.substr(1,p.length):p}).forEach(function(p){var m=p.split(":"),d=m.shift().trim();if(d){var D=m.join(":").trim();o.append(d,D)}}),o}W.call(A.prototype);function T(e,o){if(!(this instanceof T))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');o||(o={}),this.type="default",this.status=o.status===void 0?200:o.status,this.ok=this.status>=200&&this.status<300,this.statusText=o.statusText===void 0?"":""+o.statusText,this.headers=new y(o.headers),this.url=o.url||"",this._initBody(e)}W.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},T.error=function(){var e=new T(null,{status:0,statusText:""});return e.type="error",e};var me=[301,302,303,307,308];T.redirect=function(e,o){if(me.indexOf(o)===-1)throw new RangeError("Invalid status code");return new T(null,{status:o,headers:{location:e}})},f.DOMException=u.DOMException;try{new f.DOMException}catch{f.DOMException=function(o,l){this.message=o,this.name=l;var p=Error(o);this.stack=p.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function I(e,o){return new Promise(function(l,p){var m=new A(e,o);if(m.signal&&m.signal.aborted)return p(new f.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function D(){d.abort()}d.onload=function(){var _={status:d.status,statusText:d.statusText,headers:be(d.getAllResponseHeaders()||"")};_.url="responseURL"in d?d.responseURL:_.headers.get("X-Request-URL");var x="response"in d?d.response:d.responseText;setTimeout(function(){l(new T(x,_))},0)},d.onerror=function(){setTimeout(function(){p(new TypeError("Network request failed"))},0)},d.ontimeout=function(){setTimeout(function(){p(new TypeError("Network request failed"))},0)},d.onabort=function(){setTimeout(function(){p(new f.DOMException("Aborted","AbortError"))},0)};function ge(_){try{return _===""&&u.location.href?u.location.href:_}catch{return _}}d.open(m.method,ge(m.url),!0),m.credentials==="include"?d.withCredentials=!0:m.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&(c.blob?d.responseType="blob":c.arrayBuffer&&m.headers.get("Content-Type")&&m.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(d.responseType="arraybuffer")),o&&typeof o.headers=="object"&&!(o.headers instanceof y)?Object.getOwnPropertyNames(o.headers).forEach(function(_){d.setRequestHeader(_,v(o.headers[_]))}):m.headers.forEach(function(_,x){d.setRequestHeader(x,_)}),m.signal&&(m.signal.addEventListener("abort",D),d.onreadystatechange=function(){d.readyState===4&&m.signal.removeEventListener("abort",D)}),d.send(typeof m._bodyInit>"u"?null:m._bodyInit)})}return I.polyfill=!0,u.fetch||(u.fetch=I,u.Headers=y,u.Request=A,u.Response=T),f.Headers=y,f.Request=A,f.Response=T,f.fetch=I,f})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var s=r.fetch?r:n;t=s.fetch,t.default=s.fetch,t.fetch=s.fetch,t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response,i.exports=t}(L,L.exports)),L.exports}(function(i,t){var r;if(typeof fetch=="function"&&(typeof j<"u"&&j.fetch?r=j.fetch:typeof window<"u"&&window.fetch?r=window.fetch:r=fetch),typeof Ae<"u"&&(typeof window>"u"||typeof window.document>"u")){var n=r||Ee();n.default&&(n=n.default),t.default=n,i.exports=t.default}})($,$.exports);var ae=$.exports;const fe=Pe(ae),Q=ve({__proto__:null,default:fe},[ae]);function M(i){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(i)}var P;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?P=global.fetch:typeof window<"u"&&window.fetch?P=window.fetch:P=fetch);var S;se()&&(typeof global<"u"&&global.XMLHttpRequest?S=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(S=window.XMLHttpRequest));var C;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?C=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(C=window.ActiveXObject));!P&&Q&&!S&&!C&&(P=fe||Q);typeof P!="function"&&(P=void 0);var N=function(t,r){if(r&&M(r)==="object"){var n="";for(var s in r)n+="&"+encodeURIComponent(s)+"="+encodeURIComponent(r[s]);if(!n)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+n.slice(1)}return t},K=function(t,r,n){var s=function(f){if(!f.ok)return n(f.statusText||"Error",{status:f.status});f.text().then(function(u){n(null,{status:f.status,data:u})}).catch(n)};typeof fetch=="function"?fetch(t,r).then(s).catch(n):P(t,r).then(s).catch(n)},Y=!1,Be=function(t,r,n,s){t.queryStringParams&&(r=N(r,t.queryStringParams));var a=X({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(a["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),n&&(a["Content-Type"]="application/json");var f=typeof t.requestOptions=="function"?t.requestOptions(n):t.requestOptions,u=X({method:n?"POST":"GET",body:n?t.stringify(n):void 0,headers:a},Y?{}:f);try{K(r,u,s)}catch(c){if(!f||Object.keys(f).length===0||!c.message||c.message.indexOf("not implemented")<0)return s(c);try{Object.keys(f).forEach(function(w){delete u[w]}),K(r,u,s),Y=!0}catch(w){s(w)}}},qe=function(t,r,n,s){n&&M(n)==="object"&&(n=N("",n).slice(1)),t.queryStringParams&&(r=N(r,t.queryStringParams));try{var a;S?a=new S:a=new C("MSXML2.XMLHTTP.3.0"),a.open(n?"POST":"GET",r,1),t.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.withCredentials=!!t.withCredentials,n&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.overrideMimeType&&a.overrideMimeType("application/json");var f=t.customHeaders;if(f=typeof f=="function"?f():f,f)for(var u in f)a.setRequestHeader(u,f[u]);a.onreadystatechange=function(){a.readyState>3&&s(a.status>=400?a.statusText:null,{status:a.status,data:a.responseText})},a.send(n)}catch(c){console&&console.log(c)}},Re=function(t,r,n,s){if(typeof n=="function"&&(s=n,n=void 0),s=s||function(){},P&&r.indexOf("file:")!==0)return Be(t,r,n,s);if(se()||typeof ActiveXObject=="function")return qe(t,r,n,s);s(new Error("No fetch and no xhr implementation found!"))};function H(i){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(i)}function je(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(i,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,ue(n.key),n)}}function Se(i,t,r){return t&&Z(i.prototype,t),r&&Z(i,r),Object.defineProperty(i,"prototype",{writable:!1}),i}function He(i,t,r){return t=ue(t),t in i?Object.defineProperty(i,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[t]=r,i}function ue(i){var t=De(i,"string");return H(t)==="symbol"?t:String(t)}function De(i,t){if(H(i)!=="object"||i===null)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var n=r.call(i,t||"default");if(H(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}var xe=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,n,s){return He({},n,s||"")},parseLoadPayload:function(r,n){},request:Re,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},G=function(){function i(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};je(this,i),this.services=t,this.options=r,this.allOptions=n,this.type="backend",this.init(t,r,n)}return Se(i,[{key:"init",value:function(r){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=r,this.options=X(s,this.options||{},xe()),this.allOptions=a,this.services&&this.options.reloadInterval&&setInterval(function(){return n.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(r,n,s){this._readAny(r,r,n,n,s)}},{key:"read",value:function(r,n,s){this._readAny([r],r,[n],n,s)}},{key:"_readAny",value:function(r,n,s,a,f){var u=this,c=this.options.loadPath;typeof this.options.loadPath=="function"&&(c=this.options.loadPath(r,s)),c=Oe(c),c.then(function(w){if(!w)return f(null,{});var b=u.services.interpolator.interpolate(w,{lng:r.join("+"),ns:s.join("+")});u.loadUrl(b,f,n,a)})}},{key:"loadUrl",value:function(r,n,s,a){var f=this,u=typeof s=="string"?[s]:s,c=typeof a=="string"?[a]:a,w=this.options.parseLoadPayload(u,c);this.options.request(this.options,r,w,function(b,h){if(h&&(h.status>=500&&h.status<600||!h.status))return n("failed loading "+r+"; status code: "+h.status,!0);if(h&&h.status>=400&&h.status<500)return n("failed loading "+r+"; status code: "+h.status,!1);if(!h&&b&&b.message&&b.message.indexOf("Failed to fetch")>-1)return n("failed loading "+r+": "+b.message,!0);if(b)return n(b,!1);var g,v;try{typeof h.data=="string"?g=f.options.parse(h.data,s,a):g=h.data}catch{v="failed parsing "+r+" to json"}if(v)return n(v,!1);n(null,g)})}},{key:"create",value:function(r,n,s,a,f){var u=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var c=this.options.parsePayload(n,s,a),w=0,b=[],h=[];r.forEach(function(g){var v=u.options.addPath;typeof u.options.addPath=="function"&&(v=u.options.addPath(g,n));var q=u.services.interpolator.interpolate(v,{lng:g,ns:n});u.options.request(u.options,q,c,function(y,R){w+=1,b.push(y),h.push(R),w===r.length&&typeof f=="function"&&f(b,h)})})}}},{key:"reload",value:function(){var r=this,n=this.services,s=n.backendConnector,a=n.languageUtils,f=n.logger,u=s.language;if(!(u&&u.toLowerCase()==="cimode")){var c=[],w=function(h){var g=a.toResolveHierarchy(h);g.forEach(function(v){c.indexOf(v)<0&&c.push(v)})};w(u),this.allOptions.preload&&this.allOptions.preload.forEach(function(b){return w(b)}),c.forEach(function(b){r.allOptions.ns.forEach(function(h){s.read(b,h,"read",null,null,function(g,v){g&&f.warn("loading namespace ".concat(h," for language ").concat(b," failed"),g),!g&&v&&f.log("loaded namespace ".concat(h," for language ").concat(b),v),s.loaded("".concat(b,"|").concat(h),g,v)})})})}}}]),i}();G.type="backend";const ee=E("<br>"),Le=()=>{const i=te.createInstance();return i.use(G),O(oe,{options:{debug:!0,fallbackLng:"en",backend:{loadPath:"/solid-i18next/locales/{{lng}}/{{ns}}.json"}},instance:i,get children(){return[O(re,{}),O(U,{get translation(){return O(ne,{key:"greeting"})},children:'<Trans key="greeting" />'}),O(U,{get children(){return[`const instance = i18next.createInstance();
        instance.use(HttpBackend);`,ee(),ee(),`return (<TransProvider options={{
        debug: true,
    }} instance={instance} children={<App/>} />)`]}})]}})},Ue=E("<h2>solid-i18next HttpBackend"),Me=E("<p>Load translations asynchronously with&nbsp;<a href=https://github.com/i18next/i18next-http-backend target=_blank>HttpBackend</a>."),B=E("<br>"),Ce=E("<section class=section><p>Translations files:"),Ie=E("<section class=section><h3>Default</h3><p>Provide a translation key for Trans component and it will be replaced with value from loaded json file."),ke=E("<p>Also, you can provide default value and do not load default language's translations."),Fe=E("<section class=section><h3>Do not load translation files of default language"),Ne=()=>{const i=te.createInstance();i.use(G);const t={debug:!0,fallbackLng:"_en",backend:{loadPath:"/solid-i18next/locales/{{lng}}/{{ns}}.json"}};return[Ue(),Me(),(()=>{const r=Ce();return r.firstChild,k(r,O(U,{get children(){return["locales/",B(),"├─ lt/",B(),"│  ├─ translation.json",B(),"├─ pl/",B(),"│  ├─ translation.json",B()]}}),null),r})(),(()=>{const r=Ie();return r.firstChild.nextSibling,k(r,O(Le,{}),null),r})(),(()=>{const r=Fe();return r.firstChild,k(r,O(oe,{options:t,instance:i,get children(){return[ke(),O(re,{active:"_en",languages:[{code:"_en",title:"English"},{code:"lt",title:"Lietuvių"},{code:"pl",title:"Polska"}]}),O(U,{get translation(){return O(ne,{key:"greeting",children:"Hi!"})},get children(){return["<TransProvider options={{ fallbackLng: 'en' }} instance={instance} children={<App/>} />",B(),B(),'<Trans key="greeting">Hi!</Trans>']}})]}}),null),r})()]};export{Ne as default};
