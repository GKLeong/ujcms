import{g as _,q as m,x as e,n as a,w as l,y as s,k as t,K as c,e as d,m as r,o as u,a8 as f}from"./vendor.b1cbf8b1.js";import{c as o}from"./index.db1e2d33.js";const x={class:"app-block p-3 flex"},g={class:"ml-3 space-y-1 text-gray-regular text-sm"},v={class:"text-base font-bold"},h={class:"ml-1"},y={class:"ml-1"},B=_({setup(D){return(n,k)=>{const i=r("el-icon"),p=r("el-avatar");return u(),m("div",null,[e("div",x,[e("div",null,[a(p,{size:76,class:"flex justify-center items-center"},{default:l(()=>[a(i,{class:"text-5xl"},{default:l(()=>[a(t(f))]),_:1})]),_:1})]),e("div",g,[e("p",v,s(t(o).username),1),e("p",null,[c(s(n.$t("user.loginDate"))+": ",1),e("span",h,s(t(d)(t(o).loginDate).format("YYYY-MM-DD HH:mm:ss")),1)]),e("p",null,[c(s(n.$t("user.loginIp"))+": ",1),e("span",y,s(t(o).loginIp),1)])])])])}}});export{B as default};
