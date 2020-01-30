const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // plugins: [new html({
  //     template: './client/index.html'
  // })],

  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist/',
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
};
