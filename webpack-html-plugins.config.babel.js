import HtmlWebpackPlugin from 'html-webpack-plugin';


const isPROD = process.env.NODE_ENV === 'production';
const root = isPROD ? require('./src/rootString') : '';

export const index = new HtmlWebpackPlugin({
  filename: 'index.html', // relative to webpack output.path
  template: './src/views/index.html',
  data: {
    root,
  },
});

export default [
  index,
];
