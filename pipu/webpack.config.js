const path = require('path')

module.exports = {
  devtool: false,
  mode: 'development',
  // context: path.resolve(__dirname, '.'),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/, ///
        use: 'babel-loader'
      }
    ]
  }
}