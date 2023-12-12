"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7343],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/atoms/TextInput/text-input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IsInvalid:()=>IsInvalid,IsValid:()=>IsValid,WithDescriptionText:()=>WithDescriptionText,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_WithLabel$parameters,_WithLabel$parameters2,_WithDescriptionText$,_WithDescriptionText$2,_IsInvalid$parameters,_IsInvalid$parameters2,_IsValid$parameters,_IsValid$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_TextInput_text_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/TextInput/text-input.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Text Input",component:"TextInput"},TextInputTemplate=args=>__jsx(components_atoms_TextInput_text_input__WEBPACK_IMPORTED_MODULE_2__.Z,args);TextInputTemplate.displayName="TextInputTemplate";const Default=TextInputTemplate.bind({}),WithLabel=TextInputTemplate.bind({}),WithDescriptionText=TextInputTemplate.bind({}),IsInvalid=TextInputTemplate.bind({}),IsValid=TextInputTemplate.bind({});Default.args={placeholder:"Test",disabled:!1,autoFocus:!0,borderless:!1},WithLabel.args={placeholder:"Test",disabled:!1,autoFocus:!0,borderless:!1,label:"Input label"},WithDescriptionText.args={placeholder:"Test",disabled:!1,autoFocus:!0,borderless:!1,descriptionText:"app.opensauced.pizza/statelyai/slug"},IsInvalid.args={placeholder:"Test",disabled:!1,autoFocus:!0,borderless:!1,state:"invalid",errorMsg:"An error occured !!!"},IsValid.args={placeholder:"Test",disabled:!1,autoFocus:!0,borderless:!1,state:"valid"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextInput {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithLabel.parameters=_objectSpread(_objectSpread({},WithLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLabel$parameters=WithLabel.parameters)||void 0===_WithLabel$parameters?void 0:_WithLabel$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextInput {...args} />"},null===(_WithLabel$parameters2=WithLabel.parameters)||void 0===_WithLabel$parameters2||null===(_WithLabel$parameters2=_WithLabel$parameters2.docs)||void 0===_WithLabel$parameters2?void 0:_WithLabel$parameters2.source)})}),WithDescriptionText.parameters=_objectSpread(_objectSpread({},WithDescriptionText.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithDescriptionText$=WithDescriptionText.parameters)||void 0===_WithDescriptionText$?void 0:_WithDescriptionText$.docs),{},{source:_objectSpread({originalSource:"args => <TextInput {...args} />"},null===(_WithDescriptionText$2=WithDescriptionText.parameters)||void 0===_WithDescriptionText$2||null===(_WithDescriptionText$2=_WithDescriptionText$2.docs)||void 0===_WithDescriptionText$2?void 0:_WithDescriptionText$2.source)})}),IsInvalid.parameters=_objectSpread(_objectSpread({},IsInvalid.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IsInvalid$parameters=IsInvalid.parameters)||void 0===_IsInvalid$parameters?void 0:_IsInvalid$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextInput {...args} />"},null===(_IsInvalid$parameters2=IsInvalid.parameters)||void 0===_IsInvalid$parameters2||null===(_IsInvalid$parameters2=_IsInvalid$parameters2.docs)||void 0===_IsInvalid$parameters2?void 0:_IsInvalid$parameters2.source)})}),IsValid.parameters=_objectSpread(_objectSpread({},IsValid.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IsValid$parameters=IsValid.parameters)||void 0===_IsValid$parameters?void 0:_IsValid$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextInput {...args} />"},null===(_IsValid$parameters2=IsValid.parameters)||void 0===_IsValid$parameters2||null===(_IsValid$parameters2=_IsValid$parameters2.docs)||void 0===_IsValid$parameters2?void 0:_IsValid$parameters2.source)})});const __namedExportsOrder=["Default","WithLabel","WithDescriptionText","IsInvalid","IsValid"]},"./components/atoms/TextInput/text-input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@primer/octicons-react/dist/index.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["name","label","placeholder","state","id","value","descriptionText","className","fieldRef","disabled","borderless","handleChange","errorMsg"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,label,placeholder,state="default",id,value,descriptionText,className,fieldRef,disabled=!1,borderless=!1,handleChange,errorMsg=""}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("label",{className:"flex flex-col w-full"},label&&__jsx("p",{className:"mb-2 text-sm text-light-slate-9"},label),__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("flex-1 px-2 text-light-slate-12 bg-white shadow-input border transition rounded-lg py-1 flex items-center",borderless&&"!border-none","invalid"===state?"focus-within:border-light-red-10":"focus-within:border-light-orange-9 ",disabled&&"bg-light-slate-3 text-light-slate-6",className)},__jsx("input",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:fieldRef||inputRef,type:"text",name,id:id||name||"",placeholder:placeholder||"",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("w-full focus:outline-none placeholder:font-normal placeholder-slate-400",disabled&&"bg-light-slate-3 cursor-not-allowed text-light-slate-9","bg-inherit"),disabled,value,onChange:event=>{null==handleChange||handleChange(event.target.value)}},props)),!disabled&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"valid"===state?__jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__.kD1,{className:"ml-1 text-light-orange-9",size:12}):value?__jsx("span",{title:"Clear input",className:"flex items-center ml-1",onClick:()=>{null==handleChange||handleChange(""),fieldRef&&(fieldRef.current.value="")}},__jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_4__.S7k,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("invalid"===state&&errorMsg?"text-light-red-11":"text-light-slate-8","cursor-pointer"),size:12})):""))),descriptionText?__jsx("p",{className:"mt-2 text-sm text-light-slate-9"},descriptionText):"","invalid"===state&&errorMsg?__jsx("p",{className:"mt-3 text-sm text-light-red-11 "},errorMsg):"")};try{textinput.displayName="textinput",textinput.__docgenInfo={description:"",displayName:"textinput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"valid"'},{value:'"invalid"'}]}},borderless:{defaultValue:{value:"false"},description:"",name:"borderless",required:!1,type:{name:"boolean"}},descriptionText:{defaultValue:null,description:"",name:"descriptionText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:{value:""},description:"",name:"errorMsg",required:!1,type:{name:"string"}},fieldRef:{defaultValue:null,description:"",name:"fieldRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/TextInput/text-input.tsx#textinput"]={docgenInfo:textinput.__docgenInfo,name:"textinput",path:"components/atoms/TextInput/text-input.tsx#textinput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);