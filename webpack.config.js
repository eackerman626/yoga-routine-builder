module.exports = {
	entry: ['@babel/polyfill', './client/index.js'], // make sure entry point is index.js in client folder
	mode: 'development',
	output: {
		path: __dirname,
		filename: './public/bundle.js', // make sure output is bundle.js in public folder
	},
	devtool: 'source-maps',
	devServer: {
		contentBase: './public',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
