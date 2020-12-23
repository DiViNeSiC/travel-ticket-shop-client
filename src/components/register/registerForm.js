import React from 'react'
import Form from '../../layouts/register/form'
import useUpload from './hooks/useUpload'
import useForm from './hooks/useForm'

export default () => {
    return <Form form={useForm()} upload={useUpload()} />
}
