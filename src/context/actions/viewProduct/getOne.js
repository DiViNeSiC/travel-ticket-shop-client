import axios from '../../../helpers/axios/axiosInstance'
import { 
    GET_ONE_PRODUCTS_LOADING,
    GET_ONE_PRODUCTS_SUCCESS, 
    GET_ONE_PRODUCTS_ERROR 
}  from '../../../constants/viewProduct'

export default (productId) => async (dispatch) => {
    try {
        dispatch({ type: GET_ONE_PRODUCTS_LOADING })
        
        const res = await axios().get(`/product/${productId}`)

        dispatch({ 
            type: GET_ONE_PRODUCTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: GET_ONE_PRODUCTS_ERROR, 
            payload: error
        })
    }
}