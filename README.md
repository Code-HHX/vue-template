<!--
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 14:14:05
 * @Description:
-->

# vue2-template

#### 介绍

vue2.6.10 模板 + router + vuex + less

#### 软件架构

#### 安装教程

1. npm install axios --save //安装 axios

H5 适配 Rem 解决方案

1. npm i postcss-pxtorem --save-dev //PostCSS 插件,用于将 px 单位转化 rem 单位
2. npm i -S amfe-flexible //用户设置 rem 基准值 在 main.js 引用 [import 'amfe-flexible']
3. PostCSS 配置-新建 postcss.config.js
   module.exports = {
   plugins:{
   'postcss-pxtorem':{
   rooValue:37.5,// 设计图页面尺寸如果是 750 就填 75,是 640 就填入 64,为了适配 vantUI 我们保持和 vant 官方一致
   propList:['*']
   }
   }
   }
4. 如果 postcss-pxtorem 的版本过高，降回 5.1.1
   //num i postcss-pxtorem@5.1.1

#### 使用说明

1. npm run dev 开发模式
2. npm run test 测试模式
3. npm run prod 生产模式
4. npm run build:test 测试环境打包
5. npm run build:prod 生产环境打包

#### 参与贡献

#### 特技
