var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var O=(a,r,d)=>r in a?W(a,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[r]=d,F=(a,r)=>{for(var d in r||(r={}))Z.call(r,d)&&O(a,d,r[d]);if(N)for(var d of N(r))x.call(r,d)&&O(a,d,r[d]);return a},R=(a,r)=>X(a,Y(r));import{g as z,D as f,m as p,o as h,j as P,w as t,n as e,q as U,A as E,F as L,K as S,y as q,u as ee,i as ae,L as le,x as j,k as m,ac as oe,aj as te,J as se,ai as re,ab as ne}from"./vendor.b1cbf8b1.js";import{C as de,D as ue,E as me,F as Q,_ as ie,p as B,B as pe,d as be,r as ce,n as fe,G as ge}from"./index.db1e2d33.js";import{_ as $e,b as ve,a as ye,c as Ve}from"./QueryItem.4ba55cc9.js";import{_ as _e}from"./ListMove.d313af6b.js";import{D as he}from"./DialogForm.61b75d09.js";const Se=z({components:{DialogForm:he},props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(){const a=f();return{queryStorage:de,createStorage:ue,updateStorage:me,deleteStorage:Q,focus:a}}});function qe(a,r,d,V,k,w){const b=p("el-input"),i=p("el-form-item"),v=p("el-radio"),_=p("el-radio-group"),C=p("el-option"),I=p("el-select"),g=p("dialog-form");return h(),P(g,{name:a.$t("menu.system.storage"),queryBean:a.queryStorage,createBean:a.createStorage,updateBean:a.updateStorage,deleteBean:a.deleteStorage,beanId:a.beanId,beanIds:a.beanIds,focus:a.focus,initValues:()=>({scope:0,type:1,mode:0}),toValues:s=>F({},s),perms:"storage","model-value":a.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>a.$emit("update:modelValue",s)),onFinished:r[1]||(r[1]=s=>a.$emit("finished"))},{default:t(({values:s})=>[e(i,{prop:"name",label:a.$t("storage.name"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:t(()=>[e(b,{modelValue:s.name,"onUpdate:modelValue":o=>s.name=o,ref:"focus",maxlength:"50"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),e(i,{prop:"description",label:a.$t("storage.description")},{default:t(()=>[e(b,{modelValue:s.description,"onUpdate:modelValue":o=>s.description=o,maxlength:"255"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),e(i,{prop:"scope",label:a.$t("storage.scope"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:t(()=>[e(_,{modelValue:s.scope,"onUpdate:modelValue":o=>s.scope=o},{default:t(()=>[(h(),U(L,null,E([0,1,2],o=>e(v,{key:o,label:o},{default:t(()=>[S(q(a.$t(`storage.scope.${o}`)),1)]),_:2},1032,["label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),e(i,{prop:"type",label:a.$t("storage.type"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:t(()=>[e(_,{modelValue:s.type,"onUpdate:modelValue":o=>s.type=o},{default:t(()=>[(h(),U(L,null,E([1,2],o=>e(v,{key:o,label:o},{default:t(()=>[S(q(a.$t(`storage.type.${o}`)),1)]),_:2},1032,["label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),e(i,{prop:"mode",label:a.$t("storage.mode"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:t(()=>[e(I,{modelValue:s.mode,"onUpdate:modelValue":o=>s.mode=o},{default:t(()=>[(h(),U(L,null,E([0],o=>e(C,{key:o,value:o,label:a.$t(`storage.mode.${o}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),e(i,{prop:"path",label:a.$t("storage.path")},{default:t(()=>[e(b,{modelValue:s.path,"onUpdate:modelValue":o=>s.path=o,maxlength:"255"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),e(i,{prop:"url",label:a.$t("storage.url")},{default:t(()=>[e(b,{modelValue:s.url,"onUpdate:modelValue":o=>s.url=o,maxlength:"255"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","model-value"])}var we=ie(Se,[["render",qe]]);const Be={class:"mb-3"},Ie={class:"app-block mt-3"},Le=z({setup(a){const{t:r}=ee(),d=f({}),V=f(),k=f(),w=f([]),b=f([]),i=f(!1),v=f(!1),_=f(),C=ae(()=>w.value.map(l=>l.id)),I=f(!1),g=async()=>{i.value=!0;try{w.value=await pe(R(F({},be(d.value)),{Q_OrderBy:V.value})),I.value=Object.values(d.value).filter(l=>l!==void 0&&l!=="").length>0||V.value!==void 0}finally{i.value=!1}};le(g);const s=({column:l,prop:u,order:$})=>{var y;u?V.value=((y=l.sortBy)!=null?y:u)+($==="descending"?"_desc":""):V.value=void 0,g()},o=()=>g(),G=()=>{k.value.clearSort(),ce(d.value),V.value=void 0,g()},J=()=>{_.value=void 0,v.value=!0},A=l=>{_.value=l,v.value=!0},M=async l=>{await Q(l),g(),se.success(r("success"))},K=async(l,u)=>{const $=fe(l,w.value,u);await ge($.map(y=>y.id))};return(l,u)=>{const $=p("el-button"),y=p("el-popconfirm"),c=p("el-table-column"),T=p("el-table"),H=re("loading");return h(),U("div",null,[j("div",Be,[e(m($e),{params:d.value,onSearch:o,onReset:G},{default:t(()=>[e(m(ye),{label:l.$t("storage.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),j("div",null,[e($,{type:"primary",disabled:m(B)("storage:create"),icon:m(oe),onClick:J},{default:t(()=>[S(q(l.$t("add")),1)]),_:1},8,["disabled","icon"]),e(y,{title:l.$t("confirmDelete"),onConfirm:u[0]||(u[0]=n=>M(b.value.map(D=>D.id)))},{reference:t(()=>[e($,{disabled:b.value.length<=0||m(B)("storage:delete"),icon:m(ne)},{default:t(()=>[S(q(l.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(_e,{disabled:b.value.length<=0||I.value||m(B)("org:update"),onMove:u[1]||(u[1]=n=>K(b.value,n)),class:"ml-2"},null,8,["disabled"]),e(m(ve),{name:"storage",class:"ml-2"})]),j("div",Ie,[te((h(),P(T,{ref_key:"table",ref:k,data:w.value,onSelectionChange:u[2]||(u[2]=n=>b.value=n),onRowDblclick:u[3]||(u[3]=n=>A(n.id)),onSortChange:s},{default:t(()=>[e(m(Ve),{name:"storage"},{default:t(()=>[e(c,{type:"selection",width:"45"}),e(c,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(c,{property:"name",label:l.$t("storage.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"description",label:l.$t("storage.description"),sortable:"custom",display:"none","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"path",label:l.$t("storage.path"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"url",label:l.$t("storage.url"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"type",label:l.$t("storage.type"),sortable:"custom",formatter:n=>l.$t(`storage.type.${n.type}`)},null,8,["label","formatter"]),e(c,{property:"mode",label:l.$t("storage.mode"),sortable:"custom",formatter:n=>l.$t(`storage.mode.${n.mode}`)},null,8,["label","formatter"]),e(c,{property:"scope",label:l.$t("storage.scope"),sortable:"custom",formatter:n=>l.$t(`storage.scope.${n.scope}`)},null,8,["label","formatter"]),e(c,{label:l.$t("table.action")},{default:t(({row:n})=>[e($,{type:"text",disabled:m(B)("storage:update"),onClick:D=>A(n.id),size:"small"},{default:t(()=>[S(q(l.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(y,{title:l.$t("confirmDelete"),onConfirm:D=>M([n.id])},{reference:t(()=>[e($,{type:"text",disabled:m(B)("storage:delete"),size:"small"},{default:t(()=>[S(q(l.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[H,i.value]])]),e(we,{modelValue:v.value,"onUpdate:modelValue":u[4]||(u[4]=n=>v.value=n),beanId:_.value,beanIds:m(C),onFinished:g},null,8,["modelValue","beanId","beanIds"])])}}});export{Le as default};
