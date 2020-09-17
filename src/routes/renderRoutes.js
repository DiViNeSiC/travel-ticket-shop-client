import React from 'react'
import { useHistory, Route, useLocation } from 'react-router-dom'
import isAuth from '../utils/authenticate/userAuth'
import headers from '../helpers/axios/headers'
import notFound from '../components/notFound/notFound'

export default (route) => {
    const history = useHistory()
    const { pathname } = useLocation()
    document.title = route.title

    if (route.protected && !isAuth() && !headers.Authorization) {
        history.push('/login')
    }

    if ((route.forAuth || route.isIndex) && isAuth()) {
        history.push('/dashboard')
    }

    return (
        <>
            {route.path !== pathname ? 
                <Route component={notFound} /> :
                <Route
                    exact
                    path={route.path}
                    render={(props) => <route.component {...props} />}
                /> 
            }
        </>
    )
}