import React from 'react'
import Form from '../../Layouts/UserSettings/changePassForm'
import usePasswordForm from './Hooks/usePasswordForm'

export default () => {
    return <Form {...usePasswordForm()} />
}
