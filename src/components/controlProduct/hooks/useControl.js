import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import { useParams } from "react-router-dom"
import getOne from '../../../context/actions/controlProduct/getOne'
import editProduct from '../../../context/actions/controlProduct/edit'
import deleteImage from '../../../context/actions/controlProduct/deleteImage'
import uploadImage from '../../../context/actions/controlProduct/uploadImage'
import useDelete from './useDeleteProduct'

export default () => {
    const {
        controlProductDispatch, 
        controlProductState: {
            loading,
            segmentShow,
            oneProduct,
            success,
            error,
        }
    } = useContext(GlobalContext)
    
    const { onDelete } = useDelete(true)

    const { id } = useParams()
    const [productInfo, setProductInfo] = useState(null)
    
    const onLoad = () => {
        handleGetProduct()
    }

    const handleGetProduct = async () => {
        await getOne(id)(controlProductDispatch)
    }

    const setInfo = () => {
        if (oneProduct) {
            setProductInfo(oneProduct)
        }
    }

    const onChange = (e) => {
        const { value, name } = e.target
        setProductInfo({ ...productInfo, [name]: value })
    }

    const onDeleteImage = (imageName) => {
        handleDeleteImage(imageName)
    }

    const handleDeleteImage = async (imageName) => {
        await deleteImage(id, imageName)(controlProductDispatch)
    }
    
    const onEdit = () => {
        const {
            title,
            price,
            description,
            continent
        } = productInfo
        
        handleEdit({ title, price, description, continent })
    }
    
    const handleEdit = async (formData) => {
        editProduct(formData, id)(controlProductDispatch)
    }

    const onUploadImage = (file) => {
        const formData = new FormData()
        formData.append('productImage', file)

        handleUploadImage(formData)
    }

    const handleUploadImage = async (formData) => {
        uploadImage(id, formData)(controlProductDispatch)
    }
    
    const update = () => {
        if (oneProduct && success) {
            handleGetProduct()
        } 
    }

    useEffect(onLoad, [])
    useEffect(setInfo, [oneProduct])
    useEffect(update, [success])

    return {
        onChange,
        onUploadImage,
        onDeleteImage,
        onEdit,
        onDelete,
        id,
        controlProductDispatch,
        loading,
        error,
        segmentShow,
        success,
        productInfo,
        type: error ? 'error' : 'success'
    }
}