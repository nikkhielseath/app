(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[4357],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@heroicons/react/24/solid/ArrowTrendingDownIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ForwardRef=React.forwardRef((function ArrowTrendingDownIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./node_modules/@heroicons/react/24/solid/ArrowTrendingUpIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ForwardRef=React.forwardRef((function ArrowTrendingUpIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./node_modules/@heroicons/react/24/solid/MinusSmallIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ForwardRef=React.forwardRef((function MinusSmallIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{fillRule:"evenodd",d:"M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}));module.exports=ForwardRef},"./components/Workspaces/RepositoryStatCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Engagement:()=>Engagement,EngagementLoading:()=>EngagementLoading,Error:()=>RepositoryStatCard_stories_Error,Issues:()=>Issues,IssuesLoading:()=>IssuesLoading,PullRequests:()=>PullRequests,PullRequestsLoading:()=>PullRequestsLoading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RepositoryStatCard_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fa6=__webpack_require__("./node_modules/react-icons/fa6/index.mjs"),bi=__webpack_require__("./node_modules/react-icons/bi/index.mjs"),ArrowTrendingUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ArrowTrendingUpIcon.js"),MinusSmallIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/MinusSmallIcon.js"),ArrowTrendingDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ArrowTrendingDownIcon.js"),index_esm=__webpack_require__("./node_modules/@primer/octicons-react/dist/index.esm.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),pill=__webpack_require__("./components/atoms/Pill/pill.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react.createElement;const titles={pulls:"Pull Requests",issues:"Issues",engagement:"Engagement",stars:"Stars",forks:"Forks"};function getIcon(type){switch(type){case"pulls":return __jsx(index_esm.UWO,{size:18,className:"text-slate-600 border-1 rounded-md p-2 h-8 w-8 shadow-xs"});case"issues":return __jsx(index_esm.hEv,{size:18,className:"text-slate-600 border-1 rounded-md p-2 h-8 w-8 shadow-xs"});case"engagement":return __jsx(index_esm.h_8,{size:18,className:"text-slate-600 border-1 rounded-md p-2 h-8 w-8 shadow-xs"});case"stars":return __jsx(fa6.QJe,{size:18,className:"text-slate-600 border-1 rounded-md p-2 h-8 w-8 shadow-xs"});case"forks":return __jsx(bi.Ev8,{size:18,className:"text-slate-600 border-1 rounded-md p-2 h-8 w-8 shadow-xs"})}}function getStatPropertiesByType(type){switch(type){case"pulls":return["opened","merged","velocity"];case"issues":return["opened","closed","velocity"];case"engagement":return["stars","forks","activity_ratio"];case"forks":case"stars":return["total","over_range","average_over_range"];default:throw new Error("Invalid repository stat card type")}}const getPillChart=(total,loading)=>void 0===total||loading?"-":__jsx(pill.Z,total>7?{icon:__jsx(ArrowTrendingUpIcon,{color:"green",className:"w-6 h-6 lg:w-4 lg:h-4"}),text:"High",color:"green"}:total>=4&&total<=7?{icon:__jsx(MinusSmallIcon,{color:"black",className:"w-6 h-6 lg:w-4 lg:h-4"}),text:"Medium",color:"yellow"}:{icon:__jsx(ArrowTrendingDownIcon,{color:"red",className:"w-6 h-6 lg:w-4 lg:h-4"}),text:"Low",color:"red"});getPillChart.displayName="getPillChart";const EmptyState=_ref=>{let{type,hasError}=_ref;return __jsx("table",{className:"grid gap-4 p-2"},__jsx("caption",{className:"flex items-center gap-1.5 text-xs"},getIcon(type),__jsx("span",{"aria-label":"Loading ".concat(titles[type]," stats card")},titles[type])),hasError?__jsx("tbody",null,__jsx("tr",null,__jsx("td",{className:"text-xs text-dark-red-8"},"An error occurred"))):__jsx("tbody",{className:"grid grid-cols-3 items center"},getStatPropertiesByType(type).map((stat=>__jsx("tr",{key:stat,className:"flex flex-col"},__jsx("th",{className:"capitalize font-normal text-sm text-light-slate-11 text-left"},stat),__jsx("td",{className:"font-medium text-2xl mt-1"},__jsx(skeleton_wrapper.Z,{width:40,height:20})))))))};EmptyState.displayName="EmptyState";const RepositoryStatCard=_ref2=>{let{stats,type,isLoading,hasError}=_ref2;const loadEmptyState=isLoading||hasError||!stats;return __jsx(card.Z,{className:"w-full"},loadEmptyState?__jsx(EmptyState,{type,hasError}):__jsx("table",{className:"grid gap-4 p-2"},__jsx("caption",{className:"flex items-center gap-1.5 lg:text-sm font-medium"},getIcon(type),__jsx("span",{className:"text-slate-700"},titles[type])),__jsx("tbody",{className:"grid grid-cols-3 items center"},Object.entries(stats).filter((_ref3=>{let[stat]=_ref3;return getStatPropertiesByType(type).includes(stat)})).map((_ref4=>{let[stat,value]=_ref4;return __jsx("tr",{key:stat,className:"flex flex-col"},__jsx("th",{scope:"row",className:"capitalize font-normal text-xs lg:text-sm text-light-slate-12 text-left"},"stars"===type||"forks"===type?"over_range"===stat?"Over ".concat(stats.range," Days"):"average_over_range"===stat?"Avg. per day":stat.replace("_"," "):stat.replace("_"," "),__jsx("span",{className:"w-2 h-2 rounded-full ml-1  ".concat("opened"===stat?"bg-light-grass-9 inline-block":"closed"===stat||"merged"===stat?"bg-purple-600 inline-block":""," ")}," ")),"activity_ratio"===stat?__jsx("td",{className:"text-black font-medium text-3xl lg:text-2xl"},getPillChart(Math.round(value),isLoading)):__jsx("td",{className:"font-medium text-3xl lg:text-2xl",title:"".concat(value)},"velocity"===stat?"".concat(Math.round(value),"d"):(0,humanizeNumber.Z)(value,"abbreviation")))})))))};RepositoryStatCard.displayName="RepositoryStatCard";try{RepositoryStatCard.displayName="RepositoryStatCard",RepositoryStatCard.__docgenInfo={description:"",displayName:"RepositoryStatCard",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"pulls"'},{value:'"issues"'},{value:'"engagement"'},{value:'"stars"'},{value:'"forks"'}]}},stats:{defaultValue:null,description:"",name:"stats",required:!0,type:{name:"{ opened: number; merged: number; velocity: number; } | { opened: number; closed: number; velocity: number; } | { stars: number; forks: number; activity_ratio: number; } | { total: number; range: number; over_range: number; average_over_range: number; } | { ...; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/RepositoryStatCard.tsx#RepositoryStatCard"]={docgenInfo:RepositoryStatCard.__docgenInfo,name:"RepositoryStatCard",path:"components/Workspaces/RepositoryStatCard.tsx#RepositoryStatCard"})}catch(__react_docgen_typescript_loader_error){}var _PullRequests$paramet,_PullRequests$paramet2,_Error$parameters,_Error$parameters2,_Issues$parameters,_Issues$parameters2,_Engagement$parameter,_Engagement$parameter2,_PullRequestsLoading$,_PullRequestsLoading$2,_IssuesLoading$parame,_IssuesLoading$parame2,_EngagementLoading$pa,_EngagementLoading$pa2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const RepositoryStatCard_stories={title:"Components/Workspaces/Repository Stat Card",component:RepositoryStatCard,args:{isLoading:!1,hasError:!1}},PullRequests={args:{type:"pulls",stats:{opened:10,merged:5,velocity:2}}},RepositoryStatCard_stories_Error={args:{type:"pulls",hasError:!0}},Issues={args:{type:"issues",stats:{opened:10,closed:5,velocity:.5}}},Engagement={args:{type:"engagement",stats:{stars:10,forks:5,activity_ratio:2}}},PullRequestsLoading={args:{type:"pulls",isLoading:!0}},IssuesLoading={args:{type:"issues",isLoading:!0}},EngagementLoading={args:{type:"engagement",isLoading:!0}};PullRequests.parameters=_objectSpread(_objectSpread({},PullRequests.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PullRequests$paramet=PullRequests.parameters)||void 0===_PullRequests$paramet?void 0:_PullRequests$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "pulls",\n    stats: {\n      opened: 10,\n      merged: 5,\n      velocity: 2\n    }\n  }\n}'},null===(_PullRequests$paramet2=PullRequests.parameters)||void 0===_PullRequests$paramet2||null===(_PullRequests$paramet2=_PullRequests$paramet2.docs)||void 0===_PullRequests$paramet2?void 0:_PullRequests$paramet2.source)})}),RepositoryStatCard_stories_Error.parameters=_objectSpread(_objectSpread({},RepositoryStatCard_stories_Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=RepositoryStatCard_stories_Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "pulls",\n    hasError: true\n  }\n}'},null===(_Error$parameters2=RepositoryStatCard_stories_Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})}),Issues.parameters=_objectSpread(_objectSpread({},Issues.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Issues$parameters=Issues.parameters)||void 0===_Issues$parameters?void 0:_Issues$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "issues",\n    stats: {\n      opened: 10,\n      closed: 5,\n      velocity: 0.5\n    }\n  }\n}'},null===(_Issues$parameters2=Issues.parameters)||void 0===_Issues$parameters2||null===(_Issues$parameters2=_Issues$parameters2.docs)||void 0===_Issues$parameters2?void 0:_Issues$parameters2.source)})}),Engagement.parameters=_objectSpread(_objectSpread({},Engagement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Engagement$parameter=Engagement.parameters)||void 0===_Engagement$parameter?void 0:_Engagement$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "engagement",\n    stats: {\n      stars: 10,\n      forks: 5,\n      activity_ratio: 2\n    }\n  }\n}'},null===(_Engagement$parameter2=Engagement.parameters)||void 0===_Engagement$parameter2||null===(_Engagement$parameter2=_Engagement$parameter2.docs)||void 0===_Engagement$parameter2?void 0:_Engagement$parameter2.source)})}),PullRequestsLoading.parameters=_objectSpread(_objectSpread({},PullRequestsLoading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PullRequestsLoading$=PullRequestsLoading.parameters)||void 0===_PullRequestsLoading$?void 0:_PullRequestsLoading$.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "pulls",\n    isLoading: true\n  }\n}'},null===(_PullRequestsLoading$2=PullRequestsLoading.parameters)||void 0===_PullRequestsLoading$2||null===(_PullRequestsLoading$2=_PullRequestsLoading$2.docs)||void 0===_PullRequestsLoading$2?void 0:_PullRequestsLoading$2.source)})}),IssuesLoading.parameters=_objectSpread(_objectSpread({},IssuesLoading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IssuesLoading$parame=IssuesLoading.parameters)||void 0===_IssuesLoading$parame?void 0:_IssuesLoading$parame.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "issues",\n    isLoading: true\n  }\n}'},null===(_IssuesLoading$parame2=IssuesLoading.parameters)||void 0===_IssuesLoading$parame2||null===(_IssuesLoading$parame2=_IssuesLoading$parame2.docs)||void 0===_IssuesLoading$parame2?void 0:_IssuesLoading$parame2.source)})}),EngagementLoading.parameters=_objectSpread(_objectSpread({},EngagementLoading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EngagementLoading$pa=EngagementLoading.parameters)||void 0===_EngagementLoading$pa?void 0:_EngagementLoading$pa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "engagement",\n    isLoading: true\n  }\n}'},null===(_EngagementLoading$pa2=EngagementLoading.parameters)||void 0===_EngagementLoading$pa2||null===(_EngagementLoading$pa2=_EngagementLoading$pa2.docs)||void 0===_EngagementLoading$pa2?void 0:_EngagementLoading$pa2.source)})});const __namedExportsOrder=["PullRequests","Error","Issues","Engagement","PullRequestsLoading","IssuesLoading","EngagementLoading"]},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Pill/pill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const Pill=_ref=>{let{className,text,color="slate",size="base",icon}=_ref;return __jsx("div",{className:"\n        ".concat("green"===color?"bg-light-grass-4 ":"yellow"===color?"bg-amber-200 ":"red"===color?"bg-light-red-4 ":"purple"===color?"bg-purple-200":"bg-light-slate-4 ","\n        ").concat("small"===size?"py-1 px-1.5  ":"py-1.5 px-2 ","\n        inline-flex items-center rounded-full gap-1 ").concat(className)},icon,__jsx("div",{className:"\n        ".concat("green"===color?"text-light-grass-11":"yellow"===color?"text-amber-700":"red"===color?"text-light-red-11":"purple"===color?"text-purple-600":"text-light-slate-11","\n            text-sm leading-none")},text))};Pill.displayName="Pill";const __WEBPACK_DEFAULT_EXPORT__=Pill;try{pill.displayName="pill",pill.__docgenInfo={description:"",displayName:"pill",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | number"}},color:{defaultValue:{value:"slate"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"slate"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'},{value:'"purple"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Pill/pill.tsx#pill"]={docgenInfo:pill.__docgenInfo,name:"pill",path:"components/atoms/Pill/pill.tsx#pill"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{key:index,className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{key:index,className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(num){let type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abbreviation";const number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}},"./node_modules/react-loading-skeleton/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor,highlightColor,width,height,borderRadius,circle,direction,duration,enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count=1,wrapper:Wrapper,className:customClassName,containerClassName,containerTestId,circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}}}]);