import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    GET_USER_INFO
} from '../../../constants/userSettings'

export default async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios().get('/dashboard/settings')

        dispatch({ 
            type: GET_USER_INFO,
            payload: res.data.user
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