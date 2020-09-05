const path = require("path");

module.exports = {
    entry: {
        main: path.join(__dirname, "src", "index.jsx")
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "public")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ["transform-react-jsx"],
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }

                ]
            }, {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    }

                ]
            }
        ]
    },
}