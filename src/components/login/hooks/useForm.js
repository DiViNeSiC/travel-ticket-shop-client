import { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../../context/contextProvider/provider"
import login from '../../../context/actions/auth/login/login'
import removeToken from '../../../context/actions/auth/login/removeToken'

export default () => {
    const { 
        authDispatch,
        authState: {
            segmentShow,
            login: {
                loading,
                error,
                token,
                user
            } 
        }
    } = useContext(GlobalContext)

    const history = useHistory()

    const [formData, setFormData] = useState({})
    const [rememberUser, setRememberUser] = useState(false)

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    const onChangeRememberUser = () => {
        setRememberUser(prevState => !prevState)
    }

    const onSubmit = () => {
        handleLogin() 
    }

    const handleLogin = async () => {
        await login(formData, rememberUser)(authDispatch)
    }

    const saveToken = () => {
        if (user?.avatarImagePath) {
            localStorage.setItem('TRAVEL_SHOP_AVATAR_LOCATION', user.avatarImagePath)
        }

        if (user?.role === 'admin') {
            localStorage.setItem('TRAVEL_SHOP_USER_ROLE', user.role)
        }
        
        if (token) {
            localStorage.setItem('TRAVEL_SHOP_AUTH_TOKEN', token)
            removeToken(authDispatch)
        }
    }

    const redirect = () => {
        if (localStorage.TRAVEL_SHOP_AUTH_TOKEN) {
            history.push('/dashboard')
        }
    }

    useEffect(saveToken, [token])
    useEffect(redirect, [token])

    return {
        onChange,
        onChangeRememberUser,
        onSubmit,
        loading,
        error,
        segmentShow,
        authDispatch,
        type: 'error'
    }
}