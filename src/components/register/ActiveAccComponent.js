import React from 'react'
import ActiveAccount from '../../Layouts/Register/activeAccount'
import useActiveAcc from './Hooks/useActiveAcc'

export default () => {
    return <ActiveAccount {...useActiveAcc()} />
}
