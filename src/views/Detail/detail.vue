<template>
  <div>
      <detail-nav></detail-nav>
      <detail-swiper :top-images="getSwiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNav from './ChildComps/DetailNav'
import {getDetail,Goods} from 'network/detail'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailBaseInfo from './ChildComps/DetailBaseInfo'

export default {
    name:'detail',
    created(){
        this.iid = this.$route.params.iid  
        getDetail(this.iid).then(res=>{
            console.log(res)
            const data = res.result
            this.getSwiper = data.itemInfo.topImages
            this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
        })
    },
    data(){
        return {
            iid:null,
            getSwiper:[],
            goods:{}
        }
    },
    components:{
        DetailNav,
        getDetail,
        DetailSwiper,
        DetailBaseInfo
    }
}
</script>

<style>

</style>