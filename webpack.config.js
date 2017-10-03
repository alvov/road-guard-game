const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: './'
                })
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
    plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].css')
    ]
};
