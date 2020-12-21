import { useContext, useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { resetPass } from '../../../Context/Auth/actions'
import { GlobalContext } from "../../../Context/ContextProvider/provider"

export default () => {
    const { 
        authDispatch,  
        authState: { segmentShow, reset: { loading, error, successMessage } }
    } = useContext(GlobalContext)
    
    const history = useHistory()
    const { token } = useParams()
    const [newPassword, setNewPassword] = useState()

    const onSubmit = () => { handleResetPassword() }
    const onChange = (e) => { setNewPassword(e.target.value) }
    const handleResetPassword = async () => { await resetPass(newPassword, token)(authDispatch) }

    const redirect = () => {
        if (successMessage) setTimeout(() => { history.push('/login') }, 5000)
    }

    useEffect(redirect, [successMessage])
    return {
        error,
        loading,
        onChange,
        onSubmit,
        segmentShow,
        authDispatch,
        type: error ? 'error' : 'success',
        successMessage: successMessage ? successMessage.message : null
    }
}