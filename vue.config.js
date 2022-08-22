const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://c6-28.up.railway.app/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': 'api/v1' },
      },
    },
  },
});
