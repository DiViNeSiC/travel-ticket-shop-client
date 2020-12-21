import limitFunc from '../../Helpers/Product/limitProduct'
import searchFunc from '../../Helpers/Product/searchProduct'
import { HIDE_SEGMENT } from '../../Constants/hideSegment'
import {
    INITIAL_LIMIT,
    SEARCH_PRODUCT,
    INCREASE_LIMIT,
    INITIAL_LIMIT_INCREASE,
    GET_ONE_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ONE_PRODUCTS_LOADING,
    GET_ONE_PRODUCTS_SUCCESS,
} from '../../Constants/viewProduct'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: return { ...state, segmentShow: false }

        case GET_ALL_PRODUCTS_LOADING: return {
            ...state, allProducts: { ...state.allProducts, loading: true }
        }

        case GET_ALL_PRODUCTS_SUCCESS: return {
            ...state,
            allProducts: {
                ...state.allProducts, error: null, 
                loading: false,limit: INITIAL_LIMIT,
                baseProducts: payload.allProducts,
                baseLength: payload.allProducts.length,
                products: limitFunc(payload.allProducts, INITIAL_LIMIT)
            }
        }

        case GET_ALL_PRODUCTS_ERROR: return {
            ...state, segmentShow: true,
            allProducts: { ...state.allProducts, loading: false, error: payload }
        }

        case INCREASE_LIMIT: {
            const { baseProducts, allSearchedProducts, limit, isSearching } = state.allProducts
            const products = isSearching ? allSearchedProducts : baseProducts
            return { ...state, allProducts: {
                ...state.allProducts,
                limit: limit + INITIAL_LIMIT_INCREASE,
                products: limitFunc(products, limit + INITIAL_LIMIT_INCREASE),
                searchedProducts: limitFunc(products, limit + INITIAL_LIMIT_INCREASE),
            }}
        }

        case SEARCH_PRODUCT: {
            const { baseProducts } = state.allProducts
            const { title, from, to, continent } = payload
            const searchProducts = searchFunc(baseProducts, payload)
            const isSearching = title?.length > 0 || !!from || !!to || !!continent || false
            return { ...state, allProducts: {
                ...state.allProducts, limit: INITIAL_LIMIT,
                searchedProductsLength: searchProducts.length,
                isSearching, allSearchedProducts: searchProducts,
                products: limitFunc(baseProducts, INITIAL_LIMIT),
                searchedProducts: limitFunc(searchProducts, INITIAL_LIMIT),
            }}
        }

        case GET_ONE_PRODUCTS_LOADING: return {
            ...state, oneProduct: { ...state.oneProduct, loading: true }
        }

        case GET_ONE_PRODUCTS_SUCCESS: return {
            ...state, oneProduct: { loading: false, error: null, product: payload.product }
        }

        case GET_ONE_PRODUCTS_ERROR: return {
            ...state, segmentShow: true,
            oneProduct: { loading: false, error: payload.message, product: {} }
        }

        default: return state
    }
}