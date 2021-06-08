<template>
  <div  class="cart-bottom">
      <div class="checked">
          <check-btn class="check-btn"
           :is-check="isCheck"
           @click.native="clickCheck"
           />
          <span class="check-text"> 全选</span>
      </div>
      <div class="price">
          <div class="price-text">合计:￥{{totalPrice}}</div>
      </div>
      <div class="count">
          <div>去计算{{checkLength}}</div>
      </div>
  </div>
</template>

<script>
import CheckBtn from 'components/context/checkBtn/CheckBtn'
import {mapGetters} from 'vuex'
export default {
    name:'CartBottom',
    components:{
        CheckBtn
    },
    data(){
        return {
            price:0
        }
    },
    computed:{
        ...mapGetters(['cartList']),
        isCheck(){
            // if(this.cartList.length === 0){
            //     return false
            // }
            // return !this.cartList.find(item=>{
            //     !item.checked
            // })
            if(this.cartList.length === 0) return false  // 购物车中没有商品时，默认不选中
            return !(this.cartList.find(item => !item.checked))
        },
        totalPrice(){
            return this.cartList.filter(item=>{
                return item.checked
            }).reduce((sum,item)=>{
                return sum + item.price * item.count
            },0).toFixed(2)

        },
        checkLength(){
            return this.cartList.filter(item=>{
                return item.checked
            }).length
        }
    },
    methods:{
        clickCheck(){
            if(this.isCheck){
                this.cartList.forEach(item=>item.checked=false)
            }else{
                this.cartList.forEach(item=>item.checked=true)
            }
        }
    }
}
</script>

<style scoped>
.cart-bottom{
    height: 40px;
    position: relative;
    background-color: #eee;
    display: flex;
    text-align: center;
}
.check-btn{
    margin-right: 10px;
}
.checked{
    height: 100%;
    width: 30%;
    display: flex;
    align-items:center;
    justify-content: center;
    /* background-color: blue; */
}

.check-text{
    color: black;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 5px;
}
.price{
    width: 40%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.count{
    width: 30%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
}
</style>