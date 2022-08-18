// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    context: resolve(__dirname, "../../src"),
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html.ejs",
            favicon: "favicon.ico",
        }),
        new ESLintPlugin({
            extensions: ["tsx"],
            exclude: ["node_modules/", "prod/"],
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: true,
        }),
        new StylelintPlugin({
            extensions: ["scss"],
            fix: true,
        }),
    ],
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
    performance: {
        hints: false,
    },
};
