<template lang="">
    <div id="loader">
        <h3 >{{title}}</h3>
        <div class="loader">
            <mt-spinner type="snake" color="#26a2ff" :size="60"></mt-spinner>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loader',
    data() {
        return {
            title: '欢迎进入vue-mint-ui项目'
        }
  },
  created(){
    const that = this;
    const setrouter =  setInterval(function() {
      that.$router.push('/login') 
      clearInterval(setrouter)
    }, 2000)
  }
}
</script>
<style lang="css" scoped>
    .loader {
      position: absolute;
      top: 45vh;
      left: 41vw;
}
</style>