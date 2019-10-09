<template>
    <div id="login">
       <mt-header fixed :title="logintitle"></mt-header>
       <div>
           <label for="">用户名：</label>
          <input type="text" class="form-control">
       </div>
       <mt-button type="primary" @click="login">登录</mt-button>
    </div>
</template>
<script>
// 按需导入 toast 组件
import { Toast } from 'mint-ui';

export default {
    name: 'login',
    data() {
        return {
            logintitle: '登录'
        }
    },
    methods: {
        login(){
            this.$router.push('/home/main');
            Toast({
                message: '登录成功',
                position: 'bottom',
                duration: 1000,
            })
        }
    }
}
</script>
<style scoped  lang="scss">
.mytoast {
        //  background: red !important;
         color: red !important;
     }
</style>