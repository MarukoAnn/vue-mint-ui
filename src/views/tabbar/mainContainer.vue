<template >
    <div id="mainpage"  class="main">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in images" :key="item.id">
                <img :src="item.url">
            </mt-swipe-item>
        </mt-swipe>
    
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="main/newsList">
                    <img src="../../assets/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            
                    <img src="../../assets/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a>
            </li>
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: 'mainpage',
    data() {
        return {
            images: ''
        }
    },
    created(){
        this.getBanner();
    },
    methods: {
        getBanner() {
            this.$http.post('getImageList').then(
                result => {
                    if(result.body.status === '1000') {
                      this.images = result.body.values;
                    }else {
                        Toast('请求失败')
                    }
                }
            )
        }
    },
}
</script>
<style lang="scss" scoped>
.main{
  .mint-swipe{
      height: 25vh;
      .mint-swipe-item {
          &:nth-child(1) {
              background-color: sandybrown;
          }
          &:nth-child(2) {
              background-color: goldenrod;
          }
          &:nth-child(3) {
              background-color: burlywood;
          }
          img {
              width: 100%;
              height: 100%;
          }
      }
  }
  .mui-grid-view.mui-grid-9{
      background-color: #fff;
      border: 0;
      img {
          width: 60px;
          height: 60px;
      }
      .mui-media-body{
          font-size: 15px;
      }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border: 0;
  }
}

</style>