import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Segment, Header, Icon, Button } from 'semantic-ui-react'
import ImageSlider from './imageSlider'
import Continent from './continent'

export default ({ 
    limit, 
    allProducts, 
    products, 
    length, 
    handleIncrease 
}) => {
    return (
        <div> 
            {allProducts.length > 0 ? 
                <div>
                    <div>
                        {length}
                    </div>
                    {products.map(product => {
                        const { title, price, continent, imagePaths, id } = product
                        return (
                            <Card style={{ width: '350px', height: '300px' }}>
                                <Link to={`/products/${id}`}>
                                    <ImageSlider images={imagePaths} />
                                </Link>
                                <Card.Header>
                                    {title}
                                </Card.Header>
                                <Continent continent={continent} />
                                <Card.Description>
                                    ${price}
                                </Card.Description>
                            </Card>
                        )
                    })}
                    {allProducts.length !== limit &&
                        <Button onClick={handleIncrease}>Show More...</Button>
                    }
                </div> : 
                <Segment placeholder>
                    <Header icon>
                        <Icon name='times circle outline' />
                        {length}
                    </Header>
                </Segment>
            }
        </div>
    )
}