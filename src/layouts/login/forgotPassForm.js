import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Segment from '../Segment/segment'
import { Link } from 'react-router-dom'

export default ({ onChange, onSubmit, authDispatch, loading, error, successMessage, segmentShow, type }) => {
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
                    <label>Enter Your Email</label>
                    <input 
                        onChange={onChange}
                        placeholder='Email' 
                    />
                </Form.Field>
                <div className="btn-container">
                    <Button
                        primary 
                        type='submit'
                        disabled={!!successMessage}
                        loading={loading}
                        fluid
                    >
                        Send Reset Password Email
                    </Button>
                </div>
                <div>
                    <Button fluid as={Link} to="/login">Back To Login</Button>
                </div>
            </Form>
        </div>
    )
}