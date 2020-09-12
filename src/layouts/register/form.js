import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import AvatarUpload from '../avatar/avatarUpload'
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
        <div 
            className={`register-form-container ${error ? 
                'error-register' : ''
            }`}
        >
            <Form className="register-form" onSubmit={onSubmit}>
                <Segment 
                    dispatch={authDispatch} 
                    message={error ? 
                        error.message : successMessage
                    } 
                    show={segmentShow}
                    type={type}
                />
                <div className="names-avatar-field">
                    <AvatarUpload {...upload} />
                    <div className="form-float-left">
                        <Form.Field className="form-field">
                            <label>First Name</label>
                            <input 
                                required 
                                name="name" 
                                placeholder='First Name' 
                            />
                        </Form.Field>
                        <Form.Field className="form-field">
                            <label>Last Name</label>
                            <input 
                                required 
                                name="lastname" 
                                placeholder='Last Name' 
                            />
                        </Form.Field>
                    </div>
                </div>
                <Form.Field className="form-field">
                    <label>Username</label>
                    <input 
                        required 
                        name="username" 
                        placeholder='Username' 
                    />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Email</label>
                    <input 
                        required 
                        name="email" 
                        type="email" 
                        placeholder='Email' 
                    />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Password</label>
                    <input 
                        required 
                        name="password" 
                        type="password" 
                        placeholder='Password' 
                    />
                </Form.Field>
                <Form.Field className="form-field">
                    <Checkbox 
                        onChange={onChangeAdminUser} 
                        label='Admin User ?' 
                    />
                </Form.Field>
                {adminUser && 
                    <Form.Field className="form-field">
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
                    fluid
                >
                    Register
                </Button>
            </Form>
        </div>
    )
}
