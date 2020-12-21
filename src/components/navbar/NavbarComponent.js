import React from 'react'
import Navbar from '../../Layouts/Navbar/navbarMain'
import useLogout from './Hooks/useLogout'

export default () => {
    return <Navbar {...useLogout()}  />
}
