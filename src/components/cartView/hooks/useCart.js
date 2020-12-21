import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { 
    changeQuantity,
    getCartProducts,
    removeOneProduct,
    quantityModalShow,
    removeAllProducts,
} from '../../../Context/UserCart/actions'
import {
    HIDE_QUANTITY_MODAL,
    SHOW_QUANTITY_MODAL
} from '../../../Constants/userCart' 

export default () => {
    const {
        userCartDispatch,
        userCartState: {
            success, totalPrice,
            cartProducts: products,
            quantityModal: showModal,
            details, loading, segmentShow, error,
        }
    } = useContext(GlobalContext)
    const [quantity, setQuantity] = useState()
    const [productId, setProductId] = useState()

    const onLoad = () => { handleGetAllProducts() }
    const handleGetAllProducts = async () => { await getCartProducts(userCartDispatch) }
    
    const openQuantityModal = (productId, quantity) => {
        setStatus(productId, quantity)
        quantityModalShow(SHOW_QUANTITY_MODAL)(userCartDispatch)
    }

    const closeQuantityModal = () => {
        setStatus(null, null)
        quantityModalShow(HIDE_QUANTITY_MODAL)(userCartDispatch)
    }

    const setStatus = (productId, quantity) => {
        setQuantity(parseInt(quantity))
        setProductId(productId)
    }

    const incrementQuantity = () => {
        if (quantity < 10) setQuantity(prevQuantity => prevQuantity + 1)
    } 
    
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1)
    }

    const onChangeQuantity = () => { handleChangeQuantity(); closeQuantityModal() }

    const handleChangeQuantity = async () => {
        await changeQuantity(productId, quantity)(userCartDispatch)
    }

    const onRemoveOne = (productId) => { handleRemoveOne(productId) }

    const handleRemoveOne = async (productId) => {
        await removeOneProduct(productId)(userCartDispatch)
    }

    const onRemoveAll = () => { handleRemoveAll() }

    const handleRemoveAll = async () => {
        await removeAllProducts(userCartDispatch)
    } 

    useEffect(onLoad, [])
    const cartProducts = products.length ? products : null
    return {
        error,
        loading,
        details,
        success,
        quantity,
        showModal,
        totalPrice,
        segmentShow,
        onRemoveOne,
        onRemoveAll,
        cartProducts,
        userCartDispatch,
        onChangeQuantity,
        openQuantityModal,
        decrementQuantity,
        incrementQuantity,
        closeQuantityModal,
        type: error ? 'error' : 'success',
    }
}