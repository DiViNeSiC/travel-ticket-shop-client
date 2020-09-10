import React from 'react'
import { Link } from 'react-router-dom'
import { Message, Segment, Loader, Dimmer, Button } from 'semantic-ui-react'

export default ({ error, successMessage, loading }) => {
    return (
        <Segment>
            <Dimmer style={{ position: 'fixed' }} active={loading} >
                <Loader content="Activating Your Account" />
            </Dimmer>

            <Message 
                color={ error ? 'red' : 'blue' }
            >
                { error ? error.message : successMessage }
            </Message>  
            {successMessage ?
                <Button 
                    as={Link} 
                    to="/login" 
                    primary 
                    fluid
                >
                    Now Login To Your Account !
                </Button> :
                <Button 
                    fluid
                    as={Link} 
                    to="/register" 
                    negative 
                >
                    Register Again?
                </Button>
            }
        </Segment>
    )
}