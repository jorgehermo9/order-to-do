(this["webpackJsonporder-to-do"]=this["webpackJsonporder-to-do"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),s=n.n(i),a=n(2),r=n(16),l=n(15),d=n(12),o=n.n(d),u=(n(22),n(0));var m=function(e){var t=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))};function n(){l(""),h(""),O(""),N(null),k(null),J(null),P.current.value="",T.current.value="",E.current.value="",null!==e.editItem&&e.setEditItem(null)}var i=Object(c.useState)(""),s=Object(a.a)(i,2),r=s[0],l=s[1],d=Object(c.useState)(""),m=Object(a.a)(d,2),j=m[0],h=m[1],f=Object(c.useState)(""),p=Object(a.a)(f,2),b=p[0],O=p[1],g=Object(c.useState)(null),v=Object(a.a)(g,2),x=v[0],N=v[1],I=Object(c.useState)(null),S=Object(a.a)(I,2),C=S[0],k=S[1],y=Object(c.useState)(null),w=Object(a.a)(y,2),_=w[0],J=w[1],P=Object(c.useRef)(),T=Object(c.useRef)(),E=Object(c.useRef)();return Object(c.useEffect)((function(){e.editItem&&(l(e.editItem.desc),h(e.editItem.client),O(e.editItem.address),N(e.editItem.png),k(e.editItem.svg),J(e.editItem.ngc),P.current.value="",T.current.value="",E.current.value="")}),[e.editItem]),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsxs)("div",{className:"text-container",children:[Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return l(e.target.value)},value:r,placeholder:"Description"}),Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return h(e.target.value)},value:j,placeholder:"Client"}),Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return O(e.target.value)},value:b,placeholder:"Address (optional)"})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(o.a,{className:"submmit",onClick:function(){if(0!==r.length&&0!==j.length){var t={desc:r,client:j,address:b,png:x,svg:C,ngc:_,checked:!1};null!==e.editItem?(t._id=e.editItem._id,e.replaceItem(t)):e.appendToList(t),n()}}}),Object(u.jsx)("div",{className:"clear",onClick:n,children:"Clear"})]}),Object(u.jsxs)("div",{className:"png-container",children:[Object(u.jsx)("label",{htmlFor:"pngInput",children:"Choose png"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".jpg,.jpeg,.png",name:"pngInput",id:"pngInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return N({file:t,name:e.target.files[0].name})}))},ref:P})]}),Object(u.jsxs)("div",{className:"svg-container",children:[Object(u.jsx)("label",{htmlFor:"svgInput",children:"Choose svg"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".svg",name:"svgInput",id:"svgInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return k({file:t,name:e.target.files[0].name})}))},ref:T})]}),Object(u.jsxs)("div",{className:"ngc-container",children:[Object(u.jsx)("label",{htmlFor:"ngcInput",children:"Choose ngc"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".ngc",name:"ngcInput",id:"ngcInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return J({file:t,name:e.target.files[0].name})}))},ref:E})]})]})};n(29);var j=function(e){return Object(u.jsxs)("div",{className:"item-wrapper",children:[Object(u.jsx)("div",{className:"list-item",children:e.item.desc}),e.item.png&&Object(u.jsx)("a",{className:"png",download:e.item.png.name,href:e.item.png.file,children:"png"}),e.item.svg&&Object(u.jsx)("a",{className:"svg",download:e.item.svg.name,href:e.item.svg.file,children:"svg"}),e.item.ngc&&Object(u.jsx)("a",{className:"ngc",download:e.item.ngc.name,href:e.item.ngc.file,children:"ngc"}),Object(u.jsx)("div",{className:"btn info",onClick:function(){return e.setSelectedItem(e.item)},children:"info"}),e.checked?Object(u.jsx)("div",{className:"btn edit",onClick:function(){return e.removeItem(e.item)},children:"remove"}):Object(u.jsx)("div",{className:"btn edit",onClick:function(){return e.setEditItem(e.item)},children:"edit"}),Object(u.jsx)("div",{className:"btn check",onClick:function(){return e.switchCheck(e.item)},children:e.checked?"uncheck":"check"})]})};n(30);var h=function(e){function t(t){fetch("/api/edit",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=o.slice();n.splice(n.findIndex((function(e){return e._id===t._id})),1,t),h(n),e.selectedItem&&e.selectedItem._id===t._id&&e.setSelectedItem(t)}))}function n(e){var n=Object(r.a)({},e);n.checked=!e.checked,t(n)}function i(t){fetch("/api/remove",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=o.slice().filter((function(e){return e._id!==t._id}));h(n),e.selectedItem&&e.selectedItem._id===t._id&&e.setSelectedItem(null)}))}Object(c.useEffect)((function(){fetch("/api/orders",{method:"POST",body:JSON.stringify({user:e.user}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return h(e.reverse())}))}),[]);var s=Object(c.useState)([]),d=Object(a.a)(s,2),o=d[0],h=d[1],f=Object(c.useState)(null),p=Object(a.a)(f,2),b=p[0],O=p[1],g=Object(c.useState)(!1),v=Object(a.a)(g,2),x=v[0],N=v[1];return Object(u.jsxs)("div",{className:"list-container",children:[Object(u.jsx)(m,{editItem:b,setEditItem:O,appendToList:function(t){fetch("/api/add",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return h((function(t){return[e].concat(Object(l.a)(t))}))}))},replaceItem:t}),Object(u.jsxs)("div",{className:"items-container ".concat(x?"items-checked":"items-not-checked"),children:[Object(u.jsx)("div",{className:"switch-checked",onClick:function(){return N(!x)},children:x?"Show not checked":"Show checked"}),o.filter((function(e){return e.checked===x})).map((function(t,c){return Object(u.jsx)(j,{item:t,setSelectedItem:e.setSelectedItem,setEditItem:O,checked:x,switchCheck:n,removeItem:i},c)}))]})]})},f=n(14),p=n.n(f);n(31);var b=function(e){return Object(u.jsxs)("div",{className:"sidebar",children:[e.item.png&&Object(u.jsx)("img",{className:"image",src:e.item.png.file,alt:"img-png"}),Object(u.jsx)(p.a,{className:"close-icon",onClick:function(){return e.setSelectedItem(null)}}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("div",{className:"description",children:"Description:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text description-text",children:e.item.desc})}),Object(u.jsx)("div",{className:"client",children:"Client:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text client-text",children:e.item.client})}),Object(u.jsx)("div",{className:"address",children:"Address:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text address-text",children:e.item.address&&e.item.address})})]}),Object(u.jsxs)("div",{className:"files-container",children:[Object(u.jsx)("div",{className:"png-container",children:e.item.png&&Object(u.jsx)("a",{className:"png",download:e.item.png.name,href:e.item.png.file,children:"png"})}),Object(u.jsx)("div",{className:"svg-container",children:e.item.svg&&Object(u.jsx)("a",{className:"svg",download:e.item.svg.name,href:e.item.svg.file,children:"svg"})}),Object(u.jsx)("div",{className:"ngc-container",children:e.item.ngc&&Object(u.jsx)("a",{className:"ngc",download:e.item.ngc.name,href:e.item.ngc.file,children:"ngc"})})]})]})};n(32),n(33);var O=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),d=l[0],o=l[1],m=/^[a-zA-Z0-9!@#$%^&*]{0,16}$/;return Object(u.jsxs)("div",{className:"".concat(e.className," container"),children:[Object(u.jsx)("div",{className:"title-container",children:Object(u.jsx)("h2",{className:"title-text",children:e.title})}),Object(u.jsxs)("form",{className:"form-container",children:[Object(u.jsx)("input",{className:"username-input input",type:"text",inputmode:"verbatim",value:i,placeholder:"Username (3-16 alfanumeric)",onChange:function(e){return m.test(e.target.value)&&s(e.target.value)}}),Object(u.jsx)("input",{className:"password-input input",type:"password",inputmode:"verbatim",value:d,placeholder:"Password (6-16 alfanumeric)",onChange:function(e){return m.test(e.target.value)&&o(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:e.title,className:"submit",onClick:function(t){if(t.preventDefault(),/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(d)&&/^[a-zA-Z0-9!@#$%^&*]{3,16}$/.test(i)){var n={username:i,password:d};e.action(n),s(""),o("")}}})]})]})};var g=function(e){return Object(u.jsx)("div",{className:"main-container",children:Object(u.jsxs)("div",{className:"auth-container",children:[Object(u.jsx)(O,{className:"login",title:"Login",action:function(t){fetch("/api/login",{method:"POST",body:JSON.stringify({user:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(n){n.login&&(e.setLogged(!0),e.setUser(t))}))}}),Object(u.jsx)(O,{className:"register",title:"Register",action:function(e){fetch("/api/register",{method:"POST",body:JSON.stringify({user:e}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}})]})})};var v=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(null),r=Object(a.a)(s,2),l=r[0],d=r[1],o=Object(c.useState)(!1),m=Object(a.a)(o,2),j=m[0],f=m[1];return j&&l?Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{user:l,selectedItem:n,setSelectedItem:i}),n&&Object(u.jsx)(b,{item:n,setSelectedItem:i})]}):Object(u.jsx)(g,{setUser:d,setLogged:f})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b030413f.chunk.js.map