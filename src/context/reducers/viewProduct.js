import {
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_ERROR,
    GET_ONE_PRODUCTS_LOADING,
    GET_ONE_PRODUCTS_SUCCESS,
    GET_ONE_PRODUCTS_ERROR,
    INITIAL_LIMIT,
    INITIAL_LIMIT_INCREASE,
    INCREASE_LIMIT,
    SEARCH_PRODUCT
} from '../../constants/viewProduct'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

import limitFunc from '../../helpers/product/limitProduct'
import searchFunc from '../../helpers/product/searchProduct'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state,
                segmentShow: false
            }
        }

        case GET_ALL_PRODUCTS_LOADING: {
            return {
                ...state,
                allProducts: {
                    ...state.allProducts,
                    loading: true
                }
            }
        }

        case GET_ALL_PRODUCTS_SUCCESS: {
            const { allProducts } = payload
            return {
                ...state,
                allProducts: {
                    ...state.allProducts,
                    loading: false,
                    error: null,
                    limit: INITIAL_LIMIT,
                    baseProducts: allProducts,
                    baseLength: allProducts.length,
                    products: limitFunc(
                        allProducts, INITIAL_LIMIT
                    )
                }
            }
        }

        case GET_ALL_PRODUCTS_ERROR: {
            return {
                ...state,
                segmentShow: true,
                allProducts: {
                    ...state.allProducts,
                    loading: false,
                    error: payload
                }
            }
        }

        case INCREASE_LIMIT: {
            const {
                baseProducts, 
                allSearchedProducts, 
                limit, 
                isSearching 
            } = state.allProducts

            const products = isSearching ? allSearchedProducts : baseProducts

            return {
                ...state,
                allProducts: {
                    ...state.allProducts,
                    limit: limit + INITIAL_LIMIT_INCREASE,
                    searchedProducts: limitFunc(products, limit + INITIAL_LIMIT_INCREASE),
                    products: limitFunc(products, limit + INITIAL_LIMIT_INCREASE),
                }
            }
        }

        case SEARCH_PRODUCT: {
            const { baseProducts } = state.allProducts
            const { title, from, to, continent } = payload
            const searchProducts = searchFunc(baseProducts, payload)

            const isSearching = 
                title?.length > 0 ||
                !!from ||
                !!to ||
                !!continent || false

            return {
                ...state,
                allProducts: {
                    ...state.allProducts,
                    isSearching,
                    allSearchedProducts: searchProducts,
                    searchedProducts: limitFunc(searchProducts, INITIAL_LIMIT),
                    products: limitFunc(baseProducts, INITIAL_LIMIT),
                    limit: INITIAL_LIMIT,
                    searchedProductsLength: searchProducts.length
                }
            }
        }

        case GET_ONE_PRODUCTS_LOADING: {
            return {
                ...state,
                oneProduct: {
                    ...state.oneProduct,
                    loading: true
                }
            }
        }

        case GET_ONE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                oneProduct: {
                    loading: false,
                    error: null,
                    product: payload.product
                }
            }
        }

        case GET_ONE_PRODUCTS_ERROR: {
            return {
                ...state,
                segmentShow: true,
                oneProduct: {
                    loading: false,
                    error: payload,
                    product: {}
                }
            }
        }

        default: 
            return state
    }
}