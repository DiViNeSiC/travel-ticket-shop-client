import React from 'react'
import { Responsive } from 'semantic-ui-react'
import NavBarMobile from './navbarMobile'
import NavBarDesktop from './navbarDesktop'
import DefaultAvatar from '../../Assets/Images/default-profile-Image.png'
import { BASE_URL_DEVELOPMENT, BASE_URL_PRODUCTION } from '../../Constants/api'

export default ({ onClick, loading, isAuth, pathName }) => {
    const baseURL = process.env.NODE_ENV === 'production' ? BASE_URL_PRODUCTION : BASE_URL_DEVELOPMENT
    const avatarLocation = localStorage.getItem('TRAVEL_SHOP_AVATAR_LOCATION')
    const userRole = localStorage.getItem('TRAVEL_SHOP_USER_ROLE')
    const isAdmin = (userRole === 'admin')
    const avatar = avatarLocation ? `${baseURL}${avatarLocation}` : DefaultAvatar

    return (
        <div className="navbar">
            <Responsive maxWidth={975}>
                <NavBarMobile
                    loading={loading} 
                    handleLogout={onClick} 
                    isAuth={isAuth} 
                    pathName={pathName}  
                    avatar={avatar}
                    isAdmin={isAdmin}
                />
            </Responsive>
            <Responsive minWidth={975}>
                <NavBarDesktop 
                    loading={loading} 
                    handleLogout={onClick} 
                    isAuth={isAuth} 
                    pathName={pathName} 
                    avatar={avatar}
                    isAdmin={isAdmin}
                />
            </Responsive>
        </div>
    )
}
