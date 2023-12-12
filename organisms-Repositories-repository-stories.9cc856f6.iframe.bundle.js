(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[9561],{"./components/organisms/Repositories/repository.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReportsOrganism:()=>ReportsOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ReportsOrganism$para,_ReportsOrganism$para2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_organisms_Repositories_repositories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Repositories/repositories.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/organisms/Repositories"},ReportsOrganism=()=>__jsx(components_organisms_Repositories_repositories__WEBPACK_IMPORTED_MODULE_2__.Z,null);ReportsOrganism.displayName="ReportsOrganism",ReportsOrganism.parameters=_objectSpread(_objectSpread({},ReportsOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ReportsOrganism$para=ReportsOrganism.parameters)||void 0===_ReportsOrganism$para?void 0:_ReportsOrganism$para.docs),{},{source:_objectSpread({originalSource:"(): JSX.Element => <Repositories />"},null===(_ReportsOrganism$para2=ReportsOrganism.parameters)||void 0===_ReportsOrganism$para2||null===(_ReportsOrganism$para2=_ReportsOrganism$para2.docs)||void 0===_ReportsOrganism$para2?void 0:_ReportsOrganism$para2.source)})});const __namedExportsOrder=["ReportsOrganism"]},"./components/organisms/Repositories/repositories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Repositories_repositories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),table_title=__webpack_require__("./components/atoms/TableTitle/table-title.tsx"),pagination=__webpack_require__("./components/molecules/Pagination/pagination.tsx"),pagination_result=__webpack_require__("./components/molecules/PaginationResults/pagination-result.tsx"),table_header=__webpack_require__("./components/molecules/TableHeader/table-header.tsx"),useRepositories=__webpack_require__("./lib/hooks/api/useRepositories.ts"),useSupabaseAuth=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),query_params=__webpack_require__("./lib/utils/query-params.ts"),Checkbox_checkbox=__webpack_require__("./components/atoms/Checkbox/checkbox.tsx"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),limit_select=__webpack_require__("./components/atoms/Select/limit-select.tsx"),useMediaQuery=__webpack_require__("./lib/hooks/useMediaQuery.ts"),repositories_table=__webpack_require__("./components/organisms/RepositoriesTable/repositories-table.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),__jsx=react.createElement;const RepoNotIndexed=()=>__jsx(Typography_text.Z,null,"The repository is not currently being indexed by OpenSauced. ",__jsx("br",null),__jsx(link_default(),{href:"https://github.com/open-sauced/feedback/discussions/2",target:"_blank"},__jsx("span",{className:"text-orange-600 cursor-pointer"},"Visit our feedback discussion"))," ","to request this repository be added.");RepoNotIndexed.displayName="RepoNotIndexed";const repository_not_indexed=RepoNotIndexed;var repositories_jsx=react.createElement;const Repositories=_ref=>{let{repositories}=_ref;const{user,signIn}=(0,useSupabaseAuth.Z)(),router=(0,next_router.useRouter)(),{pageId,toolName,selectedFilter,userOrg,range,limit}=router.query,username=userOrg?null==user?void 0:user.user_metadata.user_name:void 0,topic=pageId,isMobile=(0,useMediaQuery.a)("(max-width: 768px)"),{data:repoListData,meta:repoMeta,isError:repoListIsError,isLoading:repoListIsLoading,setPage}=(0,useRepositories.Z)(repositories,Number(null!=range?range:30),Number(null!=limit?limit:10)),filteredRepoNotIndexed=selectedFilter&&!repoListIsLoading&&!repoListIsError&&0===repoListData.length,{0:selectedRepos,1:setSelectedRepos}=(0,react.useState)([]);return(0,react.useEffect)((()=>{setPage(1)}),[selectedFilter,setPage]),repositories_jsx("div",{className:"flex flex-col w-full gap-4"},repositories_jsx(table_header.Z,{onSearch:e=>{return(search=e)&&/^[a-zA-Z0-9\-\.]+\/[a-zA-Z0-9\-\.]+$/.test(search)?router.push("/".concat(topic,"/").concat(toolName,"/filter/").concat(search)):router.push("/".concat(topic,"/").concat(toolName));var search},metaInfo:repoMeta,entity:"repos",title:"Repositories"}),repositories_jsx("div",{className:"flex flex-col w-full overflow-x-auto border rounded-lg"},repositories_jsx("div",null,repositories_jsx("div",{className:"flex justify-between gap-2 px-6 py-4 md:hidden bg-light-slate-3"},repositories_jsx("div",{className:"flex-1"},repositories_jsx(table_title.Z,null," Repository ")),repositories_jsx("div",{className:"flex-1"},repositories_jsx(table_title.Z,null," Pr Overview "))),repositories_jsx("div",{className:"hidden gap-2 px-6 py-4 md:flex bg-light-slate-3"},repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.checkbox)},repositories_jsx(Checkbox_checkbox.Z,{onCheckedChange:state=>{setSelectedRepos(state?repoListData:[])},className:"".concat(user&&"border-orange-500 hover:bg-orange-600")})),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.repository)},repositories_jsx(table_title.Z,null," Repository ")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.activity)},repositories_jsx(table_title.Z,null,"Activity")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.prOverview)},repositories_jsx(table_title.Z,null,"PR Overview")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.prVelocity)},repositories_jsx(table_title.Z,null,"PR Velocity")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.spam)},repositories_jsx(table_title.Z,null,"SPAM")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.contributors,"hidden xl:flex")},repositories_jsx(table_title.Z,null,"Contributors")),repositories_jsx("div",{className:(0,clsx_m.Z)(repositories_table.A.cols.last30days,"hidden xl:flex")},repositories_jsx(table_title.Z,null,"Last 30 Days"))),selectedRepos.length>0&&repositories_jsx("div",{className:"flex justify-between p-3 px-6 items-center border-b-2 text-light-slate-11"},repositories_jsx("div",null,selectedRepos.length," Repositories selected"),repositories_jsx(Button_button.Z,{onClick:()=>{if(user)router.push({pathname:"/hub/insights/new",query:{selectedRepos:JSON.stringify(selectedRepos)}},"/hub/insights/new");else{const reposIds=selectedRepos.map((repo=>repo.id));signIn({provider:"github",options:{redirectTo:"".concat(window.location.origin,"/hub/insights/new?selectedReposIDs=").concat(JSON.stringify(reposIds),"&login=true&")}})}},variant:"primary"},"Add to Insight Page")),repositories_jsx(repositories_table.Z,{topic,error:repoListIsError,loading:repoListIsLoading,listOfRepositories:repoListData,user:username,repo:selectedFilter,selectedRepos,handleOnSelectRepo:repo=>{const matchingRepo=repoListData.find((iteratedRepo=>iteratedRepo.id===repo.id));matchingRepo&&(selectedRepos.find((r=>r.id===matchingRepo.id))?setSelectedRepos(selectedRepos.filter((r=>r.id!==repo.id))):setSelectedRepos([...selectedRepos,matchingRepo]))}}),repositories_jsx("div",{className:"flex flex-col w-full px-4 mt-5 gap-y-3 md:flex-row"},repositories_jsx(limit_select.Z,{placeholder:"10 per page",options:[{name:"10 per page",value:"10"},{name:"20 per page",value:"20"},{name:"30 per page",value:"30"},{name:"40 per page",value:"40"},{name:"50 per page",value:"50"}],className:"!w-36 ml-auto md:hidden overflow-x-hidden",onChange:function(limit){(0,query_params.B)({limit})}}),repositories_jsx("div",{className:"flex items-center justify-between w-full py-1 md:py-4 md:mt-5"},repositories_jsx("div",null,repositories_jsx("div",{className:""},repositories_jsx(pagination_result.Z,{metaInfo:repoMeta,total:repoMeta.itemCount,entity:"repos"}))),repositories_jsx("div",null,repositories_jsx("div",{className:"flex items-center gap-4"},repositories_jsx(pagination.Z,{pages:isMobile?[]:new Array(repoMeta.pageCount).fill(0).map(((_,index)=>index+1)),pageSize:5,hasNextPage:repoMeta.hasNextPage,hasPreviousPage:repoMeta.hasPreviousPage,totalPage:repoMeta.pageCount,page:repoMeta.page,onPageChange:function(page){setPage(page)},divisor:!0,goToPage:!0}))))))),filteredRepoNotIndexed&&repositories_jsx(repository_not_indexed,null))};Repositories.displayName="Repositories";const Repositories_repositories=Repositories;try{repositories.displayName="repositories",repositories.__docgenInfo={description:"",displayName:"repositories",props:{repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/Repositories/repositories.tsx#repositories"]={docgenInfo:repositories.__docgenInfo,name:"repositories",path:"components/organisms/Repositories/repositories.tsx#repositories"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useRepositories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),swr__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/get-filter-query.ts");const __WEBPACK_DEFAULT_EXPORT__=function(){var _data$data,_data$meta;let repoIds=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],range=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,limit=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),{0:page,1:setPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),{pageId,selectedFilter}=router.query,topic=pageId,filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__.Z)(selectedFilter),query=new URLSearchParams(filterQuery);topic&&Number.isNaN(Number(topic))&&query.set("topic",topic),page&&query.set("page","".concat(page)),limit&&query.set("limit","".concat(limit)),range&&query.set("range","".concat(range)),(null==repoIds?void 0:repoIds.length)>0&&(query.delete("topic"),query.set("repoIds",repoIds.join(","))),query.get("repo")&&query.delete("topic");const endpointString="".concat("repos/search","?").concat(query),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_1__.ZP)(endpointString,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__.Z);return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error,mutate,page,setPage}}},"./lib/hooks/useMediaQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useMediaQuery(query){const getMatches=mediaQuery=>"undefined"!=typeof window&&window.matchMedia(mediaQuery).matches,{0:matches,1:setMatches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getMatches(query));function handleChange(){setMatches(getMatches(query))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const matchMedia=window.matchMedia(query);matchMedia.addEventListener;return handleChange(),matchMedia.addEventListener("change",handleChange),()=>{matchMedia.removeEventListener("change",handleChange)}}),[query]),matches}},"./node_modules/lodash.debounce/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/rooks/dist/esm/hooks/useDebounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useDebounce});var lodash_debounce=__webpack_require__("./node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const useIsomorphicEffect="undefined"==typeof window?react.useEffect:react.useLayoutEffect;function useDebounce(callback,wait,options){const createDebouncedCallback=(0,react.useCallback)((function_=>lodash_debounce_default()(function_,wait,options)),[wait,options]),freshCallback=function useFreshRef(value,preferLayoutEffect=!1){const useEffectToUse=preferLayoutEffect?useIsomorphicEffect:react.useEffect,ref=(0,react.useRef)(value);return useEffectToUse((()=>{ref.current=value})),ref}(callback);const debouncedCallbackRef=(0,react.useRef)(createDebouncedCallback((function tick(...args){var _a;null===(_a=freshCallback.current)||void 0===_a||_a.call(freshCallback,...args)})));return function useWillUnmount(callback){(0,react.useEffect)((()=>callback),[])}((()=>{var _a;return null===(_a=debouncedCallbackRef.current)||void 0===_a?void 0:_a.cancel()})),debouncedCallbackRef.current}}}]);