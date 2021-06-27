/*
 * @Author: mo
 * @LastEditors: mo
 * @LastEditTime: 2021-06-27 22:35:45
 * @Description: 
 */
const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: path.resolve(__dirname, "./src/main.js"),
  devtool: !isProd && "eval-source-map",
  output: {
    path: path.resolve(__dirname, "../docs"),
    publicPath: isProd ? "/vue-admin" : '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // http://link.vuejs.org/feature-flags
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.tpl"),
      favicon: path.resolve(__dirname, "./public/favicon.png"),
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.esm-browser.js",
      // examples: path.resolve(__dirname),
    },
  },
};

module.exports = config;
