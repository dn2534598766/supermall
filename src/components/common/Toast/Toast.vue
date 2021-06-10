<template>
  <div class="Toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    props:{
        message:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            isShow:false,
            message:''
        }
    },
    methods: {
    show(message='添加至购物车',duration=1000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow =false
      },duration)
    }
  }
}
</script>

<style scoped>
.Toast{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 60px;
    background: rgba(0,0,0,.6);
    color: white;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 60px;  
    z-index: 1000;
}
</style>