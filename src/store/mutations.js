export default {
    count(state,product){
        product.count += 1
    },
    add(state,product){
        product.checked = true
        state.cartList.push(product)
    }
} 