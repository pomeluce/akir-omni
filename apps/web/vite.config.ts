import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig(() => {
  return {
    plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react(), tailwindcss()],
    resolve: { tsconfigPaths: true },
    cacheDir: '../../node_modules/.vite/apps/web',
    server: { port: 4096, host: true },
    build: {
      emptyOutDir: true,
      outDir: '../../dist/apps/web',
      reportCompressedSize: true,
    },
  };
});
