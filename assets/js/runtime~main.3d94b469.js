!function(){"use strict";var e,a,f,c,t,n={},d={};function r(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=n,r.c=d,e=[],r.O=function(a,f,c,t){if(!f){var n=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],t=e[u][2];for(var d=!0,b=0;b<f.length;b++)(!1&t||n>=t)&&Object.keys(r.O).every((function(e){return r.O[e](f[b])}))?f.splice(b--,1):(d=!1,t<n&&(n=t));if(d){e.splice(u--,1);var o=c();void 0!==o&&(a=o)}}return a}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[f,c,t]},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);r.r(t);var n={};a=a||[null,f({}),f([]),f(f)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((function(a){n[a]=function(){return e[a]}}));return n.default=function(){return e},r.d(t,n),t},r.d=function(e,a){for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,f){return r.f[f](e,a),a}),[]))},r.u=function(e){return"assets/js/"+({5:"2ad14f26",53:"935f2afb",66:"603a972f",197:"3c4d155f",483:"9cfbed9f",713:"38f66d35",774:"5a26d9b8",801:"33b01b80",961:"9d2a8fcc",978:"928d5f3a",1152:"246ad242",1159:"c874fb0b",1522:"30a521a6",1539:"c3f2c28c",1775:"47099579",1874:"b0eb393a",1935:"e037c1f6",2236:"4bc37321",2485:"7b1048fd",2569:"233a09fe",2955:"a6a6301b",3042:"18b93cb3",3085:"1f391b9e",3352:"20ac5324",3502:"2b3dd806",3649:"77374962",4315:"f29686ba",4424:"7357f6ca",4443:"2bd02e64",4482:"bd799d2c",4758:"404a7da0",4781:"40f75a83",4919:"4e700ec7",5053:"06191e2f",5100:"d13dede0",5184:"5c79a2e8",5323:"92b6fa56",5613:"9f235aa2",5756:"59c7e4e2",5805:"72b8741e",6020:"0a43f7d9",6072:"c29a6ee1",6083:"a0f8e861",6232:"dc019643",6255:"c80d91e7",6402:"513cd402",6634:"98719e42",6677:"b6abab2d",6761:"7c51f005",6929:"bdb74327",6970:"442f3900",7119:"6fdf87a3",7136:"4c3414ba",7215:"2ba67661",7414:"393be207",7836:"fcfdb18f",7918:"17896441",7964:"7ab81c4a",8219:"1bac6c43",8230:"c99acde4",8609:"7b535446",8634:"7267134d",8749:"051fd0b4",8887:"4d385106",8894:"1d518ab8",9024:"f6640175",9035:"7659a98f",9179:"b4ebf530",9514:"1be78505",9586:"37b9254d",9594:"d7262046",9700:"2eba5772",9811:"8eda1333",9912:"4acd5490"}[e]||e)+"."+{5:"64d698a2",53:"3021ce88",66:"d2478744",197:"7583d7ed",483:"6f42095c",713:"80745293",774:"26d13432",801:"fe27cdf1",961:"d46265cf",978:"cd752556",1152:"b5b7c280",1159:"6537577c",1522:"2332b6fa",1539:"1c8c47c6",1775:"82972bc7",1874:"88d89f4b",1935:"ed798255",2236:"bebf04c7",2485:"0c6f4950",2569:"796120ad",2955:"6c80f68f",3042:"af937199",3085:"8d8332ff",3352:"47cbc766",3502:"06a97b73",3649:"05a76992",4315:"9823ddfb",4424:"6d63fdd1",4443:"16b501f3",4482:"26b4aa27",4608:"d74be905",4758:"ba036ae6",4776:"3a1e338e",4781:"54e5c6e3",4919:"45940608",5053:"acf4a2e9",5100:"54c23c79",5184:"9d6d2c5f",5323:"bf23c681",5613:"8b29a770",5642:"43bb7341",5756:"c2a0b0a5",5805:"1e8c2f0c",5814:"e0da9b0f",6020:"18b16287",6072:"6bc96b83",6083:"a788184c",6232:"15442f07",6255:"b2429ba4",6402:"437a4529",6634:"bf626283",6677:"1d2c8938",6761:"01511233",6929:"7eae2ee5",6970:"97e7df3a",7119:"6a34a65c",7136:"7166faae",7215:"8c1dfa65",7414:"386eb18b",7836:"c2508b4e",7918:"ddb56230",7964:"9100ccdf",8219:"6a6d0ddc",8230:"294b4c99",8609:"8925f108",8634:"fcf750eb",8749:"c2d3d9e8",8887:"76e7b181",8894:"d4e0a085",9024:"86d537a2",9035:"4db1348c",9179:"12ea124c",9514:"9a62dc23",9586:"f154ce9e",9594:"e5ac19a8",9700:"125715b3",9811:"a7b397ac",9912:"05c5a165"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.2ea2618d.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},t="monaco:",r.l=function(e,a,f,n){if(c[e])c[e].push(a);else{var d,b;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==t+f){d=i;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",t+f),d.src=e),c[e]=[a];var s=function(a,f){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),b&&document.head.appendChild(d)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/dynatrace-monitoring-as-code/",r.gca=function(e){return e={17896441:"7918",47099579:"1775",77374962:"3649","2ad14f26":"5","935f2afb":"53","603a972f":"66","3c4d155f":"197","9cfbed9f":"483","38f66d35":"713","5a26d9b8":"774","33b01b80":"801","9d2a8fcc":"961","928d5f3a":"978","246ad242":"1152",c874fb0b:"1159","30a521a6":"1522",c3f2c28c:"1539",b0eb393a:"1874",e037c1f6:"1935","4bc37321":"2236","7b1048fd":"2485","233a09fe":"2569",a6a6301b:"2955","18b93cb3":"3042","1f391b9e":"3085","20ac5324":"3352","2b3dd806":"3502",f29686ba:"4315","7357f6ca":"4424","2bd02e64":"4443",bd799d2c:"4482","404a7da0":"4758","40f75a83":"4781","4e700ec7":"4919","06191e2f":"5053",d13dede0:"5100","5c79a2e8":"5184","92b6fa56":"5323","9f235aa2":"5613","59c7e4e2":"5756","72b8741e":"5805","0a43f7d9":"6020",c29a6ee1:"6072",a0f8e861:"6083",dc019643:"6232",c80d91e7:"6255","513cd402":"6402","98719e42":"6634",b6abab2d:"6677","7c51f005":"6761",bdb74327:"6929","442f3900":"6970","6fdf87a3":"7119","4c3414ba":"7136","2ba67661":"7215","393be207":"7414",fcfdb18f:"7836","7ab81c4a":"7964","1bac6c43":"8219",c99acde4:"8230","7b535446":"8609","7267134d":"8634","051fd0b4":"8749","4d385106":"8887","1d518ab8":"8894",f6640175:"9024","7659a98f":"9035",b4ebf530:"9179","1be78505":"9514","37b9254d":"9586",d7262046:"9594","2eba5772":"9700","8eda1333":"9811","4acd5490":"9912"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(a,f){var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise((function(f,t){c=e[a]=[f,t]}));f.push(c[2]=t);var n=r.p+r.u(a),d=new Error;r.l(n,(function(f){if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=f&&("load"===f.type?"missing":f.type),n=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+n+")",d.name="ChunkLoadError",d.type=t,d.request=n,c[1](d)}}),"chunk-"+a,a)}},r.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,t,n=f[0],d=f[1],b=f[2],o=0;if(n.some((function(a){return 0!==e[a]}))){for(c in d)r.o(d,c)&&(r.m[c]=d[c]);if(b)var u=b(r)}for(a&&a(f);o<n.length;o++)t=n[o],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(u)},f=self.webpackChunkmonaco=self.webpackChunkmonaco||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();