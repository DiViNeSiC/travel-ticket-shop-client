import {
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_ERROR,
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
                        allProducts, state.allProducts.limit
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
                searchedProducts, 
                limit, 
                isSearching 
            } = state

            const products = isSearching ? searchedProducts : baseProducts

            return {
                ...state,
                allProducts: {
                    ...state.allProducts,
                    limit: limit + INITIAL_LIMIT_INCREASE,
                    products: limitFunc(products, state.allProducts.limit)
                }
            }
        }

        case SEARCH_PRODUCT: {
            const { baseProducts } = state
            const { title, from, to, continent } = payload
            const searchedProducts = searchFunc(baseProducts, payload)

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
                    searchedProducts,
                    limit: INITIAL_LIMIT,
                    products: limitFunc(searchedProducts, state.limit),
                    searchedProductsLength: searchedProducts.length
                }
            }
        }

        default: 
            return state
    }
}