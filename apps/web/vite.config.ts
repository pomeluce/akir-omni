import { defineConfig } from 'vite';
import { createVitePlugin } from './vite/plugin';

export default defineConfig(env => {
  return {
    plugins: createVitePlugin(env),
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
