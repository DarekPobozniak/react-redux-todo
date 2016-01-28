var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var getPlugins = function (env) {
  var GLOBALS = {
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    },
    '__DEV__': env === 'development'
  };

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS) //Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch (env) {
    case 'production':
      plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false
          }
        })
      );
      break;
  }

  return plugins;
};

var getLoaders = function () {
  return [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'/*,
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }*/
    },
    {
      test: /\.scss$/, // Only .css files
      loader: 'style!css!sass' // Run both loaders
    }
  ]
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/[name].js'
  },
  debug: true,
  devtool: env == 'production' ? 'source-map' : 'eval-source-map', //more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  module: {
    loaders: getLoaders()
  },
  plugins: getPlugins(env)
}
