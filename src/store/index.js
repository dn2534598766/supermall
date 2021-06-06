import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        
    },
    actions:{
        addCart(context,product){
            let result = null
            result = context.state.cartList.find(function(item){
                return item.iid === product.iid
            })
            if(result){
                result.count += 1
            }else{
                product.count = 1
                context.state.cartList.push(product)
            }
        }
    }
})

export default store