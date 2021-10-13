const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "./assets", to: "./assets" },
          { from: "index.html", to: "./" },
          { from: "work.html", to: "./" },
          { from: "shop.html", to: "./" },
          { from: "./fonts", to: "./fonts" },
        ],
      }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};