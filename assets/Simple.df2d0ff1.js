import{c as e,i as n,L as o,T as s,t}from"./index.39db3290.js";import{E as r,T as a}from"./index.760dcfaa.js";const i=t("<h2>Simple</h2>"),l=t("<p>Set resources through TransProvider options:</p>"),u=()=>e(s,{options:{debug:!0,lng:"en",resources:{lt:{translation:{greeting:"Sveiki!"}}}},get instance(){return n.createInstance()},get children(){return[i.cloneNode(!0),l.cloneNode(!0),e(r,{children:"<TransProvider options={ resources: { lt: { translation: { greeting: 'Sveiki!' } } } } />"}),e(o,{}),e(r,{get translation(){return e(a,{key:"greeting",children:"Hello!"})},children:' <Trans key="greeting">Hello!</Trans> '})]}});export{u as default};
