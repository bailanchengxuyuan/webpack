/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-08-07 15:46:57
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-08-07 15:47:28
 * @FilePath: /webpack/webpack_code/.eslintrc.js
 * @Description: eslint的配置文件
 */
module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },
};