import axios from '../../../helpers/axios/axiosInstance'

import {
    GET_ALL_CART_PRODUCTS_LOADING,
    GET_ALL_CART_PRODUCTS_SUCCESS,
    GET_ALL_CART_PRODUCTS_ERROR
} from '../../../constants/userCart'

export default async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_CART_PRODUCTS_LOADING })

        const res = await axios().get('/dashboard/cart')

        dispatch({ 
            type: GET_ALL_CART_PRODUCTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err.message
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: GET_ALL_CART_PRODUCTS_ERROR,
            payload: error
        })
    }
}