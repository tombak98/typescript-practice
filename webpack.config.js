module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader:'ts-loader'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
