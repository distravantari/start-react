# REACT
react + webpack + es6.

> react  : https://facebook.github.io/react/docs/thinking-in-react.html  
> webpack: https://webpack.github.io/   
> es6    : http://es6-features.org/#Constants

## WEBPACK
#### development
this is webpack configuration for development (bundle.js will be alot bigger than production mode) to run this configuration simply write : webpack -w on your terminal
```sh
module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
```

#### production
this is webpack configuration for production (bundle.js is alot smaller because webpack minified it and seperate the file to js.map file) to run this configuration simply write : webpack -p on your terminal
```sh
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
      'eventsource-polyfill',
      './app/App.js'
  ],
  output: {
    filename: "public/bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"public/vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
```
## Things you need to do:
1. go to your application directory using terminal  
2. npm install webpack -g
2. run npm install
3. run webpack -w
4. double click index.html file on /public folder
