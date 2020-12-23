import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    EDIT_PRODUCT,
    LOADING
} from '../../../constants/controlProduct'

export default (formData, productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios()
            .put(`/control/product/${productId}`, formData)

        dispatch({
            type: EDIT_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        let error = err.message
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: ERROR,
            payload: error
        })
    }
}