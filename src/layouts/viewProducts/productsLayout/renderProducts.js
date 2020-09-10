import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Segment, Header, Icon } from 'semantic-ui-react'
import ImageSlider from './imageSlider'
import Continent from './continent'

export default ({  
    allProducts, 
    products, 
    length 
}) => {
    return (
        <>
            {allProducts.length > 0 ? 
                <>
                    <div className="length">
                        {length}
                    </div>
                    <div className="products-grid">
                        {products.map((product) => {
                            const { title, price, continent, imagePaths, _id } = product
                            return (
                                <Card key={_id} className="product-card">
                                    <Link 
                                        className="product-link" 
                                        to={`/product/${_id}`}
                                    >
                                        <ImageSlider images={imagePaths} />
                                    </Link>
                                    <Card.Header className="header">
                                        {title}
                                    </Card.Header>
                                    <Continent continent={continent} />
                                    <Card.Description className="price">
                                        ${price}
                                    </Card.Description>
                                </Card>
                            )
                        })}
                    </div> 
                </> : 
                <Segment className="not-found" placeholder>
                    <Header className="not-found" icon>
                        <Icon name='times circle outline' />
                        {length}
                    </Header>
                </Segment>
            }
        </>
    )
}