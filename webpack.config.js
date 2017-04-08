var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/reactApp/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {

	entry: './reactApp/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [HTMLWebpackPluginConfig]
};