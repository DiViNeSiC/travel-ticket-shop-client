import React from 'react'
import Products from './Products/renderProducts'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import SegmentError from '../segment/segment'
import SearchForm from './searchForm'

export default ({ 
    search,
    products: {
        handleIncrease,
        loading,
        error,
        limit,
        resultLength,
        resultProducts,
        segmentShow,
        allProducts,
        viewProductDispatch
    }
}) => {
    return (
        <>
            <SearchForm {...search} />
            <Segment>
                <Dimmer style={{ position: 'fixed' }} active={loading} inverted>
                    <Loader>Loading Products...</Loader>
                </Dimmer>
                <SegmentError 
                    dispatch={viewProductDispatch} 
                    message={error ? error.message : null} 
                    type={'error'} 
                    show={segmentShow} 
                />
                {!loading && 
                    <div>
                        <Products 
                            length={resultLength} 
                            products={resultProducts} 
                            allProducts={allProducts}
                            handleIncrease={handleIncrease}
                            limit={limit}
                        />
                    </div>
                }
            </Segment>
        </>
    ) 
}