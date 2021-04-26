<template>
<div>
    <div v-if="homeData.newcomerModule">
        <Swipe>
            <van-swipe-item v-for="(item,index) in homeData.newcomerModule.focus" 
            :key="index" 
            class="swipe-item">
                <van-image
                width="auto"
                :src="item.img"
                lazy-load
                />
            </van-swipe-item>
        </Swipe>
        <van-image
        width="100%"
        :src="homeData.newcomerModule.commonConfigModule.brandDescPicUrl"
        lazy-load
        />
        <div class="van-grid-c">
            <van-grid 
            :column-num="9" class="van-grid">
                <van-grid-item v-for="(item,index) in homeData.newcomerModule.kingKongAreaV6" 
                :key="index" :icon="item.picUrls[0]"  
                :text="item.title" />
            </van-grid>
        </div>
        <van-image
        width="100%"
        :src="homeData.newcomerModule.staticResource.pic"
        lazy-load
        />
        <van-image
        v-for="(item,index) in homeData.newcomerModule.operationCfg"
        width="100%"
        :src="item.picUrls[0]"
        lazy-load
        :key="index"
        />
    </div>
    <div>
        <van-tabs  @click="onClick" sticky>
            <van-tab v-for="item in tabList" 
            :name="item.categoryId" 
            :title="item.title" 
            :key="item.categoryId">
                <keep-alive>
                    <HomeGrid :categoryId="categoryId" 
                    v-if="categoryId==item.categoryId" 
                    :tabType="item.tabType">
                    </HomeGrid>
                </keep-alive>
            </van-tab>
        </van-tabs>
    </div>
</div>
</template>
<script>
import Swipe from '../components/Swipe.vue'
import {getIndex , getRcmd } from './../Http'
import HomeGrid from '../components/Home/HomeGrid'
    export default{
        name:'home',
        data(){
            return{
                homeData:{},
                tabList:[],
                categoryId:0
            }
        },
        components:{
            Swipe,
            HomeGrid
        },
        methods:{
            onClick(categoryId){
                this.categoryId=categoryId
            }
        },
        async created(){
            const indexData = await getIndex()
            this.homeData = indexData.data.data
            const RcmdData = await getRcmd()
            this.tabList=RcmdData.data.data.tabList
        }
    }
</script>
<style>
.van-grid-c{
    width: 100%;
    overflow-x:auto;
}
.van-grid-c > .van-grid {
    width: 200%;
}
</style>