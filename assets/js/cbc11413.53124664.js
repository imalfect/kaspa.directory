"use strict";(self.webpackChunkkaspa_directory=self.webpackChunkkaspa_directory||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(8266);const i={},c="MEXC",s={unversionedId:"mexc",id:"mexc",title:"MEXC",description:"Information:",source:"@site/exchanges/mexc.mdx",sourceDirName:".",slug:"/mexc",permalink:"/exchanges/mexc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"fundingPoolsSidebar",previous:{title:"LBank",permalink:"/exchanges/lbank"},next:{title:"TradeOgre",permalink:"/exchanges/tradeogre"}},l={},p=[{value:"Information:",id:"information",level:2},{value:"Description",id:"description",level:2}],u={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mexc"},"MEXC"),(0,a.kt)("h2",{id:"information"},"Information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://mexc.com"},"mexc.com")),(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/mexc_official"},"@mexc_official")),(0,a.kt)("li",{parentName:"ul"},"Kaspa volume (Spot): ",(0,a.kt)(o.Z,{coin:"kaspa",exchange:"mxc",mdxType:"ExchangeVolume"}))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A leading cryptocurrency exchange known for its robust spot trading features. With a diverse range of supported cryptocurrencies, MEXC offers traders a user-friendly platform to buy, sell, and trade digital assets effortlessly. The exchange's emphasis on security, competitive fees, and a wide variety of trading pairs makes it a preferred choice for spot traders seeking a seamless and secure trading experience. MEXC's commitment to innovation and user satisfaction further cements its position as a reliable platform for engaging in spot trading within the crypto market."))}m.isMDXComponent=!0},8266:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){const[t,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async function(e,t){try{const r=await fetch(`https://api.coingecko.com/api/v3/coins/${t}/tickers?exchange_ids=${e}`),n=await r.json();return console.log(n),n.tickers[0].converted_volume.usd}catch(r){return"N/A"}})(e.exchange,e.coin).then((e=>{if("N/A"===e)return void r("N/A");const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);r(t)}))}),[]),n.createElement("span",null,t)}}}]);