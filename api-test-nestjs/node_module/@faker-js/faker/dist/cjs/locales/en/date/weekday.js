"use strict";var y=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var T=(d,a)=>{for(var u in a)y(d,u,{get:a[u],enumerable:!0})},o=(d,a,u,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of t(a))!S.call(d,e)&&e!==u&&y(d,e,{get:()=>a[e],enumerable:!(n=r(a,e))||n.enumerable});return d};var i=d=>o(y({},"__esModule",{value:!0}),d);var b={};T(b,{default:()=>s});module.exports=i(b);var s={wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wide_context:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],abbr_context:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};0&&(module.exports={});