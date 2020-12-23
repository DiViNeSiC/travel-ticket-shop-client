import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    UPDATE_USER_PASS
} from '../../../constants/userSettings'

export default (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios()
            .put(
                '/dashboard/settings/change-password', 
                formData
            )

        dispatch({ 
            type: UPDATE_USER_PASS,
            payload: res.data.message
        })
    } catch (err) {
        let error = err.message
        
        if (err.response) {
            error = err.response.data.message
        }

        dispatch({ 
            type: ERROR,
            payload: error
        })
    }
}