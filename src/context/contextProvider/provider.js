import React, { createContext, useReducer } from 'react'
import authReducer from '../Auth/reducer'
import authInitial from '../Auth/initialStates'
import productControlsReducer from '../ProductControl/reducer'
import productControlsInitial from '../ProductControl/initialStates'
import userCartReducer from '../UserCart/reducer'
import userCartInitial from '../UserCart/initialStates'
import userControlsReducer from '../UserControls/reducer'
import userControlsInitial from '../UserControls/initialStates'
import viewProductsReducer from '../ViewProducts/reducer'
import viewProductsInitial from '../ViewProducts/initialStates'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitial)
    const [viewProductState, viewProductDispatch] = useReducer(viewProductsReducer, viewProductsInitial)
    const [userCartState, userCartDispatch] = useReducer(userCartReducer, userCartInitial)
    const [userControlsState, userControlsDispatch] = useReducer(userControlsReducer, userControlsInitial)
    const [productControlsState, productControlsDispatch] = useReducer(productControlsReducer, productControlsInitial)

    return (
        <GlobalContext.Provider 
            value={{
                authState,
                userCartState,
                viewProductState,
                userControlsState,
                productControlsState,
                authDispatch,
                userCartDispatch,
                viewProductDispatch,
                userControlsDispatch,
                productControlsDispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}