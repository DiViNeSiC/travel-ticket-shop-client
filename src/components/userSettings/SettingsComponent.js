import React from 'react'
import useSettings from './Hooks/useSettings'
import Form from '../../Layouts/UserSettings/settingForm'

export default () => {
    return <Form {...useSettings()} />
}
