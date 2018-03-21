const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const content = require('./content.json');

const ExtractTextWebpack = require('extract-text-webpack-plugin');

const src = { root: path.resolve(__dirname, 'src') };
const dist = { root: path.resolve(__dirname, 'dist') };

module.exports = {
    context: src.root,
    entry: {
        app: [
            './js/app.js',
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: dist.root,
        publicPath: '../'
    },
    devServer: {
        contentBase: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].html'
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                            data: content
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpack.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        },
                    ],
                    fallback: 'style-loader'
                })
            },
        ],
    },
    plugins: [
        new ExtractTextWebpack(
            './css/[name].css'
        ),
    ],
}