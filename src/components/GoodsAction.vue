<template>
    <van-goods-action class="goods-action">
        <van-goods-action-icon icon="wap-home-o" text="首页"  @click="$router.push('/home')"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/car')" :badge="$store.state.CarData.length"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="oncar()" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
</template>
<script>
    export default{
        name:'goodsAction',
        props:{
          oncar:Function
        }
    }
</script>
<style>
.van-goods-action{
    height: 8vh;
}
.van-goods-action button{
    height: 6vh;
}
</style>