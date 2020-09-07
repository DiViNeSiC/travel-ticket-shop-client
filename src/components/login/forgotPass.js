import React from 'react'
import Form from '../../layouts/login/forgotPassForm'
import useForgotPass from './hooks/useForgotPass'

export default () => {
    return <Form {...useForgotPass()} />
}
