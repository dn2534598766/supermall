<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <user-info />
    <user-own />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './ChildComps/UserInfo'
import UserOwn from './ChildComps/UserOwn'
export default {
  name:'Profile',
  components:{
    NavBar,
    UserInfo,
    UserOwn
  }
}
</script>
<style scoped>
.nav-bar{
  color: white;
  background-color: var(--color-tint);
}
</style>