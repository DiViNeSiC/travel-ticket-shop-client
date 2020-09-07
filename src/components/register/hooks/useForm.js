import { useContext, useState, useEffect } from "react"
import { GlobalContext } from '../../../context/contextProvider/provider'
import { REGISTER_CLEAR } from '../../../constants/clearMessage'
import register from '../../../context/actions/auth/register/register'
import clearMessage from '../../../context/actions/auth/clearMessage/clearMessage'

export default () => {
    const { 
        authDispatch,  
        authState: {
            segmentShow,
            register: {
                loading,
                error,
                successMessage
            } 
        }
    } = useContext(GlobalContext)

    const [adminUser, setAdminUser] = useState(false)

    const onChangeAdminUser = () => {
        setAdminUser(prevState => !prevState)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        const role = adminUser ? 'admin': 'user'

        handleLogin(formData, role)
    }

    const handleLogin = async (data, role) => {
        await register(data, role)(authDispatch)
    } 

    const enableButton = () => {
        if (successMessage) {
            setTimeout(() => {
                clearMessage(REGISTER_CLEAR)(authDispatch)
            }, 10000)
        }
    }

    useEffect(enableButton, [successMessage])

    return {
        onSubmit,
        onChangeAdminUser,
        adminUser,
        loading,
        authDispatch,
        segmentShow,
        error,
        type: error ? 'error' : 'success',
        successMessage: successMessage ? 
            successMessage.message : null,
    }
}