<template>
    <div class="cart-list">
        <li v-for="(item,index) in goods"  :key="index">{{item}}</li>
    </div>
</template>

<script>
export default {
    name:'CartList',
    props:{
        goods:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style>

</style>