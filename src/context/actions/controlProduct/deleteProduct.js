import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    DELETE_PRODUCT,
    LOADING
} from '../../../constants/controlProduct'

export default (productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios
            .delete(`/control/product/${productId}`)

        dispatch({
            type: DELETE_PRODUCT,
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