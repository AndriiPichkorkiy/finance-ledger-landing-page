const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log("IS DEV: ", isDev);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [`...`, new CssMinimizerPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const cssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, "css-loader"];
  if (extra) loaders.push(extra);

  return loaders;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
      },
    },
  ];

  // if (isDev) {
  //   loaders.push("@babel/eslint-parser");
  // }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.jsx",
    // analytics: "./analytics.ts",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "src/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".jsx", "json", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
    static: {
      directory: path.join(__dirname, "./src"),
    },
  },
  devtool: isDev ? "source-map" : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/favicon.ico"),
    //       to: path.resolve(__dirname, "dist"),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      // formatter: "compact",
      // quiet: true,
      // emitError: true,
      emitWarning: false,
      // failOnWarning: true,
      // failOnError: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.xml$/,
      //   use: ["xml-loader"],
      // },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
    ],
  },
};
