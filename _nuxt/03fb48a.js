(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{361:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(362);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.metaTitle,n=void 0===e?"Le blog de Vincent Hardouin":e,c=t.metaDescription,o=void 0===c?"Blog de tutorials, humeurs, … sur des sujets tech.":c,l=t.imageUrl,d=void 0===l?"/image/og-card-default.png":l,m=t.article,article=void 0!==m&&m,f=[];return n&&f.push({property:"og:title",content:n},{name:"twitter:title",content:n}),o&&f.push({name:"description",content:o},{property:"og:description",content:o},{name:"twitter:description",content:o}),d&&f.push({name:"image",content:Object(r.a)(d)},{property:"og:image",content:Object(r.a)(d)},{property:"og:image:alt",content:n},{name:"twitter:image",content:Object(r.a)(d)}),article&&f.push({property:"og:type",content:"article"}),f.push({name:"twitter:card",content:"summary_large_image"}),f.push({name:"twitter:site",content:"@vincenthardouin"}),f}},362:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(88),n(59);function r(e){return e.startsWith("/")?"".concat(t.env.BASE_URL).concat(e):e}}).call(this,n(209))},365:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("5e86ae55",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n(365)},370:function(t,e,n){var r=n(71)(!1);r.push([t.i,'.article[data-v-571e0f68]{width:100%;min-height:50vh;background-image:url(/img/background-banner.svg);background-position:top;background-repeat:no-repeat;padding-top:170px}.article__container[data-v-571e0f68]{max-width:820px;margin:0 auto;background-color:#fff;padding:14px}@media(min-width:768px){.article__container[data-v-571e0f68]{padding:14px 42px}}.article__date[data-v-571e0f68]{font-size:.875rem;font-weight:300;margin-bottom:14px}.article__content[data-v-571e0f68],.article__date[data-v-571e0f68]{font-family:"Roboto",arial,sans-serif;color:#3a506b}.article__content[data-v-571e0f68]{font-weight:400}',""]),t.exports=r},375:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(36),n(143),n(31),n(41),n(361)),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,r=t.params,e.next=3,n.$articles.find({slug:r.slug});case 3:return c=e.sent,article=c[0],e.abrupt("return",{article:article});case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t={siteName:"Vincent Hardouin",metaTitle:this.article.title,metaDescription:this.article.description,imageUrl:this.article.seoImageUrl};return{titleTemplate:"%s | ".concat(t.siteName),title:t.metaTitle,meta:Object(c.a)(t)}}},l=(n(369),n(42)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("div",{staticClass:"article__banner"}),t._v(" "),n("div",{staticClass:"article__container"},[n("div",{staticClass:"article__date"},[t._v(t._s(t.$dayjs(t.article.date).format("l")))]),t._v(" "),n("h1",{staticClass:"article__title"},[t._v(t._s(t.article.title))]),t._v(" "),t.article.content?n("div",{staticClass:"article__content",domProps:{innerHTML:t._s(t.$md.render(t.article.content))}}):t._e()])])}),[],!1,null,"571e0f68",null);e.default=component.exports}}]);