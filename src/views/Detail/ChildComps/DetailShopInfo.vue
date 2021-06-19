<template>
    <div class="detail-shop-info">
        <div class="business">
            <img class="logo" :src="prefix+shop.logo"  alt="" />
            <span class="name">{{shop.name}}</span>
            <div class="describe">
                <div class="btn1">
                    <div class="detail-left">
                        <div class="text">{{shop.sells}}</div>
                        <div>总销量</div>
                    </div>
                    <div class="detail-right">
                        <div class="text">{{shop.goodsCount}}</div>
                        <div>全部商品</div>
                    </div>
                </div>
                <div class="btn2">
                    <div class="btn2-item" v-for="(item,index) in shop.score" :key="index">
                        <span class="btn2-name">{{item.name}}</span>
                        <span class="btn2-score" :class="[item.isBetter ? 'red' :'green']">{{item.score}}</span>
                        <span class="height" v-if="item.isBetter==true">高</span>
                        <span class="low" v-else>低</span>
                    </div>
                </div>
            </div>
            <div class="entry">进店逛逛</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            prefix:'http:'
        }
    },
}
</script>

<style>
.detail-shop-info{
     border-top: 5px solid #f6f6f6;
     position: relative;
     z-index: 9;
     background-color: white;
}
.business{
    margin-top: 20px;
}
.logo{
    /* margin-top:20px ; */
    display:inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #D3D3D3;
    margin-left: 10px;
    vertical-align:middle;

}
.name{
    display:inline-block;
    height: 50px;
    vertical-align:middle;
    margin-left: 10px;
    line-height: 50px;
    
}
.describe{
    /* margin-top: 20px; */
    display: flex;
    height: 100px;
     align-items: center;
}
.text{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}
.btn1{
    flex: 1;
    display: flex;
    text-align: center;
    
}
.detail-left{
    flex: 1;
}
.detail-right{
    flex: 1;
}

.btn2{
    flex: 1;
    text-align: center;
    border-left: 1px solid 	#D3D3D3;
}
.btn2-item{
    margin-bottom: 10px;
}
.height{
    color: white;
    background-color: var(--color-high-text);
}
.low{
    color: white;
    background-color: green;
}
.btn2-name{
    color: black;
    padding-right: 5px;
}
.btn2-score{
    padding-right: 5px;
}
.red{
    color: var(--color-high-text);
}
.green{
    color:green
}
.entry{
    margin: 0 auto;
    background-color: 	#F5F5F5;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10%;
    margin-top: 10px;
}

</style>