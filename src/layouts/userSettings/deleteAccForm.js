import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Segment from '../segment/segment'
import Dimmer from '../segment/dimmer'

export default ({
    onChange,
    onDeleteAcc,
    userSettingsDispatch,
    loading,
    segmentShow,
    error,
    success,
    type
}) => {
    return (
        <Form className="delete-acc-form" onSubmit={onDeleteAcc}>
            <div>
                <Segment
                    dispatch={userSettingsDispatch}
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
                <label>Enter Your Password</label>
                <input 
                    onChange={onChange}
                    name="currentPass"
                    placeholder="Password"
                    type="password"
                    required
                />
            </Form.Field>
            <Button 
                negative
                content="Delete Account"
                type="submit"
                fluid
            />
        </Form>
    )
}
