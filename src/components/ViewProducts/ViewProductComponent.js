import React from 'react'
import ViewOne from '../../Layouts/ViewProducts/viewOne'
import useView from './Hooks/useView'

export default () => {
    return <ViewOne {...useView()} /> 
}
