import axios from '../../../helpers/axios/axiosInstance'

import {
    REMOVE_ALL_LOADING,
    REMOVE_ALL_SUCCESS,
    REMOVE_ALL_ERROR
} from '../../../constants/userCart'

export default async (dispatch) => {
    try {
        dispatch({ type: REMOVE_ALL_LOADING })

        const res = await axios().delete(`/cart/delete`)

        dispatch({ 
            type: REMOVE_ALL_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err.message 
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: REMOVE_ALL_ERROR,
            payload: error
        })
    }
}