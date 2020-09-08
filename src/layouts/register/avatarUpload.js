import React from 'react'
import { Image, Button } from 'semantic-ui-react'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ 
    selectedFile, 
    displayFile, 
    avatarInputRef, 
    onSelectFile, 
    onClearFile  
}) => {
    return (
        <div className="avatar-section">
            <input
                type="file" 
                name="avatar"
                accept={imageMimeTypes} 
                onChange={onSelectFile}
                ref={avatarInputRef}
                style={{ display: 'none' }}
            />
            <div className="image-field">
                <Image
                    onClick={() => 
                        avatarInputRef.current.click()
                    } 
                    className="image-display"
                    size="small"
                    alt="YOUR AVATAR" 
                    src={displayFile} 
                    rounded
                />
                {selectedFile == null && 
                    <div 
                        className="select-button"
                        onClick={() => 
                            avatarInputRef.current.click()
                        } 
                    >
                        +
                    </div>
                }
                {selectedFile && 
                    <Button className="delete-button" circular onClick={onClearFile} icon={'trash'}>
                    </Button>
                }
            </div>
        </div>
    )
}
