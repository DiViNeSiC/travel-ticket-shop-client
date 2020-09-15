import React from 'react'
import Segment from '../segment/segment'
import Dimmer from '../segment/dimmer'
import Images from './partials/editImages'
import continents from '../../constants/continents'
import { Form, Button } from 'semantic-ui-react'

export default ({
    onChange,
    onUploadImage,
    onDeleteImage,
    onDelete,
    onEdit,
    id,
    controlProductDispatch,
    loading,
    error,
    segmentShow,
    productInfo,
    success,
    type
}) => {
    return (
        <>
            <div>
                <Dimmer
                    error={error}
                    loading={loading}
                />
                <Segment 
                    dispatch={controlProductDispatch}
                    message={error ? error : success}
                    type={type}
                    show={segmentShow}
                />
            </div>
            <div className="edit-prod-container">
                { productInfo &&
                    <>
                        <h1>{productInfo?.title}</h1>
                        <div className="edit-prod">
                            <div className="imgs-container">
                                <Images
                                    imageNames={productInfo?.productImageNames}
                                    imagePaths={productInfo?.imagePaths}
                                    onDeleteImage={onDeleteImage}
                                    onUploadImage={onUploadImage}
                                    disable={!!success}
                                />
                            </div>
                            <Form onSubmit={onEdit}>
                                <div className="edit-prod-form">
                                    <Form.Field className="edit-prod-field">
                                        <label>Title</label>
                                        <input
                                            onChange={onChange}
                                            value={productInfo?.title}
                                            name="title"
                                            placeholder="Title"
                                            required
                                        />
                                    </Form.Field>
                                    <Form.Field className="edit-prod-field">
                                        <label>Price</label>
                                        <input
                                            onChange={onChange}
                                            type="number"
                                            value={productInfo?.price}
                                            name="price"
                                            placeholder="Price"
                                            required
                                        />
                                    </Form.Field>
                                    <Form.Field className="edit-prod-field">
                                        <label>Continent</label>
                                        <select
                                            value={productInfo?.continent}
                                            onChange={onChange}
                                            name="continent"
                                        >
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
                                    </Form.Field>
                                    <Form.Field className="edit-prod-field">
                                        <label>Description</label>
                                        <textarea
                                            onChange={onChange}
                                            name='description'
                                            value={productInfo?.description}
                                        />
                                    </Form.Field>
                                </div>
                                <div className="btns-container">
                                    <Button 
                                        content="Update"
                                        positive
                                        type="submit"
                                        className="btn"
                                    />
                                    <Button 
                                        onClick={() => onDelete(id)}
                                        content="Delete Product"
                                        icon={{ className: 'delete' }}
                                        negative
                                        type="button"
                                        className="btn"
                                    />
                                </div>
                            </Form>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
