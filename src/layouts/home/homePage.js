import React from 'react'
import Products from '../ViewProducts/ProductsLayout/renderProducts'
import { Icon, Button } from 'semantic-ui-react'
import SegmentError from '../Segment/segment'
import Dimmer from '../Segment/dimmer'
import SearchForm from './searchForm'

export default ({ search, products: {
    error,
    limit,
    loading,
    allProducts,
    segmentShow,
    resultLength,
    handleIncrease,
    resultProducts,
    viewProductDispatch
}}) => {
    return (
        <div className="home-page-container">
            <h1 className="main-header">
                Let's Travel Anywhere <Icon name="rocket" />
            </h1>
            <div className="search-form-container">
                <SearchForm {...search} />
            </div>
            <Dimmer 
                error={error}
                loading={loading}
            />
            <SegmentError 
                dispatch={viewProductDispatch} 
                message={error ? error.message : null} 
                type={'error'} 
                show={segmentShow} 
            />
            {!loading && !error && 
                <div>
                    <Products 
                        length={resultLength} 
                        products={resultProducts} 
                        allProducts={allProducts}
                    />
                </div>
            }
            {!loading && !error && allProducts.length > limit &&
                <Button onClick={handleIncrease}>Show More...</Button>
            }
        </div>
    ) 
}