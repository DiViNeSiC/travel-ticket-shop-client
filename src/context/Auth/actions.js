import axios from '../../Helpers/Axios/axiosInstance'
import { 
    LOGIN_ERROR,
    REMOVE_TOKEN,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_CLEAR,
    REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    RESET_PASS_ERROR,
    FORGOT_PASS_ERROR,
    LOGOUT_USER_ERROR,
    RESET_PASS_SUCCESS,
    RESET_PASS_LOADING,
    FORGOT_PASS_LOADING, 
    FORGOT_PASS_SUCCESS, 
    LOGOUT_USER_LOADING,
    LOGOUT_USER_SUCCESS,
    ACTIVE_ACCOUNT_ERROR,
    REGISTER_CLEAR_MESSAGE,
    ACTIVE_ACCOUNT_LOADING,
    ACTIVE_ACCOUNT_SUCCESS,
    FORGOT_PASS_CLEAR_MESSAGE, 
} from "../../Constants/authActions"

export const removeLoginToken = (dispatch) => { dispatch({ type: REMOVE_TOKEN }) }

export const login = (formData, rememberUser) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_LOADING })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const res = await axios().post(`/login/${rememberUser}`, formData, config)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: LOGIN_ERROR, payload: error })
    }
}

export const logout = async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_LOADING })
        await axios().delete('/logout')
        dispatch({ type: LOGOUT_USER_SUCCESS })        
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: LOGOUT_USER_ERROR, payload: error })
    }
}

export const register = (formData, role) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_LOADING })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const res = await axios().post(`/register/${role}`, formData, config)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: REGISTER_ERROR, payload: error })
    }
}

export const activeAccount = (token) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVE_ACCOUNT_LOADING })
        const res = await axios().post(`/register/activation/${token}`)
        dispatch({ type: ACTIVE_ACCOUNT_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ACTIVE_ACCOUNT_ERROR, payload: error })
    }
}

export const clearMessage = (action) => (dispatch) => {
    const type = 
        action === REGISTER_CLEAR ? 
        REGISTER_CLEAR_MESSAGE : 
        FORGOT_PASS_CLEAR_MESSAGE
    dispatch({ type })
}

export const forgotPass = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASS_LOADING })
        const res = await axios().put(`/login/forgot-password`, { email })
        dispatch({ type: FORGOT_PASS_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: FORGOT_PASS_ERROR, payload: error })
    }
}

export const resetPass = (newPassword, token) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASS_LOADING })
        const res = await axios().put(`/login/reset-password/${token}`, { newPassword })
        dispatch({ type: RESET_PASS_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: RESET_PASS_ERROR, payload: error })
    }
}