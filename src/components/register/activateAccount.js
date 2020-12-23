import React from 'react'
import ActiveAccount from '../../layouts/register/activeAccount'
import useActiveAcc from './hooks/useActiveAcc'

export default () => {
    return <ActiveAccount {...useActiveAcc()} />
}
