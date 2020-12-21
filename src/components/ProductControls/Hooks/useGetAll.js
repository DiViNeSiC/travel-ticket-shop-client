import { useContext, useEffect } from "react"
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { getAllProducts } from '../../../Context/ProductControl/actions'
import useDelete from './useDeleteProduct'

export default () => {
    const {
        productControlsDispatch, 
        productControlsState: {
            success, error,
            loading, segmentShow,
            allProducts, allProductsLength,
        }
    } = useContext(GlobalContext)
    const { onDelete } = useDelete()
    
    const onLoad = () => { handleGetAllProducts() }
    const handleGetAllProducts = async () => { await getAllProducts(productControlsDispatch) }

    useEffect(onLoad, [])
    const length = allProductsLength ? `${allProductsLength} Products` : 'You Do Not Have Any Products Right Now'
    return {
        error,
        length,
        success,
        loading,
        onDelete,
        allProducts,
        segmentShow,
        productControlsDispatch,
        type: error ? 'error' : 'success'
    }
}