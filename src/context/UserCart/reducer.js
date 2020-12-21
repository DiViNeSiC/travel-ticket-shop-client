import { HIDE_SEGMENT } from '../../Constants/hideSegment'
import totalPriceCalculator from '../../Helpers/Cart/totalPrice'
import {
    ERROR_PAY,
    REMOVE_ALL_ERROR,
    ADD_TO_CART_ERROR,
    REMOVE_ALL_LOADING,
    REMOVE_ALL_SUCCESS,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_LOADING,
    HIDE_QUANTITY_MODAL,
    SHOW_QUANTITY_MODAL,
    CHANGE_QUANTITY_ERROR,
    SUCCESS_PURCHASE_ERROR,
    REMOVE_FROM_CART_ERROR,
    CHANGE_QUANTITY_LOADING,
    CHANGE_QUANTITY_SUCCESS,
    REMOVE_FROM_CART_LOADING,
    REMOVE_FROM_CART_SUCCESS,
    SUCCESS_PURCHASE_LOADING,
    SUCCESS_PURCHASE_SUCCESS,
    GET_ALL_CART_PRODUCTS_ERROR,
    GET_ALL_CART_PRODUCTS_SUCCESS,
    GET_ALL_CART_PRODUCTS_LOADING,
} from '../../Constants/userCart'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: return { ...state, segmentShow: false, error: null, success: null }

        case SHOW_QUANTITY_MODAL: return { ...state, quantityModal: true }

        case HIDE_QUANTITY_MODAL: return { ...state, quantityModal: false }

        case ADD_TO_CART_LOADING: return { ...state, loading: true }

        case ADD_TO_CART_SUCCESS: return {
            ...state,
            error: null,
            loading: false,
            success: payload,
            segmentShow: true
        }

        case ADD_TO_CART_ERROR: return {
            ...state,
            loading: false,
            error: payload.message,
            segmentShow: true,
        }

        case GET_ALL_CART_PRODUCTS_LOADING: return { ...state, loading: true }

        case GET_ALL_CART_PRODUCTS_SUCCESS: return {
            ...state,
            error: null,
            loading: false,
            details: payload.userCart,
            cartProducts: payload.cartProducts,
            totalPrice: totalPriceCalculator(payload.cartProducts, payload.userCart),
        }

        case GET_ALL_CART_PRODUCTS_ERROR: return {
            segmentShow: true,
            loading: false,
            cartProducts: [],
            details: [],
            error: payload.message,
            success: null
        }

        case REMOVE_FROM_CART_LOADING: return { ...state, loading: true }

        case REMOVE_FROM_CART_SUCCESS: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
            details: payload.newCart,
            cartProducts: payload.cartProducts,
            totalPrice: totalPriceCalculator(payload.cartProducts, payload.newCart),
        }

        case REMOVE_FROM_CART_ERROR: return {
            ...state, segmentShow: true, loading: false, error: payload.message
        }

        case CHANGE_QUANTITY_LOADING: return { ...state, loading: true }
        
        case CHANGE_QUANTITY_SUCCESS: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
            details: payload.newCart,
            cartProducts: payload.cartProducts,
            totalPrice: totalPriceCalculator(payload.cartProducts, payload.newCart),
        }
        
        case CHANGE_QUANTITY_ERROR: return {
            ...state, segmentShow: true, loading: false, error: payload.message
        }

        case REMOVE_ALL_LOADING: return { ...state, loading: true }
        
        case REMOVE_ALL_SUCCESS: return {
            loading: false,
            error: null,
            segmentShow: true,
            success: payload.message,
            details: payload.newCart,
            cartProducts: payload.cartProducts,
            totalPrice: totalPriceCalculator(payload.cartProducts, payload.newCart),
        }
        
        case REMOVE_ALL_ERROR: return {
            ...state, segmentShow: true, loading: false, error: payload.message
        }

        case SUCCESS_PURCHASE_LOADING: return { ...state, loading: true }

        case SUCCESS_PURCHASE_SUCCESS: return {
            loading: false,
            success: payload,
            cartProducts: [],
            details: [],
            error: null,
            segmentShow: true,
        }

        case SUCCESS_PURCHASE_ERROR: return {
            ...state, loading: false, success: null, error: payload.message, segmentShow: true,
        }

        case ERROR_PAY: return {
            ...state, loading: false, success: null, error: payload, segmentShow: true,
        }

        default: return state
    }
}