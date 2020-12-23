import axios from '../../../../helpers/axios/axiosInstance'
import { 
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../../../../constants/auth'

export default (formData, role) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    }

    try {
        dispatch({ type: REGISTER_LOADING })

        const res = await axios()
            .post(`/register/${role}`, formData, config)

        dispatch({ 
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        let error = err
        
        if (err.response) {
            error = err.response.data
        }
        
        dispatch({ 
            type: REGISTER_ERROR,
            payload: error
        })
    }
}