import React, { useRef } from 'react'
import defaultAvatar from '../../Assets/Images/default-profile-Image.png'
import { Button } from 'semantic-ui-react'
import { BASE_URL_DEVELOPMENT, BASE_URL_PRODUCTION } from '../../Constants/api'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ onChangeAvatar, onDeleteAvatar, currentAvatar }) => {
    const avatarInputRef = useRef()

    const onSelect = ({ target: { files }}) => { onChangeAvatar(files[0]) }
    
    const backEndUrl = process.env.NODE_ENV === 'production' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT
    const avatar = currentAvatar ? `${backEndUrl}${currentAvatar}` : defaultAvatar

    return (
        <div className="image-settings">
            <div className="image">
                <img
                    alt=""
                    src={avatar}
                    draggable={false}
                />
            </div>
            <div className="button-section">
                <input
                    type="file" 
                    name="avatar"
                    accept={imageMimeTypes} 
                    onInput={onSelect}
                    ref={avatarInputRef}
                    className="file-input"
                />
                <Button 
                    onClick={() => avatarInputRef.current.click()}
                    content='Change Avatar'
                    primary
                    inverted
                    fluid
                />
            </div>
            <div>
                <Button 
                    content='Remove Avatar'
                    inverted
                    color="red"
                    fluid
                    onClick={onDeleteAvatar}
                />
            </div>
        </div>
    )
}
