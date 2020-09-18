import axios from '../../../helpers/axios/axiosInstance'

import {
    LOADING,
    ERROR,
    DELETE_AVATAR
} from '../../../constants/userSettings'

export default async (dispatch) => {
    try {
        dispatch({ type: LOADING })

        const res = await axios()
            .delete('/dashboard/settings/avatar/delete')

        dispatch({ 
            type: DELETE_AVATAR,
            payload: res.data.taskMessage
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