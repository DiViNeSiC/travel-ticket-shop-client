import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import { FORGOT_PASS_CLEAR } from '../../../constants/clearMessage'
import forgotPass from '../../../context/actions/auth/forgotPass/forgotPass'
import clearMessage from '../../../context/actions/auth/clearMessage/clearMessage'

export default () => {
    const { 
        forgotPassDispatch,  
        forgotPassState: {
            segmentShow,
            forgot: {
                loading,
                error,
                successMessage
            } 
        }
    } = useContext(GlobalContext)

    const [email, setEmail] = useState()

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        handleForgotPass()
    }

    const handleForgotPass = async () => {
        await forgotPass(email)(forgotPassDispatch)
    }

    const enableButton = () => {
        if (successMessage) {
            setTimeout(() => {
                clearMessage(FORGOT_PASS_CLEAR)(forgotPassDispatch)
            }, 10000)
        }
    }

    useEffect(enableButton, [successMessage])

    return {
        onChange,
        onSubmit,
        forgotPassDispatch,
        loading,
        error,
        segmentShow,
        type: error ? 'error' : 'success',
        successMessage: successMessage ? 
            successMessage.message : null
    }
}