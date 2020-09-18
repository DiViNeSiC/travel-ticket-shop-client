import axios from '../../../helpers/axios/axiosInstance'

import {
    CHANGE_QUANTITY_LOADING,
    CHANGE_QUANTITY_SUCCESS,
    CHANGE_QUANTITY_ERROR
} from '../../../constants/userCart'

export default (productId, quantity) => async (dispatch) => {
    try {
        dispatch({ type: CHANGE_QUANTITY_LOADING })

        const res = await axios()
            .put(`/cart/change-quantity/${productId}`, { quantity })

        dispatch({ 
            type: CHANGE_QUANTITY_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err.message
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: CHANGE_QUANTITY_ERROR,
            payload: error
        })
    }
}