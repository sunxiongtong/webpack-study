
const commonConfig = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');

const prodConfig  = {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, '../dist')   
    },
}

module.exports = merge(commonConfig,prodConfig);