(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(18),c=t.n(a),o=t(9),u=t(19),i=t(3),s=t(5),d=t.n(s),b="/api/persons",j=t(0);var l=function(e){var n=e.text;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:n})})};var h=function(e){var n=e.addName,t=e.newName,r=e.handleNameChange,a=e.setNewName,c=e.newNumber,o=e.handleNumberChange,u=e.setNewNumber;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name:"," ",Object(j.jsx)("input",{value:t,onChange:r,onFocus:function(){return a("")}})]}),Object(j.jsxs)("div",{children:["number:"," ",Object(j.jsx)("input",{value:c,onChange:o,onFocus:function(){return u("")}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})})};var m=function(e){var n=e.handleFilterChange;return Object(j.jsxs)("div",{children:["filter shown with: ",Object(j.jsx)("input",{onChange:n})]})};var f=function(e){var n=e.name,t=e.number,r=e.id,a=e.deletePerson;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("p",{children:[n," ",t," ",Object(j.jsx)("button",{onClick:function(){return a(n,r)},children:"delete"})]})})};var O=function(e){var n=e.filteredPersons,t=e.deletePerson;return Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsx)(f,{name:e.name,number:e.number,id:e.id,deletePerson:t},e.id)}))})};var v=function(e){var n=e.message,t=e.error;return null===n?null:Object(j.jsx)("div",{className:t?"error":"person-added",children:n})},w=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)("add a new name"),s=Object(i.a)(c,2),f=s[0],w=s[1],x=Object(r.useState)("add the number"),g=Object(i.a)(x,2),p=g[0],N=g[1],C=Object(r.useState)(""),S=Object(i.a)(C,2),F=S[0],k=S[1],P=Object(r.useState)(null),y=Object(i.a)(P,2),T=y[0],L=y[1],E=Object(r.useState)(!1),A=Object(i.a)(E,2),D=A[0],I=A[1];Object(r.useEffect)((function(){d.a.get(b).then((function(e){return e.data})).then((function(e){return a(e)})).catch((function(e){return alert("Something went wrong with fetching data!")}))}),[]);var J=t.filter((function(e){return e.name.toLowerCase().includes(F.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{text:"Phonebook"}),Object(j.jsx)(v,{message:T,error:D}),Object(j.jsx)(m,{handleFilterChange:function(e){return k(e.target.value)}}),Object(j.jsx)(l,{text:"add a new"}),Object(j.jsx)(h,{addName:function(e){e.preventDefault();var n,r,c=Object(u.a)(t),i={};return c.forEach((function(e){e.name.toLowerCase()===f.toLowerCase()&&(i=Object(o.a)(Object(o.a)({},e),{},{number:p,exists:!0}))})),i.exists?(window.confirm("".concat(i.name," is already added to the phonebook, replace the old number with a new one?"))&&(n=i.id,r={name:i.name,number:i.number},d.a.put("".concat(b,"/").concat(n),r).then((function(e){return e.data}))).then((function(e){a(t.map((function(n){return n.id!==i.id?n:e}))),L("Number of  ".concat(e.name," was changed!")),w(""),N(""),setTimeout((function(){L(null)}),5e3)})).catch((function(e){return alert("Something went wrong when you want to replace the number!")})),w(""),void N("")):""===f||""===p?(alert("Add data in both inputs"),w(""),void N("")):void function(e){return d.a.post(b,e).then((function(e){return e.data}))}({name:f,number:p}).then((function(e){c.push(e),a(c),L("Added ".concat(e.name)),w(""),N(""),setTimeout((function(){L(null)}),5e3)})).catch((function(e){L(e.response.data.error),I(!0),setTimeout((function(){L(null),I(!1)}),5e3)}))},newName:f,handleNameChange:function(e){return w(e.target.value)},setNewName:w,newNumber:p,handleNumberChange:function(e){return N(e.target.value)},setNewNumber:N}),Object(j.jsx)(l,{text:"Numbers"}),Object(j.jsx)(O,{filteredPersons:J,deletePerson:function(e,n){window.confirm("Delete ".concat(e," ?"))&&function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))}(n).then((function(r){a(t.filter((function(e){return e.id!==n}))),L("".concat(e," has been removed with success")),I(!0),setTimeout((function(){L(null),I(!1)}),5e3)})).catch((function(r){L("Information of  ".concat(e," has already been removed from server")),a(t.filter((function(e){return e.id!==n}))),I(!0),setTimeout((function(){L(null),I(!1)}),5e3)}))}})]})};t(44);c.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.be7b9f6f.chunk.js.map