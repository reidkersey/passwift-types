const path = require('path');
const keysTransformer = require('ts-transformer-keys/transformer').default;

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // make sure not to set `transpileOnly: true` here, otherwise it will not work
          getCustomTransformers: program => ({
              before: [
                  keysTransformer(program)
              ]
          })
        }
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