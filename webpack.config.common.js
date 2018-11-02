const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(svg|woff2?|ttf|eot)/,
                use: [
                    { loader: 'file-loader',
                        options: {
                            emitFile: false,
                            name: '[name].[ext]',
                            publicPath: '/webfonts'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|src\/plugins)/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
