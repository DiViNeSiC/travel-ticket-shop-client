import axios from '../../../helpers/axios/axiosInstance'

import {
    SUCCESS_PURCHASE_LOADING,
    SUCCESS_PURCHASE_SUCCESS,
    SUCCESS_PURCHASE_ERROR
} from '../../../constants/userCart'

export default (payment) => async (dispatch) => {
    try {
        dispatch({ type: SUCCESS_PURCHASE_LOADING })

        const postData = await axios.post(`/cart/success-purchase`, { payment })

        dispatch({ 
            type: SUCCESS_PURCHASE_SUCCESS,
            payload: postData.data.message
        })
    } catch (err) {
        let error = err.message 
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: SUCCESS_PURCHASE_ERROR,
            payload: error
        })
    }
}