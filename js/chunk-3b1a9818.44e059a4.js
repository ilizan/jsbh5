(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1a9818"],{b588:function(t,e,o){},e9bf:function(t,e,o){"use strict";o("b588")},f2dd:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"authLogin"},[t._v(" "+t._s(t.msg)+" ")])},n=[],r={name:"AuthLogin",data:function(){return{code:"",msg:"授权中..."}},created:function(){this.code=this.$route.params.code;var t=this.$route.params.page;localStorage.removeItem("userInfo"),localStorage.removeItem("project"),localStorage.removeItem("token"),"home"==t?this.authLogin():this.toFormPage()},methods:{authLogin:function(){var t=this;this.$http.auth.authLogin({authCode:this.code}).then((function(e){e.data&&e.data.token?(localStorage.setItem("token",e.data.token),t.$router.push("/home")):t.$router.push("/noData")}))},toFormPage:function(){var t=this;this.$http.auth.getUserByAuthcode({authCode:this.code}).then((function(e){200==e.code?(localStorage.setItem("userInfo",JSON.stringify(e.data)),t.$router.push("/complaintForm")):t.msg=e.msg}))}},mounted:function(){}},s=r,u=(o("e9bf"),o("2877")),i=Object(u["a"])(s,a,n,!1,null,"345600bf",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-3b1a9818.44e059a4.js.map