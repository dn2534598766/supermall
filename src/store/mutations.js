export default {
    count(state,product){
        product.count += 1
    },
    add(state,product){
        state.cartList.push(product)
    }
}