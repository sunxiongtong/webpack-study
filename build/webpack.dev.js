
var webpack = require('webpack');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        // hotOnly: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig,devConfig);