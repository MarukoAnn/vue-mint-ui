# vue-mint-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 用传统的命令行把修改过后的代码上传到GitHub（码云）
```
1、git add .
```
```
2、git commit -m  "提交信息"
```
```
3、git push
```

## 制作首页App 组件
```
1、完成 Header 区域，使用的是 Mint-UI 中的header组件
```
```
2、制作底部的 Tabbar 区域 ，使用的是 MUI 的 Tabbar.html
```
  + 在制作 购物车 小图标的时候, 操作会多一些;
  + 先把 扩展图标的 css 样式文件 拷贝到项目中；
  + 拷贝 扩展字体库 ttf 文件到项目中。
  + 为 购物车 小图标， 添加如下样式   `mui-icon mui-icon-extra mui-icon-extra-cart`
```
3、要在中间区域放置一个 router-view 展示路由匹配到的组件
```

## 改造 tabbar 为 router-link
```
<router-link to="/home/main"  class="mui-tab-item">
    <span class="mui-icon mui-icon-home"></span>
    <span class="mui-tab-label">首页</span>
</router-link>
```
## 设置路由高亮
```
  linkActiveClass: 'mui-active'  // 覆盖默认的路由高亮的类，默认的类叫做router-link-active
```
## 点击 tabber 中的路由连接，展示对应的路由组件

## 加载首页轮播图数据
```
1、获取数据，如何获取数据呢，使用 vue-resource

```
```
2、使用 vue-resource 的this.$http.get 获取数据
```
```
3、获取到的数据,要保存到 data 身上
```
```
4、使用 v-for 循环渲染 每个 item 项
```
## 改造九宫格

## 实现新闻资讯列表  点击跳转到新闻详情
- 1、把列表中的每一项改造为 router-link, 同时, 在跳转的时候应该提 供唯一的Id标识符
- 2、创建新闻详情的组件页面，NewsInfo.vue
- 3、在 路由模块中，将新闻详情的 路由地址 和组件页面对应起来

## 单独封装一个 comment.vue 评论子组件
1、先创建一个单独的 comment.vue 组件模板
2、在需要使用的 comment 组件的页面中，先手动 导入 comment 组件
- `import comment form './comment.vue/`
3、在父组件中，使用 `components` 属性, 将其导入 comment 组件，注册为自己的 子组件
4、将注册子组件时候的，注册名称，以 便签的形式，在页面引用。

## 实现点击加载更多评论的功能
1、为加载更多按钮， 绑定点击事件，在事件中， 请求下一页数据
2、点击加载更多，让pageIndex++， 然后重新调用 this.getComments() 方法重新获取最后一页的数据
3、为了防止新数据 覆盖老数据的状况，我们需要点击加载更多的时候，每当获取到新的数据，应该让老数据 调用数组的concat(拼接)方法，拼接上新数组

## 发表评论
1、把文本框做数据双向绑定
2、为发表按钮绑定一个事件
3、效验评论内容是否为空，如果为空，则提示用户，评论内容不能为空
4、通过vue -resource 将评论消息提交给服务器
5、当发表评论ok后，重新刷新列表，以查看最新的评论
 - 如果调用 getcomments 方法重新刷新评论列表的话，只可能得到 最后一二页的评论，前几页的评论 获取不到，
 - 换一种思路：当评论成功后，在客户端，手动拼接出一个 最新的评论对象，然后 调用的数组的unshift 方法，把最新的品论，追加到data 中comments 的开头
 这样就能完美实现评论列表的需求。

 ## 绘制 图片列表 组件样式结构并美化
 1、制作顶部的滑动条
 2、制作 底部的图片列表

 ### 制作顶部滑动条的坑：
 1、需要借助于MUI中的 tab-top-webview-main.html
 2、需要把 slidar 区域的 mui-fullccreen类去掉
 3、滑动条无法正常的触发滑动，通过检查官方文档，发现这是JS组件，需要初始化一下：
  - 导入 mui.js
  - 调用官方提供的 方式 去初始化：
```
mui('.mui-scroll-wrapper').scroll(
   deceleration: 0.0005 // flick 减速系数，系数越大，滚动的越慢，滚动的距离越小，默认值0.0006")//100毫秒滚动到顶
```
4、我们在初始化 滚动条的时候, 导入的 mui.js , 但是，控制台报错：
```
 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```
+ 经过我们合理的推测，觉得，可能是mui.js 中用到了  'caller', 'callee', and 'arguments'  的东西，但是，webpack 打包好的bundle.js 中，
默认是启动严格模式的 , 所以, 这两者冲突了
+ 解决方案：
   - 1、把 mui.js 中的非严格模式的代码改掉：但是不现实
   - 2、把webpack打包时候的远哥模式禁用掉;