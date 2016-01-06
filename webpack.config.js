// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
var webpack = require('webpack');
var path = require('path');

var srcPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'public');


function isPROD(env) {
  return env === undefined || env === 'prod' || env === 'production';
}
function isDEV(env) {
  return env === 'dev' || env === 'development';
}
function isTEST(env) {
  return env === 'test';
}

function getPlugins(env) {
  var plugins = [new webpack.optimize.OccurenceOrderPlugin()];

  switch(true) {
    case isPROD(env):
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}));
      break;
    case isDEV(env):
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  return plugins;
}


function getLoaders(env) {
  var loaders = [
    // Babel & ESLint loaders for JS & JSX files
    {
      loaders: ['babel', 'eslint'],
      include: [srcPath],
      test: /\.jsx?$/,
    },
  ];

  return loaders;
}

function getEntry(env) {
  var entry = {
    // TodoApp entry point
    'todo-app': path.resolve(srcPath, 'index.js'),

    // vendors
    // 'vendors': [],
  };

  return entry;
}

function getConfig(env) {
  return {
    entry: getEntry(env),
    output: {
      path: path.resolve(distPath, 'js'),
      filename: '[name].js',
      publicPath: '/js/', // serve under '/js/' path
    },
    //necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    target: isTEST(env) ? 'node' : 'web',
    plugins: getPlugins(env),
    module: { loaders: getLoaders(env) },

    resolve: { extensions: ["", ".web.js", ".js", ".jsx"] },
    stats: { colors: true },
    debug: true,
    // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    devtool: isPROD(env) ? 'source-map' : 'eval-source-map',
    devServer: {
      contentBase: distPath,
    },
  }
}

module.exports = getConfig(process.env.NODE_ENV);
