import path from "path";
import HtmlWebPackPlugin2 from "html-webpack-plugin";
const htmlPlugin2 = new HtmlWebPackPlugin2({
  template: "./public/index.html",
  filename: "./index.html",
});
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: "css/[name].[fullhash].css",
  chunkFilename: "css/[id].[chunkhash].css",
});
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[fullhash].js",
    publicPath: process.env.PUBLICpath || "/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [htmlPlugin2, miniCssPlugin],
};
