/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-08-01 11:03:06
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-08-03 16:18:50
 * @FilePath: /demo/webpack_code/src/main.js
 * @Description: 
 */
/* 想要webpack打包，必须进行引入 */
import sum from "./js/sum"; 
import '../src/css/index.css'
import '../src/less/index.less'
import '../src/sass/index.sass'
import '../src/sass/index.scss'
import '../src/stylus/index.styl'
import '../src/css/fonts/iconfont.css'
console.log(sum(1,2));