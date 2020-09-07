import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import isAuth from '../utils/authenticate/userAuth'
import headers from '../helpers/axios/headers'

export default (route) => {
    const history = useHistory()
    document.title = route.title

    if (route.protected && !isAuth() && !headers.Authorization) {
        history.push('/login')
    }

    if (route.forAuth && isAuth()) {
        history.push('/dashboard')
    }

    return (
        <Route
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
        /> 
    )
}