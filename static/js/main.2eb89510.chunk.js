(this["webpackJsonpredux-steps"]=this["webpackJsonpredux-steps"]||[]).push([[0],{11:function(e,r,t){e.exports=t(23)},16:function(e,r,t){},23:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(4),c=t.n(o),l=(t(16),function(e){var r=e.errorMessage,t=e.error,n=e.bgColor;return a.a.createElement("div",{className:"converted-value"},t?r:n)}),u=function(e){return{type:"SET_ERROR",payload:e}},s=t(1),i=t(10),p=t.n(i),b=function(){var e=Object(s.b)();return a.a.createElement("form",null,a.a.createElement("input",{className:"color-input",placeholder:"hex value",type:"text",onChange:function(r){var t=r.target.value,n=t.length;if(7===n)try{e(u(!1));var a=function(e){var r=p()(e,{format:"array"});return"rgb(".concat(r.join(",").slice(0,-2),")")}(t);e({type:"SET_BG_COLOR",payload:a})}catch(o){e(u(!0))}else n>7&&e(u(!0))}}))},g=function(){var e=Object(s.c)((function(e){return e.app.bgColor})),r=Object(s.c)((function(e){return e.app.error})),t=Object(s.c)((function(e){return e.app.errorMessage})),n=r?"#dc3545":e;return console.log(r),a.a.createElement("div",{className:"container",style:{backgroundColor:"".concat(n)}},a.a.createElement("div",null,a.a.createElement(b,{bgColor:e,error:r,bg:n}),a.a.createElement(l,{errorMessage:t,bgColor:e,error:r})))};var d=function(){return a.a.createElement(g,null)},f=t(2),v=t(3),m={error:!1,bgColor:"",errorMessage:"\u041e\u0448\u0438\u0431\u043a\u0430"},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,r=arguments.length>1?arguments[1]:void 0,t=r.type,n=r.payload;switch(t){case"SET_BG_COLOR":return Object(v.a)(Object(v.a)({},e),{},{bgColor:n});case"SET_ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:n});default:return e}},O=Object(f.b)({app:E}),h=Object(f.c)(O);c.a.render(a.a.createElement(s.a,{store:h},a.a.createElement(d,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2eb89510.chunk.js.map