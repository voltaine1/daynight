const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    inline: true,
    contentBase: 'dist',
    port: 3000,
  },
  devtool: 'inline-source-map',
  plugins: [
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
        from: '*.svg',
        to: '[name].svg',
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
        from: '*.json',
        to: '[name].json',
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
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
