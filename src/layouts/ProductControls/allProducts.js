import React from 'react'
import Segment from '../Segment/segment'
import Dimmer from '../Segment/dimmer'
import ProductCards from './Partials/productCards'
import SoldPrice from './Partials/soldPrice'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({ onDelete, productControlsDispatch, loading, segmentShow, allProducts, length, success, error, type }) => {
    return (
        <>
            <div>
                <Dimmer
                    error={error}
                    loading={loading}
                />
                <Segment 
                    dispatch={productControlsDispatch}
                    message={error ? error : success}
                    type={type}
                    show={segmentShow}
                />
            </div>
            <div className="full-width">
                <div className="prod-control-container">
                    <h2 className="length">
                        {length}
                    </h2>
                    { allProducts && 
                        <div className="prod-control">
                            <ProductCards onDelete={onDelete} allProducts={allProducts} />
                        </div>
                    }
                    <div className="btn-container">
                        { allProducts && 
                            <SoldPrice allProducts={allProducts} />
                        }
                        <Button
                            content="Upload A Product"
                            icon={{ className: 'plus' }}
                            as={Link}
                            to="/control/create/products/"
                            positive
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
