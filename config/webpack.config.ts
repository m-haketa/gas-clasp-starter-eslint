import * as webpack from 'webpack';
import GasWebpackPlugin from 'gas-webpack-plugin';
import CopyFilePlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'babel-loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new GasWebpackPlugin(),
    new CopyFilePlugin({
      patterns: [
        {
          from: './src/appsscript.json',
          to: path.resolve('dist'),
        },
      ],
    }),
    new WriteFilePlugin(),
  ],
};

export default config;
