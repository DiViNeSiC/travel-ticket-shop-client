import React from 'react'
import AllProducts from '../../Layouts/ProductControls/allProducts'
import useGetAll from './Hooks/useGetAll'

export default () => {
    return <AllProducts {...useGetAll()} />
}
