import{d as J,r as _,o as K,b as p,e as b,f as B,w as a,I as h,l as f,t as g,h as F,a9 as Y,i as e,aq as v,aa as O,j as i,u as ue,ac as re,C as me,c as ie,k as P,g as pe,aD as fe,aE as ge,E as H,at as z,ak as ve,aY as be,ah as _e,U as ye,aJ as ce,aK as Be}from"./index-DgUB5rOh.js";import{a as Ve,c as $e,u as ke,d as G,b as we,e as Ce}from"./interaction-Bg4lfbkg.js";import{a as Ue,_ as ze,b as Se,c as De}from"./QueryItem.vue_vue_type_script_setup_true_lang-B3tRvAfo.js";import{f as qe}from"./content-DyUbEBXm.js";import{T as Me}from"./Tinymce-OJzILWl4.js";import{_ as Ie}from"./DialogForm.vue_vue_type_script_setup_true_lang-Judg_DCV.js";import"./config-1OSOhRPa.js";const he={key:0},Te=J({name:"MessageBoardForm",__name:"MessageBoardForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(T){const S=_(),l=_({}),$=_([]),D=async()=>{$.value=await qe("sys_message_board_type")};return K(async()=>{D()}),(c,d)=>{const C=p("el-tag"),q=p("el-option"),k=p("el-select"),m=p("el-form-item"),r=p("el-col"),y=p("el-input"),M=p("el-switch"),E=p("el-date-picker"),U=p("el-row");return b(),B(Ie,{values:l.value,"onUpdate:values":d[11]||(d[11]=u=>l.value=u),name:c.$t("menu.interaction.messageBoard"),"query-bean":i(Ve),"create-bean":i($e),"update-bean":i(ke),"delete-bean":i(G),"bean-id":T.beanId,"bean-ids":T.beanIds,focus:S.value,"init-values":()=>{var u;return{typeId:(u=$.value[0])==null?void 0:u.id,userType:1,open:!0,status:0}},"to-values":u=>({...u}),perms:"messageBoard","model-value":T.modelValue,large:"","onUpdate:modelValue":d[12]||(d[12]=u=>c.$emit("update:modelValue",u)),onFinished:d[13]||(d[13]=()=>c.$emit("finished"))},{"header-status":a(({isEdit:u})=>[u?(b(),h(Y,{key:0},[l.value.status!=null?(b(),h("span",he,[l.value.status===0?(b(),B(C,{key:0,type:"success",size:"small","disable-transitions":""},{default:a(()=>[f(g(c.$t("messageBoard.status.".concat(l.value.status))),1)]),_:1})):l.value.status===1?(b(),B(C,{key:1,type:"info",size:"small","disable-transitions":""},{default:a(()=>[f(g(c.$t("messageBoard.status.".concat(l.value.status))),1)]),_:1})):l.value.status===2?(b(),B(C,{key:2,type:"danger",size:"small","disable-transitions":""},{default:a(()=>[f(g(c.$t("messageBoard.status.".concat(l.value.status))),1)]),_:1})):(b(),B(C,{key:3,type:"info",size:"small","disable-transitions":""},{default:a(()=>[f("unknown")]),_:1}))])):F("",!0)],64)):F("",!0)]),default:a(({isEdit:u})=>[e(U,null,{default:a(()=>[e(r,{span:24},{default:a(()=>[e(m,{prop:"typeId",rules:{required:!0,message:()=>c.$t("v.required")}},{label:a(()=>[e(v,{message:"messageBoard.type"})]),default:a(()=>[e(k,{modelValue:l.value.typeId,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value.typeId=t),class:"w-full"},{default:a(()=>[(b(!0),h(Y,null,O($.value,t=>(b(),B(q,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:a(()=>[e(m,{prop:"title",rules:{required:!0,message:()=>c.$t("v.required")}},{label:a(()=>[e(v,{message:"messageBoard.title"})]),default:a(()=>[e(y,{ref_key:"focus",ref:S,modelValue:l.value.title,"onUpdate:modelValue":d[1]||(d[1]=t=>l.value.title=t),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(r,{span:24},{default:a(()=>[e(m,{prop:"text",rules:{required:!0,message:()=>c.$t("v.required")}},{label:a(()=>[e(v,{message:"messageBoard.text"})]),default:a(()=>[e(y,{modelValue:l.value.text,"onUpdate:modelValue":d[2]||(d[2]=t=>l.value.text=t),type:"textarea",rows:"8",maxlength:"65535"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),u?(b(),B(r,{key:0,span:24},{default:a(()=>[e(m,{prop:"replyText"},{label:a(()=>[e(v,{message:"messageBoard.replyText"})]),default:a(()=>[e(i(Me),{modelValue:l.value.replyText,"onUpdate:modelValue":d[3]||(d[3]=t=>l.value.replyText=t),class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1})):F("",!0),e(r,{span:12},{default:a(()=>[e(m,{prop:"contact"},{label:a(()=>[e(v,{message:"messageBoard.contact"})]),default:a(()=>[e(y,{modelValue:l.value.contact,"onUpdate:modelValue":d[4]||(d[4]=t=>l.value.contact=t),maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"nickname"},{label:a(()=>[e(v,{message:"messageBoard.nickname"})]),default:a(()=>[e(y,{modelValue:l.value.nickname,"onUpdate:modelValue":d[5]||(d[5]=t=>l.value.nickname=t),maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"phone"},{label:a(()=>[e(v,{message:"messageBoard.phone"})]),default:a(()=>[e(y,{modelValue:l.value.phone,"onUpdate:modelValue":d[6]||(d[6]=t=>l.value.phone=t),maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"email"},{label:a(()=>[e(v,{message:"messageBoard.email"})]),default:a(()=>[e(y,{modelValue:l.value.email,"onUpdate:modelValue":d[7]||(d[7]=t=>l.value.email=t),maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:24},{default:a(()=>[e(m,{prop:"address"},{label:a(()=>[e(v,{message:"messageBoard.address"})]),default:a(()=>[e(y,{modelValue:l.value.address,"onUpdate:modelValue":d[8]||(d[8]=t=>l.value.address=t),maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"open"},{label:a(()=>[e(v,{message:"messageBoard.open"})]),default:a(()=>[e(M,{modelValue:l.value.open,"onUpdate:modelValue":d[9]||(d[9]=t=>l.value.open=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"recommended"},{label:a(()=>[e(v,{message:"messageBoard.recommended"})]),default:a(()=>[e(M,{modelValue:l.value.recommended,"onUpdate:modelValue":d[10]||(d[10]=t=>l.value.recommended=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"replied"},{label:a(()=>[e(v,{message:"messageBoard.replied"})]),default:a(()=>[e(M,{"model-value":l.value.replied,disabled:""},null,8,["model-value"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"ip"},{label:a(()=>[e(v,{message:"messageBoard.ip"})]),default:a(()=>[e(y,{"model-value":l.value.ip,disabled:""},null,8,["model-value"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"user"},{label:a(()=>[e(v,{message:"messageBoard.user"})]),default:a(()=>{var t;return[e(y,{"model-value":(t=l.value.user)==null?void 0:t.username,disabled:""},null,8,["model-value"])]}),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"created"},{label:a(()=>[e(v,{message:"messageBoard.created"})]),default:a(()=>[e(E,{"model-value":l.value.created,type:"datetime",class:"w-full",disabled:""},null,8,["model-value"])]),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"replyUser"},{label:a(()=>[e(v,{message:"messageBoard.replyUser"})]),default:a(()=>{var t;return[e(y,{"model-value":(t=l.value.replyUser)==null?void 0:t.username,disabled:""},null,8,["model-value"])]}),_:1})]),_:1}),e(r,{span:12},{default:a(()=>[e(m,{prop:"replyDate"},{label:a(()=>[e(v,{message:"messageBoard.replyDate"})]),default:a(()=>[e(E,{"model-value":l.value.replyDate,type:"datetime",class:"w-full",disabled:""},null,8,["model-value"])]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value"])}}}),Ee={class:"mb-3"},Le={class:"space-x-2"},Ne={class:"app-block"},He=J({name:"MessageBoardList",__name:"MessageBoardList",setup(T){var j;const{t:S}=ue(),l=_({}),$=_(),D=_(1),c=_(10),d=_(0),C=_(),q=_([]),k=_([]),m=_(!1),r=_(!1),y=_(),M=re(()=>q.value.map(s=>s.id)),E=me(),U=_(Number((j=E.query.status)!=null?j:"-1")),u=async()=>{m.value=!0;try{const{content:s,totalElements:n}=await we({...fe(l.value),Q_EQ_status:U.value!==-1?U.value:void 0,Q_OrderBy:$.value,page:D.value,pageSize:c.value});q.value=s,d.value=Number(n)}finally{m.value=!1}};K(u);const t=({column:s,prop:n,order:w})=>{var L;n&&w?$.value=((L=s.sortBy)!=null?L:n)+(w==="descending"?"_desc":""):$.value=void 0,u()},W=()=>u(),X=()=>{C.value.clearSort(),ge(l.value),$.value=void 0,u()},Z=()=>{y.value=void 0,r.value=!0},Q=s=>{y.value=s,r.value=!0},R=async s=>{await G(s),u(),H.success(S("success"))},x=async(s,n)=>{await Ce(s,n),u(),H.success(S("success"))};return(s,n)=>{const w=p("el-button"),L=p("el-icon"),ee=p("el-dropdown-item"),ae=p("el-dropdown-menu"),le=p("el-dropdown"),A=p("el-popconfirm"),N=p("el-radio-button"),se=p("el-radio-group"),V=p("el-table-column"),I=p("el-tag"),te=p("el-table"),oe=p("el-pagination"),de=ie("loading");return b(),h("div",null,[P("div",Ee,[e(i(ze),{params:l.value,onSearch:W,onReset:X},{default:a(()=>[e(i(Ue),{label:s.$t("messageBoard.title"),name:"Q_Contains_title"},null,8,["label"])]),_:1},8,["params"])]),P("div",Le,[e(w,{type:"primary",disabled:i(z)("messageBoard:create"),icon:i(ve),onClick:n[0]||(n[0]=()=>Z())},{default:a(()=>[f(g(s.$t("add")),1)]),_:1},8,["disabled","icon"]),e(le,{disabled:k.value.length<=0||i(z)("messageBoard:updateStatus")},{dropdown:a(()=>[e(ae,null,{default:a(()=>[(b(),h(Y,null,O([0,1,2],o=>e(ee,{key:o,onClick:()=>x(k.value.map(ne=>ne.id),o)},{default:a(()=>[f(g(s.$t("messageBoard.status.".concat(o))),1)]),_:2},1032,["onClick"])),64))]),_:1})]),default:a(()=>[e(w,{disabled:k.value.length<=0||i(z)("messageBoard:updateStatus")},{default:a(()=>[f(g(s.$t("messageBoard.op.status")),1),e(L,{class:"el-icon--right"},{default:a(()=>[e(i(be))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["disabled"]),e(A,{title:s.$t("confirmDelete"),onConfirm:n[1]||(n[1]=()=>R(k.value.map(o=>o.id)))},{reference:a(()=>[e(w,{disabled:k.value.length<=0||i(z)("messageBoard:delete"),icon:i(_e)},{default:a(()=>[f(g(s.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(i(Se),{name:"messageBoard"})]),e(se,{modelValue:U.value,"onUpdate:modelValue":n[2]||(n[2]=o=>U.value=o),class:"mt-3",onChange:n[3]||(n[3]=()=>u())},{default:a(()=>[e(N,{value:-1},{default:a(()=>[f(g(s.$t("all")),1)]),_:1}),e(N,{value:0},{default:a(()=>[f(g(s.$t("messageBoard.status.0")),1)]),_:1}),e(N,{value:1},{default:a(()=>[f(g(s.$t("messageBoard.status.1")),1)]),_:1}),e(N,{value:2},{default:a(()=>[f(g(s.$t("messageBoard.status.2")),1)]),_:1})]),_:1},8,["modelValue"]),P("div",Ne,[pe((b(),B(te,{ref_key:"table",ref:C,data:q.value,onSelectionChange:n[4]||(n[4]=o=>k.value=o),onRowDblclick:n[5]||(n[5]=o=>Q(o.id)),onSortChange:t},{default:a(()=>[e(i(De),{name:"messageBoard"},{default:a(()=>[e(V,{type:"selection",width:"38"}),e(V,{property:"id",label:"ID",width:"170",sortable:"custom"}),e(V,{property:"title",label:s.$t("messageBoard.title"),"min-width":"260",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(V,{property:"type.name",label:s.$t("messageBoard.type"),"min-width":"80","sort-by":"type@dict-name",sortable:"custom"},null,8,["label"]),e(V,{property:"user.username",label:s.$t("messageBoard.user"),"min-width":"80","sort-by":"user-username",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(V,{property:"created",label:s.$t("messageBoard.created"),"min-width":"120",sortable:"custom","show-overflow-tooltip":""},{default:a(({row:o})=>[f(g(i(ye)(o.created).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label"]),e(V,{property:"replied",label:s.$t("messageBoard.replied"),"min-width":"80",sortable:"custom"},{default:a(({row:o})=>[e(I,{type:o.replied?"success":"info",size:"small","disable-transitions":""},{default:a(()=>[f(g(s.$t(o.replied?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(V,{property:"status",label:s.$t("messageBoard.status"),"min-width":"80",sortable:"custom"},{default:a(({row:o})=>[o.status===0?(b(),B(I,{key:0,type:"success",size:"small","disable-transitions":""},{default:a(()=>[f(g(s.$t("messageBoard.status.".concat(o.status))),1)]),_:2},1024)):o.status===1?(b(),B(I,{key:1,type:"info",size:"small","disable-transitions":""},{default:a(()=>[f(g(s.$t("messageBoard.status.".concat(o.status))),1)]),_:2},1024)):o.status===2?(b(),B(I,{key:2,type:"danger",size:"small","disable-transitions":""},{default:a(()=>[f(g(s.$t("messageBoard.status.".concat(o.status))),1)]),_:2},1024)):(b(),B(I,{key:3,type:"info",size:"small","disable-transitions":""},{default:a(()=>[f("unknown")]),_:1}))]),_:1},8,["label"]),e(V,{label:s.$t("table.action")},{default:a(({row:o})=>[e(w,{type:"primary",disabled:i(z)("messageBoard:update"),size:"small",link:"",onClick:()=>Q(o.id)},{default:a(()=>[f(g(s.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(A,{title:s.$t("confirmDelete"),onConfirm:()=>R([o.id])},{reference:a(()=>[e(w,{type:"primary",disabled:i(z)("messageBoard:delete"),size:"small",link:""},{default:a(()=>[f(g(s.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[de,m.value]]),e(oe,{"current-page":D.value,"onUpdate:currentPage":n[6]||(n[6]=o=>D.value=o),pageSize:c.value,"onUpdate:pageSize":n[7]||(n[7]=o=>c.value=o),total:d.value,"page-sizes":i(ce),layout:i(Be),small:"",background:"",class:"justify-end px-3 py-2",onSizeChange:n[8]||(n[8]=()=>u()),onCurrentChange:n[9]||(n[9]=()=>u())},null,8,["current-page","pageSize","total","page-sizes","layout"])]),e(Te,{modelValue:r.value,"onUpdate:modelValue":n[10]||(n[10]=o=>r.value=o),"bean-id":y.value,"bean-ids":M.value,onFinished:u},null,8,["modelValue","bean-id","bean-ids"])])}}});export{He as default};
