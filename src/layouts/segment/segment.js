import React, { useEffect } from "react"
import { Message, Icon, Button } from "semantic-ui-react"
import { useLocation } from "react-router-dom"
import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default ({ message, show, dispatch, type }) => {
    const { pathname } = useLocation() 

    const hide = () => {
        if (show) {
            setTimeout(() => {
                dispatch({ type: HIDE_SEGMENT })
            }, 12000)
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
        <div className="segment-container">
            {show && 
                <Message
                    className="segment-message"
                    color={type === 'error' ?  'red' : 'blue' }
                >
                    { message }
                    <div className="close-icon" onClick={setShow}>
                        <Icon color={type === 'error' ?  'red' : 'blue' } name="times circle outline" />
                    </div>
                    { message === 'Network Error' &&
                        <Button negative className="retry-button" onClick={() => {
                            window.location.reload()
                        }} content="Retry" />
                    }
                </Message>
            }
        </div>
    )
}