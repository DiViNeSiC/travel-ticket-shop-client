import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Segment, Header, Icon } from 'semantic-ui-react'
import ImageSlider from './imageSlider'
import Continent from './continent'

export default ({ products, length, isSearching }) => {
    return (
        <div> 
            {products && 
                products.map(product => {
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
                })
            }
            { length === 0 &&
                <Segment placeholder>
                    <Header icon>
                        <Icon name='times circle outline' />
                        {isSearching ? 
                            <div>No Product Found</div> : 
                            <div>Sorry But We Don't Have Any Products</div>
                        }
                    </Header>
                </Segment>
            }
        </div>
    )
}