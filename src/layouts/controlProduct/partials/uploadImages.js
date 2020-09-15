import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'semantic-ui-react'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ disable }) => {
    const [images, setImages] = useState()
    const [displayImages, setDisplayImages] = useState()

    const inputRef = useRef()

    const onChange = e => {
        const { files } = e.target
        if (!files[0] && !files.length) {
            return setImages(null)
        }

        setImages(Array.from(files))
    }

    useEffect(() => {
        if(!images || !images?.length) { 
            setImages(null)
            return setDisplayImages(null)
        }
        
        const objectUrls = images.map(image => URL.createObjectURL(image))
        
        setDisplayImages(objectUrls)

        return () => 
            objectUrls.forEach(url => URL.revokeObjectURL(url))
    }, [images])

    return (
        <div>
            <label>Product Images</label>
            <br/>
            <div>
                <Button 
                    onClick={() => inputRef.current.click()}
                    content="Select Images"
                    icon={{ className: 'image' }}
                    primary
                    type="button"
                    disabled={disable}
                    fluid
                />
            </div>
            <div className="prod-image-container">
                {displayImages?.map((image, i) => (
                    <img className="prod-image" alt="" src={image} key={i} />
                ))}
            </div>
            <input
                type="file"
                name="productImages"
                multiple
                accept={imageMimeTypes}
                className="file-input"
                onChange={onChange}
                ref={inputRef}
            />
        </div>
    )
}
