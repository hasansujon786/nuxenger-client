import apolloConfig from './plugins/apollo-config'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#41b883' },
  /*
   ** Global CSS
   */
  css: ['~/assets/sass/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/user-is-tabing.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/sass/base/tailwind.css'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo'],
  // Give apollo module options
  apollo: apolloConfig,

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
