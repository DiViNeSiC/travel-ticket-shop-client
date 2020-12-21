import axios from '../../Helpers/Axios/axiosInstance'

import {
    ERROR,
    LOADING,
    UPDATE_AVATAR,
    GET_USER_INFO,
    DELETE_AVATAR,
    DELETE_ACCOUNT,
    UPDATE_USER_INFO,
    UPDATE_USER_PASS,
} from '../../Constants/userControls'

export const changeAvatar = (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const res = await axios().put('/dashboard/settings/update/avatar', formData, config)
        dispatch({ type: UPDATE_AVATAR, payload: res.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const deleteAccount = (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const config = { headers: { 'Content-Type': 'application/json' }, params: formData }
        const res = await axios().delete('/dashboard/settings/delete-account', config)
        dispatch({ type: DELETE_ACCOUNT, payload: res.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const deleteAvatar = async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().delete('/dashboard/settings/avatar/delete')
        dispatch({ type: DELETE_AVATAR, payload: res.data.taskMessage })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const getInfo = async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().get('/dashboard/settings')
        dispatch({ type: GET_USER_INFO, payload: res.data.user })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const updateInfo = (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const res = await axios().put('/dashboard/settings/update', formData, config)
        dispatch({ type: UPDATE_USER_INFO, payload: res.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const updatePassword = (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().put('/dashboard/settings/change-password', formData)
        dispatch({ type: UPDATE_USER_PASS, payload: res.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}