// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  sourcemap: false,
  runtimeConfig: {
    // env ->process.env.NODE_ENV
  },
  devtools: { enabled: true },
  alias: {},
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  pinia: {
    autoImports: ['defineStore']
  },
  vite: {
    vue: {
      script: {
        // vue3.3之后需要开启实验特性
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  devServer: {
    port: parseInt(process.env.PORT || '')
  },
  css: ['@unocss/reset/tailwind.css'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Vite App',
      short_name: 'Vite App',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      // 如果大家有很大的资源文件，wasm bundle.js
      globPatterns: ['**/*.*']
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  }
})
