import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

import { appSourceFolder, makeConfiguration } from './config.base'

const configuration = makeConfiguration({
  entry: path.resolve(appSourceFolder, 'index.tsx'),
  mode: 'development',
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appSourceFolder, 'index.development.html'),
    }),
  ],
})

export default configuration
