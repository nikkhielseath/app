"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1537],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/atoms/InsightBadge/insight-badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IsPrivate:()=>IsPrivate,IsPublic:()=>IsPublic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>insight_badge_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react.createElement;const InsightsBadge=_ref=>{let{isPublic}=_ref;return __jsx("div",{className:"inline-flex border h-8 border-light-slate-6 rounded-3xl bg-light-slate-3 px-2.5 py-1"},__jsx("span",{className:"text-light-slate-11 leading-normal"},isPublic?"Public":"Private"))};InsightsBadge.displayName="InsightsBadge";const insight_badge=InsightsBadge;try{insightbadge.displayName="insightbadge",insightbadge.__docgenInfo={description:"",displayName:"insightbadge",props:{isPublic:{defaultValue:null,description:"",name:"isPublic",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/InsightBadge/insight-badge.tsx#insightbadge"]={docgenInfo:insightbadge.__docgenInfo,name:"insightbadge",path:"components/atoms/InsightBadge/insight-badge.tsx#insightbadge"})}catch(__react_docgen_typescript_loader_error){}var _IsPublic$parameters,_IsPublic$parameters2,_IsPrivate$parameters,_IsPrivate$parameters2,insight_badge_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const insight_badge_stories={title:"Design System/Atoms/InsightsBadge"},BadgeTemplate=args=>insight_badge_stories_jsx(insight_badge,args);BadgeTemplate.displayName="BadgeTemplate";const IsPublic=BadgeTemplate.bind({});IsPublic.args={isPublic:!0};const IsPrivate=BadgeTemplate.bind({});IsPrivate.args={isPublic:!1},IsPublic.parameters=_objectSpread(_objectSpread({},IsPublic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IsPublic$parameters=IsPublic.parameters)||void 0===_IsPublic$parameters?void 0:_IsPublic$parameters.docs),{},{source:_objectSpread({originalSource:"args => <InsightsBadge {...args} />"},null===(_IsPublic$parameters2=IsPublic.parameters)||void 0===_IsPublic$parameters2||null===(_IsPublic$parameters2=_IsPublic$parameters2.docs)||void 0===_IsPublic$parameters2?void 0:_IsPublic$parameters2.source)})}),IsPrivate.parameters=_objectSpread(_objectSpread({},IsPrivate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IsPrivate$parameters=IsPrivate.parameters)||void 0===_IsPrivate$parameters?void 0:_IsPrivate$parameters.docs),{},{source:_objectSpread({originalSource:"args => <InsightsBadge {...args} />"},null===(_IsPrivate$parameters2=IsPrivate.parameters)||void 0===_IsPrivate$parameters2||null===(_IsPrivate$parameters2=_IsPrivate$parameters2.docs)||void 0===_IsPrivate$parameters2?void 0:_IsPrivate$parameters2.source)})});const __namedExportsOrder=["IsPublic","IsPrivate"]}}]);