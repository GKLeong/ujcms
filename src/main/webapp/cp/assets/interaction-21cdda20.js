import{aO as e}from"./index-0b297134.js";const o=async a=>(await e.get("/backend/ext/message-board",{params:a})).data,d=async a=>(await e.get(`/backend/ext/message-board/${a}`)).data,c=async a=>(await e.post("/backend/ext/message-board",a)).data,n=async a=>(await e.post("/backend/ext/message-board?_method=put",a)).data,r=async(a,t)=>(await e.post("/backend/ext/message-board/status?_method=put",{ids:a,status:t})).data,g=async a=>(await e.post("/backend/ext/message-board?_method=delete",a)).data,b=async a=>(await e.get("/backend/ext/vote",{params:a})).data,p=async a=>(await e.get(`/backend/ext/vote/${a}`)).data,y=async a=>(await e.post("/backend/ext/vote",a)).data,i=async a=>(await e.post("/backend/ext/vote?_method=put",a)).data,m=async a=>(await e.post("/backend/ext/vote?_method=delete",a)).data;export{o as a,r as b,c,g as d,p as e,y as f,i as g,m as h,b as i,d as q,n as u};
