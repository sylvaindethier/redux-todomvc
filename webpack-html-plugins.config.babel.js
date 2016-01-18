import HtmlWebpackPlugin from 'html-webpack-plugin';

const isPROD = process.env.NODE_ENV === 'production';

export const index = new HtmlWebpackPlugin({
  filename: 'index.html', // relative to webpack output.path
  template: './src/views/index.html',
  data: {
    root: isPROD ? require('./src/rootString') : '',
  },
});

export default [
  index,
];
