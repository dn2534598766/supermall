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

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/context/goods/GoodsList'
import {itemListenerMixin} from 'common/mixin'
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
    mixins:[itemListenerMixin],
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
            this.position = -position.y
            for(let i = 0;i<this.navigation.length-1;i++){
                if(this.position>=this.navigation[i]){
                    this.$refs.nav.currentIndex = i
                }
            }
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
        GoodsList
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
    height: calc(100% - 44px);
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: white;
}
</style>