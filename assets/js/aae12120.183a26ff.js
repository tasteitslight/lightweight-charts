"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1663],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(o,".").concat(d)]||m[d]||h[d]||r;return a?i.createElement(f,s(s({ref:t},c),{},{components:a})):i.createElement(f,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6039:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),s=["components"],l={sidebar_position:1},o="Series types",p={unversionedId:"series-types",id:"version-3.8/series-types",title:"Series types",description:"In this article you can read a brief overview of all supported series types.",source:"@site/versioned_docs/version-3.8/series-types.md",sourceDirName:".",slug:"/series-types",permalink:"/lightweight-charts/docs/series-types",tags:[],version:"3.8",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/lightweight-charts/docs/"},next:{title:"Price scale",permalink:"/lightweight-charts/docs/price-scale"}},c={},h=[{value:"A series customizations",id:"a-series-customizations",level:2},{value:"Area",id:"area",level:2},{value:"Bar",id:"bar",level:2},{value:"Baseline",id:"baseline",level:2},{value:"Candlestick",id:"candlestick",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Line",id:"line",level:2}],m={toc:h};function d(e){var t=e.components,l=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"series-types"},"Series types"),(0,r.kt)("p",null,"In this article you can read a brief overview of all supported series types."),(0,r.kt)("h2",{id:"a-series-customizations"},"A series customizations"),(0,r.kt)("p",null,"Any type of series can be customized and the set of available options that you can apply depends on a type of a series (see docs for each series type below)."),(0,r.kt)("p",null,"If you'd like to change any option of a series, you could do this in different ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can specify the default options while creating a series:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// change default top & bottom colors of an area series in creating time\nconst series = chart.addAreaSeries({\n    topColor: 'red',\n    bottomColor: 'green',\n});\n")),(0,r.kt)("p",{parentName:"li"},"Note that every method to create a series has an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#applyoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ISeriesApi.applyOptions"))," method to apply other options on the fly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// updating candlestick series options on the fly\ncandlestickSeries.applyOptions({\n    upColor: 'red',\n    downColor: 'blue',\n});\n")))),(0,r.kt)("h2",{id:"area"},"Area"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addareaseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addAreaSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SingleValueData"},(0,r.kt)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"AreaStyleOptions")))),(0,r.kt)("p",null,"An area chart is basically a colored area between the line connecting all data points and ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/time-scale"},"the time scale"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Area chart example",src:a(1606).Z,title:"Area chart example",width:"1200",height:"600"})),(0,r.kt)("h2",{id:"bar"},"Bar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addbarseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addBarSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BarData"},(0,r.kt)("inlineCode",{parentName:"a"},"BarData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BarStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"BarStyleOptions")))),(0,r.kt)("p",null,"A bar chart shows price movements in the form of bars."),(0,r.kt)("p",null,"Vertical line length of a bar is limited by the highest and lowest price values.\nOpen & Close values are represented by tick marks, on the left & right hand side of the bar respectively:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Bar chart example",src:a(8715).Z,title:"Bar chart example",width:"1200",height:"600"})),(0,r.kt)("h2",{id:"baseline"},"Baseline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addbaselineseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addBaselineSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SingleValueData"},(0,r.kt)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"BaselineStyleOptions")))),(0,r.kt)("p",null,"A baseline is basically two colored areas (top and bottom) between the line connecting all data points and ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions#basevalue"},"the base value line"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Baseline chart example",src:a(1696).Z,width:"1200",height:"600"})),(0,r.kt)("h2",{id:"candlestick"},"Candlestick"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addcandlestickseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addCandlestickSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/CandlestickData"},(0,r.kt)("inlineCode",{parentName:"a"},"CandlestickData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/CandlestickStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CandlestickStyleOptions")))),(0,r.kt)("p",null,"A candlestick chart shows price movements in the form of candlesticks.\nOn the candlestick chart, open & close values form a solid body of a candle while wicks show high & low values for a candlestick's time interval:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Candlestick chart example",src:a(8092).Z,title:"Candlestick chart example",width:"1200",height:"600"})),(0,r.kt)("h2",{id:"histogram"},"Histogram"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addhistogramseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addHistogramSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/HistogramData"},(0,r.kt)("inlineCode",{parentName:"a"},"HistogramData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/HistogramStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HistogramStyleOptions")))),(0,r.kt)("p",null,"A histogram series is a graphical representation of the value distribution.\nHistogram creates intervals (columns) and counts how many values fall into each column:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Histogram example",src:a(7485).Z,title:"Histogram chart example",width:"1200",height:"600"})),(0,r.kt)("h2",{id:"line"},"Line"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method to create"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addlineseries"},(0,r.kt)("inlineCode",{parentName:"a"},"IChartApi.addLineSeries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data format"),": ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LineData"},(0,r.kt)("inlineCode",{parentName:"a"},"LineData"))," or ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,r.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,r.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,r.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"LineStyleOptions")))),(0,r.kt)("p",null,"A line chart is a type of chart that displays information as series of the data points connected by straight line segments:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Line chart example",src:a(2016).Z,title:"Line chart example",width:"1200",height:"600"})))}d.isMDXComponent=!0},1606:function(e,t,a){t.Z=a.p+"assets/images/area-series-00daf334c46510ea896de05a0dce5fdb.png"},8715:function(e,t,a){t.Z=a.p+"assets/images/bar-series-9b91e5d736cadd7075cd123d2c1e3e8c.png"},1696:function(e,t,a){t.Z=a.p+"assets/images/baseline-series-8f42d5c779bb5d732460f897f8b7dc04.png"},8092:function(e,t,a){t.Z=a.p+"assets/images/candlestick-series-6c954991dbf72e54f7c0392c01e85fc3.png"},7485:function(e,t,a){t.Z=a.p+"assets/images/histogram-series-322f3ba3b8920bdd65fc122f454cae1a.png"},2016:function(e,t,a){t.Z=a.p+"assets/images/line-series-876677c2a6cace01a5d901a5cf971cef.png"}}]);