import axios from '../../../../helpers/axios/axiosInstance'
import { 
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../../../constants/auth'

export default (formData, rememberUser) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'application/json' 
        }
    }

    try {
        dispatch({ type: LOGIN_LOADING })

        const res = await axios()
            .post(`/login/${rememberUser}`, formData, config)

        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err

        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: LOGIN_ERROR,
            payload: error
        })
    }
}