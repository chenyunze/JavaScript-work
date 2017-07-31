const path = require('path');
module.exports = {
	entry:{
		second:'./second.js'
	},
	output:{
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	}
	module: {
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader'
			}
		]
	}
}
