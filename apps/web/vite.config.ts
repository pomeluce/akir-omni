import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import unpluginAutoImport from 'unplugin-auto-import/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig(() => {
  return {
    plugins: [
      unpluginAutoImport({
        include: [/\.[tj]sx?$/, /\.md$/],
        // 自动导入 react 相关函数
        imports: [
          'react',
          'react-i18next',
          {
            '@tanstack/react-router': [
              'createFileRoute',
              'createLazyFileRoute',
              'createRootRoute',
              'createRootRouteWithContext',
              'createRouter',
              'useLocation',
              'useNavigate',
              'useRouter',
              'useRouterState',
              'redirect',
              'Link',
              'Outlet',
              'RouterProvider',
            ],
          },
        ],
        // 自定义函数导入
        // dirs: ['src/store/**/*', 'src/constants/**/*', 'src/hooks/**/*'],
        // 声明生成的位置
        dts: 'types/akir/auto-imports.d.ts',
        // 根据文件名称自动设置默认导出的变量名
        defaultExportByFilename: true,
      }),
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      react(),
      tailwindcss(),
    ],
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
