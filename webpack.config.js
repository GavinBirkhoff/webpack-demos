const path = require('path')

const demo01 = {
   entry: `./demo01/main.js`,
   output: {
      path: path.resolve(__dirname, 'demo01'),
      filename: 'bundle.js',
   },
   mode: 'development',
}

//Code Splitting
const demo02 = {
   mode: 'development',
   entry: {
      index: './demo02/index.js',
      another: './demo02/another-module.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'demo02', 'dist'),
   },
   optimization: {
      splitChunks: {
         chunks: 'all',
         automaticNameDelimiter: '-',
      },
   },
}

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const demo03 = {
   entry: `./demo03/main.js`,
   output: {
      path: path.resolve(__dirname, 'demo03'),
      chunkFilename: '[name].bundle.js',
      filename: 'bundle.js',
   },
   mode: 'development',
   //  plugins: [new BundleAnalyzerPlugin()],
}

module.exports = [demo01, demo02, demo03]
