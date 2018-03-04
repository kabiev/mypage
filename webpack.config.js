const path = require('path');
const webpack = require('webpack');

const src = {root: path.resolve(__dirname, 'src')};
const dist = {root: path.resolve(__dirname, 'dist')};

module.exports = {
    context: src.root,
    entry: {
        app: [
            './js/app.js',
        ],
    },
    output:{
        filename: 'js/[name].js',
        path: dist.root,
        publicPath: '../'
    },
    module: {
        rules: [

        ],
    },
}