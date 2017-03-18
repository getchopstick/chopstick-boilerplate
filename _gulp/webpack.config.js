// to run in production use NODE_ENV=production gulp webpack
var webpack = require('webpack');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|vendor|bower_components)/,
            loader: 'babel-loader',
        }]
    },
    plugins: []
};

if (inProduction) {
    // enable for source-map
    // module.exports.devtool = 'source-map';
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    );
}
