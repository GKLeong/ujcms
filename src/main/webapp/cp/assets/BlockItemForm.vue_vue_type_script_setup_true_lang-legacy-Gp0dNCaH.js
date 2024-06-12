System.register(["./config-legacy-B0hgRqww.js","./content-legacy-CaWWoJUd.js","./DialogForm.vue_vue_type_script_setup_true_lang-legacy-TqTurFLS.js","./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-legacy-pX6CKIrZ.js","./vuedraggable.umd-legacy-BtWPcdPw.js","./index-legacy-CiIiERxr.js","./BaseUpload-legacy-DaqKFJ6f.js"],(function(e,l){"use strict";var a,t,u,d,i,o,r,n,m,s,c,b,p,v,g,k,h,y,V,f,I,_,$,q,U,w,x,B,S;return{setters:[e=>{a=e.a},e=>{t=e.S,u=e.T,d=e.R,i=e.G},e=>{o=e._},e=>{r=e.a},null,e=>{n=e.d,m=e.p,s=e.r,c=e.v,b=e.b,p=e.e,v=e.f,g=e.w,k=e.i,h=e.l,y=e.t,V=e.I,f=e.aa,I=e.a9,_=e.aV,$=e.k,q=e.ae,U=e.ac,w=e.o,x=e.h,B=e.j},e=>{S=e.B}],execute:function(){const l=["onClick"],j=["src"],R=e("_",n({__name:"ImageExtractor",props:{modelValue:{type:Boolean,required:!0},urls:{type:Array,default:()=>[]},min:{type:Number,default:1},max:{type:Number,default:1},appendToBody:{type:Boolean}},emits:["update:modelValue","finished"],setup(e,{emit:a}){const t=e,u=a,{urls:d,max:i,modelValue:o}=m(t),r=s();return c(o,(()=>{o.value&&(r.value=_.uniq(d.value).map((e=>({url:e,checked:!1}))))})),(a,t)=>{const d=b("el-col"),o=b("el-row"),n=b("el-button"),m=b("el-dialog");return p(),v(m,{"model-value":e.modelValue,title:a.$t("article.extractImage"),width:768,"append-to-body":e.appendToBody,"onUpdate:modelValue":t[1]||(t[1]=e=>a.$emit("update:modelValue",e))},{footer:g((()=>[k(n,{type:"primary",disabled:r.value.filter((e=>e.checked)).length<e.min,onClick:t[0]||(t[0]=()=>(u("finished",r.value.filter((e=>e.checked)).map((e=>e.url))),void u("update:modelValue",!1)))},{default:g((()=>[h(y(a.$t("ok")),1)])),_:1},8,["disabled"])])),default:g((()=>[k(o,{gutter:16},{default:g((()=>[(p(!0),V(I,null,f(r.value,(e=>(p(),v(d,{key:e.url,src:e,span:8,class:"mt-2"},{default:g((()=>[$("div",{class:q(["p-1 border-2 rounded cursor-pointer text-center",{"border-primary":e.checked,"border-2":e.checked}]),onClick:()=>(e=>{if(e.checked)return void(e.checked=!e.checked);let l=0;r.value.forEach((e=>{e.checked&&(l+=1),l>=i.value&&(e.checked=!1)})),e.checked=!0})(e)},[$("img",{src:e.url,class:"max-h-36 inline"},null,8,j)],10,l)])),_:2},1032,["src"])))),128))])),_:1})])),_:1},8,["model-value","title","append-to-body"])}}}));e("a",n({name:"BlockItemForm",__name:"BlockItemForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},beanIds:{type:Array,required:!0},blockId:{type:String,default:null},articleId:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},video:{type:String,default:null},images:{type:Array,default:()=>[]}},emits:{"update:modelValue":null,finished:null},setup(e){const l=e,{blockId:n}=m(l),c=s(),_=s(),$=s({}),q=s([]),j=U((()=>q.value.find((e=>e.id===(c.value??n?.value)))));w((async()=>{q.value=await a()}));const T=s(!1);return(l,a)=>{const m=b("el-option"),s=b("el-select"),U=b("el-form-item"),w=b("el-input"),C=b("el-button"),F=b("el-switch");return p(),V("div",null,[k(o,{values:$.value,"onUpdate:values":a[14]||(a[14]=e=>$.value=e),name:l.$t("menu.content.blockItem"),"query-bean":B(t),"create-bean":B(u),"update-bean":B(d),"delete-bean":B(i),"bean-id":e.beanId,"bean-ids":e.beanIds,focus:_.value,"init-values":()=>({blockId:B(n),articleId:e.articleId,title:e.title,description:e.description,video:e.video,enabled:!0}),"to-values":e=>({...e,articleTitle:e.article?.title,articleId:e.article?.id}),addable:j.value?.enabled,perms:"blockItem","model-value":e.modelValue,"onUpdate:modelValue":a[15]||(a[15]=e=>l.$emit("update:modelValue",e)),onFinished:a[16]||(a[16]=()=>l.$emit("finished")),onBeanChange:a[17]||(a[17]=e=>c.value=e.blockId)},{default:g((({isEdit:t})=>[k(U,{prop:"blockId",label:l.$t("blockItem.block"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:g((()=>[k(s,{modelValue:$.value.blockId,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value.blockId=e),class:"w-full",disabled:"",onChange:a[1]||(a[1]=e=>c.value=e)},{default:g((()=>[(p(!0),V(I,null,f(q.value,(e=>(p(),V(I,{key:e.id},[t||e.enabled?(p(),v(m,{key:0,label:e.name,value:e.id,disabled:!e.enabled},null,8,["label","value","disabled"])):x("",!0)],64)))),128))])),_:2},1032,["modelValue"])])),_:2},1032,["label","rules"]),t&&null!=$.value.articleId?(p(),v(U,{key:0,label:l.$t("blockItem.articleId")},{default:g((()=>[k(w,{modelValue:$.value.articleId,"onUpdate:modelValue":a[2]||(a[2]=e=>$.value.articleId=e),disabled:""},null,8,["modelValue"])])),_:1},8,["label"])):x("",!0),t&&null!=$.value.articleTitle?(p(),v(U,{key:1,label:l.$t("blockItem.articleTitle")},{default:g((()=>[k(w,{modelValue:$.value.articleTitle,"onUpdate:modelValue":a[3]||(a[3]=e=>$.value.articleTitle=e),disabled:""},null,8,["modelValue"])])),_:1},8,["label"])):x("",!0),k(U,{prop:"title",label:l.$t("blockItem.title"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:g((()=>[k(w,{ref_key:"focus",ref:_,modelValue:$.value.title,"onUpdate:modelValue":a[4]||(a[4]=e=>$.value.title=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["label","rules"]),null==$.value.articleId&&j.value?.withLinkUrl?(p(),v(U,{key:2,prop:"linkUrl",label:l.$t("blockItem.linkUrl"),rules:j.value?.linkUrlRequired?[{required:!0,message:()=>l.$t("v.required")},{pattern:/^(http|\/).*$/,message:()=>l.$t("blockItem.error.linkUrl")}]:{pattern:/^(http|\/).*$/,message:()=>l.$t("blockItem.error.linkUrl")}},{default:g((()=>[k(w,{modelValue:$.value.linkUrl,"onUpdate:modelValue":a[5]||(a[5]=e=>$.value.linkUrl=e),maxlength:"255"},null,8,["modelValue"])])),_:1},8,["label","rules"])):x("",!0),j.value?.withSubtitle?(p(),v(U,{key:3,prop:"subtitle",label:l.$t("blockItem.subtitle"),rules:{required:j.value?.subtitleRequired,message:()=>l.$t("v.required")}},{default:g((()=>[k(w,{modelValue:$.value.subtitle,"onUpdate:modelValue":a[6]||(a[6]=e=>$.value.subtitle=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["label","rules"])):x("",!0),j.value?.withDescription?(p(),v(U,{key:4,prop:"description",label:l.$t("blockItem.description"),rules:{required:j.value?.descriptionRequired,message:()=>l.$t("v.required")}},{default:g((()=>[k(w,{modelValue:$.value.description,"onUpdate:modelValue":a[7]||(a[7]=e=>$.value.description=e),type:"textarea",rows:5,maxlength:"1000"},null,8,["modelValue"])])),_:1},8,["label","rules"])):x("",!0),j.value?.withImage?(p(),v(U,{key:5,prop:"image",label:l.$t("blockItem.image"),rules:{required:j.value?.imageRequired,message:()=>l.$t("v.required")}},{default:g((()=>[k(B(r),{modelValue:$.value.image,"onUpdate:modelValue":a[8]||(a[8]=e=>$.value.image=e),width:j.value.imageWidth,height:j.value.imageHeight,mode:"manual"},null,8,["modelValue","width","height"]),e.images.length>0?(p(),v(C,{key:0,class:"self-start ml-2",onClick:a[9]||(a[9]=()=>T.value=!0)},{default:g((()=>[h(y(l.$t("article.extractImage")),1)])),_:1})):x("",!0)])),_:1},8,["label","rules"])):x("",!0),j.value?.withMobileImage?(p(),v(U,{key:6,prop:"mobileImage",label:l.$t("blockItem.mobileImage"),rules:{required:j.value?.mobileImageRequired,message:()=>l.$t("v.required")}},{default:g((()=>[k(B(r),{modelValue:$.value.mobileImage,"onUpdate:modelValue":a[10]||(a[10]=e=>$.value.mobileImage=e),width:j.value.mobileImageWidth,height:j.value.mobileImageHeight,mode:"manual"},null,8,["modelValue","width","height"])])),_:1},8,["label","rules"])):x("",!0),j.value?.withVideo?(p(),v(U,{key:7,prop:"video",label:l.$t("blockItem.video"),rules:{required:j.value?.videoRequired,message:()=>l.$t("v.required")}},{default:g((()=>[k(w,{modelValue:$.value.video,"onUpdate:modelValue":a[11]||(a[11]=e=>$.value.video=e),maxlength:"255"},{prepend:g((()=>[h("URL")])),_:1},8,["modelValue"]),k(B(S),{type:"video","on-success":e=>$.value.video=e.url},null,8,["on-success"])])),_:1},8,["label","rules"])):x("",!0),k(U,{prop:"targetBlank",label:l.$t("blockItem.targetBlank")},{default:g((()=>[k(F,{modelValue:$.value.targetBlank,"onUpdate:modelValue":a[12]||(a[12]=e=>$.value.targetBlank=e)},null,8,["modelValue"])])),_:1},8,["label"]),k(U,{prop:"enabled",label:l.$t("blockItem.enabled")},{default:g((()=>[k(F,{modelValue:$.value.enabled,"onUpdate:modelValue":a[13]||(a[13]=e=>$.value.enabled=e)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","addable","model-value"]),k(R,{modelValue:T.value,"onUpdate:modelValue":a[18]||(a[18]=e=>T.value=e),urls:e.images,"append-to-body":!0,onFinished:a[19]||(a[19]=e=>$.value.image=e[0])},null,8,["modelValue","urls"])])}}}))}}}));
