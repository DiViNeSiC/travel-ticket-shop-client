import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    UPDATE_AVATAR
} from '../../../constants/userSettings'

export default (formData) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    }

    try {
        dispatch({ type: LOADING })

        const res = await axios
            .put('/dashboard/settings/update/avatar', formData, config)

        dispatch({ 
            type: UPDATE_AVATAR,
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