<template>
    <div class="detailBaseInfo">
        <h3 class="title">{{goods.title}}</h3>
    </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.title{
    padding:20px 6px;
}
</style>