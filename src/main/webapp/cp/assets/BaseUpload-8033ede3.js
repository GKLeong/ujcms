import{d as I,p as A,u as E,r as L,X as d,Z as e,a as p,c as f,I as N,h as _,w as k,b0 as $,i as n,a3 as x,a4 as z,e as C,g as M,E as O,a6 as T,j as V,t as j,_ as D}from"./index-285670b0.js";import{f as F,N as m,O as H,M as J,i as R}from"./config-43502fd6.js";/* empty css                                                                   */const X=I({__name:"BaseUpload",props:{type:{type:String,default:"file",validator:a=>["image","video","audio","library","doc","file","any"].includes(a)},button:{type:String,default:null},data:{type:Object,default:null},uploadAction:{type:String,default:null},fileAccept:{type:String,default:null},fileMaxSize:{type:Number,default:null},multiple:{type:Boolean},disabled:{type:Boolean,default:!1},onSuccess:{type:Function,default:null}},setup(a){const v=a,{type:r,uploadAction:l,fileAccept:s,fileMaxSize:o}=A(v),{t:g}=E(),u=L({}),y=d(()=>{if((l==null?void 0:l.value)!=null)return l.value;switch(r.value){case"image":return R;case"video":return J;case"audio":return H;case"library":return m;case"doc":return m;case"file":return F;default:throw new Error(`Type not support: ${r.value}`)}}),b=d(()=>{if((s==null?void 0:s.value)!=null)return s.value;switch(r.value){case"image":return e.imageInputAccept;case"video":return e.videoInputAccept;case"audio":return e.audioInputAccept;case"library":return e.libraryInputAccept;case"doc":return e.docInputAccept;case"file":return e.fileInputAccept;case"any":return;default:throw new Error(`Type not support: ${r.value}`)}}),i=d(()=>{if((o==null?void 0:o.value)!=null)return o.value;switch(r.value){case"image":return e.imageLimitByte;case"video":return e.videoLimitByte;case"audio":return e.audioLimitByte;case"library":return e.libraryLimitByte;case"doc":return e.docLimitByte;case"file":return e.fileLimitByte;default:return 0}}),B=t=>i.value>0&&t.size>i.value?(O.error(g("error.fileMaxSize",{size:`${i.value/1024/1024} MB`})),!1):!0,U=t=>{T(JSON.parse(t.message))};return(t,Z)=>{const h=p("el-upload"),S=p("el-progress");return f(),N("div",null,[_(h,{action:n(y),headers:{...n(x)(),...n(z)()},data:a.data,accept:n(b),"before-upload":B,"on-success":a.onSuccess,"on-progress":(c,w)=>u.value=w,"on-error":U,"show-file-list":!1,disabled:a.disabled,multiple:a.multiple,drag:""},{default:k(()=>[$(t.$slots,"default",{},()=>{var c;return[V("span",null,j((c=a.button)!=null?c:t.$t("clickOrDragToUpload")),1)]},!0)]),_:3},8,["action","headers","data","accept","on-success","on-progress","disabled","multiple"]),u.value.status==="uploading"?(f(),C(S,{key:0,percentage:parseInt(u.value.percentage,10)},null,8,["percentage"])):M("",!0)])}}}),P=D(X,[["__scopeId","data-v-2414138e"]]);export{P as B};
