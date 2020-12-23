import { useContext } from "react"
import { GlobalContext } from '../../../context/contextProvider/provider'
import deleteProduct from '../../../context/actions/controlProduct/deleteProduct'
import getAll from '../../../context/actions/controlProduct/getAll'
import { useHistory } from "react-router-dom"

export default (redirect = false) => {
    const { controlProductDispatch } = useContext(GlobalContext)

    const history = useHistory()

    const onDelete = (productId) => {
        handleDeleteProduct(productId)
    }

    const handleDeleteProduct = async (productId) => {
        await deleteProduct(productId)(controlProductDispatch)
        await getAll(controlProductDispatch)
        
        if (redirect) {
            history.push('/control/products')
        }
    }

    return { onDelete }
}