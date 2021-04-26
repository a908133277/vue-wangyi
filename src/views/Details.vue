<template>
    <div>
        <van-nav-bar
        title="商品"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <Swipe>
            <template v-for="(item,index) in datailsData.itemDetail">
                <van-swipe-item :key="index" v-if="index!='detailHtml'">
                    <van-image width="100%" :src="item" lazy-load/>
                </van-swipe-item>
            </template>
        </Swipe>
        <div>
            <div class="banner" v-if="datailsData.bigPromotion" :style="{background:'url('+this.datailsData.bigPromotion.bannerContentUrl+')'}">
                <div class="banner_title">
                    {{datailsData.bigPromotion.promoTitle}}
                </div>
                <div class="Price">
                    <span class="activityPrice"><span class="P">￥</span>{{datailsData.bigPromotion.activityPrice}}</span> 
                    <span class="retailPrice" v-if="datailsData.bigPromotion.retailPrice">￥{{datailsData.bigPromotion.retailPrice}}</span>
                </div>
            </div>
            <span class="activityPrice" v-else><span class="P">￥</span>{{datailsData.retailPrice}}</span> 
        </div>
        <div class="name">{{datailsData.name}}</div>
        <div class="Praise">
            <span class="goodCmtRateLeft">推荐理由</span>
            <span class="goodCmtRate">好评率  <span class="goodCmtRateColor" v-if="datailsData.itemStar">{{datailsData.itemStar.goodCmtRate}}</span></span>
            <div class="PraiseList" v-for="(item,index) in datailsData.recommendReasons" :key="index"><span class="PraiseList_index">{{index+1}}</span>{{item}}</div>
        </div>
        <div>
        <van-image width="100%" :src="this.datailsData.welfareCard.picUrl" lazy-load v-if="this.datailsData.welfareCard" /> 
        </div>
        <div v-if="this.datailsData.itemDetail" v-html="this.datailsData.itemDetail.detailHtml" class="detailHtml"></div>
        <van-action-sheet v-model="show" title="商品属性选择">
            <div class="content">
                <div v-for="(item,index) in datailsData.skuSpecList" :key="item.id" class="att_div">
                    <div class="title1">{{item.name}}</div>
                    <div v-for="list in item.skuSpecValueList" :key="list.id">
                        <span class="details_value" @click="changeRadio(index,list.id)" :style="list.id===attrId[index]?{color:'#f00'}:{color:'#000'}">{{list.value}}</span>
                    </div>
                </div>
                <div class="title2">数量</div>
                <van-stepper v-model="value" class="stepper" disable-input/>
                <van-goods-action>
                    <van-goods-action-button type="warning" text="加入购物车" @click="addcar"/>
                    <van-goods-action-button type="danger" text="立即购买" />
                </van-goods-action>
            </div>
        </van-action-sheet>
        <GoodsAction :oncar="oncar"></GoodsAction>
    </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant';
import GoodsAction from '../components/GoodsAction'
import Swipe from '../components/Swipe'
import { getDetail } from '../Http'
export default{
    data(){
        return{
            datailsData:{},
            show:false,
            value:0,
            attrId:[],
        }
    },
    components:{
        Swipe,
        GoodsAction
    },
    methods:{
        oncar(){
            this.show=true
        },
        addcar(){
             if(this.attrId.length==this.datailsData.skuSpecList.length){
                let arr = [...this.$store.state.CarData]
                if( arr.length>=1){
                    arr = this.$store.state.CarData.filter((item)=>{
                        if(item.id!=this.datailsData.id){
                            return item
                        }
                    })
                    if(arr.length==this.$store.state.CarData.length){
                    this.addcardata()
                        Toast('已添加购物车');
                    }else{
                        Toast('该商品以存在');
                    }
                }else{
                   this.addcardata()
                   Toast('已添加购物车');
                }
            }else{
                Toast('未选取商品属性');
            }
        },
        changeRadio(index,listid){
            Vue.set(this.attrId,index,listid)
        },
        addcardata(){
            this.$store.commit('setCarData',
            {id: this.datailsData.id,
            attrId: this.attrId,
            name: this.datailsData.name,
            check: true,
            img: this.datailsData.primaryPicUrl,
            Price: parseInt(this.datailsData.retailPrice),
            num: this.value,
            })
        }
    },
    async activated(){
        const Detail = await getDetail({itemId:parseInt(this.$route.query.itemId)})
        this.datailsData=Detail .data.data
        this.detailHtml=this.datailsData.itemDetail.detailHtml
    }
}
</script>
<style>
.att_div{
    overflow: hidden;
}
.radio_btn .van-radio{
    display: none;
}
.title1{
    font-size: 16px;
    margin-top: 15px;
    clear: both;
}
.title2{
    margin: 5px;
    clear: both;
}
.stepper{
    margin-bottom: 10vh;
}
.stepper button, .stepper input{
    font-size: 16px;
    color: #000;
    margin: 10px 3px;
    display: inline-block;
    height: 40px;
    width:40px
}
.details_value{
    padding: 10px;
    border: 1px solid #666;
    border-radius: 2px;
    float: left;
    margin: 10px;
}
.content{
    padding: 20px;
}
.Price1{
    font-size: 2.3vh;
    font-weight: bold;
    color: brown;
    padding-right: 10px;
}
.retailPrice{
    font-size: 2.5vh;
    color: #fff;
    text-decoration:line-through;
}
.Price{
    margin-top: 10px;
}
.P{
    font-size: 2vh;
}
.activityPrice{
    padding: 10px;
    color: brown;
    font-size: 4vh;
}
.banner_title{
    color: #fff;
    font-size: 2.5vh;
}
.banner{
    padding: 8px;
    position: relative;
    height: 9vh;
}
.PraiseList_index{
    float: left;
    display: table-cell;
    border: 1px solid brown;
    border-radius: 50%;
    height: 2vh;
    width: 2vh;
    text-align: center;
    line-height: 2vh;
    margin-right: 10px;
    font-size: 1.5vh;
}
.PraiseList{
    clear: both;
    overflow: hidden;
    font-size: 2vh;
    padding: 0.5vh 1vh;
    margin-right: 10px;
}
.goodCmtRateLeft{
    float: left;
    font-size: 2vh;
    height: 3vh;
    padding: 1vh;
    }
.goodCmtRate{
    float: right;
    height: 3vh;
    padding: 1vh;
}
.goodCmtRateColor{
    font-size: 2.5vh;
    color: brown;
    
}
.name{
    font-size: 2.8vh;
    padding: 1vh;
}
.detailHtml{
    width: 100%;
}
.detailHtml img{
    width: 100%;
    display: block;
    float: left;
}
.detailHtml p{
    margin: 0;
    padding: 0;
}
</style>