module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, 
        { 
          test: /\.modernizrrc\.json$/,
          loader: "webpack-modernizr-loader!json-loader"
         }]
    },
    resolve: {
      alias: {
        modernizr$: __dirname +  "/.modernizrrc.json"
      }
    }
};
