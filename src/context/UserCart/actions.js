import axios from '../../Helpers/Axios/axiosInstance'
import {
    ERROR_PAY,
    REMOVE_ALL_ERROR,
    ADD_TO_CART_ERROR,
    REMOVE_ALL_LOADING,
    REMOVE_ALL_SUCCESS,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_LOADING,
    CHANGE_QUANTITY_ERROR,
    SUCCESS_PURCHASE_ERROR,
    REMOVE_FROM_CART_ERROR,
    CHANGE_QUANTITY_LOADING,
    CHANGE_QUANTITY_SUCCESS,
    REMOVE_FROM_CART_LOADING,
    REMOVE_FROM_CART_SUCCESS,
    SUCCESS_PURCHASE_LOADING,
    SUCCESS_PURCHASE_SUCCESS,
    GET_ALL_CART_PRODUCTS_ERROR,
    GET_ALL_CART_PRODUCTS_SUCCESS,
    GET_ALL_CART_PRODUCTS_LOADING,
} from '../../Constants/userCart'

export const quantityModalShow = (action) => (dispatch) => { dispatch({ type: action }) }

export const errPay = (err) => (dispatch) => { dispatch({ type: ERROR_PAY, payload: err }) }

export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_LOADING })
        const res = await axios().post(`/cart/add/${productId}`, { quantity })
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: ADD_TO_CART_ERROR, payload: error })
    }
}

export const changeQuantity = (productId, quantity) => async (dispatch) => {
    try {
        dispatch({ type: CHANGE_QUANTITY_LOADING })
        const res = await axios().put(`/cart/change-quantity/${productId}`, { quantity })
        dispatch({ type: CHANGE_QUANTITY_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: CHANGE_QUANTITY_ERROR, payload: error })
    }
}

export const getCartProducts = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_CART_PRODUCTS_LOADING })
        const res = await axios().get('/dashboard/cart')
        dispatch({ type: GET_ALL_CART_PRODUCTS_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: GET_ALL_CART_PRODUCTS_ERROR, payload: error })
    }
}

export const removeAllProducts = async (dispatch) => {
    try {
        dispatch({ type: REMOVE_ALL_LOADING })
        const res = await axios().delete(`/cart/delete`)
        dispatch({ type: REMOVE_ALL_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: REMOVE_ALL_ERROR, payload: error })
    }
}

export const removeOneProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_LOADING })
        const res = await axios().delete(`/cart/delete/${productId}`)
        dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: res.data })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: REMOVE_FROM_CART_ERROR, payload: error })
    }
}

export const successPurchase = (payment) => async (dispatch) => {
    try {
        dispatch({ type: SUCCESS_PURCHASE_LOADING })
        const postData = await axios().post(`/cart/success-purchase`, { payment })
        dispatch({ type: SUCCESS_PURCHASE_SUCCESS, payload: postData.data.message })
    } catch (err) {
        const error = err.response ? err.response.data ? err.response.data : err : err
        dispatch({ type: SUCCESS_PURCHASE_ERROR, payload: error })
    }
}