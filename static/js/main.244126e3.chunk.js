(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,a){e.exports=a(138)},110:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),s=(a(110),a(13)),l=a.n(s),i=a(21),m=a(16),u=a(20),p=a(12),g=a(69),f=a(171),h=a(50),d=a.n(h),b=a(168),v=a(170),E=a(66),y=a.n(E);function w(e){return r.a.createElement(b.a,Object.assign({button:!0,component:u.b},e))}var j=function(e){var t=e.town,a=e.isVisited,n=e.username;return r.a.createElement(w,{to:"/town/".concat(t,"/").concat(n,"/").concat(a),style:{backgroundColor:a?y.a[500]:"transparent",color:a?"white":"black",marginTop:10,marginBottom:10}},r.a.createElement(v.a,{primary:t}))},O="http://73.227.239.8:5000",x={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}};var S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(p.h)().username,s=localStorage.getItem("username")===c;return console.log("authed",s),d()(Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/towns/"+c);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)}))),[]),r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h2",component:"h1",style:{marginTop:20}},"VT Towns"),r.a.createElement("div",{style:{maxWidth:400}},a.map((function(e,t){return r.a.createElement(j,{key:t,town:e.name,isVisited:e.isVisited,username:c})}))))},k=a(175),T=a(176),N=a(174),W=a(94),V=a.n(W),C=a(173),B=a(40),I=a.n(B),P=I()((function(e){return{container:{marginTop:e.spacing(6)},art:{maxWidth:"100%"},cta:{marginTop:e.spacing(2)}}}));var D=function(){var e=P();return r.a.createElement(f.a,{className:e.container},r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:4},r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(g.a,{color:"primary",variant:"h2"},"Vermontaholic"),r.a.createElement(g.a,null,"Love exploring Vermont? Hate having to manually write down every town you visited? Then Vermontaholic is for you! With this web-based tool, you can keep track of which towns you visited, and share your beautiful photos of Vermont!"),r.a.createElement("div",{className:e.cta},r.a.createElement(N.a,{color:"primary",variant:"contained",disableElevation:!0,component:u.b,to:"/signup"},"Signup"),r.a.createElement(N.a,{color:"primary",style:{marginLeft:10},component:u.b,to:"/login"},"Login"))),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement("img",{className:e.art,alt:"Exploring Vermont",src:V.a}))))},L=a(42),J=a(181),F=a(178),R=a(142);var H=function(){var e=Object(p.h)(),t=e.town,a=e.username,o=e.isVisited,c=Object(n.useState)("true"===o),s=Object(m.a)(c,2),u=s[0],h=s[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),E=v[0],y=v[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),S=j[0],k=j[1];return d()(Object(i.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/".concat(t,"/summary/").concat(a,">"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),"None"!==r.Summary&&y(r.Summary);case 8:case"end":return e.stop()}}),e)}))),[]),d()(Object(i.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/".concat(t,"/summary/").concat(a,">"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),"None"!==r.Summary&&y(r.Summary);case 8:case"end":return e.stop()}}),e)}))),[]),console.log(u),r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h2",component:"h1",style:{marginTop:20}},t," ",u?r.a.createElement(J.a,{label:"Visited",color:"primary"}):r.a.createElement(N.a,{color:"primary",onClick:function(){h(!0),Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/"+a+"/visit/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent.status;case 7:case"end":return e.stop()}}),e)})))()}},"Mark as Visited")),""===E?r.a.createElement(R.a,{style:{marginTop:20,maxWidth:400,padding:20}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(i.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/".concat(t,"/summary/").concat(a,">"),Object(L.a)({},x,{body:JSON.stringify({summary:S})}));case 2:n=e.sent,r=n.json(),console.log(r),y(S);case 6:case"end":return e.stop()}}),e)})))()},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"}},r.a.createElement(F.a,{style:{marginBottom:20},label:"Description",fullWidth:!0,multiline:!0,rowsMax:4,placeholder:"Write something about ".concat(t,"..."),value:S,onChange:function(e){return k(e.target.value)}}),r.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Submit"))):r.a.createElement(g.a,{variant:"body1"},E))},U=a(180),q=I()((function(e){return{container:{marginTop:e.spacing(6)},paper:{maxWidth:300,padding:e.spacing(3)},text:{marginBottom:20}}}));function z(e){return new Promise((function(t){return setTimeout(t,e)}))}var M=function(){var e=Object(p.g)(),t=q(),a=Object(n.useState)(!1),o=Object(m.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(!1),h=Object(m.a)(u,2),d=h[0],b=h[1],v=Object(n.useState)(""),E=Object(m.a)(v,2),y=E[0],w=E[1],j=Object(n.useState)(""),S=Object(m.a)(j,2),k=S[0],T=S[1],W=Object(n.useState)(""),V=Object(m.a)(W,2),C=V[0],B=V[1],I=Object(n.useState)(""),P=Object(m.a)(I,2),D=P[0],J=P[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d,autoHideDuration:6e3,message:y}),r.a.createElement(f.a,{className:t.container},r.a.createElement(R.a,{className:t.paper},r.a.createElement(g.a,{variant:"h5",component:"h1",color:"primary",gutterBottom:!0},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("submitted"),console.log(k),console.log(C),console.log(D),C===D?(s(!1),Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(O+"/register",Object(L.a)({},x,{body:JSON.stringify({username:k,password:C})}));case 2:return a=t.sent,t.next=5,a.json();case 5:if(n=t.sent,console.log(n),"success"!==n.status){t.next=16;break}return localStorage.setItem("username",n.username),b(!0),w("Successfully registered. Redirecting you to the login page..."),t.next=13,z(3e3);case 13:e.push("/login"),t.next=18;break;case 16:b(!0),w("That username is already taken. Please try again.");case 18:case"end":return t.stop()}}),t)})))()):s(!0)}},r.a.createElement(F.a,{label:"Username",fullWidth:!0,className:t.text,value:k,onChange:function(e){return T(e.target.value)}}),r.a.createElement(F.a,{label:"Password",fullWidth:!0,type:"password",className:t.text,value:C,onChange:function(e){return B(e.target.value)},error:c,helperText:c?"Passwords don't match":""}),r.a.createElement(F.a,{label:"Confirm Password",fullWidth:!0,type:"password",style:{marginBottom:40},value:D,onChange:function(e){return J(e.target.value)},error:c,helperText:c?"Passwords don't match":""}),r.a.createElement(N.a,{type:"submit",color:"primary",variant:"contained"},"Submit")))))},A=I()((function(e){return{container:{marginTop:e.spacing(6)},paper:{maxWidth:300,padding:e.spacing(3)},text:{marginBottom:20}}}));var $=function(e){var t=e.onLogin,a=Object(p.g)(),o=Object(n.useState)(""),c=Object(m.a)(o,2),s=c[0],u=c[1],h=Object(n.useState)(""),d=Object(m.a)(h,2),b=d[0],v=d[1],E=Object(n.useState)(!1),y=Object(m.a)(E,2),w=y[0],j=y[1],S=Object(n.useState)(""),k=Object(m.a)(S,2),T=k[0],W=k[1],V=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:w,autoHideDuration:6e3,message:T}),r.a.createElement(f.a,{className:V.container},r.a.createElement(R.a,{className:V.paper},r.a.createElement(g.a,{variant:"h5",component:"h1",color:"primary",gutterBottom:!0},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(!1),console.log("submitted"),console.log(s),console.log(b),Object(i.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/login",Object(L.a)({},x,{body:JSON.stringify({username:s,password:b})}));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),"success"===r.status?(localStorage.setItem("username",r.username),j(!0),W("Successfully logged in. Redirecting..."),t(),a.push("/towns/"+r.username)):(j(!0),W("Username or password incorrect. Please try again."));case 8:case"end":return e.stop()}}),e)})))()}},r.a.createElement(F.a,{required:!0,label:"Username",fullWidth:!0,className:V.text,value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement(F.a,{required:!0,label:"Password",type:"password",fullWidth:!0,style:{marginBottom:40},value:b,onChange:function(e){return v(e.target.value)}}),r.a.createElement(N.a,{type:"submit",color:"primary",variant:"contained"},"Submit")))))};function G(){var e=localStorage.getItem("username"),t=Object(n.useState)(null!==e),a=Object(m.a)(t,2),o=a[0],c=a[1];return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(k.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(T.a,null,r.a.createElement(g.a,{variant:"h6",style:{flex:1,color:"white",textDecoration:"none"},component:u.b,to:"/"},"Vermontaholic"),o?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{marginRight:20}},e),r.a.createElement(N.a,{color:"inherit",onClick:function(){Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),window.location.href="http://vermontaholic.tk";case 8:case"end":return e.stop()}}),e)})))(),localStorage.removeItem("username"),c(null!==localStorage.getItem("username"))}},"Logout")):r.a.createElement(N.a,{color:"inherit",component:u.b,to:"/login"},"Login")))),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/towns/:username"},r.a.createElement(S,null)),r.a.createElement(p.b,{path:"/town/:town/:username/:isVisited"},r.a.createElement(H,null)),r.a.createElement(p.b,{path:"/signup"},r.a.createElement(M,null)),r.a.createElement(p.b,{path:"/login"},r.a.createElement($,{onLogin:function(){c(null!==localStorage.getItem("username"))}})),r.a.createElement(p.b,{path:"/"},o?r.a.createElement(p.a,{to:"towns/"+e}):r.a.createElement(D,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(96),Q=a(172),X=a(75),Y=a.n(X),Z=a(177),_=a(95),ee=a.n(_)()(Object(K.a)({palette:{primary:{main:y.a[500]},secondary:{main:Y.a[500]}}}));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement(Q.a,{theme:ee},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/env.52d01ae8.svg"}},[[105,1,2]]]);
//# sourceMappingURL=main.244126e3.chunk.js.map