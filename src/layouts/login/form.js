import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Segment from '../segment/segment'
import { Link } from 'react-router-dom'

export default ({
    onChange,
    onChangeRememberUser,
    onSubmit,
    loading,
    error,
    segmentShow,
    authDispatch,
    type
}) => {
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <div>
                    <Segment
                        dispatch={authDispatch}
                        message={error ? error.message : null}
                        show={segmentShow}
                        type={type}
                    />
                </div>
                <Form.Field>
                    <label>Enter Your Username Or Email</label>
                    <input
                        name="usernameOrEmail" 
                        onChange={onChange} 
                        placeholder='Username Or Email' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        name="password" 
                        onChange={onChange} 
                        type="password" 
                        placeholder='Password' 
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        onChange={onChangeRememberUser} 
                        label='Remember Me ?' 
                    />
                </Form.Field>
                <div>
                    Forgot Your Password ?  
                    <Link to="/forgot-password"> Reset Password</Link>
                </div>
                <Button loading={loading} primary type='submit'>Login</Button>
            </Form>
        </div>
    )
}
