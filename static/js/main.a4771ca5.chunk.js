(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(70)},37:function(e,a,t){},60:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),o=(t(37),t(6)),s=t(7),m=t(9),i=t(8),u=t(10),p=t(72),d=t(74),h=t(73),E=t(30),f=t(18),b=t(11),v=t.n(b),y=r.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(f.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});default:return e}},N=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return g(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/users").then(function(a){e.setState({contacts:a.data})})}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=y.Consumer,O=(t(58),t(60),t(71)),j=function(e){var a=e.branding;return r.a.createElement("div",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},r.a.createElement("h4",null,a)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};j.defaultProps={branding:"My App"};var k=j,x=t(12),w=t.n(x),A=t(14),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onClickDelete=function(){var e=Object(A.a)(w.a.mark(function e(a,t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props);var a=this.props,t=a.id,n=a.fname,c=a.phone,l=this.state.showContactInfo;return r.a.createElement(C,null,function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onClickDelete.bind(e,t,o)})),l?r.a.createElement("ul",null,r.a.createElement("li",null," ID: ",t," "),r.a.createElement("li",null," First Name: ",n," "),r.a.createElement("li",null," Phone: ",c," ")):null)})}}]),a}(n.Component),D=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.contacts.map(function(e){return r.a.createElement(S,{key:e.id,id:e.id,fname:e.name,phone:e.phone,errors:e.errors})}))})}}]),a}(n.Component),T=t(13),F=t(28),I=t.n(F),P=function(e){var a=e.name,t=e.placeholder,n=e.type,c=e.onChange,l=e.error,o=e.label,s=e.value;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},o),r.a.createElement("input",{name:a,placeholder:t,type:n,className:I()("form-control form-control-lg",{"is-invalid":l}),value:s,onChange:c,error:l}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};P.defaultProps={type:"text"};var M=P,q=(t(66),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",name:"",phone:"",email:"",age:"",errors:{}},t.onChange=function(e){return t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(A.a)(w.a.mark(function e(a,n){var r,c,l,o,s,m,i;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,l=r.phone,o=r.email,s=r.age,""!==c){e.next=5;break}return t.setState({errors:{fname:"First name is required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{lname:"Last name is required"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 11:return m={name:c,phone:l,email:o,age:s},e.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",m);case 14:i=e.sent,console.log(i),a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",phone:"",email:"",age:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.phone,c=a.email,l=a.age,o=a.errors;return r.a.createElement(C,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,s)},r.a.createElement(M,{label:"First Name",name:"name",type:"text",placeholder:"input first name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(M,{label:"Phone",name:"phone",type:"text",placeholder:"your phone",value:n,onChange:e.onChange,error:o.phone}),r.a.createElement(M,{label:"Email",name:"email",type:"email",placeholder:"input your email",value:c,onChange:e.onChange,error:o.email}),r.a.createElement(M,{label:"Age",name:"age",type:"text",placeholder:"imput your age",value:l,onChange:e.onChange}),r.a.createElement("input",{type:"submit",className:"btn-light btn-lg"}))))})}}]),a}(n.Component)),L=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{classname:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"About this apps")),r.a.createElement("div",{calssname:"card-body"},r.a.createElement("span",null,"Sample Cantact Manager"),r.a.createElement("span",null,"Version 6.12.18"))))},_=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{classname:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"404 "),"Page Not Found.")),r.a.createElement("div",{calssname:"card-body"},r.a.createElement("span",{classname:"lead"},r.a.createElement("h4",null,"Sorry page you try to access is not exist.")),r.a.createElement("span",null),r.a.createElement("p",null,"Sample Cantact Manager"))))},J=function(e){return r.a.createElement("div",{className:"display-4 mb-2"},r.a.createElement("div",null,"This parameter is => ",e.match.params.id))},B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"app"},r.a.createElement(k,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(h.a,{exact:!0,path:"/about",component:L}),r.a.createElement(h.a,{path:"/params/:id",component:J}),r.a.createElement(h.a,{component:_}))))))}}]),a}(n.Component);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.a4771ca5.chunk.js.map