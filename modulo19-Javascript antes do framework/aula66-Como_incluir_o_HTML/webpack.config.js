const path = require("path");
const HTMLWebpackPlugin = require("HTML-webpack-puglin");

module.exports = {
  entry: path.resolve(__dirname, "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
    ],
  },
};

// npm install --save-dev css-loader
// npm install --save-dev style-loader
