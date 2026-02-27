import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss(),
  ],
  base: '/Landingpageparainfoproduto/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
