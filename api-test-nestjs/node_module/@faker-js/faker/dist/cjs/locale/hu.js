"use strict";var i=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var F=(o,e)=>{for(var r in e)a(o,r,{get:e[r],enumerable:!0})},c=(o,e,r,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of h(e))!u.call(o,l)&&l!==r&&a(o,l,{get:()=>e[l],enumerable:!(m=k(e,l))||m.enumerable});return o};var t=(o,e,r)=>(r=o!=null?i(s(o)):{},c(e||!o||!o.__esModule?a(r,"default",{value:o,enumerable:!0}):r,o)),b=o=>c(a({},"__esModule",{value:!0}),o);var x={};F(x,{faker:()=>w});module.exports=b(x);var f=require("../faker"),n=t(require("../locales/en")),p=t(require("../locales/hu"));const w=new f.Faker({locale:"hu",localeFallback:"en",locales:{hu:p.default,en:n.default}});0&&(module.exports={faker});