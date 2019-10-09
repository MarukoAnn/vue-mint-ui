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