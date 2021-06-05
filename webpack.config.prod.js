const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false, // use it for removing comments like "/*! ... */"
          },
        },
      }),
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.svg',
        to: '[name].svg',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.mp4',
        to: '[name].mp4',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.gif',
        to: '[name].gif',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.jpg',
        to: '[name].jpg',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.ttf',
        to: '[name].ttf',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.json',
        to: '[name].json',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.mp3',
        to: '[name].mp3',
      },
    ]),
    new CopyWebpackPlugin([
      {
        context: './build/',
        from: '*.png',
        to: '[name].png',
      },
    ]),
    new HTMLWebpackPlugin({
      template: 'build/index.html',
      filename: 'index.html',
      hash: true,
      minify: false,
    }),
  ],
};
