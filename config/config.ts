import { defineConfig } from '@umijs/max';
import { routes } from './routes';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  tailwindcss: {},
  routes,
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },
  esbuildMinifyIIFE: true, // 开启 esbuild 压缩
  npmClient: 'pnpm',
  define: {},
});
