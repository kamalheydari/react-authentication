(this["webpackJsonpreact-Authentication"]=this["webpackJsonpreact-Authentication"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(10),n=a.n(s),r=a(15),i=a(11),o=a(7),d=a(14),l=function(e,t){var a={};return"/signup"===t&&(e.name?delete a.name:a.name="Username required",e.confirmPassword?e.confirmPassword!==e.password?a.confirmPassword="Passwords do not match":delete a.confirmPassword:a.confirmPassword="Confirm the password ",e.isAccepted?delete a.isAccepted:a.isAccepted="Accept our regulations"),e.email?/\S+@\S+\.\S+/.test(e.email)?delete a.email:a.email="Email address is invalid":a.email="Email required",e.password?e.password.length<6?a.password="Password need to be 6 character or more":delete a.password:a.password="Password is required",a},u=a(13),j=a(1),b=Object(c.createContext)(),m=function(){return Object(c.useContext)(b)},p=function(e){var t=e.children,a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],r=s[1],m=Object(c.useState)({name:"",email:"",password:"",confirmPassword:"",isAccepted:""}),p=Object(d.a)(m,2),O=p[0],h=p[1],f=Object(c.useState)({email:"",password:""}),g=Object(d.a)(f,2),x=g[0],w=g[1],v=Object(c.useState)({}),P=Object(d.a)(v,2),y=P[0],S=P[1],A=Object(c.useState)({}),N=Object(d.a)(A,2),_=N[0],E=N[1];Object(c.useEffect)((function(){S({}),E({})}),[n]),Object(c.useEffect)((function(){S(l(x,n))}),[x,n]),Object(c.useEffect)((function(){S(l(O,n))}),[O,n]);return Object(j.jsx)(b.Provider,{value:{signUpData:O,logInData:x,changeHandler:function(e){"/signup"===n?"isAccepted"===e.target.name?h(Object(o.a)(Object(o.a)({},O),{},Object(i.a)({},e.target.name,e.target.checked))):h(Object(o.a)(Object(o.a)({},O),{},Object(i.a)({},e.target.name,e.target.value))):w(Object(o.a)(Object(o.a)({},x),{},Object(i.a)({},e.target.name,e.target.value)))},focusHandler:function(e){E(Object(o.a)(Object(o.a)({},_),{},Object(i.a)({},e.target.name,!0)))},submitHandler:function(e){e.preventDefault(),Object.keys(y).length?(u.b.error("Invalid Data!"),E({name:!0,email:!0,password:!0,confirmPassword:!0,isAccepted:!0})):"/signup"===n?u.b.success("You signed up successfuly"):u.b.success("You loged in successfuly")},errors:y,touched:_,setPath:r,path:n},children:t})},O=a(3),h=a(40),f=a(39),g=function(e){var t=e.label,a=e.type,c=e.name,s=e.placeholder,n=(e.id,m()),r=n.changeHandler,i=n.signUpData,o=n.focusHandler,d=n.errors,l=n.touched,u=n.path,b=n.logInData;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form__control",children:[t&&Object(j.jsx)("label",{htmlFor:c,children:t}),Object(j.jsx)("input",{type:a,name:c,placeholder:s,id:c,value:"/signup"===u?i[c]:b[c],className:d[c]&&l[c]&&"uncompleted",onChange:r,onFocus:o}),Object(j.jsx)("span",{children:d[c]&&l[c]&&d[c]})]})})},x=[{id:1,placeholder:"Name",type:"text",name:"name"},{id:2,placeholder:"Email",type:"text",name:"email"},{id:3,placeholder:"Password",type:"password",name:"password"},{id:4,placeholder:"Confirm Password",type:"password",name:"confirmPassword"},{id:5,label:"I accept terms of privacy policy",type:"checkbox",name:"isAccepted"}],w=(a(27),function(){var e=m(),t=e.submitHandler,a=e.setPath,s=Object(O.g)().pathname;return Object(c.useEffect)((function(){a(s)}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("form",{className:"form",onSubmit:t,children:[Object(j.jsx)("h2",{className:"form__title",children:"/signup"===s?"SignUp":"LogIn"}),Object(j.jsxs)("div",{className:"form__inputs",children:["/signup"===s?x.map((function(e){return Object(j.jsx)(g,Object(o.a)({},e),e.id)})):x.slice(1,3).map((function(e){return Object(j.jsx)(g,Object(o.a)({},e),e.id)}))," "]}),Object(j.jsx)("div",{className:"form__btn",children:Object(j.jsx)("button",{type:"submit",children:"/signup"===s?"SignUp":"LogIn"})}),Object(j.jsxs)("div",{className:"form__link",children:[Object(j.jsx)("p",{children:"/signup"===s?"Already have an account?":" Need an account?"}),Object(j.jsx)(r.b,{to:"/signup"===s?"/login":"/signup",children:"/signup"===s?"LogIn":"SignUP"})]})]}),Object(j.jsx)(u.a,{})]})}),v=(a(36),function(){var e=Object(O.g)();return Object(j.jsx)(h.a,{component:null,children:Object(j.jsx)(f.a,{timeout:500,classNames:"fade",children:Object(j.jsxs)(O.d,{location:e,children:[Object(j.jsx)(O.b,{path:"/login",component:w}),Object(j.jsx)(O.b,{path:"/signup",component:w}),Object(j.jsx)(O.a,{from:"/",to:"/signup"})]})},e.key)})});n.a.render(Object(j.jsx)(p,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b50db43b.chunk.js.map