(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7276:function(e,t,n){"use strict";var r=n(2605),i=(n(7294),n(5893));t.Z=function(e){var t=e.article;return(0,i.jsxs)("div",{className:"article-metadata",children:[t.author?(0,i.jsxs)("div",{children:["\ud83d\udc64 ",t.author," \xb7"]}):"",t.createdAt?(0,i.jsxs)("div",{children:["\ud83d\udcc5 ",(0,r.Z)(new Date(t.createdAt),"MMMM dd, yyyy")," \xb7"]}):"",t.readingTimeInMinutes?(0,i.jsxs)("div",{children:[" \ud83d\udd52 ",t.readingTimeInMinutes," min read \xb7"]}):""]})}},5219:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"content",children:t})}},259:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2809),i=n(8093),c={},s=(n(7294),n(5893));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.content;return(0,s.jsx)("div",{className:"markdown",children:(0,s.jsx)(i.R,o(o({},t),{},{components:c}))})}},9207:function(e,t,n){"use strict";var r=n(425),i=n(7294),c=n(5893);t.Z=function(){var e=(0,r.F)(),t=e.theme,n=e.setTheme,s=(0,i.useState)(!1),a=s[0],o=s[1];return(0,i.useEffect)((function(){o(!0)}),[]),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:"theme-switcher",onClick:function(){return n("dark"===t?"light":"dark")},children:a&&"dark"===t?"\ud83c\udf19":"\u2600\ufe0f"})})}},8648:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return v}});var r=n(9008),i=n(5219),c=n(7294),s=n(1664),a=n(259),o=n(7276),u=n(5893),l=function(e){var t=e.article;return(0,u.jsxs)("div",{className:"flex-1",children:[(0,u.jsx)(s.default,{href:"/articles/".concat(t.id),children:(0,u.jsxs)("h2",{className:"link article-card-heading",children:[t.title,t.highlighted&&" \u2b50"]})}),(0,u.jsx)(o.Z,{article:t}),t.brief&&(0,u.jsx)(a.Z,{content:t.brief})]})},d=function(e){var t=e.searchChanged,n=e.count,r=e.autosearchTresholdCount,i=(0,c.useState)(null),s=i[0],a=i[1];return(0,u.jsxs)("div",{className:" flex items-center rounded-full",children:[(0,u.jsx)("input",{className:"rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none dark:bg-gray-700 bg-gray-300",id:"search",type:"text",placeholder:"Search by title, author and keywords ...",onChange:function(e){a(e.target.value),n<=r&&t(e.target.value)}}),(0,u.jsx)("div",{className:"p-4 pr-0",children:(0,u.jsx)("button",{className:"bg-blue-500 rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center",onClick:function(){return t(s)},children:"\ud83d\udd0d"})})]})},h=function(e){var t=e.articles,n=e.autosearchTresholdCount,r=(0,c.useState)(null),i=r[0],s=r[1],a=(0,c.useMemo)((function(){return i?t.filter(function(e){return function(t){var n=e.toLowerCase().trim().split(" ").filter((function(e){return/\S/.test(e)})),r=!1;return n.forEach((function(e){var n,i;r=t.title.toLowerCase().includes(e)||(null===(n=t.author)||void 0===n?void 0:n.toLowerCase().includes(e))||(null===(i=t.keywordText)||void 0===i?void 0:i.toLowerCase().includes(e))||r})),r}}(i)):t}),[i,t]);return(0,u.jsxs)("div",{className:"article-card-list",children:[(0,u.jsx)(d,{searchChanged:s,count:t.length,autosearchTresholdCount:n}),a.map((function(e){return(0,u.jsx)(l,{article:e},e.id)}))]})},f=n(9207),j=!0,v=function(e){var t=e.articles,n=e.settings;return(0,u.jsxs)("div",{children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("title",{children:n.title}),(0,u.jsx)("meta",{name:"description",content:n.metaDesctiption})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsxs)("header",{children:[(0,u.jsx)(f.Z,{}),(0,u.jsx)("h1",{children:n.title}),(0,u.jsx)(a.Z,{content:n.description})]}),(0,u.jsx)("main",{children:(0,u.jsx)(h,{autosearchTresholdCount:n.autosearchTresholdCount,articles:t})}),(0,u.jsx)("footer",{className:"footer",children:(0,u.jsx)(a.Z,{content:n.footer})})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8648)}])}},function(e){e.O(0,[517,605,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);