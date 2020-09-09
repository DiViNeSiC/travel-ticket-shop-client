import React, { createContext, useReducer } from 'react'
import authReducer from '../reducers/auth'
import authStates from '../initialStates/auth'
import forgotPassReducer from '../reducers/forgotPass'
import forgotPassStates from '../initialStates/forgotPass'
import viewProductReducer from '../reducers/viewProduct'
import viewProductStates from '../initialStates/viewProduct'
import userCartReducer from '../reducers/userCart'
import userCartStates from '../initialStates/userCart'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(
        authReducer, authStates
    )

    const [forgotPassState, forgotPassDispatch] = useReducer(
        forgotPassReducer, forgotPassStates
    )

    const [viewProductState, viewProductDispatch] = useReducer(
        viewProductReducer, viewProductStates
    )

    const [userCartState, userCartDispatch] = useReducer(
        userCartReducer, userCartStates
    )

    return (
        <GlobalContext.Provider 
            value={{
                authState,
                viewProductState,
                forgotPassState,
                userCartState,
                forgotPassDispatch,
                authDispatch,
                viewProductDispatch,
                userCartDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}