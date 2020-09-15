import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    UPLOAD_IMAGE,
    LOADING
} from '../../../constants/controlProduct'

export default (productId, formData) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    }

    try {
        dispatch({ type: LOADING })

        const res = await axios
            .post(`/control/product/${productId}`, formData, config)

        dispatch({
            type: UPLOAD_IMAGE,
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