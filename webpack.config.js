const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEBUG = process.env.NODE_ENV === 'development';
const { PWD } = process.env;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/react', '@babel/preset-env', '@babel/preset-typescript'],
      }
    }, {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
    }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  devtool: DEBUG ? 'cheap-eval-source-map' : false,
}