import React from 'react'
import { Segment } from 'semantic-ui-react'

export default ({ products, details }) => {
    const prices = details.map(detail => {
        const product = products.find(product => 
            product._id === detail.productId
        )

        return product.price * detail.quantity
    })

    const totalPrice = prices.reduce((arr, curr) => 
        arr += curr
    )
    return (
        <div className="total-payment">
            <Segment className="payment" color="blue" textAlign="center" >
                Total Price: ${ totalPrice }
            </Segment>
        </div>
    )
}
