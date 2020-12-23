import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/contextProvider/provider'
import getInfo from '../../../context/actions/userSettings/getInfo'
import updateInfo from '../../../context/actions/userSettings/updateInfo'
import changeAvatar from '../../../context/actions/userSettings/changeAvatar'
import deleteAvatar from '../../../context/actions/userSettings/deleteAvatar'

export default () => {
    const {
        userSettingsDispatch,
        userSettingsState: {
            loading,
            segmentShow,
            error,
            success,
            user,
            avatarUpdating
        }
    } = useContext(GlobalContext)

    const [formData, setFormData] = useState()

    const onLoad = () => {
        handleGetInfo()
    }
    
    const handleGetInfo = async () => {
        await getInfo(userSettingsDispatch)
    }

    const setState = () => {
        if (user) {
            setFormData({ 
                name: user.name,
                lastname: user.lastname,
                username: user.username
            })
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = () => {
        handleUpdateInfo()
    }
    
    const handleUpdateInfo = async () => {
        await updateInfo(formData)(userSettingsDispatch)
    }

    const onChangeAvatar = (avatarFile) => {
        const formData = new FormData()
        formData.append('avatar', avatarFile)

        handleUpdateAvatar(formData, avatarFile)
    }
    
    const handleUpdateAvatar = async (formData, avatarFile) => {
        await changeAvatar(formData)(userSettingsDispatch)
        
        if (avatarFile) {
            handleGetInfo()
        }
    }

    const onDeleteAvatar = () => {
        handleDeleteAvatar()

        localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
    }
    
    const handleDeleteAvatar = async () => {
        await deleteAvatar(userSettingsDispatch)
        handleGetInfo()
    }

    const setAvatarPath = () => {
        const path = localStorage.TRAVEL_SHOP_AVATAR_LOCATION
        if (user) {
            if (user.avatarImagePath !== path) {
                localStorage.setItem(
                    'TRAVEL_SHOP_AVATAR_LOCATION', 
                    user.avatarImagePath
                )
            }
        }
    }

    useEffect(onLoad, [])
    useEffect(setState, [user])
    useEffect(setAvatarPath, [user])

    return {
        onChangeAvatar,
        onDeleteAvatar,
        onChange,
        onSubmit,
        userSettingsDispatch,
        loading,
        formData,
        segmentShow,
        error,
        success,
        avatarUpdating,
        user,
        type: error ? 'error' : 'success'
    }
}