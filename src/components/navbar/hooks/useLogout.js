import { useContext, useEffect } from "react"
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { useLocation, useHistory } from "react-router-dom"
import { logout } from '../../../Context/Auth/actions'
import userAuth from '../../../Utils/Authenticate/userAuth'

export default () => {
    const { 
        authDispatch,
        authState: { segmentShow, logout: { loading, error, success } }
    } = useContext(GlobalContext)

    const isAuth = userAuth()
    const history = useHistory()
    const { pathname: pathName } = useLocation()

    const onClick = () => { handleLogout() }
    const handleLogout = async () => { await logout(authDispatch) }

    const deleteToken = () => {
        if (!success) return
        localStorage.removeItem('TRAVEL_SHOP_USER_ROLE')
        localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
        localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
        history.push('/login')
    }

    useEffect(deleteToken, [success])
    return {
        error,
        isAuth,
        onClick,
        loading,
        pathName,
        segmentShow,
        authDispatch,
    }
}