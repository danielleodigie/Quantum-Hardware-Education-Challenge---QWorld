export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'qnychackathon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/redirect-module', {
      from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
  to: (from, req) => {
    const base = req._parsedUrl.pathname.replace(/\/$/, '');
    const search = req._parsedUrl.search;
    return base + (search != null ? search : '');
  }
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static',
  router: {
    trailingSlash: false
  }
}
