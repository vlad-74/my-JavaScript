module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclue: /(node_modules|bower_components)/
      }
    ]
  }
};
