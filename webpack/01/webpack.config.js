var webpack = require('webpack')
//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
	//devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项 增加后 会出现源码 不能断点调试
	devtool:'source-map',//可以断点调试
 // entry: './entry.js',//页面引入已多次提及的唯一入口文件
  entry: {
        entry: "./entry.js" //entry是别名 后面[]里面用到
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
       // module: ["./module1", "./module2"]
   },
  
  output: {
    path: __dirname,//打包后文件存放的地方
    filename: '[name].bundle.js'//[name] 是参数 打包后输出的文件名字
  },
  //加载loader转换器
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}//逗号前面是 匹配什么类型文件,后面是采用了2种类型的加载器 style 和css 中间！是连接符号 且省略style-loader  和 css-loader
    ]
  },
  //加载插件
  plugins: [
    new webpack.BannerPlugin('This file is created by donglc')
  ]
}