export default {
    addCart(context,product){
        return new Promise((resolve,reject)=>{
            let result = null
            result = context.state.cartList.find(function(item){
            return item.iid === product.iid
            
        })
        if(result){
            context.commit('count',result)
            resolve('当前商品数量+1')
        }else{
            product.count = 1
            context.commit('add',product)
            resolve('添加新的商品')
        }
        })
    }
}