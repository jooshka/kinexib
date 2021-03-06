const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    vue_libs: [
      'vue',
      'vuex',
      'lodash'
    ],
    app_map: './app/vue/map.es6',
    app_index: './app/vue/index.es6'
  },
  output: {
    path: __dirname + '/app/js',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.es6$/,
        loader: 'babel-loader',
        query: {
          presets: ['env','es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vue_libs',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }

  //watch: NODE_ENV == 'development'
}
