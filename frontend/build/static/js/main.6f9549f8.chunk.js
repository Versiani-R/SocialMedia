(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(17),r=c.n(n),i=c(19),o=c(2),l=(c(26),c(1)),j=function(){return Object(l.jsx)("div",{className:"container-parent catalog-body",children:Object(l.jsxs)("div",{className:"container-categories",children:[Object(l.jsx)("div",{className:"category",style:{backgroundColor:"#0d89a3"},children:Object(l.jsxs)("a",{className:"category-link",href:"/categories/programming",children:[Object(l.jsx)("i",{className:"fab fa-python icon"}),Object(l.jsx)("br",{}),"Programming"]})}),Object(l.jsx)("div",{className:"category",style:{backgroundColor:"#bc053e"},children:Object(l.jsxs)("a",{className:"category-link",href:"/categories/medicine",children:[Object(l.jsx)("i",{className:"fas fa-clinic-medical icon"}),Object(l.jsx)("br",{}),"Medicine"]})}),Object(l.jsx)("div",{className:"category",style:{backgroundColor:"#661e6a"},children:Object(l.jsxs)("a",{className:"category-link",href:"/categories/history",children:[Object(l.jsx)("i",{className:"fas fa-book icon"}),Object(l.jsx)("br",{}),"History"]})}),Object(l.jsx)("div",{className:"category",style:{backgroundColor:"#377e72"},children:Object(l.jsxs)("a",{className:"category-link",href:"/categories/finances",children:[Object(l.jsx)("i",{className:"far fa-money-bill-alt icon"}),Object(l.jsx)("br",{}),"Finances"]})})]})})},d=c(8),b=c.n(d),m=c(10),h=c(21),g=c(18),u=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,a,s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.url,a=t.method,s=t.body,e.next=3,fetch("http://localhost:8000/"+c,{method:a,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=Object(a.useState)([{title:"",link:"",description:"",image:""}]),c=Object(h.a)(t,2),s=c[0],n=c[1],r=e.categoryName.split("/").pop();Object(a.useEffect)((function(){r&&Object(m.a)(b.a.mark((function e(){var t,c,a,s,i,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({url:"categories/"+r,method:"get"});case 2:for(t=e.sent,c=[],a=0;a<t.titles.length;a++)s=t.titles[a],i=t.links[a],o=t.descriptions[a],l=t.images[a],c.push({title:s,link:i,description:o,image:l});console.log(c),n(Object(g.shuffle)(c));case 7:case"end":return e.stop()}}),e)})))()}),[r]);return Object(l.jsxs)("div",{className:"container-parent categories-body",children:[Object(l.jsx)("div",{className:"breadcrumb",children:Object(l.jsxs)("span",{className:"link",children:[Object(l.jsx)("a",{className:"categories-link",href:"/",children:"/categories/"}),Object(l.jsx)("a",{className:"categories-name",href:"/categories/"+r,children:r})]})}),Object(l.jsx)("div",{className:"container-posts",children:s.map((function(e,t){return Object(l.jsx)("div",{className:(a=s[t].image,(""===a||"image"===a?"no-image":"has-image")+" container-post "+(c=s[t].link,c.includes("youtube")?"youtube":c.includes("twitter")?"twitter":c.includes("reddit")?"reddit":c.includes("amazon")?"amazon":c.includes("podcast")?"spotify":"google")),children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:s[t].link,children:Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"post-content",children:[Object(l.jsx)("h2",{children:s[t].title}),Object(l.jsx)("p",{children:s[t].description})]}),""!==s[t].image&&"image"!==s[t].image?Object(l.jsx)("img",{src:s[t].image,alt:"No preview available."}):""]})})},e.title+t);var c,a}))})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/categories/:categoryName",render:function(e){return Object(l.jsx)(p,{categoryName:e.location.pathname})}}),Object(l.jsx)(o.a,{path:"/",component:j})]})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6f9549f8.chunk.js.map