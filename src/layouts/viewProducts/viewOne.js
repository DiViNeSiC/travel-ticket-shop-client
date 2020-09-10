import React from 'react'
import Segment from '../segment/segment'
import Dimmer from '../segment/dimmer'
import RenderOneProduct from './productsLayout/renderOneProduct'

export default ({ 
    onAddCart,
    onQuantityChange,
    loading,
    error, 
    cartSuccess,
    segmentShow,
    dispatch,
    isAuth,
    product,
    type,
    quantity,
    details
}) => {
    return (
        <div className="view-container">
            <div>
                <Dimmer
                    error={error}
                    loading={loading}
                    />
                <Segment 
                    message={error ? error : cartSuccess}
                    type={type}
                    show={segmentShow}
                    dispatch={dispatch}
                    />
            </div>
            {product != null && 
                <RenderOneProduct 
                    isAuth={isAuth} 
                    onQuantityChange={onQuantityChange}
                    quantity={quantity}
                    error={error}
                    cartSuccess={cartSuccess}
                    onAddCart={onAddCart}
                    details={details ? details : []}
                    {...product} 
                />
            }
        </div>
    )
}


