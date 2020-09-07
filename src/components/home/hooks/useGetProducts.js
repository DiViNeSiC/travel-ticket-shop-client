import { useContext, useEffect } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import getAllProducts from '../../../context/actions/viewProduct/getAll'
import increaseLimit from '../../../context/actions/viewProduct/increaseLimit'


export default (isIndex) => {
    const {
        viewProductDispatch,
        viewProductState: {
            segmentShow,
            allProducts: {
                loading,
                error,
                baseLength,
                baseProducts,
                limit,
                isSearching,
                products,
                allSearchedProducts,
                searchedProducts,
                searchedProductsLength
            }
        }
    } = useContext(GlobalContext)

    const onLoad = () => {
        handleGetProducts()
    }
    
    const handleGetProducts = async () => {
        await getAllProducts(isIndex)(viewProductDispatch)
    }
    
    const handleIncrease = () => {
        increaseLimit(viewProductDispatch)
    }
    
    useEffect(onLoad, [])
    
    const mainLength = baseLength > 0 ? 
        `${baseLength} Products` : 
        "Unfortunately We Don't Have Any Products Now"
    
    const searchLength = searchedProductsLength > 0 ? 
        `${searchedProductsLength} Products` : 
        'No Products Found'

    const allProducts = isSearching ? allSearchedProducts : baseProducts
    
    const resultLength = isSearching ? searchLength : mainLength 
    
    const resultProducts = isSearching ? searchedProducts : products
    
    return {
        handleIncrease,
        viewProductDispatch,
        loading,
        allProducts,
        error,
        limit,
        resultLength,
        resultProducts,
        segmentShow
    }
}