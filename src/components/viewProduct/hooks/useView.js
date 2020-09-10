import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from '../../../context/contextProvider/provider'
import getOne from '../../../context/actions/viewProduct/getOne'
import addCart from '../../../context/actions/userCart/add'
import isAuthenticated from '../../../utils/authenticate/userAuth'
import getProducts from '../../../context/actions/userCart/getProducts'

export default () => {
    const {
        viewProductDispatch,
        userCartDispatch,
        viewProductState: {
            segmentShow: productSegmentShow,
            oneProduct: {
                loading: productLoading,
                error: productError,
                product
            }
        },
        userCartState: {
            loading: cartLoading,
            error: cartError,
            success: cartSuccess,
            segmentShow: cartSegmentShow,
            details
        }
    } = useContext(GlobalContext)

    const [quantity, setQuantity] = useState(1)

    const { id } = useParams()
    const isAuth = isAuthenticated()

    const onLoad = () => {
        getAllCartProducts()
        handleGetOneProduct()
    }

    const onAddCart = () => {
        handleAddToCart()
    }

    const onQuantityChange = (e) => {
        let { value } = e.target

        if (value < 1) {
            value = 1
        }

        if (value > 10) {
            value = 10
        }
        
        setQuantity(value)
    }

    const handleAddToCart = async () => {
        await addCart(id, parseInt(quantity))(userCartDispatch)
    }

    const handleGetOneProduct = async () => {
        await getOne(id)(viewProductDispatch)
    }

    const getAllCartProducts = async () => {
        if (isAuth) {
            await getProducts(userCartDispatch)
        }
    } 

    useEffect(onLoad, [])

    const loading = cartLoading ? cartLoading : productLoading 
    const error = cartError ? cartError : productError?.message
    const segmentShow = cartSegmentShow ? cartSegmentShow : productSegmentShow
    const dispatch = cartSegmentShow ? userCartDispatch : viewProductDispatch
    const type = error ? 'error' : 'success'

    return { 
        onAddCart,
        onQuantityChange,
        loading,
        error, 
        cartSuccess,
        segmentShow,
        dispatch,
        isAuth,
        product,
        type,
        quantity,
        details
    }
}