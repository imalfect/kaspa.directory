"use strict";(self.webpackChunkkaspa_directory=self.webpackChunkkaspa_directory||[]).push([[4757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(8266);const c={},i="XT.com",s={unversionedId:"xtcom",id:"xtcom",title:"XT.com",description:"Information:",source:"@site/exchanges/xtcom.mdx",sourceDirName:".",slug:"/xtcom",permalink:"/exchanges/xtcom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"fundingPoolsSidebar",previous:{title:"TradeOgre",permalink:"/exchanges/tradeogre"}},l={},p=[{value:"Information:",id:"information",level:2},{value:"Description",id:"description",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xtcom"},"XT.com"),(0,o.kt)("h2",{id:"information"},"Information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.xt.com"},"xt.com")),(0,o.kt)("li",{parentName:"ul"},"Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/XTexchange"},"@XTexchange")),(0,o.kt)("li",{parentName:"ul"},"Kaspa volume (Spot): ",(0,o.kt)(a.Z,{coin:"kaspa",exchange:"xt",mdxType:"ExchangeVolume"}))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"XT.com is a prominent cryptocurrency exchange known for its comprehensive platform and wide range of supported digital assets. With a focus on providing a secure and user-friendly trading environment, XT.com offers traders and investors access to a diverse selection of cryptocurrencies. The exchange's intuitive interface, advanced trading features, and commitment to security have garnered a strong reputation within the crypto community. XT.com's dedication to innovation and user satisfaction makes it a preferred choice for both beginners and experienced traders looking to engage in the dynamic world of cryptocurrency trading."))}f.isMDXComponent=!0},8266:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function o(e){const[t,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async function(e,t){try{const r=await fetch(`https://api.coingecko.com/api/v3/coins/${t}/tickers?exchange_ids=${e}`),n=await r.json();return console.log(n),n.tickers[0].converted_volume.usd}catch(r){return"N/A"}})(e.exchange,e.coin).then((e=>{if("N/A"===e)return void r("N/A");const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);r(t)}))}),[]),n.createElement("span",null,t)}}}]);