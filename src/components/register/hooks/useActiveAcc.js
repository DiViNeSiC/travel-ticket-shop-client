import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../../context/contextProvider/provider"
import activeAcc from '../../../context/actions/auth/register/activeAccount'

export default () => {
    const { 
        authDispatch,  
        authState: {
            activeAcc: {
                loading,
                error,
                successMessage
            } 
        }
    } = useContext(GlobalContext)

    const { token } = useParams()

    const onLoad = () => {
        handleActiveAccount()
    }

    const handleActiveAccount = async () => {
        activeAcc(token)(authDispatch)
    }

    useEffect(onLoad, [])

    return {
        loading,
        error: error ? error : null,
        successMessage: successMessage ? 
            successMessage.message : null
    }
}