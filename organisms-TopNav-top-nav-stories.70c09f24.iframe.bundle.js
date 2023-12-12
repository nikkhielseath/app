"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3938],{"./components/organisms/TopNav/top-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TopNavOrganism:()=>TopNavOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>top_nav_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_router=__webpack_require__("./node_modules/next/router.js"),auth_section=__webpack_require__("./components/molecules/AuthSection/auth-section.tsx"),header_logo=__webpack_require__("./components/molecules/HeaderLogo/header-logo.tsx"),useSession=__webpack_require__("./lib/hooks/useSession.ts"),useSupabaseAuth=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),onboarding_button=__webpack_require__("./components/molecules/OnboardingButton/onboarding-button.tsx"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),__jsx=react.createElement;const TopNav=()=>{const{user}=(0,useSupabaseAuth.Z)(),{onboarded}=(0,useSession.Z)();return __jsx("header",{className:"top-nav-container w-full fixed top-0 left-0 z-50 py-0.5 bg-light-slate-2 border-b"},__jsx("div",{className:"flex justify-between items-center mx-auto container px-2 md:px-16"},__jsx("div",{className:"flex gap-3 md:gap-8 items-center"},__jsx(header_logo.Z,{withBg:!1,textIsBlack:!0}),__jsx(Nav,{className:"hidden lg:flex"})),__jsx(auth_section.Z,null)),__jsx("div",{className:"lg:hidden container mx-auto px-2 md:px-16 flex justify-between items-center"},__jsx(Nav,{name:"Mobile",className:""}),user?!onboarded&&__jsx("div",{className:"relative"},__jsx(onboarding_button.Z,{aria:"onboarding",className:"!flex !pr-1 mb-1 mr-2"},__jsx(Typography_text.Z,{className:"text-sm !text-light-slate-12 hidden sm:block py-1 px-2"},"Complete the onboarding")),__jsx("div",{id:"onboarding",className:"flex flex-col absolute right-0 sm:hidden"},__jsx("span",{className:"border-x-transparent border-x-[7px] border-b-[7px] border-b-orange-500 h-0 w-0 self-end mr-[1.1rem]"}),__jsx(Typography_text.Z,{className:"text-sm py-1 px-2 w-max rounded shadow-lg bg-light-slate-2 !text-light-orange-9 outline-[1px] outline outline-orange-500"},"Complete the onboarding"))):null))};TopNav.displayName="TopNav";const Nav=_ref=>{let{className,name="Main"}=_ref;const{user}=(0,useSupabaseAuth.Z)(),{onboarded}=(0,useSession.Z)(),{data:gitHubUser}=(0,useFetchUser.j)(null==user?void 0:user.user_metadata.user_name),userInterest=(null==gitHubUser?void 0:gitHubUser.interests.split(",")[0])||"hacktoberfest",router=(0,next_router.useRouter)();return __jsx("nav",{className,"aria-label":name},__jsx("ul",{className:"flex gap-3 md:gap-8 mb-1 ml-2 sm:m-0 w-full sm:w-auto"},!!user&&onboarded&&__jsx("li",null,__jsx(link_default(),{className:"text-sm ".concat(getActiveStyle("/hub/insights"===router.asPath)),href:"/hub/insights"},"Insights")),__jsx("li",null,__jsx(link_default(),{className:"text-sm ".concat(getActiveStyle(router.asPath==="/".concat(userInterest,"/dashboard/filter/recent"))),href:"/".concat(userInterest,"/dashboard/filter/recent")},"Explore")),__jsx("li",null,__jsx(link_default(),{className:"text-sm ".concat(getActiveStyle("/feed"===router.pathname)),href:"/feed"},"Highlights"))))};function getActiveStyle(isActive){return isActive?"text-light-orange-10":"text-light-slate-10"}Nav.displayName="Nav";const top_nav=TopNav;try{topnav.displayName="topnav",topnav.__docgenInfo={description:"",displayName:"topnav",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/TopNav/top-nav.tsx#topnav"]={docgenInfo:topnav.__docgenInfo,name:"topnav",path:"components/organisms/TopNav/top-nav.tsx#topnav"})}catch(__react_docgen_typescript_loader_error){}var _TopNavOrganism$param,_TopNavOrganism$param2,top_nav_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const top_nav_stories={title:"Design System/Organisms/Top Nav"},TopNavOrganism=()=>top_nav_stories_jsx(top_nav,null);TopNavOrganism.displayName="TopNavOrganism",TopNavOrganism.parameters=_objectSpread(_objectSpread({},TopNavOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TopNavOrganism$param=TopNavOrganism.parameters)||void 0===_TopNavOrganism$param?void 0:_TopNavOrganism$param.docs),{},{source:_objectSpread({originalSource:"() => <TopNav />"},null===(_TopNavOrganism$param2=TopNavOrganism.parameters)||void 0===_TopNavOrganism$param2||null===(_TopNavOrganism$param2=_TopNavOrganism$param2.docs)||void 0===_TopNavOrganism$param2?void 0:_TopNavOrganism$param2.source)})});const __namedExportsOrder=["TopNavOrganism"]},"./components/molecules/HeaderLogo/header-logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),_img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./img/openSauced-icon.png"),_img_open_sourced_with_bg_icon_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./img/open-sourced-with-bg-icon.png"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const HeaderLogo=_ref=>{let{textIsBlack,withBg=!1}=_ref;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:"/"},__jsx("div",{className:"flex items-center py-2 gap-2 cursor-pointer"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"rounded",alt:"Open Sauced Logo",width:32,height:32,src:withBg?_img_open_sourced_with_bg_icon_png__WEBPACK_IMPORTED_MODULE_4__.Z:_img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__.Z}),__jsx("p",{className:"font-bold !text-base ".concat(textIsBlack?"!text-black":"!text-white")},"OpenSauced")))};HeaderLogo.displayName="HeaderLogo";const __WEBPACK_DEFAULT_EXPORT__=HeaderLogo;try{headerlogo.displayName="headerlogo",headerlogo.__docgenInfo={description:"",displayName:"headerlogo",props:{textIsBlack:{defaultValue:null,description:"",name:"textIsBlack",required:!1,type:{name:"boolean"}},withBg:{defaultValue:{value:"false"},description:"",name:"withBg",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HeaderLogo/header-logo.tsx#headerlogo"]={docgenInfo:headerlogo.__docgenInfo,name:"headerlogo",path:"components/molecules/HeaderLogo/header-logo.tsx#headerlogo"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/useFetchUser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useFetchUser});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils/public-api-fetcher.ts");const useFetchUser=(username,config)=>{const{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(username?"users/".concat(username):null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__.Z,config);return{data:data||void 0,isLoading:!error&&!data,isError:!!error,mutate}}},"./lib/utils/public-api-fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__=async apiUrl=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),sessionToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.access_token,res=await fetch("".concat("https://beta.api.opensauced.pizza/v1","/").concat(apiUrl),{headers:{accept:"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(!res.ok){const error=new Error("HttpError");throw error.message="".concat(res.status," ").concat(res.statusText),error.stack=JSON.stringify(await res.json()),console.error(error),error}return res.json()}},"./img/open-sourced-with-bg-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/open-sourced-with-bg-icon.9a89e34f.png",height:500,width:500,blurDataURL:"static/media/open-sourced-with-bg-icon.9a89e34f.png"}},"./img/openSauced-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/openSauced-icon.e6bb10df.png",height:113,width:112,blurDataURL:"static/media/openSauced-icon.e6bb10df.png"}}}]);