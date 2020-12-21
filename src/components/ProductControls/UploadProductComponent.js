import React from 'react'
import useCreate from './Hooks/useCreate'
import Form from '../../Layouts/ProductControls/createForm'

export default () => {
    return <Form {...useCreate()} />
}
