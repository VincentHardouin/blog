(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{558:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));r(88),r(63);function n(e){return e.startsWith("/")?"".concat(t.env.BASE_URL).concat(e):e}}).call(this,r(209))},560:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return _}));var n=r(17),c=r(4),o=(r(37),r(144),r(28),r(42),r(558));function d(t){var e={siteName:"Vincent Hardouin",metaTitle:t.title,metaDescription:t.description,imageUrl:t.seoImageUrl};return{titleTemplate:"%s | ".concat(e.siteName),title:e.metaTitle,meta:l(e)}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.metaTitle,r=void 0===e?"Le blog de Vincent Hardouin":e,n=t.metaDescription,c=void 0===n?"Blog de tutorials, humeurs, … sur des sujets tech.":n,d=t.imageUrl,l=void 0===d?"/image/og-card-default.png":d,m=t.article,article=void 0!==m&&m,f=[];return r&&f.push({hid:"og:title",property:"og:title",content:r},{hid:"twitter:title",name:"twitter:title",content:r}),c&&f.push({hid:"description",name:"description",content:c},{hid:"og:description",property:"og:description",content:c},{hid:"twitter:description",name:"twitter:description",content:c}),l&&f.push({hid:"image",name:"image",content:Object(o.a)(l)},{hid:"og:image",property:"og:image",content:Object(o.a)(l)},{hid:"og:image:alt",property:"og:image:alt",content:r},{hid:"twitter:image",name:"twitter:image",content:Object(o.a)(l)}),article&&f.push({hid:"og:type",property:"og:type",content:"article"}),f.push({hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}),f.push({hid:"twitter:site",name:"twitter:site",content:"@vincenthardouin"}),f}function m(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,c,o,l,article,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$strapi,c=e.params,t.next=3,r.$articles.find({slug:c.slug});case 3:return o=t.sent,l=Object(n.a)(o,1),article=l[0],meta=d(article),t.abrupt("return",{article:article,meta:meta});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$strapi,t.next=3,r.graphql({query:"query Articles {\n          articles {\n            slug\n            title\n            date\n          }\n        }"});case 3:return n=t.sent,c=n.articles,t.abrupt("return",{articles:c});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,c,o,l,m,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$strapi,c=e.params,t.next=3,r.$pages.find({slug:c.slug});case 3:return o=t.sent,l=Object(n.a)(o,1),m=l[0],meta=d(m),t.abrupt("return",{page:m,meta:meta});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},563:function(t,e,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("130985d4",content,!0,{sourceMap:!1})},567:function(t,e,r){"use strict";r(563)},568:function(t,e,r){var n=r(61)(!1);n.push([t.i,'.page-enter-active[data-v-264e83ba],.page-leave-active[data-v-264e83ba]{transition:opacity .3s}.page-enter[data-v-264e83ba],.page-leave-to[data-v-264e83ba]{opacity:0}body[data-v-264e83ba]{background-color:#fff}.dark-mode body[data-v-264e83ba]{background-color:#282b35}.article[data-v-264e83ba]{width:100%;padding-top:21px}@media(min-width:768px){.article[data-v-264e83ba]{min-height:50vh;background-image:url(/img/background-banner.svg);background-position:top;background-repeat:no-repeat;padding-top:170px}}.article__container[data-v-264e83ba]{max-width:820px;margin:0 auto;background-color:#fff;padding:14px}@media(min-width:768px){.article__container[data-v-264e83ba]{padding:14px 42px}}.article__date[data-v-264e83ba]{font-size:.875rem;font-weight:300;color:#3a506b;margin-bottom:14px}.article__content[data-v-264e83ba],.article__date[data-v-264e83ba]{font-family:"Roboto",arial,sans-serif}.article__content[data-v-264e83ba]{font-weight:400;text-align:justify}@media(min-width:768px){.dark-mode .article[data-v-264e83ba]{background-image:url(/img/background-banner-dark.svg)}}.dark-mode .article__container[data-v-264e83ba]{background-color:#282b35}.dark-mode .article__date[data-v-264e83ba]{color:#a1b0c1}',""]),t.exports=n},573:function(t,e,r){"use strict";r.r(e);r(32),r(28),r(38),r(49),r(24),r(50);var n=r(20),c=r(4),o=(r(37),r(560));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,article,meta;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t);case 2:return r=e.sent,article=r.article,meta=r.meta,e.abrupt("return",{article:article,meta:meta});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.meta)},computed:{content:function(){return this.$md.render(this.article.content)},date:function(){return this.$dayjs(this.article.date).format("l")}}},m=(r(567),r(43)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("div",{staticClass:"article__banner"}),t._v(" "),r("div",{staticClass:"article__container"},[r("div",{staticClass:"article__date"},[t._v(t._s(t.date))]),t._v(" "),r("h1",{staticClass:"article__title"},[t._v(t._s(t.article.title))]),t._v(" "),t.content?r("div",{staticClass:"article__content",domProps:{innerHTML:t._s(t.content)}}):t._e()])])}),[],!1,null,"264e83ba",null);e.default=component.exports}}]);