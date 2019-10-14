
<template>
    <div id="newsInfo" class="newsInfo-container">
        <h3 class="title">新闻详情 ---- {{data.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{data.time}}</span>
            <span>点击: {{data.num}}次</span>
        </p>
        <hr>
        <div class="content" >
            {{data.content}}
        </div>
        <comment-box></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
// 导入 评论子组件
import comment from '../components/comment'
export default {
    name: 'newsInfo',
    data() {
        return {
            id: this.$route.params.id,
            data: ''
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.$http.post('getnewsListInfo', {id: this.id}, {emulateJSONl: false}).then(
                value => {
                    if(value.body.status === '1000') {
                        this.data = value.body.values;
                        console.log(this.data);
                    }else{
                        Toast('请求失败')
                    }
                }
            )
        }
    },
  components: {
      "comment-box": comment
  }
}
</script>
<style lang="scss" scoped>
    .newsInfo-container{
        padding: 0 6px;
        .title{
            font-size: 16px;
            text-align: center;
            color: red;
            margin: 0;
            padding: 15px 0;
        };
        .subtitle{
            display: flex;
            justify-content: space-between;
            color: #226aff;
            font-size: 13px;
        };
        .content{
           overflow: auto;
           background: #fff;
           margin-bottom: 10px;
        }
    }
</style>