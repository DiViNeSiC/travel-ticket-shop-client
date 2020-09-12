import React, { useRef } from 'react'
import defaultAvatar from '../../assets/images/default-profile-Image.png'
import { Button } from 'semantic-ui-react'

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

export default ({ 
    onChangeAvatar,
    onDeleteAvatar,
    currentAvatar
}) => {
    const avatarInputRef = useRef()

    const backEndUrl = 
        process.env.REACT_APP_SERVER_BASE_URL ? 
        process.env.REACT_APP_SERVER_BASE_URL : 
        'http://localhost:3001'

    const avatar = 
        currentAvatar ?
        `${backEndUrl}${currentAvatar}` :
        defaultAvatar

    const onSelect = (e) => {
        const { files } = e.target
        onChangeAvatar(files[0])
    }

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
                    fluid
                />
            </div>
            <div>
                <Button 
                    content='Remove Avatar'
                    negative
                    fluid
                    onClick={onDeleteAvatar}
                />
            </div>
        </div>
    )
}
