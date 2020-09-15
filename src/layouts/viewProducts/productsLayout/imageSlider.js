import React from 'react'
import Slider from 'react-slick'
import { Image } from 'semantic-ui-react'
import defaultImage from '../../../assets/images/defaultImage.png'

export default ({ images }) => {
    const backEndUrl = 
        process.env.REACT_APP_SERVER_BASE_URL ? 
        process.env.REACT_APP_SERVER_BASE_URL : 
        'http://localhost:3001'
    
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

    const productImages = images.length ? images : [defaultImage]
        
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
