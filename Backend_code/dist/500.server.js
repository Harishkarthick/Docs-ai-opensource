/*! For license information please see 500.server.js.LICENSE.txt */
"use strict";exports.id=500,exports.ids=[500],exports.modules={39343:(e,t,s)=>{s.d(t,{Cf:()=>n,SP:()=>a,mu:()=>i});const a="__run";class i{constructor(e){Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"generationInfo",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.text=e.text,this.generationInfo=e.generationInfo}concat(e){return new i({text:this.text+e.text,generationInfo:{...this.generationInfo,...e.generationInfo}})}}class n extends i{constructor(e){super(e),Object.defineProperty(this,"message",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.message=e.message}concat(e){return new n({text:this.text+e.text,generationInfo:{...this.generationInfo,...e.generationInfo},message:this.message.concat(e.message)})}}},90681:(e,t,s)=>{s.d(t,{YN:()=>a.YN,ZI:()=>i.ZI});var a=s(16158),i=s(49868);s(24231),a.YN,a.YN,a.YN,s(44450),a.fJ},26895:(e,t,s)=>{s.d(t,{ZE:()=>P,j_:()=>O});var a="object"==typeof window?window:{},i="0123456789abcdef".split(""),n=[-2147483648,8388608,32768,128],r=[24,16,8,0],o=[];function c(e){e?(o[0]=o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0,this.blocks=o):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}c.prototype.update=function(e){if(!this.finalized){var t="string"!=typeof e;t&&e.constructor===a.ArrayBuffer&&(e=new Uint8Array(e));for(var s,i,n=0,o=e.length||0,c=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,c[0]=this.block,c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0),t)for(i=this.start;n<o&&i<64;++n)c[i>>2]|=e[n]<<r[3&i++];else for(i=this.start;n<o&&i<64;++n)(s=e.charCodeAt(n))<128?c[i>>2]|=s<<r[3&i++]:s<2048?(c[i>>2]|=(192|s>>6)<<r[3&i++],c[i>>2]|=(128|63&s)<<r[3&i++]):s<55296||s>=57344?(c[i>>2]|=(224|s>>12)<<r[3&i++],c[i>>2]|=(128|s>>6&63)<<r[3&i++],c[i>>2]|=(128|63&s)<<r[3&i++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++n)),c[i>>2]|=(240|s>>18)<<r[3&i++],c[i>>2]|=(128|s>>12&63)<<r[3&i++],c[i>>2]|=(128|s>>6&63)<<r[3&i++],c[i>>2]|=(128|63&s)<<r[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=c[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296|0,this.bytes=this.bytes%4294967296),this}},c.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=n[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},c.prototype.hash=function(){var e,t,s=this.h0,a=this.h1,i=this.h2,n=this.h3,r=this.h4,o=this.blocks;for(e=16;e<80;++e)t=o[e-3]^o[e-8]^o[e-14]^o[e-16],o[e]=t<<1|t>>>31;for(e=0;e<20;e+=5)s=(t=(a=(t=(i=(t=(n=(t=(r=(t=s<<5|s>>>27)+(a&i|~a&n)+r+1518500249+o[e]|0)<<5|r>>>27)+(s&(a=a<<30|a>>>2)|~s&i)+n+1518500249+o[e+1]|0)<<5|n>>>27)+(r&(s=s<<30|s>>>2)|~r&a)+i+1518500249+o[e+2]|0)<<5|i>>>27)+(n&(r=r<<30|r>>>2)|~n&s)+a+1518500249+o[e+3]|0)<<5|a>>>27)+(i&(n=n<<30|n>>>2)|~i&r)+s+1518500249+o[e+4]|0,i=i<<30|i>>>2;for(;e<40;e+=5)s=(t=(a=(t=(i=(t=(n=(t=(r=(t=s<<5|s>>>27)+(a^i^n)+r+1859775393+o[e]|0)<<5|r>>>27)+(s^(a=a<<30|a>>>2)^i)+n+1859775393+o[e+1]|0)<<5|n>>>27)+(r^(s=s<<30|s>>>2)^a)+i+1859775393+o[e+2]|0)<<5|i>>>27)+(n^(r=r<<30|r>>>2)^s)+a+1859775393+o[e+3]|0)<<5|a>>>27)+(i^(n=n<<30|n>>>2)^r)+s+1859775393+o[e+4]|0,i=i<<30|i>>>2;for(;e<60;e+=5)s=(t=(a=(t=(i=(t=(n=(t=(r=(t=s<<5|s>>>27)+(a&i|a&n|i&n)+r-1894007588+o[e]|0)<<5|r>>>27)+(s&(a=a<<30|a>>>2)|s&i|a&i)+n-1894007588+o[e+1]|0)<<5|n>>>27)+(r&(s=s<<30|s>>>2)|r&a|s&a)+i-1894007588+o[e+2]|0)<<5|i>>>27)+(n&(r=r<<30|r>>>2)|n&s|r&s)+a-1894007588+o[e+3]|0)<<5|a>>>27)+(i&(n=n<<30|n>>>2)|i&r|n&r)+s-1894007588+o[e+4]|0,i=i<<30|i>>>2;for(;e<80;e+=5)s=(t=(a=(t=(i=(t=(n=(t=(r=(t=s<<5|s>>>27)+(a^i^n)+r-899497514+o[e]|0)<<5|r>>>27)+(s^(a=a<<30|a>>>2)^i)+n-899497514+o[e+1]|0)<<5|n>>>27)+(r^(s=s<<30|s>>>2)^a)+i-899497514+o[e+2]|0)<<5|i>>>27)+(n^(r=r<<30|r>>>2)^s)+a-899497514+o[e+3]|0)<<5|a>>>27)+(i^(n=n<<30|n>>>2)^r)+s-899497514+o[e+4]|0,i=i<<30|i>>>2;this.h0=this.h0+s|0,this.h1=this.h1+a|0,this.h2=this.h2+i|0,this.h3=this.h3+n|0,this.h4=this.h4+r|0},c.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,s=this.h2,a=this.h3,n=this.h4;return i[e>>28&15]+i[e>>24&15]+i[e>>20&15]+i[e>>16&15]+i[e>>12&15]+i[e>>8&15]+i[e>>4&15]+i[15&e]+i[t>>28&15]+i[t>>24&15]+i[t>>20&15]+i[t>>16&15]+i[t>>12&15]+i[t>>8&15]+i[t>>4&15]+i[15&t]+i[s>>28&15]+i[s>>24&15]+i[s>>20&15]+i[s>>16&15]+i[s>>12&15]+i[s>>8&15]+i[s>>4&15]+i[15&s]+i[a>>28&15]+i[a>>24&15]+i[a>>20&15]+i[a>>16&15]+i[a>>12&15]+i[a>>8&15]+i[a>>4&15]+i[15&a]+i[n>>28&15]+i[n>>24&15]+i[n>>20&15]+i[n>>16&15]+i[n>>12&15]+i[n>>8&15]+i[n>>4&15]+i[15&n]},c.prototype.toString=c.prototype.hex,c.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,s=this.h2,a=this.h3,i=this.h4;return[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,s>>24&255,s>>16&255,s>>8&255,255&s,a>>24&255,a>>16&255,a>>8&255,255&a,i>>24&255,i>>16&255,i>>8&255,255&i]},c.prototype.array=c.prototype.digest,c.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(20),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),e};var h=s(44450);const l=(...e)=>{return t=e.join("_"),new c(!0).update(t).hex();var t};class u{}const d=new Map;class p extends u{constructor(e){super(),Object.defineProperty(this,"cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cache=e??new Map}lookup(e,t){return Promise.resolve(this.cache.get(l(e,t))??null)}async update(e,t,s){this.cache.set(l(e,t),s)}static global(){return new p(d)}}var b=s(85760),g=s(3817),f=s(7991),m=Object.defineProperty;function y(e,t){return 1===e.length?[t.get(e.join(","))]:function(e,t){let s=Array.from({length:e.length},((e,t)=>({start:t,end:t+1})));for(;s.length>1;){let a=null;for(let i=0;i<s.length-1;i++){const n=e.slice(s[i].start,s[i+1].end),r=t.get(n.join(","));null!=r&&(null==a||r<a[0])&&(a=[r,i])}if(null==a)break;{const e=a[1];s[e]={start:s[e].start,end:s[e+1].end},s.splice(e+1,1)}}return s}(e,t).map((s=>t.get(e.slice(s.start,s.end).join(",")))).filter((e=>null!=e))}var v,w=class{specialTokens;inverseSpecialTokens;patStr;textEncoder=new TextEncoder;textDecoder=new TextDecoder("utf-8");rankMap=new Map;textMap=new Map;constructor(e,t){this.patStr=e.pat_str;const s=e.bpe_ranks.split("\n").filter(Boolean).reduce(((e,t)=>{const[s,a,...i]=t.split(" "),n=Number.parseInt(a,10);return i.forEach(((t,s)=>e[t]=n+s)),e}),{});for(const[e,t]of Object.entries(s)){const s=f.toByteArray(e);this.rankMap.set(s.join(","),t),this.textMap.set(t,s)}this.specialTokens={...e.special_tokens,...t},this.inverseSpecialTokens=Object.entries(this.specialTokens).reduce(((e,[t,s])=>(e[s]=this.textEncoder.encode(t),e)),{})}encode(e,t=[],s="all"){const a=new RegExp(this.patStr,"ug"),i=w.specialTokenRegex(Object.keys(this.specialTokens)),n=[],r=new Set("all"===t?Object.keys(this.specialTokens):t),o=new Set("all"===s?Object.keys(this.specialTokens).filter((e=>!r.has(e))):s);if(o.size>0){const t=w.specialTokenRegex([...o]),s=e.match(t);if(null!=s)throw new Error(`The text contains a special token that is not allowed: ${s[0]}`)}let c=0;for(;;){let t=null,s=c;for(;i.lastIndex=s,t=i.exec(e),null!=t&&!r.has(t[0]);)s=t.index+1;const o=t?.index??e.length;for(const t of e.substring(c,o).matchAll(a)){const e=this.textEncoder.encode(t[0]),s=this.rankMap.get(e.join(","));null==s?n.push(...y(e,this.rankMap)):n.push(s)}if(null==t)break;let h=this.specialTokens[t[0]];n.push(h),c=t.index+t[0].length}return n}decode(e){const t=[];let s=0;for(let a=0;a<e.length;++a){const i=e[a],n=this.textMap.get(i)??this.inverseSpecialTokens[i];null!=n&&(t.push(n),s+=n.length)}const a=new Uint8Array(s);let i=0;for(const e of t)a.set(e,i),i+=e.length;return this.textDecoder.decode(a)}},k=w;((e,t,s)=>{t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(k,"symbol"!=typeof(v="specialTokenRegex")?v+"":v,(e=>new RegExp(e.map((e=>e.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"))).join("|"),"g")));const x={},_=new g.g({});var j=s(16158);class P extends j.YN{get lc_attributes(){return{callbacks:void 0,verbose:void 0}}constructor(e){super(e),Object.defineProperty(this,"verbose",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"callbacks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tags",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metadata",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.verbose=e.verbose??!1,this.callbacks=e.callbacks,this.tags=e.tags??[],this.metadata=e.metadata??{}}}class O extends P{get callKeys(){return["stop","timeout","signal","tags","metadata","callbacks"]}constructor({callbacks:e,callbackManager:t,...s}){super({callbacks:e??t,...s}),Object.defineProperty(this,"caller",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_encoding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),"object"==typeof s.cache?this.cache=s.cache:s.cache?this.cache=p.global():this.cache=void 0,this.caller=new g.g(s??{})}async getNumTokens(e){if("string"!=typeof e)return 0;let t=Math.ceil(e.length/4);if(!this._encoding)try{this._encoding=await async function(e){return async function(e){return e in x||(x[e]=_.fetch(`https://tiktoken.pages.dev/js/${e}.json`).then((e=>e.json())).then((e=>new k(e))).catch((t=>{throw delete x[e],t}))),await x[e]}(function(e){switch(e){case"gpt2":return"gpt2";case"code-cushman-001":case"code-cushman-002":case"code-davinci-001":case"code-davinci-002":case"cushman-codex":case"davinci-codex":case"davinci-002":case"text-davinci-002":case"text-davinci-003":return"p50k_base";case"code-davinci-edit-001":case"text-davinci-edit-001":return"p50k_edit";case"ada":case"babbage":case"babbage-002":case"code-search-ada-code-001":case"code-search-babbage-code-001":case"curie":case"davinci":case"text-ada-001":case"text-babbage-001":case"text-curie-001":case"text-davinci-001":case"text-search-ada-doc-001":case"text-search-babbage-doc-001":case"text-search-curie-doc-001":case"text-search-davinci-doc-001":case"text-similarity-ada-001":case"text-similarity-babbage-001":case"text-similarity-curie-001":case"text-similarity-davinci-001":return"r50k_base";case"gpt-3.5-turbo-instruct-0914":case"gpt-3.5-turbo-instruct":case"gpt-3.5-turbo-16k-0613":case"gpt-3.5-turbo-16k":case"gpt-3.5-turbo-0613":case"gpt-3.5-turbo-0301":case"gpt-3.5-turbo":case"gpt-4-32k-0613":case"gpt-4-32k-0314":case"gpt-4-32k":case"gpt-4-0613":case"gpt-4-0314":case"gpt-4":case"gpt-3.5-turbo-1106":case"gpt-35-turbo":case"gpt-4-1106-preview":case"gpt-4-vision-preview":case"gpt-3.5-turbo-0125":case"gpt-4-turbo":case"gpt-4-turbo-2024-04-09":case"gpt-4-turbo-preview":case"gpt-4-0125-preview":case"text-embedding-ada-002":return"cl100k_base";case"gpt-4o":case"gpt-4o-2024-05-13":return"o200k_base";default:throw new Error("Unknown model")}}(e))}("modelName"in this?(s=this.modelName,s.startsWith("gpt-3.5-turbo-16k")?"gpt-3.5-turbo-16k":s.startsWith("gpt-3.5-turbo-")?"gpt-3.5-turbo":s.startsWith("gpt-4-32k")?"gpt-4-32k":s.startsWith("gpt-4-")?"gpt-4":s.startsWith("gpt-4o")?"gpt-4o":s):"gpt2")}catch(e){console.warn("Failed to calculate number of tokens, falling back to approximate count",e)}var s;if(this._encoding)try{t=this._encoding.encode(e).length}catch(e){console.warn("Failed to calculate number of tokens, falling back to approximate count",e)}return t}static _convertInputToPromptValue(e){return"string"==typeof e?new b.HY(e):Array.isArray(e)?new b.aB(e.map(h.K0)):e}_identifyingParams(){return{}}_getSerializedCacheKeyParametersForCall({config:e,...t}){const s={...this._identifyingParams(),...t,_type:this._llmType(),_model:this._modelType()},a=Object.entries(s).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}:${JSON.stringify(t)}`)).sort().join(",");return a}serialize(){return{...this._identifyingParams(),_type:this._llmType(),_model:this._modelType()}}static async deserialize(e){throw new Error("Use .toJSON() instead")}}},47673:(e,t,s)=>{s.d(t,{YN:()=>a.YN,ZI:()=>a.ZI});var a=s(90681)},43500:(e,t,s)=>{s.d(t,{r:()=>o});var a=s(39343),i=s(7459),n=s(47673),r=s(26895);class o extends r.ZE{get lc_namespace(){return["langchain","chains",this._chainType()]}constructor(e,t,s){if(1!==arguments.length||"object"!=typeof e||"saveContext"in e)super({verbose:t,callbacks:s}),this.memory=e;else{const{memory:t,callbackManager:s,...a}=e;super({...a,callbacks:s??a.callbacks}),this.memory=t}}_selectMemoryInputs(e){const t={...e};return"signal"in t&&delete t.signal,"timeout"in t&&delete t.timeout,t}async invoke(e,t){const s=(0,n.ZI)(t),r=await this._formatValues(e),o=await i.Td.configure(s?.callbacks,this.callbacks,s?.tags,this.tags,s?.metadata,this.metadata,{verbose:this.verbose}),c=await(o?.handleChainStart(this.toJSON(),r,void 0,void 0,void 0,void 0,s?.runName));let h;try{h=await(r.signal?Promise.race([this._call(r,c,s),new Promise(((e,t)=>{r.signal?.addEventListener("abort",(()=>{t(new Error("AbortError"))}))}))]):this._call(r,c,s))}catch(e){throw await(c?.handleChainError(e)),e}return null!=this.memory&&await this.memory.saveContext(this._selectMemoryInputs(e),h),await(c?.handleChainEnd(h)),Object.defineProperty(h,a.SP,{value:c?{runId:c?.runId}:void 0,configurable:!0}),h}_validateOutputs(e){const t=this.outputKeys.filter((t=>!(t in e)));if(t.length)throw new Error(`Missing output keys: ${t.join(", ")} from chain ${this._chainType()}`)}async prepOutputs(e,t,s=!1){return this._validateOutputs(t),this.memory&&await this.memory.saveContext(e,t),s?t:{...e,...t}}serialize(){throw new Error("Method not implemented.")}async run(e,t){const s=this.inputKeys.filter((e=>!this.memory?.memoryKeys.includes(e)??!0));if(!(s.length<=1))throw new Error(`Chain ${this._chainType()} expects multiple inputs, cannot use 'run' `);const a=s.length?{[s[0]]:e}:{},i=await this.call(a,t),n=Object.keys(i);if(1===n.length)return i[n[0]];throw new Error("return values have multiple keys, `run` only supported when one key currently")}async _formatValues(e){const t={...e};if(t.timeout&&!t.signal&&(t.signal=AbortSignal.timeout(t.timeout),delete t.timeout),null!=this.memory){const s=await this.memory.loadMemoryVariables(this._selectMemoryInputs(e));for(const[e,a]of Object.entries(s))t[e]=a}return t}async call(e,t,s){const a={tags:s,...(0,i.H_)(t)};return this.invoke(e,a)}async apply(e,t){return Promise.all(e.map((async(e,s)=>this.call(e,t?.[s]))))}static async deserialize(e,t={}){switch(e._type){case"llm_chain":{const{LLMChain:t}=await Promise.all([s.e(714),s.e(59),s.e(876)]).then(s.bind(s,76876));return t.deserialize(e)}case"sequential_chain":{const{SequentialChain:t}=await s.e(985).then(s.bind(s,91366));return t.deserialize(e)}case"simple_sequential_chain":{const{SimpleSequentialChain:t}=await s.e(985).then(s.bind(s,91366));return t.deserialize(e)}case"stuff_documents_chain":{const{StuffDocumentsChain:t}=await Promise.all([s.e(714),s.e(59),s.e(876),s.e(590)]).then(s.bind(s,81209));return t.deserialize(e)}case"map_reduce_documents_chain":{const{MapReduceDocumentsChain:t}=await Promise.all([s.e(714),s.e(59),s.e(876),s.e(590)]).then(s.bind(s,81209));return t.deserialize(e)}case"refine_documents_chain":{const{RefineDocumentsChain:t}=await Promise.all([s.e(714),s.e(59),s.e(876),s.e(590)]).then(s.bind(s,81209));return t.deserialize(e)}case"vector_db_qa":{const{VectorDBQAChain:a}=await Promise.all([s.e(714),s.e(59),s.e(876),s.e(177)]).then(s.bind(s,83177));return a.deserialize(e,t)}case"api_chain":{const{APIChain:t}=await Promise.all([s.e(714),s.e(59),s.e(876),s.e(672)]).then(s.bind(s,1291));return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}}}};