import React from 'react'
import LoginForm from '../../Layouts/Login/form'
import useForm from './Hooks/useForm'

export default () => {
    return <LoginForm {...useForm()} />
}
