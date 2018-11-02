const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';
const cssLoaders = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [require('autoprefixer')({
                'browsers': ['> 1%', 'last 2 versions']
            })],
        }
    },
    'sass-loader'
];

let cacheBuild = true;

if (isHot) {
    cssLoaders.unshift('css-hot-loader');
    cacheBuild = false;
}

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    cache: cacheBuild,
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: cssLoaders
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'public'))
    ]
});