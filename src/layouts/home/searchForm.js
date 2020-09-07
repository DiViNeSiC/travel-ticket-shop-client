import React from 'react'
import continents from '../../constants/continents'
import { Form, Input } from 'semantic-ui-react'

export default ({ onChange }) => {
    return (
        <Form>
            <Form.Group>
                <Form.Field>
                    <label htmlFor="title">Title</label>
                    <Input
                        icon={{ name: 'search', circular: true }}
                        placeholder='Search...' 
                        id="title"
                        type="text"
                        name="title"
                        onChange={onChange}
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <label htmlFor="price">Price</label>
                <Form.Field>
                    <label htmlFor="from">From</label>
                    <input 
                        type="number" 
                        placeholder='100 $' 
                        id="from"
                        name="from"
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="to">To</label>
                    <input
                        type="number" 
                        placeholder='1000 $' 
                        id="to"
                        name="to"
                        onChange={onChange}
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <label htmlFor="continent">Continent</label>
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
            </Form.Group>
        </Form>
    )
}
