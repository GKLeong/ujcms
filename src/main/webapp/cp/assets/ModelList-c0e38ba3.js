import{d as P,r as y,a as f,c as r,e as U,w as a,i as t,h as e,I as S,a8 as O,k as F,t as I,a7 as w,p as te,u as de,v as pe,g as M,j as R,l as re,E as oe,H as ne,$ as ie,at as be,_ as ce,X as ve,o as ye,b as Ve,f as ge,aD as _e,aJ as $e,aL as ke,as as J,a5 as Ue,a2 as he}from"./index-285670b0.js";import{G as ue,H as Te,I as Y,J as fe,b as Me,q as Se,K as qe}from"./config-43502fd6.js";import{a as Ce,_ as we,b as Ie,c as Fe}from"./QueryItem.vue_vue_type_script_setup_true_lang-c40055fe.js";import{_ as He}from"./ListMove.vue_vue_type_script_setup_true_lang-591ffc50.js";import{_ as De}from"./DialogForm.vue_vue_type_script_setup_true_lang-2cec4ef8.js";import{g as me,m as X}from"./data-72353d8f.js";import{d as se}from"./FileListUpload.vue_vue_type_style_index_0_scoped_cd89d899_lang-908ae973.js";import{_ as Le}from"./FieldItem.vue_vue_type_script_setup_true_lang-180c3254.js";import{M as ze}from"./content-214478a8.js";import{_ as ae}from"./LabelTip.vue_vue_type_script_setup_true_lang-3e1cb478.js";import"./BaseUpload-8033ede3.js";/* empty css                                                                   */const Ee={name:"ModelForm"},Ne=P({...Ee,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0},modelType:{type:String,required:!0}},emits:{"update:modelValue":null,finished:null},setup(D){const K=y(),l=y({});return($,v)=>{const k=f("el-input"),u=f("el-form-item"),o=f("el-radio"),q=f("el-radio-group"),s=f("el-option"),V=f("el-select");return r(),U(De,{values:l.value,"onUpdate:values":v[3]||(v[3]=b=>l.value=b),name:$.$t("menu.config.model"),"query-bean":t(ue),"create-bean":t(Te),"update-bean":t(Y),"delete-bean":t(fe),"bean-id":D.beanId,"bean-ids":D.beanIds,focus:K.value,"init-values":()=>({type:D.modelType,scope:0}),"to-values":b=>({...b}),"disable-delete":b=>b.id<=10,perms:"model","model-value":D.modelValue,"onUpdate:modelValue":v[4]||(v[4]=b=>$.$emit("update:modelValue",b)),onFinished:v[5]||(v[5]=()=>$.$emit("finished"))},{default:a(({})=>[e(u,{prop:"name",label:$.$t("model.name"),rules:{required:!0,message:()=>$.$t("v.required")}},{default:a(()=>[e(k,{ref_key:"focus",ref:K,modelValue:l.value.name,"onUpdate:modelValue":v[0]||(v[0]=b=>l.value.name=b),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(u,{prop:"scope",label:$.$t("model.scope"),rules:{required:!0,message:()=>$.$t("v.required")}},{default:a(()=>[e(q,{modelValue:l.value.scope,"onUpdate:modelValue":v[1]||(v[1]=b=>l.value.scope=b),disabled:l.value.id<10},{default:a(()=>[(r(),S(w,null,O([0,2],b=>e(o,{key:b,label:b},{default:a(()=>[F(I($.$t(`model.scope.${b}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","rules"]),e(u,{prop:"type",label:$.$t("model.type")},{default:a(()=>[e(V,{modelValue:l.value.type,"onUpdate:modelValue":v[2]||(v[2]=b=>l.value.type=b),disabled:""},{default:a(()=>[e(s,{value:D.modelType,label:$.$t(`model.type.${D.modelType}`)},null,8,["value","label"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","disable-delete","model-value"])}}}),Oe={class:"mt-3"},Ke={name:"ModelSystemFields"},We=P({...Ke,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null}},emits:{"update:modelValue":null},setup(D,{emit:K}){const l=D,{beanId:$,modelValue:v}=te(l),{t:k}=de(),u=y({}),o=y(!1),q=y([]),s=y([]);pe(v,async()=>{var m;if(v.value&&$.value){u.value=await ue($.value);const C=me()[u.value.type];q.value=X(C.mains,u.value.mains,u.value.type),((m=C.asides)==null?void 0:m.length)>0&&(s.value=X(C.asides,u.value.asides,u.value.type))}});const V=async()=>{o.value=!0;try{await Y({...u.value,mains:JSON.stringify(q.value),asides:JSON.stringify(s.value)}),oe.success(k("success"))}finally{o.value=!1,K("update:modelValue",!1)}},b=()=>{var C;const m=me()[u.value.type];q.value=X(m.mains,null,u.value.type),((C=m.asides)==null?void 0:C.length)>0&&(s.value=X(m.asides,null,u.value.type))};return(m,C)=>{const H=f("el-table-column"),g=f("el-input"),N=f("el-switch"),d=f("el-option"),L=f("el-select"),A=f("el-checkbox"),j=f("el-table"),h=f("el-button"),T=f("el-form"),z=f("el-dialog");return r(),U(z,{title:m.$t("model.fun.systemFields"),"model-value":D.modelValue,top:"5vh",width:"1024px","onUpdate:modelValue":C[0]||(C[0]=n=>m.$emit("update:modelValue",n))},{default:a(()=>[e(T,null,{default:a(()=>[e(j,{data:q.value},{default:a(()=>[e(H,{prop:"code",label:m.$t("model.field.code"),"min-width":"110"},null,8,["label"]),e(H,{prop:"name",label:m.$t("model.field.name"),"min-width":"140"},{default:a(({row:n})=>[e(g,{modelValue:n.name,"onUpdate:modelValue":p=>n.name=p,placeholder:m.$t(n.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(H,{prop:"show",label:m.$t("model.field.show")},{default:a(({row:n})=>[e(N,{modelValue:n.show,"onUpdate:modelValue":p=>n.show=p,disabled:n.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(H,{prop:"double",label:m.$t("model.field.double")},{default:a(({row:n})=>[e(N,{modelValue:n.double,"onUpdate:modelValue":p=>n.double=p},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(H,{prop:"required",label:m.$t("model.field.required")},{default:a(({row:n})=>[e(N,{modelValue:n.required,"onUpdate:modelValue":p=>n.required=p,disabled:n.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(H,{label:m.$t("model.field.attribute"),"min-width":"180"},{default:a(({row:n})=>[n.type==="image"?(r(),S(w,{key:0},[e(g,{modelValue:n.imageHeight,"onUpdate:modelValue":p=>n.imageHeight=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(g,{modelValue:n.imageWidth,"onUpdate:modelValue":p=>n.imageWidth=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(L,{modelValue:n.imageMode,"onUpdate:modelValue":p=>n.imageMode=p,placeholder:m.$t("model.field.imageMode"),class:"w-full"},{default:a(()=>[(r(),S(w,null,O(["manual","cut","resize","none"],p=>e(d,{key:p,value:p,label:m.$t(`model.field.imageMode.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):n.type==="imageList"?(r(),S(w,{key:1},[e(g,{modelValue:n.imageMaxHeight,"onUpdate:modelValue":p=>n.imageMaxHeight=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageMaxHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(g,{modelValue:n.imageMaxWidth,"onUpdate:modelValue":p=>n.imageMaxWidth=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageMaxWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(L,{modelValue:n.imageListType,"onUpdate:modelValue":p=>n.imageListType=p,placeholder:m.$t("model.field.imageListType"),class:"w-full"},{default:a(()=>[(r(),S(w,null,O(["pictureCard","picture"],p=>e(d,{key:p,value:p,label:m.$t(`model.field.imageListType.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):n.type==="editor"?(r(),S(w,{key:2},[e(L,{modelValue:n.editorType,"onUpdate:modelValue":p=>n.editorType=p,placeholder:m.$t("model.field.editorType"),class:"w-full"},{default:a(()=>[(r(),S(w,null,O([1,2],p=>e(d,{key:p,value:p,label:m.$t(`model.field.editorType.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),e(A,{modelValue:n.editorSwitch,"onUpdate:modelValue":p=>n.editorSwitch=p},{default:a(()=>[F(I(m.$t("model.field.editorSwitch")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):M("",!0)]),_:1},8,["label"])]),_:1},8,["data"]),s.value.length>0?(r(),U(j,{key:0,data:s.value,class:"mt-5"},{default:a(()=>[e(H,{prop:"code",label:m.$t("model.field.code"),"min-width":"100"},null,8,["label"]),e(H,{prop:"name",label:m.$t("model.field.name"),"min-width":"120"},{default:a(({row:n})=>[e(g,{modelValue:n.name,"onUpdate:modelValue":p=>n.name=p,placeholder:m.$t(n.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(H,{prop:"show",label:m.$t("model.field.show")},{default:a(({row:n})=>[e(N,{modelValue:n.show,"onUpdate:modelValue":p=>n.show=p,disabled:n.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(H,{prop:"required",label:m.$t("model.field.required")},{default:a(({row:n})=>[e(N,{modelValue:n.required,"onUpdate:modelValue":p=>n.required=p,disabled:n.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["data"])):M("",!0),R("div",Oe,[e(h,{loading:o.value,type:"primary","native-type":"submit",onClick:re(V,["prevent"])},{default:a(()=>[F(I(m.$t("save")),1)]),_:1},8,["loading","onClick"]),e(h,{onClick:b},{default:a(()=>[F(I(m.$t("restoreInitialSettings")),1)]),_:1})])]),_:1})]),_:1},8,["title","model-value"])}}}),Be=P({__name:"FieldAttribute",props:{selected:{type:Object,required:!0}},setup(D){const K=D,{selected:l}=te(K),$=y([]),v=y([]);ne(async()=>{l.value.type==="date"&&!l.value.dateType&&(l.value.dateType="date"),l.value.type==="switch"&&!l.value.inactiveValue&&(l.value.inactiveValue="0"),l.value.type==="switch"&&!l.value.activeValue&&(l.value.activeValue="1"),["radio","checkbox"].includes(l.value.type)&&!l.value.checkStyle&&(l.value.checkStyle="default"),["checkbox","multipleSelect"].includes(l.value.type)&&!l.value.defaultValue&&(l.value.defaultValue=[]),["checkbox","multipleSelect"].includes(l.value.type)&&(l.value.multiple=!0),["radio","checkbox","select","multipleSelect"].includes(l.value.type)&&($.value=await Me())}),ne(async()=>{l.value.dictTypeId!=null&&(v.value=await ze({typeId:l.value.dictTypeId}))});const k=async()=>{l.value.defaultValue=l.value.multiple?[]:void 0,l.value.defaultValueKey=l.value.multiple?[]:void 0};return(u,o)=>{const q=f("el-input"),s=f("el-form-item"),V=f("el-switch"),b=f("el-input-number"),m=f("el-option"),C=f("el-select"),H=f("el-color-picker"),g=f("el-radio-button"),N=f("el-radio-group");return r(),S(w,null,[e(s,{prop:"code",label:u.$t("model.field.code"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(q,{modelValue:t(l).code,"onUpdate:modelValue":o[0]||(o[0]=d=>t(l).code=d),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(s,{prop:"name",label:u.$t("model.field.name"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(q,{modelValue:t(l).name,"onUpdate:modelValue":o[1]||(o[1]=d=>t(l).name=d),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(s,{prop:"double",label:u.$t("model.field.double")},{default:a(()=>[e(V,{modelValue:t(l).double,"onUpdate:modelValue":o[2]||(o[2]=d=>t(l).double=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"required",label:u.$t("model.field.required")},{default:a(()=>[e(V,{modelValue:t(l).required,"onUpdate:modelValue":o[3]||(o[3]=d=>t(l).required=d)},null,8,["modelValue"])]),_:1},8,["label"]),["text","textarea","number","select","multipleSelect","videoUpload","audioUpload","fileUpload","tinyEditor"].includes(t(l).type)?(r(),U(s,{key:0,prop:"placeholder",label:u.$t("model.field.placeholder")},{default:a(()=>[e(q,{modelValue:t(l).placeholder,"onUpdate:modelValue":o[4]||(o[4]=d=>t(l).placeholder=d),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["text","textarea"].includes(t(l).type)?(r(),S(w,{key:1},[e(s,{prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(q,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[5]||(o[5]=d=>t(l).defaultValue=d),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"minlength",label:u.$t("model.field.minlength")},{default:a(()=>[e(b,{modelValue:t(l).minlength,"onUpdate:modelValue":o[6]||(o[6]=d=>t(l).minlength=d),min:1},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"maxlength",label:u.$t("model.field.maxlength")},{default:a(()=>[e(b,{modelValue:t(l).maxlength,"onUpdate:modelValue":o[7]||(o[7]=d=>t(l).maxlength=d),min:1},null,8,["modelValue"])]),_:1},8,["label"])],64)):M("",!0),["textarea"].includes(t(l).type)?(r(),U(s,{key:2,prop:"rows",label:u.$t("model.field.rows")},{default:a(()=>[e(b,{modelValue:t(l).rows,"onUpdate:modelValue":o[8]||(o[8]=d=>t(l).rows=d)},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["number","slider"].includes(t(l).type)?(r(),S(w,{key:3},[e(s,{prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(b,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[9]||(o[9]=d=>t(l).defaultValue=d),min:t(l).min,max:t(l).max},null,8,["modelValue","min","max"])]),_:1},8,["label"]),e(s,{prop:"min",label:u.$t("model.field.min")},{default:a(()=>[e(b,{modelValue:t(l).min,"onUpdate:modelValue":o[10]||(o[10]=d=>t(l).min=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"max",label:u.$t("model.field.max")},{default:a(()=>[e(b,{modelValue:t(l).max,"onUpdate:modelValue":o[11]||(o[11]=d=>t(l).max=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"step",label:u.$t("model.field.step")},{default:a(()=>[e(b,{modelValue:t(l).step,"onUpdate:modelValue":o[12]||(o[12]=d=>t(l).step=d)},null,8,["modelValue"])]),_:1},8,["label"])],64)):M("",!0),["number"].includes(t(l).type)?(r(),U(s,{key:4,prop:"precision",label:u.$t("model.field.precision")},{default:a(()=>[e(b,{modelValue:t(l).precision,"onUpdate:modelValue":o[13]||(o[13]=d=>t(l).precision=d),precision:0,min:0,max:4},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["slider"].includes(t(l).type)?(r(),U(s,{key:5,prop:"showInput",label:u.$t("model.field.showInput")},{default:a(()=>[e(V,{modelValue:t(l).showInput,"onUpdate:modelValue":o[14]||(o[14]=d=>t(l).showInput=d)},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["date"].includes(t(l).type)?(r(),U(s,{key:6,prop:"dateType",label:u.$t("model.field.dateType")},{default:a(()=>[e(C,{modelValue:t(l).dateType,"onUpdate:modelValue":o[15]||(o[15]=d=>t(l).dateType=d)},{default:a(()=>[(r(),S(w,null,O(["date","datetime"],d=>e(m,{key:d,label:u.$t(`model.field.dateType.${d}`),value:d},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):M("",!0),["color"].includes(t(l).type)?(r(),U(s,{key:7,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(H,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[16]||(o[16]=d=>t(l).defaultValue=d)},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["switch"].includes(t(l).type)?(r(),U(s,{key:8,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(V,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[17]||(o[17]=d=>t(l).defaultValue=d),"active-value":t(l).activeValue,"inactive-value":t(l).inactiveValue},null,8,["modelValue","active-value","inactive-value"])]),_:1},8,["label"])):M("",!0),["radio","checkbox"].includes(t(l).type)?(r(),U(s,{key:9,prop:"checkStyle",label:u.$t("model.field.checkStyle")},{default:a(()=>[e(N,{modelValue:t(l).checkStyle,"onUpdate:modelValue":o[18]||(o[18]=d=>t(l).checkStyle=d)},{default:a(()=>[(r(),S(w,null,O(["default","button"],d=>e(g,{key:d,label:d},{default:a(()=>[F(I(u.$t(`model.field.checkStyle.${d}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):M("",!0),["select","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:10,prop:"clearable",label:u.$t("model.field.clearable")},{default:a(()=>[e(V,{modelValue:t(l).clearable,"onUpdate:modelValue":o[19]||(o[19]=d=>t(l).clearable=d)},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),["radio","checkbox","select","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:11,prop:"dictTypeId",label:u.$t("model.field.dictType"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(C,{modelValue:t(l).dictTypeId,"onUpdate:modelValue":o[20]||(o[20]=d=>t(l).dictTypeId=d),class:"w-full",onChange:o[21]||(o[21]=d=>k())},{default:a(()=>[(r(!0),S(w,null,O($.value,d=>(r(),U(m,{key:d.id,value:d.id,label:`${d.name}(${d.alias})`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])):M("",!0),["radio","select"].includes(t(l).type)?(r(),U(s,{key:12,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(C,{modelValue:t(l).defaultValueKey,"onUpdate:modelValue":o[22]||(o[22]=d=>t(l).defaultValueKey=d),clearable:"",class:"w-full",onChange:o[23]||(o[23]=d=>{var L;return t(l).defaultValue=(L=v.value.find(A=>A.value===d))==null?void 0:L.name})},{default:a(()=>[(r(!0),S(w,null,O(v.value,d=>(r(),U(m,{key:d.id,value:d.value,label:d.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):M("",!0),["checkbox","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:13,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(C,{modelValue:t(l).defaultValueKey,"onUpdate:modelValue":o[24]||(o[24]=d=>t(l).defaultValueKey=d),clearable:"",class:"w-full",multiple:"",onChange:o[25]||(o[25]=d=>t(l).defaultValue=v.value.filter(L=>d.indexOf(L.value)!==-1).map(L=>L.name))},{default:a(()=>[(r(!0),S(w,null,O(v.value,d=>(r(),U(m,{key:d.id,value:d.value,label:d.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):M("",!0),["imageUpload"].includes(t(l).type)?(r(),S(w,{key:14},[e(s,{prop:"imageWidth",label:u.$t("model.field.imageWidth")},{default:a(()=>[e(b,{modelValue:t(l).imageWidth,"onUpdate:modelValue":o[26]||(o[26]=d=>t(l).imageWidth=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"imageHeight",label:u.$t("model.field.imageHeight")},{default:a(()=>[e(b,{modelValue:t(l).imageHeight,"onUpdate:modelValue":o[27]||(o[27]=d=>t(l).imageHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"imageMode",label:u.$t("model.field.imageMode")},{default:a(()=>[e(C,{modelValue:t(l).imageMode,"onUpdate:modelValue":o[28]||(o[28]=d=>t(l).imageMode=d),clearable:"",class:"w-full"},{default:a(()=>[(r(),S(w,null,O(["cut","resize","manual","none"],d=>e(m,{key:d,value:d,label:u.$t(`model.field.imageMode.${d}`)},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):M("",!0),["imageUpload","videoUpload","audioUpload","fileUpload"].includes(t(l).type)?(r(),S(w,{key:15},[e(s,{prop:"fileAccept"},{label:a(()=>[e(ae,{message:"model.field.fileAccept",help:"","fix-width":!1})]),default:a(()=>[e(q,{modelValue:t(l).fileAccept,"onUpdate:modelValue":o[29]||(o[29]=d=>t(l).fileAccept=d),maxlength:"255"},null,8,["modelValue"])]),_:1}),e(s,{prop:"fileMaxSize",rules:{type:"number",min:0,max:65535,message:()=>u.$t("v.range",{min:0,max:65535})}},{label:a(()=>[e(ae,{message:"model.field.fileMaxSize",help:"","fix-width":!1})]),default:a(()=>[e(q,{modelValue:t(l).fileMaxSize,"onUpdate:modelValue":o[30]||(o[30]=d=>t(l).fileMaxSize=d),modelModifiers:{number:!0},maxlength:"5"},null,8,["modelValue"])]),_:1},8,["rules"])],64)):M("",!0),["tinyEditor"].includes(t(l).type)?(r(),S(w,{key:16},[e(s,{prop:"minHeight",label:u.$t("model.field.minHeight")},{default:a(()=>[e(b,{modelValue:t(l).minHeight,"onUpdate:modelValue":o[31]||(o[31]=d=>t(l).minHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"maxHeight",label:u.$t("model.field.maxHeight")},{default:a(()=>[e(b,{modelValue:t(l).maxHeight,"onUpdate:modelValue":o[32]||(o[32]=d=>t(l).maxHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"])],64)):M("",!0)],64)}}}),Ae={class:"dialog-full"},Je={class:"drag-component"},Re=["onClick"],je=["onClick"],Pe={name:"ModelCustomFields"},Qe=P({...Pe,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null}},emits:{"update:modelValue":null},setup(D,{emit:K}){const l=D,{beanId:$,modelValue:v}=te(l),{t:k}=de(),u=y({}),o=y({}),q=y(),s=y(!1),V=y(),b=y(),m=y("attribute"),C=y(!1),H=y([{label:k("model.fieldType.text"),type:"text"},{label:k("model.fieldType.textarea"),type:"textarea"},{label:k("model.fieldType.number"),type:"number"},{label:k("model.fieldType.slider"),type:"slider"},{label:k("model.fieldType.date"),type:"date"},{label:k("model.fieldType.color"),type:"color"},{label:k("model.fieldType.radio"),type:"radio"},{label:k("model.fieldType.checkbox"),type:"checkbox"},{label:k("model.fieldType.select"),type:"select"},{label:k("model.fieldType.multipleSelect"),type:"multipleSelect"},{label:k("model.fieldType.switch"),type:"switch"},{label:k("model.fieldType.imageUpload"),type:"imageUpload"},{label:k("model.fieldType.videoUpload"),type:"videoUpload"},{label:k("model.fieldType.audioUpload"),type:"audioUpload"},{label:k("model.fieldType.fileUpload"),type:"fileUpload"},{label:k("model.fieldType.tinyEditor"),type:"tinyEditor"}]),g=y([]);pe(v,async()=>{v.value&&($==null?void 0:$.value)!=null&&(u.value=await ue($.value),g.value=JSON.parse(u.value.customs||"[]"),g.value.length>0?[V.value]=g.value:V.value=void 0)});const N=async h=>{if(!V.value){V.value=h;return}q.value.validate(T=>{T&&(V.value=h)})},d=h=>{const T={code:`field${new Date().getTime()}`,type:h.type,name:h.label,double:!1};return b.value=T,T},L=h=>{h.from!==h.to&&(V.value=b.value)},A=h=>{const T=g.value.indexOf(h);g.value.splice(T,1);const{length:z}=g.value;z<=0?V.value=void 0:T<z?V.value=g.value[T]:V.value=g.value[z-1]},j=async()=>{C.value=!0;try{g.value.length>0?q.value.validate(async h=>{h&&await Y({...u.value,customs:JSON.stringify(g.value)})}):await Y({...u.value,customs:JSON.stringify(g.value)}),oe.success(k("success"))}finally{C.value=!1,K("update:modelValue",!1)}};return(h,T)=>{const z=f("el-scrollbar"),n=f("el-aside"),p=f("el-button"),c=f("el-header"),_=f("el-form-item"),E=f("el-icon"),W=f("el-col"),Q=f("el-form"),Z=f("el-main"),B=f("el-container"),G=f("el-tab-pane"),x=f("el-tabs"),ee=f("el-dialog");return r(),S("div",Ae,[e(ee,{title:h.$t("model.fun.customFields"),"model-value":D.modelValue,"destroy-on-close":"",fullscreen:"","onUpdate:modelValue":T[3]||(T[3]=i=>h.$emit("update:modelValue",i))},{default:a(()=>[e(B,{class:"border-t",style:{height:"calc(100vh - 65px)"}},{default:a(()=>[e(n,{width:"240px"},{default:a(()=>[e(z,{class:"h-full"},{default:a(()=>[e(t(se),{list:H.value,group:{name:"components",pull:"clone",put:!1},sort:!1,clone:d,"item-key":"label",onEnd:L},{item:a(({element:i})=>[R("div",Je,I(i.label),1)]),_:1},8,["list"])]),_:1})]),_:1}),e(B,{class:"border-r border-l"},{default:a(()=>[e(c,{height:"auto",class:"px-2 py-1"},{default:a(()=>[e(p,{loading:C.value,type:"primary",onClick:re(j,["prevent"])},{default:a(()=>[F(I(h.$t("save")),1)]),_:1},8,["loading","onClick"])]),_:1}),e(Z,{class:"border-t p-0"},{default:a(()=>[e(z,{class:"drawing-board h-full p-2"},{default:a(()=>[e(Q,{model:o.value,"label-width":"150px",class:"h-full"},{default:a(()=>[e(t(se),{list:g.value,class:"min-h-full content-start mx-0",tag:"el-row","component-data":{gutter:8},animation:250,group:"components","item-key":"code",onStart:T[0]||(T[0]=()=>s.value=!0),onEnd:T[1]||(T[1]=()=>s.value=!1)},{item:a(({element:i})=>[e(W,{span:i.double?12:24,class:"relative"},{default:a(()=>[e(_,{prop:i.code,required:i.required,class:"mb-0 py-3"},{label:a(()=>[e(ae,{label:i.name},null,8,["label"])]),default:a(()=>[e(Le,{modelValue:i.defaultValue,"onUpdate:modelValue":le=>i.defaultValue=le,"model-key":i.defaultValueKey,"onUpdate:modelKey":le=>i.defaultValueKey=le,field:i},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["prop","required"]),R("div",{class:ie(["drag-mask",!s.value&&V.value!==i?"hover:opacity-10":null,V.value===i?"drag-mask-selected":null]),onClick:()=>N(i)},null,10,Re),R("div",{class:ie(["drag-close",V.value!==i?"hidden":null]),onClick:()=>A(i)},[e(E,{class:"text-danger"},{default:a(()=>[e(t(be))]),_:1})],10,je)]),_:2},1032,["span"])]),_:1},8,["list"])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(n,{class:"right-panel w-64"},{default:a(()=>[e(z,{class:"h-full pt-0.5 pb-3"},{default:a(()=>[e(x,{modelValue:m.value,"onUpdate:modelValue":T[2]||(T[2]=i=>m.value=i),stretch:""},{default:a(()=>[e(G,{label:h.$t("model.attribute"),name:"attribute",class:"px-2"},{default:a(()=>[e(Q,{ref_key:"selectedForm",ref:q,model:V.value},{default:a(()=>[V.value?(r(),U(Be,{key:0,selected:V.value},null,8,["selected"])):M("",!0)]),_:1},8,["model"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","model-value"])])}}});const Ge=ce(Qe,[["__scopeId","data-v-0e4f9243"]]),Xe={class:"mb-3"},Ye={class:"app-block"},Ze={name:"ModelList"},pl=P({...Ze,setup(D){const{t:K}=de(),l=y({}),$=y("article"),v=y(),k=y(),u=y([]),o=y([]),q=y(!1),s=y(!1),V=y(!1),b=y(!1),m=y(),C=ve(()=>u.value.map(c=>c.id)),H=y(!1),g=async()=>{q.value=!0;try{u.value=await Se({..._e(l.value),type:$.value,Q_OrderBy:v.value}),H.value=Object.values(l.value).filter(c=>c!==void 0&&c!=="").length>0||v.value!==void 0}finally{q.value=!1}};ye(g);const N=({column:c,prop:_,order:E})=>{var W;_?v.value=((W=c.sortBy)!=null?W:_)+(E==="descending"?"_desc":""):v.value=void 0,g()},d=()=>g(),L=()=>{k.value.clearSort(),$e(l.value),v.value=void 0,g()},A=c=>{m.value=c,V.value=!0},j=c=>{m.value=c,b.value=!0},h=()=>{m.value=void 0,s.value=!0},T=c=>{m.value=c,s.value=!0},z=async c=>{await fe(c),g(),oe.success(K("success"))},n=async(c,_)=>{const E=ke(c,u.value,_);await qe(E.map(W=>W.id))},p=c=>c.id>10;return(c,_)=>{const E=f("el-button"),W=f("el-popconfirm"),Q=f("el-radio-button"),Z=f("el-radio-group"),B=f("el-table-column"),G=f("el-tag"),x=f("el-table"),ee=Ve("loading");return r(),S("div",null,[R("div",Xe,[e(t(we),{params:l.value,onSearch:d,onReset:L},{default:a(()=>[e(t(Ce),{label:c.$t("model.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),R("div",null,[e(E,{type:"primary",disabled:t(J)("model:create"),icon:t(Ue),onClick:_[0]||(_[0]=()=>h())},{default:a(()=>[F(I(c.$t("add")),1)]),_:1},8,["disabled","icon"]),e(W,{title:c.$t("confirmDelete"),onConfirm:_[1]||(_[1]=()=>z(o.value.map(i=>i.id)))},{reference:a(()=>[e(E,{disabled:o.value.length<=0||t(J)("model:delete"),icon:t(he)},{default:a(()=>[F(I(c.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(He,{disabled:o.value.length<=0||H.value||t(J)("org:update"),class:"ml-2",onMove:_[2]||(_[2]=i=>n(o.value,i))},null,8,["disabled"]),e(t(Ie),{name:"model",class:"ml-2"})]),e(Z,{modelValue:$.value,"onUpdate:modelValue":_[3]||(_[3]=i=>$.value=i),class:"mt-3",onChange:_[4]||(_[4]=()=>g())},{default:a(()=>[(r(),S(w,null,O(["article","channel","site","global"],i=>e(Q,{key:i,label:i},{default:a(()=>[F(I(c.$t(`model.type.${i}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"]),R("div",Ye,[ge((r(),U(x,{ref_key:"table",ref:k,data:u.value,onSelectionChange:_[5]||(_[5]=i=>o.value=i),onRowDblclick:_[6]||(_[6]=i=>T(i.id)),onSortChange:N},{default:a(()=>[e(t(Fe),{name:"model"},{default:a(()=>[e(B,{type:"selection",selectable:p,width:"45"}),e(B,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(B,{property:"name",label:c.$t("model.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(B,{property:"type",label:c.$t("model.type"),sortable:"custom",formatter:i=>c.$t(`model.type.${i.type}`)},null,8,["label","formatter"]),e(B,{property:"scope",label:c.$t("model.scope"),sortable:"custom"},{default:a(({row:i})=>[i.scope===2?(r(),U(G,{key:0,type:"success",size:"small"},{default:a(()=>[F(I(c.$t(`model.scope.${i.scope}`)),1)]),_:2},1024)):(r(),U(G,{key:1,type:"info",size:"small"},{default:a(()=>[F(I(c.$t(`model.scope.${i.scope}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(B,{label:c.$t("table.action")},{default:a(({row:i})=>[e(E,{type:"primary",disabled:t(J)("model:update"),size:"small",link:"",onClick:()=>T(i.id)},{default:a(()=>[F(I(c.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),["global","site"].includes(i.type)?M("",!0):(r(),U(E,{key:0,type:"primary",disabled:t(J)("model:update"),size:"small",link:"",onClick:()=>A(i.id)},{default:a(()=>[F(I(c.$t("model.fun.systemFields")),1)]),_:2},1032,["disabled","onClick"])),e(E,{type:"primary",disabled:t(J)("model:update"),size:"small",link:"",onClick:()=>j(i.id)},{default:a(()=>[F(I(c.$t("model.fun.customFields")),1)]),_:2},1032,["disabled","onClick"]),p(i)?(r(),U(W,{key:1,title:c.$t("confirmDelete"),onConfirm:()=>z([i.id])},{reference:a(()=>[e(E,{type:"primary",disabled:t(J)("model:delete"),size:"small",link:""},{default:a(()=>[F(I(c.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])):M("",!0)]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[ee,q.value]])]),e(Ne,{modelValue:s.value,"onUpdate:modelValue":_[7]||(_[7]=i=>s.value=i),"bean-id":m.value,"bean-ids":t(C),"model-type":$.value,onFinished:g},null,8,["modelValue","bean-id","bean-ids","model-type"]),e(We,{modelValue:V.value,"onUpdate:modelValue":_[8]||(_[8]=i=>V.value=i),"bean-id":m.value},null,8,["modelValue","bean-id"]),e(Ge,{modelValue:b.value,"onUpdate:modelValue":_[9]||(_[9]=i=>b.value=i),"bean-id":m.value},null,8,["modelValue","bean-id"])])}}});export{pl as default};
