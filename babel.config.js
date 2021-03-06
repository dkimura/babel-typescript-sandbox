module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'react-hot-loader/babel',
  ],
}
