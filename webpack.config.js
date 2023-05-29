const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry : './src/index.js',
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist'),
        clean : true
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDoApp',
			hash: true,
            filename: 'index.html',
			template: './index.html',
        }),
      ]
}