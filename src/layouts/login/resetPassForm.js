import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Segment from '../segment/segment'

export default ({
    onChange,
    onSubmit,
    forgotPassDispatch,
    error,
    loading,
    segmentShow,
    successMessage,
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
                    <label>Enter Your New Password</label>
                    <input type="password" onChange={onChange} placeholder='Password' />
                </Form.Field>
                <Button 
                    loading={loading}
                    disabled={!!successMessage}
                    positive 
                    type='submit'
                >
                    Reset Password
                </Button>
            </Form>
        </div>
    )
}