import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../../Context/ContextProvider/provider'
import { deleteAccount, updatePassword } from '../../../Context/UserControls/actions'

export default () => {
    const {
        userControlsDispatch,
        userControlsState: { loading, segmentShow, error, success }
    } = useContext(GlobalContext)
    const history = useHistory()
    const [formData, setFormData] = useState({})

    const onChange = ({ target: { name, value }}) => { setFormData({ ...formData, [name]: value }) }

    const onSubmit = () => { handleChangePassword() }

    const handleChangePassword = async () => { await updatePassword(formData)(userControlsDispatch) }

    const onDeleteAcc = () => { handleDeleteAcc() }

    const handleDeleteAcc = async () => { await deleteAccount(formData)(userControlsDispatch) }

    const removeToken = () => {
        if (!success) return
        localStorage.removeItem('TRAVEL_SHOP_USER_ROLE')
        localStorage.removeItem('TRAVEL_SHOP_AUTH_TOKEN')
        localStorage.removeItem('TRAVEL_SHOP_AVATAR_LOCATION')
        history.push('/login') 
    }

    useEffect(removeToken, [success])
    return {
        error,
        loading,
        success,
        onSubmit,
        onChange,
        onDeleteAcc,
        segmentShow,
        userControlsDispatch,
        type: error ? 'error' : 'success'
    }
}