export default {
    addCart(context,product){
        let result = null
        result = context.state.cartList.find(function(item){
            return item.iid === product.iid
        })
        if(result){
            context.commit('count',result)
        }else{
            product.count = 1
            context.commit('add',product)
        }
    }
}