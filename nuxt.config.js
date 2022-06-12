export default {
  head: {
    title: 'saku',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  target: 'static'
}
