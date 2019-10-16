<template>
    <div id="comment" class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea  placeholder="请输入要BB的内容(最多不超过120字)"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item, i) in comments" :key="item.id">
           <div class="cmt-item">
               <div class="cmt-title">
                 第{{i}}楼 &nbsp;&nbsp; 用户: {{ item.user_name}}&nbsp;&nbsp; 发表时间： {{item.add_time | dateFormat}}
               </div>
               <div class="cmt-body">
                  {{item.comment === 'undefined' ? '此用户很懒,什么都没有评论' : item.comment}}
               </div>
           </div>
        </div>
        <mt-button type="danger" size="large" plain  @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import  Toast from 'mint-ui'
export default {
    name: 'comment',
    data() {
        return {
            pageIndex: 1, // 默认展示第一页数据
            comments: [] // 所有的评论数据
        }
    },
    created(){},
    methods: {
        getComments(){
            this.$http.get("api/getcomments/" + this.id + "?pageindex" + this.pageIndex)
            .then( result => {
                if(result.body.status === 0) {
                    this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast("获取评论失败")
                }
            })
        },
        getMore(){
            this.pageIndex ++;
            this.getComments()
        },
        postComment(){
            if(this.msg.trim().length === 0) {
                return Toast("评论内容不能为空")
            }
            // 发表评论 
            // 参数1： 请求URL地址
            // 参数2： 提交给服务器的数据对象 （content： this.msg）
            this.$http.post("api/postcomment/" + this.$router.params.id, {comment: this.msg.trim()})
            .then(result => {
                if(result.body.status === 0){
                    // 1、拼接一个评论属性
                    var cmt = {user_name: '匿名用户',
                    add_time: Date.now(),
                    comment: this.msg.trim()}
                    this.comments.unshift(cmt)
                    this.msg = "";
                }
            })
        }
    },
    props: ["id"]
}
</script>
<style lang="scss">
    .comment{
        text-align: left;
        overflow: auto;
        margin-bottom: 5px;
        h3{
            font-size: 18px;
            font-weight: bold;
        }
        hr {
            margin: 10px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
       }
       .cmt-list {
           margin: 5px 0;
           .cmt-item{
                font-size: 13px;
             .cmt-title {
                 line-height: 30px;
                 background: #ccc;
             }
             .cmt-body {
                 line-height: 35px;
                 text-indent: 2em;
             }
           }
       }
    }
</style>