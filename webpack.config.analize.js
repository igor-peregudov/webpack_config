const merge = require('webpack-merge');
const common = require('./webpack.config.prod.js');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    cache: false,
    plugins: [
        new DuplicatePackageCheckerPlugin(),
        new BundleAnalyzerPlugin()
    ]
});
