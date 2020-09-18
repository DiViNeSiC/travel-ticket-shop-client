import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import isAuth from '../utils/authenticate/userAuth'

export default (route) => {
    const history = useHistory()
    const { isProtected, forAuth, isIndex, path } = route
    document.title = route.title

    if (isProtected && !isAuth()) {
        history.push('/login')
    }

    if ((forAuth || isIndex) && isAuth()) {
        history.push('/dashboard')
    }

    return (    
        <Route
            path={path}
            exact
            render={(props) => <route.component {...props} />}
        /> 
    )
}