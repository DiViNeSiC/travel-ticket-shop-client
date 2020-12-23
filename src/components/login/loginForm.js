import React from 'react'
import LoginForm from '../../layouts/login/form'
import useForm from './hooks/useForm'

export default () => {
    return <LoginForm {...useForm()} />
}
