"use strict";var s=Object.create;var n=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var D=(o,t)=>{for(var i in t)n(o,i,{get:t[i],enumerable:!0})},r=(o,t,i,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of c(t))!C.call(o,m)&&m!==i&&n(o,m,{get:()=>t[m],enumerable:!(p=y(t,m))||p.enumerable});return o};var e=(o,t,i)=>(i=o!=null?s(x(o)):{},r(t||!o||!o.__esModule?n(i,"default",{value:o,enumerable:!0}):i,o)),d=o=>r(n({},"__esModule",{value:!0}),o);var _={};D(_,{default:()=>u});module.exports=d(_);var f=e(require("./name_patterns")),a=e(require("./prefix"));const l={name_patterns:f.default,prefix:a.default};var u=l;0&&(module.exports={});