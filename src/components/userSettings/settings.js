import React from 'react'
import useSettings from './hooks/useSettings'
import Form from '../../layouts/userSettings/settingForm'

export default () => {
    return <Form {...useSettings()} />
}
