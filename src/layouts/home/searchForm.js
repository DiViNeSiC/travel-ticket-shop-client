import React from 'react'
import continents from '../../constants/continents'
import { Form, Input } from 'semantic-ui-react'

export default ({ onChange }) => {
    return (
        <Form className="search-form">
            <Form.Group className="search-input-group">
                <Form.Field className="search-input-field">
                    <Input
                        icon={{ name: 'search', circular: true }}
                        placeholder='Search...' 
                        id="title"
                        type="text"
                        name="title"
                        fluid
                        onChange={onChange}
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group className="search-credentials-group">
                <Form.Field className="search-credentials-field">
                    <select
                        id="continent"
                        name="continent"
                        onChange={onChange}
                    >
                        {continents.map(continent => (
                            <option
                                key={continent.value} 
                                value={continent.value}
                            >
                                {continent.text}
                            </option>
                        ))}
                    </select>
                </Form.Field>
                <Form.Field className="search-credentials-field row">
                    <Input 
                        type="number" 
                        placeholder='100 $' 
                        id="from"
                        name="from"
                        label="Price (From)"
                        size='small'
                        onChange={onChange}
                        fluid
                    />
                </Form.Field>
                <Form.Field className="search-credentials-field row">
                    <Input
                        type="number" 
                        placeholder='1000 $' 
                        id="to"
                        name="to"
                        label="Price (To)"
                        size='small'
                        onChange={onChange}
                        fluid
                    />
                </Form.Field>
            </Form.Group>
        </Form>
    )
}
