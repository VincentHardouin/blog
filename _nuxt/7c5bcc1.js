(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{558:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(88),n(61);function r(e){return e.startsWith("/")?"".concat(t.env.BASE_URL).concat(e):e}}).call(this,n(209))},560:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return y}));var r=n(17),c=n(4),o=(n(36),n(143),n(31),n(41),n(558));function l(t){var e={siteName:"Vincent Hardouin",metaTitle:t.title,metaDescription:t.description,imageUrl:t.seoImageUrl};return{titleTemplate:"%s | ".concat(e.siteName),title:e.metaTitle,meta:d(e)}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.metaTitle,n=void 0===e?"Le blog de Vincent Hardouin":e,r=t.metaDescription,c=void 0===r?"Blog de tutorials, humeurs, … sur des sujets tech.":r,l=t.imageUrl,d=void 0===l?"/image/og-card-default.png":l,f=t.article,article=void 0!==f&&f,m=[];return n&&m.push({hid:"og:title",property:"og:title",content:n},{hid:"twitter:title",name:"twitter:title",content:n}),c&&m.push({hid:"description",name:"description",content:c},{hid:"og:description",property:"og:description",content:c},{hid:"twitter:description",name:"twitter:description",content:c}),d&&m.push({hid:"image",name:"image",content:Object(o.a)(d)},{hid:"og:image",property:"og:image",content:Object(o.a)(d)},{hid:"og:image:alt",property:"og:image:alt",content:n},{hid:"twitter:image",name:"twitter:image",content:Object(o.a)(d)}),article&&m.push({hid:"og:type",property:"og:type",content:"article"}),m.push({hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}),m.push({hid:"twitter:site",name:"twitter:site",content:"@vincenthardouin"}),m}function f(t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,d,article,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$strapi,c=e.params,t.next=3,n.$articles.find({slug:c.slug});case 3:return o=t.sent,d=Object(r.a)(o,1),article=d[0],meta=l(article),t.abrupt("return",{article:article,meta:meta});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$strapi,t.next=3,n.graphql({query:"query Articles {\n          articles {\n            slug\n            title\n            date\n          }\n        }"});case 3:return r=t.sent,c=r.articles,t.abrupt("return",{articles:c});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,d,f,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$strapi,c=e.params,t.next=3,n.$pages.find({slug:c.slug});case 3:return o=t.sent,d=Object(r.a)(o,1),f=d[0],meta=l(f),t.abrupt("return",{page:f,meta:meta});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},565:function(t,e,n){var content=n(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("6a7d2a6d",content,!0,{sourceMap:!1})},571:function(t,e,n){"use strict";n(565)},572:function(t,e,n){var r=n(59)(!1);r.push([t.i,".page-enter-active[data-v-14554890],.page-leave-active[data-v-14554890]{transition:opacity .3s}.page-enter[data-v-14554890],.page-leave-to[data-v-14554890]{opacity:0}.page[data-v-14554890]{max-width:820px;margin:0 auto;background-color:#fff;padding:14px}.page h1[data-v-14554890]{text-align:center}.page__content[data-v-14554890]{text-align:justify}",""]),t.exports=r},575:function(t,e,n){"use strict";n.r(e);n(37),n(31),n(42),n(62),n(27),n(63);var r=n(23),c=n(4),o=(n(36),n(560));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,meta;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(t);case 2:return n=e.sent,r=n.page,meta=n.meta,e.abrupt("return",{page:r,meta:meta});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.meta)},computed:{content:function(){return this.$md.render(this.page.content)}}},f=(n(571),n(43)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h1",{staticClass:"page__title"},[t._v(t._s(t.page.title))]),t._v(" "),t.page.content?n("div",{staticClass:"page__content",domProps:{innerHTML:t._s(t.content)}}):t._e()])}),[],!1,null,"14554890",null);e.default=component.exports}}]);