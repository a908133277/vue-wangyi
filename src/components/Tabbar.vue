<template>
    <van-tabbar v-model="active" v-show="ifshow" class="tabbar">
    <van-tabbar-item icon="home-o" to="/home" class="tabbaritem">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/category" class="tabbaritem">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/car" class="tabbaritem" :badge="$store.state.CarData.length">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/about" class="tabbaritem">个人</van-tabbar-item>
</van-tabbar>
</template>
<script>
    export default{
        data(){
            return{
                active:0,
                ifshow:true
            }
        },
        watch:{
            $route:{ //监听$route path为主页面4个显示 tabbar
                handler(newval){
                   switch(newval.path){
                           case "/home":
                               this.ifshow=true
                               this.active=0
                               break;
                            case "/category":
                               this.ifshow=true
                               this.active=1
                               break;
                            case "/car":
                               this.ifshow=true
                               this.active=2
                               break;
                            case "/about":
                               this.ifshow=true
                               this.active=3
                               break;
                            default:
                                this.ifshow=false
                       }
                },
                immediate: true
            }
        }
    }
</script>
<style scoped>
.van-badge__wrapper{
    width: 25%;
}
.Praise{
    background: #fafafa;
}
.tabbar{

   height: 8vh  !important;
}
.tabbaritem{
    align-items: center;
    
}
</style>