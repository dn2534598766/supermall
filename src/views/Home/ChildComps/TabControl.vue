<template>
  <div class="tab-control">
      <div class="tab-control-item" :class="{active:index===control}"
       v-for="(item,index) in titles" :key="index" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            control:0
        }
    },
    methods:{
        itemClick(index){
            this.control=index
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: sticky;
    top: 44px;
    font-size: 16px;
    background-color: white;
}
.tab-control-item{
    
    flex: 1;
}
.active{
    color: var(--color-height-text);
    
}
.active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
}
</style>