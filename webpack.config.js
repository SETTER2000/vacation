const webpack = require("webpack");
const path = require("path");

process.noDeprecation = true;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            }
        ]
    },
    plugins: [

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true, // отображение на исходный код
            warnings: false, // false приведет к удалению из экспортируемого пакета всех предупреждений, выводимых в консоль.
            /*
            * Правка имен в нашем коде с установкой в true свойства mangle означает,
            * что мы собираемся урезать длинные имена переменных, таких как recipes
            * или ingredients, до одной буквы.
            * */
            mangle: true
        })
    ]
};
