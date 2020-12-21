import axios from '../../Helpers/Axios/axiosInstance'
import {
    ERROR,
    LOADING,
    EDIT_PRODUCT,
    UPLOAD_IMAGE,
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    GET_ONE_PRODUCT,
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT_IMAGE,
} from '../../Constants/productControls'

export const createProduct = (formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const res = await axios().post('/control/product', formData, config)
        dispatch({ type: CREATE_PRODUCT, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const deleteImage = (productId, fileName) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().delete(`/control/product/${productId}/${fileName}`)
        dispatch({ type: DELETE_PRODUCT_IMAGE, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().delete(`/control/product/${productId}`)
        dispatch({ type: DELETE_PRODUCT, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const editProduct = (formData, productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().put(`/control/product/${productId}`, formData)
        dispatch({ type: EDIT_PRODUCT, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const getAllProducts = async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().get('/control/product')
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data.allProducts })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const getProductById = (productId) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await axios().get(`/control/product/${productId}`)
        dispatch({ type: GET_ONE_PRODUCT, payload: res.data.product })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}

export const uploadImage = (productId, formData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const res = await axios().post(`/control/product/${productId}`, formData, config)
        dispatch({ type: UPLOAD_IMAGE, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ERROR, payload: error })
    }
}