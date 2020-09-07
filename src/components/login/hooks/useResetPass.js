import { useContext, useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { GlobalContext } from "../../../context/contextProvider/provider"
import resetPass from '../../../context/actions/auth/forgotPass/resetPass'

export default () => {
    const { 
        forgotPassDispatch,  
        forgotPassState: {
            segmentShow,
            reset: {
                loading,
                error,
                successMessage
            } 
        }
    } = useContext(GlobalContext)
    
    const history = useHistory()
    const { token } = useParams()

    const [newPassword, setNewPassword] = useState()

    const onChange = (e) => {
        setNewPassword(e.target.value)
    }

    const onSubmit = () => {
        handleResetPassword()
    }

    const handleResetPassword = async () => {
        await resetPass(
            newPassword, token
        )(forgotPassDispatch)
    }

    const redirect = () => {
        if (successMessage) {
            setTimeout(() => {
                history.push('/login')
            }, 5000)
        }
    }

    useEffect(redirect, [successMessage])

    return {
        onChange,
        onSubmit,
        forgotPassDispatch,
        error,
        loading,
        segmentShow,
        type: error ? 'error' : 'success',
        successMessage: successMessage ? 
            successMessage.message : null
    }
}