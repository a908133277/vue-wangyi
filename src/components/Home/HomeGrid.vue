<template>
    <div class="grid">
        <van-empty image="search" description="搜索商品中" v-if="!rcmdItemList" class="empty"/>
        <van-grid :column-num="2">
            <van-grid-item  v-for="item in rcmdItemList" :key="item.id">
                <div v-if="item.indexRcmdPic">
                    <router-link :to="{path:'/details',query:{itemId:item.id}}">
                        <van-image :src="item.indexRcmdPic.primaryPicUrl" lazy-load/>
                        <div>{{item.indexRcmdPic.name}}</div>
                    </router-link>
                </div>
                <div v-if="item.categoryItem">
                    <router-link :to="{path:'/details',query:{itemId:item.id}}">
                        <van-image :src="item.categoryItem.primaryPicUrl" lazy-load/>
                        <div>{{item.categoryItem.name}}</div>
                    </router-link>
                </div>
                <div v-if="item.pinItem">
                    <router-link :to="{path:'/details',query:{itemId:item.id}}">
                        <van-image :src="item.pinItem.primaryPicUrl" lazy-load/>
                        <div>{{item.pinItem.name}}</div>
                    </router-link>
                </div>
             </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import { getRcmd  } from '../../Http'
    export default{
        name:'homeGrid',
        data(){
            return{
                rcmdItemList:null
            }
        },
        props:{
            categoryId:{
                type:Number,
                default:0
            },
            tabType:{
                type:Number,
                default:0
            }
        },
        async created(){
            // this.$Get(rcmd,{type:this.tabType,size:20,lastItemId:0,categoryId:this.categoryId}).then(res=>{
            //     this.rcmdItemList=res.data.data.rcmdItemList
            // })  
            const RcmdData =await getRcmd({type:this.tabType,size:20,lastItemId:0,categoryId:this.categoryId})
            this.rcmdItemList=RcmdData.data.data.rcmdItemList
        }
    }
</script>
<style>
.grid{
    margin-bottom: 100px;
}
.empty{
    height: 100vh;
}
a{
    color: #666;
}
</style>