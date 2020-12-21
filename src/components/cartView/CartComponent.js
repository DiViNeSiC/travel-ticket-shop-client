import React from 'react'
import CartView from '../../Layouts/Cart/cartView'
import useCart from './Hooks/useCart'
import usePaypal from './Hooks/usePaypal'

export default () => {
    return <CartView paypal={usePaypal()} {...useCart()} />
}
