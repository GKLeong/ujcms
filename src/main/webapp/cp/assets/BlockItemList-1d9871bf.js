import{d as te,u as oe,r as i,a1 as V,v as ne,o as se,a as d,b as ie,c as f,e as y,w as o,h as l,I as de,ad as ce,ac as me,j as D,i as n,ah as b,aa as re,k as $,t as C,a7 as ue,f as be,g as q,av as pe,aB as ve,E as z,aJ as _e,_ as fe}from"./index-0b297134.js";import{a as ke}from"./config-a46f2ebe.js";import{E as ge,F as ye,t as Ie,G as he}from"./content-36f9a437.js";import{_ as we,a as Be,b as Ve,c as $e}from"./QueryItem.vue_vue_type_script_setup_true_lang-a71c7d8e.js";import{_ as Ce}from"./ListMove.vue_vue_type_script_setup_true_lang-05d5e01c.js";import{a as Le}from"./BlockItemForm.vue_vue_type_script_setup_true_lang-37df7ff5.js";import"./DialogForm.vue_vue_type_script_setup_true_lang-99772bc8.js";import"./FileListUpload.vue_vue_type_style_index_0_scoped_cd89d899_lang-19312f37.js";import"./vuedraggable.umd-be79d1d8.js";import"./BaseUpload-57db687e.js";/* empty css                                                                   */const Se={class:"mb-3"},De={class:"app-block mt-3"},Ne={name:"BlockItemList"},Ue=te({...Ne,setup(Ee){const{t:N}=oe(),I=i({}),k=i(),U=i(),p=i([]),g=i([]),L=i(!1),h=i(!1),S=i(),Q=V(()=>p.value.map(e=>e.id)),E=i(!1),w=i([]),r=i(),A=V(()=>w.value.find(e=>e.id===Number(r.value))),G=V(()=>p.value.map(e=>e.image)),J=V(()=>p.value.map(e=>e.mobileImage)),u=async()=>{L.value=!0;try{p.value=await ge({...pe(I.value),blockId:Number(r.value),Q_OrderBy:k.value}),E.value=Object.values(I.value).filter(e=>e!==void 0&&e!=="").length>0||k.value!==void 0}finally{L.value=!1}},T=async()=>{w.value=await ke(),r.value=String(w.value[0].id)};ne(r,()=>u()),se(async()=>{await T()});const H=({column:e,prop:t,order:v})=>{var _;t&&v?k.value=((_=e.sortBy)!=null?_:t)+(v==="descending"?"_desc":""):k.value=void 0,u()},K=()=>u(),W=()=>{U.value.clearSort(),ve(I.value),k.value=void 0,u()},X=()=>{S.value=void 0,h.value=!0},F=e=>{S.value=e,h.value=!0},M=async e=>{await ye(e),u(),z.success(N("success"))},O=async e=>{await Ie(e),u(),z.success(N("success"))},Y=async(e,t)=>{const v=_e(e,p.value,t);await he(v.map(_=>_.id))};return(e,t)=>{const v=d("el-tab-pane"),_=d("el-tabs"),Z=d("el-aside"),B=d("el-button"),P=d("el-popconfirm"),c=d("el-table-column"),R=d("el-image"),j=d("el-switch"),x=d("el-table"),ee=d("el-main"),ae=d("el-container"),le=ie("loading");return f(),y(ae,null,{default:o(()=>[l(Z,{width:"180px",class:"pr-3"},{default:o(()=>[l(_,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=m=>r.value=m),"tab-position":"left",stretch:"",class:"bg-white"},{default:o(()=>[(f(!0),de(me,null,ce(w.value,m=>(f(),y(v,{key:m.id,name:String(m.id),label:m.name},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(ee,{class:"p-0"},{default:o(()=>{var m;return[D("div",Se,[l(n(we),{params:I.value,onSearch:K,onReset:W},{default:o(()=>[l(n(Be),{label:e.$t("blockItem.title"),name:"Q_Contains_title"},null,8,["label"])]),_:1},8,["params"])]),D("div",null,[l(B,{type:"primary",disabled:!((m=A.value)!=null&&m.enabled)||n(b)("blockItem:create"),icon:n(re),onClick:t[1]||(t[1]=()=>X())},{default:o(()=>[$(C(e.$t("add")),1)]),_:1},8,["disabled","icon"]),l(P,{title:e.$t("confirmDelete"),onConfirm:t[2]||(t[2]=()=>O(g.value.map(a=>a.id)))},{reference:o(()=>[l(B,{disabled:g.value.length<=0||n(b)("blockItem:delete"),icon:n(ue)},{default:o(()=>[$(C(e.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),l(Ce,{disabled:g.value.length<=0||E.value||n(b)("org:update"),class:"ml-2",onMove:t[3]||(t[3]=a=>Y(g.value,a))},null,8,["disabled"]),l(n(Ve),{name:"blockItem",class:"ml-2"})]),D("div",De,[be((f(),y(x,{ref_key:"table",ref:U,data:p.value,onSelectionChange:t[4]||(t[4]=a=>g.value=a),onRowDblclick:t[5]||(t[5]=a=>F(a.id)),onSortChange:H},{default:o(()=>[l(n($e),{name:"blockItem"},{default:o(()=>[l(c,{type:"selection",width:"45"}),l(c,{property:"id",label:"ID",width:"64",sortable:"custom"}),l(c,{property:"title",label:e.$t("blockItem.title"),sortable:"custom","min-width":"200","show-overflow-tooltip":""},null,8,["label"]),l(c,{property:"image",label:e.$t("blockItem.image")},{default:o(({row:a,$index:s})=>[a.image?(f(),y(R,{key:0,src:a.image,fit:"contain","preview-src-list":G.value,"initial-index":s,"preview-teleported":"",class:"w-32 h-32"},null,8,["src","preview-src-list","initial-index"])):q("",!0)]),_:1},8,["label"]),l(c,{property:"mobileImage",label:e.$t("blockItem.mobileImage"),display:"none"},{default:o(({row:a,$index:s})=>[a.mobileImage?(f(),y(R,{key:0,src:a.mobileImage,fit:"contain","preview-src-list":J.value,"initial-index":s,"preview-teleported":"",class:"w-32 h-32"},null,8,["src","preview-src-list","initial-index"])):q("",!0)]),_:1},8,["label"]),l(c,{property:"targetBlank",label:e.$t("blockItem.targetBlank"),sortable:"custom",width:"120"},{default:o(({row:a})=>[l(j,{modelValue:a.targetBlank,"onUpdate:modelValue":s=>a.targetBlank=s,disabled:n(b)("blockItem:update"),onChange:s=>M({...a,targetBlank:s})},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"]),l(c,{property:"enabled",label:e.$t("enable"),sortable:"custom",width:"100"},{default:o(({row:a})=>[l(j,{modelValue:a.enabled,"onUpdate:modelValue":s=>a.enabled=s,disabled:n(b)("blockItem:update"),onChange:s=>M({...a,enabled:s})},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"]),l(c,{label:e.$t("table.action")},{default:o(({row:a})=>[l(B,{type:"primary",disabled:n(b)("blockItem:update"),size:"small",link:"",onClick:()=>F(a.id)},{default:o(()=>[$(C(e.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),l(P,{title:e.$t("confirmDelete"),onConfirm:()=>O([a.id])},{reference:o(()=>[l(B,{type:"primary",disabled:n(b)("blockItem:delete"),size:"small",link:""},{default:o(()=>[$(C(e.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[le,L.value]])]),l(Le,{modelValue:h.value,"onUpdate:modelValue":t[6]||(t[6]=a=>h.value=a),"bean-id":S.value,"bean-ids":Q.value,"block-id":Number(r.value),onFinished:u},null,8,["modelValue","bean-id","bean-ids","block-id"])]}),_:1})]),_:1})}}});const Je=fe(Ue,[["__scopeId","data-v-8c8fb9b7"]]);export{Je as default};
