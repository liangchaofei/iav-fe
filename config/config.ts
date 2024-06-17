import { defineConfig } from '@umijs/max';
// import { routes } from './routes';
import dotenv from 'dotenv';
import routesConfig, { RouterKey } from '../routers';

// 加载环境变量
dotenv.config();
const selectedRouter: RouterKey =
  (process.env.router as RouterKey) || 'RouterA';
const routes = routesConfig[selectedRouter];

console.log('ROUTER', selectedRouter);
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
  verifyCommit: {}, // 验证commit
  define: {
    'process.env.router': process.env.router,
  },
});
