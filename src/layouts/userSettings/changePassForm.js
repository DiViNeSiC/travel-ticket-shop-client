import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Segment from '../Segment/segment'
import Dimmer from '../Segment/dimmer'

export default ({ onChange, onSubmit, userControlsDispatch, loading, segmentShow, error, success, type }) => {
    return (
        <Form className="change-pass-form" onSubmit={onSubmit}>
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
            <Form.Field>
                <label>Enter Your Current Password</label>
                <input 
                    onChange={onChange}
                    name="currentPass"
                    placeholder="Current Password"
                    required
                    type="password"
                />
            </Form.Field>
            <Form.Field>
                <label>Enter Your New Password</label>
                <input 
                    onChange={onChange}
                    name="newPass"
                    placeholder="New Password"
                    required
                    type="password"
                />
            </Form.Field>
            <Button 
                positive
                content="Change Password"
                type="submit"
                fluid
            />
        </Form>
    )
}
