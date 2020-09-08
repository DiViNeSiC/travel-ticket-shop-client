import React from 'react'
import Products from './Products/renderProducts'
import { Dimmer, Loader, Icon, Button } from 'semantic-ui-react'
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
        <div className="home-page-container">
            <h1 className="main-header">
                Let's Travel Anywhere <Icon name="rocket" />
            </h1>
            <div className="search-form-container">
                <SearchForm {...search} />
            </div>
            {!error && 
                <Dimmer className="dimmer" active={loading} inverted>
                    <Loader inverted>Loading Products...</Loader>
                </Dimmer>
            }
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
                        limit={limit}
                    />
                </div>
            }
            {!loading && !error && allProducts.length > limit &&
                <Button onClick={handleIncrease}>Show More...</Button>
            }
        </div>
    ) 
}