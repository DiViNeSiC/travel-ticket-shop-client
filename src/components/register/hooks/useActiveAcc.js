import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { activeAccount } from '../../../Context/Auth/actions'

export default () => {
    const { 
        authDispatch,  
        authState: { activeAcc: { loading, error, successMessage } }
    } = useContext(GlobalContext)
    const { token } = useParams()

    const onLoad = () => { handleActiveAccount() }
    const handleActiveAccount = async () => { activeAccount(token)(authDispatch) }

    useEffect(onLoad, [])
    return {
        loading,
        error: error ? error : null,
        successMessage: successMessage ? successMessage.message : null
    }
}