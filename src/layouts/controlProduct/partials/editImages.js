import React from 'react'
import Upload from './uploadImage'
import { Icon } from 'semantic-ui-react'

const backEndUrl = 
    process.env.REACT_APP_SERVER_BASE_URL ? 
    process.env.REACT_APP_SERVER_BASE_URL : 
    'http://localhost:3001'

export default ({ 
    disable, 
    imagePaths, 
    imageNames, 
    onUploadImage, 
    onDeleteImage 
}) => {
    const images = imagePaths.map(path => {
        const pathname = path.split('\\')[3]
        const name = imageNames.find(name => name === pathname)

        return {
            name,
            path
        }
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
