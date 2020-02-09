const path = require('path');
const express = require('express');

const app = express();

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log('Listening on Port 4000');
});