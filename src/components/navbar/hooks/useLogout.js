import { useContext, useEffect } from "react"
import { GlobalContext } from '../../../context/contextProvider/provider'
import logout from '../../../context/actions/auth/logout/logout'
import { useLocation, useHistory } from "react-router-dom"
import userAuth from '../../../utils/authenticate/userAuth'

export default () => {
    const { 
        authDispatch,  
        authState: {
            segmentShow,
            logout: {
                loading,
                error,
                success
            } 
        }
    } = useContext(GlobalContext)

    const { pathname } = useLocation()
    const history = useHistory()
    const isAuth = userAuth()

    const onClick = () => {
        handleLogout()
    }

    const handleLogout = async () => {
        await logout(authDispatch)
    }

    const deleteToken = () => {
        if (success) {
            localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
            history.push('/login')
        }
    }

    useEffect(deleteToken, [success])

    return {
        onClick,
        loading,
        error,
        segmentShow,
        authDispatch,
        isAuth,
        pathName: pathname
    }
}