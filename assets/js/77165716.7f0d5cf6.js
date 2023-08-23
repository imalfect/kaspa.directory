"use strict";(self.webpackChunkkaspa_directory=self.webpackChunkkaspa_directory||[]).push([[7194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(8266);const o={},c="Gate.io",s={unversionedId:"gateio",id:"gateio",title:"Gate.io",description:"Information:",source:"@site/exchanges/gateio.mdx",sourceDirName:".",slug:"/gateio",permalink:"/exchanges/gateio",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"fundingPoolsSidebar",previous:{title:"DigiFinex",permalink:"/exchanges/digifinex"},next:{title:"KuCoin",permalink:"/exchanges/kucoin"}},l={},u=[{value:"Information:",id:"information",level:2},{value:"Description",id:"description",level:2}],p={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gateio"},"Gate.io"),(0,a.kt)("h2",{id:"information"},"Information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://gate.io"},"gate.io")),(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/gate_io"},"@gate.io")),(0,a.kt)("li",{parentName:"ul"},"Kaspa volume (Spot): ",(0,a.kt)(i.Z,{coin:"kaspa",exchange:"gate",mdxType:"ExchangeVolume"}))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Gate.io: A dynamic cryptocurrency exchange known for its versatile platform and standout features. Offering a wide array of digital assets, Gate.io emphasizes advanced trading options, including margin and futures trading. With its user-friendly interface, competitive trading fees, and a focus on security, it's an attractive choice for both newcomers and experienced traders. Gate.io's commitment to innovation is evident in its support for a variety of tokens and its strategic partnerships."))}d.isMDXComponent=!0},8266:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){const[t,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async function(e,t){try{const n=await fetch(`https://api.coingecko.com/api/v3/coins/${t}/tickers?exchange_ids=${e}`),r=await n.json();return console.log(r),r.tickers[0].converted_volume.usd}catch(n){return"N/A"}})(e.exchange,e.coin).then((e=>{if("N/A"===e)return void n("N/A");const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);n(t)}))}),[]),r.createElement("span",null,t)}}}]);