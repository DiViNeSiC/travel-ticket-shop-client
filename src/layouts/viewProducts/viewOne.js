import React from 'react'
import Segment from '../segment/segment'
import Dimmer from '../segment/dimmer'
import RenderOneProduct from './productsLayout/renderOneProduct'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
    quantity
}) => {
    return (
        <div style={{ width: '400px'}}>
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
                <RenderOneProduct {...product} />
            }
            {isAuth && 
                <div>
                    <input
                        min={1}
                        max={10}
                        value={quantity}
                        onChange={onQuantityChange}
                        type="number"
                    />
                    <Button
                        content="Add To Cart"
                        icon={{ className: "plus cart" }}
                        color={error ? 'red' : cartSuccess ? 'green' : 'vk'}
                        onClick={onAddCart}
                        disabled={error || cartSuccess}
                    />
                </div>
            }
            {!isAuth && 
                <div>
                    <Button 
                        as={Link} 
                        to="/login" 
                        content="You Must Login For Adding To Your Cart"
                        icon={{ className: "sign in" }}
                    />
                </div>
            }
        </div>
    )
}


