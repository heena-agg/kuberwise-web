import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const page = (name: string) => fileURLToPath(new URL(`./${name}.html`, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: page('index'),
        stockraze: page('stockraze'),
        about: page('about'),
        pricing: page('pricing'),
        contact: page('contact'),
        privacy: page('privacy'),
        terms: page('terms'),
      },
    },
  },
  server: {
    port: 5174,
    strictPort: true,
  },
});
