const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "..", "src", "pages"),
      "@components": path.resolve(__dirname, "..", "src", "components"),
      "@containers": path.resolve(__dirname, "..", "src", "containers"),
      "@types": path.resolve(__dirname, "..", "src", "utils"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
};
