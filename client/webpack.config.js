const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
const htmlContentPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    resolve: {
        extensions: ['.html', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.html$/,
            use: "html-loader",
            exclude: /node_modules/,
        }]
    },
    devServer: {
        contentBase: htmlContentPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}