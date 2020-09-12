import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    DELETE_ACCOUNT
} from '../../../constants/userSettings'

export default (formData) => async (dispatch) => {
    const config = { 
        headers: { 
            'Content-Type': 'application/json' 
        },
        params: formData
    }
    
    try {
        dispatch({ type: LOADING })

        const res = await axios
            .delete('/dashboard/settings/delete-account', config)

        dispatch({ 
            type: DELETE_ACCOUNT,
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