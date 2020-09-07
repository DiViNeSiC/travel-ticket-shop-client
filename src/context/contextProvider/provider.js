import React, { createContext, useReducer } from 'react'
import authReducer from '../reducers/auth'
import authStates from '../initialStates/auth'
import forgotPassReducer from '../reducers/forgotPass'
import forgotPassStates from '../initialStates/forgotPass'
import viewProductReducer from '../reducers/viewProduct'
import viewProductStates from '../initialStates/viewProduct'

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

    return (
        <GlobalContext.Provider 
            value={{
                authState,
                viewProductState,
                forgotPassState,
                forgotPassDispatch,
                authDispatch,
                viewProductDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}