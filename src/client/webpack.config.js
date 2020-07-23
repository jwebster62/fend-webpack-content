const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
    module: {
        plugins: [
            new HtmlWebPackPlugin({
                template: "/src/client/views/index.html",
                filename: "/index.html",
            })
        ],
        rules: [{
            test: '/\.js$/',
            exclude: /node-modules/,
            loader: "bebel-loader"
        }]
    }

}