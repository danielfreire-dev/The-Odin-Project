const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TOP - Restaurant Page",
      filename: "/dist/index.html",
      template: "/src/index.html",
    }),
  ],
};
