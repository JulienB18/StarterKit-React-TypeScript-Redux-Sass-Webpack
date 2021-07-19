// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["webpack-dev-server/client?http://localhost:8080", "./index.tsx"],
  devServer: {
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
});
