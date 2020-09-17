import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import isAuth from '../utils/authenticate/userAuth'
import headers from '../helpers/axios/headers'

export default (route) => {
    const history = useHistory()
    document.title = route.title

    if (route.protected && !isAuth() && !headers.Authorization) {
        window.location = '/login'
    }

    if ((route.forAuth || route.isIndex) && isAuth()) {
        history.push('/dashboard')
    }

    return (    
        <Route
            exact={route.isIndex}
            path={route.path}
            render={(props) => <route.component {...props} />}
        /> 
    )
}