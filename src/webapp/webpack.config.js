const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root_dir = '../../';

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(root_dir, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader"
        ],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    }),
    new LodashModuleReplacementPlugin
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  resolve: {
    alias: {
      react: [
        path.resolve(__dirname, "./node_modules/react"),
        path.resolve(root_dir, "./node_modules/react")
      ],
      "react-router-dom": [
        path.resolve(__dirname, "node_modules/react-router-dom"),
        path.resolve(root_dir, "./node_modules/react-router-dom")
      ]
    }
  },
  devtool: 'source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, "./src"),
        publicPath: '/',
        watch: true
    },
    port: 3000,
    hot: true,
    historyApiFallback:true,
    proxy: {
        
    }
  }
};

module.exports = config;
