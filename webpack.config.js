const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({
  files: 'src/*.js',
}).then((text) => {
  fs.writeFile('docs.md', text, 'utf8', () => {});
})

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

