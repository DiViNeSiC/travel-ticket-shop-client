import React from 'react'
import { Card, Button, Header } from 'semantic-ui-react'
import ImageSlider from '../../viewProducts/productsLayout/imageSlider'
import Continent from '../../viewProducts/productsLayout/continent'
import { Link } from 'react-router-dom'

export default ({ products, details, onRemoveOne, openQuantityModal }) => {
    return (
        <div className="in-cart-container">
            { products &&
                products.map(product => {
                    const {
                        _id,
                        title,
                        price,
                        continent,
                        imagePaths
                    } = product
                    const detail = details.find(obj => 
                        obj.productId === _id
                    )

                    return (
                        <Card className="card" key={_id}>
                            <Link to={`/product/${_id}`}>
                                <ImageSlider images={imagePaths} />
                            </Link>
                            <div className="card-details">
                                <div className="all-details">
                                    <Header className="header">
                                        {title}
                                    </Header>
                                    <div className="continent">
                                        <Continent continent={continent} />
                                    </div>
                                    <div className="price">
                                        <div>
                                            Price: ${price}
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <div>
                                            Quantity: {detail?.quantity}
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <div>
                                            Total Price: ${price * detail?.quantity}
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <Button 
                                        content="Change Quantity"
                                        color="facebook"
                                        className="btn"
                                        onClick={() => openQuantityModal(_id, detail?.quantity)}
                                    />
                                    <Button
                                        negative
                                        className="btn"
                                        content="Remove From Cart"
                                        onClick={() => onRemoveOne(_id)}
                                    />
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}
