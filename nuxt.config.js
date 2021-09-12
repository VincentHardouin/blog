import { getMetaTags } from './utils/seo';
import { createFeed } from './utils/feed';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      ...getMetaTags(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:wght@400;500;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/scss/shared.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/dayjs',
      {
        defaultLocale: 'fr',
        plugins: ['localizedFormat'],
      },
    ],
    [
      '@nuxtjs/markdownit',
      {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
        html: true,
      },
    ],
    ['@nuxtjs/style-resources', { scss: ['assets/scss/globals.scss'] }],
    [
      '@nuxtjs/strapi',
      {
        entities: [
          { name: 'articles', type: 'collection' },
          { name: 'main-menu', type: 'single' },
          { name: 'pages', type: 'collection' },
        ],
      },
    ],
    '@nuxtjs/feed',
  ],
  feed: [createFeed()],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
