(this.webpackJsonpannmlfarm=this.webpackJsonpannmlfarm||[]).push([[0],{259:function(e,t,a){e.exports=a.p+"static/media/farm.982daf69.png"},260:function(e,t,a){e.exports=a.p+"static/media/conversation.fe271cf6.png"},266:function(e,t,a){e.exports=a.p+"static/media/Logo.e962ae3a.png"},279:function(e,t,a){e.exports=a(488)},488:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=a(19),o=a(17),m=a(18),s=a(34),u=a(35),d=a(39),h=a(37),p=a(21),E=a.n(p);a(48),a(45);E.a.initializeApp({apiKey:"AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",authDomain:"parangelmata.firebaseapp.com",databaseURL:"https://parangelmata.firebaseio.com",projectId:"parangelmata",storageBucket:"parangelmata.appspot.com",messagingSenderId:"824823048409",appId:"1:824823048409:web:b667f9d23208d7003576c8",measurementId:"G-9JB6YF1SYF"});var f=E.a,g=a(520),b={backgroundColor:"#7FB986",color:"white"},v=function(e){return r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:e.onClick,style:b},e.children)},y=(E.a.auth(),E.a.firestore(),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.signInWithGoogle=function(){var t=new E.a.auth.GoogleAuthProvider;e.props.auth.signInWithPopup(t).then((function(){}))},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.signInWithGoogle()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{onClick:this.signInWithGoogle},"Sign In"))}}]),a}(n.Component)),C=a(88),j=a(56),O=(a(246),E.a.auth(),E.a.firestore(),n.Component,a(11)),N=a(267),x=a(258),w=a.n(x),F=a(522),S=a(36),k=a(528),R=a(534),A=a(529),I=a(124),D=a(533),L=a(259),M=a.n(L),U=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/farms":a,l=e.className;return r.a.createElement(o.c,{to:n},r.a.createElement("img",{className:l,src:M.a,style:t}))},z=a(260),T=a.n(z),q=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/community":a,l=e.className;return r.a.createElement(o.c,{to:n},r.a.createElement("img",{className:l,src:T.a,style:t}))},G=a(44),J=a(3),W=a(532),_=a(523),B=a(526),K=a(535),P=a(524),Y=a(525),$=a(262),V=a.n($),H=a(261),Q=a.n(H),X=a(263),Z=a.n(X),ee=Object(F.a)({list:{width:"auto"},fullList:{width:"auto"}});function te(){var e=ee(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(i.a)(t,2),n=a[0],l=a[1],c=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(G.a)(Object(G.a)({},n),{},Object(m.a)({},e,t)))}};return r.a.createElement("div",null,["bottom"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(g.a,{onClick:c(t,!0)},t),r.a.createElement(W.a,{anchor:t,open:n[t],onClose:c(t,!1),onOpen:c(t,!0)},function(t){return r.a.createElement("div",{className:Object(J.a)(e.list,Object(m.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:c(t,!1),onKeyDown:c(t,!1)},r.a.createElement(_.a,null,r.a.createElement(o.b,{to:"/capture"},r.a.createElement(K.a,{button:!0,onClick:function(){console.log("click")},key:"capture"},r.a.createElement(P.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Capture Details"})))),r.a.createElement(B.a,null),r.a.createElement(_.a,null,["All mail","Trash","Spam"].map((function(e,t){return r.a.createElement(K.a,{button:!0,key:e},r.a.createElement(P.a,null,t%2===0?r.a.createElement(V.a,null):r.a.createElement(Z.a,null)),r.a.createElement(Y.a,{primary:e}))}))))}(t)))})))}var ae=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:150,height:150},paper:{width:"100%",color:"white",background:"#3C4142"}}})),ne=function(e){var t=ae();return r.a.createElement("div",{className:t.root})},re=a(269),le=a(527),ce=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:150,height:150},paper:{width:"100%",color:"white",background:"#3C4142"}}})),ie=function(e){var t=ce();return r.a.createElement("div",{className:t.root},r.a.createElement(le.a,{container:!0,spacing:1},r.a.createElement(le.a,{item:!0,xs:12}),r.a.createElement(le.a,{item:!0,xs:6},r.a.createElement(re.a,{className:t.paper},"xs=6")),r.a.createElement(le.a,{item:!0,xs:6},r.a.createElement(re.a,{className:t.paper},"xs=6")),r.a.createElement(le.a,{item:!0,xs:3},r.a.createElement(re.a,{className:t.paper},"xs=3")),r.a.createElement(le.a,{item:!0,xs:3},r.a.createElement(re.a,{className:t.paper},"xs=3")),r.a.createElement(le.a,{item:!0,xs:3},r.a.createElement(re.a,{className:t.paper},"xs=3")),r.a.createElement(le.a,{item:!0,xs:3},r.a.createElement(re.a,{className:t.paper},"xs=3"))))};function oe(e){var t=e.children,a=e.value,n=e.index,l=Object(N.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),a===n&&r.a.createElement(D.a,{p:3},e.image?r.a.createElement(e.image,null):null,r.a.createElement(I.a,null,t)))}function me(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var se=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:100,height:100},paper:{width:"100%",color:"white",background:"#3C4142"}}}));function ue(e){var t=se(),a=Object(S.a)(),n=r.a.useState(0),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"static",color:"default",height:"100%"},r.a.createElement(R.a,{value:c,onChange:function(e,t){o(t)},className:t.paper},r.a.createElement(A.a,Object.assign({icon:r.a.createElement(U,{className:t.icon,homeURL:"#"}),label:"//Farming"},me(0))),r.a.createElement(A.a,Object.assign({icon:r.a.createElement(q,{className:t.icon,homeURL:"#"}),label:"//Community"},me(1))))),r.a.createElement(w.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){o(e)}},r.a.createElement(oe,{value:c,index:0,dir:a.direction},r.a.createElement(ne,{auth:e.auth,store:e.store})),r.a.createElement(oe,{value:c,index:1,dir:a.direction},r.a.createElement(ie,{auth:e.auth,store:e.store}))),r.a.createElement(te,null))}var de=a(264),he=a.n(de),pe={width:1280,height:720,facingMode:{exact:"environment"}};function Ee(e){var t=this,a=Object(n.useState)(null),l=Object(i.a)(a,2),c=l[0],o=l[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),E=p[0],f=p[1],g=Object(n.useState)(null),b=Object(i.a)(g,2),v=b[0],y=b[1],C=function(e){e.persist(),d(e.target.value)};return r.a.createElement("div",null,r.a.createElement(he.a,{audio:!1,width:350,height:350,ref:function(e){e&&y(e)},screenshotFormat:"image/jpeg",videoConstraints:pe}),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){var e=v.getScreenshot();o(e)}},"Save Image")),c?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("img",{src:c,alt:u})),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(e){e.persist();var t=v.getScreenshot();o(t)}},"Retake")),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(e){e.persist(),f(!E)}},"Save")),E?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t.handleSaveSubmit},r.a.createElement("p",null,r.a.createElement("label",null,"Image Name:"),r.a.createElement("input",{type:"text",name:"image_name",value:u,onChange:C}),r.a.createElement("input",{type:"submit",value:"Save"})))):null):null)}var fe=function(e){return console.log(e),console.log(e.match.params.id),r.a.createElement("div",{className:"container section farm-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Farm ",e.match.params.id),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Owned by $owner"),r.a.createElement("div",null,"24 Sept, 5pm"))))},ge=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstname:"",lastname:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),a}(n.Component),be=a(122),ve=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",geolocation:"",company:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createFarm(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Farm"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"materialize-textarea",id:"description",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"geolocation"},"Geolocation"),r.a.createElement("input",{type:"text",id:"geolocation",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{type:"text",id:"company",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),a}(n.Component),ye=Object(be.b)(null,(function(e){return{createFarm:function(t){return e(function(e){return function(t,a,n){var r=n.firebase;n.getFirestore;r.fireStore.collection("farms").add(Object(G.a)(Object(G.a)({},e),{},{farmFounderFirstName:"Jean",farmFounderLastName:"Louw",farmFoundedOn:new Date})).then((function(){t({type:"CREATE_FARM",farmData:e})})).catch((function(e){t({type:"CREATE_FARM_ERROR",errorData:e})}))}}(t))}}}))(ve),Ce=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={identifier:"",animaltype:"",additional:"",farm:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Camp"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"identifier"},"Identifier"),r.a.createElement("input",{type:"text",id:"identifier",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"animaltype"},"Animal Type"),r.a.createElement("input",{type:"text",id:"animaltype",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"additional"},"Additional"),r.a.createElement("textarea",{className:"materialize-textarea",id:"additional",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"farm"},"Farm"),r.a.createElement("input",{type:"text",id:"farm",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),a}(n.Component),je=a(530),Oe=a(531),Ne={background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},xe=a(266),we=a.n(xe),Fe=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/":a;return r.a.createElement(o.c,{to:n},r.a.createElement("img",Object(m.a)({src:we.a,style:{alignment:"center"}},"style",t)))},Se=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1],o=function(){l||c(Ne);return console.log(l),l};return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,null),r.a.createElement(D.a,{textAlign:"center",width:"100%",height:"100%",style:Object(G.a)({},o())},r.a.createElement(Oe.a,{style:Object(G.a)({},o())},r.a.createElement(Fe,null),r.a.createElement(y,{auth:e.auth}))))},ke=function(e){var t=Object(j.a)(e.auth),a=Object(i.a)(t,1)[0];return r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/"},a?r.a.createElement(ue,{auth:e.auth,store:e.store}):r.a.createElement(Se,{auth:e.auth,store:e.store})),r.a.createElement(O.a,{exact:!0,path:"/annml-farm"},r.a.createElement(ue,{auth:e.auth,store:e.store})),r.a.createElement(O.a,{path:"/farm/:id",component:fe}),r.a.createElement(O.a,{path:"/signin",component:y}),r.a.createElement(O.a,{path:"/signup",component:ge}),r.a.createElement(O.a,{path:"/newfarm",component:ye}),r.a.createElement(O.a,{path:"/newcamp",component:Ce}),r.a.createElement(O.a,{path:"/capture",component:Ee,auth:e.auth,store:e.store}))},Re=E.a.auth(),Ae=E.a.firestore();var Ie=function(){var e=Object(j.a)(Re);return Object(i.a)(e,1)[0],r.a.createElement(o.a,{auth:Re},r.a.createElement("div",{className:"App"},r.a.createElement(ke,{auth:Re,firestore:Ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=a(57),Le={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Ue={farms:[{id:"1",title:"Sunny Farm",description:"It's too damn sunny!",geolocation:"0,0",company:"Solar Farms"},{id:"2",title:"Shady Farm",description:"It's too damn shady!",geolocation:"1,1",company:"Solar Farms"},{id:"3",title:"Money Farm",description:"It's too damn rich!",geolocation:"2,2",company:"Solar Farms"},{id:"4",title:"Jacques Farm",description:"Yo yo!",geolocation:"2,2",company:"Jamesons"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_FARM":return console.log("Created farm:"),e;case"CREATE_FARMERROR":return console.log("Created project error:",t.errorData),e;default:return e}},Te=a(121),qe=Object(De.b)({firebase:C.firebaseReducer,firestore:Te.firestoreReducer,authRedux:Me,farmRedux:ze}),Ge=Object(De.c)(qe,{}),Je={firebase:E.a,config:f,dispatch:Ge.dispatch,createFirestoreInstance:Te.createFirestoreInstance};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be.a,{store:Ge},r.a.createElement(C.ReactReduxFirebaseProvider,Je,r.a.createElement(Ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[279,1,2]]]);
//# sourceMappingURL=main.bdc334b1.chunk.js.map