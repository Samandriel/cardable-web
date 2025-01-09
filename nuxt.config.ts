// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "fr", language: "fr-FR" },
      { code: "es", language: "es-ES" },
      { code: "it", language: "it-IT" },
      { code: "pt", language: "pt-BR" },
      { code: "de", language: "de-DE" },
      { code: "th", language: "th-TH" },
    ],
    defaultLocale: "en",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Shad",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
