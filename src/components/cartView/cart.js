import React from 'react'
import CartView from '../../layouts/cart/cartView'
import useCart from './hooks/useCart'
import usePaypal from './hooks/usePaypal'

export default () => {
    return <CartView paypal={usePaypal()} {...useCart()} />
}
