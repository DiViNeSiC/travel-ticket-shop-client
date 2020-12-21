import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import isAuthenticated from '../../../Utils/Authenticate/userAuth'
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { getOneProduct } from '../../../Context/ViewProducts/actions'
import { addToCart, getCartProducts } from '../../../Context/UserCart/actions'

export default () => {
    const {
        viewProductDispatch,
        userCartDispatch,
        viewProductState: {
            segmentShow: productSegmentShow,
            oneProduct: { loading: productLoading, error: productError, product }
        },
        userCartState: {
            loading: cartLoading, error: cartError,
            success: cartSuccess, segmentShow: cartSegmentShow, details
        }
    } = useContext(GlobalContext)

    const { id } = useParams()
    const isAuth = isAuthenticated()
    const [quantity, setQuantity] = useState(1)

    const onLoad = () => { getAllCartProducts(); handleGetOneProduct() }

    const onAddCart = () => { handleAddToCart() }

    const onQuantityChange = ({ target: { value }}) => {
        if (value < 1) value = 1
        if (value > 10) value = 10
        setQuantity(value)
    }

    const handleAddToCart = async () => { await addToCart(id, parseInt(quantity))(userCartDispatch) }

    const handleGetOneProduct = async () => { await getOneProduct(id)(viewProductDispatch) }

    const getAllCartProducts = async () => { if (isAuth) await getCartProducts(userCartDispatch) }

    useEffect(onLoad, [])
    const loading = cartLoading ? cartLoading : productLoading 
    const error = cartError ? cartError : productError?.message
    const segmentShow = cartSegmentShow ? cartSegmentShow : productSegmentShow
    const dispatch = cartSegmentShow ? userCartDispatch : viewProductDispatch
    const type = error ? 'error' : 'success'
    return { 
        type,
        error, 
        isAuth,
        loading,
        product,
        details,
        dispatch,
        quantity,
        onAddCart,
        segmentShow,
        cartSuccess,
        onQuantityChange,
    }
}