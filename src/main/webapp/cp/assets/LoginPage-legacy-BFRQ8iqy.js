System.register(["./index-legacy-CiIiERxr.js"],(function(e,a){"use strict";var l,t,s,u,r,o,d,n,i,p,c,m,v,g,h,w,f,y,V,b,x,_,$,k,q,M,P,C,U,S,I,L,A,F,D,R,E,B,G,N,O,T,j,J,z;return{setters:[e=>{l=e.d,t=e.u,s=e.a,u=e.r,r=e.o,o=e.q,d=e.b,n=e.c,i=e.e,p=e.f,c=e.w,m=e.g,v=e.h,g=e.i,h=e.j,w=e.k,f=e.l,y=e.t,V=e.m,b=e.s,x=e.n,_=e.E,$=e.p,k=e.v,q=e.x,M=e.y,P=e.z,C=e.A,U=e.B,S=e.C,I=e.D,L=e.F,A=e.G,F=e.H,D=e.I,R=e.J,E=e.K,B=e.L,G=e.M,N=e.N,O=e.O,T=e.P,j=e.Q,J=e.R,z=e._}],execute:function(){var a=document.createElement("style");a.textContent="[data-v-7624e2af] .captcha .el-input-group__append{padding:0}\n",document.head.appendChild(a);const H=l({name:"ChangePassword",__name:"ChangePassword",props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":null},setup(e,{emit:a}){const l=a,{t:$}=t(),k=s(),q=u({}),M=u(),P=u(),C=u(!1),U=u(!1),S=u(""),I=u();r((async()=>{C.value=!0;try{S.value=await o()}finally{C.value=!1}}));const L=()=>{M.value.validate((async e=>{if(e){U.value=!0;try{const e=b(q.value.password,S.value),a=b(q.value.newPassword,S.value),t=await x({...q.value,password:e,newPassword:a,passwordAgain:void 0});if(0!==t.status)return void(I.value=t.message);I.value=void 0,M.value.resetFields(),_.success($("success")),l("update:modelValue",!1)}finally{U.value=!1}}}))};return(a,l)=>{const t=d("el-alert"),s=d("el-input"),u=d("el-form-item"),r=d("el-button"),o=d("el-form"),b=d("el-dialog"),x=n("loading");return i(),p(b,{title:a.$t("changePassword"),"model-value":e.modelValue,"onUpdate:modelValue":l[4]||(l[4]=e=>a.$emit("update:modelValue",e)),onOpened:l[5]||(l[5]=()=>{P.value?.focus(),M.value.resetFields()})},{default:c((()=>[m((i(),p(o,{ref_key:"form",ref:M,model:q.value,"label-width":"150px","label-position":"right"},{default:c((()=>[I.value?(i(),p(t,{key:0,title:I.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):v("",!0),g(u,{prop:"username",label:a.$t("user.username"),rules:[{required:!0,message:()=>a.$t("v.required")}]},{default:c((()=>[g(s,{ref_key:"focus",ref:P,modelValue:q.value.username,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value.username=e),maxlength:"30"},null,8,["modelValue"])])),_:1},8,["label","rules"]),g(u,{prop:"password",label:a.$t("user.origPassword"),rules:[{required:!0,message:()=>a.$t("v.required")}]},{default:c((()=>[g(s,{modelValue:q.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>q.value.password=e),maxlength:"50","show-password":""},null,8,["modelValue"])])),_:1},8,["label","rules"]),g(u,{prop:"newPassword",label:a.$t("user.newPassword"),rules:[{required:!0,message:()=>a.$t("v.required")},{min:h(k).security.passwordMinLength,max:h(k).security.passwordMaxLength,message:()=>a.$t("user.error.passwordLength",{min:h(k).security.passwordMinLength,max:h(k).security.passwordMaxLength})},{pattern:new RegExp(h(k).security.passwordPattern),message:()=>a.$t(`user.error.passwordPattern.${h(k).security.passwordStrength}`)}]},{default:c((()=>[g(s,{modelValue:q.value.newPassword,"onUpdate:modelValue":l[2]||(l[2]=e=>q.value.newPassword=e),maxlength:h(k).security.passwordMaxLength,"show-password":""},null,8,["modelValue","maxlength"])])),_:1},8,["label","rules"]),g(u,{prop:"passwordAgain",label:a.$t("user.passwordAgain"),rules:[{required:!0,message:()=>a.$t("v.required")},{validator:(e,l,t)=>{l===q.value.newPassword?t():t(a.$t("user.error.passwordNotMatch"))}}]},{default:c((()=>[g(s,{modelValue:q.value.passwordAgain,"onUpdate:modelValue":l[3]||(l[3]=e=>q.value.passwordAgain=e),maxlength:"50","show-password":""},null,8,["modelValue"])])),_:1},8,["label","rules"]),w("div",null,[g(r,{loading:U.value,type:"primary","native-type":"submit",onClick:V(L,["prevent"])},{default:c((()=>[f(y(a.$t("submit")),1)])),_:1},8,["loading"])])])),_:1},8,["model"])),[[x,C.value]])])),_:1},8,["title","model-value"])}}}),K=l({name:"GetShortMessage",__name:"GetShortMessage",props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":null,finish:null},setup(e,{emit:a}){const l=e,s=a,{modelValue:r}=$(l),{t:o}=t(),n=u(),m=u(),b=u({}),x=u(!1),S=u(),I=u(),L=u(),A=async()=>{const{token:e,image:a}=await q();I.value="data:image/png;base64,"+a,L.value=e};k(r,(()=>{r.value&&A()}));const F=()=>{n.value.validate((async e=>{if(e){x.value=!0;try{const e=await U(L.value??"",b.value.captcha,b.value.mobile,3);if(0!==e.status)return void(S.value=e.message);S.value=void 0,n.value.resetFields(),_.success(o("success")),s("finish",e.result.shortMessageId),s("update:modelValue",!1)}finally{x.value=!1}}}))};return(a,l)=>{const t=d("el-alert"),s=d("el-input"),u=d("el-form-item"),r=d("el-image"),o=d("el-button"),_=d("el-form"),$=d("el-dialog");return i(),p($,{title:a.$t("getShortMessage"),"model-value":e.modelValue,width:"576px","onUpdate:modelValue":l[3]||(l[3]=e=>a.$emit("update:modelValue",e)),onOpened:l[4]||(l[4]=()=>{m.value?.focus(),n.value.resetFields()})},{default:c((()=>[g(_,{ref_key:"form",ref:n,model:b.value,"label-width":"150px","label-position":"right"},{default:c((()=>[S.value?(i(),p(t,{key:0,title:S.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):v("",!0),g(u,{prop:"mobile",label:a.$t("mobile"),rules:[{required:!0,message:()=>a.$t("v.required")},{asyncValidator:async(e,l,t)=>{await h(M)(l)?t(a.$t("mobileNotExist")):t()},trigger:"blur"}]},{default:c((()=>[g(s,{ref_key:"focus",ref:m,modelValue:b.value.mobile,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value.mobile=e),maxlength:"30"},null,8,["modelValue"])])),_:1},8,["label","rules"]),g(u,{prop:"captcha",label:a.$t("captcha"),rules:[{required:!0,message:()=>a.$t("v.required")},{asyncValidator:async(e,l,t)=>{null!=L.value&&await h(P)(L.value,l)?t():t(a.$t("captchaIncorrect"))},trigger:"blur"}],class:"captcha"},{default:c((()=>[g(s,{modelValue:b.value.captcha,"onUpdate:modelValue":l[2]||(l[2]=e=>b.value.captcha=e),name:"captcha",placeholder:a.$t("captcha"),"prefix-icon":h(C)},{append:c((()=>[g(r,{src:I.value,style:{height:"30px","margin-right":"1px"},class:"rounded-r cursor-pointer",title:a.$t("clickToRetrieveCaptcha"),onClick:l[1]||(l[1]=()=>A())},null,8,["src","title"])])),_:1},8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["label","rules"]),w("div",null,[g(o,{loading:x.value,type:"primary","native-type":"submit",onClick:V(F,["prevent"])},{default:c((()=>[f(y(a.$t("submit")),1)])),_:1},8,["loading"])])])),_:1},8,["model"])])),_:1},8,["title","model-value"])}}}),Q={class:"h-full p-3 bg-gray-100"},W={class:"py-5 text-3xl font-bold text-center text-primary"},X={class:"mt-2 text-right"},Y={key:0,class:"mt-5 text-sm text-center text-gray-secondary"},Z=[(e=>(j("data-v-7624e2af"),e=e(),J(),e))((()=>w("p",null,"为避免数据被删改，演示用户登录后只拥有浏览后台功能，操作数据会显示无权访问（403）。",-1)))];e("default",z(l({__name:"LoginPage",setup(e){const{t:a}=t(),l=u(),s=u({}),n=u(),m=u(!1),x=u(!1),_=u(),$=u(),k=u(),M=u(),U=u(!1),j=u(),J=S(),z=I(),ee=u(!1),ae=u(!1),le=u(60),te=u(a("getShortMessage"));L(),A();const se=async()=>{const{token:e,image:a}=await q();_.value="data:image/png;base64,"+a,$.value=e},ue=async()=>{m.value=await R(),m.value&&se()};r((async()=>{n.value.focus(),n.value.select(),ue(),(async()=>{x.value=await E()})()})),F((()=>{j.value=J.query.redirect}));const re=e=>{k.value=e,le.value-=1,te.value=String(le.value);const l=setInterval((()=>{le.value-=1,te.value=String(le.value),le.value<=0&&(te.value=a("getShortMessage"),le.value=60,clearInterval(l))}),1e3)},oe=()=>{l.value.validate((async e=>{if(e){U.value=!0;try{const e=await o(),l=b(s.value.password,e),t=await O({...s.value,password:l,captchaToken:$.value,shortMessageId:k.value});if(0!==t.status)return ue(),void(M.value=t.message);null!=t.result.remainingDays&&T.alert(a("passwordRemaingDays",{remainingDays:t.result.remainingDays}),{type:"warning"}),j.value?z.push(j.value):window.location.reload()}finally{U.value=!1}}}))};return(e,a)=>{const t=d("el-alert"),u=d("el-input"),r=d("el-form-item"),o=d("el-button"),b=d("el-image"),k=d("el-form");return i(),D("div",Q,[w("h3",W,y(h("UJCMS")),1),g(k,{ref_key:"form",ref:l,model:s.value,class:"mx-auto md:max-w-xs"},{default:c((()=>[M.value?(i(),p(t,{key:0,title:M.value,type:"error",class:"mb-3",closable:!1,"show-icon":""},null,8,["title"])):v("",!0),g(r,{prop:"username",rules:[{required:!0,message:()=>e.$t("v.required")}]},{default:c((()=>[g(u,{ref_key:"focus",ref:n,modelValue:s.value.username,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value.username=e),name:"username",placeholder:e.$t("username"),"prefix-icon":h(B),autocomplete:"on"},null,8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"]),g(r,{prop:"password",rules:[{required:!0,message:()=>e.$t("v.required")}]},{default:c((()=>[g(u,{ref:"password",modelValue:s.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value.password=e),type:"password",name:"password",placeholder:e.$t("password"),"prefix-icon":h(G),"show-password":""},null,8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"]),x.value?(i(),p(r,{key:1,prop:"shortMessageValue",rules:[{required:!0,message:()=>e.$t("v.required")}]},{default:c((()=>[g(u,{modelValue:s.value.shortMessageValue,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value.shortMessageValue=e),name:"shortMessageValue",placeholder:e.$t("shortMessage"),"prefix-icon":h(N)},{append:c((()=>[g(o,{disabled:le.value<60,onClick:a[2]||(a[2]=()=>ae.value=!0)},{default:c((()=>[f(y(te.value),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"])):v("",!0),m.value?(i(),p(r,{key:2,prop:"captcha",rules:[{required:!0,message:()=>e.$t("v.required")},{asyncValidator:async(a,l,t)=>{null!=$.value&&await h(P)($.value,l)?t():t(e.$t("captchaIncorrect"))},trigger:"blur"}],class:"captcha"},{default:c((()=>[g(u,{modelValue:s.value.captcha,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value.captcha=e),name:"captcha",placeholder:e.$t("captcha"),"prefix-icon":h(C)},{append:c((()=>[g(b,{src:_.value,style:{height:"30px","margin-right":"1px"},class:"rounded-r cursor-pointer",title:e.$t("clickToRetrieveCaptcha"),onClick:a[4]||(a[4]=()=>se())},null,8,["src","title"])])),_:1},8,["modelValue","placeholder","prefix-icon"])])),_:1},8,["rules"])):v("",!0),g(o,{type:"primary","native-type":"submit",class:"w-full",loading:U.value,onClick:V(oe,["prevent"])},{default:c((()=>[f(y(e.$t("login")),1)])),_:1},8,["loading"]),w("div",X,[g(o,{type:"primary",link:"",onClick:a[6]||(a[6]=()=>ee.value=!0)},{default:c((()=>[f(y(e.$t("changePassword")),1)])),_:1})])])),_:1},8,["model"]),"staging"===h("production")?(i(),D("div",Y,Z)):v("",!0),g(H,{modelValue:ee.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ee.value=e)},null,8,["modelValue"]),g(K,{modelValue:ae.value,"onUpdate:modelValue":a[8]||(a[8]=e=>ae.value=e),onFinish:re},null,8,["modelValue"])])}}}),[["__scopeId","data-v-7624e2af"]]))}}}));
