import React from 'react'
import Segment from '../Segment/segment'
import Dimmer from '../Segment/dimmer'
import { Form, Button } from 'semantic-ui-react'
import continents from '../../Constants/continents'
import UploadImages from './Partials/uploadImages'

export default ({ onSubmit, productControlsDispatch, loading, segmentShow, success, error, type }) => {
    return (
        <>
            <div>
                <Dimmer
                    error={error}
                    loading={loading}
                />
                <Segment 
                    dispatch={productControlsDispatch}
                    message={error ? error : success}
                    type={type}
                    show={segmentShow}
                    redirect={'/control/products'}
                />
            </div>
            <div className="create-prod-form">
                <Form className="prod-form" onSubmit={onSubmit}> 
                    <Form.Group className="prod-form-gp">
                        <Form.Field className="prod-form-field">
                            <label>Title</label>
                            <input
                                name="title"
                                placeholder="Title"
                                required
                            />
                        </Form.Field>
                        <Form.Field className="prod-form-field">
                            <label>Price</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                required
                            />
                        </Form.Field>
                        <Form.Field className="prod-form-field">
                            <label>Continent</label>
                            <select name="continent">
                                {continents.map((option, i) => {
                                    if (i === 0) return null

                                    return (
                                        <option
                                            value={option.value}
                                            key={option.value}
                                        > 
                                            {option.text} 
                                        </option>
                                    )
                                })}
                            </select>
                            <Form.Field className="prod-form-field top-space">
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                />
                            </Form.Field>
                        </Form.Field>
                        <Form.Field className="img-input-field">
                            <UploadImages disabled={!!success} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group className="btn-container">
                        <Button
                            type="submit"
                            content="Create Product"
                            icon={{ className: 'plus' }}
                            positive
                            disabled={!!success}
                        />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
