const path = require("path")
const webpack = require('webpack')
module.exports = {
    module: {
        rules: [{
            test: '/\.js$/',
            exclude: /node-modules/,
            loader: "bebel-loader"
        }]
    }

}