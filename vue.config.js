const { defineConfig } = require('@vue/cli-service');
const pkg = require('./package.json');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/catalogo_auto/' : '/',
  transpileDependencies: true,
  lintOnSave: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = `${pkg.name} - ${pkg.version}`;
      return args;
    });
  }
});