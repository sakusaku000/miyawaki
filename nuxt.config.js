export default {
  head: {
    title: 'saku',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700;800&display=swap"}
    ]
  },
  css:[
    "@/assets/css/main.css"
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  target: 'static',
  server: {     
    port: 8000,   
    host: '0.0.0.0'
  }
}
