(this["webpackJsonpreact-reward-store"]=this["webpackJsonpreact-reward-store"]||[]).push([[0],{59:function(e,a,t){e.exports=t(88)},87:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),m=t(16),u=t(3);var i=function(){return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,"Electronics"))},s=t(18),o=t(46),E=t.n(o).a.create({baseURL:"https://coding-challenge-api.aerolab.co",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}}),d=t(24),v=t.n(d),_=t(50),h=t.n(_),p=t(103),b=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var f=function(e){var a=e.product;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__inner"},r.a.createElement("div",{className:"card__inner_normal"},500<a.cost?r.a.createElement("div",{className:"card__inner_normal__missing"},r.a.createElement("label",null,"Te faltan ".concat(b(a.cost-500))),r.a.createElement(v.a,null)):r.a.createElement("div",{className:"card__inner_normal__shop"},r.a.createElement(h.a,null)),r.a.createElement("img",{src:a.img.url,alt:a.name}),r.a.createElement("hr",null),r.a.createElement("p",{className:"card__category"},a.category),r.a.createElement("p",{className:"p.card__name"},a.name)),r.a.createElement("div",{className:"card__inner_hover"},r.a.createElement("div",{className:"card__inner_hover__price"},r.a.createElement("p",null,b(a.cost)),r.a.createElement(v.a,null)),500>=a.cost&&r.a.createElement(p.a,null,"Agregar al carrito"))))},N=t(104);var g=function(e,a){var t=Object(n.useState)(1),r=Object(s.a)(t,2),l=r[0],c=r[1],m=Math.ceil(e.length/a);return{next:function(){c((function(e){return Math.min(e+1,m)}))},prev:function(){c((function(e){return Math.max(e-1,1)}))},jump:function(e){var a=Math.max(1,e);c((function(e){return Math.min(a,m)}))},currentData:function(){var t=(l-1)*a,n=t+a;return e.slice(t,n)},currentPage:l,maxPage:m}};var y=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(1),m=Object(s.a)(c,2),u=m[0],i=m[1],o=Math.ceil(t.length/12),d=g(t,12);Object(n.useEffect)((function(){E.get("products").then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]);var v=d.currentData().map((function(e){return r.a.createElement(f,{key:e._id,product:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"productListHeader"},r.a.createElement("div",{className:"productListHeader__filter"},r.a.createElement("p",null,"".concat(0===t.length?0:d.maxPage===u?t.length:12*u," of ").concat(t.length," products | Sort by : ")),r.a.createElement(p.a,null,"Most recent"),r.a.createElement(p.a,null,"Lowest price"),r.a.createElement(p.a,null,"Highest price")),r.a.createElement("hr",null)),r.a.createElement("div",{className:"productListContainer"},v),r.a.createElement("div",{className:"productPagination"},r.a.createElement(N.a,{count:o,size:"large",page:u,shape:"rounded",onChange:function(e,a){i(a),d.jump(a)}})))};var O=function(){return r.a.createElement("main",null,r.a.createElement(i,null),r.a.createElement(y,null))};var k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"))};var C=function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"Add coins"))};var j=function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"History"))};var I=function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"Shop"))},x=t(51),J=t.n(x),S=t(53),w=t.n(S),M=t(52),B=t.n(M);var L=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],c=function(){return l(!t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(m.b,{to:"#"},r.a.createElement(J.a,{className:"navbar__menu-bars",onClick:c})),r.a.createElement("div",{className:"header__user"},r.a.createElement(m.b,{to:"/shop"},r.a.createElement("div",{className:"header__shopping_cart"},r.a.createElement("label",null,"0"),r.a.createElement(B.a,null))))),r.a.createElement("nav",{className:t?"navbar-menu active":"navbar-menu"},r.a.createElement("ul",{className:"navbar-menu__items"},r.a.createElement("li",{className:"navbar-menu__items__toggle"},r.a.createElement(m.b,{to:"#"},r.a.createElement(w.a,{className:"navbar-menu__menu-bars",onClick:c}))),r.a.createElement("li",{className:"navbar-menu__user"},r.a.createElement("label",null,"Julia Coi"),r.a.createElement("div",{className:"navbar-menu__user__widget"},r.a.createElement("label",null,b(500)),r.a.createElement(v.a,null))),r.a.createElement("li",{key:"electronics",className:"navbar-text",onClick:c},r.a.createElement(m.b,{to:"/"},"Electronics")),r.a.createElement("li",{key:"history",className:"navbar-text",onClick:c},r.a.createElement(m.b,{to:"/history"},"History")),r.a.createElement("li",{key:"addCoins",className:"navbar-text",onClick:c},r.a.createElement(m.b,{to:"/addCoins"},r.a.createElement(p.a,null,"Add Coins"))))))};var T=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Created by Jorge Elias | 2020"))};t(87);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(L,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(u.b,{path:"/history"},r.a.createElement(j,null)),r.a.createElement(u.b,{path:"/addCoins"},r.a.createElement(C,null)),r.a.createElement(u.b,{path:"/shop"},r.a.createElement(I,null)),r.a.createElement(u.b,{path:"/404",key:"fourOhFour"},r.a.createElement(k,null)),r.a.createElement(u.a,{to:"/404"})),r.a.createElement(T,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.b5355cad.chunk.js.map