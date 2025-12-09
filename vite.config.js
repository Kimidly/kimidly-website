import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        book: resolve(__dirname, 'book.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        imprint: resolve(__dirname, 'imprint.html'),
        cookies: resolve(__dirname, 'cookies.html'),
      },
    },
  },
})

