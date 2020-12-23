import axios from '../../../../helpers/axios/axiosInstance'
import { 
    ACTIVE_ACCOUNT_LOADING,
    ACTIVE_ACCOUNT_SUCCESS,
    ACTIVE_ACCOUNT_ERROR
} from '../../../../constants/auth'

export default (token) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVE_ACCOUNT_LOADING })

        const res = await axios().post(`/register/activation/${token}`)

        dispatch({ 
            type: ACTIVE_ACCOUNT_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: ACTIVE_ACCOUNT_ERROR,
            payload: error
        })
    }
}