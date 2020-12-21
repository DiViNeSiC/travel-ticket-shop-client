import axios from '../../Helpers/Axios/axiosInstance'
import { 
    SEARCH_PRODUCT,
    INCREASE_LIMIT,
    GET_ONE_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ONE_PRODUCTS_LOADING,
    GET_ONE_PRODUCTS_SUCCESS,
}  from '../../Constants/viewProduct'

export const increaseLimit = (dispatch) => { dispatch({ type: INCREASE_LIMIT }) }

export const searchFilter = (payload) => (dispatch) => { dispatch({ type: SEARCH_PRODUCT, payload }) }

export const getAllProducts = (isIndex) => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_LOADING })
        const url = isIndex ? '/' : '/dashboard'
        const res = await axios().get(`${url}`)
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: GET_ALL_PRODUCTS_ERROR,  payload: error })
    }
}

export const getOneProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: GET_ONE_PRODUCTS_LOADING })
        const res = await axios().get(`/product/${productId}`)
        dispatch({ type: GET_ONE_PRODUCTS_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: GET_ONE_PRODUCTS_ERROR, payload: error })
    }
}