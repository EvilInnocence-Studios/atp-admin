import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@uac': path.resolve(__dirname, 'src/uac'),
      '@uac-shared': path.resolve(__dirname, 'src/uac-shared'),
      '@core-shared': path.resolve(__dirname, 'src/core-shared'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
  plugins: [react()],
})
