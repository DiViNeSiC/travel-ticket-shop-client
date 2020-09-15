import React from 'react'
import Form from '../../layouts/controlProduct/editProduct'
import useControl from './hooks/useControl'

export default () => {
    return <Form {...useControl()} />
}
