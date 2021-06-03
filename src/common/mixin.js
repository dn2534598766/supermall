import {debounce} from 'common/utils'
export const itemListenerMixin = {
    data(){
        return {
            controlEvent:null
        }
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,50)
        this.controlEvent = this.$bus.$on('itemImageLoad',()=>{
        refresh()
        })
    }
}