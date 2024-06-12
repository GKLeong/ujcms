System.register(["./index-legacy-CiIiERxr.js"],(function(e,l){"use strict";var t,a,n,u,i,r,s,d,o,p,c,m,v,g,f,y,h,b,S,V,k,_,x,C,$,I,U,w,O;return{setters:[e=>{t=e.d0,a=e.d,n=e.p,u=e.ac,i=e.r,r=e.b,s=e.e,d=e.I,o=e.i,p=e.w,c=e.j,m=e.d1,v=e.l,g=e.t,f=e.k,y=e.a9,h=e.aa,b=e.u,S=e.v,V=e.cG,k=e.cg,_=e.ak,x=e.aZ,C=e.f,$=e.aM,I=e.m,U=e.d2,w=e.a$,O=e.ba}],execute:function(){const l=(e,l)=>{for(let t=0,a=e.length;t<a;)-1===l.findIndex((l=>l.title===e[t].title))?(e.splice(t,1),a-=1):t+=1;return l.forEach(((l,t)=>{-1===e.findIndex((e=>e.title===l.title))&&e.splice(t,0,{...l})})),e},j=t("ujcmsColumnSettings",{state:()=>({originSettings:{},crrrentSettings:{}}),actions:{getCurrentSettings(e){return this.crrrentSettings[e]||(this.crrrentSettings[e]=[]),this.crrrentSettings[e]},setCurrentSettings(e,l){this.crrrentSettings[e]=l},getOriginSettings(e){return this.originSettings[e]||(this.originSettings[e]=[]),this.originSettings[e]},setOriginSettings(e,l){this.originSettings[e]=l}},persist:{paths:["crrrentSettings"]}}),q={class:"inline-flex align-middle"},M=["divided"],Q=(e("b",a({__name:"ColumnSetting",props:{name:{type:String,required:!0}},setup(e){const t=e,{name:a}=n(t),b=j(),S=u((()=>b.getCurrentSettings(a.value))),V=u((()=>b.getOriginSettings(a.value))),k=u((()=>l(S.value,V.value))),_=i(!1),x=()=>{b.setCurrentSettings(a.value,l([],V.value))};return(e,l)=>{const t=r("el-icon"),a=r("el-tooltip"),n=r("el-button"),u=r("el-checkbox"),i=r("el-drawer");return s(),d("div",q,[o(a,{content:e.$t("table.columnsSetting"),placement:"top"},{default:p((()=>[o(t,{class:"text-lg cursor-pointer text-gray-regular",onClick:l[0]||(l[0]=()=>_.value=!0)},{default:p((()=>[o(c(m))])),_:1})])),_:1},8,["content"]),o(i,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=e=>_.value=e),title:e.$t("table.columnsSetting"),size:375},{default:p((()=>[o(n,{class:"mb-1",round:"",onClick:x},{default:p((()=>[v(g(e.$t("reset")),1)])),_:1}),f("ul",null,[(s(!0),d(y,null,h(k.value,((e,l)=>(s(),d("li",{key:e.title,divided:0===l},[o(u,{modelValue:e.display,"onUpdate:modelValue":l=>e.display=l},{default:p((()=>[v(g(e.title),1)])),_:2},1032,["modelValue","onUpdate:modelValue"])],8,M)))),128))])])),_:1},8,["modelValue","title"])])}}})),e("c",a({name:"ColumnList",props:{name:{type:String,required:!0}},setup(e,{slots:l}){const{name:t}=n(e),{t:a}=b(),i=u((()=>l.default?.().flatMap((e=>e.children?.length>0?e.children:e))??[])),r=e=>"selection"===e?.type?a("table.selection"):e?.label,s=j(),d=u((()=>i.value.map((e=>({title:r(e.props),display:"none"!==e.props?.display})))));S([t,d],(()=>{s.setOriginSettings(t.value,d.value)}),{deep:!0,immediate:!0});const o=u((()=>s.getCurrentSettings(t.value)));return{columns:u((()=>i.value.filter((e=>{const l=o.value.find((l=>r(e.props)===l.title));return l?.display??"none"!==e.props?.display})).map((e=>({...e,key:r(e.props)}))).sort(((e,l)=>{let t=o.value.findIndex((l=>l.title===r(e)));t<0&&(t=i.value.findIndex((l=>r(l)===r(e))));let a=o.value.findIndex((e=>e.title===r(l)));return a<0&&(a=i.value.findIndex((e=>r(e)===r(l)))),t-a}))))}},render(){return this.columns}})),a({name:"QueryInput",props:{inputs:{type:Array,required:!0},name:{type:String,required:!0}},setup(e){const{inputs:l,name:t}=n(e);return()=>l.value.find((e=>e.props.name===t.value))}})),E={class:"flex"},z={class:"space-y-1"},A=(e("_",a({__name:"QueryForm",props:{params:{type:Object,required:!0}},emits:{search:null,reset:null},setup(e){const l=e,{params:t}=n(l),a=V();k("params",t);const m=u((()=>a.default?.().flatMap((e=>e.children?.length>0?e.children:e)).flatMap((e=>e.children?.length>0?e.children:e)).filter((e=>null!=e.props?.name))??[])),b=u((()=>m.value.map((e=>({label:e.props?.label,name:e.props?.name}))))),w=i([]),O=u((()=>b.value.filter((e=>!w.value.includes(e.name))))),j=()=>{Object.keys(t.value).forEach((e=>{w.value.includes(e)||-1!==w.value.findIndex((l=>l.split(",").includes(e)))||delete t.value[e]}))};return S(b,(()=>{const[e]=b.value;if(w.value.length>0){const e=b.value.map((e=>e.name));w.value.filter((l=>e.includes(l))),Object.keys(t.value).forEach((l=>{e.includes(l)||-1!==e.findIndex((e=>e.split(",").includes(l)))||delete t.value[l]}))}0===w.value.length&&(w.value=[e.name])}),{deep:!0,immediate:!0}),(e,l)=>{const t=r("el-button"),a=r("el-option"),n=r("el-select"),u=r("el-button-group");return s(),d("form",E,[f("div",z,[(s(!0),d(y,null,h(w.value,((e,u)=>(s(),d("div",{key:e,class:"flex"},[o(t,{icon:c(0==u?_:x),disabled:u<=0&&O.value.length<=0,circle:"",onClick:()=>(e=>{if(0===e){const[e]=O.value;w.value[w.value.length]=e.name}else w.value.splice(e,1),j()})(u)},null,8,["icon","disabled","onClick"]),o(n,{modelValue:w.value[u],"onUpdate:modelValue":e=>w.value[u]=e,class:"w-36",onChange:l[0]||(l[0]=()=>j())},{default:p((()=>[(s(!0),d(y,null,h(b.value.filter((e=>e.name===w.value[u]||O.value.includes(e))),(e=>(s(),C(a,{key:e.name,label:e.label,value:e.name},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(Q,{inputs:m.value,name:w.value[u]},null,8,["inputs","name"])])))),128))]),f("div",null,[o(u,{class:"ml-2"},{default:p((()=>[o(t,{"native-type":"submit",icon:c($),onClick:l[1]||(l[1]=I((()=>e.$emit("search")),["prevent"]))},{default:p((()=>[v(g(e.$t("search")),1)])),_:1},8,["icon"]),o(t,{icon:c(U),onClick:l[2]||(l[2]=()=>e.$emit("reset"))},{default:p((()=>[v(g(e.$t("reset")),1)])),_:1},8,["icon"])])),_:1})])])}}})),{key:0,class:"inline-block"});e("a",a({name:"QueryItem",__name:"QueryItem",props:{label:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,default:null},options:{type:Object,default:null},multiple:{type:Boolean,default:!0}},setup(e){const l=e,t=w("params"),{name:a}=n(l),[u,m]=a.value.split(","),v=i(u),g=i(m);return(l,n)=>{const u=r("el-input-number"),i=r("el-date-picker"),m=r("el-option"),f=r("el-select"),b=r("el-input");return O(l.$slots,"default",{},(()=>["number"===e.type?(s(),d("div",A,[o(u,{modelValue:c(t)[v.value],"onUpdate:modelValue":n[0]||(n[0]=e=>c(t)[v.value]=e),placeholder:l.$t("begin.number"),class:"w-48"},null,8,["modelValue","placeholder"]),o(u,{modelValue:c(t)[g.value],"onUpdate:modelValue":n[1]||(n[1]=e=>c(t)[g.value]=e),placeholder:l.$t("end.number"),class:"w-48"},null,8,["modelValue","placeholder"])])):"date"===e.type?(s(),C(i,{key:1,modelValue:c(t)[c(a)],"onUpdate:modelValue":n[2]||(n[2]=e=>c(t)[c(a)]=e),type:"daterange","start-placeholder":l.$t("begin.date"),"end-placeholder":l.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):"datetime"===e.type?(s(),C(i,{key:2,modelValue:c(t)[c(a)],"onUpdate:modelValue":n[3]||(n[3]=e=>c(t)[c(a)]=e),type:"datetimerange","start-placeholder":l.$t("begin.date"),"end-placeholder":l.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):e.options?(s(),C(f,{key:3,modelValue:c(t)[c(a)],"onUpdate:modelValue":n[4]||(n[4]=e=>c(t)[c(a)]=e),multiple:e.multiple,class:"w-96"},{default:p((()=>[(s(!0),d(y,null,h(e.options,(e=>(s(),C(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","multiple"])):(s(),C(b,{key:4,modelValue:c(t)[c(a)],"onUpdate:modelValue":n[5]||(n[5]=e=>c(t)[c(a)]=e),class:"w-96"},null,8,["modelValue"]))]))}}}))}}}));
