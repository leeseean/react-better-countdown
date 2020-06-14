const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: {
        'ReactCountDown': './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'ReactCountDown',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }]
    },
    mode: 'production',
    externals: ['react'],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    //压缩js
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(
            { test: /\.js(\?.*)?$/i }
        )],
    },
};