import{u as i,m as o,a as _,b as u,c as d,S as x,d as r,e as T,f as g,t as h,g as $,h as C,j as S,k as E,l as I,n as L}from"./index.08caa804.js";const w=e=>{const[n,{getI18next:t}]=i();return o((()=>{const s=o(()=>typeof e.children=="string",!0);return()=>s()?n(e.key,e.children,e.options):_({i18n:t(),t:n,props:e},u(()=>e.children)())})())},N=h("<p> <sup>Rendered</sup></p>"),b=h("<code></code>"),k=e=>{const[n,{getI18next:t}]=i(),[s,c]=$(!1);return t().on("languageChanged",()=>{c(!0),setTimeout(()=>c(!1),1e3)}),(()=>{const a=N.cloneNode(!0),l=a.firstChild,m=l.nextSibling;return r(a,C),g(a,()=>e.children,l),r(m,S),E(f=>I(a,{[L]:s()},f)),a})()},y=e=>{const n=u(()=>e.translation);return[d(x,{get when(){return!!n()},get children(){return d(k,{get children(){return n()}})}}),(()=>{const t=b.cloneNode(!0);return r(t,T),g(t,()=>e.children),t})()]};export{y as E,w as T};