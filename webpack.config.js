 var path = require('path');

module.exports = {
    output: {
        path: __dirname + '/dist/',
        filename: 'tweet-selected-text.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};