import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../../context/contextProvider/provider'
import updatePassword from '../../../context/actions/userSettings/updatePass'
import deleteAcc from '../../../context/actions/userSettings/deleteAcc'

export default () => {
    const {
        userSettingsDispatch,
        userSettingsState: {
            loading,
            segmentShow,
            error,
            success,
        }
    } = useContext(GlobalContext)

    const [formData, setFormData] = useState({})

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = () => {
        handleChangePassword()
    }

    const handleChangePassword = async () => {
        await updatePassword(formData)(userSettingsDispatch)
    }

    const onDeleteAcc = () => {
        handleDeleteAcc()
    }

    const handleDeleteAcc = async () => {
        await deleteAcc(formData)(userSettingsDispatch)
    }

    const removeToken = () => {
        if (success) {
            localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
            localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
            localStorage.removeItem('TRAVEL_SHOP_USER_ROLE')
            return window.location = '/login'
        }
    }

    useEffect(removeToken, [success])

    return {
        onChange,
        onDeleteAcc,
        onSubmit,
        userSettingsDispatch,
        loading,
        segmentShow,
        error,
        success,
        type: error ? 'error' : 'success'
    }
}