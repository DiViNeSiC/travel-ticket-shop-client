import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { deleteProduct, getAllProducts } from '../../../Context/ProductControl/actions'

export default (redirect = false) => {
    const history = useHistory()
    const { productControlsDispatch } = useContext(GlobalContext)

    const onDelete = (productId) => { handleDeleteProduct(productId) }

    const handleDeleteProduct = async (productId) => {
        await deleteProduct(productId)(productControlsDispatch)
        await getAllProducts(productControlsDispatch)
        if (redirect) history.push('/control/products')
    }

    return { onDelete }
}