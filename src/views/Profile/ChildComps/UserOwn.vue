<template>
  <div class="user-own">
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
</template>

<script>
export default {
  name:"UserOwn"
}
</script>

<style scoped>
.user-own{
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
</style>
