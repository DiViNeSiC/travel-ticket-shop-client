import React from 'react'
import Segment from '../Segment/segment'
import Dimmer from '../Segment/dimmer'
import AvatarForm from '../Avatar/avatarSettings'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({ onChangeAvatar, onDeleteAvatar, onChange, onSubmit, userControlsDispatch, loading, segmentShow, error, success, formData, user, type }) => {
    return (
        <div className="settings-container">
            <div>
                <Segment
                    dispatch={userControlsDispatch}
                    message={error ? error : success}
                    show={segmentShow}
                    type={type}
                />
                <Dimmer
                    error={error}
                    loading={loading}
                />
            </div>
            {formData && user &&
                <div className="settings-form-container">
                    <div className="avatar-section">
                        <AvatarForm 
                            currentAvatar={
                                user.avatarName ?
                                user.avatarImagePath :
                                null
                            }
                            onChangeAvatar={onChangeAvatar}
                            onDeleteAvatar={onDeleteAvatar}
                        />
                    </div>
                    <div className="info-section">
                        <Form className="form" onSubmit={onSubmit}>
                            <Form.Field>
                                <label>First Name</label>
                                <input
                                    name="name"
                                    onChange={onChange}
                                    value={formData.name}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input
                                    name="lastname"
                                    onChange={onChange}
                                    value={formData.lastname}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>UserName</label>
                                <input
                                    name="username"
                                    onChange={onChange}
                                    value={formData.username}
                                    required
                                />
                            </Form.Field>
                            <div className='button-section'>
                                <Button
                                    fluid
                                    color="green"
                                    inverted
                                >
                                    Update Account
                                </Button>
                                <br/>
                                <div>
                                    <Button
                                        as={Link}
                                        to="/dashboard/change-password"
                                        color="blue"
                                        inverted
                                        content="Change Password"
                                        fluid
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    as={Link}
                                    to="/dashboard/delete-account"
                                    color="red"
                                    inverted
                                    content="Delete Account"
                                    fluid
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            }
        </div>
    )
}
