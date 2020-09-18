import axios from '../../../../helpers/axios/axiosInstance'
import { 
    RESET_PASS_LOADING,
    RESET_PASS_SUCCESS,
    RESET_PASS_ERROR
} from '../../../../constants/forgotPass'

export default (newPassword, token) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASS_LOADING })

        const res = await axios()
            .put(`/login/reset-password/${token}`, { newPassword })

        dispatch({ 
            type: RESET_PASS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: RESET_PASS_ERROR,
            payload: error
        })
    }
}