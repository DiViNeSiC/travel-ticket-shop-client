import { useContext, useState, useEffect } from "react"
import { REGISTER_CLEAR } from '../../../Constants/authActions'
import { register, clearMessage } from '../../../Context/Auth/actions'
import { GlobalContext } from '../../../Context/ContextProvider/provider'

export default () => {
    const { 
        authDispatch,  
        authState: { segmentShow, register: { loading, error, successMessage } }
    } = useContext(GlobalContext)
    const [adminUser, setAdminUser] = useState(false)

    const onChangeAdminUser = () => { setAdminUser(prevState => !prevState) }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const role = adminUser ? 'admin': 'user'
        handleLogin(formData, role)
    }

    const handleLogin = async (data, role) => { await register(data, role)(authDispatch) } 

    const enableButton = () => {
        if (successMessage)
            setTimeout(() => { clearMessage(REGISTER_CLEAR)(authDispatch) }, 12000)
    }

    useEffect(enableButton, [successMessage])
    return {
        error,
        loading,
        onSubmit,
        adminUser,
        segmentShow,
        authDispatch,
        onChangeAdminUser,
        type: error ? 'error' : 'success',
        successMessage: successMessage ? successMessage.message : null,
    }
}