<template>
        <van-sidebar v-model="activeKey" class="sidebar">
        <van-sidebar-item 
            v-for="(item,index) in ItemData"
            :title="item.name" 
            :key="item.id"
            @click="clickID(index)"
            class="sidebaritem"/>
        </van-sidebar>
</template>
<script>
export default{
    data() {
        return {
        activeKey: 0,
        }
    },
    props:{
        ItemData:{
            type:Array
        },
        clickID:{
            type:Function
        }
    }
}
</script>
<style scoped>
    .sidebar{
        overflow: hidden;
        position: fixed;
        margin-top: 10px;
        height: 90%;
        text-align: center; 
        width: 12vh;
    }
    .sidebaritem{
        padding: 20px 5px;
        height: 8vh;
        font-size: 2vh  !important;
    }
</style>