"use strict";var x=Object.create;var e=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var u=(m,o)=>{for(var t in o)e(m,t,{get:o[t],enumerable:!0})},n=(m,o,t,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of N(o))!d.call(m,i)&&i!==t&&e(m,i,{get:()=>o[i],enumerable:!(f=D(o,i))||f.enumerable});return m};var r=(m,o,t)=>(t=m!=null?x(c(m)):{},n(o||!m||!m.__esModule?e(t,"default",{value:m,enumerable:!0}):t,m)),y=m=>n(e({},"__esModule",{value:!0}),m);var h={};u(h,{default:()=>g});module.exports=y(h);var a=r(require("./first_name")),p=r(require("./last_name")),s=r(require("./name")),l=r(require("./prefix")),_=r(require("./title"));const b={first_name:a.default,last_name:p.default,name:s.default,prefix:l.default,title:_.default};var g=b;0&&(module.exports={});