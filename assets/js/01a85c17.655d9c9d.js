"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[13],{39058:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(80102),r=a(67294),l=a(34334),i=a(87190),c=a(87524),s=a(39960),m=a(95999),o="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",f="sidebarItem__DBe",g="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP";function E(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:f},r.createElement(s.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title))})))))}var p=a(13102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return r.createElement(p.Zo,{component:v,props:e})}function k(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(h,{sidebar:t}):r.createElement(E,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,N),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(k,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},20472:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(67294),r=a(34334),l=a(35155),i=a(1944),c=a(35281),s=a(39058),m=a(13008),o="tag_Nnez";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(m.Z,e))}))),n.createElement("hr",null))}function d(e){var t=e.tags,a=(0,l.P)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))}var f=a(90197);function g(e){var t=e.tags,a=e.sidebar,m=(0,l.M)();return n.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(i.d,{title:m}),n.createElement(f.Z,{tag:"blog_tags_list"}),n.createElement(s.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(d,{tags:t})))}},13008:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(34334),l=a(39960),i="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.default,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}},35155:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return l}});var n=a(95999),r=function(){return(0,n.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);