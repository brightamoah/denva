// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "latest",

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@formkit/auto-animate/nuxt",
  ],

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        // Gotham is self-hosted; preload the face used above the fold.
        {
          rel: "preload",
          href: "/fonts/gotham/Gotham-Book.otf",
          as: "font",
          type: "font/otf",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  experimental: {
    typedPages: true,
    viteEnvironmentApi: true,
  },

  nitro: {
    preset: "cloudflare-module",
  },
});
