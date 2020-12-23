import axios from '../../../../helpers/axios/axiosInstance'
import { 
    FORGOT_PASS_ERROR,
    FORGOT_PASS_LOADING,
    FORGOT_PASS_SUCCESS
} from '../../../../constants/forgotPass'

export default (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASS_LOADING })

        const res = await axios().put(`/login/forgot-password`, { email })

        dispatch({ 
            type: FORGOT_PASS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: FORGOT_PASS_ERROR,
            payload: error
        })
    }
}