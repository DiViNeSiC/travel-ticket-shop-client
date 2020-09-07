import React from 'react'
import { Image, Segment } from 'semantic-ui-react'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ displayFile, avatarInputRef, onSelectFile }) => {
    return (
        <div>
            <input
                type="file" 
                name="avatar"
                accept={imageMimeTypes} 
                onChange={onSelectFile}
                ref={avatarInputRef}
                style={{ display: 'none' }}
            />
            <div>
                <Image
                    style={{
                        width: '135px',
                        height: '140px',
                        borderRadius: '50%',
                        backgroundSize: 'cover'
                    }}
                    size="small"
                    alt="YOUR AVATAR" 
                    src={displayFile} 
                    rounded
                />
                <div 
                    onClick={() => 
                        avatarInputRef.current.click()
                    } 
                >
                    <Segment textAlign="center" >
                        Select Avatar
                    </Segment>
                </div>
            </div>
        </div>
    )
}
