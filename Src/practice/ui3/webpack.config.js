var path = require('path');

module.exports = {
  mode: 'development',
  entry: './dist/index.js',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  }
};
