const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist')
  },
  module: {
    rules: [{
        // load handlebars files when importing in js files
        // or used in template property of html-webpack - plugin
        test: /\.(handlebars|hbs)$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      name: 'index',
      template: './src/index.handlebars',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      name: 'about',
      template: './src/about.handlebars',
      chunks: ['about'],
      filename: 'about.html'
    })
  ]
};