import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    GET_ONE_PRODUCT,
    LOADING
} from '../../../constants/controlProduct'

export default (productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios().get(`/control/product/${productId}`)

        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data.product
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