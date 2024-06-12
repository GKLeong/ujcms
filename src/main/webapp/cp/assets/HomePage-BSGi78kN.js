import{d as G,u as X,U as y,V as T,r as x,o as Z,W as M,b as $,e as u,I as f,i as t,w as s,f as b,k as e,j as h,l as i,t as a,h as C,X as j,Y as J,Z as S,$ as k,a0 as K,a1 as Q,L as tt,a2 as et,a3 as B}from"./index-DgUB5rOh.js";import{d as st}from"./duration-B09G4Rgu.js";import{q as at,a as nt,b as lt}from"./stat-BonmZYTh.js";import{q as ot,a as it,b as rt,c as ut}from"./content-DyUbEBXm.js";import{q as dt}from"./interaction-Bg4lfbkg.js";const ct={class:"mb-3 shadow-md bg-warning-lighter"},vt={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},ft={class:"flex items-center"},pt={class:"mb-3 shadow-md bg-warning-lighter"},_t={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},mt={class:"flex items-center"},yt={class:"mb-3 shadow-md bg-warning-lighter"},ht={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},gt={class:"flex items-center"},xt={class:"mb-3 shadow-md bg-warning-lighter"},wt={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},bt={class:"flex items-center"},Ct={class:"mb-3 shadow-md bg-warning-lighter"},kt={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},$t={class:"flex items-center"},jt={class:"p-3 app-block"},St={class:"text-sm text-gray-secondary"},Vt={class:"flex items-end justify-between mt-1"},qt={class:"text-3xl text-primary"},Yt={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-primary"},Dt={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},Rt={class:"p-3 app-block"},Mt={class:"text-sm text-gray-secondary"},At={class:"flex items-end justify-between mt-1"},Pt={class:"text-3xl text-primary"},Tt={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-warning"},Bt={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},Ft={class:"p-3 app-block"},Ot={class:"text-sm text-gray-secondary"},Lt={class:"flex items-end justify-between mt-1"},zt={class:"text-3xl text-primary"},Ht={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-success"},It={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},Ut={class:"p-3 app-block"},Nt={class:"text-sm text-gray-secondary"},Et={class:"flex items-end justify-between mt-1"},Wt={class:"text-3xl text-primary"},Gt={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-danger"},Xt={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},Zt={class:"px-3 py-5 mt-3 app-block"},Jt={class:"flex p-3 mt-3 justify-evenly app-block"},Kt={class:"h-64 w-60 text-primary"},Qt={class:"mt-2 text-center"},te={class:"flex items-center justify-center mt-2"},ee={class:"text-3xl"},se={key:0},ae={key:1},ne={class:"mt-4 space-y-2 text-sm"},le={key:0},oe={key:1},ie={key:0},re={key:1},ue={key:0},de={key:1},ce={class:"h-64 w-60 text-gray-secondary"},ve={class:"mt-2 text-center"},fe={class:"flex items-center justify-center mt-2"},pe={class:"text-3xl"},_e={key:0},me={key:1},ye={class:"mt-4 space-y-2 text-sm"},he={key:0},ge={key:1},xe={key:0},we={key:1},be={key:0},Ce={key:1},ke={class:"p-3 mt-3 app-block"},De=G({__name:"HomePage",setup($e){const{t:w,n:F}=X();y.extend(st);const A=T(),O=async()=>{const n=await at({begin:y().startOf("day").subtract(1,"day").format(),end:y().endOf("day").format()}),o={tooltip:{trigger:"axis"},legend:{data:[w("visitTrend.yesterdayPv"),w("visitTrend.todayPv")]},grid:{left:16,right:16,top:40,bottom:0,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},data:Array.from(Array(24).keys())},yAxis:{type:"value",minInterval:1},series:[{name:w("visitTrend.yesterdayPv"),type:"line",symbol:"circle",color:"#a0cfff",data:n.filter(l=>y(l.date)<y().startOf("day")).map(l=>l.pvCount)},{name:w("visitTrend.todayPv"),type:"line",symbol:"circle",color:"#409eff",areaStyle:{color:"#ecf5ff"},data:n.filter(l=>y(l.date)>=y().startOf("day")).map(l=>l.pvCount)}]},d=A.value;if(d==null)return;let r=j.getInstanceByDom(d);r==null&&(r=j.init(d)),r.setOption(o),window.addEventListener("resize",function(){r&&r.resize()})},P=T(),L=async()=>{const n=await nt({begin:y().subtract(30,"day").format("YYYY-MM-DD"),end:y().format("YYYY-MM-DD")}),o={title:{text:w("menu.stat.visitSource"),textStyle:{color:"#909399",fontWeight:"normal",fontSize:16}},legend:{type:"scroll",orient:"vertical",right:"10%",top:16,bottom:16},tooltip:{trigger:"item",valueFormatter:l=>F(l)},series:[{name:w("menu.stat.visitSource"),type:"pie",radius:["44%","80%"],center:["40%","54%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!1},emphasis:{label:{show:!1}},labelLine:{show:!1},data:n.map(l=>({value:l.pvCount,name:w("visitSource.type.".concat(l.name))}))}]},d=P.value;if(d==null)return;let r=j.getInstanceByDom(d);r==null&&(r=j.init(d)),r.setOption(o),window.addEventListener("resize",function(){r&&r.resize()})},c=x({}),v=x({}),z=async()=>{const n=await lt({begin:y().subtract(30,"day").format("YYYY-MM-DD"),end:y().format("YYYY-MM-DD")});c.value=n.newVisitor,v.value=n.oldVisitor;const o=c.value.uvCount+v.value.uvCount;o>0?(c.value.proportion=c.value.uvCount*100/o,v.value.proportion=v.value.uvCount*100/o):(c.value.proportion=50,v.value.proportion=50)},g=x({}),H=async()=>{g.value=await J()},V=x(0),I=async()=>{S.epRank>=1&&(V.value=await ot())},q=x(0),U=async()=>{S.epRank>=1&&(q.value=await it())},Y=x(0),N=async()=>{Y.value=await dt()},D=x(0),E=async()=>{S.epRank>=3&&(D.value=await rt())},R=x(0),W=async()=>{S.epRank>=3&&(R.value=await ut())};return Z(async()=>{M("articleReview:list")&&(I(),U()),M("formReview:list")&&(E(),W()),M("messageBoard:list")&&N(),O(),L(),z(),H()}),(n,o)=>{const d=$("el-icon"),r=$("el-link"),l=$("el-col"),m=$("el-row");return u(),f("div",null,[t(m,{gutter:12},{default:s(()=>[V.value>0?(u(),b(l,{key:0,span:6},{default:s(()=>[e("div",ct,[e("div",vt,[e("div",ft,[t(d,null,{default:s(()=>[t(h(k))]),_:1}),t(r,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:o[0]||(o[0]=()=>n.$router.push({path:"/content/article-review"}))},{default:s(()=>[i(a(n.$t("todo.pendingArticle")),1)]),_:1})]),e("div",null,[t(r,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:o[1]||(o[1]=()=>n.$router.push({path:"/content/article-review"}))},{default:s(()=>[i(a(V.value),1)]),_:1})])])])]),_:1})):C("",!0),q.value>0?(u(),b(l,{key:1,span:6},{default:s(()=>[e("div",pt,[e("div",_t,[e("div",mt,[t(d,null,{default:s(()=>[t(h(k))]),_:1}),t(r,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:o[2]||(o[2]=()=>n.$router.push({path:"/content/article",query:{status:22}}))},{default:s(()=>[i(a(n.$t("todo.rejectedArticle")),1)]),_:1})]),e("div",null,[t(r,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:o[3]||(o[3]=()=>n.$router.push({path:"/content/article",query:{status:22}}))},{default:s(()=>[i(a(q.value),1)]),_:1})])])])]),_:1})):C("",!0),D.value>0?(u(),b(l,{key:2,span:6},{default:s(()=>[e("div",yt,[e("div",ht,[e("div",gt,[t(d,null,{default:s(()=>[t(h(k))]),_:1}),t(r,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:o[4]||(o[4]=()=>n.$router.push({path:"/content/form-review"}))},{default:s(()=>[i(a(n.$t("todo.pendingForm")),1)]),_:1})]),e("div",null,[t(r,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:o[5]||(o[5]=()=>n.$router.push({path:"/content/form-review"}))},{default:s(()=>[i(a(D.value),1)]),_:1})])])])]),_:1})):C("",!0),R.value>0?(u(),b(l,{key:3,span:6},{default:s(()=>[e("div",xt,[e("div",wt,[e("div",bt,[t(d,null,{default:s(()=>[t(h(k))]),_:1}),t(r,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:o[6]||(o[6]=()=>n.$router.push({path:"/content/form",query:{status:22}}))},{default:s(()=>[i(a(n.$t("todo.rejectedForm")),1)]),_:1})]),e("div",null,[t(r,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:o[7]||(o[7]=()=>n.$router.push({path:"/content/form",query:{status:22}}))},{default:s(()=>[i(a(R.value),1)]),_:1})])])])]),_:1})):C("",!0),Y.value>0?(u(),b(l,{key:4,span:6},{default:s(()=>[e("div",Ct,[e("div",kt,[e("div",$t,[t(d,null,{default:s(()=>[t(h(k))]),_:1}),t(r,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:o[8]||(o[8]=()=>n.$router.push({path:"/interaction/message-board",query:{status:1}}))},{default:s(()=>[i(a(n.$t("todo.unreviewedMessageBoard")),1)]),_:1})]),e("div",null,[t(r,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:o[9]||(o[9]=()=>n.$router.push({path:"/interaction/message-board",query:{status:1}}))},{default:s(()=>[i(a(Y.value),1)]),_:1})])])])]),_:1})):C("",!0)]),_:1}),t(m,{gutter:12},{default:s(()=>[t(l,{span:6},{default:s(()=>{var p,_;return[e("div",jt,[e("div",St,a(n.$t("contentStat.article")),1),e("div",Vt,[e("div",qt,a((p=g.value.article)==null?void 0:p.total),1),e("div",Yt,[t(d,null,{default:s(()=>[t(h(K))]),_:1})])]),e("div",Dt,[e("div",null,a(n.$t("contentStat.last7day")),1),e("div",null,a((_=g.value.article)==null?void 0:_.last7day),1)])])]}),_:1}),t(l,{span:6},{default:s(()=>{var p,_;return[e("div",Rt,[e("div",Mt,a(n.$t("contentStat.channel")),1),e("div",At,[e("div",Pt,a((p=g.value.channel)==null?void 0:p.total),1),e("div",Tt,[t(d,null,{default:s(()=>[t(h(Q))]),_:1})])]),e("div",Bt,[e("div",null,a(n.$t("contentStat.last7day")),1),e("div",null,a((_=g.value.channel)==null?void 0:_.last7day),1)])])]}),_:1}),t(l,{span:6},{default:s(()=>{var p,_;return[e("div",Ft,[e("div",Ot,a(n.$t("contentStat.user")),1),e("div",Lt,[e("div",zt,a((p=g.value.user)==null?void 0:p.total),1),e("div",Ht,[t(d,null,{default:s(()=>[t(h(tt))]),_:1})])]),e("div",It,[e("div",null,a(n.$t("contentStat.last7day")),1),e("div",null,a((_=g.value.user)==null?void 0:_.last7day),1)])])]}),_:1}),t(l,{span:6},{default:s(()=>{var p,_;return[e("div",Ut,[e("div",Nt,a(n.$t("contentStat.attachment")),1),e("div",Et,[e("div",Wt,a((p=g.value.attachment)==null?void 0:p.total),1),e("div",Gt,[t(d,null,{default:s(()=>[t(h(et))]),_:1})])]),e("div",Xt,[e("div",null,a(n.$t("contentStat.last7day")),1),e("div",null,a((_=g.value.attachment)==null?void 0:_.last7day),1)])])]}),_:1})]),_:1}),e("div",Zt,[e("div",{ref_key:"trendChart",ref:A,class:"h-64"},null,512)]),t(m,{gutter:12},{default:s(()=>[t(l,{span:12},{default:s(()=>{var p,_;return[e("div",Jt,[e("div",Kt,[e("div",Qt,a(n.$t("visitVisitor.newVisitor")),1),e("div",te,[t(d,{class:"text-5xl"},{default:s(()=>[t(h(B))]),_:1}),e("span",ee,[c.value.uvCount>0?(u(),f("span",se,a(n.$n((p=c.value.proportion)!=null?p:0,"decimal")),1)):(u(),f("span",ae,"-")),i("% ")])]),e("div",ne,[t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visitVisitor.pv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[i(a(c.value.pvCount),1)]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visitVisitor.uv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[i(a(c.value.uvCount),1)]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.bounceRate")),1)]),_:1}),t(l,{span:12},{default:s(()=>[c.value.uvCount>0?(u(),f("span",le,a(n.$n(c.value.bounceCount*100/c.value.uvCount,"decimal"))+"%",1)):(u(),f("span",oe,"-"))]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.averageDuration")),1)]),_:1}),t(l,{span:12},{default:s(()=>[c.value.uvCount>0?(u(),f("span",ie,a(h(y).duration(c.value.duration/c.value.uvCount,"seconds").format("HH:mm:ss")),1)):(u(),f("span",re,"-"))]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.averagePv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[c.value.uvCount>0?(u(),f("span",ue,a(n.$n(c.value.pvCount/c.value.uvCount,"decimal")),1)):(u(),f("span",de,"-"))]),_:1})]),_:1})])]),e("div",ce,[e("div",ve,a(n.$t("visitVisitor.oldVisitor")),1),e("div",fe,[t(d,{class:"text-5xl"},{default:s(()=>[t(h(B))]),_:1}),e("span",pe,[v.value.uvCount>0?(u(),f("span",_e,a(n.$n((_=v.value.proportion)!=null?_:0,"decimal")),1)):(u(),f("span",me,"-")),i("% ")])]),e("div",ye,[t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visitVisitor.pv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[i(a(v.value.pvCount),1)]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visitVisitor.uv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[i(a(v.value.uvCount),1)]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.bounceRate")),1)]),_:1}),t(l,{span:12},{default:s(()=>[v.value.uvCount>0?(u(),f("span",he,a(n.$n(v.value.bounceCount*100/v.value.uvCount,"decimal"))+"%",1)):(u(),f("span",ge,"-"))]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.averageDuration")),1)]),_:1}),t(l,{span:12},{default:s(()=>[v.value.uvCount>0?(u(),f("span",xe,a(h(y).duration(v.value.duration/v.value.uvCount,"seconds").format("HH:mm:ss")),1)):(u(),f("span",we,"-"))]),_:1})]),_:1}),t(m,{gutter:24},{default:s(()=>[t(l,{span:12,class:"text-right"},{default:s(()=>[i(a(n.$t("visit.averagePv")),1)]),_:1}),t(l,{span:12},{default:s(()=>[v.value.uvCount>0?(u(),f("span",be,a(n.$n(v.value.pvCount/v.value.uvCount,"decimal")),1)):(u(),f("span",Ce,"-"))]),_:1})]),_:1})])])])]}),_:1}),t(l,{span:12},{default:s(()=>[e("div",ke,[e("div",{ref_key:"sourceTypeChart",ref:P,class:"w-full h-64"},null,512)])]),_:1})]),_:1})])}}});export{De as default};
