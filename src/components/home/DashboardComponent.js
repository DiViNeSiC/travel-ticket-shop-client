import React from 'react'
import HomePage from '../../Layouts/Home/homePage'
import useGetProducts from './Hooks/useGetProducts'
import useSearch from './Hooks/useSearch'

export default () => {
    return <HomePage search={useSearch()} products={useGetProducts()} />
}
