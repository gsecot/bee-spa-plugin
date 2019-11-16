import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { appSourceFolder, makeConfiguration } from './config.base'

const configuration = makeConfiguration({
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  entry: [path.resolve(appSourceFolder, 'index.tsx')],
  mode: 'production',
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: path.resolve(appSourceFolder, 'index.production.html'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyPlugin([
      {
        from: 'node_modules/react/umd/react.production.min.js',
        to: 'react.production.min.js',
      },
      {
        from: 'node_modules/react-dom/umd/react-dom.production.min.js',
        to: 'react-dom.production.min.js',
      },
    ]),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   openAnalyzer: false,
    //   reportFilename: "_wbr.html"
    // })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/].*lodash.*[\\/]/,
          priority: -6,
          enforce: true,
        },
        'react-components': {
          test: /[\\/]node_modules[\\/].*(react).*[\\/]/,
          priority: -7,
          enforce: true,
        },
        apollo: {
          test: /[\\/]node_modules[\\/].*(apollo|graphql).*[\\/]/,
          priority: -7,
          enforce: true,
        },
        redux: {
          test: /[\\/]node_modules[\\/].*redux.*[\\/]/,
          priority: -8,
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          enforce: true,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})

export default configuration
