"use strict";var i=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var u=(n,e)=>{for(var r in e)i(n,r,{get:e[r],enumerable:!0})},f=(n,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of a(e))!m.call(n,t)&&t!==r&&i(n,t,{get:()=>e[t],enumerable:!(s=h(e,t))||s.enumerable});return n};var b=n=>f(i({},"__esModule",{value:!0}),n);var l={};u(l,{PhoneModule:()=>p});module.exports=b(l);var o=require("../../internal/deprecated");class p{constructor(e){this.faker=e;for(const r of Object.getOwnPropertyNames(p.prototype))r==="constructor"||typeof this[r]!="function"||(this[r]=this[r].bind(this))}phoneNumber(e){return(0,o.deprecated)({deprecated:"faker.phone.phoneNumber()",proposed:"faker.phone.number()",since:"7.3",until:"8.0"}),this.faker.phone.number(e)}number(e){return e=e!=null?e:this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats),this.faker.helpers.replaceSymbolWithNumber(e)}phoneNumberFormat(e=0){return(0,o.deprecated)({deprecated:"faker.phone.phoneNumberFormat()",proposed:"faker.phone.phoneNumber() or faker.helpers.replaceSymbolWithNumber(format)",since:"7.0",until:"8.0"}),this.faker.helpers.replaceSymbolWithNumber(this.faker.definitions.phone_number.formats[e])}phoneFormats(){return(0,o.deprecated)({deprecated:"faker.phone.phoneFormats()",proposed:"faker.phone.phoneNumber()",since:"7.0",until:"8.0"}),this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats)}imei(){return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L","#")}}0&&(module.exports={PhoneModule});