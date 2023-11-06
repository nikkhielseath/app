"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1149],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./components/organisms/Header/header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=__webpack_require__("./node_modules/react/index.js").createElement,Header=function Header(_ref){var children=_ref.children,classNames=_ref.classNames;return __jsx("section",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("flex flex-col pt-6 header md:flex-row md:px-16 bg-light-slate-3",classNames)},children)};Header.displayName="Header",Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}},__webpack_exports__.Z=Header;try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/Header/header.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"components/organisms/Header/header.tsx#header"})}catch(__react_docgen_typescript_loader_error){}},"./stories/organisms/header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderOrganism:function(){return HeaderOrganism}});var _HeaderOrganism$param,_HeaderOrganism$param2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_organisms_Header_header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Header/header.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Organisms/Header"};var HeaderOrganism=function HeaderOrganism(){return __jsx(_components_organisms_Header_header__WEBPACK_IMPORTED_MODULE_2__.Z,null,__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Hello"))};HeaderOrganism.displayName="HeaderOrganism",HeaderOrganism.parameters=_objectSpread(_objectSpread({},HeaderOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_HeaderOrganism$param=HeaderOrganism.parameters)||void 0===_HeaderOrganism$param?void 0:_HeaderOrganism$param.docs),{},{source:_objectSpread({originalSource:"() => <Header>\n    <>Hello</>\n  </Header>"},null===(_HeaderOrganism$param2=HeaderOrganism.parameters)||void 0===_HeaderOrganism$param2||null===(_HeaderOrganism$param2=_HeaderOrganism$param2.docs)||void 0===_HeaderOrganism$param2?void 0:_HeaderOrganism$param2.source)})}),HeaderOrganism.__docgenInfo={description:"",methods:[],displayName:"HeaderOrganism"}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}}),__webpack_exports__.Z=clsx}}]);