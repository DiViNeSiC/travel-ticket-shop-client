import React from 'react'
import CartView from '../../layouts/cart/cartView'
import useCart from './hooks/useCart'

export default () => {
    return <CartView {...useCart()} />
}
