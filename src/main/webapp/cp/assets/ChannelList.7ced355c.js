var Ye=Object.defineProperty,Ze=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var el=Object.prototype.hasOwnProperty,ll=Object.prototype.propertyIsEnumerable;var De=(w,_,v)=>_ in w?Ye(w,_,{enumerable:!0,configurable:!0,writable:!0,value:v}):w[_]=v,le=(w,_)=>{for(var v in _||(_={}))el.call(_,v)&&De(w,v,_[v]);if(Se)for(var v of Se(_))ll.call(_,v)&&De(w,v,_[v]);return w},Be=(w,_)=>Ze(w,xe(_));import{g as Ae,t as al,D as f,i as H,S as tl,L as Ee,m as h,o as s,j as m,w as n,n as t,k as e,K as j,y as A,v as y,q as M,F as D,A as N,u as ol,x as ae,ac as nl,aj as dl,J as ul,ai as rl,ab as sl,ad as il,az as ml}from"./vendor.b1cbf8b1.js";import{_ as pl,h as cl,t as Qe,p as R,j as Le,d as hl,r as fl,m as vl,k as bl}from"./index.db1e2d33.js";import{j as _l,k as Vl,l as yl,m as Ne,a as Oe,n as wl,b as gl,o as $l}from"./content.b42f1238.js";import{_ as ql,b as kl,a as Cl,c as Ul}from"./QueryItem.4ba55cc9.js";import{_ as Il}from"./ListMove.d313af6b.js";import{b as ze}from"./config.0ea43826.js";import{q as Tl}from"./user.1ba73d99.js";import{a as Fe,m as Ke,g as je}from"./data.b54346a7.js";import{T as Ml,F as Sl}from"./FieldItem.a4f0a73f.js";import{D as Dl}from"./DialogForm.61b75d09.js";import{_ as te}from"./LabelTip.801ddd21.js";import"./BaseUpload.75d58af7.js";const Bl=Ae({props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0},parent:{type:Object,default:null}},emits:{"update:modelValue":null,finished:null},setup(w,{emit:_}){const v=w,{modelValue:B,parent:V}=al(v),U=f(),L=f([]),$=f([]),S=f([]),E=f([]),G=f([]),z=f([]),I=f(),q=H(()=>$.value.find(a=>a.id===I.value)),u=H(()=>{var a;return Fe(Ke(je().channel.mains,(a=q.value)==null?void 0:a.mains,"channel"))}),J=H(()=>{var a;return Fe(Ke(je().channel.asides,(a=q.value)==null?void 0:a.asides,"channel"))}),X=H(()=>{var a;return JSON.parse(((a=q.value)==null?void 0:a.customs)||"[]")});tl(B,()=>{var a,g,C;B&&(I.value=(C=(a=V.value)==null?void 0:a.articleModelId)!=null?C:(g=$.value[0])==null?void 0:g.id)});const O=async a=>{L.value=cl(Qe(await Oe()),a==null?void 0:a.id)},Y=async a=>{await O(a),_("finished")},Z=async()=>{$.value=await ze({Q_EQ_type:"channel"}),I.value==null&&$.value.length>0&&(I.value=$.value[0].id)},ee=async()=>{S.value=await ze({Q_EQ_type:"article"})},i=async()=>{E.value=await Tl()},c=async()=>{G.value=await wl()},k=async()=>{z.value=await gl()};Ee(()=>{Z(),ee(),i(),c(),k(),O()});const T=a=>(X.value.forEach(g=>{a[g.code]=g.defaultValue}),a);return(a,g)=>{const C=h("el-input"),p=h("el-form-item"),r=h("el-col"),Q=h("el-checkbox"),P=h("el-option"),W=h("el-select"),Re=h("el-tooltip"),Ge=h("el-checkbox-group"),x=h("el-switch"),oe=h("el-row"),Je=h("el-cascader"),Pe=h("el-input-number"),We=h("el-tab-pane"),He=h("el-tabs");return s(),m(Dl,{name:a.$t("menu.content.channel"),queryBean:e(_l),createBean:e(Vl),updateBean:e(yl),deleteBean:e(Ne),beanId:w.beanId,beanIds:w.beanIds,focus:U.value,initValues:l=>{var F,o,d,K,b,ne,de,ue,re,se,ie,me,pe,ce,he,fe,ve,be,_e,Ve,ye,we,ge,$e,qe,ke,Ce,Ue,Ie,Te,Me;return{parentId:(o=l==null?void 0:l.parentId)!=null?o:(F=e(V))==null?void 0:F.id,type:1,channelModelId:(ne=(K=l==null?void 0:l.channelModelId)!=null?K:(d=e(V))==null?void 0:d.channelModelId)!=null?ne:(b=$.value[0])==null?void 0:b.id,articleModelId:(se=(ue=l==null?void 0:l.articleModelId)!=null?ue:(de=e(V))==null?void 0:de.articleModelId)!=null?se:(re=S.value[0])==null?void 0:re.id,groupIds:(pe=(me=l==null?void 0:l.groupIds)!=null?me:(ie=e(V))==null?void 0:ie.groupIds)!=null?pe:E.value.map(Xe=>Xe.id),nav:(fe=(he=l==null?void 0:l.nav)!=null?he:(ce=e(V))==null?void 0:ce.nav)!=null?fe:!0,channelTemplate:(_e=(be=l==null?void 0:l.channelTemplate)!=null?be:(ve=e(V))==null?void 0:ve.channelTemplate)!=null?_e:G.value[0],articleTemplate:(we=(ye=l==null?void 0:l.articleTemplate)!=null?ye:(Ve=e(V))==null?void 0:Ve.articleTemplate)!=null?we:z.value[0],pageSize:20,allowComment:(qe=($e=l==null?void 0:l.allowComment)!=null?$e:(ge=e(V))==null?void 0:ge.allowComment)!=null?qe:!0,allowContribute:(Ue=(Ce=l==null?void 0:l.allowContribute)!=null?Ce:(ke=e(V))==null?void 0:ke.allowContribute)!=null?Ue:!0,allowSearch:(Me=(Te=l==null?void 0:l.allowSearch)!=null?Te:(Ie=e(V))==null?void 0:Ie.allowSearch)!=null?Me:!0,customs:T({})}},toValues:l=>le({},l),perms:"channel","model-value":w.modelValue,"onUpdate:modelValue":g[0]||(g[0]=l=>a.$emit("update:modelValue",l)),onFinished:Y,onBeanChange:g[1]||(g[1]=l=>{var F,o,d,K;I.value=(K=(o=l==null?void 0:l.channelModelId)!=null?o:(F=e(V))==null?void 0:F.channelModelId)!=null?K:(d=S.value[0])==null?void 0:d.id,O()}),labelWidth:"120px",large:""},{default:n(({values:l,isEdit:F})=>[t(oe,null,{default:n(()=>[t(r,{span:18},{default:n(()=>[t(oe,null,{default:n(()=>[t(r,{span:e(u).name.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"name",label:(o=e(u).name.name)!=null?o:a.$t("channel.name"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[t(C,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d,ref_key:"focus",ref:U,maxlength:"50"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"]),t(r,{span:e(u).alias.double?12:24},{default:n(()=>[t(p,{prop:"alias",rules:F?{required:!0,message:()=>a.$t("v.required")}:{}},{label:n(()=>{var o;return[t(te,{label:(o=e(u).alias.name)!=null?o:a.$t("channel.alias"),message:"channel.alias"},null,8,["label"])]}),default:n(()=>[t(C,{modelValue:l.alias,"onUpdate:modelValue":o=>l.alias=o,maxlength:"50"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["rules"])]),_:2},1032,["span"]),l.type===3?(s(),m(r,{key:0,span:e(u).linkUrl.double?12:24},{default:n(()=>[t(p,{prop:"linkUrl",rules:{required:!0,message:()=>a.$t("v.required")}},{label:n(()=>{var o;return[t(te,{label:(o=e(u).linkUrl.name)!=null?o:a.$t("channel.linkUrl"),message:"channel.linkUrl"},null,8,["label"])]}),default:n(()=>[t(C,{modelValue:l.linkUrl,"onUpdate:modelValue":o=>l.linkUrl=o,maxlength:"255"},{append:n(()=>[t(Q,{modelValue:l.targetBlank,"onUpdate:modelValue":o=>l.targetBlank=o},{default:n(()=>[j(A(a.$t("channel.targetBlank")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["rules"])]),_:2},1032,["span"])):y("",!0),l.type<3?(s(),M(D,{key:1},[e(u).seoTitle.show?(s(),m(r,{key:0,span:e(u).seoTitle.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"seoTitle",label:(o=e(u).seoTitle.name)!=null?o:a.$t("channel.seoTitle"),rules:e(u).seoTitle.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(C,{modelValue:l.seoTitle,"onUpdate:modelValue":d=>l.seoTitle=d,maxlength:"150"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).seoKeywords.show?(s(),m(r,{key:1,span:e(u).seoKeywords.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"seoKeywords",label:(o=e(u).seoKeywords.name)!=null?o:a.$t("channel.seoKeywords"),rules:e(u).seoKeywords.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(C,{modelValue:l.seoKeywords,"onUpdate:modelValue":d=>l.seoKeywords=d,maxlength:"150"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).seoDescription.show?(s(),m(r,{key:2,span:e(u).seoDescription.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"seoDescription",label:(o=e(u).seoDescription.name)!=null?o:a.$t("channel.seoDescription"),rules:e(u).seoDescription.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(C,{modelValue:l.seoDescription,"onUpdate:modelValue":d=>l.seoDescription=d,maxlength:"1000"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0)],64)):y("",!0),e(u).channelModel.show?(s(),m(r,{key:2,span:e(u).channelModel.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"channelModelId",label:(o=e(u).channelModel.name)!=null?o:a.$t("channel.channelModel"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[t(W,{modelValue:l.channelModelId,"onUpdate:modelValue":d=>l.channelModelId=d,class:"w-full",onChange:d=>{I.value=d,F||a.$nextTick().then(()=>{T(l.customs)})}},{default:n(()=>[(s(!0),M(D,null,N($.value,d=>(s(),m(P,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).articleModel.show?(s(),m(r,{key:3,span:e(u).articleModel.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"articleModelId",label:(o=e(u).articleModel.name)!=null?o:a.$t("channel.articleModel"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[t(W,{modelValue:l.articleModelId,"onUpdate:modelValue":d=>l.articleModelId=d,class:"w-full"},{default:n(()=>[(s(!0),M(D,null,N(S.value,d=>(s(),m(P,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),l.type!==3?(s(),M(D,{key:4},[e(u).channelTemplate.show?(s(),m(r,{key:0,span:e(u).channelTemplate.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"channelTemplate",label:(o=e(u).channelTemplate.name)!=null?o:a.$t("channel.channelTemplate"),rules:e(u).channelTemplate.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(W,{modelValue:l.channelTemplate,"onUpdate:modelValue":d=>l.channelTemplate=d,class:"w-full"},{default:n(()=>[(s(!0),M(D,null,N(G.value,d=>(s(),m(P,{key:d,label:d+".html",value:d},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).articleTemplate.show?(s(),m(r,{key:1,span:e(u).articleTemplate.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"articleTemplate",label:(o=e(u).articleTemplate.name)!=null?o:a.$t("channel.articleTemplate"),rules:e(u).articleTemplate.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(W,{modelValue:l.articleTemplate,"onUpdate:modelValue":d=>l.articleTemplate=d,class:"w-full"},{default:n(()=>[(s(!0),M(D,null,N(z.value,d=>(s(),m(P,{key:d,label:d+".html",value:d},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0)],64)):y("",!0),e(u).group.show?(s(),m(r,{key:5,span:e(u).group.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"groupIds",label:(o=e(u).group.name)!=null?o:a.$t("channel.group"),rules:e(u).group.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(Ge,{modelValue:l.groupIds,"onUpdate:modelValue":d=>l.groupIds=d},{default:n(()=>[(s(!0),M(D,null,N(E.value,d=>(s(),m(Re,{key:d.id,content:d.description},{default:n(()=>[t(Q,{label:d.id},{default:n(()=>[j(A(d.name),1)]),_:2},1032,["label"])]),_:2},1032,["content"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).allowComment.show?(s(),m(r,{key:6,span:e(u).allowComment.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"allowComment",label:(o=e(u).allowComment.name)!=null?o:a.$t("channel.allowComment"),rules:e(u).allowComment.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(x,{modelValue:l.allowComment,"onUpdate:modelValue":d=>l.allowComment=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).allowContribute.show?(s(),m(r,{key:7,span:e(u).allowContribute.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"allowContribute",label:(o=e(u).allowContribute.name)!=null?o:a.$t("channel.allowContribute"),rules:e(u).allowContribute.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(x,{modelValue:l.allowContribute,"onUpdate:modelValue":d=>l.allowContribute=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),e(u).nav.show?(s(),m(r,{key:8,span:e(u).nav.double?12:24},{default:n(()=>[t(p,{prop:"nav",rules:e(u).nav.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{label:n(()=>{var o;return[t(te,{label:(o=e(u).nav.name)!=null?o:a.$t("channel.nav"),message:"channel.nav"},null,8,["label"])]}),default:n(()=>[t(x,{modelValue:l.nav,"onUpdate:modelValue":o=>l.nav=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["rules"])]),_:2},1032,["span"])):y("",!0),e(u).allowSearch.show?(s(),m(r,{key:9,span:e(u).allowSearch.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"allowSearch",label:(o=e(u).allowSearch.name)!=null?o:a.$t("channel.allowSearch"),rules:e(u).allowSearch.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(x,{modelValue:l.allowSearch,"onUpdate:modelValue":d=>l.allowSearch=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0),(s(!0),M(D,null,N(e(X),o=>(s(),m(r,{key:o.code,span:o.double?12:24},{default:n(()=>[t(p,{prop:`customs.${o.code}`,label:o.name,rules:o.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(Sl,{field:o,modelValue:l.customs[o.code],"onUpdate:modelValue":d=>l.customs[o.code]=d},null,8,["field","modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","label","rules"])]),_:2},1032,["span"]))),128)),l.type===2?(s(),m(r,{key:10,span:e(u).text.double?12:24},{default:n(()=>{var o;return[t(p,{prop:"text",label:(o=e(u).text.name)!=null?o:a.$t("channel.text"),rules:e(u).text.required?{required:!0,message:()=>a.$t("v.required")}:void 0},{default:n(()=>[t(Ml,{modelValue:l.text,"onUpdate:modelValue":d=>l.text=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["span"])):y("",!0)]),_:2},1024)]),_:2},1024),t(r,{span:6,class:"el-form--label-top label-top"},{default:n(()=>[t(He,{type:"border-card",class:"ml-5"},{default:n(()=>[t(We,{label:a.$t("channel.tabs.setting")},{default:n(()=>{var o,d,K;return[t(p,{prop:"type",label:(o=e(J).type.name)!=null?o:a.$t("channel.type"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[t(W,{modelValue:l.type,"onUpdate:modelValue":b=>l.type=b,class:"w-full"},{default:n(()=>[(s(),M(D,null,N([1,2,3],b=>t(P,{key:b,label:a.$t(`channel.type.${b}`),value:b},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),t(p,{prop:"parentId",label:(d=e(J).parent.name)!=null?d:a.$t("channel.parent")},{default:n(()=>[t(Je,{modelValue:l.parentId,"onUpdate:modelValue":b=>l.parentId=b,options:L.value,props:{value:"id",label:"name",checkStrictly:!0},onChange:b=>l.parentId=b==null?void 0:b[b.length-1],clearable:"",class:"w-full"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:2},1032,["label"]),t(p,{prop:"pageSize",label:(K=e(J).pageSize.name)!=null?K:a.$t("channel.pageSize"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[t(Pe,{modelValue:l.pageSize,"onUpdate:modelValue":b=>l.pageSize=b,min:1,max:200},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])]}),_:2},1032,["label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","model-value"])}}});var Ll=pl(Bl,[["__scopeId","data-v-038025de"]]);const zl={class:"mb-3"},Fl={class:"app-block mt-3"},Xl=Ae({setup(w){const{t:_}=ol(),v=f({}),B=f(),V=f(),U=f([]),L=f([]),$=f(!1),S=f(!1),E=f(),G=H(()=>Le(U.value).map(i=>i.id)),z=f(!1),I=f(),q=async()=>{$.value=!0;try{U.value=await Oe(Be(le({},hl(v.value)),{Q_OrderBy:B.value})),z.value=Object.values(v.value).filter(i=>i!==void 0&&i!=="").length>0||B.value!==void 0,z.value||(U.value=Qe(U.value))}finally{$.value=!1}};Ee(q);const u=({column:i,prop:c,order:k})=>{var T;c?B.value=((T=i.sortBy)!=null?T:c)+(k==="descending"?"_desc":""):B.value=void 0,q()},J=()=>q(),X=()=>{V.value.clearSort(),fl(v.value),B.value=void 0,q()},O=i=>{E.value=void 0,I.value=i,S.value=!0},Y=i=>{E.value=i,I.value=null,S.value=!0},Z=async i=>{await Ne(i),q(),ul.success(_("success"))},ee=async(i,c)=>{const k=vl(i,Le(U.value),c);await $l(k),await q(),i.forEach(T=>{V.value.toggleRowSelection(bl(U.value,a=>a.id===T.id))})};return(i,c)=>{const k=h("el-button"),T=h("el-popconfirm"),a=h("el-table-column"),g=h("el-icon"),C=h("el-table"),p=rl("loading");return s(),M("div",null,[ae("div",zl,[t(e(ql),{params:v.value,onSearch:J,onReset:X},{default:n(()=>[t(e(Cl),{label:i.$t("channel.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),ae("div",null,[t(k,{type:"primary",disabled:e(R)("channel:create"),icon:e(nl),onClick:c[0]||(c[0]=r=>O(void 0))},{default:n(()=>[j(A(i.$t("add")),1)]),_:1},8,["disabled","icon"]),t(T,{title:i.$t("confirmDelete"),onConfirm:c[1]||(c[1]=r=>Z(L.value.map(Q=>Q.id)))},{reference:n(()=>[t(k,{disabled:L.value.length<=0||e(R)("channel:delete"),icon:e(sl)},{default:n(()=>[j(A(i.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),t(Il,{disabled:L.value.length<=0||z.value||e(R)("org:update"),onMove:c[2]||(c[2]=r=>ee(L.value,r)),class:"ml-2"},null,8,["disabled"]),t(e(kl),{name:"channel",class:"ml-2"})]),ae("div",Fl,[dl((s(),m(C,{ref_key:"table",ref:V,"row-key":"id","default-expand-all":"",data:U.value,onSelectionChange:c[3]||(c[3]=r=>L.value=r),onRowDblclick:c[4]||(c[4]=r=>Y(r.id)),onSortChange:u},{default:n(()=>[t(e(Ul),{name:"channel"},{default:n(()=>[t(a,{type:"selection",width:"45"}),t(a,{property:"name",label:i.$t("channel.name"),sortable:"custom","show-overflow-tooltip":""},{default:n(({row:r})=>[j(A(z.value?r.names.join(" / "):r.name),1)]),_:1},8,["label"]),t(a,{property:"alias",label:i.$t("channel.alias"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),t(a,{property:"channelModel.name",label:i.$t("channel.channelModel"),display:"none",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),t(a,{property:"articleModel.name",label:i.$t("channel.articleModel"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),t(a,{property:"nav",label:i.$t("channel.nav")},{default:n(({row:r})=>[r.nav?(s(),m(g,{key:0,class:"text-primary"},{default:n(()=>[t(e(il))]),_:1})):(s(),m(g,{key:1,class:"text-secondary"},{default:n(()=>[t(e(ml))]),_:1}))]),_:1},8,["label"]),t(a,{property:"id",label:"ID",width:"64",sortable:"custom"}),t(a,{label:i.$t("table.action")},{default:n(({row:r})=>[t(k,{type:"text",disabled:e(R)("channel:create"),onClick:Q=>O(r),size:"small"},{default:n(()=>[j(A(i.$t("addChild")),1)]),_:2},1032,["disabled","onClick"]),t(k,{type:"text",disabled:e(R)("channel:update"),onClick:Q=>Y(r.id),size:"small"},{default:n(()=>[j(A(i.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),t(T,{title:i.$t("confirmDelete"),onConfirm:Q=>Z([r.id])},{reference:n(()=>[t(k,{type:"text",disabled:e(R)("channel:delete"),size:"small"},{default:n(()=>[j(A(i.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[p,$.value]])]),t(Ll,{modelValue:S.value,"onUpdate:modelValue":c[5]||(c[5]=r=>S.value=r),beanId:E.value,beanIds:e(G),parent:I.value,onFinished:q},null,8,["modelValue","beanId","beanIds","parent"])])}}});export{Xl as default};
