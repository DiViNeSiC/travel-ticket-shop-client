import React from 'react'
import ViewOne from '../../layouts/viewProducts/viewOne'
import useView from './hooks/useView'

export default () => {
    return <ViewOne {...useView()} /> 
}
