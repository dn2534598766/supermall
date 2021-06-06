<template>
  <div id="detail">
      <detail-nav class="detail-nav" @navClick="navClick($event)" ref="nav"></detail-nav>
      <scroll class="content" ref="scroll" :probe-type="3" 
      @scroll="scroll">
        
        <detail-swiper :top-images="getSwiper"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-goods="GoodsInfo" @loadEnd="loadEnd"></detail-goods-info>
        <detail-param :params="paramInfo" ref="params"></detail-param>
        <detail-comment-info :comment-info='commentInfo' ref="comment" ></detail-comment-info>
        <goods-list :goods="getRecommend" ref="getRecommend"></goods-list>
      </scroll>
      <back-top @click.native="top" v-show="isShow" />
      <detail-button-nav @addCart='addToCart'/>
  </div>
</template>

<script>
import DetailNav from './ChildComps/DetailNav'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailBaseInfo from './ChildComps/DetailBaseInfo'
import DetailShopInfo from './ChildComps/DetailShopInfo'
import DetailGoodsInfo from './ChildComps/DetailGoodsInfo'
import DetailParam from './ChildComps/DetailParam'
import DetailCommentInfo from './ChildComps/DetailCommentInfo'
import DetailButtonNav from './ChildComps/DetailButtonNav.vue'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/context/goods/GoodsList'
import {itemListenerMixin,Top} from 'common/mixin'
import {debounce} from 'common/utils'

export default {
    name:'detail',
    created(){
        this.iid = this.$route.params.iid  
        getDetail(this.iid).then(res=>{
            console.log(res)
            const data = res.result
            this.getSwiper = data.itemInfo.topImages
            this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.GoodsInfo = data.detailInfo
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }
            this.getScrollY = debounce(()=>{
            this.navigation = []
            this.navigation.push(0)
            this.navigation.push(this.$refs.params.$el.offsetTop)
            this.navigation.push(this.$refs.comment.$el.offsetTop)
            this.navigation.push(this.$refs.getRecommend.$el.offsetTop)
            this.navigation.push(Number.MAX_VALUE)
            console.log(this.navigation)
            },200)
        })
        getRecommend().then(res=>{
            this.getRecommend = res.data.list
        })

        
        
    },
    mounted(){
    },
    updated(){
        
    },
    data(){
        return {
            iid:null,
            getSwiper:[],
            goods:{},
            shop:{},
            GoodsInfo:{},
            paramInfo:{},
            commentInfo:{},
            getRecommend:[],
            currentIndex:0,
            navigation:[],
            getScrollY:null,
            currentIndex:0,
            position:0
        }
    },
    mixins:[itemListenerMixin,Top],
    methods:{
        loadEnd(){
            this.$refs.scroll.refresh()
            this.getScrollY()
        },
        navClick(index){
            this.currentIndex = index
            this.$refs.scroll.Scroll(0,-this.navigation[index],200) 
        },
        scroll(position){
            this.isShow = (-position.y) >1000
            this.isTabControl = (-position.y) > this.offsetTop
            this.position = -position.y
            for(let i = 0;i<this.navigation.length-1;i++){
                if(this.position>=this.navigation[i] && this.position<this.navigation[i+1]){
                    this.$refs.nav.currentIndex = i
                }
            }

        },
        addToCart () {
            const product = {}
            product.image = this.getSwiper[0]
            // console.log(this.getSwiper[0])
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid
            console.log(product)

            this.$store.dispatch('addCart',product)
            console.log(this.$store.state.cartList)
        }
    },
    components:{
        DetailNav,
        getDetail,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParam,
        DetailCommentInfo,
        GoodsList,
        DetailButtonNav
    }
}
</script>

<style scoped>
#detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: white;
}
.content{
    height: calc(100% - 93px);
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: white;
}
</style>