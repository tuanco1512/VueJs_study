export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NuxtJs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    "~/assets/css/reset.css",
    "~/assets/fonts/font.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
  ],

  auth: {
    // Strategy bạn muốn sử dụng (ở đây là local strategy)
    strategies: {
      local: {
        // Tên của strategy
        scheme: "local",
        // Các tùy chọn cho local strategy
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "data",
          autoFetch: true,
        },
        endpoints: {
          // Các API endpoints liên quan đến đăng nhập và lấy thông tin người dùng
          login: { url: "/login", method: "post" },
          user: { url: "/user", method: "get" },
          logout: { url: "/logout", method: "get" },
        },
      },
    },
    // Các cài đặt chung cho Auth Module
    redirect: {
      login: "/auth/login",
      logout: "/",
      home: "/",
    },
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api-test.karo.land/api",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
