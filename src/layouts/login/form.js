import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Segment from '../Segment/segment'
import { Link } from 'react-router-dom'

export default ({ onChange, onChangeRememberUser, onSubmit, loading, error, segmentShow, authDispatch, type }) => {
    return (
        <div className={`login-container ${error ? 'error-login' : ''}`}>
            <Form onSubmit={onSubmit}>
                <Segment
                    dispatch={authDispatch}
                    message={error ? error.message : null}
                    show={segmentShow}
                    type={type}
                />
                <Form.Field className="form-field">
                    <label>Enter Your Username Or Email</label>
                    <input
                        name="usernameOrEmail" 
                        onChange={onChange} 
                        placeholder='Username Or Email' 
                    />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Password</label>
                    <input
                        name="password" 
                        onChange={onChange} 
                        type="password" 
                        placeholder='Password' 
                    />
                </Form.Field>
                <Form.Field className="form-field">
                    <Checkbox
                        onChange={onChangeRememberUser} 
                        label='Remember Me ?' 
                    />
                </Form.Field>
                <div className="form-field text">
                    Forgot Your Password ?  
                    <Link to="/forgot-password"> Reset Password</Link>
                </div>
                <Button 
                    fluid 
                    loading={loading} 
                    primary 
                    type='submit'
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}
