import React from 'react'
import { Responsive } from 'semantic-ui-react'
import NavBarMobile from './navbarMobile'
import NavBarDesktop from './navbarDesktop'
import Segment from '../segment/segment'

export default ({
    onClick,
    loading,
    error,
    segmentShow,
    authDispatch,
    isAuth,
    pathName
}) => {
    return (
        <div>
            <Segment 
                type={'error'}
                message={error ? error.message : null}
                show={segmentShow}
                dispatch={authDispatch}
            />
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
