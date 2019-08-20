/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: (config, { /* buildId, defaultLoaders,  dev, isServer, */ webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.resolve.extensions = ['.js', '.ts', '.tsx'];
    return config;
  },
};
