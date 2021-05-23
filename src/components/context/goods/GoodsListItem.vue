<template>
  <div class="goods-item">
      <img :src="goodsItem.show.img" alt=""/>
      <div>
          
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
    }
}
</script>

<style>
.goods-item{
    width: 48%;
}
.goods-item img{
    width: 100%;
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