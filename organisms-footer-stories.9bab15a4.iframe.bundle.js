"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7125],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./stories/organisms/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FooterOrganism:()=>FooterOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FooterOrganism$param,_FooterOrganism$param2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_organisms_Footer_footer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Footer/footer.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Organisms/Footer"},FooterOrganism=()=>__jsx(_components_organisms_Footer_footer__WEBPACK_IMPORTED_MODULE_2__.Z,null);FooterOrganism.displayName="FooterOrganism",FooterOrganism.parameters=_objectSpread(_objectSpread({},FooterOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FooterOrganism$param=FooterOrganism.parameters)||void 0===_FooterOrganism$param?void 0:_FooterOrganism$param.docs),{},{source:_objectSpread({originalSource:"() => <Footer />"},null===(_FooterOrganism$param2=FooterOrganism.parameters)||void 0===_FooterOrganism$param2||null===(_FooterOrganism$param2=_FooterOrganism$param2.docs)||void 0===_FooterOrganism$param2?void 0:_FooterOrganism$param2.source)})});const __namedExportsOrder=["FooterOrganism"]},"./components/atoms/Typography/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","title","className","type","disabled","mark","code","keyboard","underline","strikethrough","strong","small"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Text=_ref=>{let{children,title,className,type="default",disabled,mark,code,keyboard,underline,strikethrough,strong,small}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TextTag=mark?"mark":code?"code":keyboard?"kbd":strong?"strong":small?"small":"span";return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,disabled&&"cursor-not-allowed select-none text-light-slate-11/50",keyboard&&"bg-light-slate-4/50 rounded px-2 border border-b-2 border-light-slate-8/50",underline&&"underline",strikethrough&&"line-through",(type=>"secondary"===type?"!text-light-slate-5":"success"===type?"!text-dark-grass-10":"warning"===type?"!text-yellow-500":"danger"===type?"!text-dark-red-10":"")(type))},props),__jsx(TextTag,{title},children))};Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=Text;try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"boolean"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!1,type:{name:"boolean"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/text.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"components/atoms/Typography/text.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/organisms/Footer/footer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/fa6/index.esm.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Typography/text.tsx"),img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./img/openSauced-icon.png"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const footerContext=[{privacy:{url:"https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e",text:"Privacy"},terms:{url:"https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef",text:"Terms"},status:{url:"http://status.opensauced.pizza/",text:"Status"}},{hot:{url:"https://hot.opensauced.pizza",text:"hot.opensauced.pizza"},openSauced:{url:"https://opensauced.pizza",text:"opensauced.pizza"}},{socials:[{url:"https://twitter.com/saucedopen",icon:__jsx(react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.LCd,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced on Twitter"},{url:"https://github.com/open-sauced",icon:__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.idJ,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced on GitHub"},{url:"https://www.instagram.com/opensauced/",icon:__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.t0C,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced on Instagram"},{url:"https://www.youtube.com/opensauced",icon:__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.b1v,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced on YouTube"},{url:"https://discord.com/invite/U2peSNf23P",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.j2d,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced Discord community"},{url:"https://dev.to/opensauced/",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.CUm,{className:"text-2xl hover:text-light-slate-10  text-light-slate-9"}),label:"OpenSauced on Dev.to"}]}],Footer=()=>{var _footerContext$1$hot,_footerContext$1$hot2,_footerContext$1$hot3,_footerContext$1$open,_footerContext$1$open2,_footerContext$1$open3,_footerContext$0$term,_footerContext$0$term2,_footerContext$0$term3,_footerContext$0$priv,_footerContext$0$priv2,_footerContext$0$priv3,_footerContext$0$stat,_footerContext$0$stat2,_footerContext$0$stat3,_footerContext$2$soci,_footerContext$0$term4,_footerContext$0$term5,_footerContext$0$term6,_footerContext$0$priv4,_footerContext$0$priv5,_footerContext$0$priv6,_footerContext$0$stat4,_footerContext$0$stat5,_footerContext$0$stat6;return __jsx("footer",{className:"h-24 w-full transition"},__jsx("div",{className:" container mx-auto px-2 md:px-16  lg:border-t lg:py-8 lg:items-center lg:justify-between lg:gap-x-4 flex flex-col gap-y-4 lg:flex-row py-2 w-full"},__jsx("div",{className:"text-center lg:text-left justify-center gap-1 flex items-center"},__jsx("div",{className:"w-6 h-6 relative !min-w-[24px] min-h-min"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{fill:!0,alt:"OpenSauced brand logo",src:img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__.Z})),__jsx("span",{className:"lg:hidden font-bold text-light-slate-12 "},"OpenSauced"),__jsx(components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"hidden !text-light-slate-9 lg:inline-block"},"© ",(new Date).getFullYear()," ",__jsx("span",{className:"hidden lg:inline-block"},"OpenSauced"))),__jsx("div",{className:"flex lg:mr-auto lg:text-sm text-light-slate-11 justify-center gap-x-4"},__jsx("a",{className:"px-2 hover:text-light-slate-12 ",target:"_blank",href:null===(_footerContext$1$hot=footerContext[1].hot)||void 0===_footerContext$1$hot?void 0:_footerContext$1$hot.url,rel:"noopener noreferrer","aria-label":"Visit ".concat(null===(_footerContext$1$hot2=footerContext[1].hot)||void 0===_footerContext$1$hot2?void 0:_footerContext$1$hot2.text," website")},null===(_footerContext$1$hot3=footerContext[1].hot)||void 0===_footerContext$1$hot3?void 0:_footerContext$1$hot3.text),__jsx("a",{className:"px-2 hover:text-light-slate-12",target:"_blank",href:null===(_footerContext$1$open=footerContext[1].openSauced)||void 0===_footerContext$1$open?void 0:_footerContext$1$open.url,rel:"noopener noreferrer","aria-label":"Visit ".concat(null===(_footerContext$1$open2=footerContext[1].openSauced)||void 0===_footerContext$1$open2?void 0:_footerContext$1$open2.text," website")},null===(_footerContext$1$open3=footerContext[1].openSauced)||void 0===_footerContext$1$open3?void 0:_footerContext$1$open3.text)),__jsx("div",{className:"flex justify-center gap-x-4 "},__jsx("div",{className:" hidden lg:flex items-center border-r pr-4   gap-x-4 text-light-slate-11 text-sm"},__jsx("a",{className:"px-2 hover:text-light-slate-12",href:null===(_footerContext$0$term=footerContext[0].terms)||void 0===_footerContext$0$term?void 0:_footerContext$0$term.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$term2=footerContext[0].terms)||void 0===_footerContext$0$term2?void 0:_footerContext$0$term2.text," page")},null===(_footerContext$0$term3=footerContext[0].terms)||void 0===_footerContext$0$term3?void 0:_footerContext$0$term3.text),__jsx("a",{className:"px-2 hover:text-light-slate-12",href:null===(_footerContext$0$priv=footerContext[0].privacy)||void 0===_footerContext$0$priv?void 0:_footerContext$0$priv.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$priv2=footerContext[0].privacy)||void 0===_footerContext$0$priv2?void 0:_footerContext$0$priv2.text," page")},null===(_footerContext$0$priv3=footerContext[0].privacy)||void 0===_footerContext$0$priv3?void 0:_footerContext$0$priv3.text),__jsx("a",{className:"px-2 hover:text-light-slate-12",href:null===(_footerContext$0$stat=footerContext[0].status)||void 0===_footerContext$0$stat?void 0:_footerContext$0$stat.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$stat2=footerContext[0].status)||void 0===_footerContext$0$stat2?void 0:_footerContext$0$stat2.text," page")},null===(_footerContext$0$stat3=footerContext[0].status)||void 0===_footerContext$0$stat3?void 0:_footerContext$0$stat3.text)),null===(_footerContext$2$soci=footerContext[2].socials)||void 0===_footerContext$2$soci?void 0:_footerContext$2$soci.map(((_ref,index)=>{let{url,icon,label}=_ref;return __jsx("a",{target:"_blank",href:url,key:index,rel:"noopener noreferrer","aria-label":label},icon)}))),__jsx("div",{className:"flex md:justify-center lg:hidden lg:border-none lg:order-2 border-t py-3 pb-4 mt-2 text-sm gap-x-2"},__jsx(components_atoms_Typography_text__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"text-light-slate-9"},"© ",(new Date).getFullYear()," ",__jsx("span",{className:"hidden md:inline-block"},"Open sauced")),__jsx("div",{className:"flex items-center gap-x-3 text-light-slate-11 text-sm"},__jsx("a",{className:"px-2",href:null===(_footerContext$0$term4=footerContext[0].terms)||void 0===_footerContext$0$term4?void 0:_footerContext$0$term4.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$term5=footerContext[0].terms)||void 0===_footerContext$0$term5?void 0:_footerContext$0$term5.text," page")},null===(_footerContext$0$term6=footerContext[0].terms)||void 0===_footerContext$0$term6?void 0:_footerContext$0$term6.text),__jsx("a",{className:"px-2",href:null===(_footerContext$0$priv4=footerContext[0].privacy)||void 0===_footerContext$0$priv4?void 0:_footerContext$0$priv4.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$priv5=footerContext[0].privacy)||void 0===_footerContext$0$priv5?void 0:_footerContext$0$priv5.text," page")},null===(_footerContext$0$priv6=footerContext[0].privacy)||void 0===_footerContext$0$priv6?void 0:_footerContext$0$priv6.text),__jsx("a",{className:"px-2",href:null===(_footerContext$0$stat4=footerContext[0].status)||void 0===_footerContext$0$stat4?void 0:_footerContext$0$stat4.url,target:"_blank",rel:"noreferrer","aria-label":"Visit the ".concat(null===(_footerContext$0$stat5=footerContext[0].status)||void 0===_footerContext$0$stat5?void 0:_footerContext$0$stat5.text," page")},null===(_footerContext$0$stat6=footerContext[0].status)||void 0===_footerContext$0$stat6?void 0:_footerContext$0$stat6.text)))))};Footer.displayName="Footer";const __WEBPACK_DEFAULT_EXPORT__=Footer},"./img/openSauced-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/openSauced-icon.e6bb10df.png",height:113,width:112,blurDataURL:"static/media/openSauced-icon.e6bb10df.png"}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);