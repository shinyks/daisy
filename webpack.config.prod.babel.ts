import path from "path";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const config: Configuration = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "dist/build"),
    filename: "index.js",
    library: 'daisy',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "timers": require.resolve("timers-browserify"),
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "ts"],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
    ],
  },
};

export default config;
