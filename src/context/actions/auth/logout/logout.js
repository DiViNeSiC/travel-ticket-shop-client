import axios from '../../../../helpers/axios/axiosInstance'
import { 
    LOGOUT_USER_ERROR,
    LOGOUT_USER_LOADING,
    LOGOUT_USER_SUCCESS
} from '../../../../constants/auth'

export default async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_LOADING })

        await axios().delete('/logout')

        dispatch({ type: LOGOUT_USER_SUCCESS })        
    } catch (err) {
        let error = err
        
        if (err.response) {
            error = err.response.data
        }

        dispatch({ 
            type: LOGOUT_USER_ERROR,
            payload: error
        })
    }
}