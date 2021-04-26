<template>
   <div>
        <van-row>
            <van-col span="6">
                <CategorySidebar 
                :ItemData="categoryList" 
                :clickID="clickID">
                </CategorySidebar>
                </van-col>
             <van-col span="16" offset="1">
                    <div v-for="(item,index) in categoryList" :key="item.id" >
                        <keep-alive>
                            <CategoryGrid :categoryID="item.id"  v-if="index==activeKey"></CategoryGrid>
                        </keep-alive>
                    </div>
            </van-col>
        </van-row>
        <router-view></router-view>
   </div>
</template>
<script>
import CategorySidebar from '../components/Category/CategorySidebar'
import CategoryGrid from '../components/Category/CategoryGrid'
import { getCategorySimple } from '../Http'
export default {
    name :'category',
    data(){
        return{
            categoryList:[],
            activeKey: 0,
        }
    },
    components:{
        CategorySidebar,
        CategoryGrid,
    },
    methods:{
        clickID(id){
          this.activeKey=id
        }
    },
    async created(){
        // this.$Get(categorySimple,{}).then(res=>{
        //     this.categoryList=res.data.data.categoryList
        // })
        const categoryData = await getCategorySimple()
        this.categoryList=categoryData.data.data.categoryList
    }
}
</script>
<style>
.img{
    height: 100%;
}
.swipe{
    margin: 10px auto;
    width: 95%; 
}
.swipeitem{
   height: 18vh;
}
</style>
