import React, { useEffect } from "react"
import { Message } from "semantic-ui-react"
import { useLocation } from "react-router-dom"
import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default ({ message, show, dispatch, type }) => {
    const { pathname } = useLocation() 

    const hide = () => {
        if (show) {
            setTimeout(() => {
                dispatch({ type: HIDE_SEGMENT })
            }, 10000)
        }
    }

    const setShow = () => {
        if (show) {
            dispatch({ type: HIDE_SEGMENT })
        }
    }

    useEffect(hide, [show]) 
    useEffect(setShow, [pathname]) 

    return (
        <>
            {show && 
                <Message
                    className="segment-message"
                    color={type === 'error' ?  'red' : 'blue' }
                >
                    { message }
                </Message>
            }
        </>
    )
}