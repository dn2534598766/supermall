<template>
  <div id="detail">
      <detail-nav class="detail-nav"></detail-nav>
      <scroll class="content">
        
        <detail-swiper :top-images="getSwiper"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
      </scroll>
  </div>
</template>

<script>
import DetailNav from './ChildComps/DetailNav'
import {getDetail,Goods,Shop} from 'network/detail'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailBaseInfo from './ChildComps/DetailBaseInfo'
import DetailShopInfo from './ChildComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'

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
        })
    },
    data(){
        return {
            iid:null,
            getSwiper:[],
            goods:{},
            shop:{}
        }
    },
    components:{
        DetailNav,
        getDetail,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll
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