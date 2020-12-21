import React from 'react'
import DefaultContinents from '../../../Constants/continents'
import { Card } from 'semantic-ui-react'

export default ({ continent }) => {
    return (
        <Card.Meta className="continent">
            {DefaultContinents[continent].text}
        </Card.Meta>
    )
}