/*! For license information please see 59.server.js.LICENSE.txt */
"use strict";exports.id=59,exports.ids=[59],exports.modules={30148:(e,t,r)=>{r.d(t,{m:()=>n});var a=r(16158);class n extends a.YN{get lc_attributes(){return{partialVariables:void 0}}constructor(e){super(e),Object.defineProperty(this,"lc_serializable",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"lc_namespace",{enumerable:!0,configurable:!0,writable:!0,value:["langchain_core","prompts",this._getPromptType()]}),Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"partialVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const{inputVariables:t}=e;if(t.includes("stop"))throw new Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");Object.assign(this,e)}async mergePartialAndUserVariables(e){const t=this.partialVariables??{},r={};for(const[e,a]of Object.entries(t))r[e]="string"==typeof a?a:await a();return{...r,...e}}async invoke(e,t){return this._callWithConfig((e=>this.formatPromptValue(e)),e,{...t,runType:"prompt"})}serialize(){throw new Error("Use .toJSON() instead")}static async deserialize(e){switch(e._type){case"prompt":{const{PromptTemplate:t}=await Promise.resolve().then(r.bind(r,33847));return t.deserialize(e)}case void 0:{const{PromptTemplate:t}=await Promise.resolve().then(r.bind(r,33847));return t.deserialize({...e,_type:"prompt"})}case"few_shot":{const{FewShotPromptTemplate:t}=await r.e(714).then(r.bind(r,32714));return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}}},33847:(e,t,r)=>{r.d(t,{PromptTemplate:()=>i});var a=r(92600),n=r(74938);class i extends a.L{static lc_name(){return"PromptTemplate"}constructor(e){if(super(e),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),"mustache"===e.templateFormat&&void 0===e.validateTemplate&&(this.validateTemplate=!1),Object.assign(this,e),this.validateTemplate){if("mustache"===this.templateFormat)throw new Error("Mustache templates cannot be validated.");let e=this.inputVariables;this.partialVariables&&(e=e.concat(Object.keys(this.partialVariables))),(0,n.Ns)(this.template,this.templateFormat,e)}}_getPromptType(){return"prompt"}async format(e){const t=await this.mergePartialAndUserVariables(e);return(0,n.Xm)(this.template,this.templateFormat,t)}static fromExamples(e,t,r,a="\n\n",n=""){const s=[n,...e,t].join(a);return new i({inputVariables:r,template:s})}static fromTemplate(e,t){const{templateFormat:r="f-string",...a}=t??{},s=new Set;return(0,n.QC)(e,r).forEach((e=>{"variable"===e.type&&s.add(e.name)})),new i({inputVariables:[...s],templateFormat:r,template:e,...a})}async partial(e){const t=this.inputVariables.filter((t=>!(t in e))),r={...this.partialVariables??{},...e},a={...this,inputVariables:t,partialVariables:r};return new i(a)}serialize(){if(void 0!==this.outputParser)throw new Error("Cannot serialize a prompt template with an output parser");return{_type:this._getPromptType(),input_variables:this.inputVariables,template:this.template,template_format:this.templateFormat}}static async deserialize(e){if(!e.template)throw new Error("Prompt template must have a template");return new i({inputVariables:e.input_variables,template:e.template,templateFormat:e.template_format})}}},92600:(e,t,r)=>{r.d(t,{L:()=>i});var a=r(85760),n=r(30148);class i extends n.m{async formatPromptValue(e){const t=await this.format(e);return new a.HY(t)}}},74938:(e,t,r)=>{r.d(t,{Ns:()=>_,D4:()=>x,QC:()=>V,Xm:()=>T});var a=Object.prototype.toString,n=Array.isArray||function(e){return"[object Array]"===a.call(e)};function i(e){return"function"==typeof e}function s(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var l=RegExp.prototype.test,p=/\S/;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},u=/\s*/,h=/\s+/,f=/\s*=/,m=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function g(e){this.string=e,this.tail=e,this.pos=0}function v(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function b(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.eos=function(){return""===this.tail},g.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},g.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},v.prototype.push=function(e){return new v(e,this)},v.prototype.lookup=function(e){var t,r,a,n=this.cache;if(n.hasOwnProperty(e))t=n[e];else{for(var s,l,p,c=this,u=!1;c;){if(e.indexOf(".")>0)for(s=c.view,l=e.split("."),p=0;null!=s&&p<l.length;)p===l.length-1&&(u=o(s,l[p])||(r=s,a=l[p],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(a))),s=s[l[p++]];else s=c.view[e],u=o(c.view,e);if(u){t=s;break}c=c.parent}n[e]=t}return i(t)&&(t=t.call(this.view)),t},b.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},b.prototype.parse=function(e,t){var r=this.templateCache,a=e+":"+(t||w.tags).join(":"),i=void 0!==r,o=i?r.get(a):void 0;return null==o&&(o=function(e,t){if(!e)return[];var r,a,i,o,c=!1,v=[],b=[],y=[],P=!1,x=!1,E="",j=0;function T(){if(P&&!x)for(;y.length;)delete b[y.pop()];else y=[];P=!1,x=!1}function V(e){if("string"==typeof e&&(e=e.split(h,2)),!n(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(s(e[0])+"\\s*"),a=new RegExp("\\s*"+s(e[1])),i=new RegExp("\\s*"+s("}"+e[1]))}V(t||w.tags);for(var _,C,k,O,U,S,F=new g(e);!F.eos();){if(_=F.pos,k=F.scanUntil(r))for(var z=0,A=k.length;z<A;++z)o=O=k.charAt(z),function(e,t){return l.call(e,t)}(p,o)?(x=!0,c=!0,E+=" "):(y.push(b.length),E+=O),b.push(["text",O,_,_+1]),_+=1,"\n"===O&&(T(),E="",j=0,c=!1);if(!F.scan(r))break;if(P=!0,C=F.scan(d)||"name",F.scan(u),"="===C?(k=F.scanUntil(f),F.scan(f),F.scanUntil(a)):"{"===C?(k=F.scanUntil(i),F.scan(m),F.scanUntil(a),C="&"):k=F.scanUntil(a),!F.scan(a))throw new Error("Unclosed tag at "+F.pos);if(U=">"==C?[C,k,_,F.pos,E,j,c]:[C,k,_,F.pos],j++,b.push(U),"#"===C||"^"===C)v.push(U);else if("/"===C){if(!(S=v.pop()))throw new Error('Unopened section "'+k+'" at '+_);if(S[1]!==k)throw new Error('Unclosed section "'+S[1]+'" at '+_)}else"name"===C||"{"===C||"&"===C?x=!0:"="===C&&V(k)}if(T(),S=v.pop())throw new Error('Unclosed section "'+S[1]+'" at '+F.pos);return function(e){for(var t,r=[],a=r,n=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":a.push(t),n.push(t),a=t[4]=[];break;case"/":n.pop()[5]=t[2],a=n.length>0?n[n.length-1][4]:r;break;default:a.push(t)}return r}(function(e){for(var t,r,a=[],n=0,i=e.length;n<i;++n)(t=e[n])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(a.push(t),r=t));return a}(b))}(e,t),i&&r.set(a,o)),o},b.prototype.render=function(e,t,r,a){var n=this.getConfigTags(a),i=this.parse(e,n),s=t instanceof v?t:new v(t,void 0);return this.renderTokens(i,s,r,e,a)},b.prototype.renderTokens=function(e,t,r,a,n){for(var i,s,o,l="",p=0,c=e.length;p<c;++p)o=void 0,"#"===(s=(i=e[p])[0])?o=this.renderSection(i,t,r,a,n):"^"===s?o=this.renderInverted(i,t,r,a,n):">"===s?o=this.renderPartial(i,t,r,n):"&"===s?o=this.unescapedValue(i,t):"name"===s?o=this.escapedValue(i,t,n):"text"===s&&(o=this.rawValue(i)),void 0!==o&&(l+=o);return l},b.prototype.renderSection=function(e,t,r,a,s){var o=this,l="",p=t.lookup(e[1]);if(p){if(n(p))for(var c=0,u=p.length;c<u;++c)l+=this.renderTokens(e[4],t.push(p[c]),r,a,s);else if("object"==typeof p||"string"==typeof p||"number"==typeof p)l+=this.renderTokens(e[4],t.push(p),r,a,s);else if(i(p)){if("string"!=typeof a)throw new Error("Cannot use higher-order sections without the original template");null!=(p=p.call(t.view,a.slice(e[3],e[5]),(function(e){return o.render(e,t,r,s)})))&&(l+=p)}else l+=this.renderTokens(e[4],t,r,a,s);return l}},b.prototype.renderInverted=function(e,t,r,a,i){var s=t.lookup(e[1]);if(!s||n(s)&&0===s.length)return this.renderTokens(e[4],t,r,a,i)},b.prototype.indentPartial=function(e,t,r){for(var a=t.replace(/[^ \t]/g,""),n=e.split("\n"),i=0;i<n.length;i++)n[i].length&&(i>0||!r)&&(n[i]=a+n[i]);return n.join("\n")},b.prototype.renderPartial=function(e,t,r,a){if(r){var n=this.getConfigTags(a),s=i(r)?r(e[1]):r[e[1]];if(null!=s){var o=e[6],l=e[5],p=e[4],c=s;0==l&&p&&(c=this.indentPartial(s,p,o));var u=this.parse(c,n);return this.renderTokens(u,t,r,c,a)}}},b.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},b.prototype.escapedValue=function(e,t,r){var a=this.getConfigEscape(r)||w.escape,n=t.lookup(e[1]);if(null!=n)return"number"==typeof n&&a===w.escape?String(n):a(n)},b.prototype.rawValue=function(e){return e[1]},b.prototype.getConfigTags=function(e){return n(e)?e:e&&"object"==typeof e?e.tags:void 0},b.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!n(e)?e.escape:void 0};var w={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){y.templateCache=e},get templateCache(){return y.templateCache}},y=new b;w.clearCache=function(){return y.clearCache()},w.parse=function(e,t){return y.parse(e,t)},w.render=function(e,t,r,a){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return y.render(e,t,r,a)},w.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))},w.Scanner=g,w.Context=v,w.Writer=b;const P=w,x=e=>{const t=e.split(""),r=[],a=(e,r)=>{for(let a=r;a<t.length;a+=1)if(e.includes(t[a]))return a;return-1};let n=0;for(;n<t.length;)if("{"===t[n]&&n+1<t.length&&"{"===t[n+1])r.push({type:"literal",text:"{"}),n+=2;else if("}"===t[n]&&n+1<t.length&&"}"===t[n+1])r.push({type:"literal",text:"}"}),n+=2;else if("{"===t[n]){const e=a("}",n);if(e<0)throw new Error("Unclosed '{' in template.");r.push({type:"variable",name:t.slice(n+1,e).join("")}),n=e+1}else{if("}"===t[n])throw new Error("Single '}' in template.");{const e=a("{}",n),i=(e<0?t.slice(n):t.slice(n,e)).join("");r.push({type:"literal",text:i}),n=e<0?t.length:e}}return r},E={"f-string":(e,t)=>x(e).reduce(((e,r)=>{if("variable"===r.type){if(r.name in t)return e+t[r.name];throw new Error(`(f-string) Missing value for input ${r.name}`)}return e+r.text}),""),mustache:(e,t)=>P.render(e,t)},j={"f-string":x,mustache:e=>(e=>e.map((e=>"name"===e[0]?{type:"variable",name:e[1].includes(".")?e[1].split(".")[0]:e[1]}:"#"===e[0]?{type:"variable",name:e[1]}:{type:"literal",text:e[1]})))(P.parse(e))},T=(e,t,r)=>E[t](e,r),V=(e,t)=>j[t](e),_=(e,t,r)=>{if(!(t in E)){const e=Object.keys(E);throw new Error(`Invalid template format. Got \`${t}\`;\n                         should be one of ${e}`)}try{const a=r.reduce(((e,t)=>(e[t]="foo",e)),{});Array.isArray(e)?e.forEach((e=>{if("text"===e.type)T(e.text,t,a);else{if("image_url"!==e.type)throw new Error(`Invalid message template received. ${JSON.stringify(e,null,2)}`);if("string"==typeof e.image_url)T(e.image_url,t,a);else{const r=e.image_url.url;T(r,t,a)}}})):T(e,t,a)}catch(e){throw new Error(`Invalid prompt schema: ${e.message}`)}}}};