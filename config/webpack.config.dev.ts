import * as webpack from 'webpack';
import merge from 'webpack-merge';
import webpackConfig from './webpack.config';

const config: webpack.Configuration = merge(webpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
});

export default config;
