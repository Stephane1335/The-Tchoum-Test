"use strict";var l=Object.create;var e=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty;var d=(m,o)=>{for(var i in o)e(m,i,{get:o[i],enumerable:!0})},n=(m,o,i,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of D(o))!c.call(m,r)&&r!==i&&e(m,r,{get:()=>o[r],enumerable:!(f=u(o,r))||f.enumerable});return m};var t=(m,o,i)=>(i=m!=null?l(N(m)):{},n(o||!m||!m.__esModule?e(i,"default",{value:m,enumerable:!0}):i,m)),y=m=>n(e({},"__esModule",{value:!0}),m);var h={};d(h,{default:()=>g});module.exports=y(h);var a=t(require("./first_name")),p=t(require("./last_name")),s=t(require("./name")),x=t(require("./prefix")),_=t(require("./suffix"));const b={first_name:a.default,last_name:p.default,name:s.default,prefix:x.default,suffix:_.default};var g=b;0&&(module.exports={});
