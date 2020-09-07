import axios from '../../../helpers/axios/axiosInstance'
import { 
    GET_ALL_PRODUCTS_LOADING,
    GET_ALL_PRODUCTS_SUCCESS, 
    GET_ALL_PRODUCTS_ERROR 
}  from '../../../constants/viewProduct'

export default (isIndex) => async (productDispatch) => {
    try {
        const url = isIndex ? '/' : '/dashboard'
        productDispatch({ type: GET_ALL_PRODUCTS_LOADING })
        
        const res = await axios.get(`${url}`)

        productDispatch({ 
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data 
        })
    } catch (err) {
        productDispatch({ 
            type: GET_ALL_PRODUCTS_ERROR, 
            payload: err.response 
        })
    }
}