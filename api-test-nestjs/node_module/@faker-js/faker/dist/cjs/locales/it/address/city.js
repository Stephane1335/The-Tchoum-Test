"use strict";var f=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var m=(s,e)=>{for(var i in e)f(s,i,{get:e[i],enumerable:!0})},n=(s,e,i,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of t(e))!_.call(s,a)&&a!==i&&f(s,a,{get:()=>e[a],enumerable:!(d=r(e,a))||d.enumerable});return s};var x=s=>n(f({},"__esModule",{value:!0}),s);var y={};m(y,{default:()=>c});module.exports=x(y);var c=["{{address.city_prefix}} {{name.first_name}} {{address.city_suffix}}","{{address.city_prefix}} {{name.first_name}}","{{name.first_name}} {{address.city_suffix}}","{{name.last_name}} {{address.city_suffix}}"];0&&(module.exports={});