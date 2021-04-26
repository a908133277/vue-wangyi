<template>
    <div>
        <GoodsTab>
            <GoodsGrid slot="goods"></GoodsGrid>
        </GoodsTab>
    </div>
</template>
<script>
import GoodsTab from '../components/Goods/GoodsTab'
import GoodsGrid from '../components/Goods/GoodsGrid'
    export default{
        name:'goods',
        data(){
            return{
            }
        },
        components:{
            GoodsTab,
            GoodsGrid
        },
    }
</script>
<style>

</style>