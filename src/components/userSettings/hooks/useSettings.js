import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { changeAvatar, getInfo, updateInfo, deleteAvatar } from '../../../Context/UserControls/actions'

export default () => {
    const {
        userControlsDispatch,
        userControlsState: {
            segmentShow, error, success,
            loading, user, avatarUpdating,
        }
    } = useContext(GlobalContext)
    const [formData, setFormData] = useState()

    const onLoad = () => { handleGetInfo() }
    const handleGetInfo = async () => { await getInfo(userControlsDispatch) }

    const setState = () => {
        if (!user) return
        const { name, lastname, username } = user
        setFormData({ name, lastname, username })
    }

    const onChange = ({ target: { name, value }}) => { setFormData({ ...formData, [name]: value }) }

    const onSubmit = () => { handleUpdateInfo() }
    
    const handleUpdateInfo = async () => { await updateInfo(formData)(userControlsDispatch) }

    const onChangeAvatar = (avatarFile) => {
        const formData = new FormData()
        formData.append('avatar', avatarFile)
        handleUpdateAvatar(formData, avatarFile)
    }
    
    const handleUpdateAvatar = async (formData, avatarFile) => {
        await changeAvatar(formData)(userControlsDispatch)
        if (avatarFile) handleGetInfo()
    }

    const onDeleteAvatar = () => {
        handleDeleteAvatar()
        localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
    }
    
    const handleDeleteAvatar = async () => {
        await deleteAvatar(userControlsDispatch)
        handleGetInfo()
    }

    const setAvatarPath = () => {
        if (!user) return
        if (user.avatarImagePath !== localStorage.TRAVEL_SHOP_AVATAR_LOCATION)
            localStorage.setItem('TRAVEL_SHOP_AVATAR_LOCATION', user.avatarImagePath)
    }

    useEffect(onLoad, [])
    useEffect(setState, [user])
    useEffect(setAvatarPath, [user])
    return {
        user,
        error,
        success,
        loading,
        formData,
        onSubmit,
        onChange,
        segmentShow,
        avatarUpdating,
        onChangeAvatar,
        onDeleteAvatar,
        userControlsDispatch,
        type: error ? 'error' : 'success'
    }
}