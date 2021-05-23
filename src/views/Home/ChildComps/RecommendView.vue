<template>
    <div class="recommend">
       <div  v-for="item in recommend" :key="item.link" class="recommend-item">
           <a :href="item.link">
               <img :src="item.image" alt=""/>
                <div>{{item.title}}</div>
           </a>
       </div>
    </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    width: 100%;
    display: flex;
    text-align: center;
    
}
.recommend-item{
    flex:1;
    padding: 15px 0;
    font-size: 12px;
    border-bottom:8px solid #eee;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>