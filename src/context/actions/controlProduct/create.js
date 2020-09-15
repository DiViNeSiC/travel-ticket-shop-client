import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    CREATE_PRODUCT,
    LOADING
} from '../../../constants/controlProduct'

export default (formData) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    }

    try {
        dispatch({ type: LOADING })

        const res = await axios
            .post('/control/product', formData, config)

        dispatch({
            type: CREATE_PRODUCT,
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