import React from 'react'
import { Button } from 'semantic-ui-react'

export default ({
    closeQuantityModal,
    decrementQuantity,
    incrementQuantity,
    quantity,
    onChangeQuantity
}) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="close-btn">
                    <Button
                        icon={{ className: 'times' }}
                        onClick={closeQuantityModal}
                        className="btn"
                    />
                </div>
                <div className="counter-btns">
                    <div>
                        <Button 
                            icon={{ className: 'minus' }}
                            onClick={decrementQuantity}
                            className="btn minus"
                        />
                    </div>
                    <div className="quantity">
                        {quantity}
                    </div>
                    <div>
                        <Button 
                            icon={{ className: 'plus' }}
                            onClick={incrementQuantity}
                            className="btn plus"
                        />
                    </div>
                </div>
                <div className="update-btn">
                    <Button
                        content="Update Quantity"
                        onClick={onChangeQuantity}
                        className="btn"
                        primary
                    />
                </div>
            </div>
        </div>
    )
}
