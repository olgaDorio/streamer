const path = require('path');

module.exports = {
  mode: process.env.MODE || 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          formater: require('eslint-friendly-formatter'),
        }
      },
    ],
  },
};
