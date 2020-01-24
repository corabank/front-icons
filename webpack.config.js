const ImageminPlugin = require("imagemin-webpack");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { 
        from: 'src/**/*.svg',
        to: 'icons',
        flatten: true,
      },
    ]),
  ],
};