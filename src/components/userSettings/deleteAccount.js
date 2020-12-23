import React from 'react'
import Form from '../../layouts/userSettings/deleteAccForm'
import usePasswordForm from './hooks/usePasswordForm'

export default () => {
    return <Form {...usePasswordForm()} />
}
