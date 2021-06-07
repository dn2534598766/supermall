<template>
  <div class="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{getLength}})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list :goods="cartList"/>
    </scroll>
    <cart-bottom />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
import CartList from './ChildComps/CartList.vue'
import Scroll from 'components/common/scroll/Scroll'
import CartBottom from './ChildComps/CartBottom'

export default {
    name:'Cart',
    components:{
      NavBar,
      CartList,
      Scroll,
      CartBottom
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
  z-index: 10000;
}
/* .cart{
  height: 100%;
} */
.content{
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>