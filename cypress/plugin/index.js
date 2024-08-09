const path = require('path');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../..'), // Adjust the path as needed
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  };

  on('file:preprocessor', webpack(options));

  return config;
};