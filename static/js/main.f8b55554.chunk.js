(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n(1),l=n.n(c),u=n(6),o=n.n(u),r=(n(13),n(7)),i=n(2),s=(n(14),n(15),n(16),function(e){return Object(t.jsx)("button",{onClick:function(){return e.onClickCallback(e.id)},className:"square",children:e.value})}),v=function(e){var a=function(e,a){return e.flat().map((function(e){return Object(t.jsx)(s,{value:e.value,id:e.id,onClickCallback:a})}))}(e.squares,e.onClickCallback);return console.log(a),Object(t.jsx)("div",{className:"grid",children:a})},j=["x","o"],b=function(){for(var e=[],a=0,n=0;n<3;n+=1){e.push([]);for(var t=0;t<3;t+=1)e[n].push({id:a,value:""}),a+=1}return e},d=function(e){return[Math.floor(e/3),e%3]},h=function(){var e=Object(c.useState)(b()),a=Object(i.a)(e,2),n=a[0],l=a[1],u=Object(c.useState)(0),o=Object(i.a)(u,2),s=o[0],h=o[1],f=Object(c.useState)(null),O=Object(i.a)(f,2),k=O[0],m=O[1],x=function(e){var a=d(e),t=Object(i.a)(a,2),c=t[0],l=t[1];n[c][0].value===n[c][1].value&&n[c][0].value===n[c][2].value?m(n[c][0].value):n[0][l].value===n[1][l].value&&n[0][l].value===n[2][l].value?m(n[0][l].value):n[0][0].value===n[1][1].value&&n[0][0].value===n[2][2].value&&""!==n[0][0].value?m(n[0][0].value):n[0][2].value===n[1][1].value&&n[2][0].value===n[1][1].value&&""!==n[0][2].value&&m(n[0][2].value)};return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsxs)("header",{className:"App-header",children:[Object(t.jsx)("h1",{children:"React Tic Tac Toe"}),Object(t.jsx)("h2",{children:null===k?"Current Player ".concat(j[s]):"Winner is ".concat(k)}),Object(t.jsx)("button",{onClick:function(){l(b()),h(0),m(null)},children:"Reset Game"})]}),Object(t.jsx)("main",{children:Object(t.jsx)(v,{onClickCallback:function(e){if(null===k){var a=Object(r.a)(n),t=d(e),c=Object(i.a)(t,2),u=c[0],o=c[1];""===n[u][o].value&&(a[u][o].value=j[s],h((s+1)%2),l(a),x(e))}},squares:n})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.f8b55554.chunk.js.map