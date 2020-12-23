export default (products, cart) => {
    let prices = [0]
    if (products.length) {
        prices = cart.map(item => {
            const product = products.find(product => 
                product._id === item.productId
            )
    
            return product.price * item.quantity
        })
    }

    return prices.reduce((arr, curr) => 
        arr += curr
    )
}