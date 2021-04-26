<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <slot></slot>
    </van-swipe>
</template>
<script>
export default{

}
</script>
<style scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
  .my-swipe{
    height: auto;
    
  }
</style>