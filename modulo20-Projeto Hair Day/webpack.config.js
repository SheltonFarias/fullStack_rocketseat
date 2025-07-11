const path = require("path");
const { Template, ModuleFilenameHelpers } = require("webpack");
const HmtlWebpackPlugin = require("html-webpack-plugin")
const copyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  
  devServer: {
    static:{
      directory: path.join(__dirname, "dist")
    },
    port: 3002,
    open: true,
    liveReload: true
  },

  plugins: [new HmtlWebpackPlugin({
    Template: path.resolve(__dirname, "index.html"),
    favicon: path.resolve("src", "assets", "scissors.svg")
  }),

  new copyWebpackPlugin({
    patterns: {
      from: path.resolve(__dirname, "src", "assets"),
      to: path.resolve(__dirname, "dist", "src", "assets")
    }
  })
],

module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test:/\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        }
      }
    },
  ],
},
};
