(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{360:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("281a5cd2",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";r(360)},364:function(t,e,r){var n=r(71)(!1);n.push([t.i,'.post-card[data-v-4d64e8fb]{max-width:820px;padding:7px;text-decoration:none}.post-card[data-v-4d64e8fb]:visited{text-decoration:none;color:#1c2541}.post-card__title[data-v-4d64e8fb]{font-size:1rem;color:#1c2541;margin-bottom:0}.post-card__date[data-v-4d64e8fb]{font-family:"Open Sans",arial,sans-serif;font-size:.75rem;color:#ff9f1c}',""]),t.exports=n},366:function(t,e,r){var content=r(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("247d2292",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r.r(e);var n={props:{article:{type:Object,required:!0}}},c=(r(363),r(42)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"post-card",attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[r("h2",{staticClass:"post-card__title"},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"post-card__date"},[t._v(t._s(t.$dayjs(t.article.date).format("l")))])])}),[],!1,null,"4d64e8fb",null);e.default=component.exports},371:function(t,e,r){"use strict";r(366)},372:function(t,e,r){var n=r(71)(!1);n.push([t.i,".index[data-v-4f6897f8]{max-width:820px;margin:0 auto;padding:14px}",""]),t.exports=n},376:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$strapi,e.next=3,r.graphql({query:"query Articles {\n          articles {\n            slug\n            title\n            date\n          }\n        }"});case 3:return n=e.sent,c=n.articles,e.abrupt("return",{articles:c});case 6:case"end":return e.stop()}}),e)})))()}}),o=(r(371),r(42)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},t._l(t.articles,(function(article){return r("ArticleCard",{key:article.slug,attrs:{article:article}})})),1)}),[],!1,null,"4f6897f8",null);e.default=component.exports;installComponents(component,{ArticleCard:r(368).default})}}]);