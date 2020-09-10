import axios from '../../../helpers/axios/axiosInstance'

import {
    ADD_TO_CART_LOADING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERROR
} from '../../../constants/userCart'

export default (productId, quantity) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_LOADING })

        const res = await axios
            .post(`/cart/add/${productId}`, { quantity })

        dispatch({ 
            type: ADD_TO_CART_SUCCESS,
            payload: res.data.message
        })
    } catch (err) {
        let error = err.message
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: ADD_TO_CART_ERROR,
            payload: error
        })
    }
}