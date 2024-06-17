// https://umijs.org/config/
import { defineConfig } from '@umijs/max';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
