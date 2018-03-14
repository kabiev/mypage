const path = require('path');
const webpack = require('webpack');

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
    module: {
        rules: [
            {
                test:/\.js$/,
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
                        },  
                    },
                ],
            },

        ],
    },
}