(this["webpackJsonporder-to-do"]=this["webpackJsonporder-to-do"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(9),i=n.n(s),a=n(2),r=n(15),l=n(14),o=(n(22),n(51)),d=n(52),u=n(0);var j=function(e){var t=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))};function n(){l(""),h(""),g(""),I(null),k(null),P(null),null!==e.editItem&&e.setEditItem(null)}var s=Object(c.useState)(""),i=Object(a.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(""),m=Object(a.a)(j,2),b=m[0],h=m[1],p=Object(c.useState)(""),O=Object(a.a)(p,2),f=O[0],g=O[1],x=Object(c.useState)(null),v=Object(a.a)(x,2),N=v[0],I=v[1],S=Object(c.useState)(null),C=Object(a.a)(S,2),y=C[0],k=C[1],w=Object(c.useState)(null),_=Object(a.a)(w,2),J=_[0],P=_[1];return Object(c.useEffect)((function(){e.editItem&&(l(e.editItem.desc),h(e.editItem.client),g(e.editItem.address),I(e.editItem.png),k(e.editItem.svg),P(e.editItem.ngc))}),[e.editItem]),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("div",{className:"input-upper",children:Object(u.jsxs)("div",{className:"input-boxes",children:[Object(u.jsxs)("div",{className:"text-container",children:[Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return l(e.target.value)},value:r,placeholder:"Description"}),Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return h(e.target.value)},value:b,placeholder:"Client"}),Object(u.jsx)("input",{className:"input-item",type:"text",onChange:function(e){return g(e.target.value)},value:f,placeholder:"Address (optional)"})]}),Object(u.jsx)("div",{className:"input-changer",children:Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{className:"submmit",onClick:function(){if(0!==r.length&&0!==b.length){var t={desc:r,client:b,address:f,png:N,svg:y,ngc:J,checked:!1};null!==e.editItem?(t._id=e.editItem._id,e.replaceItem(t)):e.appendToList(t),n()}},children:Object(u.jsx)(o.a,{})}),Object(u.jsx)("button",{className:"clear",onClick:n,children:Object(u.jsx)(d.a,{})})]})})]})}),Object(u.jsx)("div",{className:"input-lower",children:Object(u.jsxs)("div",{className:"input-buttons",children:[Object(u.jsxs)("div",{className:"png-container",children:[Object(u.jsx)("label",{className:"submit-button",htmlFor:"pngInput",children:"Choose png"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".jpg,.jpeg,.png",name:"pngInput",id:"pngInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return I({file:t,name:e.target.files[0].name})}))}}),N&&Object(u.jsx)("p",{children:N.name})]}),Object(u.jsxs)("div",{className:"svg-container",children:[Object(u.jsx)("label",{className:"submit-button",htmlFor:"svgInput",children:"Choose svg"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".svg",name:"svgInput",id:"svgInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return k({file:t,name:e.target.files[0].name})}))}}),y&&Object(u.jsx)("p",{children:y.name})]}),Object(u.jsxs)("div",{className:"ngc-container",children:[Object(u.jsx)("label",{className:"submit-button",htmlFor:"ngcInput",children:"Choose ngc"}),Object(u.jsx)("input",{className:"input-file",type:"file",accept:".ngc",name:"ngcInput",id:"ngcInput",onChange:function(e){return t(e.target.files[0]).then((function(t){return P({file:t,name:e.target.files[0].name})}))}}),J&&Object(u.jsx)("p",{children:J.name})]})]})})]})},m=n(53),b=n(54),h=n(55),p=n(56),O=n(57);n(28);var f=function(e){return Object(u.jsxs)("div",{className:"item-wrapper",children:[Object(u.jsx)("div",{className:"list-item",children:e.item.desc}),e.item.png&&Object(u.jsx)("a",{className:"png",download:e.item.png.name,href:e.item.png.file,children:"png"}),e.item.svg&&Object(u.jsx)("a",{className:"svg",download:e.item.svg.name,href:e.item.svg.file,children:"svg"}),e.item.ngc&&Object(u.jsx)("a",{className:"ngc",download:e.item.ngc.name,href:e.item.ngc.file,children:"ngc"}),Object(u.jsx)("button",{className:"btn-icon info",onClick:function(){return e.setSelectedItem(e.item)},children:Object(u.jsx)(m.a,{})}),e.checked?Object(u.jsx)("button",{className:"btn-icon delete",onClick:function(){return e.removeItem(e.item)},children:Object(u.jsx)(b.a,{})}):Object(u.jsx)("button",{className:"btn-icon edit",onClick:function(){return e.setEditItem(e.item)},children:Object(u.jsx)(h.a,{})}),Object(u.jsx)("button",{className:"btn-icon check",onClick:function(){return e.switchCheck(e.item)},children:e.checked?Object(u.jsx)(p.a,{}):Object(u.jsx)(O.a,{})})]})};n(29);var g=function(e){function t(t){fetch("/api/edit",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=d.slice();n.splice(n.findIndex((function(e){return e._id===t._id})),1,t),m(n),e.selectedItem&&e.selectedItem._id===t._id&&e.setSelectedItem(t)}))}function n(e){var n=Object(r.a)({},e);n.checked=!e.checked,t(n)}function s(t){fetch("/api/remove",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=d.slice().filter((function(e){return e._id!==t._id}));m(n),e.selectedItem&&e.selectedItem._id===t._id&&e.setSelectedItem(null)}))}Object(c.useEffect)((function(){fetch("/api/orders",{method:"POST",body:JSON.stringify({user:e.user}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return m(e.reverse())}))}),[e.user]);var i=Object(c.useState)([]),o=Object(a.a)(i,2),d=o[0],m=o[1],b=Object(c.useState)(null),h=Object(a.a)(b,2),p=h[0],O=h[1],g=Object(c.useState)(!1),x=Object(a.a)(g,2),v=x[0],N=x[1];return Object(u.jsxs)("div",{className:"list-container",children:[Object(u.jsx)(j,{editItem:p,setEditItem:O,appendToList:function(t){fetch("/api/add",{method:"POST",body:JSON.stringify({user:e.user,item:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return m((function(t){return[e].concat(Object(l.a)(t))}))}))},replaceItem:t}),Object(u.jsxs)("div",{className:"items-container ".concat(v?"items-checked":"items-not-checked"),children:[Object(u.jsx)("label",{class:"label",children:Object(u.jsxs)("div",{className:"toggle",children:[Object(u.jsx)("input",{class:"toggle-state",type:"checkbox",name:"check",value:"check",onClick:function(){return N(!v)}}),Object(u.jsx)("div",{class:"indicator"})]})}),d.filter((function(e){return e.checked===v})).map((function(t,c){return Object(u.jsx)(f,{item:t,setSelectedItem:e.setSelectedItem,setEditItem:O,checked:v,switchCheck:n,removeItem:s},c)}))]})]})},x=n(13),v=n.n(x);n(30);var N=function(e){return Object(u.jsxs)("div",{className:"sidebar",children:[e.item.png&&Object(u.jsx)("img",{className:"image",src:e.item.png.file,alt:"img-png"}),Object(u.jsx)(v.a,{className:"close-icon",onClick:function(){return e.setSelectedItem(null)}}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("div",{className:"description",children:"Description:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text description-text",children:e.item.desc})}),Object(u.jsx)("div",{className:"client",children:"Client:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text client-text",children:e.item.client})}),Object(u.jsx)("div",{className:"address",children:"Address:"}),Object(u.jsx)("div",{className:"text-wrapper",children:Object(u.jsx)("div",{className:"text address-text",children:e.item.address&&e.item.address})})]}),Object(u.jsxs)("div",{className:"files-container",children:[Object(u.jsx)("div",{className:"png-container",children:e.item.png&&Object(u.jsx)("a",{className:"png",download:e.item.png.name,href:e.item.png.file,children:"png"})}),Object(u.jsx)("div",{className:"svg-container",children:e.item.svg&&Object(u.jsx)("a",{className:"svg",download:e.item.svg.name,href:e.item.svg.file,children:"svg"})}),Object(u.jsx)("div",{className:"ngc-container",children:e.item.ngc&&Object(u.jsx)("a",{className:"ngc",download:e.item.ngc.name,href:e.item.ngc.file,children:"ngc"})})]})]})};n(35),n(36);var I=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),o=l[0],d=l[1],j=/^[a-zA-Z0-9!@#$%^&*]{0,16}$/;return Object(u.jsxs)("div",{className:"".concat(e.className," container"),children:[Object(u.jsx)("div",{className:"title-container",children:Object(u.jsx)("h2",{className:"title-text",children:e.title})}),Object(u.jsxs)("form",{className:"form-container",children:[Object(u.jsx)("input",{className:"username-input input",type:"text",inputmode:"verbatim",value:s,placeholder:"Username (3-16 alphanumeric)",onChange:function(e){return j.test(e.target.value)&&i(e.target.value)}}),Object(u.jsx)("input",{className:"password-input input",type:"password",inputmode:"verbatim",value:o,placeholder:"Password (6-16 alphanumeric)",onChange:function(e){return j.test(e.target.value)&&d(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:e.title,className:"submit",onClick:function(t){if(t.preventDefault(),/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(o)&&/^[a-zA-Z0-9!@#$%^&*]{3,16}$/.test(s)){var n={username:s,password:o};e.action(n),i(""),d("")}}})]})]})};var S=function(e){return Object(u.jsx)("div",{className:"main-container",children:Object(u.jsxs)("div",{className:"auth-container",children:[Object(u.jsx)(I,{className:"login",title:"Login",action:function(t){fetch("/api/login",{method:"POST",body:JSON.stringify({user:t}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(n){n.login&&(e.setLogged(!0),e.setUser(t))}))}}),Object(u.jsx)(I,{className:"register",title:"Register",action:function(e){fetch("/api/register",{method:"POST",body:JSON.stringify({user:e}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}})]})})};var C=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),r=Object(a.a)(i,2),l=r[0],o=r[1],d=Object(c.useState)(!1),j=Object(a.a)(d,2),m=j[0],b=j[1];return m&&l?Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{user:l,selectedItem:n,setSelectedItem:s}),n&&Object(u.jsx)(N,{item:n,setSelectedItem:s})]}):Object(u.jsx)(S,{setUser:o,setLogged:b})};i.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fd8911c4.chunk.js.map