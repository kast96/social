(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[6],{222:function(r,e,t){r.exports={formControl:"FormsControls_formControl__3oc0t",error:"FormsControls_error__3zufy",formSummaryError:"FormsControls_formSummaryError__CiuWy"}},223:function(r,e,t){"use strict";t.d(e,"b",(function(){return j})),t.d(e,"a",(function(){return b}));var n=t(3),c=t(226),o=(t(0),t(222)),i=t.n(o),s=t(2),a=["input","meta"],u=["input","meta"],j=function(r){var e=r.input,t=r.meta,o=Object(c.a)(r,a),u=t.touched&&t.error;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(u?i.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(n.a)(Object(n.a)({},e),o))}),Object(s.jsx)("div",{children:u&&Object(s.jsx)("span",{children:t.error})})]})},b=function(r){var e=r.input,t=r.meta,o=Object(c.a)(r,u),a=t.touched&&t.error;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",Object(n.a)(Object(n.a)({},e),o))}),Object(s.jsx)("div",{children:a&&Object(s.jsx)("span",{children:t.error})})]})}},224:function(r,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"a",(function(){return c}));var n=function(r){if(!r)return"Field is required"},c=function(r){return function(e){if(e&&e.length>r)return"Max length is ".concat(r," symbols")}}},291:function(r,e,t){"use strict";t.r(e);var n=t(103),c=t(104),o=t(223),i=t(224),s=t(222),a=t.n(s),u=t(2),j=Object(c.a)({form:"login"})((function(r){var e=r.handleSubmit,t=r.error;return Object(u.jsxs)("form",{onSubmit:e,children:[Object(u.jsx)("div",{children:Object(u.jsx)(n.a,{component:o.a,name:"email",placeholder:"Email",validate:[i.b]})}),Object(u.jsx)("div",{children:Object(u.jsx)(n.a,{component:o.a,name:"password",type:"password",placeholder:"Password",validate:[i.b]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(n.a,{component:o.a,name:"rememberMe",type:"checkbox"}),"Remember me"]}),t&&Object(u.jsx)("div",{className:a.a.formSummaryError,children:t}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Login"})})]})})),b=t(7),l=function(r){return r.isAuth?Object(u.jsx)(b.a,{to:"/profile/"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)(j,{onSubmit:function(e){r.login(e.email,e.password,e.rememberMe)}})]})},d=t(25),m=t(22),f=Object(m.b)((function(r){return{isAuth:r.auth.isAuth}}),(function(r){return{login:function(e,t,n){r(Object(d.c)(e,t,n))}}}))(l);e.default=f}}]);
//# sourceMappingURL=6.6d78019a.chunk.js.map