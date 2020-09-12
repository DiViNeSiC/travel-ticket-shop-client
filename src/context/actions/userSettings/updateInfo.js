import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    UPDATE_USER_INFO
} from '../../../constants/userSettings'

export default (formData) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'application/json' 
        }
    }

    try {
        dispatch({ type: LOADING })

        const res = await axios
            .put('/dashboard/settings/update', formData, config)

        dispatch({ 
            type: UPDATE_USER_INFO,
            payload: res.data.message
        })
    } catch (err) {
        let error = err
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: ERROR,
            payload: error
        })
    }
}