import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import ImageSlider from '../../viewProducts/productsLayout/imageSlider'
import Continent from '../../viewProducts/productsLayout/continent'
import { Link } from 'react-router-dom'


export default ({ onDelete, allProducts }) => {
    return (
        <div className="prod-control-grid">
            {allProducts.map(product => {
                const {
                    _id,
                    title,
                    continent,
                    imagePaths,
                    price,
                    sold,
                    views,
                    createdAt
                } = product

                return (
                    <Card className="product-card" key={_id}>
                        <Link to={`/control/products/${_id}`}>
                            <ImageSlider images={imagePaths} />
                        </Link>
                        <div>
                            <Card.Header className="header">
                                {title}
                            </Card.Header>
                            <Continent continent={continent} />
                            <div className="price">
                                Price: ${price}
                            </div>
                            <div className="sold">
                                {sold} Sold
                            </div>
                            <div className="view">
                                {views} View
                            </div>
                            <div className="created-at">
                                CreatedAt: {createdAt.split('T')[0]}
                            </div>
                        </div>
                        <div className="btns">
                            <Button 
                                className="btn"
                                content='Edit'
                                color="teal"
                                as={Link}
                                to={`/control/products/${_id}`}
                            />
                            <Button
                                className="btn"
                                content="Delete"
                                color="youtube"
                                onClick={() => onDelete(_id)}
                            />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}
