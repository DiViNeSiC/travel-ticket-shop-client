import { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import isAuth from '../../../Utils/Authenticate/userAuth'
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { login, removeLoginToken } from '../../../Context/Auth/actions'

export default () => {
    const { 
        authDispatch,
        authState: { segmentShow, login: { loading, error, token, user } }
    } = useContext(GlobalContext)

    const history = useHistory()
    const [formData, setFormData] = useState({})
    const [rememberUser, setRememberUser] = useState(false)

    const onChange = ({ target: { name, value }}) => { setFormData({...formData, [name]: value }) }

    const onChangeRememberUser = () => { setRememberUser(prevState => !prevState) }

    const onSubmit = () => { handleLogin() }

    const handleLogin = async () => { await login(formData, rememberUser)(authDispatch) }

    const saveUserInfo = () => {
        if (user?.avatarImagePath) 
            localStorage.setItem('TRAVEL_SHOP_AVATAR_LOCATION', user.avatarImagePath)

        if (user?.role === 'admin') 
            localStorage.setItem('TRAVEL_SHOP_USER_ROLE', user.role)
        
        if (token) 
            localStorage.setItem('TRAVEL_SHOP_AUTH_TOKEN', token)

        if (token && isAuth()) {
            history.push('/#/dashboard')
            removeLoginToken(authDispatch)
        }
    }

    useEffect(saveUserInfo, [token])
    return {
        error,
        loading,
        onChange,
        onSubmit,
        segmentShow,
        authDispatch,
        type: 'error',
        onChangeRememberUser,
    }
}