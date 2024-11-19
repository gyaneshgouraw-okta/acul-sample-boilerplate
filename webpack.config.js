const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // entry: './script.js', 
    entry: './script-sdk.js',
    output: {
        filename: 'index.js', // Output filename
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Match .css files
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Use MiniCssExtractPlugin and css-loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', // Use index.html as a template
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css', // Output CSS filename
        }),
    ],
    mode: 'development', // Set to 'production' for production builds
};
