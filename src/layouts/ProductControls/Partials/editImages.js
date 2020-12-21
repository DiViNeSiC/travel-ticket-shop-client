import React from 'react'
import Upload from './uploadImage'
import { Icon } from 'semantic-ui-react'
import { BASE_URL_DEVELOPMENT, BASE_URL_PRODUCTION } from '../../../Constants/api'

export default ({ disable, imagePaths, imageNames, onUploadImage, onDeleteImage  }) => {
    const backEndUrl = process.env.NODE_ENV === 'production' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT
    const images = imagePaths.map(path => {
        const pathname = path.split('/')[3]
        const name = imageNames.find(name => name === pathname)
        return { name, path }
    })

    return (
        <>
            <Upload disable={disable} onUploadImage={onUploadImage} />
            {images.length ?
                <div className="img-grid">
                    {images.map(image => (
                        <div
                            key={image.name} 
                            className="img-container"
                        >
                            <div className="delete-btn" onClick={() => onDeleteImage(image.name)}>
                                <Icon className="trash icon" />
                            </div>
                            <img className="img" src={`${backEndUrl}${image.path}`} alt="" />
                        </div>
                    ))}
                </div>:
                <div className="no-img">
                    No Images
                </div>
            }
        </>
    )
}
