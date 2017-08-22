const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'www');

module.exports = {
    entry: './client/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin([dist]),
        new HtmlWebpackPlugin({
            title: 'React from scratch'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, dist)
    }
};