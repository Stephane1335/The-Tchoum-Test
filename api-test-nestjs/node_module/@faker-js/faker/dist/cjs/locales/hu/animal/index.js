"use strict";var s=Object.create;var r=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var g=(o,i)=>{for(var m in i)r(o,m,{get:i[m],enumerable:!0})},a=(o,i,m,f)=>{if(i&&typeof i=="object"||typeof i=="function")for(let t of d(i))!D.call(o,t)&&t!==m&&r(o,t,{get:()=>i[t],enumerable:!(f=c(i,t))||f.enumerable});return o};var n=(o,i,m)=>(m=o!=null?s(A(o)):{},a(i||!o||!o.__esModule?r(m,"default",{value:o,enumerable:!0}):m,o)),h=o=>a(r({},"__esModule",{value:!0}),o);var y={};g(y,{default:()=>x});module.exports=h(y);var e=n(require("./cat")),p=n(require("./dog")),l=n(require("./horse"));const u={cat:e.default,dog:p.default,horse:l.default};var x=u;0&&(module.exports={});
