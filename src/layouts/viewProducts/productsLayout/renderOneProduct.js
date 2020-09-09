import React from 'react'
import Continent from './continent'
import ImageSlider from './imageSlider' 

export default ({
    title,
    price,
    continent,
    description,
    views,
    sold,
    imagePaths,
    createdAt,
    creatorUser
}) => {
    return (
        <div>     
            <ImageSlider images={imagePaths} />
            <div>
                <h2>
                    {title}
                </h2>
                <h3>
                    Price: ${price}
                </h3>
                <h5>
                    <Continent continent={continent} />
                </h5>
                <div>
                    Leader: {creatorUser?.username}
                    <br/>
                    Created At: {createdAt?.split('T')[0]}
                </div>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    {views} View
                    <br/>
                    {sold} Ticket Sold
                </div>
            </div>
        </div>
    )
}
