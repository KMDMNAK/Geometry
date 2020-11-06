const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    }
}