(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58131],{44307:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit/form/[form_id]",function(){return a(70809)}])},70809:function(e,t,a){"use strict";a.r(t),a.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_9e7f4e6290c213a7dbf8ba81b755971c:function(){return Fragment_9e7f4e6290c213a7dbf8ba81b755971c},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},Nexthead_11a18d4069680e226bfe529bb0f982d2:function(){return Nexthead_11a18d4069680e226bfe529bb0f982d2},default:function(){return Component}});var n=a(82729),r=a(71965),l=a(67294),i=a(60687),c=a(6608),o=a(15637),s=a(77232),d=a(58532),h=a(90250),m=a(41352),u=a(70917),_=a(95675),p=a(73954),g=a(775),Z=a(41664),f=a.n(Z),x=a(43338),b=a(9008),v=a.n(b);function _templateObject(){let e=(0,n._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(i.DR);return(0,r.tZ)(l.Fragment,{children:(0,c.oA)(t.length>0)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(o.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(k," 1s infinite")},size:32})}):(0,r.tZ)(l.Fragment,{})})}let k=(0,u.F4)(_templateObject());function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(i.DR);return(0,r.tZ)(l.Fragment,{children:(0,c.oA)(t.length>=2)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.Vq.fC,{css:{zIndex:9999},open:t.length>=2,children:(0,r.BX)(_.Vq.VY,{children:[(0,r.tZ)(_.Vq.Dx,{children:"Connection Error"}),(0,r.BX)(_.xv,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,c.LH)(p.Ks).href]})]})})}):(0,r.tZ)(l.Fragment,{})})}function Nexthead_11a18d4069680e226bfe529bb0f982d2(){let e=(0,l.useContext)(i.M4.state),t=(0,l.useContext)(i.M4.state__local_auth_state__app_state__form_editor_state);return(0,r.BX)(v(),{children:[(0,r.tZ)("title",{children:"Form Designer | ".concat((0,c.oA)(""===e.form_id)?"New Form":(0,c.oA)(t.form)?t.form.name:"Unknown Form")}),(0,r.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})}function Fragment_9e7f4e6290c213a7dbf8ba81b755971c(){let e=(0,l.useContext)(i.M4.state),t=(0,l.useContext)(i.M4.state__local_auth_state),[a,n]=(0,l.useContext)(i.DR),[o,u]=(0,l.useContext)(i.kc);(0,l.useEffect)(()=>(a([(0,c.ju)("state.local_auth_state.app_state.form_select_state.load_forms",{})]),()=>{}),[]);let p=(0,l.useContext)(i.M4.state__local_auth_state__app_state__form_select_state),Z=(0,l.useContext)(i.M4.state__local_auth_state__app_state__form_editor_state),b=(0,l.useContext)(i.M4.state__local_auth_state__app_state__field_editor_state);(0,l.useEffect)(()=>(a([(0,c.ju)("state.local_auth_state.login_state.redir",{})]),()=>{}),[]);let v=(0,l.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.handle_submit",{form_data:n})])});return(0,r.tZ)(l.Fragment,{children:(0,c.oA)(e.is_hydrated&&t.is_authenticated)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.W2,{css:{padding:"16px"},size:"2",children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%","> *":{width:"100%"}},direction:"column",gap:"3",children:[(0,r.BX)(_.kC,{align:"center",className:"rx-Stack",css:{marginTop:"12px",marginBottom:"12px"},direction:"row",gap:"3",children:[(0,r.tZ)(_.X6,{children:"Form Designer"}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.BX)(_.h_.fC,{children:[(0,r.tZ)(_.h_.xz,{css:{cursor:"pointer"},children:(0,r.tZ)(s.Z,{css:{color:"var(--current-color)"},size:20})}),(0,r.BX)(_.h_.VY,{children:[(0,r.tZ)(l.Fragment,{children:(0,c.oA)(t.is_authenticated)?(0,r.BX)(l.Fragment,{children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{margin:"8px"},direction:"row",gap:"3",children:[(0,r.tZ)(_.qE,{fallback:t.authenticated_user.username.at(0),size:"1"}),(0,r.tZ)(_.xv,{as:"p",children:t.authenticated_user.username})]}),(0,r.tZ)(_.h_.Z0,{})]}):(0,r.tZ)(l.Fragment,{})}),(0,r.tZ)(_.h_.ck,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/",external:!1})],e,{}),children:"Home"}),(0,r.tZ)(l.Fragment,{children:(0,c.oA)(t.is_authenticated)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.h_.ck,{onClick:e=>a([(0,c.ju)("state.local_auth_state.do_logout",{}),(0,c.ju)("_redirect",{path:"/",external:!1})],e,{}),children:"Logout"})}):(0,r.BX)(l.Fragment,{children:[(0,r.tZ)(_.h_.ck,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/register",external:!1})],e,{}),children:"Register"}),(0,r.tZ)(_.h_.ck,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/login",external:!1})],e,{}),children:"Login"})]})}),(0,r.tZ)(_.h_.Z0,{}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{margin:"8px"},direction:"row",gap:"3",children:[(0,r.tZ)(d.Z,{css:{color:"var(--current-color)"},size:16}),(0,r.tZ)(_.rs,{checked:"light"!==o,onCheckedChange:u,size:"1"}),(0,r.tZ)(h.Z,{css:{color:"var(--current-color)"},size:16})]})]})]})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,r.tZ)(_.xu,{css:{width:"100%"},children:(0,r.BX)(_.Ph.fC,{onValueChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.form_select_state.on_select_change",{value:e})],e,{}),value:e.form_id,children:[(0,r.tZ)(_.Ph.xz,{css:{width:"100%"},placeholder:"Existing Forms"}),(0,r.tZ)(_.Ph.VY,{children:p.forms.map((e,a)=>{var n,l;return(0,r.tZ)(_.Ph.ck,{value:JSON.stringify(e.id),children:e.name+((0,c.oA)(e.user)&&(0,c.oA)((null===(n=e.user)||void 0===n?void 0:n.id)!==t.authenticated_user.id)?" (".concat(null===(l=e.user)||void 0===l?void 0:l.username,")"):"")},a)})})]})}),(0,r.tZ)(_.zx,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/edit/form/",external:!1})],e,{}),type:"button",children:"New Form"})]}),(0,r.tZ)(_.Z0,{size:"4"}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"3",children:[(0,r.BX)(_.kC,{align:"end",className:"rx-Stack",css:{width:"100%"},direction:"row",justify:"start",gap:"3",children:[(0,r.BX)("label",{children:["Form Name",(0,r.tZ)(g.DebounceInput,{css:{debounceTimeout:1e3},debounceTimeout:1e3,element:_.nv.f,name:"name",onChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.form_editor_state.set_name",{name:e.target.value})],e,{}),placeholder:"Form Name",value:Z.form.name})]}),(0,r.tZ)(l.Fragment,{children:(0,c.oA)(""!==e.form_id)?(0,r.tZ)(l.Fragment,{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,r.tZ)(_.zx,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/form/".concat(Z.form.id),external:!1})],e,{}),type:"button",children:"Preview"}),(0,r.tZ)(_.zx,{onClick:e=>a([(0,c.ju)("_redirect",{path:"/responses/".concat(Z.form.id),external:!1})],e,{}),children:"Responses"}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(_.zx,{color:"tomato",onClick:e=>a([(0,c.ju)("state.local_auth_state.app_state.form_editor_state.delete_form",{})],e,{}),type:"button",children:"Delete Form"})]})}):(0,r.tZ)(l.Fragment,{})})]}),(0,r.tZ)(_.Z0,{size:"4"}),Z.form.fields.map((e,t)=>(0,r.BX)(_.Zb,{css:{width:"100%"},children:[(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{marginBottom:"12px"},direction:"row",gap:"3",children:[(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},children:(0,r.tZ)(f(),{href:"/edit/form/".concat(Z.form.id,"/field/").concat(e.id),passHref:!0,children:(0,r.tZ)(l.Fragment,{children:(0,c.oA)(e)?(0,r.tZ)(l.Fragment,{children:(0,c.oA)(""!==e.prompt)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.xv,{as:"p",children:"".concat(e.prompt," (").concat(e.name,")")})}):(0,r.tZ)(l.Fragment,{children:(0,c.oA)(""!==e.name)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.xv,{as:"p",children:e.name})}):(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.xv,{as:"p",children:"[unnamed field]"})})})}):(0,r.tZ)(l.Fragment,{})})})}),(0,r.tZ)(_.kC,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,r.tZ)(_.u,{content:"Delete Field",children:(0,r.tZ)(_.rU,{css:{"&:hover":{color:"var(--accent-8)"}},onClick:t=>a([(0,c.ju)("state.local_auth_state.app_state.form_editor_state.delete_field",{field_id:e.id})],t,{}),children:(0,r.tZ)(m.Z,{css:{color:"var(--current-color)"}})})})]}),(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",justify:"between",gap:"3",children:[(0,r.tZ)(l.Fragment,{children:(()=>{switch(JSON.stringify(e.type_)){case JSON.stringify("checkbox"):return(0,r.tZ)(l.Fragment,{children:(0,c.oA)(e.options)?(0,r.tZ)(l.Fragment,{children:e.options.map((t,a)=>(0,r.tZ)("label",{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",css:{marginRight:"2em"},direction:"row",gap:"3",children:[(0,r.tZ)(_.xv,{as:"label",size:"2",children:(0,r.tZ)(_.kC,{gap:"2",children:(0,r.tZ)(_.XZ,{name:"".concat(e.name,"___").concat((0,c.oA)(""!==t.value)?t.value:(0,c.oA)(""!==t.label)?t.label:JSON.stringify(t.id)),size:"2",value:(0,c.oA)(""!==t.value)?t.value:(0,c.oA)(""!==t.label)?t.label:JSON.stringify(t.id)})})}),t.label]})},a))}):(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.xv,{as:"p",children:"No options defined"})})});case JSON.stringify("radio"):return(0,r.tZ)(l.Fragment,{children:(0,c.oA)(e.options)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.Ee.f,{name:e.name,children:(0,r.tZ)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:e.options.map((e,t)=>(0,r.tZ)("label",{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.tZ)(_.Ee.c,{value:(0,c.oA)(""!==e.value)?e.value:(0,c.oA)(""!==e.label)?e.label:JSON.stringify(e.id)}),e.label]})},t))})})}):(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.xv,{as:"p",children:"No options defined"})})});case JSON.stringify("select"):return(0,r.tZ)(_.xu,{css:{width:"100%"},children:(0,r.BX)(_.Ph.fC,{name:e.name,children:[(0,r.tZ)(_.Ph.xz,{css:{width:"100%"},placeholder:"Select an option"}),(0,r.tZ)(_.Ph.VY,{children:(0,r.tZ)(l.Fragment,{children:(0,c.oA)(e.options)?(0,r.tZ)(l.Fragment,{children:e.options.map((e,t)=>(0,r.tZ)(_.Ph.ck,{value:(0,c.oA)(""!==e.value)?e.value:(0,c.oA)(""!==e.label)?e.label:JSON.stringify(e.id),children:e.label},t))}):(0,r.tZ)(l.Fragment,{})})})]})});case JSON.stringify("textarea"):return(0,r.tZ)(_.Kx,{css:{width:"100%"},name:e.name,placeholder:e.prompt});default:return(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.nv.f,{css:{width:"100%"},name:e.name,placeholder:e.prompt,type:e.type_})})}})()}),(0,r.tZ)(_.xv,{as:"p",css:{ml:"3"},size:"1",children:(0,c.oA)(e.required)?"(required)":"(optional)"})]})]},t))]}),(0,r.tZ)(l.Fragment,{children:(0,c.oA)(""!==e.form_id)?(0,r.BX)(l.Fragment,{children:[(0,r.tZ)(_.zx,{css:{isDisabled:""===e.form_id},onClick:t=>a([(0,c.ju)("_redirect",{path:"/edit/form/".concat(e.form_id,"/field/new"),external:!1})],t,{}),type:"button",children:"Add Field"}),(0,r.tZ)(_.Vq.fC,{onOpenChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.handle_modal_open_change",{is_open:e})],e,{}),open:""!==e.field_id,children:(0,r.BX)(_.Vq.VY,{children:[(0,r.tZ)(_.Vq.Dx,{children:"Edit Field"}),(0,r.tZ)(x.fC,{className:"Root",css:{width:"100%"},onSubmit:v,children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[(0,r.BX)("label",{css:{width:"100%"},children:["Name",(0,r.tZ)(g.DebounceInput,{debounceTimeout:300,element:_.nv.f,name:"name",onChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.set_field",{key:"name",value:e.target.value})],e,{}),placeholder:"Name",value:b.field.name})]}),(0,r.BX)("label",{css:{width:"100%"},children:["Prompt",(0,r.tZ)(g.DebounceInput,{debounceTimeout:300,element:_.nv.f,name:"prompt",onChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.set_field",{key:"prompt",value:e.target.value})],e,{}),placeholder:"Prompt",value:b.field.prompt})]}),(0,r.tZ)("label",{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:["Type",(0,r.BX)(_.Ph.fC,{name:"type_",onValueChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.set_type",{type_:e})],e,{}),value:b.field.type_,children:[(0,r.tZ)(_.Ph.xz,{}),(0,r.BX)(_.Ph.VY,{children:[(0,r.tZ)(_.Ph.ck,{value:"text",children:"text"}),(0,r.tZ)(_.Ph.ck,{value:"number",children:"number"}),(0,r.tZ)(_.Ph.ck,{value:"email",children:"email"}),(0,r.tZ)(_.Ph.ck,{value:"password",children:"password"}),(0,r.tZ)(_.Ph.ck,{value:"checkbox",children:"checkbox"}),(0,r.tZ)(_.Ph.ck,{value:"radio",children:"radio"}),(0,r.tZ)(_.Ph.ck,{value:"select",children:"select"}),(0,r.tZ)(_.Ph.ck,{value:"textarea",children:"textarea"})]})]})]})}),(0,r.tZ)("label",{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:["Required",(0,r.tZ)(_.xv,{as:"label",size:"2",children:(0,r.tZ)(_.kC,{gap:"2",children:(0,r.tZ)(_.XZ,{checked:b.field.required,name:"required",onCheckedChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.handle_required_change",{is_checked:e})],e,{}),size:"2"})})})]})}),(0,r.tZ)(l.Fragment,{children:(0,c.oA)(["select","radio","checkbox"].includes(b.field.type_))?(0,r.tZ)(l.Fragment,{children:(0,r.BX)(_.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[b.field.options.map((e,t)=>(0,r.tZ)(_.Zb,{children:(0,r.BX)(_.kC,{align:"end",className:"rx-Stack",direction:"row",gap:"3",children:[(0,r.BX)("label",{children:[(0,r.tZ)(_.xv,{as:"p",children:"Label"}),(0,r.tZ)(g.DebounceInput,{debounceTimeout:300,element:_.nv.f,onChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.set_option",{index:t,key:"label",value:e.target.value})],e,{}),placeholder:"Label",value:e.label})]}),(0,r.BX)("label",{children:[(0,r.tZ)(_.xv,{as:"p",children:"Value"}),(0,r.tZ)(g.DebounceInput,{debounceTimeout:300,element:_.nv.f,onChange:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.set_option",{index:t,key:"value",value:e.target.value})],e,{}),placeholder:(0,c.oA)(""!==e.label)?e.label:"Value",value:e.value})]}),(0,r.tZ)(_.zx,{color:"tomato",onClick:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.delete_option",{index:t})],e,{}),type:"button",children:(0,r.tZ)(m.Z,{css:{color:"var(--current-color)"}})})]})},t)),(0,r.tZ)(_.zx,{onClick:e=>a([(0,c.ju)("state.local_auth_state.app_state.field_editor_state.add_option",{})],e,{}),type:"button",children:"Add Option"})]})}):(0,r.tZ)(l.Fragment,{})}),(0,r.tZ)(_.zx,{type:"submit",children:"Save"})]})})]})})]}):(0,r.tZ)(l.Fragment,{})}),(0,r.tZ)(_.kC,{css:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"3em",marginBottom:"12px"},children:(0,r.tZ)(_.rU,{asChild:!0,css:{"&:hover":{color:"var(--accent-8)"}},size:"3",children:(0,r.tZ)(f(),{href:"https://reflex.dev",passHref:!0,children:(0,r.BX)(_.kC,{align:"center",className:"rx-Stack",css:{textAlign:"center",padding:"1em"},direction:"row",gap:"3",children:["Built with ",(0,r.tZ)(l.Fragment,{children:(0,c.oA)("light"===o)?(0,r.tZ)(l.Fragment,{children:(0,r.tZ)("div",{className:"rx-Html",dangerouslySetInnerHTML:{__html:'<svg width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z" fill="#110F1F"/>\n<path d="M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z" fill="#110F1F"/>\n<path d="M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z" fill="#110F1F"/>\n<path d="M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z" fill="#110F1F"/>\n<path d="M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z" fill="#110F1F"/>\n<path d="M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z" fill="#110F1F"/>\n</svg>'}})}):(0,r.tZ)(l.Fragment,{children:(0,r.tZ)("div",{className:"rx-Html",dangerouslySetInnerHTML:{__html:'<svg width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" fill="white"/>\n<path d="M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" fill="white"/>\n<path d="M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" fill="white"/>\n<path d="M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" fill="white"/>\n<path d="M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" fill="white"/>\n<path d="M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" fill="white"/>\n</svg>'}})})})]})})})})]})})}):(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(_.kC,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.tZ)(_.xv,{as:"p",children:"Loading..."})})})})}function Component(){return(0,r.BX)(l.Fragment,{children:[(0,r.BX)(l.Fragment,{children:[(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,r.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,r.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,r.tZ)(l.Fragment,{children:(0,r.tZ)(Fragment_9e7f4e6290c213a7dbf8ba81b755971c,{})}),(0,r.tZ)(Nexthead_11a18d4069680e226bfe529bb0f982d2,{})]})}}},function(e){e.O(0,[40336,41664,73265,49774,92888,40179],function(){return e(e.s=44307)}),_N_E=e.O()}]);