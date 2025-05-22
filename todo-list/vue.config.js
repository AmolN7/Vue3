const { stub } = require('./test/stubs')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middleware, server) => {
      stub(server);
      return middleware;
    }
  }
  
})
