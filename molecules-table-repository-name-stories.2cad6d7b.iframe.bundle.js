"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3600],{"./stories/molecules/table-repository-name.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_molecules_TableRepositoryName_table_repository_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/TableRepositoryName/table-repository-name.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Table Repository Name",component:"TableRepositoryName"},TableRepositoryNameTemplate=args=>__jsx(components_molecules_TableRepositoryName_table_repository_name__WEBPACK_IMPORTED_MODULE_2__.Z,args);TableRepositoryNameTemplate.displayName="TableRepositoryNameTemplate";const Default=TableRepositoryNameTemplate.bind({});Default.args={fullName:"open-sauced/insights"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TableRepositoryName {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>TipProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Tooltip=_ref=>{let{children,content,className,direction}=_ref;const{Portal,Root,Content,Trigger,Arrow}=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__;return __jsx(Root,{delayDuration:300},__jsx(Trigger,{asChild:!0},__jsx("div",null,children)),__jsx(Portal,null,__jsx(Content,{sideOffset:4,collisionPadding:10,side:direction||"bottom",avoidCollisions:!0,style:{zIndex:9999}},__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-xs py-1 px-2 rounded shadow-lg  bg-dark-slate-2 text-dark-slate-12",className)},content),__jsx(Arrow,{className:"fill-dark "}))))};Tooltip.displayName="Tooltip";const TipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,__WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TipProvider.displayName="TipProvider",TipProvider.__docgenInfo={description:"",displayName:"TipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#TipProvider"]={docgenInfo:TipProvider.__docgenInfo,name:"TipProvider",path:"components/atoms/Tooltip/tooltip.tsx#TipProvider"})}catch(__react_docgen_typescript_loader_error){}try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tipClassName:{defaultValue:null,description:"",name:"tipClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"components/atoms/Tooltip/tooltip.tsx#tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/TableRepositoryName/table-repository-name.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TableRepositoryName=_ref=>{let{avatarURL,fullName}=_ref;const[handle,name]=null==fullName?void 0:fullName.split("/");return __jsx("div",{className:"flex items-center gap-2.5"},__jsx("a",{href:"https://www.github.com/".concat(handle,"/").concat(name),target:"_blank",rel:"noreferrer"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{isCached:!1,className:"shrink-0 min-w-10 min-h-10",size:40,avatarURL,isCircle:!1})),__jsx("div",{className:"flex flex-col justify-center"},__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{content:name},__jsx("div",{className:"  text-base text-light-slate-12 tracking-tight max-w-[5.5rem] sm:max-w-[9.3rem] md:max-w-[7rem] whitespace-nowrap overflow-hidden overflow-ellipsis"},__jsx("a",{href:"https://www.github.com/".concat(handle,"/").concat(name),target:"_blank",rel:"noreferrer"},name))),__jsx("div",{className:"  text-sm text-light-slate-11 truncate max-w-[85px] md:max-w-[110px]"},__jsx("a",{href:"https://www.github.com/".concat(handle),target:"_blank",rel:"noreferrer"},handle?"@".concat(handle):"handle1234"))))};TableRepositoryName.displayName="TableRepositoryName";const __WEBPACK_DEFAULT_EXPORT__=TableRepositoryName;try{tablerepositoryname.displayName="tablerepositoryname",tablerepositoryname.__docgenInfo={description:"",displayName:"tablerepositoryname",props:{avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},fullName:{defaultValue:null,description:"",name:"fullName",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"string | string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/TableRepositoryName/table-repository-name.tsx#tablerepositoryname"]={docgenInfo:tablerepositoryname.__docgenInfo,name:"tablerepositoryname",path:"components/molecules/TableRepositoryName/table-repository-name.tsx#tablerepositoryname"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);