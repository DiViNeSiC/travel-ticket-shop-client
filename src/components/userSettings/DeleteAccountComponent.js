import React from 'react'
import Form from '../../Layouts/UserSettings/deleteAccForm'
import usePasswordForm from './Hooks/usePasswordForm'

export default () => {
    return <Form {...usePasswordForm()} />
}
