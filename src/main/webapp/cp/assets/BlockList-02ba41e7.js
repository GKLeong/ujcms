import{d as N,r as k,a as g,c as f,e as q,w as l,i as n,h as e,I as W,a8 as Q,k as v,t as p,a7 as j,g as H,u as T,X as J,o as X,b as G,j as z,f as K,aD as Y,aJ as Z,E as x,aL as ee,as as B,a5 as le,a2 as ae}from"./index-285670b0.js";import{P as te,Q as ue,R as oe,S as ie,T as se,U as A,a as de,V as re}from"./config-43502fd6.js";import{a as ne,_ as me,b as be,c as pe}from"./QueryItem.vue_vue_type_script_setup_true_lang-c40055fe.js";import{_ as fe}from"./ListMove.vue_vue_type_script_setup_true_lang-591ffc50.js";import{_ as ve}from"./DialogForm.vue_vue_type_script_setup_true_lang-2cec4ef8.js";import{_ as ge}from"./LabelTip.vue_vue_type_script_setup_true_lang-3e1cb478.js";const $e={name:"BlockForm"},ke=N({...$e,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(M){const C=k(),a=k({});return(t,u)=>{const h=g("el-input"),d=g("el-form-item"),r=g("el-col"),_=g("el-radio"),S=g("el-radio-group"),b=g("el-switch"),I=g("el-input-number"),y=g("el-row");return f(),q(ve,{values:a.value,"onUpdate:values":u[21]||(u[21]=V=>a.value=V),name:t.$t("menu.config.block"),"query-bean":n(oe),"create-bean":n(ie),"update-bean":n(se),"delete-bean":n(A),"bean-id":M.beanId,"bean-ids":M.beanIds,focus:C.value,"init-values":()=>({scope:0,withLinkUrl:!0,linkUrlRequired:!0,withSubtitle:!1,subtitleRequired:!1,withDescription:!1,descriptionRequired:!1,withImage:!1,imageRequired:!1,imageWidth:300,imageHeight:200,withMobileImage:!1,mobileImageRequired:!1,mobileImageWidth:300,mobileImageHeight:200,withVideo:!1,videoRequired:!1,enabled:!0,recommendable:!0}),"to-values":V=>({...V}),perms:"block","model-value":M.modelValue,"onUpdate:modelValue":u[22]||(u[22]=V=>t.$emit("update:modelValue",V)),onFinished:u[23]||(u[23]=()=>t.$emit("finished"))},{default:l(({bean:V})=>[e(y,null,{default:l(()=>[e(r,{span:24},{default:l(()=>[e(d,{prop:"name",label:t.$t("block.name"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(h,{ref_key:"focus",ref:C,modelValue:a.value.name,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value.name=o),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(d,{prop:"alias",label:t.$t("block.alias"),rules:[{required:!0,message:()=>t.$t("v.required")},{pattern:/^[\u4E00-\u9FA5\w-]*$/,message:()=>t.$t("block.error.aliasPattern")},{asyncValidator:async(o,D,U)=>{if(D!==V.alias&&await n(te)(D,a.value.scope)){U(t.$t("block.error.aliasExist"));return}U()}}]},{default:l(()=>[e(h,{modelValue:a.value.alias,"onUpdate:modelValue":u[1]||(u[1]=o=>a.value.alias=o),maxlength:"50"},null,8,["modelValue"])]),_:2},1032,["label","rules"])]),_:2},1024),e(r,{span:24},{default:l(()=>[e(d,{prop:"scope",label:t.$t("block.scope"),rules:[{required:!0,message:()=>t.$t("v.required")},{asyncValidator:async(o,D,U)=>{if(D!==V.scope&&await n(ue)(a.value.scope)){U(t.$t("block.error.scopeNotAllowd"));return}U()}}]},{default:l(()=>[e(S,{modelValue:a.value.scope,"onUpdate:modelValue":u[2]||(u[2]=o=>a.value.scope=o)},{default:l(()=>[(f(),W(j,null,Q([0,2],o=>e(_,{key:o,label:o},{default:l(()=>[v(p(t.$t(`block.scope.${o}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:2},1032,["label","rules"])]),_:2},1024),e(r,{span:12},{default:l(()=>[e(d,{prop:"withLinkUrl",label:t.$t("block.withLinkUrl"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withLinkUrl,"onUpdate:modelValue":u[3]||(u[3]=o=>a.value.withLinkUrl=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"linkUrlRequired",label:t.$t("block.linkUrlRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.linkUrlRequired,"onUpdate:modelValue":u[4]||(u[4]=o=>a.value.linkUrlRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withSubtitle",label:t.$t("block.withSubtitle"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withSubtitle,"onUpdate:modelValue":u[5]||(u[5]=o=>a.value.withSubtitle=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"subtitleRequired",label:t.$t("block.subtitleRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.subtitleRequired,"onUpdate:modelValue":u[6]||(u[6]=o=>a.value.subtitleRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withDescription",label:t.$t("block.withDescription"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withDescription,"onUpdate:modelValue":u[7]||(u[7]=o=>a.value.withDescription=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"descriptionRequired",label:t.$t("block.descriptionRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.descriptionRequired,"onUpdate:modelValue":u[8]||(u[8]=o=>a.value.descriptionRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"withImage",label:t.$t("block.withImage"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withImage,"onUpdate:modelValue":u[9]||(u[9]=o=>a.value.withImage=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"imageRequired",label:t.$t("block.imageRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.imageRequired,"onUpdate:modelValue":u[10]||(u[10]=o=>a.value.imageRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),a.value.withImage?(f(),q(r,{key:0,span:12},{default:l(()=>[e(d,{prop:"imageWidth",label:t.$t("block.imageWidth"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(I,{modelValue:a.value.imageWidth,"onUpdate:modelValue":u[11]||(u[11]=o=>a.value.imageWidth=o),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):H("",!0),a.value.withImage?(f(),q(r,{key:1,span:12},{default:l(()=>[e(d,{prop:"imageHeight",label:t.$t("block.imageHeight"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(I,{modelValue:a.value.imageHeight,"onUpdate:modelValue":u[12]||(u[12]=o=>a.value.imageHeight=o),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):H("",!0),e(r,{span:12},{default:l(()=>[e(d,{prop:"withMobileImage",label:t.$t("block.withMobileImage"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withMobileImage,"onUpdate:modelValue":u[13]||(u[13]=o=>a.value.withMobileImage=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"mobileImageRequired",label:t.$t("block.mobileImageRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.mobileImageRequired,"onUpdate:modelValue":u[14]||(u[14]=o=>a.value.mobileImageRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),a.value.withMobileImage?(f(),q(r,{key:2,span:12},{default:l(()=>[e(d,{prop:"mobileImageWidth",label:t.$t("block.mobileImageWidth"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(I,{modelValue:a.value.mobileImageWidth,"onUpdate:modelValue":u[15]||(u[15]=o=>a.value.mobileImageWidth=o),min:16,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):H("",!0),a.value.withMobileImage?(f(),q(r,{key:3,span:12},{default:l(()=>[e(d,{prop:"mobileImageHeight",label:t.$t("block.mobileImageHeight"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(I,{modelValue:a.value.mobileImageHeight,"onUpdate:modelValue":u[16]||(u[16]=o=>a.value.mobileImageHeight=o),min:16,max:65535},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1})):H("",!0),e(r,{span:12},{default:l(()=>[e(d,{prop:"withVideo",label:t.$t("block.withVideo"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.withVideo,"onUpdate:modelValue":u[17]||(u[17]=o=>a.value.withVideo=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"videoRequired",label:t.$t("block.videoRequired"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.videoRequired,"onUpdate:modelValue":u[18]||(u[18]=o=>a.value.videoRequired=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"enabled",label:t.$t("block.enabled"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:l(()=>[e(b,{modelValue:a.value.enabled,"onUpdate:modelValue":u[19]||(u[19]=o=>a.value.enabled=o)},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(d,{prop:"recommendable",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(ge,{message:"block.recommendable"})]),default:l(()=>[e(b,{modelValue:a.value.recommendable,"onUpdate:modelValue":u[20]||(u[20]=o=>a.value.recommendable=o)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:2},1024)]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value"])}}}),Ve={class:"mb-3"},qe={class:"app-block mt-3"},ye={key:1},ce={key:1},we={name:"BlockList"},Se=N({...we,setup(M){const{t:C}=T(),a=k({}),t=k(),u=k(),h=k([]),d=k([]),r=k(!1),_=k(!1),S=k(),b=J(()=>h.value.map(s=>s.id)),I=k(!1),y=async()=>{r.value=!0;try{h.value=await de({...Y(a.value),Q_OrderBy:t.value}),I.value=Object.values(a.value).filter(s=>s!==void 0&&s!=="").length>0||t.value!==void 0}finally{r.value=!1}};X(y);const V=({column:s,prop:m,order:c})=>{var R;m?t.value=((R=s.sortBy)!=null?R:m)+(c==="descending"?"_desc":""):t.value=void 0,y()},o=()=>y(),D=()=>{u.value.clearSort(),Z(a.value),t.value=void 0,y()},U=()=>{S.value=void 0,_.value=!0},L=s=>{S.value=s,_.value=!0},E=async s=>{await A(s),y(),x.success(C("success"))},F=async(s,m)=>{const c=ee(s,h.value,m);await re(c.map(R=>R.id))};return(s,m)=>{const c=g("el-button"),R=g("el-popconfirm"),$=g("el-table-column"),w=g("el-tag"),P=g("el-table"),O=G("loading");return f(),W("div",null,[z("div",Ve,[e(n(me),{params:a.value,onSearch:o,onReset:D},{default:l(()=>[e(n(ne),{label:s.$t("block.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),z("div",null,[e(c,{type:"primary",disabled:n(B)("block:create"),icon:n(le),onClick:m[0]||(m[0]=()=>U())},{default:l(()=>[v(p(s.$t("add")),1)]),_:1},8,["disabled","icon"]),e(R,{title:s.$t("confirmDelete"),onConfirm:m[1]||(m[1]=()=>E(d.value.map(i=>i.id)))},{reference:l(()=>[e(c,{disabled:d.value.length<=0||n(B)("block:delete"),icon:n(ae)},{default:l(()=>[v(p(s.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(fe,{disabled:d.value.length<=0||I.value||n(B)("org:update"),class:"ml-2",onMove:m[2]||(m[2]=i=>F(d.value,i))},null,8,["disabled"]),e(n(be),{name:"block",class:"ml-2"})]),z("div",qe,[K((f(),q(P,{ref_key:"table",ref:u,data:h.value,onSelectionChange:m[3]||(m[3]=i=>d.value=i),onRowDblclick:m[4]||(m[4]=i=>L(i.id)),onSortChange:V},{default:l(()=>[e(n(pe),{name:"block"},{default:l(()=>[e($,{type:"selection",width:"45"}),e($,{property:"id",label:"ID",width:"64",sortable:"custom"}),e($,{property:"name",label:s.$t("block.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e($,{property:"alias",label:s.$t("block.alias"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e($,{property:"scope",label:s.$t("block.scope"),sortable:"custom",formatter:i=>s.$t(`block.scope.${i.scope}`)},{default:l(({row:i})=>[i.scope===2?(f(),q(w,{key:0,type:"success",size:"small"},{default:l(()=>[v(p(s.$t(`block.scope.${i.scope}`)),1)]),_:2},1024)):(f(),q(w,{key:1,type:"info",size:"small"},{default:l(()=>[v(p(s.$t(`block.scope.${i.scope}`)),1)]),_:2},1024))]),_:1},8,["label","formatter"]),e($,{property:"withSubtitle",label:s.$t("block.withSubtitle"),sortable:"custom",display:"none"},{default:l(({row:i})=>[e(w,{type:i.withSubtitle?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.withSubtitle?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"withDescription",label:s.$t("block.withDescription"),display:"none",sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.withDescription?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.withDescription?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"withImage",label:s.$t("block.withImage"),sortable:"custom"},{default:l(({row:i})=>[i.withImage?(f(),W("span",ye,p(`${i.imageWidth} * ${i.imageHeight}`),1)):(f(),q(w,{key:0,type:i.withImage?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.withImage?"yes":"no")),1)]),_:2},1032,["type"]))]),_:1},8,["label"]),e($,{property:"withMobileImage",label:s.$t("block.withMobileImage"),sortable:"custom","min-width":"120",display:"none"},{default:l(({row:i})=>[i.withMobileImage?(f(),W("span",ce,p(`${i.mobileImageWidth} * ${i.mobileImageHeight}`),1)):(f(),q(w,{key:0,type:i.withMobileImage?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.withMobileImage?"yes":"no")),1)]),_:2},1032,["type"]))]),_:1},8,["label"]),e($,{property:"recommendable",label:s.$t("block.recommendable"),sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.recommendable?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.recommendable?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{property:"enabled",label:s.$t("block.enabled"),sortable:"custom"},{default:l(({row:i})=>[e(w,{type:i.enabled?"success":"info",size:"small"},{default:l(()=>[v(p(s.$t(i.enabled?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e($,{label:s.$t("table.action")},{default:l(({row:i})=>[e(c,{type:"primary",disabled:n(B)("block:update"),size:"small",link:"",onClick:()=>L(i.id)},{default:l(()=>[v(p(s.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(R,{title:s.$t("confirmDelete"),onConfirm:()=>E([i.id])},{reference:l(()=>[e(c,{type:"primary",disabled:n(B)("block:delete"),size:"small",link:""},{default:l(()=>[v(p(s.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[O,r.value]])]),e(ke,{modelValue:_.value,"onUpdate:modelValue":m[5]||(m[5]=i=>_.value=i),"bean-id":S.value,"bean-ids":n(b),onFinished:y},null,8,["modelValue","bean-id","bean-ids"])])}}});export{Se as default};
