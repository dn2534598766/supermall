<template>
  <div class="goods-item">
      
      <div @click="itemClick">
          <img v-lazy="showImage" alt="" @load="imageLoad"/>
          <div class="goods-info">
            <p class="title">{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImage(){
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods:{
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsItem.iid)
        }
    }
}
</script>

<style>
.goods-item{
    width: 48%;
    padding-bottom: 10px;
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
}
.title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info{
    text-align: center;
    
}
.collect:before{
    content: '☆';
    width: 14px;
    height: 14px;
    margin-right: 2px;
}
.price{
    color: red;
    margin-right: 10px;
}
</style>