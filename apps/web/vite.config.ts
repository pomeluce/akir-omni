import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: { tsconfigPaths: true },
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/web',
    server: { port: 4096, host: true },
    build: {
      emptyOutDir: true,
      outDir: '../../dist/apps/web',
      reportCompressedSize: true,
    },
  };
});
