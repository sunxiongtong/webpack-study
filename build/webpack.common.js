
const path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        './src/index'
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        hotOnly: true,
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: { 
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                {
                    loader: 'postcss-loader',
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",

        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    }
}