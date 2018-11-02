const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');
const dev = require('./webpack.config.dev.js');
const path = require('path');

module.exports = merge(common, dev, {

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

    ]
});