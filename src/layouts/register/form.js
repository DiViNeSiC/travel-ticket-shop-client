import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import AvatarUpload from './avatarUpload'
import Segment from '../segment/segment'

export default ({ form, upload }) => {
    const {
        loading,
        successMessage,
        error,
        type,
        authDispatch,
        segmentShow,
        onSubmit,
        onChangeAdminUser,
        adminUser
    } = form
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <div>
                    <Segment 
                        dispatch={authDispatch} 
                        message={error ? error.message : successMessage} 
                        show={segmentShow}
                        type={type}
                    />
                </div>
                <div>
                    <AvatarUpload {...upload} />
                </div>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        required 
                        name="name" 
                        placeholder='First Name' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        required 
                        name="lastname" 
                        placeholder='Last Name' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input 
                        required 
                        name="username" 
                        placeholder='Username' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                        required 
                        name="email" 
                        type="email" 
                        placeholder='Email' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        required 
                        name="password" 
                        type="password" 
                        placeholder='Password' 
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox 
                        onChange={onChangeAdminUser} 
                        label='Admin User ?' 
                    />
                </Form.Field>
                {adminUser && 
                    <Form.Field>
                        <label>Admin Password</label>
                        <input 
                            name="adminPassword" 
                            type="password" 
                            placeholder='Admin Password' 
                        />
                    </Form.Field>
                }
                <Button 
                    primary 
                    type='submit'
                    disabled={!!successMessage}
                    loading={loading}
                >
                    Register
                </Button>
            </Form>
        </div>
    )
}
