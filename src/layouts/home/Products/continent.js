import React from 'react'
import continents from '../../../constants/continents'
import { Card } from 'semantic-ui-react'

export default ({ continent }) => {
    return <Card.Meta>{continents[continent].text}</Card.Meta>
}