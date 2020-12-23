import {
    CREATE_PRODUCT,
    LOADING,
    ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_IMAGE,
    EDIT_PRODUCT,
    GET_ALL_PRODUCTS,
    UPLOAD_IMAGE,
    GET_ONE_PRODUCT
} from '../../constants/controlProduct'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state,
                segmentShow: false,
                success: null,
                error: null
            }
        }

        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ERROR: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                error: payload,
                success: null
            }
        }

        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                loading: false,
                allProducts: payload,
                allProductsLength: payload.length,
                error: null,
            }
        }

        case GET_ONE_PRODUCT: {
            return {
                ...state,
                loading: false, 
                oneProduct: payload,
                error: null,
            }
        }

        case UPLOAD_IMAGE: {
            return {
                ...state,
                segmentShow: true,
                loading: false,
                success: payload.message,
                error: null,
            }
        }

        case CREATE_PRODUCT: {
            return {
                ...state,
                loading: false,
                success: payload.message,
                segmentShow: true,
                error: null,
            }
        }

        case EDIT_PRODUCT: {
            return {
                ...state,
                loading: false,
                success: payload.message,
                segmentShow: true,
                error: null,
            }
        }

        case DELETE_PRODUCT: {
            return {
                ...state,
                loading: false,
                success: payload.message,
                segmentShow: true,
                error: null,
            }
        }

        case DELETE_PRODUCT_IMAGE: {
            return {
                ...state,
                loading: false,
                success: payload.taskMessage,
                segmentShow: true,
                error: null,
            }
        }

        default: 
            return state
    }
}