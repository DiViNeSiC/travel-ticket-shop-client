import React from 'react'
import Continent from './continent'
import ImageSlider from './imageSlider' 
import { Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({
    title,
    price,
    continent,
    description,
    views,
    sold,
    imagePaths,
    createdAt,
    creatorUser,
    isAuth,
    onAddCart,
    quantity,
    onQuantityChange,
    error,
    cartSuccess
}) => {
    return (
        <div className="product-details-container">   
            <div className="details-image-container">
                <ImageSlider images={imagePaths} />
                {isAuth && 
                    <div className="add-cart-container">
                        <div className="quantity">
                            <label>Quantity: </label>
                            <input
                                min={1}
                                max={10}
                                value={quantity}
                                onChange={onQuantityChange}
                                type="number"
                            />
                        </div>
                        <Button
                            className="btn"
                            content="Add To Cart"
                            icon={{ className: "plus cart" }}
                            color={error ? 'red' : cartSuccess ? 'green' : 'vk'}
                            onClick={onAddCart}
                            disabled={error || cartSuccess}
                        />
                    </div>
                }
                {!isAuth && 
                    <div className="login-add-container">
                        <Button 
                            as={Link} 
                            to="/login" 
                            content="You Must Login For Adding To Your Cart"
                            icon={{ className: "sign in" }}
                        />
                    </div>
                }
            </div>
            <div className="details">
                <h2>
                    {title}
                </h2>
                <h3>
                    Price: ${price}
                </h3>
                <h5>
                    <Continent continent={continent} />
                </h5>
                <div className="leader-details">
                    Leader: {creatorUser?.username}
                    <br/>
                    Created At: {createdAt?.split('T')[0]}
                </div>
                <div className="description-details">
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    <Label className="view-message">
                        {views} Views
                    </Label>
                    <br/>
                    <Label className="view-message">
                        {sold} Ticket Sold
                    </Label>
                </div>
            </div>
        </div>
    )
}
