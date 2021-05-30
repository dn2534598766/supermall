<template>
  <div  id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tabControl" v-show="isTabControl" @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl1" />
    <scroll class="content"
     ref="scroll" 
     :probe-type="3" 
     :pull-up-load="true"
     @scroll="contentPosition"
     @pullingUp="loadMore">
      <home-swiper :banner="banner" @swiperLoad="swiperLoad" />
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
      <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="top" v-show="isShow" />


  </div>
</template>

<script>

import HomeSwiper from './ChildComps/HomeSwiper'
import RecommendView from './ChildComps/RecommendView'
import FeatureView from './ChildComps/FeatureView'
import TabControl from './ChildComps/TabControl'

import GoodsList from 'components/context/goods/GoodsList'
import BackTop from 'components/context/backTop/BackTop'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import {debounce} from 'components/common/util/Debounce'

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
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
         'pop': {page: 0, list:[]},
         'new': {page: 0, list:[]},
         'sell': {page: 0, list:[]}
      },
      current:'pop',
      isShow:false,
      isTabControl:false,
      offsetTop:0,
      saveY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.current].list
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.Scroll(0,this.saveY)
    
    
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods:{
    tabClick(index){
      switch(index){
        case 0:
          this.current='pop'
          break;
        case 1:
          this.current='new'
          break;
        case 2:
          this.current='sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    top(){
      this.$refs.scroll.Scroll(0,0,500)
    },
    contentPosition(position){
      this.isShow = (-position.y) >1000
      this.isTabControl = (-position.y) > this.offsetTop
    },
    loadMore(){
      this.getHomeGoods(this.current)
      
    },
    swiperLoad(){
      console.log(this.$refs.tabControl2.$el.offsetTop)
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    


    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.scroll.refresh()
      })
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    }
  }
}
</script>

<style scoped>
#home{
 /* padding-top: 44px; */
 height: 100vh;
 /* position: relative; */
}
.home-bar{
  /* position: fixed;
  z-index: 9; 
  left: 0;
  top: 0;
  right: 0; */
  background-color: var(--color-tint);
  color: white;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.tabControl{
  z-index: 9;
}
</style>