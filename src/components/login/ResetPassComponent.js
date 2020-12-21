import React from 'react'
import useResetPass from './Hooks/useResetPass'
import ResetPassForm from '../../Layouts/Login/resetPassForm'

export default () => {
    return <ResetPassForm {...useResetPass()} />
}
