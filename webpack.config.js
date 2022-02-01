const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/script/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
