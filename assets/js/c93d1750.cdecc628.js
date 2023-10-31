"use strict";(self.webpackChunkkaspa_directory=self.webpackChunkkaspa_directory||[]).push([[9701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(8266);const o={},c="DigiFinex",s={unversionedId:"digifinex",id:"digifinex",title:"DigiFinex",description:"Information:",source:"@site/exchanges/digifinex.mdx",sourceDirName:".",slug:"/digifinex",permalink:"/exchanges/digifinex",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"fundingPoolsSidebar",previous:{title:"CoinEx",permalink:"/exchanges/coinex"},next:{title:"Gate.io",permalink:"/exchanges/gateio"}},l={},p=[{value:"Information:",id:"information",level:2},{value:"Description",id:"description",level:2}],u={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"digifinex"},"DigiFinex"),(0,i.kt)("h2",{id:"information"},"Information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("a",{parentName:"li",href:"https://www.digifinex.com"},"digifinex.com")),(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/DigiFinex"},"@DigiFinex")),(0,i.kt)("li",{parentName:"ul"},"Kaspa volume (Spot): ",(0,i.kt)(a.Z,{coin:"kaspa",exchange:"digifinex",mdxType:"ExchangeVolume"}))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"DigiFinex is a well-established cryptocurrency exchange renowned for its comprehensive spot trading platform. With an expansive selection of supported digital assets, DigiFinex provides a user-friendly interface for seamless buying, selling, and trading of cryptocurrencies. The exchange places a strong emphasis on security, competitive fees, and a wide variety of trading pairs, making it a preferred choice for spot traders seeking a dependable trading experience. DigiFinex's commitment to innovation and user satisfaction further solidifies its reputation as a reliable and dynamic platform within the cryptocurrency market."))}d.isMDXComponent=!0},8266:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function i(e){const[t,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async function(e,t){try{const n=await fetch(`https://api.coingecko.com/api/v3/coins/${t}/tickers?exchange_ids=${e}`),r=await n.json();return console.log(r),r.tickers[0].converted_volume.usd}catch(n){return"N/A"}})(e.exchange,e.coin).then((e=>{if("N/A"===e)return void n("N/A");const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);n(t)}))}),[]),r.createElement("span",null,t)}}}]);