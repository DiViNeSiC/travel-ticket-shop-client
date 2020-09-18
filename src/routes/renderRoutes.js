import React, { useContext } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { GlobalContext } from '../context/contextProvider/provider'
import isAuth from '../utils/authenticate/userAuth'

export default (route) => {
    const { authState: { login: { token } } } = useContext(GlobalContext)
    const history = useHistory()
    document.title = route.title

    if (route.protected && !isAuth() && token != null) {
        history.push('/login')
    }

    if ((route.forAuth || route.isIndex) && isAuth()) {
        history.push('/dashboard')
    }

    return (    
        <Route
            exact={route.exact}
            path={route.path}
            render={(props) => <route.component {...props} />}
        /> 
    )
}