const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEBUG = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './App.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
  query: {
      presets: ['@babel/react', '@babel/preset-env'],
  }
  }, {
    use: ['style-loader', 'css-loader'],
    test: /\.css$/
  }],
},
plugins: [
  new HtmlWebpackPlugin({
    template: './index.html'
  })
],
devtool: DEBUG ? 'cheap-eval-source-map' : false,
}