"use strict";var s=Object.create;var r=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var D=(e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})},f=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of _(t))!u.call(e,o)&&o!==i&&r(e,o,{get:()=>t[o],enumerable:!(n=x(t,o))||n.enumerable});return e};var m=(e,t,i)=>(i=e!=null?s(d(e)):{},f(t||!e||!e.__esModule?r(i,"default",{value:e,enumerable:!0}):i,e)),I=e=>f(r({},"__esModule",{value:!0}),e);var b={};D(b,{default:()=>y});module.exports=I(b);var p=m(require("./domain_suffix")),a=m(require("./example_email")),l=m(require("./free_email"));const c={domain_suffix:p.default,example_email:a.default,free_email:l.default};var y=c;0&&(module.exports={});