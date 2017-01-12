var webpack = require('webpack')
//ע����__dirname����node.js�е�һ��ȫ�ֱ�������ָ��ǰִ�нű����ڵ�Ŀ¼��
module.exports = {
	//devtool: 'eval-source-map',//��������Source Maps��ѡ����ʵ�ѡ�� ���Ӻ� �����Դ�� ���ܶϵ����
	devtool:'source-map',//���Զϵ����
 // entry: './entry.js',//ҳ�������Ѷ���ἰ��Ψһ����ļ�
  entry: {
        entry: "./entry.js" //entry�Ǳ��� ����[]�����õ�
        //֧��������ʽ�������������е�����ģ�飬�������һ��ģ����Ϊ���
       // module: ["./module1", "./module2"]
   },
  
  output: {
    path: __dirname,//������ļ���ŵĵط�
    filename: '[name].bundle.js'//[name] �ǲ��� �����������ļ�����
  },
  //����loaderת����
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}//����ǰ���� ƥ��ʲô�����ļ�,�����ǲ�����2�����͵ļ����� style ��css �м䣡�����ӷ��� ��ʡ��style-loader  �� css-loader
    ]
  },
  //���ز��
  plugins: [
    new webpack.BannerPlugin('This file is created by donglc')
  ]
}