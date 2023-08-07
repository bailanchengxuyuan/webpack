/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-08-01 11:35:22
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-08-07 15:45:38
 * @FilePath: /webpack/webpack_code/webpack.config.js
 * @Description: 
 */
/* nodejs的核心模块，专门用来处理路径问题 */
const { clear } = require("console")
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path")
module.exports = {
  /* 
  入口
  输出
  加载器
  插件
  模式
  */
  entry: './src/main.js', //相对路径
  output: {
    /* 所有文件的输出路径 */
    /* __dirname nodejs的变量，代表当前文件夹目录 */
    path: path.resolve(__dirname, "dist"), //绝对路径
    /* 文件名 */
    filename: "static/js/main.js",
    /* 自动清空上次打包的内容 */
    clean:true
  },
  module: {
    rules: [
      /* loader配置 */
      {
        test: /\.css$/,/* 只检测.css文件 use下面的代码处理 ，use的执行顺序是从右往左，从下往上*/
        use: [
          "style-loader", //将js中的css通过创建style标签添加html文件中生效
          "css-loader"    //将css资源编译成commonjs的模块到js中
        ],

      },
      {
        test: /\.less$/,/* 只检测.css文件 use下面的代码处理 ，use的执行顺序是从右往左，从下往上*/
        /* loader:xxx 这样的写法只能使用一个loader */
        use: [
          "style-loader", //将js中的css通过创建style标签添加html文件中生效
          "css-loader",   //将css资源编译成commonjs的模块到js中
          "less-loader",  //将less变为css文件
        ],
      },
      {
        test: /\.s[ac]ss$/,/* 只检测.css文件 use下面的代码处理 ，use的执行顺序是从右往左，从下往上*/
        use: [
          "style-loader", //将js中的css通过创建style标签添加html文件中生效
          "css-loader",   //将css资源编译成commonjs的模块到js中
          "sass-loader",  //sass变为css文件
        ],
      },
      {
        test: /\.styl$/,/* 只检测.css文件 use下面的代码处理 ，use的执行顺序是从右往左，从下往上*/
        use: [
          "style-loader", //将js中的css通过创建style标签添加html文件中生效
          "css-loader",   //将css资源编译成commonjs的模块到js中
          "stylus-loader",  //styl变为css文件
        ],
      },
      /*  图片的处理 */
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser:{
          dataUrlCondition:{
            maxSize:4*1024
          }
        },
        generator:{
          /* 输出图片的名字 */
          /* [hash:10]hash值取前10位 、拓展名 、可携带的参数 */
          filename:"static/images/[hash:10][ext][query]",
        }
        
      },
      /*  图片的处理 也可以处理其他资源*/
      {
        test: /\.(ttf|woff2?|map3|map4|avi)$/,
        type: "asset/resource",
       
        generator:{
          /* 输出图片的名字 */
          /* [hash:10]hash值取前10位 、拓展名 、可携带的参数 */
          filename:"static/media/[hash:10][ext][query]",
        } 
        
      },

    ]
  },
  plugins: [
    /* plugin配置 */
    new ESLintPlugin({
      /* 检测文件 */
      context:path.resolve(__dirname,"src")})
  ],
  mode: 'development'

}
