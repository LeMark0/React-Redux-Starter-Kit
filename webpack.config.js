const pathList = require("./pathList");
var path = require('path');

module.exports = {
    entry: `${pathList.src}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            pathList.src,
            'node_modules'
        ],
        alias: {
            "/": pathList.src,
            components: path.resolve(__dirname, `${pathList.src}/components/`),
            containers: path.resolve(__dirname, `${pathList.src}/containers/`),

        }
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: pathList.src,
        hot: true
    },
    module : {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2017', 'stage-0', 'react'],
                    }
                }
            },
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name : 'static/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.json$/,
                use: [
                    'json-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
};