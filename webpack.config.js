const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: ['./styles/style.scss'],
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: '[name].js'
   },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
              }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: "bundle.css"
    }),
  ],
};

module.exports = config;