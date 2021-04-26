<template>
    <div>
        <van-grid :border="false" :column-num="2" slot="goods" class="goods">
            <van-grid-item v-for="item in goodsdata" :key="item.id" class="item">
                <router-link :to="{path:'/details',query:{itemId:item.id}}">
                    <van-image :src="item.listPicUrl" class="van-image__img" lazy-load/>
                    <div class="goodstext">
                        <div class="goodstitle">{{item.name}}</div>
                            <div class="price">
                                <span class="newprice" v-if="item.activityPrice">￥{{item.activityPrice}}</span>
                                <span :class="{oldprice:item.activityPrice,newprice:!item.activityPrice}">￥{{item.retailPrice}}</span>
                            </div>
                        </div>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import { getItems } from '../../Http'
    export default{
        name:'goodsgrid',
        data(){
            return{
                 goodsdata:[],
                 categoryL1Id:0,
                 categoryL2Id:0
            }
        },
        props:{
            GoodsGridQuery:{
                type:Object
            }
        },
        async created(){
            this.categoryL1Id = parseInt(this.$route.query.categoryL1Id)
            this.categoryL2Id = parseInt(this.$route.query.categoryL2Id)
            // this.$Get(l2Items2,{categoryL1Id:this.categoryL1Id,categoryL2Id:this.categoryL2Id}).then(res=>{
            //     this.goodsdata=res.data.data.itemList
            // })
            const getItem = await getItems({categoryL1Id:this.categoryL1Id,categoryL2Id:this.categoryL2Id})
            this.goodsdata=getItem.data.data.itemList
        },   
    }
</script>


<style scoped>
.item{
    height: 40vh;
    padding: 1vh;
    overflow: hidden;
}
.van-image__img{
    overflow: hidden;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 20vh;
}
.goodstext{
    margin: 3vh 0;
    overflow: hidden;
}
.goods{
    margin:2vh 0;
}
.goodstitle{
    padding: 0.5vh;
    font-size: 1.8vh;
    color: #000;
    overflow: inherit;
}
.price{
    margin: 1vh 0;
}
.newprice{
    font-size: 2.3vh;
    font-weight: bold;
    color: brown;
    padding-right: 10px;
}
.oldprice{
    font-size: 2.3vh;
    color: #333;
    text-decoration:line-through;
    font-weight: 600;
}

</style>