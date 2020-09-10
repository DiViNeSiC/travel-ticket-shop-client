import React from 'react'
import Dimmer from '../segment/dimmer'
import Segment from '../segment/segment'
import RenderProducts from './partials/renderCartProducts'
import Modal from './partials/modal'
import TotalPrice from './partials/totalPrice'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({
    openQuantityModal,
    closeQuantityModal,
    incrementQuantity,
    decrementQuantity,
    onChangeQuantity,
    onRemoveOne,
    onRemoveAll,
    userCartDispatch,
    loading,
    error,
    success,
    quantity,
    cartProducts,
    details,
    segmentShow,
    showModal,
    type
}) => {
    return (
        <div className="cart-container">
            <h1>
                <Icon size="small" name="cart" /> Your Cart <Icon size="small" name="cart" />
            </h1>
            <div>
                <Dimmer error={error} loading={loading} />
                <Segment 
                    dispatch={userCartDispatch}
                    message={error ? error : success}
                    show={segmentShow}
                    type={type}
                />
            </div>
            { cartProducts &&
                <RenderProducts
                    details={details}
                    products={cartProducts}
                    onRemoveOne={onRemoveOne}
                    openQuantityModal={openQuantityModal}
                />
            }
            { !cartProducts &&
                <div className="empty-message">
                    Your Cart Is Empty
                    <Button
                        className="btn"
                        as={Link}
                        to="/dashboard"
                        secondary
                        inverted
                        content="Back To Products"
                    />
                </div>
            }
            {showModal &&
                <Modal
                    closeQuantityModal={closeQuantityModal}
                    decrementQuantity={decrementQuantity}
                    incrementQuantity={incrementQuantity}
                    onChangeQuantity={onChangeQuantity}
                    quantity={quantity}
                />
            }
            <br/>
            <br/>
            { cartProducts && details &&
                <>
                    <div className="clear-cart">
                        <Button 
                            onClick={onRemoveAll}
                            icon={{ className: 'trash alternate' }}
                            content="Clear Cart"
                            negative
                            className="btn"
                        />
                    </div>
                    <div className="total-payment">
                        <TotalPrice
                            details={details}
                            products={cartProducts}
                        /> 
                    </div>
                </>
            }
        </div>
    )
}
