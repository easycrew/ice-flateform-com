const { resolve } = require('path');
const proxyTarget = 'http://192.168.32.54:8088';
const proxyTargetjc = 'http://127.0.0.1:8080';

module.exports = {
  //路径重命名
  resolve:{
    alias:{
      public: resolve(__dirname,'public'),
      src: resolve(__dirname,'src'),
      components: resolve(__dirname,'src/components'),
      utils: resolve(__dirname,'src/utils'),
      api:resolve(__dirname,'src/api'),
    },
  },
  devServer: {
    proxy: {
      '/apijc': {
        target: proxyTargetjc,
        pathRewrite: {'^/apijc' : ''},
        changeOrigin: true,
        bypass: function(req, res, proxyOpt) {
          // 添加 HTTP Header 标识 proxy 开启
          res.set('X-ICE-PROXY', 'on');
          res.set('X-ICE-PROXY-BY', proxyTargetjc);
        },
      },
      '/api': {
        target: proxyTarget,
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
        bypass: function(req, res, proxyOpt) {
          // 添加 HTTP Header 标识 proxy 开启
          res.set('X-ICE-PROXY', 'on');
          res.set('X-ICE-PROXY-BY', proxyTarget);
        },
      },
    },
  }
 
};