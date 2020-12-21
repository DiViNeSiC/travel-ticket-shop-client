import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { useParams } from "react-router-dom"
import useDelete from './useDeleteProduct'
import { 
    uploadImage,
    deleteImage,
    editProduct,
    getProductById,
} from '../../../Context/ProductControl/actions'

export default () => {
    const {
        productControlsDispatch, 
        productControlsState: { loading, segmentShow, oneProduct, success, error }
    } = useContext(GlobalContext)
    const { id } = useParams()
    const { onDelete } = useDelete(true)
    const [productInfo, setProductInfo] = useState(null)
    
    const onLoad = () => { handleGetProduct() }

    const handleGetProduct = async () => {
        if (!id) return
        await getProductById(id)(productControlsDispatch)
    }

    const setInfo = () => {
        if (!oneProduct) return
        setProductInfo(oneProduct)
    }

    const onChange = ({ target: { name, value }}) => { setProductInfo({ ...productInfo, [name]: value }) }

    const onDeleteImage = (imageName) => { handleDeleteImage(imageName) }

    const handleDeleteImage = async (imageName) => {
        await deleteImage(id, imageName)(productControlsDispatch)
    }
    
    const onEdit = () => {
        const { title, price, description, continent } = productInfo
        handleEdit({ title, price, description, continent })
    }
    
    const handleEdit = async (formData) => { editProduct(formData, id)(productControlsDispatch) }

    const onUploadImage = (file) => {
        const formData = new FormData()
        formData.append('productImage', file)
        handleUploadImage(formData)
    }

    const handleUploadImage = async (formData) => { uploadImage(id, formData)(productControlsDispatch) }
    
    const update = () => { if (oneProduct && success) handleGetProduct() }

    useEffect(onLoad, [])
    useEffect(update, [success])
    useEffect(setInfo, [oneProduct])
    return {
        id,
        error,
        onEdit,
        loading,
        success,
        onDelete,
        onChange,
        segmentShow,
        productInfo,
        onUploadImage,
        onDeleteImage,
        productControlsDispatch,
        type: error ? 'error' : 'success'
    }
}