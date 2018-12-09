(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(70)},37:function(e,a,t){},60:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),o=(t(37),t(3)),s=t(4),i=t(6),m=t(5),u=t(7),p=t(72),d=t(74),h=t(73),f=t(31),E=t(18),b=t(11),v=t.n(b),y=r.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});default:return e}},j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return g(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/users").then(function(a){e.setState({contacts:a.data})})}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),O=y.Consumer,C=(t(58),t(60),t(71)),N=function(e){var a=e.branding;return r.a.createElement("div",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},r.a.createElement("h4",null,a)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};N.defaultProps={branding:"My App"};var k=N,x=t(12),w=t.n(x),A=t(13),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onClickDelete=function(){var e=Object(A.a)(w.a.mark(function e(a,t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props);var a=this.props,t=a.id,n=a.name,c=a.phone,l=a.email,o=this.state.showContactInfo;return r.a.createElement(O,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onClickDelete.bind(e,t,s)}),r.a.createElement(C.a,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"},onClick:e.onClickDelete.bind(e,t,s)}))),o?r.a.createElement("ul",null,r.a.createElement("li",null," ID: ",t," "),r.a.createElement("li",null," First Name: ",n," "),r.a.createElement("li",null," Email: ",l," "),r.a.createElement("li",null," Phone: ",c," ")):null)})}}]),a}(n.Component),D=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.contacts.map(function(e){return r.a.createElement(S,{key:e.id,id:e.id,name:e.name,email:e.email,phone:e.phone,errors:e.errors})}))})}}]),a}(n.Component),T=t(14),I=t(29),F=t.n(I),M=function(e){var a=e.name,t=e.placeholder,n=e.type,c=e.onChange,l=e.error,o=e.label,s=e.value;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},o),r.a.createElement("input",{name:a,placeholder:t,type:n,className:F()("form-control form-control-lg",{"is-invalid":l}),value:s,onChange:c,error:l}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};M.defaultProps={type:"text"};var P=M,q=(t(66),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",name:"",phone:"",email:"",age:"",errors:{},onChange:""},t.onChange=function(e){return t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(A.a)(w.a.mark(function e(a,n){var r,c,l,o,s,i,m;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,l=r.phone,o=r.email,s=r.age,r.errors,""!==c){e.next=5;break}return t.setState({errors:{name:"First name is required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{phone:"Last name is required"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 11:return i={name:c,phone:l,email:o,age:s},e.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:m=e.sent,console.log(m),a({type:"ADD_CONTACT",payload:m.data}),t.setState({name:"",phone:"",email:"",age:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.phone,c=a.email,l=a.age,o=a.errors;return r.a.createElement(O,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,s)},r.a.createElement(P,{label:"First Name",name:"name",type:"text",placeholder:"input first name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Phone",name:"phone",type:"text",placeholder:"your phone",value:n,onChange:e.onChange,error:o.phone}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"input your email",value:c,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Age",name:"age",type:"text",placeholder:"imput your age",value:l,onChange:e.onChange}),r.a.createElement("input",{type:"submit",className:"btn-light btn-lg"}))))})}}]),a}(n.Component)),L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",email:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(w.a.mark(function e(){var a,t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,phone:n.phone,email:n.email});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(n.Component),_=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).ImageInputHandler=function(e){console.log(e)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:this.ImageInputHandler}))}}]),a}(n.Component),H=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{classname:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,"About this apps")),r.a.createElement("div",{calssname:"card-body"},r.a.createElement("span",null,"Sample Cantact Manager"),r.a.createElement("span",null,"Version 6.12.18"))))},J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{classname:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"404 "),"Page Not Found.")),r.a.createElement("div",{calssname:"card-body"},r.a.createElement("span",{classname:"lead"},r.a.createElement("h4",null,"Sorry page you try to access is not exist.")),r.a.createElement("span",null),r.a.createElement("p",null,"Sample Cantact Manager"))))},B=function(e){return r.a.createElement("div",{className:"display-4 mb-2"},r.a.createElement("div",null,"This parameter is => ",e.match.params.id))},R=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(h.a,{exact:!0,path:"/contact/imageupload",component:_}),r.a.createElement(h.a,{exact:!0,path:"/about",component:H}),r.a.createElement(h.a,{path:"/params/:id",component:B}),r.a.createElement(h.a,{component:J}))))))}}]),a}(n.Component);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.24646ba9.chunk.js.map