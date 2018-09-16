module.exports = {
  head: {
    script: [
      {src: 'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js', defer: ''},
      {src: `https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.runtime.min.js`, defer: ''},
      {src: `https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js`, defer: ''},
      {src: `https://cdn.jsdelivr.net/npm/vue-meta@1.5.3/lib/vue-meta.min.js`, defer: ''},
      {src: `https://cdn.jsdelivr.net/npm/regenerator-runtime@0.12.1/runtime.min.js`, defer: ''},
    ],
  },

  srcDir: 'src/',

  plugins: [
    '~/plugins/app',
  ],

  build: {
    extend(config, context) {
      if (!context.isDev) {
        config.devtool = 'none'
      }

      // Nuxt 2.0 is supposed to change this to .client, maybe?
      if (context.isClient) {
        config.externals = {
          axios: 'axios',
          vue: 'Vue',
          'vue-router': 'VueRouter',
          'vue-meta': 'VueMeta',
          'regenerator-runtime/runtime': 'regeneratorRuntime',
        }
      }
    }
  }

}