import React from 'react'
import AllProducts from '../../layouts/controlProduct/allProducts'
import useGetAll from './hooks/useGetAll'

export default () => {
    return <AllProducts {...useGetAll()} />
}
