<template>
  <div  v-if="Object.keys(detailGoods).length!==0 && detailGoods.detailImage[0].list !== null" class="detail-goods-info">
       <div class="info-desc" clear-fix>
            <div class="start"></div>
            <div class="desc">{{detailGoods.desc}}</div>
            <div class="end"></div>
            <div class="effect">{{detailGoods.detailImage[0].key}}</div>
       </div>
       <div class="info-list" v-for="(item,index) in detailGoods.detailImage[0].list" :key="index">
           <img :src="item" alt="" @load="goodsLoad" />
       </div>
  </div>
</template>

<script>
export default {
    name:"DetailGoodsInfo",
    props:{
        detailGoods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            count:0,
            imageLength:0
        }
    },
    methods:{
        goodsLoad(){
            if(++this.count===this.imageLength){
                this.$emit('loadEnd')
            }
        }
    },
    watch:{
        detailGoods(){
            this.imageLength = this.detailGoods.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.detail-goods-info{
    margin-top: 20px;
}
.info-desc{
    margin: 0 20px;
    color: black;
}
.desc{
    padding: 15px 0;
}
.info-desc .start,.end{
    position: relative;
    width: 100px;
    height: 1px;
    background-color: black;
}
.info-desc .start::before,
.info-desc .end::after{
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}
.end{
    float: right;
}
.effect{
    margin: 20px 0;
}
.info-list img{
    width: 100%;
    padding: 0px 10px;
}
</style>