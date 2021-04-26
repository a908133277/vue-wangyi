<template>
<div>
    <van-nav-bar
    title="购物车"
    left-text="返回"
    left-arrow
    @click-left="$router.go(-1)"
    />
    <van-empty description="购物车为空" v-if="this.CarData.length==0">
        <van-button round type="danger" class="bottom-button" @click="$router.push('/category')">去购物</van-button>
    </van-empty>
    <div>
        <div v-for="(item ,index) in CarData" :key="index" class="item">
            <div>
                <van-checkbox v-model="item.check"></van-checkbox>
            </div>
            <van-swipe-cell class="swipe-cell">
                <van-card
                    :price="item.Price"
                    :desc="item.describe"
                    :title="item.name"
                    class="goods-card"
                    :thumb="item.img"
                >
                <div  slot="bottom" class="bottom">
                    <van-stepper v-model="item.num" disable-input > </van-stepper>
                </div>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button"  @click="delate(index)"/>
                </template>
               
                </van-swipe-cell>
        </div>
    </div>
    <van-submit-bar :price="price*100" button-text="提交订单" class="submit-bar">
        <van-checkbox @click="cheakall" v-model="cheakclick">全选</van-checkbox>
    </van-submit-bar>
</div>
</template>
<script>
import { Dialog } from 'vant';
    export default{
        name:'car',
        data(){
            return{
                CarData:this.$store.state.CarData,
                cheakclick:false,
            }
        },
        created(){
            console.log(this.$store.state.CarData)
        },
        methods:{
           delate(index){
                Dialog.alert({
                message: '是否要删除该商品',
                showCancelButton : true
                }).then(() => {
                this.$store.commit('delateCarData',index)
                }).catch(()=>{

                })
            },
            cheakall(){
                if(this.cheakclick==true){
                    this.$store.commit('checkAll') 
                }else{
                    this.$store.commit('checkNoAll')
                }
            }
        },
        computed:{
            price(){
                if( this.CarData.length>=1){
                    let arr = this.CarData.filter((item)=>{
                        if(item.check==true){
                            return item
                        }
                    })
                    if(arr.length>=2){
                        return arr.reduce((pre,next)=>{

                            if(typeof pre=='object'){
                                return pre.Price*pre.num+next.Price*next.num  
                            }else{
                                return pre+next.Price*next.num  
                            }  
                        }) 
                    }else if(arr.length==1){
                        return arr[0].Price*arr[0].num
                    }else{
                        return 0
                    }
                }else{
                    return 0
                }
            }
        },
        watch:{
            '$store.state.CarData':{
                handler(newval){
                    let arr = [...newval]
                    if( arr.length>=1){
                     arr = this.CarData.filter((item)=>{
                        if(item.check==true){
                            return item
                        }
                    })
                    if(arr.length==newval.length){
                        this.cheakclick=true
                    }else{
                        this.cheakclick=false
                    }
                    }
                },
                immediate:true,
                deep:true
            }
        }
    }
</script>
<style>
 .content {
    padding: 16px 16px 160px;
  }
.bottom-button {
    width: 160px;
    height: 40px;
  }
.van-card__price{
    color: brown;
}
.swipe-cell{
    width: 100%;
}
.item{
    margin-top: 2vh;
    padding-left: 5vw;
    background: #fafafa;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
  .goods-card {
    margin: 0;
  }

  .delete-button {
    height: 100%;
  }
.submit-bar{
    margin-bottom: 8vh;
   
}
.bottom{
    float: right;
}
</style>