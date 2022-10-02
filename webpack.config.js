const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  // target: "node",
  externals: {
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'passwift-types',
      type: 'umd2'
    },
    globalObject: 'this',
  },
  plugins: [
  ],
  optimization: {
    minimize: false
  },
  mode: 'development',
};