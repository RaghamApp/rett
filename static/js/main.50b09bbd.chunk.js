(this["webpackJsonpretta-frontend"]=this["webpackJsonpretta-frontend"]||[]).push([[0],{346:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(94),s=n.n(c),i=n(393),l=n(211),o=n(212),d=n(16),j=n(395),b=n(214),h=n(210),u=n.n(h),m=function(e){return e.json()};function g(e,t){return fetch(u()("http://185.162.235.135:4100/"+e,t)).then(m)}var x=function(e){return g("getGrowingUsers",{page:e})},f=function(e){return g("getDecliningUsers",{page:e})},O=function(e){return g("getTopUsers",{page:e})},p=function(){return g("getRetentionChart",null)},v=n(5),N={fontSize:20},w=["#9dcef2","#9dcef2","#9dcef2","#9dcef2","#9dcef2","#9dcef2","#42afff"];var y=function(){var e=Object(j.a)("getRetentionChart",p),t=e.isLoading,n=e.isError,a=e.data;if(t)return Object(v.jsx)("h3",{children:"Loading..."});if(n)return Object(v.jsx)("h3",{children:"An error has occurred"});var r=a.chart[0];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"h1",children:"Retention"}),Object(v.jsx)("h6",{className:"pb-3 border-bottom",children:"Last Month"}),Object(v.jsx)("div",{className:"pt-3 pb-3",style:{height:"300px"},children:Object(v.jsx)(b.a,{data:a.chart.map((function(e,t){return{id:t.toString(),value:~~(e/r*100),foo:"bar"}})),direction:"horizontal",margin:{top:0,right:0,bottom:0,left:0},colors:w,labelColor:{from:"color",modifiers:[["darker",100]]},borderColor:"#000000",currentPartSizeExtension:5,currentBorderWidth:50,motionDamping:1,shapeBlending:0,spacing:5,theme:N})}),Object(v.jsx)("h6",{className:"fw-light",children:a.nUsers+" total users in this period"})]})},C=n(17),U=(n(346),function(e){return"heatmap ".concat(0===e?"disabled":"")});var k=function(e){var t=e.data,n=e.name;return Object(v.jsxs)("div",{className:"d-inline-flex justify-content-between w-100",children:[Object(v.jsx)("span",{children:n}),Object(v.jsx)("svg",{width:22*t.length,height:"20",className:"heatmap",children:t.map((function(e,t){return Object(v.jsx)("rect",{width:"20",height:"20",x:22*t,fillOpacity:(n=e,0===n?1:n/10),"data-level":"0",className:U(e)});var n}))})]})};function S(e){var t=e.name,n=e.title,r=e.query,c=Object(a.useState)(0),s=Object(C.a)(c,2),i=s[0],l=s[1],o=Object(j.a)([t,i],(function(){return r(i)}),{keepPreviousData:!0}),d=o.isLoading,b=o.isError,h=o.data,u=o.isPreviousData;return d?Object(v.jsx)("h3",{children:"Loading..."}):b?Object(v.jsx)("h3",{children:"An error has occurred"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"mb-3",children:n}),Object(v.jsxs)("div",{className:"container",children:[h.map((function(e){return Object(v.jsx)("div",{className:"mb-1",children:Object(v.jsx)(k,{data:e.heatmap,name:e.id})})})),Object(v.jsx)("button",{className:"btn btn-outline-primary mb-3",onClick:function(){u||l((function(e){return e+1}))},children:"More"})]})]})}var F=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{name:"getGrowingUsers",title:"Users with the highest usage growth \ud83d\udcc8 \ud83d\ude0b",query:x}),Object(v.jsx)(S,{name:"getTopUsers",title:"Top Stable Users \u26a1\ufe0f\ud83d\udd25",query:O}),Object(v.jsx)(S,{name:"getDecliningUsers",title:"Users whose usage is declining \ud83d\udcc9\ud83d\ude1e",query:f})]})},L=new i.a;var D=function(){return Object(v.jsx)(l.a,{client:L,children:Object(v.jsx)(o.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-5",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("a",{className:"navbar-brand",href:"/",children:"Retta"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(v.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"/summary",children:"Summary"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"/retention",children:"Retention"})})]})})]})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/retention",children:Object(v.jsx)(y,{})}),Object(v.jsx)(d.a,{path:"/summary",children:Object(v.jsx)(F,{})})]})})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,396)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(349);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),T()}},[[350,1,2]]]);
//# sourceMappingURL=main.50b09bbd.chunk.js.map