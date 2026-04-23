import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@app/theme/css/globals.css': path.resolve(__dirname, '../../packages/theme/src/css/globals.css'),
    },
  },
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/desktop-renderer',
  server: {
    port: 4300,
    host: true,
  },
  build: {
    outDir: '../../dist/apps/desktop-renderer',
    reportCompressedSize: true,
  },
});
