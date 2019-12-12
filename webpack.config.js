const path = require("path");

module.exports = {
    entry: {
        "main": path.join(__dirname, "src", "index.js")
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }

                ]
            }
        ]
    }
}