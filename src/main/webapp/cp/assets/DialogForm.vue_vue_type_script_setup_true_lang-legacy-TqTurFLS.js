System.register(["./index-legacy-CiIiERxr.js"],(function(e,a){"use strict";var l,u,t,i,d,n,s,v,o,r,c,p,f,m,b,y,g,V,h,$,k,S,_,w,B,q,F;return{setters:[e=>{l=e.d,u=e.p,t=e.u,i=e.r,d=e.ac,n=e.aV,s=e.o,v=e.v,o=e.b,r=e.c,c=e.e,p=e.f,f=e.w,m=e.l,b=e.t,y=e.j,g=e.I,V=e.h,h=e.g,$=e.ba,k=e.i,S=e.ae,_=e.E,w=e.at,B=e.ak,q=e.ah,F=e.m}],execute:function(){const a={key:0},I={key:0},D={key:1},E={class:"space-x-2"},x={key:0},C="ujcms_continuous_settings";e("_",l({__name:"DialogForm",props:{modelValue:{type:Boolean,required:!0},values:{type:Object,required:!0},name:{type:String,required:!0},beanId:{type:[Number,String],default:null},beanIds:{type:Array,required:!0},initValues:{type:Function,required:!0},toValues:{type:Function,required:!0},queryBean:{type:Function,required:!0},createBean:{type:Function,required:!0},updateBean:{type:Function,required:!0},deleteBean:{type:Function,required:!0},disableDelete:{type:Function,default:null},disableEdit:{type:Function,default:null},beforeValidate:{type:Function,default:null},preventSubmit:{type:Function,default:null},addable:{type:Boolean,default:!0},action:{type:String,default:"edit"},showId:{type:Boolean,default:!0},perms:{type:String,default:null},focus:{type:Object,default:null},large:{type:Boolean,default:!1},labelPosition:{type:String,default:"right"},labelWidth:{type:String,default:"150px"}},emits:{"update:modelValue":null,"update:values":null,finished:null,beanChange:null,beforeSubmit:null},setup(e,{expose:l,emit:O}){function j(){const e=localStorage.getItem(C);return e?JSON.parse(e):{}}function N(e,a){const l=j();l[e]=a,function(e){localStorage.setItem(C,JSON.stringify(e))}(l)}const J=e,P=O,{name:U,beanId:W,beanIds:z,focus:A,values:G,action:H,modelValue:K}=u(J),{t:L}=t(),M=i(!1),Q=i(!1),R=i((T=U.value,j()[T]??!1));var T;const X=i(),Y=i(J.initValues()),Z=i(),ee=i(),ae=i([]),le=d((()=>null!=ee.value&&"edit"===H.value)),ue=d((()=>!M.value&&!n.isEqual(Z.value,G.value))),te=d((()=>J.disableEdit?.(Y.value)??!1)),ie=d((()=>`${U.value} - ${le.value?`${L(te.value?"detail":"edit")} (ID: ${ee.value})`:`${L("add")}`}`)),de=async()=>{M.value=!0;try{Y.value=null!=ee.value?await J.queryBean(ee.value):J.initValues(G.value),Z.value=null!=ee.value?J.toValues(Y.value):Y.value,P("update:values",n.cloneDeep(Z.value)),P("beanChange",Y.value),X.value?.resetFields()}finally{M.value=!1}};s((()=>P("update:values",J.initValues()))),v(K,(()=>{K.value&&(ae.value=z.value,ee.value!==W.value?ee.value=W.value:de())})),v(ee,(()=>{de()})),v(R,(()=>N(U.value,R.value)));const ne=d((()=>ae.value.indexOf(ee.value))),se=d((()=>ne.value>0)),ve=d((()=>ne.value<ae.value.length-1)),oe=()=>{se.value&&(ee.value=ae.value[ne.value-1])},re=()=>{ve.value&&(ee.value=ae.value[ne.value+1])},ce=()=>{A.value?.focus?.(),ee.value=void 0},pe=()=>{P("update:modelValue",!1)},fe=async()=>{Q.value=!0;try{await J.deleteBean([ee.value]),R.value||P("update:modelValue",!1),ve.value?(re(),ae.value.splice(ne.value-1,1)):se.value?(oe(),ae.value.splice(ne.value+1,1)):P("update:modelValue",!1),_.success(L("success")),P("finished")}finally{Q.value=!1}},me=()=>{Z.value=J.toValues(G.value)},be=async()=>{await(J.beforeValidate?.(G.value)),X.value.validate((async e=>{if(e){Q.value=!0;try{if(await(J.preventSubmit?.(G.value)))return;P("beforeSubmit",G.value),le.value?(await J.updateBean(G.value),me()):(await J.createBean(G.value),A.value?.focus?.(),P("update:values",J.initValues(G.value)),X.value.resetFields()),_.success(L("success")),R.value||P("update:modelValue",!1),P("finished",Y.value)}finally{Q.value=!1}}}))};return l({form:X,submit:e=>{X.value.validate((async a=>{if(a){Q.value=!0;try{if(await(J.preventSubmit?.(G.value)))return;P("beforeSubmit",G.value),await e(G.value,{isEdit:le.value,continuous:R.value,form:X.value,props:J,focus:A.value,loadBean:de,resetOrigValues:me,emit:P}),R.value||P("update:modelValue",!1),P("finished",Y.value)}finally{Q.value=!1}}}))},remove:async e=>{Q.value=!0;try{await e(G.value,{isEdit:le.value,continuous:R.value,form:X.value,props:J,focus:A.value,loadBean:de,emit:P}),R.value||P("update:modelValue",!1),ve.value?(re(),ae.value.splice(ne.value-1,1)):se.value?(oe(),ae.value.splice(ne.value+1,1)):P("update:modelValue",!1),_.success(L("success")),P("finished")}finally{Q.value=!1}}}),(l,u)=>{const t=o("el-button"),i=o("el-popconfirm"),d=o("el-button-group"),n=o("el-switch"),s=o("el-tooltip"),v=o("el-tag"),_=o("el-form"),C=o("el-dialog"),O=r("loading");return c(),p(C,{title:ie.value,"close-on-click-modal":!ue.value,"model-value":e.modelValue,width:e.large?"98%":"768px",top:e.large?"16px":"8vh","onUpdate:modelValue":u[3]||(u[3]=e=>l.$emit("update:modelValue",e)),onOpened:u[4]||(u[4]=()=>!le.value&&y(A)?.focus())},{header:f((()=>[m(b(y(U))+" - ",1),le.value?(c(),g("span",a,[m(b(l.$t(te.value?"detail":"edit"))+" ",1),e.showId?(c(),g("span",I,"(ID: "+b(ee.value)+")",1)):V("",!0)])):(c(),g("span",D,b(l.$t("add")),1))])),default:f((()=>[h((c(),g("div",E,[le.value&&e.addable?(c(),p(t,{key:0,disabled:y(w)(`${e.perms}:create`),type:"primary",icon:y(B),onClick:ce},{default:f((()=>[m(b(l.$t("add")),1)])),_:1},8,["disabled","icon"])):V("",!0),$(l.$slots,"header-action",{bean:Y.value,isEdit:le.value,disabled:te.value,unsaved:ue.value,disableDelete:e.disableDelete,handleDelete:fe},(()=>[le.value?(c(),p(i,{key:0,title:l.$t("confirmDelete"),onConfirm:u[0]||(u[0]=()=>fe())},{reference:f((()=>[k(t,{disabled:e.disableDelete?.(Y.value)||y(w)(`${e.perms}:delete`),icon:y(q)},{default:f((()=>[m(b(l.$t("delete")),1)])),_:1},8,["disabled","icon"])])),_:1},8,["title"])):V("",!0)])),le.value?(c(),p(d,{key:1},{default:f((()=>[k(t,{disabled:!se.value,onClick:oe},{default:f((()=>[m(b(l.$t("form.prev")),1)])),_:1},8,["disabled"]),k(t,{disabled:!ve.value,onClick:re},{default:f((()=>[m(b(l.$t("form.next")),1)])),_:1},8,["disabled"])])),_:1})):V("",!0),k(t,{type:"primary",onClick:pe},{default:f((()=>[m(b(l.$t("back")),1)])),_:1}),k(s,{content:l.$t("form.continuous"),placement:"top"},{default:f((()=>[k(n,{modelValue:R.value,"onUpdate:modelValue":u[1]||(u[1]=e=>R.value=e),size:"small"},null,8,["modelValue"])])),_:1},8,["content"]),ue.value?(c(),p(v,{key:2,type:"danger"},{default:f((()=>[m(b(l.$t("form.unsaved")),1)])),_:1})):V("",!0),$(l.$slots,"header-status",{bean:Y.value,isEdit:le.value,disabled:te.value})])),[[O,M.value||Q.value]]),k(_,{ref_key:"form",ref:X,class:S(["mt-5","pr-5"]),model:y(G),disabled:te.value,"label-width":e.labelWidth,"label-position":e.labelPosition,"scroll-to-error":""},{default:f((()=>[$(l.$slots,"default",{bean:Y.value,isEdit:le.value,disabled:te.value}),te.value?V("",!0):h((c(),g("div",x,[$(l.$slots,"footer-action",{bean:Y.value,isEdit:le.value,disabled:te.value,handleSubmit:be},(()=>[k(t,{disabled:y(w)(le.value?`${e.perms}:update`:`${e.perms}:create`),type:"primary","native-type":"submit",onClick:u[2]||(u[2]=F((()=>be()),["prevent"]))},{default:f((()=>[m(b(l.$t("save")),1)])),_:1},8,["disabled"])]))])),[[O,Q.value]])])),_:3},8,["model","disabled","label-width","label-position"])])),_:3},8,["title","close-on-click-modal","model-value","width","top"])}}}))}}}));
