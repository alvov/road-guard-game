const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                },
                                modules: false
                            }
                        ]],
                        plugins: [
                            'transform-class-properties',
                            'transform-object-rest-spread'
                        ]
                    }
                }
            },
            {
                test: /\.(png|mp3)$/,
                loader: 'file-loader',
                query: {
                    outputPath: 'assets/'
                }
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};
