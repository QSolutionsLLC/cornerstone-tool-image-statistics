var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example-cornerstonejs-marketplace-listing.js',
    library: 'exampleCornerstonejsMarketplaceListing',
    libraryTarget: 'umd'
  },
  /**
   * External dependencies; should be made available by consuming
   * project; don't include in our output bundle.
   *
   * https://webpack.js.org/configuration/externals/
   */
  externals: {
    'cornerstone-core': {
      commonjs: 'cornerstone-core',
      commonjs2: 'cornerstone-core',
      amd: 'cornerstone-core',
      root: 'cornerstoneCore' // Global Variable
    },
    'cornerstone-tools': {
      commonjs: 'cornerstone-tools',
      commonjs2: 'cornerstone-tools',
      amd: 'cornerstone-tools',
      root: 'cornerstoneTools' // Global Variable
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: false,
    port: 8123
  }
};
