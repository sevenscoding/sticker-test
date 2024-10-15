export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore'],
  },
  vite: {
    server: {
      hmr: true,
      fs: {
        strict: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/base/variables.scss";
            @use "@/assets/styles/base/normalize.scss";
            @use "@/assets/styles/base/fonts.scss";
          `
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
    },
    components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
          },
        },
      },
    },
  },

  css: [
    '@/assets/styles/main.scss'
  ]
})