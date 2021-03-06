import React from 'react'
import { Responsive } from 'semantic-ui-react'
import NavBarMobile from './navbarMobile'
import NavBarDesktop from './navbarDesktop'
import DefaultAvatar from '../../assets/images/default-profile-Image.png'

export default ({
    onClick,
    loading,
    isAuth,
    pathName
}) => {
    const baseURL = 
        process.env.REACT_APP_SERVER_BASE_URL ? 
        process.env.REACT_APP_SERVER_BASE_URL : 
        'http://localhost:3001'

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
