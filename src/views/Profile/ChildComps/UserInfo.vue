<template>
  <div class="userInfo">
      <div class="user-img">
          <img  src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="user-message">
          <div class="load-info">
            <div class="load">登录/注册</div>
            <div class="phone">
                <img src="~assets/img/profile/phone.svg" alt="" />
                <div>暂无绑定手机号</div>
            </div>
            <img class="arrow" src="~assets/img/profile/arrow-right.png" alt="" />
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name:'UserInfo'
}
</script>

<style>
.userInfo{
    width: 100%;
    height: 100px;
    display: flex;
}
.user-img{
    width:20%;
    height: 100%;
    background-color: var(--color-tint);
    position: relative;
}
.user-img img{
    width: 70px;
    height: 70px;
    /* display: block;
    margin: auto; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.user-message{
    width: 80%;
    height: 100%;
    background-color: var(--color-tint);
    position: relative;
    display: flex;
    align-items: center;

}
.load-info{
    padding-top:5px ;
    height: 70px;
    color: white;
}
.phone{
    height: 20px;
    margin-top: 10px;
    display: flex;
}
.phone img{
    height: 100%;
}
.arrow{
    height: 25px;
    position: absolute;
    right: 5%;
    top: 30%;
}
</style>