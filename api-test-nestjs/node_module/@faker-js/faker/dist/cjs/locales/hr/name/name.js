"use strict";var t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var i=(e,a)=>{for(var n in a)t(e,n,{get:a[n],enumerable:!0})},r=(e,a,n,_)=>{if(a&&typeof a=="object"||typeof a=="function")for(let m of f(a))!l.call(e,m)&&m!==n&&t(e,m,{get:()=>a[m],enumerable:!(_=s(a,m))||_.enumerable});return e};var x=e=>r(t({},"__esModule",{value:!0}),e);var u={};i(u,{default:()=>p});module.exports=x(u);var p=["{{name.prefix}} {{name.first_name}} {{name.last_name}}","{{name.first_name}} {{name.last_name}}, {{name.suffix}}","{{name.first_name}} {{name.last_name}}","{{name.male_first_name}} {{name.last_name}}","{{name.female_first_name}} {{name.last_name}}"];0&&(module.exports={});
