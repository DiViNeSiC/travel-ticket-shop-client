import React from 'react'
import useCreate from './hooks/useCreate'
import Form from '../../layouts/controlProduct/createForm'

export default () => {
    return <Form {...useCreate()} />
}
