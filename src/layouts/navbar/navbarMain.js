import React from 'react'
import { Responsive } from 'semantic-ui-react'
import NavBarMobile from './navbarMobile'
import NavBarDesktop from './navbarDesktop'

export default ({
    onClick,
    loading,
    isAuth,
    pathName
}) => {
    return (
        <div className="navbar">
            <Responsive {...Responsive.onlyMobile}>
                <NavBarMobile
                    loading={loading} 
                    handleLogout={onClick} 
                    isAuth={isAuth} 
                    pathName={pathName}  
                />
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <NavBarDesktop 
                    loading={loading} 
                    handleLogout={onClick} 
                    isAuth={isAuth} 
                    pathName={pathName} 
                />
            </Responsive>
        </div>
    )
}
