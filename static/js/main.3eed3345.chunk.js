(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(6),r=e.n(o),c=e(7),a=e(8),i=e(5),s=e.n(i),u=e(1),d=(e(15),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},f=e(9);function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(c.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r(b())},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r(b().then((function(t){return Object(f.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r(b().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"}),Object(d.jsx)(l,{goods:e})]})};r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3eed3345.chunk.js.map