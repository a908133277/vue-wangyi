<template>
    <van-tabs v-model="activeName" sticky swipeable>
        <van-tab
            v-for="item in tabdata.subCategoryList" 
            :title="item.name" 
            :key="item.id"
            :name="item.id"
            :to="{path:'/goods',query:{categoryL1Id:tabdata.id,categoryL2Id:item.id}}"
            >
                <slot name="goods"></slot>
        </van-tab>
    </van-tabs>
</template>
<script>
import { getSubCate } from '../../Http'
    export default{
        name:'goodstab',
        data(){
            return{
                tabdata:[],
                categoryL1Id:0,
                activeName:0
            }
        },
        async created(){
            this.activeName = parseInt(this.$route.query.categoryL2Id)          
            this.categoryL1Id = parseInt(this.$route.query.categoryL1Id)
            // this.$Get(subCate,{categoryId:this.categoryL1Id}).then(res=>{
            //     this.tabdata=res.data.data.category
            // })
            const getSub = await getSubCate({categoryId:this.categoryL1Id})
            this.tabdata=getSub.data.data.category
        },
        activated(){
            this.activeName = parseInt(this.$route.query.categoryL2Id)
            this.categoryL1Id = parseInt(this.$route.query.categoryL1Id)
        },
        watch:{
            activeName(val){
                if(this.activeName!=parseInt(this.$route.query.categoryL2Id)){
                    this.$router.push({path:'/goods',query:{categoryL1Id:this.categoryL1Id,categoryL2Id:val}})
                }
            }
        }
    }
</script>
<style scoped>

.van-tabs__wrap{
    height: 7vh !important;

    align-items: center;
}
.van-tab__text{
    font-size: 2vh !important;
}
</style>