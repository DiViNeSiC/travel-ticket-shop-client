import React, { useRef } from 'react'
import { Button } from 'semantic-ui-react'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ onUploadImage, disable }) => {
    const productImageInputRef = useRef()
    const onSelect = ({ target: { files }}) => { if (files[0]) onUploadImage(files[0]) }

    return (
        <div className="btn-container">
            <input
                type="file" 
                name="productImage"
                accept={imageMimeTypes} 
                onInput={onSelect}
                ref={productImageInputRef}
                className="file-input"
            />
            <Button 
                onClick={() => productImageInputRef.current.click()}
                content='Upload Image'
                color="teal"
                fluid
                disabled={disable}
            />
        </div>
    )
}
