export default {
    addCart(context,product){
        return new Promise((resolve,reject)=>{
            let result = null
            result = context.state.cartList.find(function(item){
                resolve('当前商品数量+1')
            return item.iid === product.iid
            
        })
        if(result){
            context.commit('count',result)
            resolve('22222')
        }else{
            product.count = 1
            context.commit('add',product)
            resolve('333333')
        }
        })
    }
}