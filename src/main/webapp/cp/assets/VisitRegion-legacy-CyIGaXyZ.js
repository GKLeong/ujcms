System.register(["./index-legacy-CiIiERxr.js","./stat-legacy-Bfq0p86z.js"],(function(t,e){"use strict";var a,n,r,l,i,s,o,u,c,d,y,m,v,p,f,Y,g,D,b;return{setters:[t=>{a=t.d,n=t.u,r=t.r,l=t.V,i=t.o,s=t.b,o=t.e,u=t.I,c=t.k,d=t.i,y=t.w,m=t.a9,v=t.aa,p=t.l,f=t.t,Y=t.X,g=t.U},t=>{D=t.c,b=t.d}],execute:function(){const e={class:"p-3 mt-3 app-block"},M={class:"p-3 mt-3 app-block"},h={class:"p-3 mt-3 app-block"};t("default",a({__name:"VisitRegion",setup(t){const{t:a,n:w}=n(),C=r("last30day"),_=t=>{switch(t){case"today":return g().format("YYYY-MM-DD");case"yesterday":return g().subtract(1,"day").format("YYYY-MM-DD");case"last7day":return g().subtract(6,"day").format("YYYY-MM-DD");case"last30day":return g().subtract(29,"day").format("YYYY-MM-DD");case"lastYear":return g().subtract(1,"year").format("YYYY-MM-DD");default:return}},k=t=>"yesterday"===t?g().subtract(1,"day").format("YYYY-MM-DD"):g().format("YYYY-MM-DD"),x=l(),z=l(),S=async t=>{(async t=>{const e=await D({begin:_(t),end:k(t)}),n=e.reduce(((t,e)=>t+e.pvCount),0),r={title:{text:a("menu.stat.visitCountry"),textStyle:{color:"#909399",fontWeight:"normal",fontSize:16}},tooltip:{trigger:"item",valueFormatter:t=>w(100*t/n,"decimal")+"%"},legend:{type:"scroll",orient:"vertical",right:"10%",top:16,bottom:16},series:[{name:a("menu.stat.visitCountry"),type:"pie",radius:"72%",center:["40%","56%"],data:e.map((t=>({value:t.pvCount,name:t.name})))}]},l=x.value;if(null==l)return;let i=Y.getInstanceByDom(l);null==i&&(i=Y.init(l)),i.setOption(r),window.addEventListener("resize",(function(){i&&i.resize()}))})(t),(async t=>{const e=await b({begin:_(t),end:k(t)}),n=e.reduce(((t,e)=>t+e.pvCount),0),r={title:{text:a("menu.stat.visitProvince"),textStyle:{color:"#909399",fontWeight:"normal",fontSize:16}},tooltip:{trigger:"item",valueFormatter:t=>w(100*t/n,"decimal")+"%"},legend:{type:"scroll",orient:"vertical",right:"10%",top:16,bottom:16},series:[{name:a("menu.stat.visitProvince"),type:"pie",radius:"72%",center:["40%","56%"],data:e.map((t=>({value:t.pvCount,name:t.name})))}]},l=z.value;if(null==l)return;let i=Y.getInstanceByDom(l);null==i&&(i=Y.init(l)),i.setOption(r),window.addEventListener("resize",(function(){i&&i.resize()}))})(t)};return i((async()=>{S(C.value)})),(t,a)=>{const n=s("el-radio-button"),r=s("el-radio-group"),l=s("el-col"),i=s("el-row");return o(),u("div",null,[c("div",e,[c("div",null,[d(r,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=t=>C.value=t),onChange:a[1]||(a[1]=t=>S(t))},{default:y((()=>[(o(),u(m,null,v(["today","yesterday","last7day","last30day","lastYear","all"],(e=>d(n,{key:e,value:e},{default:y((()=>[p(f(t.$t(`visit.${e}`)),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])]),d(i,{gutter:12},{default:y((()=>[d(l,{span:12},{default:y((()=>[c("div",M,[c("div",{ref_key:"countryChartRef",ref:x,class:"h-80"},null,512)])])),_:1}),d(l,{span:12},{default:y((()=>[c("div",h,[c("div",{ref_key:"provinceChartRef",ref:z,class:"h-80"},null,512)])])),_:1})])),_:1})])}}}))}}}));
