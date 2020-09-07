import React from 'react'
import Navbar from '../../layouts/navbar/navbarMain'
import useLogout from './hooks/useLogout'

export default () => {
    return <Navbar {...useLogout()}  />
}
