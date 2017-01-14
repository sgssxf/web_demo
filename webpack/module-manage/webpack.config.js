/**
 * webpack配置文件
 * @Date [2016/12/25]
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
	// entry: ['webpack/hot/only-dev-server', './app/lib/tools.js', './app/app.js'],
	entry: {
        tip: './app/lib/tip.js',
        // bundle: ['webpack/hot/only-dev-server', './app/lib/tools.js', './app/app.js']
        index: ['./app/test.js'],
        // test: ['./app/test.js']
    },
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
        publicPath: '/build/',
        // library: 'tip',
		// libraryTarget: 'umd',
    	// umdNamedDefine: true
	},
	externals: {
        jquery: "jQuery"
	},
	module: {
	    loaders: [{
			test: /\.css$/,
			loader: 'style!css'
	    }, {
			test: /\.less$/,
			loader: 'style!css!less'
	    }, {
			loader: 'url?limit=25000'
	    }]
	},
    devServer: {
        contentBase: './build/',
        historyApiFallback: true,
        noInfo: true,
        inline: true,
        hot: true
    },
	//其它解决方案配置
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
	//插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
