import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Segment from '../segment/segment'
import { Link } from 'react-router-dom'

export default ({ 
    onChange,
    onSubmit,
    forgotPassDispatch,
    loading,
    error,
    successMessage,
    segmentShow,
    type
}) => {
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <div>
                    <Segment
                        dispatch={forgotPassDispatch}
                        message={error ? error.message : successMessage}
                        show={segmentShow}
                        type={type}
                    />
                </div>
                <Form.Field>
                    <label>Enter Your Email</label>
                    <input 
                        onChange={onChange}
                        placeholder='Email' 
                    />
                </Form.Field>
                <div>
                    <Button
                        primary 
                        type='submit'
                        disabled={!!successMessage}
                        loading={loading}
                    >
                        Send Reset Password Email
                    </Button>
                </div>
                <div>
                    <Button as={Link} to="/login">Back To Login</Button>
                </div>
            </Form>
        </div>
    )
}