const u=e=>{const r=[],l={};return e.forEach(n=>{l[n.id]=n}),e.forEach(n=>{const c=l[n.parentId];c?(n.parent=c,c.children!=null?c.children.push(n):c.children=[n]):(n.children==null&&(n.children=[]),r.push(n))}),r},s=(e,r,l)=>{r.forEach(n=>{const c={...n,depth:l};e.push(c),c.children&&(s(e,c.children,l+1),c.children=void 0)})},a=e=>{const r=[];return s(r,e,0),r},h=(e,r,l)=>(e.forEach(n=>{(l||n.id===r)&&(n.disabled=!0),n.children&&h(n.children,r,n.disabled)}),e),t=(e,r)=>r?h(e,r,!1):e,i=e=>(e.forEach(r=>{r.children?(r.disabled=r.children.length>0,i(r.children)):r.disabled=!1}),e),o=(e,r)=>(!r||r.length<=0||e.forEach(l=>{r.includes(l.id)&&(l.disabled=!0),l.children&&o(l.children,r)}),e),d=(e,r)=>(e.forEach(l=>{r.includes(l.id)||(l.disabled=!0),l.children&&d(l.children,r)}),e),b=(e,r)=>r?d(e,r):e,f=(e,r)=>{let l=!0;return e.forEach(n=>{!(n.children&&n.children.length>0)&&!r.includes(n.key)&&!r.includes("*")?n.disabled=!0:l=!1,n.children&&(n.disabled=f(n.children,r))}),l};export{i as a,o as b,t as c,b as d,f as e,a as f,u as t};
