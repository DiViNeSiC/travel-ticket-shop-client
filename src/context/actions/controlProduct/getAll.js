import axios from '../../../helpers/axios/axiosInstance'

import {
    ERROR,
    GET_ALL_PRODUCTS,
    LOADING
} from '../../../constants/controlProduct'

export default async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios.get('/control/product')

        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data.allProducts
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