"use strict";

const path = require("path");

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api": {
        //代替http://127.0.0.1:3000
        target: "http://127.0.0.1:8001/api",
        pathRewrite: {
          "^/api": "" //不加就是源地址
        },
        changeOrigin: true
      }
    },

    host: "localhost",
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    devtool: "cheap-module-eval-source-map",

    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, "../dist/index.html"),

    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",

    productionSourceMap: true,

    devtool: "#source-map",

    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    bundleAnalyzerReport: process.env.npm_config_report
  }
};
