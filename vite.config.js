import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dodajte Firebase konfiguraciju
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['firebase/app'],
  },
});
