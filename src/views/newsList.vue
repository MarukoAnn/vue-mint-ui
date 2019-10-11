<template>
   <div id="newsList">
        <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgurl">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.time}}</span>
                            <span>点击: {{item.num}}数</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
   </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: 'newsList',
    data() {
        return {
            newsList: []
        }
    },
    created(){
        this. getnewsList();
    },
    methods: {
        getnewsList(){
            this.$http.post('getnewsList').then(
                value => {
                    console.log(value);
                    if(value.body.status === '1000') {
                        this.newsList = value.body.values;
                        console.log(this.newsList[0].imgurl);
                    }else{
                      Toast('请求失败')
                    }
                } 
            )
        }
    },
}
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li{
           h1 {
             font-size: 14px;
             text-align: left;
           }
           .mui-ellipsis {
               font-size: 12px;
               color: #226aff;
               display: flex;
               justify-content: space-between;
           }
        }
      
    }
</style>