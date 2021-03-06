const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('../webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");
const app = express();

app.use(express.static('www'));

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler,{});
app.use(wpmw);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
