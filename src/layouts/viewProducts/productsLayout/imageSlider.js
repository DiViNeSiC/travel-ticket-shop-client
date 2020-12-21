import React from 'react'
import Slider from 'react-slick'
import { Image } from 'semantic-ui-react'
import defaultImage from '../../../Assets/Images/defaultImage.png'
import { BASE_URL_DEVELOPMENT, BASE_URL_PRODUCTION } from '../../../Constants/api'

export default ({ images }) => {
    const productImages = images.length ? images : [defaultImage]
    const backEndUrl = process.env.NODE_ENV === 'production' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT
    
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        className: 'slides',
    }

    return (
        <Slider className="product-slider" {...settings} > 
            {productImages.map((image, index) => 
                <div className="product-image-container" key={index} >
                    <Image
                        src={
                            image !== defaultImage ? 
                                `${backEndUrl}${image}` :
                                defaultImage
                            }
                        className="product-image"
                        alt="Product"
                    />
                </div>
            )}
        </Slider>
    )
}
