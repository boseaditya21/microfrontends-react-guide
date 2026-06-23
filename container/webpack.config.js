const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const config = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// Workaround: Delete the problematic internal property if a plugin injects it
if (config.devServer && config.devServer._assetEmittingPreviousFiles) {
  delete config.devServer._assetEmittingPreviousFiles;
}

module.exports = config;
