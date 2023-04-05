import{d as fe,u as ve,r as L,X as Ve,aY as x,V as f,o as ye,a as V,b as be,c as i,e as b,w as l,h as e,I as q,a8 as T,a7 as w,f as Q,i as p,j as qe,g as k,k as I,t as R,as as j,l as we,P as c,E as F,aB as Ue,aZ as $e,_ as xe}from"./index-285670b0.js";import{t as ke}from"./tree-73f11865.js";import{q as Me}from"./system-d8c910a1.js";import{d as Le,e as Se,g as _e,h as Te,j as Ae,k as Ce,l as Ie,s as Re,m as De,n as Ke,o as he,p as Ee,r as Pe,t as ze,v as He,w as We,x as Ne,y as Be,z as je}from"./config-43502fd6.js";import{_ as d}from"./LabelTip.vue_vue_type_script_setup_true_lang-3e1cb478.js";import{_ as Fe}from"./FieldItem.vue_vue_type_script_setup_true_lang-180c3254.js";import"./content-214478a8.js";import"./FileListUpload.vue_vue_type_style_index_0_scoped_cd89d899_lang-908ae973.js";import"./BaseUpload-8033ede3.js";/* empty css                                                                   */const Ge=["innerHTML"],Je={key:9},Oe={name:"GlobalSettings"},Xe=fe({...Oe,setup(Ye){const{t:E}=ve(),P=L(),A=L({}),u=L({}),D=L(!1),S=L(!1),G=L([]),J=L(),ee=Ve(()=>{var t;return JSON.parse(((t=J.value)==null?void 0:t.customs)||"[]")}),U=[];x("config:base:update")&&U.push("base"),x("config:upload:update")&&U.push("upload"),x("config:register:update")&&U.push("register"),x("config:security:update")&&(f.epRank>=1||f.epDisplay)&&U.push("security"),x("config:sms:update")&&U.push("sms"),x("config:email:update")&&U.push("email"),x("config:uploadStorage:update")&&U.push("uploadStorage"),x("config:htmlStorage:update")&&U.push("htmlStorage"),x("config:templateStorage:update")&&U.push("templateStorage"),x("config:customs:update")&&U.push("customs");const g=L(U[0]),O=async t=>{t==="upload"?u.value=A.value.upload:t==="register"?u.value=A.value.register:t==="security"?u.value=A.value.security:t==="customs"?u.value=A.value.customs:t==="sms"?u.value=await _e():t==="email"?u.value=await Te():t==="uploadStorage"?u.value=await Ae():t==="htmlStorage"?u.value=await Ce():t==="templateStorage"?u.value=await Ie():u.value=A.value},le=async()=>{J.value=await Le()},X=async()=>{A.value=await Se(),O(g.value)},ae=async()=>{G.value=ke(await Me())};ye(async()=>{D.value=!0;try{await Promise.all([X(),le(),ae()])}finally{D.value=!1}});const W=async()=>{D.value=!0;try{await X()}finally{D.value=!1}},ue=()=>{P.value.validate(async t=>{if(t){S.value=!0;try{g.value==="upload"?await Ke(u.value):g.value==="register"?await he(u.value):g.value==="security"?await Ee(u.value):g.value==="customs"?await Pe(u.value):g.value==="sms"?await ze(u.value):g.value==="email"?await He(u.value):g.value==="uploadStorage"?await We(u.value):g.value==="htmlStorage"?await Ne(u.value):g.value==="templateStorage"?await Be(u.value):await je(u.value),$e(),F.success(E("success"))}finally{S.value=!1}W()}})},se=()=>{P.value.validate(async t=>{if(t){S.value=!0;try{const{status:s,message:_}=await Re(u.value);s===-1?c.alert(_):F.success(E("success"))}finally{S.value=!1}W()}})},te=()=>{P.value.validate(async t=>{if(t){S.value=!0;try{const{status:s,message:_}=await De(u.value);s===-1?c.alert(_):F.success(E("success"))}finally{S.value=!1}W()}})},C=t=>{const s=Ue.uploadsExtensionBlacklist.split(","),_=t.split(",");return s.findIndex(N=>_.includes(N))>=0};return(t,s)=>{const _=V("el-tab-pane"),N=V("el-tabs"),oe=V("el-aside"),n=V("el-input"),o=V("el-form-item"),r=V("el-col"),m=V("el-input-number"),M=V("el-row"),K=V("el-switch"),z=V("el-option"),H=V("el-select"),re=V("el-alert"),h=V("el-divider"),de=V("el-radio-button"),ne=V("el-radio-group"),ie=V("el-tree-select"),B=V("el-button"),me=V("el-form"),pe=V("el-main"),ge=V("el-container"),Y=be("loading");return i(),b(ge,null,{default:l(()=>[e(oe,{width:"180px",class:"pr-3"},{default:l(()=>[e(N,{modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=$=>g.value=$),"tab-position":"left",stretch:"",class:"bg-white",onTabClick:s[1]||(s[1]=({paneName:$})=>O($))},{default:l(()=>[(i(),q(w,null,T(U,$=>e(_,{key:$,name:$,label:t.$t(`config.settings.${$}`)},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),_:1}),e(pe,{class:"p-3 app-block"},{default:l(()=>[Q((i(),b(me,{ref_key:"form",ref:P,model:u.value,"label-width":"160px"},{default:l(()=>{var $,Z;return[g.value==="upload"?(i(),b(M,{key:0},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(o,{prop:"imageTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.imageTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.imageTypes,"onUpdate:modelValue":s[2]||(s[2]=a=>u.value.imageTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"imageLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.imageLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.imageLimit,"onUpdate:modelValue":s[3]||(s[3]=a=>u.value.imageLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"videoTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.videoTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.videoTypes,"onUpdate:modelValue":s[4]||(s[4]=a=>u.value.videoTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"videoLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.videoLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.videoLimit,"onUpdate:modelValue":s[5]||(s[5]=a=>u.value.videoLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"audioTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.audioTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.audioTypes,"onUpdate:modelValue":s[6]||(s[6]=a=>u.value.audioTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"audioLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.audioLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.audioLimit,"onUpdate:modelValue":s[7]||(s[7]=a=>u.value.audioLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"libraryTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.libraryTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.libraryTypes,"onUpdate:modelValue":s[8]||(s[8]=a=>u.value.libraryTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"libraryLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.libraryLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.libraryLimit,"onUpdate:modelValue":s[9]||(s[9]=a=>u.value.libraryLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"docTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.docTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.docTypes,"onUpdate:modelValue":s[10]||(s[10]=a=>u.value.docTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"docLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.docLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.docLimit,"onUpdate:modelValue":s[11]||(s[11]=a=>u.value.docLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"fileTypes",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(C(y)){v(t.$t("config.upload.error.extensionNotAllowd"));return}v()}}]},{label:l(()=>[e(d,{message:"config.upload.fileTypes",help:""})]),default:l(()=>[e(n,{modelValue:u.value.fileTypes,"onUpdate:modelValue":s[12]||(s[12]=a=>u.value.fileTypes=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"fileLimit",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.fileLimit",help:""})]),default:l(()=>[e(m,{modelValue:u.value.fileLimit,"onUpdate:modelValue":s[13]||(s[13]=a=>u.value.fileLimit=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"imageMaxWidth",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.imageMaxWidth",help:""})]),default:l(()=>[e(m,{modelValue:u.value.imageMaxWidth,"onUpdate:modelValue":s[14]||(s[14]=a=>u.value.imageMaxWidth=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"imageMaxHeight",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.upload.imageMaxHeight",help:""})]),default:l(()=>[e(m,{modelValue:u.value.imageMaxHeight,"onUpdate:modelValue":s[15]||(s[15]=a=>u.value.imageMaxHeight=a),min:0,max:65535},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})):g.value==="register"?(i(),b(M,{key:1},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(o,{prop:"enabled",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.enabled"})]),default:l(()=>[e(K,{modelValue:u.value.enabled,"onUpdate:modelValue":s[16]||(s[16]=a=>u.value.enabled=a)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"verifyMode",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.verifyMode"})]),default:l(()=>[e(H,{modelValue:u.value.verifyMode,"onUpdate:modelValue":s[17]||(s[17]=a=>u.value.verifyMode=a)},{default:l(()=>[(i(),q(w,null,T([1,2,3,4],a=>e(z,{key:a,label:p(E)(`config.register.verifyMode.${a}`),value:a},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"usernameMinLength",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.usernameMinLength"})]),default:l(()=>[e(m,{modelValue:u.value.usernameMinLength,"onUpdate:modelValue":s[18]||(s[18]=a=>u.value.usernameMinLength=a),min:1,max:12},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"usernameMaxLength",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.usernameMaxLength"})]),default:l(()=>[e(m,{modelValue:u.value.usernameMaxLength,"onUpdate:modelValue":s[19]||(s[19]=a=>u.value.usernameMaxLength=a),min:1,max:30},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"usernameRegex",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.usernameRegex",help:""})]),default:l(()=>[e(n,{modelValue:u.value.usernameRegex,"onUpdate:modelValue":s[20]||(s[20]=a=>u.value.usernameRegex=a),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"smallAvatarSize",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.smallAvatarSize"})]),default:l(()=>[e(m,{modelValue:u.value.smallAvatarSize,"onUpdate:modelValue":s[21]||(s[21]=a=>u.value.smallAvatarSize=a),min:1,max:9999},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"mediumAvatarSize",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.mediumAvatarSize"})]),default:l(()=>[e(m,{modelValue:u.value.mediumAvatarSize,"onUpdate:modelValue":s[22]||(s[22]=a=>u.value.mediumAvatarSize=a),min:1,max:9999},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"largeAvatarSize",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.largeAvatarSize"})]),default:l(()=>[e(m,{modelValue:u.value.largeAvatarSize,"onUpdate:modelValue":s[23]||(s[23]=a=>u.value.largeAvatarSize=a),min:1,max:9999},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"avatar",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.register.avatar"})]),default:l(()=>[e(n,{modelValue:u.value.avatar,"onUpdate:modelValue":s[24]||(s[24]=a=>u.value.avatar=a),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})):g.value==="security"&&p(f).epRank<1?(i(),b(re,{key:2,type:"warning",closable:!1,"show-icon":!0},{title:l(()=>[qe("span",{innerHTML:t.$t("error.enterprise")},null,8,Ge)]),_:1})):g.value==="security"&&p(f).epRank>=1?(i(),b(M,{key:3},{default:l(()=>[e(r,{span:24},{default:l(()=>[e(o,{prop:"passwordStrength"},{label:l(()=>[e(d,{message:"config.security.passwordStrength"})]),default:l(()=>[e(H,{modelValue:u.value.passwordStrength,"onUpdate:modelValue":s[25]||(s[25]=a=>u.value.passwordStrength=a),class:"w-full"},{default:l(()=>[(i(),q(w,null,T([0,1,2,3,4],a=>e(z,{key:a,value:a,label:t.$t(`config.security.passwordStrength.${a}`)},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordMinLength"},{label:l(()=>[e(d,{message:"config.security.passwordMinLength",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordMinLength,"onUpdate:modelValue":s[26]||(s[26]=a=>u.value.passwordMinLength=a),min:0,max:16},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordMaxLength"},{label:l(()=>[e(d,{message:"config.security.passwordMaxLength",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordMaxLength,"onUpdate:modelValue":s[27]||(s[27]=a=>u.value.passwordMaxLength=a),min:16,max:64},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"userMaxAttempts"},{label:l(()=>[e(d,{message:"config.security.userMaxAttempts",help:""})]),default:l(()=>[e(m,{modelValue:u.value.userMaxAttempts,"onUpdate:modelValue":s[28]||(s[28]=a=>u.value.userMaxAttempts=a),min:0,max:100},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"userLockMinutes"},{label:l(()=>[e(d,{message:"config.security.userLockMinutes",help:""})]),default:l(()=>[e(m,{modelValue:u.value.userLockMinutes,"onUpdate:modelValue":s[29]||(s[29]=a=>u.value.userLockMinutes=a),min:1,max:1440},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"ipCaptchaAttempts"},{label:l(()=>[e(d,{message:"config.security.ipCaptchaAttempts",help:""})]),default:l(()=>[e(m,{modelValue:u.value.ipCaptchaAttempts,"onUpdate:modelValue":s[30]||(s[30]=a=>u.value.ipCaptchaAttempts=a),min:0,max:100},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"ipMaxAttempts"},{label:l(()=>[e(d,{message:"config.security.ipMaxAttempts",help:""})]),default:l(()=>[e(m,{modelValue:u.value.ipMaxAttempts,"onUpdate:modelValue":s[31]||(s[31]=a=>u.value.ipMaxAttempts=a),min:0,max:999},null,8,["modelValue"])]),_:1})]),_:1}),p(f).epRank>=2||p(f).epDisplay?(i(),q(w,{key:0},[e(h,{"content-position":"left"}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordMinDays"},{label:l(()=>[e(d,{message:"config.security.passwordMinDays",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordMinDays,"onUpdate:modelValue":s[32]||(s[32]=a=>u.value.passwordMinDays=a),min:0,max:998},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordMaxDays"},{label:l(()=>[e(d,{message:"config.security.passwordMaxDays",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordMaxDays,"onUpdate:modelValue":s[33]||(s[33]=a=>u.value.passwordMaxDays=a),min:0,max:999},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordWarnDays"},{label:l(()=>[e(d,{message:"config.security.passwordWarnDays",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordWarnDays,"onUpdate:modelValue":s[34]||(s[34]=a=>u.value.passwordWarnDays=a),min:0,max:90},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passwordMaxHistory"},{label:l(()=>[e(d,{message:"config.security.passwordMaxHistory",help:""})]),default:l(()=>[e(m,{modelValue:u.value.passwordMaxHistory,"onUpdate:modelValue":s[35]||(s[35]=a=>u.value.passwordMaxHistory=a),min:0,max:24},null,8,["modelValue"])]),_:1})]),_:1})],64)):k("",!0),p(f).epRank>=3||p(f).epDisplay?(i(),q(w,{key:1},[e(h,{"content-position":"left"}),e(r,{span:12},{default:l(()=>[e(o,{prop:"twoFactor"},{label:l(()=>[e(d,{message:"config.security.twoFactor",help:""})]),default:l(()=>[e(K,{modelValue:u.value.twoFactor,"onUpdate:modelValue":s[36]||(s[36]=a=>u.value.twoFactor=a),disabled:p(f).epRank<3},null,8,["modelValue","disabled"])]),_:1})]),_:1})],64)):k("",!0),e(r,{span:24},{default:l(()=>[e(h,{"content-position":"left"}),e(o,{prop:"ssrfWhiteList"},{label:l(()=>[e(d,{message:"config.security.ssrfWhiteList",help:""})]),default:l(()=>[e(n,{modelValue:u.value.ssrfWhiteList,"onUpdate:modelValue":s[37]||(s[37]=a=>u.value.ssrfWhiteList=a),rows:12,type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):g.value==="sms"?(i(),b(M,{key:4},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(o,{prop:"provider",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.provider"})]),default:l(()=>[e(ne,{modelValue:u.value.provider,"onUpdate:modelValue":s[38]||(s[38]=a=>u.value.provider=a)},{default:l(()=>[(i(),q(w,null,T([0,1,2],a=>e(de,{key:a,label:a},{default:l(()=>[I(R(t.$t(`config.sms.provider.${a}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),u.value.provider!==0?(i(),q(w,{key:0},[e(r,{span:12},{default:l(()=>[e(o,{prop:"maxPerIp"},{label:l(()=>[e(d,{message:"config.sms.maxPerIp"})]),default:l(()=>[e(m,{modelValue:u.value.maxPerIp,"onUpdate:modelValue":s[39]||(s[39]=a=>u.value.maxPerIp=a),min:1,max:99999},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"codeLength"},{label:l(()=>[e(d,{message:"config.sms.codeLength"})]),default:l(()=>[e(m,{modelValue:u.value.codeLength,"onUpdate:modelValue":s[40]||(s[40]=a=>u.value.codeLength=a),min:4,max:6},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"codeExpires"},{label:l(()=>[e(d,{message:"config.sms.codeExpires",help:""})]),default:l(()=>[e(m,{modelValue:u.value.codeExpires,"onUpdate:modelValue":s[41]||(s[41]=a=>u.value.codeExpires=a),min:3,max:30},null,8,["modelValue"])]),_:1})]),_:1}),u.value.provider===1?(i(),q(w,{key:0},[e(r,{span:12},{default:l(()=>[e(o,{prop:"accessKeyId",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.accessKeyId"})]),default:l(()=>[e(n,{modelValue:u.value.accessKeyId,"onUpdate:modelValue":s[42]||(s[42]=a=>u.value.accessKeyId=a),maxlength:"128","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"accessKeySecret",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.accessKeySecret"})]),default:l(()=>[e(n,{modelValue:u.value.accessKeySecret,"onUpdate:modelValue":s[43]||(s[43]=a=>u.value.accessKeySecret=a),maxlength:"128","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"templateCode",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.templateCode"})]),default:l(()=>[e(n,{modelValue:u.value.templateCode,"onUpdate:modelValue":s[44]||(s[44]=a=>u.value.templateCode=a),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"codeName",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.codeName"})]),default:l(()=>[e(n,{modelValue:u.value.codeName,"onUpdate:modelValue":s[45]||(s[45]=a=>u.value.codeName=a),maxlength:"20"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})],64)):u.value.provider===2?(i(),q(w,{key:1},[e(r,{span:12},{default:l(()=>[e(o,{prop:"secretId",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.secretId"})]),default:l(()=>[e(n,{modelValue:u.value.secretId,"onUpdate:modelValue":s[46]||(s[46]=a=>u.value.secretId=a),maxlength:"128","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"secretKey",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.secretKey"})]),default:l(()=>[e(n,{modelValue:u.value.secretKey,"onUpdate:modelValue":s[47]||(s[47]=a=>u.value.secretKey=a),maxlength:"128","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"templateId",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.templateId"})]),default:l(()=>[e(n,{modelValue:u.value.templateId,"onUpdate:modelValue":s[48]||(s[48]=a=>u.value.templateId=a),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"sdkAppId",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.sdkAppId"})]),default:l(()=>[e(n,{modelValue:u.value.sdkAppId,"onUpdate:modelValue":s[49]||(s[49]=a=>u.value.sdkAppId=a),maxlength:"64"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"region",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.region",help:""})]),default:l(()=>[e(n,{modelValue:u.value.region,"onUpdate:modelValue":s[50]||(s[50]=a=>u.value.region=a),maxlength:"64"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})],64)):k("",!0),e(r,{span:12},{default:l(()=>[e(o,{prop:"signName",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.sms.signName",help:""})]),default:l(()=>[e(n,{modelValue:u.value.signName,"onUpdate:modelValue":s[51]||(s[51]=a=>u.value.signName=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(h,{"content-position":"left"},{default:l(()=>[I(R(t.$t("config.sms.test")),1)]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"testMobile"},{label:l(()=>[e(d,{message:"config.sms.testMobile"})]),default:l(()=>[e(n,{modelValue:u.value.testMobile,"onUpdate:modelValue":s[52]||(s[52]=a=>u.value.testMobile=a),maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1})],64)):k("",!0)]),_:1})):g.value==="email"?(i(),b(M,{key:5},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(o,{prop:"host",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.host",help:""})]),default:l(()=>[e(n,{modelValue:u.value.host,"onUpdate:modelValue":s[53]||(s[53]=a=>u.value.host=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"port",rules:{type:"number",min:0,max:65535,message:()=>t.$t("v.range",{min:0,max:65535})}},{label:l(()=>[e(d,{message:"config.email.port",help:""})]),default:l(()=>[e(n,{modelValue:u.value.port,"onUpdate:modelValue":s[54]||(s[54]=a=>u.value.port=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"username",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.username",help:""})]),default:l(()=>[e(n,{modelValue:u.value.username,"onUpdate:modelValue":s[55]||(s[55]=a=>u.value.username=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"password",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.password",help:""})]),default:l(()=>[e(n,{modelValue:u.value.password,"onUpdate:modelValue":s[56]||(s[56]=a=>u.value.password=a),maxlength:"50","show-password":""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"from",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.from",help:""})]),default:l(()=>[e(n,{modelValue:u.value.from,"onUpdate:modelValue":s[57]||(s[57]=a=>u.value.from=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"timeout",rules:{type:"number",min:0,max:65535,message:()=>t.$t("v.range",{min:0,max:65535})}},{label:l(()=>[e(d,{message:"config.email.timeout",help:""})]),default:l(()=>[e(n,{modelValue:u.value.timeout,"onUpdate:modelValue":s[58]||(s[58]=a=>u.value.timeout=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"ssl"},{label:l(()=>[e(d,{message:"config.email.ssl",help:""})]),default:l(()=>[e(K,{modelValue:u.value.ssl,"onUpdate:modelValue":s[59]||(s[59]=a=>u.value.ssl=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"maxPerIp"},{label:l(()=>[e(d,{message:"config.email.maxPerIp"})]),default:l(()=>[e(m,{modelValue:u.value.maxPerIp,"onUpdate:modelValue":s[60]||(s[60]=a=>u.value.maxPerIp=a),min:1,max:99999},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"codeLength"},{label:l(()=>[e(d,{message:"config.email.codeLength"})]),default:l(()=>[e(m,{modelValue:u.value.codeLength,"onUpdate:modelValue":s[61]||(s[61]=a=>u.value.codeLength=a),min:4,max:6},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"codeExpires"},{label:l(()=>[e(d,{message:"config.email.codeExpires",help:""})]),default:l(()=>[e(m,{modelValue:u.value.codeExpires,"onUpdate:modelValue":s[62]||(s[62]=a=>u.value.codeExpires=a),min:3,max:30},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"subject",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.subject"})]),default:l(()=>[e(n,{modelValue:u.value.subject,"onUpdate:modelValue":s[63]||(s[63]=a=>u.value.subject=a),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"text",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.email.text",help:""})]),default:l(()=>[e(n,{modelValue:u.value.text,"onUpdate:modelValue":s[64]||(s[64]=a=>u.value.text=a),rows:3,type:"textarea",maxlength:"400"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(h,{"content-position":"left"},{default:l(()=>[I(R(t.$t("config.email.testEmail")),1)]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"testTo"},{label:l(()=>[e(d,{message:"config.email.testTo"})]),default:l(()=>[e(n,{modelValue:u.value.testTo,"onUpdate:modelValue":s[65]||(s[65]=a=>u.value.testTo=a),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):g.value==="uploadStorage"||g.value==="htmlStorage"||g.value==="templateStorage"?(i(),b(M,{key:6},{default:l(()=>[e(r,{span:24},{default:l(()=>[e(o,{prop:"type",rules:[{required:!0,message:()=>t.$t("v.required")},{validator:(a,y,v)=>{if(y!==0&&p(f).epRank<1){v(t.$t("error.enterprise.short"));return}v()}}]},{label:l(()=>[e(d,{message:"config.storage.type"})]),default:l(()=>[e(H,{modelValue:u.value.type,"onUpdate:modelValue":s[66]||(s[66]=a=>u.value.type=a),class:"w-full"},{default:l(()=>[(i(!0),q(w,null,T([0,1,10].filter(a=>a===0||p(f).epRank>2||p(f).epDisplay),a=>(i(),b(z,{key:a,value:a,label:t.$t(`config.storage.type.${a}`)},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"path",rules:{pattern:/^(?!.*\.\.).*$/,message:()=>t.$t("v.url")}},{label:l(()=>[e(d,{message:"config.storage.path"})]),default:l(()=>[e(n,{modelValue:u.value.path,"onUpdate:modelValue":s[67]||(s[67]=a=>u.value.path=a),maxlength:"160"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"url",rules:{pattern:/^(?!.*\.\.).*$/,message:()=>t.$t("v.url")}},{label:l(()=>[e(d,{message:"config.storage.url"})]),default:l(()=>[e(n,{modelValue:u.value.url,"onUpdate:modelValue":s[68]||(s[68]=a=>u.value.url=a),maxlength:"160"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),u.value.type===1?(i(),q(w,{key:0},[e(r,{span:12},{default:l(()=>[e(o,{prop:"hostname",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.hostname"})]),default:l(()=>[e(n,{modelValue:u.value.hostname,"onUpdate:modelValue":s[69]||(s[69]=a=>u.value.hostname=a),maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"port",rules:{type:"number",min:0,max:65535,message:()=>t.$t("v.range",{min:0,max:65535})}},{label:l(()=>[e(d,{message:"config.storage.port",help:""})]),default:l(()=>[e(n,{modelValue:u.value.port,"onUpdate:modelValue":s[70]||(s[70]=a=>u.value.port=a),modelModifiers:{number:!0},disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"username",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.username"})]),default:l(()=>[e(n,{modelValue:u.value.username,"onUpdate:modelValue":s[71]||(s[71]=a=>u.value.username=a),maxlength:"50",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"password",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.password"})]),default:l(()=>[e(n,{modelValue:u.value.password,"onUpdate:modelValue":s[72]||(s[72]=a=>u.value.password=a),type:"password","show-password":"",maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"encoding"},{label:l(()=>[e(d,{message:"config.storage.encoding",help:""})]),default:l(()=>[e(n,{modelValue:u.value.encoding,"onUpdate:modelValue":s[73]||(s[73]=a=>u.value.encoding=a),maxlength:"50",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"passive"},{label:l(()=>[e(d,{message:"config.storage.passive",help:""})]),default:l(()=>[e(K,{modelValue:u.value.passive,"onUpdate:modelValue":s[74]||(s[74]=a=>u.value.passive=a),disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"encryption",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.encryption"})]),default:l(()=>[e(H,{modelValue:u.value.encryption,"onUpdate:modelValue":s[75]||(s[75]=a=>u.value.encryption=a),class:"w-full"},{default:l(()=>[(i(),q(w,null,T([0,1,2],a=>e(z,{key:a,label:t.$t(`config.storage.encryption.${a}`),value:a},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1})],64)):k("",!0),u.value.type===10?(i(),q(w,{key:1},[e(r,{span:24},{default:l(()=>[e(o,{prop:"endpoint",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.endpoint"})]),default:l(()=>[e(n,{modelValue:u.value.endpoint,"onUpdate:modelValue":s[76]||(s[76]=a=>u.value.endpoint=a),maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"region",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.region"})]),default:l(()=>[e(n,{modelValue:u.value.region,"onUpdate:modelValue":s[77]||(s[77]=a=>u.value.region=a),maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"bucket",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.bucket"})]),default:l(()=>[e(n,{modelValue:u.value.bucket,"onUpdate:modelValue":s[78]||(s[78]=a=>u.value.bucket=a),maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"accessKey",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.accessKey"})]),default:l(()=>[e(n,{modelValue:u.value.accessKey,"onUpdate:modelValue":s[79]||(s[79]=a=>u.value.accessKey=a),type:"password","show-password":"",maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:l(()=>[e(o,{prop:"secretKey",rules:{required:!0,message:()=>t.$t("v.required")}},{label:l(()=>[e(d,{message:"config.storage.secretKey"})]),default:l(()=>[e(n,{modelValue:u.value.secretKey,"onUpdate:modelValue":s[80]||(s[80]=a=>u.value.secretKey=a),type:"password","show-password":"",maxlength:"160",disabled:p(f).epRank<1},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),_:1})],64)):k("",!0)]),_:1})):g.value==="customs"?(i(),b(M,{key:7},{default:l(()=>[(i(!0),q(w,null,T(p(ee),a=>(i(),b(r,{key:a.code,span:a.double?12:24},{default:l(()=>[e(o,{prop:a.code,rules:a.required?{required:!0,message:()=>t.$t("v.required")}:void 0},{label:l(()=>[e(d,{label:a.name},null,8,["label"])]),default:l(()=>[e(Fe,{modelValue:u.value[a.code],"onUpdate:modelValue":y=>u.value[a.code]=y,"model-key":u.value[a.code+"_key"],"onUpdate:modelKey":y=>u.value[a.code+"_key"]=y,field:a},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["prop","rules"])]),_:2},1032,["span"]))),128))]),_:1})):(i(),b(M,{key:8},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(o,{prop:"port",rules:{type:"number",min:0,max:65535,message:()=>t.$t("v.range",{min:0,max:65535})}},{label:l(()=>[e(d,{message:"config.port",help:""})]),default:l(()=>[e(n,{modelValue:u.value.port,"onUpdate:modelValue":s[81]||(s[81]=a=>u.value.port=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"contextPath"},{label:l(()=>[e(d,{message:"config.contextPath",help:""})]),default:l(()=>[e(n,{modelValue:u.value.contextPath,"onUpdate:modelValue":s[82]||(s[82]=a=>u.value.contextPath=a),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"channelUrl",rules:{pattern:/^\/[\w-]+$/,message:()=>t.$t("config.error.channelUrlPattern")}},{label:l(()=>[e(d,{message:"config.channelUrl",help:""})]),default:l(()=>[e(n,{modelValue:u.value.channelUrl,"onUpdate:modelValue":s[83]||(s[83]=a=>u.value.channelUrl=a),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"articleUrl"},{label:l(()=>[e(d,{message:"config.articleUrl",help:""})]),default:l(()=>[e(n,{modelValue:u.value.articleUrl,"onUpdate:modelValue":s[84]||(s[84]=a=>u.value.articleUrl=a),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"defaultSiteId",label:t.$t("config.defaultSite")},{default:l(()=>[e(ie,{modelValue:u.value.defaultSiteId,"onUpdate:modelValue":s[85]||(s[85]=a=>u.value.defaultSiteId=a),data:G.value,"node-key":"id",props:{label:"name"},class:"w-full","render-after-expand":!1,"check-strictly":""},null,8,["modelValue","data"])]),_:1},8,["label"])]),_:1}),e(r,{span:12},{default:l(()=>[e(o,{prop:"multiDomain"},{label:l(()=>[e(d,{message:"config.multiDomain",help:""})]),default:l(()=>[e(K,{modelValue:u.value.multiDomain,"onUpdate:modelValue":s[86]||(s[86]=a=>u.value.multiDomain=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})),g.value!=="security"||p(f).epRank>1?Q((i(),q("div",Je,[e(B,{disabled:p(j)(`config:${g.value}:update`),type:"primary","native-type":"submit",onClick:s[87]||(s[87]=we(()=>ue(),["prevent"]))},{default:l(()=>[I(R(t.$t("save")),1)]),_:1},8,["disabled"]),g.value==="sms"&&u.value.provider!==0?(i(),b(B,{key:0,disabled:p(j)("config:sms:update")||!(($=u.value.testMobile)!=null&&$.trim()),onClick:s[88]||(s[88]=()=>se())},{default:l(()=>[I(R(t.$t("config.sms.op.testSend")),1)]),_:1},8,["disabled"])):k("",!0),g.value==="email"?(i(),b(B,{key:1,disabled:p(j)("config:email:update")||!((Z=u.value.testTo)!=null&&Z.trim()),onClick:s[89]||(s[89]=()=>te())},{default:l(()=>[I(R(t.$t("config.email.op.testSend")),1)]),_:1},8,["disabled"])):k("",!0)])),[[Y,S.value]]):k("",!0)]}),_:1},8,["model"])),[[Y,D.value]])]),_:1})]),_:1})}}});const rl=xe(Xe,[["__scopeId","data-v-46b19480"]]);export{rl as default};
