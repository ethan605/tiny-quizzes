/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfigs = {
  webpack: (config, { /* buildId, defaultLoaders,  dev, isServer, */ webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.resolve.extensions = ['.js', '.ts', '.tsx'];
    return config;
  },
};

module.exports = withPlugins(
  [
    withCss,
    [
      withSass,
      {
        cssLoaderOptions: {
          url: false,
        },
      },
    ],
  ],
  nextConfigs
);
