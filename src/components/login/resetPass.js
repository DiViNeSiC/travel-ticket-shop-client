import React from 'react'
import useResetPass from './hooks/useResetPass'
import ResetPassForm from '../../layouts/login/resetPassForm'

export default () => {
    return <ResetPassForm {...useResetPass()} />
}
