import axios from '../../../helpers/axios/axiosInstance'

import {
    REMOVE_FROM_CART_LOADING,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_ERROR
} from '../../../constants/userCart'

export default (productId) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_LOADING })

        const res = await axios
            .delete(`/cart/delete/${productId}`)

        dispatch({ 
            type: REMOVE_FROM_CART_SUCCESS,
            payload: res.data.message
        })
    } catch (err) {
        let error 
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: REMOVE_FROM_CART_ERROR,
            payload: error
        })
    }
}