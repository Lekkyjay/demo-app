import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external connections when dev server is running inside docker container
    proxy: {
      '/api': {
        target: 'http://backend:5000', // Proxy API requests to backend service. VITE_API_URL variable not needed (in development)
        changeOrigin: true,
      },
    },
  },
})
