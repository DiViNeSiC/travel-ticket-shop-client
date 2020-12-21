import { useContext } from "react"
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { createProduct } from '../../../Context/ProductControl/actions'

export default () => {
    const {
        productControlsDispatch, 
        productControlsState: { loading, segmentShow, success, error }
    } = useContext(GlobalContext)

    const onSubmit = (e) => {
        const formData = new FormData(e.target)
        handleCreate(formData)
    }

    const handleCreate = async (formData) => { createProduct(formData)(productControlsDispatch) }

    return {
        error,
        loading,
        success,
        onSubmit,
        segmentShow,
        productControlsDispatch,
        type: error ? 'error' : 'success'
    }
}