import React from 'react'
import Form from '../../Layouts/Login/forgotPassForm'
import useForgotPass from './Hooks/useForgotPass'

export default () => {
    return <Form {...useForgotPass()} />
}
