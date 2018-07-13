module.exports = {
  entry: './src/js/entry.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    publicPath: __dirname + '/out',//添加静态资源, 否则会出现路径错误
    path: __dirname + '/out'
  },
  module : {
    rules: [
        {
          test: /.js$/, 
          use: ['babel-loader']
        },
        {
          test: /.css$/, 
          use: ['style-loader', 'css-loader']
        },/*解析css, 并把css添加到html的style标签里*/
        //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
        {
          test: /.(jpg|png|gif|svg)$/, 
          use: ['url-loader?limit=8192&name=./[name].[ext]']
        },/*解析图片*/
        {
          test: /.less$/, 
          use: ['style-loader', 'css-loader', 'less-loader']
        }/*解析less, 把less解析成浏览器可以识别的css语言*/
    ],
    plugins:[
      require('autoprefixer'),
      new webpack.BannerPlugin('版权所有，翻版必究')
    ]
  }
}