import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { Configuration } from 'webpack'

export const clientFolder = path.resolve(__dirname, '..')
export const appSourceFolder = path.resolve(clientFolder, 'src')
export const appDistributionFolder = path.resolve(clientFolder, 'dist')

export const makeConfiguration = (
  environment: Configuration
): Configuration => ({
  ...environment,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './static',
        },
      },
    ],
  },
  output: {
    path: appDistributionFolder,
    publicPath: '/',
    ...environment.output,
  },
  resolve: {
    modules: [appSourceFolder, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        baseUrl: path.resolve(clientFolder, './'),
        configFile: path.resolve(clientFolder, 'tsconfig.json'),
        logLevel: 'INFO',
      }),
    ],
  },
  target: 'web',
})
