<template>
  <div class="userInfo">
      <div class="user-img">
          <img  src="~assets/img/profile/avatar.svg" alt="" />
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
}
.user-img{
    width: 30%;
    height: 100%;
    background-color: green;
}
.user-img img{
    width: 60px;
    height: 60px;
    margin: 0 auto;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
}
</style>