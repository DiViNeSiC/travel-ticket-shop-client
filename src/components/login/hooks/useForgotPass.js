import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { forgotPass, clearMessage } from '../../../Context/Auth/actions'
import { FORGOT_PASS_CLEAR } from '../../../Constants/authActions'

export default () => {
    const { 
        authDispatch,  
        authState: { segmentShow, forgot: { loading, error, successMessage } }
    } = useContext(GlobalContext)
    const [email, setEmail] = useState()

    const onChange = (e) => { setEmail(e.target.value) }

    const onSubmit = () => { handleForgotPass() }

    const handleForgotPass = async () => { await forgotPass(email)(authDispatch) }

    const enableButton = () => {
        if (successMessage)
            setTimeout(() => { clearMessage(FORGOT_PASS_CLEAR)(authDispatch) }, 12000)
    }

    useEffect(enableButton, [successMessage])
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