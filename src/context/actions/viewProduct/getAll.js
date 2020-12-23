import axios from '../../../helpers/axios/axiosInstance'
import { 
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_ERROR 
}  from '../../../constants/viewProduct'

export default (isIndex) => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_LOADING })
        const url = isIndex ? '/' : '/dashboard'

        const res = await axios().get(`${url}`)

        dispatch({ 
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data 
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: GET_ALL_PRODUCTS_ERROR, 
            payload: error
        })
    }
}