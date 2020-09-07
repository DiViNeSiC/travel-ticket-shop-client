import React from 'react'
import Products from './Products/renderProducts'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import SegmentError from '../segment/segment'
import SearchForm from './searchForm'

export default ({ 
    searchHook,
    productsHook: {
        products,
        isSearching,
        loading,
        error,
        productDispatch,
        length,
        segmentShow
    }
}) => {
    return (
        <>
            <SearchForm {...searchHook} />
            <Segment>
                <Dimmer active={loading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <SegmentError 
                    dispatch={productDispatch} 
                    message={error} 
                    type={'error'} 
                    show={segmentShow} 
                />
                {!loading && 
                    <Products 
                        length={length} 
                        products={products} 
                        isSearching={isSearching} 
                    />
                }
            </Segment>
        </>
    ) 
}