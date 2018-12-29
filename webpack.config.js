const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        use: [
          { loader: require.resolve('thread-loader') },
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              compact: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
