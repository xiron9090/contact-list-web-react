const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const basePath = __dirname;
const distPath = "dist";
const indextInput = "./src/index.html";
const indexOutput = "index.html";

const webpackInitConfig = {
  mode: "development",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: {
    app: ["./src/index.tsx"],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: "[chunkhash][name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  devServer: {
        port: 4000,
        open: true,
        hot: true
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
module.exports = webpackInitConfig;
