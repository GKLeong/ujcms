import{d as Z,r as v,b as f,e as r,f as k,w as a,i as e,I as h,aa as O,a9 as M,j as d,l as F,t as q,p as de,u as oe,v as fe,h as U,k as J,m as be,Z as ie,E as ue,H as me,aq as Y,ae as se,au as ve,_ as ce,ac as Ve,o as ge,c as $e,g as _e,aD as ke,aE as Ue,aW as he,at as A,ak as Te,ah as Se}from"./index-DgUB5rOh.js";import{J as ne,K as Me,L as x,M as ye,c as we,q as qe,N as Ce}from"./config-1OSOhRPa.js";import{a as Ie,_ as Fe,b as Le,c as He}from"./QueryItem.vue_vue_type_script_setup_true_lang-B3tRvAfo.js";import{_ as De}from"./ListMove.vue_vue_type_script_setup_true_lang-DT7t1Mfu.js";import{_ as Ee}from"./DialogForm.vue_vue_type_script_setup_true_lang-Judg_DCV.js";import{g as pe,m as X}from"./data-BuK_qNWa.js";import{d as re}from"./vuedraggable.umd-Bo6dCesC.js";import{_ as ze}from"./FieldItem.vue_vue_type_script_setup_true_lang-CPZnZMpH.js";import{C as Oe}from"./content-DyUbEBXm.js";import"./sortable.esm-BmjBFecF.js";import"./Tinymce-OJzILWl4.js";import"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-DxiKxktv.js";import"./BaseUpload-iLwxKSlM.js";/* empty css                                                                   */const We=Z({name:"ModelForm",__name:"ModelForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},beanIds:{type:Array,required:!0},modelType:{type:String,required:!0}},emits:{"update:modelValue":null,finished:null},setup(H){const K=v(),l=v({});return(T,y)=>{const z=f("el-input"),n=f("el-form-item"),o=f("el-radio"),w=f("el-radio-group"),p=f("el-option"),$=f("el-select");return r(),k(Ee,{values:l.value,"onUpdate:values":y[3]||(y[3]=s=>l.value=s),name:T.$t("menu.config.model"),"query-bean":d(ne),"create-bean":d(Me),"update-bean":d(x),"delete-bean":d(ye),"bean-id":H.beanId,"bean-ids":H.beanIds,focus:K.value,"init-values":()=>({type:H.modelType,scope:0}),"to-values":s=>({...s}),"disable-delete":s=>s.id<=10,perms:"model","model-value":H.modelValue,"onUpdate:modelValue":y[4]||(y[4]=s=>T.$emit("update:modelValue",s)),onFinished:y[5]||(y[5]=()=>T.$emit("finished"))},{default:a(({})=>[e(n,{prop:"name",label:T.$t("model.name"),rules:{required:!0,message:()=>T.$t("v.required")}},{default:a(()=>[e(z,{ref_key:"focus",ref:K,modelValue:l.value.name,"onUpdate:modelValue":y[0]||(y[0]=s=>l.value.name=s),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(n,{prop:"scope",label:T.$t("model.scope"),rules:{required:!0,message:()=>T.$t("v.required")}},{default:a(()=>[e(w,{modelValue:l.value.scope,"onUpdate:modelValue":y[1]||(y[1]=s=>l.value.scope=s),disabled:l.value.id<10},{default:a(()=>[(r(),h(M,null,O([0,2],s=>e(o,{key:s,value:s},{default:a(()=>[F(q(T.$t("model.scope.".concat(s))),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","rules"]),e(n,{prop:"type",label:T.$t("model.type")},{default:a(()=>[e($,{modelValue:l.value.type,"onUpdate:modelValue":y[2]||(y[2]=s=>l.value.type=s),disabled:""},{default:a(()=>[e(p,{value:H.modelType,label:T.$t("model.type.".concat(H.modelType))},null,8,["value","label"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","disable-delete","model-value"])}}}),Ke={class:"mt-3"},Ne=Z({name:"ModelSystemFields",__name:"ModelSystemFields",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null}},emits:{"update:modelValue":null},setup(H,{emit:K}){const l=H,T=K,{beanId:y,modelValue:z}=de(l),{t:n}=oe(),o=v({}),w=v(!1),p=v([]),$=v([]);fe(z,async()=>{var i;if(z.value&&y.value){o.value=await ne(y.value);const L=pe()[o.value.type];p.value=X(L.mains.filter(g=>{var c;return ie.epRank>=((c=g.epRank)!=null?c:0)}),o.value.mains,o.value.type),((i=L.asides)==null?void 0:i.length)>0&&($.value=X(L.asides.filter(g=>{var c;return ie.epRank>=((c=g.epRank)!=null?c:0)}),o.value.asides,o.value.type))}});const s=async()=>{w.value=!0;try{p.value=p.value.map(i=>({...i,name:i.name===""?null:i.name})),$.value=$.value.map(i=>({...i,name:i.name===""?null:i.name})),await x({...o.value,mains:JSON.stringify(p.value),asides:JSON.stringify($.value)}),ue.success(n("success"))}finally{w.value=!1,T("update:modelValue",!1)}},C=()=>{var L;const i=pe()[o.value.type];p.value=X(i.mains,null,o.value.type),((L=i.asides)==null?void 0:L.length)>0&&($.value=X(i.asides,null,o.value.type))};return(i,L)=>{const g=f("el-table-column"),c=f("el-input"),t=f("el-switch"),D=f("el-option"),N=f("el-select"),P=f("el-checkbox"),j=f("el-table"),_=f("el-button"),S=f("el-form"),W=f("el-dialog");return r(),k(W,{title:i.$t("model.fun.systemFields"),"model-value":H.modelValue,top:"5vh",width:"1024px","onUpdate:modelValue":L[0]||(L[0]=m=>i.$emit("update:modelValue",m))},{default:a(()=>[e(S,null,{default:a(()=>[e(j,{data:p.value},{default:a(()=>[e(g,{prop:"code",label:i.$t("model.field.code"),"min-width":"110"},null,8,["label"]),e(g,{prop:"name",label:i.$t("model.field.name"),"min-width":"140"},{default:a(({row:m})=>[e(c,{modelValue:m.name,"onUpdate:modelValue":u=>m.name=u,placeholder:i.$t(m.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(g,{prop:"show",label:i.$t("model.field.show")},{default:a(({row:m})=>[e(t,{modelValue:m.show,"onUpdate:modelValue":u=>m.show=u,disabled:m.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(g,{prop:"double",label:i.$t("model.field.double")},{default:a(({row:m})=>[e(t,{modelValue:m.double,"onUpdate:modelValue":u=>m.double=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(g,{prop:"required",label:i.$t("model.field.required")},{default:a(({row:m})=>[e(t,{modelValue:m.required,"onUpdate:modelValue":u=>m.required=u,disabled:m.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(g,{label:i.$t("model.field.attribute"),"min-width":"180"},{default:a(({row:m})=>[m.type==="image"?(r(),h(M,{key:0},[e(c,{modelValue:m.imageHeight,"onUpdate:modelValue":u=>m.imageHeight=u,modelModifiers:{number:!0}},{prepend:a(()=>[F(q(i.$t("model.field.imageHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(c,{modelValue:m.imageWidth,"onUpdate:modelValue":u=>m.imageWidth=u,modelModifiers:{number:!0}},{prepend:a(()=>[F(q(i.$t("model.field.imageWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(N,{modelValue:m.imageMode,"onUpdate:modelValue":u=>m.imageMode=u,placeholder:i.$t("model.field.imageMode"),class:"w-full"},{default:a(()=>[(r(),h(M,null,O(["manual","cut","resize","none"],u=>e(D,{key:u,value:u,label:i.$t("model.field.imageMode.".concat(u))},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):m.type==="imageList"?(r(),h(M,{key:1},[e(c,{modelValue:m.imageMaxHeight,"onUpdate:modelValue":u=>m.imageMaxHeight=u,modelModifiers:{number:!0}},{prepend:a(()=>[F(q(i.$t("model.field.imageMaxHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(c,{modelValue:m.imageMaxWidth,"onUpdate:modelValue":u=>m.imageMaxWidth=u,modelModifiers:{number:!0}},{prepend:a(()=>[F(q(i.$t("model.field.imageMaxWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(N,{modelValue:m.imageListType,"onUpdate:modelValue":u=>m.imageListType=u,placeholder:i.$t("model.field.imageListType"),class:"w-full"},{default:a(()=>[(r(),h(M,null,O(["pictureCard","picture"],u=>e(D,{key:u,value:u,label:i.$t("model.field.imageListType.".concat(u))},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):m.type==="editor"?(r(),h(M,{key:2},[e(N,{modelValue:m.editorType,"onUpdate:modelValue":u=>m.editorType=u,placeholder:i.$t("model.field.editorType"),class:"w-full"},{default:a(()=>[(r(),h(M,null,O([1,2],u=>e(D,{key:u,value:u,label:i.$t("model.field.editorType.".concat(u))},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),e(P,{modelValue:m.editorSwitch,"onUpdate:modelValue":u=>m.editorSwitch=u},{default:a(()=>[F(q(i.$t("model.field.editorSwitch")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):U("",!0)]),_:1},8,["label"])]),_:1},8,["data"]),$.value.length>0?(r(),k(j,{key:0,data:$.value,class:"mt-5"},{default:a(()=>[e(g,{prop:"code",label:i.$t("model.field.code"),"min-width":"100"},null,8,["label"]),e(g,{prop:"name",label:i.$t("model.field.name"),"min-width":"120"},{default:a(({row:m})=>[e(c,{modelValue:m.name,"onUpdate:modelValue":u=>m.name=u,placeholder:i.$t(m.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(g,{prop:"show",label:i.$t("model.field.show")},{default:a(({row:m})=>[e(t,{modelValue:m.show,"onUpdate:modelValue":u=>m.show=u,disabled:m.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(g,{prop:"required",label:i.$t("model.field.required")},{default:a(({row:m})=>[e(t,{modelValue:m.required,"onUpdate:modelValue":u=>m.required=u,disabled:m.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["data"])):U("",!0),J("div",Ke,[e(_,{loading:w.value,type:"primary","native-type":"submit",onClick:be(s,["prevent"])},{default:a(()=>[F(q(i.$t("save")),1)]),_:1},8,["loading"]),e(_,{onClick:C},{default:a(()=>[F(q(i.$t("restoreInitialSettings")),1)]),_:1})])]),_:1})]),_:1},8,["title","model-value"])}}}),Be=Z({__name:"FieldAttribute",props:{selected:{type:Object,required:!0}},setup(H){const K=H,{selected:l}=de(K),T=v([]),y=v([]);me(async()=>{l.value.type==="date"&&!l.value.dateType&&(l.value.dateType="date"),l.value.type==="switch"&&!l.value.inactiveValue&&(l.value.inactiveValue="0"),l.value.type==="switch"&&!l.value.activeValue&&(l.value.activeValue="1"),["radio","checkbox"].includes(l.value.type)&&!l.value.checkStyle&&(l.value.checkStyle="default"),["checkbox","multipleSelect"].includes(l.value.type)&&!l.value.defaultValue&&(l.value.defaultValue=[]),["checkbox","multipleSelect"].includes(l.value.type)&&(l.value.multiple=!0),["radio","checkbox","select","multipleSelect"].includes(l.value.type)&&(T.value=await we())}),me(async()=>{l.value.dictTypeId!=null&&(y.value=await Oe({typeId:l.value.dictTypeId}))});const z=n=>{var o;l.value.defaultValue=l.value.multiple?[]:void 0,l.value.defaultValueKey=l.value.multiple?[]:void 0,l.value.dataType=((o=T.value.find(w=>w.id===n))==null?void 0:o.dataType)===1?"number":"string"};return(n,o)=>{const w=f("el-input"),p=f("el-form-item"),$=f("el-switch"),s=f("el-input-number"),C=f("el-option"),i=f("el-select"),L=f("el-color-picker"),g=f("el-radio-button"),c=f("el-radio-group");return r(),h(M,null,[e(p,{prop:"code",label:n.$t("model.field.code"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(w,{modelValue:d(l).code,"onUpdate:modelValue":o[0]||(o[0]=t=>d(l).code=t),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(p,{prop:"name",label:n.$t("model.field.name"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(w,{modelValue:d(l).name,"onUpdate:modelValue":o[1]||(o[1]=t=>d(l).name=t),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),["tinyEditor","textarea"].includes(d(l).type)?(r(),k(p,{key:0,prop:"clob",label:n.$t("model.field.clob")},{label:a(()=>[e(Y,{message:"model.field.clob",help:""})]),default:a(()=>[e($,{modelValue:d(l).clob,"onUpdate:modelValue":o[2]||(o[2]=t=>d(l).clob=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),e(p,{prop:"double",label:n.$t("model.field.double")},{default:a(()=>[e($,{modelValue:d(l).double,"onUpdate:modelValue":o[3]||(o[3]=t=>d(l).double=t)},null,8,["modelValue"])]),_:1},8,["label"]),["text","textarea","number","date","color","slider","switch","radio","checkbox","select","multipleSelect"].includes(d(l).type)?(r(),k(p,{key:1,prop:"required",label:n.$t("model.field.showInList")},{default:a(()=>[e($,{modelValue:d(l).showInList,"onUpdate:modelValue":o[4]||(o[4]=t=>d(l).showInList=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),e(p,{prop:"required",label:n.$t("model.field.required")},{default:a(()=>[e($,{modelValue:d(l).required,"onUpdate:modelValue":o[5]||(o[5]=t=>d(l).required=t)},null,8,["modelValue"])]),_:1},8,["label"]),["text","textarea","number","select","multipleSelect","videoUpload","audioUpload","fileUpload","tinyEditor"].includes(d(l).type)?(r(),k(p,{key:2,prop:"placeholder",label:n.$t("model.field.placeholder")},{default:a(()=>[e(w,{modelValue:d(l).placeholder,"onUpdate:modelValue":o[6]||(o[6]=t=>d(l).placeholder=t),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["text","textarea"].includes(d(l).type)?(r(),h(M,{key:3},[e(p,{prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e(w,{modelValue:d(l).defaultValue,"onUpdate:modelValue":o[7]||(o[7]=t=>d(l).defaultValue=t),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"minlength",label:n.$t("model.field.minlength")},{default:a(()=>[e(s,{modelValue:d(l).minlength,"onUpdate:modelValue":o[8]||(o[8]=t=>d(l).minlength=t),min:1},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"maxlength",label:n.$t("model.field.maxlength")},{default:a(()=>[e(s,{modelValue:d(l).maxlength,"onUpdate:modelValue":o[9]||(o[9]=t=>d(l).maxlength=t),min:1},null,8,["modelValue"])]),_:1},8,["label"])],64)):U("",!0),["textarea"].includes(d(l).type)?(r(),k(p,{key:4,prop:"rows",label:n.$t("model.field.rows")},{default:a(()=>[e(s,{modelValue:d(l).rows,"onUpdate:modelValue":o[10]||(o[10]=t=>d(l).rows=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["number","slider"].includes(d(l).type)?(r(),h(M,{key:5},[e(p,{prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e(s,{modelValue:d(l).defaultValue,"onUpdate:modelValue":o[11]||(o[11]=t=>d(l).defaultValue=t),min:d(l).min,max:d(l).max},null,8,["modelValue","min","max"])]),_:1},8,["label"]),e(p,{prop:"min",label:n.$t("model.field.min")},{default:a(()=>[e(s,{modelValue:d(l).min,"onUpdate:modelValue":o[12]||(o[12]=t=>d(l).min=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"max",label:n.$t("model.field.max")},{default:a(()=>[e(s,{modelValue:d(l).max,"onUpdate:modelValue":o[13]||(o[13]=t=>d(l).max=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"step",label:n.$t("model.field.step")},{default:a(()=>[e(s,{modelValue:d(l).step,"onUpdate:modelValue":o[14]||(o[14]=t=>d(l).step=t)},null,8,["modelValue"])]),_:1},8,["label"])],64)):U("",!0),["number"].includes(d(l).type)?(r(),k(p,{key:6,prop:"precision",label:n.$t("model.field.precision")},{default:a(()=>[e(s,{modelValue:d(l).precision,"onUpdate:modelValue":o[15]||(o[15]=t=>d(l).precision=t),precision:0,min:0,max:4},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["slider"].includes(d(l).type)?(r(),k(p,{key:7,prop:"showInput",label:n.$t("model.field.showInput")},{default:a(()=>[e($,{modelValue:d(l).showInput,"onUpdate:modelValue":o[16]||(o[16]=t=>d(l).showInput=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["date"].includes(d(l).type)?(r(),k(p,{key:8,prop:"dateType",label:n.$t("model.field.dateType")},{default:a(()=>[e(i,{modelValue:d(l).dateType,"onUpdate:modelValue":o[17]||(o[17]=t=>d(l).dateType=t)},{default:a(()=>[(r(),h(M,null,O(["date","datetime"],t=>e(C,{key:t,label:n.$t("model.field.dateType.".concat(t)),value:t},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),["color"].includes(d(l).type)?(r(),k(p,{key:9,prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e(L,{modelValue:d(l).defaultValue,"onUpdate:modelValue":o[18]||(o[18]=t=>d(l).defaultValue=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["switch"].includes(d(l).type)?(r(),k(p,{key:10,prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e($,{modelValue:d(l).defaultValue,"onUpdate:modelValue":o[19]||(o[19]=t=>d(l).defaultValue=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["radio","checkbox"].includes(d(l).type)?(r(),k(p,{key:11,prop:"checkStyle",label:n.$t("model.field.checkStyle")},{default:a(()=>[e(c,{modelValue:d(l).checkStyle,"onUpdate:modelValue":o[20]||(o[20]=t=>d(l).checkStyle=t)},{default:a(()=>[(r(),h(M,null,O(["default","button"],t=>e(g,{key:t,value:t},{default:a(()=>[F(q(n.$t("model.field.checkStyle.".concat(t))),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),["select","multipleSelect"].includes(d(l).type)?(r(),k(p,{key:12,prop:"clearable",label:n.$t("model.field.clearable")},{default:a(()=>[e($,{modelValue:d(l).clearable,"onUpdate:modelValue":o[21]||(o[21]=t=>d(l).clearable=t)},null,8,["modelValue"])]),_:1},8,["label"])):U("",!0),["radio","checkbox","select","multipleSelect"].includes(d(l).type)?(r(),h(M,{key:13},[e(p,{prop:"dictTypeId",label:n.$t("model.field.dictType"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[e(i,{modelValue:d(l).dictTypeId,"onUpdate:modelValue":o[22]||(o[22]=t=>d(l).dictTypeId=t),class:"w-full",onChange:o[23]||(o[23]=t=>z(t))},{default:a(()=>[(r(!0),h(M,null,O(T.value,t=>(r(),k(C,{key:t.id,value:t.id,label:"".concat(t.name,"(").concat(t.alias,")")},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"]),e(p,{prop:"dataType",label:n.$t("model.field.dataType")},{default:a(()=>[e(i,{modelValue:d(l).dataType,"onUpdate:modelValue":o[24]||(o[24]=t=>d(l).dataType=t),class:"w-full",disabled:""},{default:a(()=>[(r(),h(M,null,O(["string","number"],t=>e(C,{key:t,value:t,label:n.$t("model.field.dataType.".concat(t))},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):U("",!0),["radio","select"].includes(d(l).type)?(r(),k(p,{key:14,prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e(i,{modelValue:d(l).defaultValueKey,"onUpdate:modelValue":o[25]||(o[25]=t=>d(l).defaultValueKey=t),clearable:"",class:"w-full",onChange:o[26]||(o[26]=t=>{var D;return d(l).defaultValue=(D=y.value.find(N=>N.value===t))==null?void 0:D.name})},{default:a(()=>[(r(!0),h(M,null,O(y.value,t=>(r(),k(C,{key:t.id,value:t.value,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),["checkbox","multipleSelect"].includes(d(l).type)?(r(),k(p,{key:15,prop:"defaultValue",label:n.$t("model.field.defaultValue")},{default:a(()=>[e(i,{modelValue:d(l).defaultValueKey,"onUpdate:modelValue":o[27]||(o[27]=t=>d(l).defaultValueKey=t),clearable:"",class:"w-full",multiple:"",onChange:o[28]||(o[28]=t=>d(l).defaultValue=y.value.filter(D=>t.indexOf(D.value)!==-1).map(D=>D.name))},{default:a(()=>[(r(!0),h(M,null,O(y.value,t=>(r(),k(C,{key:t.id,value:t.value,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),["imageUpload"].includes(d(l).type)?(r(),h(M,{key:16},[e(p,{prop:"imageWidth",label:n.$t("model.field.imageWidth")},{default:a(()=>[e(s,{modelValue:d(l).imageWidth,"onUpdate:modelValue":o[29]||(o[29]=t=>d(l).imageWidth=t),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"imageHeight",label:n.$t("model.field.imageHeight")},{default:a(()=>[e(s,{modelValue:d(l).imageHeight,"onUpdate:modelValue":o[30]||(o[30]=t=>d(l).imageHeight=t),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"imageMode",label:n.$t("model.field.imageMode")},{default:a(()=>[e(i,{modelValue:d(l).imageMode,"onUpdate:modelValue":o[31]||(o[31]=t=>d(l).imageMode=t),clearable:"",class:"w-full"},{default:a(()=>[(r(),h(M,null,O(["cut","resize","manual","none"],t=>e(C,{key:t,value:t,label:n.$t("model.field.imageMode.".concat(t))},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):U("",!0),["imageUpload","videoUpload","audioUpload","fileUpload"].includes(d(l).type)?(r(),h(M,{key:17},[e(p,{prop:"fileAccept"},{label:a(()=>[e(Y,{message:"model.field.fileAccept",help:"","fix-width":!1})]),default:a(()=>[e(w,{modelValue:d(l).fileAccept,"onUpdate:modelValue":o[32]||(o[32]=t=>d(l).fileAccept=t),maxlength:"255"},null,8,["modelValue"])]),_:1}),e(p,{prop:"fileMaxSize",rules:{type:"number",min:0,max:65535,message:()=>n.$t("v.range",{min:0,max:65535})}},{label:a(()=>[e(Y,{message:"model.field.fileMaxSize",help:"","fix-width":!1})]),default:a(()=>[e(w,{modelValue:d(l).fileMaxSize,"onUpdate:modelValue":o[33]||(o[33]=t=>d(l).fileMaxSize=t),modelModifiers:{number:!0},maxlength:"5"},null,8,["modelValue"])]),_:1},8,["rules"])],64)):U("",!0),["tinyEditor"].includes(d(l).type)?(r(),h(M,{key:18},[e(p,{prop:"minHeight",label:n.$t("model.field.minHeight")},{default:a(()=>[e(s,{modelValue:d(l).minHeight,"onUpdate:modelValue":o[34]||(o[34]=t=>d(l).minHeight=t),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(p,{prop:"maxHeight",label:n.$t("model.field.maxHeight")},{default:a(()=>[e(s,{modelValue:d(l).maxHeight,"onUpdate:modelValue":o[35]||(o[35]=t=>d(l).maxHeight=t),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"])],64)):U("",!0)],64)}}}),Re={class:"dialog-full"},Ae={class:"drag-component"},Je=["onClick"],je=["onClick"],Pe=Z({name:"ModelCustomFields",__name:"ModelCustomFields",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null}},emits:{"update:modelValue":null},setup(H,{emit:K}){const l=H,T=K,{beanId:y,modelValue:z}=de(l),{t:n}=oe(),o=v({}),w=v({}),p=v(),$=v(!1),s=v(),C=v(),i=v("attribute"),L=v(!1),g=v([{label:n("model.fieldType.text"),type:"text"},{label:n("model.fieldType.textarea"),type:"textarea"},{label:n("model.fieldType.number"),type:"number"},{label:n("model.fieldType.slider"),type:"slider"},{label:n("model.fieldType.date"),type:"date"},{label:n("model.fieldType.color"),type:"color"},{label:n("model.fieldType.radio"),type:"radio"},{label:n("model.fieldType.checkbox"),type:"checkbox"},{label:n("model.fieldType.select"),type:"select"},{label:n("model.fieldType.multipleSelect"),type:"multipleSelect"},{label:n("model.fieldType.switch"),type:"switch"},{label:n("model.fieldType.imageUpload"),type:"imageUpload"},{label:n("model.fieldType.videoUpload"),type:"videoUpload"},{label:n("model.fieldType.audioUpload"),type:"audioUpload"},{label:n("model.fieldType.fileUpload"),type:"fileUpload"},{label:n("model.fieldType.tinyEditor"),type:"tinyEditor"}]),c=v([]);fe(z,async()=>{z.value&&(y==null?void 0:y.value)!=null&&(o.value=await ne(y.value),c.value=JSON.parse(o.value.customs||"[]"),c.value.length>0?[s.value]=c.value:s.value=void 0)});const t=async _=>{if(!s.value){s.value=_;return}p.value.validate(S=>{S&&(s.value=_)})},D=_=>{const S={code:"field".concat(Date.now()),type:_.type,name:_.label,double:!1,dataType:["number","slider"].indexOf(_.type)!==-1?"number":"string",clob:["tinyEditor"].indexOf(_.type)!==-1};return C.value=S,S},N=_=>{_.from!==_.to&&(s.value=C.value)},P=_=>{const S=c.value.indexOf(_);c.value.splice(S,1);const{length:W}=c.value;W<=0?s.value=void 0:S<W?s.value=c.value[S]:s.value=c.value[W-1]},j=async()=>{L.value=!0;try{c.value.length>0?p.value.validate(async _=>{_&&await x({...o.value,customs:JSON.stringify(c.value)})}):await x({...o.value,customs:JSON.stringify(c.value)}),ue.success(n("success"))}finally{L.value=!1,T("update:modelValue",!1)}};return(_,S)=>{const W=f("el-scrollbar"),m=f("el-aside"),u=f("el-button"),V=f("el-header"),E=f("el-form-item"),B=f("el-icon"),ee=f("el-col"),G=f("el-form"),R=f("el-main"),Q=f("el-container"),le=f("el-tab-pane"),ae=f("el-tabs"),b=f("el-dialog");return r(),h("div",Re,[e(b,{title:_.$t("model.fun.customFields"),"model-value":H.modelValue,"destroy-on-close":"",fullscreen:"","onUpdate:modelValue":S[3]||(S[3]=I=>_.$emit("update:modelValue",I))},{default:a(()=>[e(Q,{class:"border-t",style:{height:"calc(100vh - 65px)"}},{default:a(()=>[e(m,{width:"240px"},{default:a(()=>[e(W,{class:"h-full"},{default:a(()=>[e(d(re),{list:g.value,group:{name:"components",pull:"clone",put:!1},sort:!1,clone:D,"item-key":"label",onEnd:N},{item:a(({element:I})=>[J("div",Ae,q(I.label),1)]),_:1},8,["list"])]),_:1})]),_:1}),e(Q,{class:"border-l border-r"},{default:a(()=>[e(V,{height:"auto",class:"px-2 py-1"},{default:a(()=>[e(u,{loading:L.value,type:"primary",onClick:be(j,["prevent"])},{default:a(()=>[F(q(_.$t("save")),1)]),_:1},8,["loading"])]),_:1}),e(R,{class:"p-0 border-t"},{default:a(()=>[e(W,{class:"h-full p-2 drawing-board"},{default:a(()=>[e(G,{model:w.value,"label-width":"150px",class:"h-full"},{default:a(()=>[e(d(re),{list:c.value,class:"content-start min-h-full mx-0",tag:"el-row","component-data":{gutter:8},animation:250,group:"components","item-key":"code",onStart:S[0]||(S[0]=()=>$.value=!0),onEnd:S[1]||(S[1]=()=>$.value=!1)},{item:a(({element:I})=>[e(ee,{span:I.double?12:24,class:"relative"},{default:a(()=>[e(E,{required:I.required,"show-message":!1,class:"py-3 mb-0"},{label:a(()=>[e(Y,{label:I.name},null,8,["label"])]),default:a(()=>[e(ze,{modelValue:I.defaultValue,"onUpdate:modelValue":te=>I.defaultValue=te,"model-key":I.defaultValueKey,"onUpdate:modelKey":te=>I.defaultValueKey=te,field:I},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["required"]),J("div",{class:se(["drag-mask",!$.value&&s.value!==I?"hover:opacity-10":null,s.value===I?"drag-mask-selected":null]),onClick:()=>t(I)},null,10,Je),J("div",{class:se(["drag-close",s.value!==I?"hidden":null]),onClick:()=>P(I)},[e(B,{class:"text-danger"},{default:a(()=>[e(d(ve))]),_:1})],10,je)]),_:2},1032,["span"])]),_:1},8,["list"])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(m,{class:"w-64 right-panel"},{default:a(()=>[e(W,{class:"h-full pt-0.5 pb-3"},{default:a(()=>[e(ae,{modelValue:i.value,"onUpdate:modelValue":S[2]||(S[2]=I=>i.value=I),stretch:""},{default:a(()=>[e(le,{label:_.$t("model.attribute"),name:"attribute",class:"px-2"},{default:a(()=>[e(G,{ref_key:"selectedForm",ref:p,model:s.value},{default:a(()=>[s.value?(r(),k(Be,{key:0,selected:s.value},null,8,["selected"])):U("",!0)]),_:1},8,["model"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","model-value"])])}}}),Qe=ce(Pe,[["__scopeId","data-v-e377323a"]]),Ze={class:"mb-3"},Ge={class:"app-block"},pl=Z({name:"ModelList",__name:"ModelList",setup(H){const{t:K}=oe(),l=v({}),T=v("article"),y=v(),z=v(),n=v([]),o=v([]),w=v(!1),p=v(!1),$=v(!1),s=v(!1),C=v(),i=Ve(()=>n.value.map(u=>u.id)),L=v(!1),g=async()=>{w.value=!0;try{n.value=await qe({...ke(l.value),type:T.value,Q_OrderBy:y.value}),L.value=Object.values(l.value).filter(u=>u!==void 0&&u!=="").length>0||y.value!==void 0}finally{w.value=!1}};ge(g);const c=({column:u,prop:V,order:E})=>{var B;V&&E?y.value=((B=u.sortBy)!=null?B:V)+(E==="descending"?"_desc":""):y.value=void 0,g()},t=()=>g(),D=()=>{z.value.clearSort(),Ue(l.value),y.value=void 0,g()},N=u=>{C.value=u,$.value=!0},P=u=>{C.value=u,s.value=!0},j=()=>{C.value=void 0,p.value=!0},_=u=>{C.value=u,p.value=!0},S=async u=>{await ye(u),g(),ue.success(K("success"))},W=async(u,V)=>{const E=he(u,n.value,V);await Ce(E.map(B=>B.id))},m=u=>u.id>10;return(u,V)=>{const E=f("el-button"),B=f("el-popconfirm"),ee=f("el-radio-button"),G=f("el-radio-group"),R=f("el-table-column"),Q=f("el-tag"),le=f("el-table"),ae=$e("loading");return r(),h("div",null,[J("div",Ze,[e(d(Fe),{params:l.value,onSearch:t,onReset:D},{default:a(()=>[e(d(Ie),{label:u.$t("model.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),J("div",null,[e(E,{type:"primary",disabled:d(A)("model:create"),icon:d(Te),onClick:V[0]||(V[0]=()=>j())},{default:a(()=>[F(q(u.$t("add")),1)]),_:1},8,["disabled","icon"]),e(B,{title:u.$t("confirmDelete"),onConfirm:V[1]||(V[1]=()=>S(o.value.map(b=>b.id)))},{reference:a(()=>[e(E,{disabled:o.value.length<=0||d(A)("model:delete"),icon:d(Se)},{default:a(()=>[F(q(u.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(De,{disabled:o.value.length<=0||L.value||d(A)("org:update"),class:"ml-2",onMove:V[2]||(V[2]=b=>W(o.value,b))},null,8,["disabled"]),e(d(Le),{name:"model",class:"ml-2"})]),e(G,{modelValue:T.value,"onUpdate:modelValue":V[3]||(V[3]=b=>T.value=b),class:"mt-3",onChange:V[4]||(V[4]=()=>g())},{default:a(()=>[(r(),h(M,null,O(["article","channel","form","site","global"],b=>e(ee,{key:b,value:b},{default:a(()=>[F(q(u.$t("model.type.".concat(b))),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),J("div",Ge,[_e((r(),k(le,{ref_key:"table",ref:z,data:n.value,onSelectionChange:V[5]||(V[5]=b=>o.value=b),onRowDblclick:V[6]||(V[6]=b=>_(b.id)),onSortChange:c},{default:a(()=>[e(d(He),{name:"model"},{default:a(()=>[e(R,{type:"selection",selectable:m,width:"45"}),e(R,{property:"id",label:"ID",width:"170",sortable:"custom"}),e(R,{property:"name",label:u.$t("model.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(R,{property:"type",label:u.$t("model.type"),sortable:"custom",formatter:b=>u.$t("model.type.".concat(b.type))},null,8,["label","formatter"]),e(R,{property:"scope",label:u.$t("model.scope"),sortable:"custom"},{default:a(({row:b})=>[b.scope===2?(r(),k(Q,{key:0,type:"success",size:"small"},{default:a(()=>[F(q(u.$t("model.scope.".concat(b.scope))),1)]),_:2},1024)):(r(),k(Q,{key:1,type:"info",size:"small"},{default:a(()=>[F(q(u.$t("model.scope.".concat(b.scope))),1)]),_:2},1024))]),_:1},8,["label"]),e(R,{label:u.$t("table.action")},{default:a(({row:b})=>[e(E,{type:"primary",disabled:d(A)("model:update"),size:"small",link:"",onClick:()=>_(b.id)},{default:a(()=>[F(q(u.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),["form","global","site"].includes(b.type)?U("",!0):(r(),k(E,{key:0,type:"primary",disabled:d(A)("model:update"),size:"small",link:"",onClick:()=>N(b.id)},{default:a(()=>[F(q(u.$t("model.fun.systemFields")),1)]),_:2},1032,["disabled","onClick"])),e(E,{type:"primary",disabled:d(A)("model:update"),size:"small",link:"",onClick:()=>P(b.id)},{default:a(()=>[F(q(u.$t("model.fun.customFields")),1)]),_:2},1032,["disabled","onClick"]),m(b)?(r(),k(B,{key:1,title:u.$t("confirmDelete"),onConfirm:()=>S([b.id])},{reference:a(()=>[e(E,{type:"primary",disabled:d(A)("model:delete"),size:"small",link:""},{default:a(()=>[F(q(u.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])):U("",!0)]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[ae,w.value]])]),e(We,{modelValue:p.value,"onUpdate:modelValue":V[7]||(V[7]=b=>p.value=b),"bean-id":C.value,"bean-ids":i.value,"model-type":T.value,onFinished:g},null,8,["modelValue","bean-id","bean-ids","model-type"]),e(Ne,{modelValue:$.value,"onUpdate:modelValue":V[8]||(V[8]=b=>$.value=b),"bean-id":C.value},null,8,["modelValue","bean-id"]),e(Qe,{modelValue:s.value,"onUpdate:modelValue":V[9]||(V[9]=b=>s.value=b),"bean-id":C.value},null,8,["modelValue","bean-id"])])}}});export{pl as default};
