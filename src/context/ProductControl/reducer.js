import { HIDE_SEGMENT } from '../../Constants/hideSegment'
import {
    ERROR,
    LOADING,
    EDIT_PRODUCT,
    UPLOAD_IMAGE,
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    GET_ONE_PRODUCT,
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT_IMAGE,
} from '../../Constants/productControls'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: return {
            ...state, segmentShow: false, success: null, error: null
        }

        case LOADING: return { ...state, loading: true }

        case ERROR: return {
            ...state,
            segmentShow: true,
            loading: false,
            error: payload.message,
            success: null
        }

        case GET_ALL_PRODUCTS: return {
            ...state,
            error: null,
            loading: false,
            allProducts: payload,
            allProductsLength: payload.length,
        }

        case GET_ONE_PRODUCT: return {
            ...state,
            error: null,
            loading: false, 
            oneProduct: payload,
        }

        case UPLOAD_IMAGE: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
        }

        case CREATE_PRODUCT: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
        }

        case EDIT_PRODUCT: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
        }

        case DELETE_PRODUCT: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.message,
        }

        case DELETE_PRODUCT_IMAGE: return {
            ...state,
            error: null,
            loading: false,
            segmentShow: true,
            success: payload.taskMessage,
        }

        default: return state
    }
}