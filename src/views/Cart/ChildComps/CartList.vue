<template>
    <div class="cart-list">
        <!-- <li v-for="(item,index) in goods"  :key="index">{{item}}</li> -->
        <!-- <check-btn></check-btn> -->
        <cart-list-item  v-for="(item,index) in cartList"
         :key="index"
         :goods="item"/>
    </div>
</template>

<script>

import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
    name:'CartList',
    
    components:{

        CartListItem
    },
    computed:{
      ...mapGetters(['getLength','cartList'])
    }
}
</script>

<style scoped>

</style>