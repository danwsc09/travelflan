const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: { static: path.join(__dirname, "src"), port: 9090, open: true },
});
