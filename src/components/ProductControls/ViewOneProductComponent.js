import React from 'react'
import Form from '../../Layouts/ProductControls/editProduct'
import useControl from './Hooks/useControl'

export default () => {
    return <Form {...useControl()} />
}
