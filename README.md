## wxPayment

> a vue project

* 结合vue的移动端微信支付的项目,兼容适配安卓，苹果手机。


### 技术栈

前端：less、ES6、webpack、vue-cli、vue2、vuex、vue-router、axios

后端：java、Mysql   * java，Mysql不在此展示

Vue2：采用最新Vue2的语法:grin:

Vuex：实现不同组件之间的状态共享:v:

vue-router：单页应用路由管理必备:sunglasses:

axios：发起http请求:wink:

less：css预处理语言:muscle:

Webpack：自动化构建工具，大部分配置vue-cli脚手架已经弄好了，很方便。:smirk:

ES6：采用ES6语法，这是趋势。:clap:

localStorage(HTML5)：本地存储，保存用户个性化设置。:blush:

CSS3：CSS3动画及样式。:+1:



## Build Setup

```
bash

git clone https://github.com/moveondo/wxPayment.git

# install dependencies
npm install

# serve with hot reload at localhost:8086
npm run dev

# build for production with minification
npm run build

```

#### 注：前端使用ES6的很多新特性，所以NodeJs 必须是6.0稳定版本，我使用的版本是8.9.0


### 说明

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

开发环境 Mac、Chrome、nodejs 8.9.0

#### 注：此项目纯属个人爱好，代码测试及学习使用，不用做任何商业活动。


>  vue-cli 入门建议参考 [基于VUE2.5仿天猫移动端首页的SPA](https://github.com/moveondo/VUE-Taobao)

>  node爬虫建议参考 [node+ejs爬上海链家房屋价格(张江地区租房)信息,promise,eventproxy,express,koa框架使用](https://github.com/moveondo/nodeJs-Reptile)  

> node框架express，koa 建议参考[nodejs框架-Express,Koa](https://github.com/moveondo/NodeJsFrame)


> vue + element-ui 的后台管理系统 建议参考 [ vue + element-ui 的后台管理系统](https://github.com/moveondo/vue-ManageSystem)

> 如果你想学习socket 建议参考 [vue全家桶+node.js+socket打造的智能聊天及新闻社区](https://github.com/moveondo/CloudNews)



### 目标功能

- [x] 登录、注册（100%）
- [x] 引导页（100%）
- [x] 协议（100%）
- [x] 服务报告（100%）

### 目录结构

<pre>
├── build			// webpack及Node相关配置
├── config			// 项目dev和prod环境的配置
├── dist			// 项目build打包之后的目录
├── node_modules		// npm包
├── index.html			// 项目入口文件
├── package.json		// 项目描述文件
├── src					// 前端目录
│   ├── assets				// 图片资源
│   ├── components			// 项目所有组件，每个文件头部都有组件名称注释
│   ├── router				// Vue路由
│   ├── store				// Vuex状态管理
│   ├── App.vue				// 主页面 
│   └── main.js				// Webpack 预编译入口
├── static			// 前端公用静态文件目录
│   ├── css         
│   ├── images          
│   ├── js     
│   ├── less         
│   └── upload
├── .babelrc			// ES6等babel的一些配置
├── .editorconfig		// 编辑器的一些配置
├── .eslintignore		// 忽略语法检查的目录文件，一般是忽略build和config目录
├── .eslintrc.js		// eslint的配置文件
├── load.html      //循环检测接口
├── payment.html   //获取服务价格及微信支付
</pre>

 
