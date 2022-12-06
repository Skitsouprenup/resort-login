const prod = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      
      {
        test: /\.s(a|c)ss$/,
        use: [

          {loader: MiniCssExtractPlugin.loader},

          {
            loader: 'css-modules-typescript-loader',
            options: {
              mode: process.env.CI ? 'verify' : 'emit'
            }
          },

          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },

          {loader: 'sass-loader'},

        ],
      },

      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
        ]
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './src/images/icon.ico',
      inject: 'body'}),
    new MiniCssExtractPlugin(),
  ],
}

