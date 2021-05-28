<template>
    <div>
      <swiper>
            <swiper-item  v-for="(item, index) in banner" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="swiperLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data(){
    return {
      control:true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    swiperLoad(){
      
      if(this.control){
        this.$emit('swiperLoad')
        this.control=false
      }
    }
  }
}
</script>

<style>

</style>
