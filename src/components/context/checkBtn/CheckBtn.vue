<template>
    <div class="check-btn" :class="{check:isCheck}">
        <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
</template>

<script>
export default {
    name:'CheckBtn',
    props:{
        isCheck: {
            type: Boolean,
            default () {
                return false
            }
        }
    }
}
</script>

<style scoped>
.check-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    background-color: red;
    border-color: pink;
}
</style>