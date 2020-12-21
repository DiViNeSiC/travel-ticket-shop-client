import { useContext, useEffect } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { increaseLimit, getAllProducts } from '../../../Context/ViewProducts/actions'

export default (isIndex) => {
    const {
        viewProductDispatch,
        viewProductState: { segmentShow, allProducts: {
            loading, error,
            searchedProductsLength,
            baseLength, baseProducts,
            limit, isSearching, products,
            allSearchedProducts,searchedProducts,
        }}
    } = useContext(GlobalContext)

    const onLoad = () => { handleGetProducts() }
    const handleGetProducts = async () => { await getAllProducts(isIndex)(viewProductDispatch) }

    const handleIncrease = () => { increaseLimit(viewProductDispatch) }
    
    useEffect(onLoad, [])
    const mainLength = baseLength > 0 ? `${baseLength} Products` : "Unfortunately We Don't Have Any Products Now"
    const searchLength = searchedProductsLength > 0 ? `${searchedProductsLength} Products` : 'No Products Found'
    const allProducts = isSearching ? allSearchedProducts : baseProducts
    const resultProducts = isSearching ? searchedProducts : products
    const resultLength = isSearching ? searchLength : mainLength
    return {
        error,
        limit,
        loading,
        segmentShow,
        allProducts,
        resultLength,
        handleIncrease,
        resultProducts,
        viewProductDispatch,
    }
}