import { useContext, useEffect } from "react"
import { GlobalContext } from '../../../context/contextProvider/provider'
import getAll from '../../../context/actions/controlProduct/getAll'
import useDelete from './useDeleteProduct'

export default () => {
    const {
        controlProductDispatch, 
        controlProductState: {
            loading,
            segmentShow,
            allProducts,
            allProductsLength,
            success,
            error,
        }
    } = useContext(GlobalContext)

    const { onDelete } = useDelete()
    
    const onLoad = () => {
        handleGetAllProducts()
    }

    const handleGetAllProducts = async () => {
        await getAll(controlProductDispatch)
    }

    useEffect(onLoad, [])

    const length = 
        allProductsLength ? 
        `${allProductsLength} Products` : 
        'You Do Not Have Any Products Right Now'

    return {
        onDelete,
        controlProductDispatch,
        loading,
        segmentShow,
        allProducts,
        length,
        success,
        error,
        type: error ? 'error' : 'success'
    }
}