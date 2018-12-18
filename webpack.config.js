const path = require('path');
const webpack = require("webpack")
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        "app.js": [
            "./includes/js/jquery-3.3.1.min.js",
            "./includes/js/bootstrap.min.js",
            "./includes/js/tippy.all.min.js",
            "./src/js/search.js",
            "./src/js/logic.js",
            "./src/js/display.js",
            "./src/js/tooltip.js",
            "./src/js/extension.js"
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]'
    },
    plugins: [
        new ChromeExtensionReloader(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ]
    }
}