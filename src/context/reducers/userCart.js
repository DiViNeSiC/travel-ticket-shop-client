import {
    ADD_TO_CART_LOADING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERROR,
    GET_ALL_CART_PRODUCTS_LOADING,
    GET_ALL_CART_PRODUCTS_SUCCESS,
    GET_ALL_CART_PRODUCTS_ERROR,
    CHANGE_QUANTITY_LOADING,
    CHANGE_QUANTITY_SUCCESS,
    CHANGE_QUANTITY_ERROR,
    REMOVE_FROM_CART_LOADING,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_ERROR,
    REMOVE_ALL_LOADING,
    REMOVE_ALL_SUCCESS,
    REMOVE_ALL_ERROR,
    HIDE_QUANTITY_MODAL,
    SHOW_QUANTITY_MODAL,
    SUCCESS_PURCHASE_ERROR,
    SUCCESS_PURCHASE_LOADING,
    SUCCESS_PURCHASE_SUCCESS,
    ERROR_PAY
} from '../../constants/userCart'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

import totalPriceCalculator from '../../helpers/cart/totalPrice'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state,
                segmentShow: false,
                error: null,
                success: null
            }
        }

        case SHOW_QUANTITY_MODAL: {
            return {
                ...state,
                quantityModal: true,
            }
        }

        case HIDE_QUANTITY_MODAL: {
            return {
                ...state,
                quantityModal: false,
            }
        }

        case ADD_TO_CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: payload,
                error: null,
                segmentShow: true
            }
        }

        case ADD_TO_CART_ERROR: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                error: payload
            }
        }

        case GET_ALL_CART_PRODUCTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_ALL_CART_PRODUCTS_SUCCESS: {
            const { cartProducts, userCart } = payload
            
            return {
                ...state,
                totalPrice: totalPriceCalculator(cartProducts, userCart),
                loading: false,
                cartProducts: cartProducts,
                details: userCart,
                error: null,
            }
        }

        case GET_ALL_CART_PRODUCTS_ERROR: {
            return {
                segmentShow: true,
                loading: false,
                cartProducts: [],
                details: [],
                error: payload,
                success: null
            }
        }

        case REMOVE_FROM_CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case REMOVE_FROM_CART_SUCCESS: {
            const { cartProducts, newCart, message } = payload

            return {
                ...state,
                loading: false,
                success: message,
                cartProducts: cartProducts,
                details: newCart,
                totalPrice: totalPriceCalculator(cartProducts, newCart),
                error: null,
                segmentShow: true
            }
        }

        case REMOVE_FROM_CART_ERROR: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                error: payload
            }
        }

        case CHANGE_QUANTITY_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        
        case CHANGE_QUANTITY_SUCCESS: {
            const { cartProducts, newCart, message } = payload

            return {
                ...state,
                loading: false,
                success: message,
                cartProducts: cartProducts,
                details: newCart,
                totalPrice: totalPriceCalculator(cartProducts, newCart),
                error: null,
                segmentShow: true
            }
        }
        
        case CHANGE_QUANTITY_ERROR: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                error: payload
            }
        }

        case REMOVE_ALL_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        
        case REMOVE_ALL_SUCCESS: {
            const { cartProducts, newCart, message } = payload

            return {
                loading: false,
                totalPrice: totalPriceCalculator(cartProducts, newCart),
                success: message,
                cartProducts: cartProducts,
                details: newCart,
                error: null,
                segmentShow: true,
            }
        }
        
        case REMOVE_ALL_ERROR: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                error: payload
            }
        }

        case SUCCESS_PURCHASE_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case SUCCESS_PURCHASE_SUCCESS: {
            return {
                loading: false,
                success: payload,
                cartProducts: [],
                details: [],
                error: null,
                segmentShow: true,
            }
        }

        case SUCCESS_PURCHASE_ERROR: {
            return {
                ...state,
                loading: false,
                success: null,
                error: payload,
                segmentShow: true,
            }
        }

        case ERROR_PAY: {
            return {
                ...state,
                loading: false,
                success: null,
                error: payload,
                segmentShow: true,
            }
        }

        default: 
            return state
    }
}