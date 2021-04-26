<template>
    <div>
        <Swipe class="swipe" v-if="category.focusBannerList">
            <van-swipe-item  v-for="item in category.focusBannerList" 
                :key="item.id"
                class="swipeitem">
            <van-image
                :src="item.picUrl"
                class="img"
                lazy-load/>
            </van-swipe-item>
        </Swipe>
       <van-grid :border="false" 
        :column-num="3"
        v-for="list in category.categoryGroupList"
        :key="list.id"
        class="grid"
        >
            <van-divider 
            :style="{ color: '#1989fa', borderColor: '#1989fa' , height: '20px',width:'100%',margin:'40px 0 0 0'}">
                {{list.name}}
            </van-divider>
            <van-grid-item v-for="item in list.categoryList" 
            :key="item.id">
                <router-link :to="{path:'/goods',query:{categoryL1Id:item.superCategoryId,categoryL2Id:item.id}}">
                    <van-image :src="item.bannerUrl"  width="100%" lazy-load/>
                    <div class="grid_text">{{item.name}}</div>
                </router-link>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import { getSubCate } from '../../Http'
import Swipe from '../Swipe'
export default{
    data(){
        return{
            category:{}
        }
    },
    components:{
        Swipe
    },
    async created(){
        // this.$Get(subCate,{categoryId:this.categoryID}).then(res=>{
        //     this.category=res.data.data.category
        // })
        const getGridData = await getSubCate({categoryId:this.categoryID})
        this.category=getGridData.data.data.category
    },
    props:{
        categoryID:{
            type:Number
        },
    }
}
</script>
<style>
    .grid{
        margin-bottom: 50px;
    }
    .grid_title{
        font-size: 20px;
        color: #666;
        width: 100%;
        margin: 20px 0 0 0;
    }
    .grid_text{
        text-align: center;
        font-size: 2vh;
        color: #666;
        width: 100%;
        height: 28px;
    }
</style>