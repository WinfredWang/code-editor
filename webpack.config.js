var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        index: "./public/src/core/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "[name].js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devtool:"source-map",
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};