"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[872],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/molecules/InsightsPageListDropdown/insights-page-list-dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>insights_page_list_dropdown_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),dropdown=__webpack_require__("./components/atoms/Dropdown/dropdown.tsx"),insights_page_list_item=__webpack_require__("./components/atoms/InsightsPageListItem/insights-page-list-item.tsx"),__jsx=react.createElement;const InsightsPageListDropdown=()=>__jsx("div",{className:"flex justify-end"},__jsx(dropdown.h_,null,__jsx(dropdown.$F,{asChild:!0},__jsx(Button_button.Z,{className:"!py-1 px-2 text-sm",variant:"primary"},"Add a list")),__jsx(dropdown.AW,{align:"end",className:"flex flex-col gap-2"},__jsx(dropdown.Xi,{className:"rounded-md"},__jsx(insights_page_list_item.Z,{className:"h-5 ",pageName:"Insights teams",pageId:"neojpmodwe"})),__jsx(dropdown.Xi,{className:"rounded-md"},__jsx(insights_page_list_item.Z,{className:"h-5 ",pageName:"Internal Open Source Projects",pageId:"neojpmodwe"})),__jsx(dropdown.Xi,{className:"rounded-md"},__jsx(insights_page_list_item.Z,{className:"h-5 ",pageName:"Internal Open Source Projects",pageId:"neojpmodwe"})),__jsx("button",{className:"flex items-center bg-orange-100 p-1.5 hover:bg-orange-200 transition-all rounded-md justify-center gap-2 text-sauced-orange"},__jsx(index_esm.Kix,null)," Create List"))));InsightsPageListDropdown.displayName="InsightsPageListDropdown";const insights_page_list_dropdown=InsightsPageListDropdown;var _DefaultStory$paramet,_DefaultStory$paramet2,insights_page_list_dropdown_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const insights_page_list_dropdown_stories={title:"Design System/Molecules/InsightsPageListDropdown"},InsightsPageListDropdownTemplate=args=>insights_page_list_dropdown_stories_jsx(insights_page_list_dropdown,null);InsightsPageListDropdownTemplate.displayName="InsightsPageListDropdownTemplate";const DefaultStory=InsightsPageListDropdownTemplate.bind({});DefaultStory.parameters=_objectSpread(_objectSpread({},DefaultStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs),{},{source:_objectSpread({originalSource:"args => <InsightsPageListDropdown />"},null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source)})});const __namedExportsOrder=["DefaultStory"]},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","showLoadingText","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,showLoadingText=!0,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":"")},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("primary"===props.variant&&styles.primary,"default"===props.variant&&styles.default,"dark"===props.variant&&styles.dark,"outline"===props.variant&&styles.outline,"link"===props.variant&&styles.link,disabled&&"bg-light-orange-7 hover:bg-light-orange-7 border-none pointer-events-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>DropdownMenuTrigger,AW:()=>DropdownMenuContent,Xi:()=>DropdownMenuItem,h_:()=>DropdownMenu});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","sideOffset"],_excluded2=["className","inset"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DropdownMenu=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fC,DropdownMenuTrigger=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.xz,DropdownMenuContent=(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,sideOffset=4}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,null,__jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,sideOffset,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("z-50 min-w-max overflow-hidden rounded-lg border border-slate-100 bg-white p-1 text-slate-700 shadow-xs animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 ",className)},props)))})));DropdownMenuContent.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;const DropdownMenuItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,inset}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative flex cursor-default select-none items-center py-1.5 px-2 text-sm focus:text-sauced-orange outline-none focus:bg-orange-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",inset&&"pl-8",className)},props))}));DropdownMenuItem.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName;try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuContent.displayName="DropdownMenuContent",DropdownMenuContent.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"]={docgenInfo:DropdownMenuContent.__docgenInfo,name:"DropdownMenuContent",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuTrigger.displayName="DropdownMenuTrigger",DropdownMenuTrigger.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"]={docgenInfo:DropdownMenuTrigger.__docgenInfo,name:"DropdownMenuTrigger",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/InsightsPageListItem/insights-page-list-item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_tb__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/tb/index.esm.js");const _excluded=["pageName","className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const InsightsPageListItem=_ref=>{let{pageName,className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("flex items-center gap-3 p-1.5 transition-all text-sm rounded-md cursor-pointer hover:text-sauced-orange hover:bg-orange-100",className)}),__jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.RxU,{className:"text-2xl "}),__jsx("span",null,pageName))};InsightsPageListItem.displayName="InsightsPageListItem";const __WEBPACK_DEFAULT_EXPORT__=InsightsPageListItem;try{insightspagelistitem.displayName="insightspagelistitem",insightspagelistitem.__docgenInfo={description:"",displayName:"insightspagelistitem",props:{pageName:{defaultValue:null,description:"",name:"pageName",required:!0,type:{name:"string"}},pageId:{defaultValue:null,description:"",name:"pageId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/InsightsPageListItem/insights-page-list-item.tsx#insightspagelistitem"]={docgenInfo:insightspagelistitem.__docgenInfo,name:"insightspagelistitem",path:"components/atoms/InsightsPageListItem/insights-page-list-item.tsx#insightspagelistitem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);