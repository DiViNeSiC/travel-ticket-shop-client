import React from 'react'

export default ({ allProducts }) => {
    const priceArray = allProducts.map(product => {
        const { price, sold } = product
        
        return price * sold
    })

    let total = 0
    if (priceArray.length) {
        total = priceArray.reduce((arr, curr) => 
            arr += curr
        )
    }
    
    return (
        <div className="sold-price">
            Total Sold Price: ${total}
        </div>
    )
}
