// TODO: Use html-webpack-plugin to generate HTML files
// TODO: https://github.com/ampedandwired/html-webpack-plugin


import webpack from 'webpack';
import { resolve } from 'path';

const srcPath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'public');

function isPROD(env) {
  return env === undefined || env === 'prod' || env === 'production';
}
function isDEV(env) {
  return env === 'dev' || env === 'development';
}
function isTEST(env) {
  return env === 'test';
}


function getEntry(/* env */) {
  const entry = {
    // TodoApp entry point
    'todomvc-app': resolve(srcPath, 'index.js'),

    // vendors
    // 'vendors': [],
  };

  return entry;
}

function getPlugins(env) {
  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
  ];

  switch (true) {
    case isPROD(env):
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }));
      break;
    case isDEV(env):
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
    default:
      break;
  }

  return plugins;
}

function getLoaders(/* env */) {
  const loaders = [
    // Babel & ESLint loaders for JS & JSX files
    {
      loaders: ['babel', 'eslint'],
      include: [srcPath],
      test: /\.jsx?$/,
    },
  ];

  return loaders;
}


export default (env => ({
  entry: getEntry(env),
  output: {
    path: resolve(distPath, 'js'),
    filename: '[name].js',
    publicPath: '/js/', // serve under '/js/' path
  },
  // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: isTEST(env) ? 'node' : 'web',
  plugins: getPlugins(env),
  module: { loaders: getLoaders(env) },

  resolve: { extensions: ['', '.web.js', '.js', '.jsx'] },
  stats: { colors: true },
  debug: true,
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  // devtool: isPROD(env) ? 'source-map' : 'eval-source-map',
  devtool: 'source-map',
  devServer: {
    contentBase: distPath,
  },
}))(process.env.NODE_ENV);
