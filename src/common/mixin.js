import {debounce} from 'common/utils'
import BackTop from 'components/context/backTop/BackTop'

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

export const Top = {
    data(){
        return {
            isShow:false,
            isTabControl:false
        }
    },
    methods:{
        top(){
            this.$refs.scroll.Scroll(0,0,500)
        }
        
    },
    components:{
        BackTop
    }
}
