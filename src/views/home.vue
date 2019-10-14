<template>
    <div id="home" class="home">
        <div class="header">
            <mt-header fixed title="vue项目"></mt-header>
        </div>
        <div class="content">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
        <div class="buttom">
          <nav class="mui-bar mui-bar-tab">
			<router-link to="/home/main"  class="mui-tab-item">
            	<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
            </router-link>
			<router-link to="/home/member"  class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item"  to="/home/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/home/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		  </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
        }
    },
    methods: {
        scan(){
            this.$router.push('/scan')
        }
    }
}
</script>
<style lang="scss" scoped>
    .home {
        overflow-x: hidden;
        .header{
        //  wi;
          height: 40px;
        }
        .content{
          height: 89vh;
          background-color: #fff;
          overflow: auto;
        }
        .buttom{
          height: 40px;
        }
        .v-enter {
            // opacity: 0;
            transform: translateX(100%);
            position: absolute;
        }
        .v-leave-to {
            opacity: 0;
            transform: translateX(-100%);
            position: absolute;
            top: 35px;
        }
        .v-enter-active, .v-leave-active{
            transition: 1000ms all ease;
        }
    }
</style>