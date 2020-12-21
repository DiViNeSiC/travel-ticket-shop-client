import React from 'react'
import Form from '../../Layouts/Register/form'
import useUpload from './Hooks/useUpload'
import useForm from './Hooks/useForm'

export default () => {
    return <Form form={useForm()} upload={useUpload()} />
}
