import{d as Q,r as m,a as c,c as U,e as L,w as t,i,h as l,I as H,a8 as se,a7 as J,p as te,u as X,X as W,v as oe,o as Y,V as I,j as D,g as Z,k as C,t as P,E as x,b as ne,f as ue,aD as ie,aJ as de,aL as re,as as q,a5 as me,a2 as pe}from"./index-285670b0.js";import{C as ee,D as ce,E as fe,F as le,G as ve,H as be,f as _e,I as ye}from"./user-d25c6116.js";import{a as K,_ as ge,b as $e,c as Ve}from"./QueryItem.vue_vue_type_script_setup_true_lang-c40055fe.js";import{_ as ke}from"./ListMove.vue_vue_type_script_setup_true_lang-591ffc50.js";import{_ as he}from"./DialogForm.vue_vue_type_script_setup_true_lang-2cec4ef8.js";import{_ as ae}from"./LabelTip.vue_vue_type_script_setup_true_lang-3e1cb478.js";import{t as Ce}from"./tree-73f11865.js";import{g as Pe}from"./content-214478a8.js";const we={name:"GroupForm"},Ae=Q({...we,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(w){const A=m(),p=m({});return(u,r)=>{const $=c("el-input"),_=c("el-form-item"),V=c("el-switch"),v=c("el-option"),k=c("el-select");return U(),L(he,{values:p.value,"onUpdate:values":r[4]||(r[4]=a=>p.value=a),name:u.$t("menu.user.group"),"query-bean":i(ee),"create-bean":i(ce),"update-bean":i(fe),"delete-bean":i(le),"bean-id":w.beanId,"bean-ids":w.beanIds,focus:A.value,"init-values":()=>({type:2,allAccessPermission:!0}),"to-values":a=>({...a}),"disable-delete":a=>a.id<=10,perms:"group","model-value":w.modelValue,"onUpdate:modelValue":r[5]||(r[5]=a=>u.$emit("update:modelValue",a)),onFinished:r[6]||(r[6]=()=>u.$emit("finished"))},{default:t(({})=>[l(_,{prop:"name",label:u.$t("group.name"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:t(()=>[l($,{ref_key:"focus",ref:A,modelValue:p.value.name,"onUpdate:modelValue":r[0]||(r[0]=a=>p.value.name=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),l(_,{prop:"description",label:u.$t("group.description")},{default:t(()=>[l($,{modelValue:p.value.description,"onUpdate:modelValue":r[1]||(r[1]=a=>p.value.description=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["label"]),l(_,{prop:"allAccessPermission"},{label:t(()=>[l(ae,{message:"group.allAccessPermission"})]),default:t(()=>[l(V,{modelValue:p.value.allAccessPermission,"onUpdate:modelValue":r[2]||(r[2]=a=>p.value.allAccessPermission=a)},null,8,["modelValue"])]),_:1}),l(_,{prop:"type",label:u.$t("group.type"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:t(()=>[l(k,{modelValue:p.value.type,"onUpdate:modelValue":r[3]||(r[3]=a=>p.value.type=a),disabled:p.value.type===1},{default:t(()=>[(U(),H(J,null,se([1,2],a=>l(v,{key:a,disabled:a===1,label:u.$t(`group.type.${a}`),value:a},null,8,["disabled","label","value"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","rules"])]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","disable-delete","model-value"])}}}),De={class:"border-t"},Ue={class:"flex justify-between items-center"},qe={name:"UserPermissionForm"},Ge=Q({...qe,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null}},emits:{"update:modelValue":null,finished:null},setup(w,{emit:A}){const p=w,{beanId:u,modelValue:r}=te(p),{t:$}=X(),_=m(),V=m({}),v=m({}),k=m(!1),a=m(!0),N=m(!1),g=m(),y=m([]),B=W(()=>I.rank>V.value.rank),R=async()=>{(u==null?void 0:u.value)!=null&&(V.value=await ee(u.value),v.value={...V.value})},T=async()=>{y.value=Ce(await Pe())},z=async()=>{var d;if((u==null?void 0:u.value)!=null){const e=await be(u.value);(d=g.value)==null||d.setCheckedKeys([]),e.forEach(s=>{var o;(o=g.value)==null||o.setChecked(s,!0,!1)})}};oe(r,()=>{r.value&&(R(),z())}),Y(()=>{T()});const G=(d,e,s,o)=>{s.forEach(f=>{f.children&&(e.getNode(f[o!=null?o:"key"]).expanded=d,G(d,e,f.children,o))})},j=(d,e,s,o)=>{e.setCheckedKeys(d?s.map(f=>f[o!=null?o:"key"]):[])},S=()=>{_.value.validate(async d=>{if(d){k.value=!0;try{await ve(v.value),A("finished"),A("update:modelValue",!1),x.success($("success"))}finally{k.value=!1}}})},E=()=>{g.value!=null&&(v.value.accessPermissions=[...g.value.getCheckedNodes(),...g.value.getHalfCheckedNodes()].map(d=>d.id))};return(d,e)=>{const s=c("el-switch"),o=c("el-form-item"),f=c("el-checkbox"),h=c("el-tree"),M=c("el-form"),O=c("el-tag"),F=c("el-button"),n=c("el-drawer");return U(),L(n,{title:d.$t("permissionSettings"),"model-value":w.modelValue,size:414,"onUpdate:modelValue":e[8]||(e[8]=b=>d.$emit("update:modelValue",b))},{default:t(()=>[l(M,{ref_key:"form",ref:_,model:v.value,disabled:i(B),"label-width":"150px"},{default:t(()=>[l(o,{prop:"allAccessPermission"},{label:t(()=>[l(ae,{message:"group.allAccessPermission",help:""})]),default:t(()=>[l(s,{modelValue:v.value.allAccessPermission,"onUpdate:modelValue":e[0]||(e[0]=b=>v.value.allAccessPermission=b)},null,8,["modelValue"])]),_:1}),v.value.allAccessPermission?Z("",!0):(U(),H(J,{key:0},[D("div",De,[l(f,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=b=>a.value=b),label:d.$t("expand/collapse"),onChange:e[2]||(e[2]=b=>G(b,g.value,y.value,"id"))},null,8,["modelValue","label"]),l(f,{modelValue:N.value,"onUpdate:modelValue":e[3]||(e[3]=b=>N.value=b),label:d.$t("checkAll/uncheckAll"),onChange:e[4]||(e[4]=b=>{j(b,g.value,y.value,"id"),E()})},null,8,["modelValue","label"])]),l(h,{ref_key:"accessPermissionTree",ref:g,data:y.value,"node-key":"id",props:{label:"name"},class:"border rounded","default-expand-all":"","show-checkbox":"",onCheck:e[5]||(e[5]=()=>E())},null,8,["data"])],64))]),_:1},8,["model","disabled"])]),footer:t(()=>[D("div",Ue,[D("div",null,[l(O,null,{default:t(()=>{var b;return[C(P((b=v.value)==null?void 0:b.name),1)]}),_:1})]),D("div",null,[l(F,{onClick:e[6]||(e[6]=()=>d.$emit("update:modelValue",!1))},{default:t(()=>[C(P(d.$t("cancel")),1)]),_:1}),l(F,{type:"primary",loading:k.value,disabled:i(B),onClick:e[7]||(e[7]=()=>S())},{default:t(()=>[C(P(d.$t("save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["title","model-value"])}}}),Se={class:"mb-3"},Ee={class:"app-block mt-3"},Ie={name:"GroupList"},Me=Q({...Ie,setup(w){const{t:A}=X(),p=m({}),u=m(),r=m(),$=m([]),_=m([]),V=m(!1),v=m(!1),k=m(!1),a=m(),N=W(()=>$.value.map(e=>e.id)),g=m(!1),y=async()=>{V.value=!0;try{$.value=await _e({...ie(p.value),Q_OrderBy:u.value}),g.value=Object.values(p.value).filter(e=>e!==void 0&&e!=="").length>0||u.value!==void 0}finally{V.value=!1}};Y(y);const B=({column:e,prop:s,order:o})=>{var f;s?u.value=((f=e.sortBy)!=null?f:s)+(o==="descending"?"_desc":""):u.value=void 0,y()},R=()=>y(),T=()=>{r.value.clearSort(),de(p.value),u.value=void 0,y()},z=()=>{a.value=void 0,v.value=!0},G=e=>{a.value=e,v.value=!0},j=e=>{a.value=e,k.value=!0},S=e=>e>10,E=async e=>{const s=e.filter(o=>S(o));s.length>0&&(await le(s),y(),x.success(A("success")))},d=async(e,s)=>{const o=re(e,$.value,s);await ye(o.map(f=>f.id))};return(e,s)=>{const o=c("el-button"),f=c("el-popconfirm"),h=c("el-table-column"),M=c("el-tag"),O=c("el-table"),F=ne("loading");return U(),H("div",null,[D("div",Se,[l(i(ge),{params:p.value,onSearch:R,onReset:T},{default:t(()=>[l(i(K),{label:e.$t("group.name"),name:"Q_Contains_name"},null,8,["label"]),l(i(K),{label:e.$t("group.description"),name:"Q_Contains_description"},null,8,["label"])]),_:1},8,["params"])]),D("div",null,[l(o,{type:"primary",disabled:i(q)("group:create"),icon:i(me),onClick:z},{default:t(()=>[C(P(e.$t("add")),1)]),_:1},8,["disabled","icon"]),l(f,{title:e.$t("confirmDelete"),onConfirm:s[0]||(s[0]=()=>E(_.value.map(n=>n.id)))},{reference:t(()=>[l(o,{disabled:_.value.filter(n=>S(n.id)).length<=0||i(q)("group:delete"),icon:i(pe)},{default:t(()=>[C(P(e.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),l(ke,{class:"ml-2",disabled:_.value.length<=0||g.value||i(q)("org:update"),onMove:s[1]||(s[1]=n=>d(_.value,n))},null,8,["disabled"]),l(i($e),{name:"group",class:"ml-2"})]),D("div",Ee,[ue((U(),L(O,{ref_key:"table",ref:r,data:$.value,onSelectionChange:s[2]||(s[2]=n=>_.value=n),onRowDblclick:s[3]||(s[3]=n=>G(n.id)),onSortChange:B},{default:t(()=>[l(i(Ve),{name:"group"},{default:t(()=>[l(h,{type:"selection",width:"50"}),l(h,{property:"id",label:"ID",width:"64",sortable:"custom"}),l(h,{property:"name",label:e.$t("group.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),l(h,{property:"description",label:e.$t("group.description"),"min-width":"150",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),l(h,{property:"allAccessPermission",label:e.$t("group.allAccessPermission"),sortable:"custom"},{default:t(({row:n})=>[l(M,{type:n.allAccessPermission?"success":"info",size:"small"},{default:t(()=>[C(P(e.$t(n.allAccessPermission?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),l(h,{property:"type",label:e.$t("group.type"),sortable:"custom","show-overflow-tooltip":"",formatter:n=>e.$t(`group.type.${n.type}`)},null,8,["label","formatter"]),l(h,{label:e.$t("table.action")},{default:t(({row:n})=>[l(o,{type:"primary",disabled:i(q)("group:update"),size:"small",link:"",onClick:b=>G(n.id)},{default:t(()=>[C(P(e.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),i(I).epRank>0||i(I).epDisplay?(U(),L(o,{key:0,type:"primary",disabled:i(q)("group:updatePermission")||i(I).epRank<=0,title:i(I).epRank<=0?e.$t("error.enterprise.short"):void 0,size:"small",link:"",onClick:()=>j(n.id)},{default:t(()=>[C(P(e.$t("permissionSettings")),1)]),_:2},1032,["disabled","title","onClick"])):Z("",!0),l(f,{title:e.$t("confirmDelete"),onConfirm:()=>E([n.id])},{reference:t(()=>[l(o,{type:"primary",disabled:!S(n.id)||i(q)("group:delete"),size:"small",link:""},{default:t(()=>[C(P(e.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[F,V.value]])]),l(Ae,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=n=>v.value=n),"bean-id":a.value,"bean-ids":i(N),onFinished:y},null,8,["modelValue","bean-id","bean-ids"]),l(Ge,{modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=n=>k.value=n),"bean-id":a.value,onFinished:y},null,8,["modelValue","bean-id"])])}}});export{Me as default};
