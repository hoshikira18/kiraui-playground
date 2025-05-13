import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './shared/kiraui/src'),
      "@src": path.resolve(__dirname, './src'),
    },
  },
})
