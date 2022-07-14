"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5933:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a={unversionedId:"configuration/environments_file",id:"configuration/environments_file",isDocsHomePage:!1,title:"Environments file",description:"The environments file is a YAML file used to define to which environment(s) to deploy configurations.",source:"@site/docs/configuration/environments_file.md",sourceDirName:"configuration",slug:"/configuration/environments_file",permalink:"/dynatrace-monitoring-as-code/next/configuration/environments_file",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/configuration/environments_file.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deploy configuration",permalink:"/dynatrace-monitoring-as-code/next/configuration/deploy_configuration"},next:{title:"Configuration structure",permalink:"/dynatrace-monitoring-as-code/next/configuration/configuration_structure"}},l=[],c={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The environments file is a YAML file used to define to which environment(s) to deploy configurations.  "),(0,o.kt)("p",null,"In the file, you declare the environment url and the name of the environment variable to use for the API token."),(0,o.kt)("p",null,"Deployment can be done on a single environment or on several environments."),(0,o.kt)("p",null,"Here is an example of the structure of an environments file: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="environments.yaml"',title:'"environments.yaml"'},'foo:\n    - name: "foo"\n    - env-url: "https://foo.example.com"\n    - env-token-name: "FOO_TOKEN_ENV_VAR"\n\nbar:\n    - name: "bar"\n    - env-url: "https://bar.dynatrace-managed.com/e/environmentid"\n    - env-token-name: "BAR_TOKEN_ENV_VAR"\n')),(0,o.kt)("p",null,"Environments can also be grouped, but only one group is allowed per environment. Assign environments to groups with ",(0,o.kt)("inlineCode",{parentName:"p"},"group.environment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="environments.yaml"',title:'"environments.yaml"'},'production.foo:\n    - name: "foo"\n    - env-url: "https://foo.dynatrace.com"\n    - env-token-name: "FOO_TOKEN_ENV_VAR"\n\nproduction.bar:\n    - name: "bar"\n    - env-url: "https://bar.dynatrace-managed.com/e/id"\n    - env-token-name: "BAR_TOKEN_ENV_VAR"\n')))}s.isMDXComponent=!0}}]);