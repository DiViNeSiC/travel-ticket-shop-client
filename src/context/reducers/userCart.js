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
    SHOW_QUANTITY_MODAL
} from '../../constants/userCart'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

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
            return {
                ...state,
                loading: false,
                cartProducts: payload.cartProducts,
                details: payload.userCart,
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
            return {
                ...state,
                loading: false,
                success: payload.message,
                cartProducts: payload.cartProducts,
                details: payload.newCart,
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
            return {
                ...state,
                loading: false,
                success: payload.message,
                cartProducts: payload.cartProducts,
                details: payload.newCart,
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
            return {
                loading: false,
                success: payload.message,
                cartProducts: payload.cartProducts,
                details: payload.newCart,
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
                
        default: 
            return state
    }
}