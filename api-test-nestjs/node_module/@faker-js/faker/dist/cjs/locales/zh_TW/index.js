"use strict";var s=Object.create;var m=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var u=(e,o)=>{for(var i in o)m(e,i,{get:o[i],enumerable:!0})},a=(e,o,i,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of d(o))!_.call(e,t)&&t!==i&&m(e,t,{get:()=>o[t],enumerable:!(r=c(o,t))||r.enumerable});return e};var n=(e,o,i)=>(i=e!=null?s(h(e)):{},a(o||!e||!e.__esModule?m(i,"default",{value:e,enumerable:!0}):i,e)),D=e=>a(m({},"__esModule",{value:!0}),e);var b={};u(b,{default:()=>T});module.exports=D(b);var f=n(require("./address")),p=n(require("./name")),l=n(require("./phone_number"));const L={title:"Chinese (Taiwan)",address:f.default,name:p.default,phone_number:l.default};var T=L;0&&(module.exports={});