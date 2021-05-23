<template>
  <div  id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banner="banner" />
    <!-- <div>
     <el-carousel >
      <el-carousel-item v-for="item in banner" :key="item.link">
        <a :href="item.link" >
          <img :src="item.image" style="width:100%;height:300px;"/>
        </a>
      </el-carousel-item>
     </el-carousel>
    </div> -->
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods['pop'].list" />

    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
  </div>
</template>

<script>

import HomeSwiper from './ChildComps/HomeSwiper'
import RecommendView from './ChildComps/RecommendView'
import FeatureView from './ChildComps/FeatureView'
import TabControl from './ChildComps/TabControl'

import GoodsList from 'components/context/goods/GoodsList'

import NavBar from 'components/common/navbar/NavBar'

import {getHomeMultidata,getHomeGoods} from 'network/home'



export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    getHomeGoods,
    GoodsList
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
         'pop': {page: 0, list:[]},
         'new': {page: 0, list:[]},
         'sell': {page: 0, list:[]}
      }
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    }
  }
}
</script>

<style>
#home{
  padding-top: 44px;
}
.home-bar{
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  background-color: var(--color-tint);
  color: white;
}

</style>