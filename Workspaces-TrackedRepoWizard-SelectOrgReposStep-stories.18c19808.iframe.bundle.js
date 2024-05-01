"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[5652],{"./components/Workspaces/TrackedRepoWizard/SelectOrgReposStep.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyState:()=>EmptyState,Error:()=>SelectOrgReposStep_stories_Error,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectOrgReposStep_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),SearchReposTable=__webpack_require__("./components/Workspaces/SearchReposTable.tsx"),__jsx=react.createElement;const SelectOrgReposStep=_ref2=>{let{organization,repositories,onToggleRepo,onToggleAllRepos,isLoading,hasError}=_ref2;const{0:filteredRepositories,1:setFilteredRepositories}=(0,react.useState)(repositories);(0,react.useEffect)((()=>{const lowercasedOrg=organization.toLowerCase();setFilteredRepositories(new Map([...repositories.entries()].filter((_ref3=>{let[repo]=_ref3;return repo.toLowerCase().startsWith(lowercasedOrg)}))))}),[repositories,organization]);const message=function getMesssage(_ref){let{repositories,isLoading,hasError}=_ref;switch(!0){case isLoading:return"Loading repositories...";case hasError:return"Error loading repositories";case 0===repositories.size:return"No repositories found for this organization";case repositories.size>0:return"No repositories found using this search term";default:throw new Error("Invalid state. Unable to generate message for the <SelectOrgReposStep /> component.",{cause:{repositories,isLoading,hasError}})}}({repositories,isLoading,hasError});return __jsx("div",{className:"flex flex-col gap-4 h-96 max-h-96"},__jsx("div",{className:"flex items-center gap-2 font-semibold"},__jsx(avatar_hover_card.q,{contributor:organization,size:"xsmall"}),__jsx("span",null,organization)),__jsx("p",null,"Select the organization repositories that you want to track."),__jsx(SearchReposTable.H,{type:"by-org",repositories:filteredRepositories,onFilter:search=>{const updates=new Map;for(const[repo,selected]of repositories)repo.startsWith(organization)&&repo.includes(search)&&updates.set(repo,selected);setFilteredRepositories(updates)},onToggleRepo,onToggleAllRepos,message}))};SelectOrgReposStep.displayName="SelectOrgReposStep";try{SelectOrgReposStep.displayName="SelectOrgReposStep",SelectOrgReposStep.__docgenInfo={description:"",displayName:"SelectOrgReposStep",props:{organization:{defaultValue:null,description:"",name:"organization",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"Map<string, boolean>"}},onToggleRepo:{defaultValue:null,description:"",name:"onToggleRepo",required:!0,type:{name:"(repo: string, isSelected: boolean) => void"}},onToggleAllRepos:{defaultValue:null,description:"",name:"onToggleAllRepos",required:!0,type:{name:"(checked: boolean) => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedRepoWizard/SelectOrgReposStep.tsx#SelectOrgReposStep"]={docgenInfo:SelectOrgReposStep.__docgenInfo,name:"SelectOrgReposStep",path:"components/Workspaces/TrackedRepoWizard/SelectOrgReposStep.tsx#SelectOrgReposStep"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,_Error$parameters,_Error$parameters2,_EmptyState$parameter,_EmptyState$parameter2,console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SelectOrgReposStep_stories={title:"Components/Workspaces/TrackedRepoWizard/Select Org Repos Step",component:SelectOrgReposStep,args:{isLoading:!1,hasError:!1,organization:"open-sauced",repositories:new Map(new Array(100).fill("").map(((_,i)=>["open-sauced/awesome-pizza-project-".concat(i),!0]))),onToggleRepo:(repo,isSelected)=>{console.log(repo,isSelected)},onToggleAllRepos:checked=>{console.log(checked)}}},Default={},Loading={args:{isLoading:!0,repositories:new Map}},SelectOrgReposStep_stories_Error={args:{hasError:!0,repositories:new Map}},EmptyState={args:{repositories:new Map}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isLoading: true,\n    repositories: new Map()\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})}),SelectOrgReposStep_stories_Error.parameters=_objectSpread(_objectSpread({},SelectOrgReposStep_stories_Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=SelectOrgReposStep_stories_Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    hasError: true,\n    repositories: new Map()\n  }\n}"},null===(_Error$parameters2=SelectOrgReposStep_stories_Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})}),EmptyState.parameters=_objectSpread(_objectSpread({},EmptyState.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EmptyState$parameter=EmptyState.parameters)||void 0===_EmptyState$parameter?void 0:_EmptyState$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    repositories: new Map()\n  }\n}"},null===(_EmptyState$parameter2=EmptyState.parameters)||void 0===_EmptyState$parameter2||null===(_EmptyState$parameter2=_EmptyState$parameter2.docs)||void 0===_EmptyState$parameter2?void 0:_EmptyState$parameter2.source)})});const __namedExportsOrder=["Default","Loading","Error","EmptyState"]}}]);