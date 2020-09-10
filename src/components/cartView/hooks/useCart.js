import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import getProducts from '../../../context/actions/userCart/getProducts'
import quantityModal from '../../../context/actions/userCart/quantityModal'
import changeQuantity from '../../../context/actions/userCart/changeQuantity'
import removeAll from '../../../context/actions/userCart/removeAll'
import removeOne from '../../../context/actions/userCart/removeOne'

import {
    HIDE_QUANTITY_MODAL,
    SHOW_QUANTITY_MODAL
} from '../../../constants/userCart' 

export default () => {
    const {
        userCartDispatch,
        userCartState: {
            loading,
            error,
            success,
            segmentShow,
            details,
            quantityModal: showModal,
            cartProducts: products,
        }
    } = useContext(GlobalContext)

    const [quantity, setQuantity] = useState()
    const [productId, setProductId] = useState()

    const onLoad = () => {
        handleGetAll()
    }
    
    const handleGetAll = async () => {
        await getProducts(userCartDispatch)
    }
    
    const openQuantityModal = (productId, quantity) => {
        setStatus(productId, quantity)
        quantityModal(SHOW_QUANTITY_MODAL)(userCartDispatch)
    }

    const closeQuantityModal = () => {
        setStatus(null, null)
        quantityModal(HIDE_QUANTITY_MODAL)(userCartDispatch)
    }

    const setStatus = (productId, quantity) => {
        setQuantity(parseInt(quantity))
        setProductId(productId)
    }

    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    } 
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    } 

    const onChangeQuantity = () => {
        handleChangeQuantity()
        closeQuantityModal()
    }


    const handleChangeQuantity = async () => {
        await changeQuantity(productId, quantity)(userCartDispatch)
    }

    const onRemoveOne = (productId) => {
        handleRemoveOne(productId)
    }

    const handleRemoveOne = async (productId) => {
        await removeOne(productId)(userCartDispatch)
    }

    const onRemoveAll = () => {
        handleRemoveAll()
    }

    const handleRemoveAll = async () => {
        await removeAll(userCartDispatch)
    } 

    useEffect(onLoad, [])

    const cartProducts = products.length ? products : null

    return {
        openQuantityModal,
        closeQuantityModal,
        incrementQuantity,
        decrementQuantity,
        onChangeQuantity,
        onRemoveOne,
        onRemoveAll,
        userCartDispatch,
        loading,
        error,
        quantity,
        success,
        cartProducts,
        details,
        segmentShow,
        showModal,
        type: error ? 'error' : 'success'
    }
}