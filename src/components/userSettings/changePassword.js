import React from 'react'
import Form from '../../layouts/userSettings/changePassForm'
import usePasswordForm from './hooks/usePasswordForm'

export default () => {
    return <Form {...usePasswordForm()} />
}
