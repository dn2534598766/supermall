<template>
    <nav-bar>
        <div slot="left" class="left" @click="back">
            <img src="~assets/img/common/back.svg" alt="" />
        </div>
        <div slot="center" class="center">
                <span v-for="(item,index) in title" :key="index"
                 :class="{active:index===currentIndex}"
                 @click="itemClick(index)">
                    {{item}}
                </span>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'DetailNav',
    components:{
        NavBar
    },
    data(){
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.center{
    display: flex;
}
.center span{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.left img{
    vertical-align: middle;
}
</style>