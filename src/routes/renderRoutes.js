import React from 'react'
import isAuth from '../Utils/Authenticate/userAuth'
import { useHistory, Route } from 'react-router-dom'

export default (route) => {
    const history = useHistory()
    const { title, isProtected, forAuth, isIndex, path } = route
    document.title = title

    if (isProtected && !isAuth()) history.push('/login')
    if ((forAuth || isIndex) && isAuth()) history.push('/dashboard')

    return (
        <Route
            path={path}
            exact
            render={(props) => <route.component {...props} />}
        /> 
    )
}