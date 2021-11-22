"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[780],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?i.createElement(h,o(o({ref:t},m),{},{components:r})):i.createElement(h,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8721:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={},l="Histogram Series",c={unversionedId:"series/histogram-series",id:"series/histogram-series",isDocsHomePage:!1,title:"Histogram Series",description:"A histogram series is a graphical representation of the value distribution.",source:"@site/docs/series/histogram-series.md",sourceDirName:"series",slug:"/series/histogram-series",permalink:"/lightweight-charts/series/histogram-series",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Candlestick Series",permalink:"/lightweight-charts/series/candlestick-series"},next:{title:"Line Series",permalink:"/lightweight-charts/series/line-series"}},m=[{value:"How to create histogram series",id:"how-to-create-histogram-series",children:[],level:2},{value:"Data format",id:"data-format",children:[],level:2},{value:"Customization",id:"customization",children:[{value:"Examples",id:"examples",children:[],level:3}],level:2}],p={toc:m};function u(e){var t=e.components,s=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"histogram-series"},"Histogram Series"),(0,a.kt)("p",null,"A histogram series is a graphical representation of the value distribution."),(0,a.kt)("p",null,"Histogram creates intervals (columns) and counts how many values fall into each column."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Histogram example",src:r(9994).Z,title:"Histogram chart example"})),(0,a.kt)("h2",{id:"how-to-create-histogram-series"},"How to create histogram series"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const histogramSeries = chart.addHistogramSeries({\n    base: 0,\n});\n\n// set the data\nhistogramSeries.setData([\n    { time: '2018-12-20', value: 20.31, color: '#ff00ff' },\n    { time: '2018-12-21', value: 30.27, color: '#ff00ff' },\n    { time: '2018-12-22', value: 70.28, color: '#ff00ff' },\n    { time: '2018-12-23', value: 49.29, color: '#ff0000' },\n    { time: '2018-12-24', value: 40.64, color: '#ff0000' },\n    { time: '2018-12-25', value: 57.46, color: '#ff0000' },\n    { time: '2018-12-26', value: 50.55, color: '#0000ff' },\n    { time: '2018-12-27', value: 34.85, color: '#0000ff' },\n    { time: '2018-12-28', value: 56.68, color: '#0000ff' },\n    { time: '2018-12-29', value: 51.60, color: '#00ff00' },\n    { time: '2018-12-30', value: 75.33, color: '#00ff00' },\n    { time: '2018-12-31', value: 54.85, color: '#00ff00' },\n]);\n")),(0,a.kt)("h2",{id:"data-format"},"Data format"),(0,a.kt)("p",null,"Each item of the histogram series should be a ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/data/whitespace-data"},"whitespace")," item or an object with the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time")," (",(0,a.kt)("a",{parentName:"li",href:"/api/#time"},"Time"),") - item time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (",(0,a.kt)("inlineCode",{parentName:"li"},"number"),") - item value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"color")," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", optional) - optional color of an item")),(0,a.kt)("p",null,"Note: if ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," is not set then an item will be colored according to series options."),(0,a.kt)("h2",{id:"customization"},"Customization"),(0,a.kt)("p",null,"A histogram series interface can be customized using the following options: ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/HistogramStyleOptions"},"HistogramStyleOptions"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"set initial options for histogram series:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const histogramSeries = chart.addHistogramSeries({\n    color: '#FFF5EE',\n    base: 5,\n});\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"change options after series is created:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// for example, let's override default initial level:\nhistogramSeries.applyOptions({\n    base: -10,\n});\n")))))}u.isMDXComponent=!0},9994:function(e,t,r){t.Z=r.p+"assets/images/histogram-series-b3f7afad86ca0223ecc48152044b0b0f.png"}}]);