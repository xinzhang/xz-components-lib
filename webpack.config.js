const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src", "Button", "index.tsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'prop-types': 'prop-types',
    'object-assign': 'object-assign',
  },
  optimization: {
    minimize: false,
  },
};


