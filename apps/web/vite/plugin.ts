import type { ConfigEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import unpluginAutoImport from 'unplugin-auto-import/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export function createVitePlugin(env: ConfigEnv): PluginOption[] {
  const { command: _command, mode: _mode } = env;

  return [
    unpluginAutoImport({
      include: [/\.[tj]sx?$/, /\.md$/],
      imports: [
        'react',
        { 'react-dom/client': ['createRoot'] },
        'react-i18next',
        {
          '@tanstack/react-router': [
            'createLazyFileRoute',
            'createRootRoute',
            'createRootRouteWithContext',
            'createRouter',
            'useLocation',
            'useNavigate',
            'useRouter',
            'redirect',
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
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/pages',
      generatedRouteTree: './src/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single',
    }),
    react(),
    tailwindcss(),
  ];
}
