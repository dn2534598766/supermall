<template>
  <div class="Toast">
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
    }
}
</script>

<style scoped>
.Toast{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 60px;
    background: rgba(0,0,0,.6);
    color: white;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 60px; 
}
</style>