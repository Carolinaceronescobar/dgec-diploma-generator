import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Agrega el plugin ViteAliases aquí
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[local]_[hash:base64:4]',
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Reemplaza esto con el puerto de tu servidor de backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '/src': '/src', // Ajusta esto según tu estructura de directorios
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: './',
    rollupOptions: {
      input: {
        main: '/src/main.tsx', // Ruta principal de tu aplicación
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material'], // Asegúrate de incluir tus dependencias aquí
  },
});
