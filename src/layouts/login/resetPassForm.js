import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Segment from '../Segment/segment'

export default ({ onChange, onSubmit, authDispatch, error, loading, segmentShow, successMessage, type }) => {
    return (
        <div className="reset-form-container">
            <Form onSubmit={onSubmit}>
                <div>
                    <Segment
                        dispatch={authDispatch}
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
                    fluid
                >
                    Reset Password
                </Button>
            </Form>
        </div>
    )
}