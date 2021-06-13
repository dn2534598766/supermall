<template>
<div class="user-own">
  <div class="mine">
    <div class="left">
        <span class="num">0.00</span>元
        <div class="own-text">我的余额</div>
    </div>
    <div class="center">
        <span class="num">0</span>个
        <div class="own-text">我的优惠</div>
    </div>
    <div class="right">
        <span class="num">0</span>分
        <div class="own-text">我的积分</div>
    </div>
  </div>
  <div class="list">
    <div class="message">
        <img src="~assets/img/profile/message.svg" alt="" />
        <span>我的消息</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/pointer.svg" alt="" />
        <span>积分商城</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/vip.svg" alt="" />
        <span>会员卡</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/cart.svg" alt="" />
        <span>我的购物车</span>
    </div>
    <div class="message">
        <img src="~assets/img/profile/shopping.svg" alt="" />
        <span>下载购物APP</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:"UserOwn"
}
</script>

<style scoped>
.mine{
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.center,.right,.left{
    flex: 1;
    
}
.num{
    color: red;
    font-weight: bold;
    font-size: 30px;
}
.own-text{
    margin-top: 5px;
    font-weight: 60;
    font-size: 14px;
}
.list{
    width: 90%;
    margin: 0 auto;
}
.message{
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
}
.message img{
    height: 30px;
    margin-right: 10px;
}
</style>
