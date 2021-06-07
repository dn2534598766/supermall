<template>
  <div  class="cart-bottom">
      <div class="check">
          <check-btn class="check-btn" />
          <span class="check-text"> 全选</span>
      </div>
      <div class="price">
          <div class="price-text">合计:￥0.00</div>
      </div>
      <div class="count">
          <div>去计算0</div>
      </div>
  </div>
</template>

<script>
import CheckBtn from 'components/context/checkBtn/CheckBtn'
export default {
    name:'CartBottom',
    components:{
        CheckBtn
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
.check{
    height: 100%;
    width: 30%;
    display: flex;
    align-items:center;
    justify-content: center;
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