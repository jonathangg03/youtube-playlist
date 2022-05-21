const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')

module.exports = () => {
  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/public/dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /.html$/,
          use: 'html-loader'
        },
        {
          test: /.(scss|css)$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html')
        // favicon: './public/Icon.png'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      compress: true
    }
  }
}
