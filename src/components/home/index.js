import React from 'react'
import HomePage from '../../layouts/home/homePage'
import useGetProducts from './hooks/useGetProducts'
import useSearch from './hooks/useSearch'

export default () => {
    return <HomePage search={useSearch()} products={useGetProducts(true)} />
}
