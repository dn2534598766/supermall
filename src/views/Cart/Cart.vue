<template>
  <div class="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{getLength}})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list :goods="cartList"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
import CartList from './ChildComps/CartList.vue'
import Scroll from 'components/common/scroll/Scroll'

export default {
    name:'Cart',
    components:{
      NavBar,
      CartList,
      Scroll
    },
    computed:{
      ...mapGetters(['getLength','cartList'])
    }
}
</script>

<style scoped>
.nav-bar{
  height: 44px;
  background-color: var(--color-tint);
  color: white;
}
/* .cart{
  height: 100%;
} */
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>