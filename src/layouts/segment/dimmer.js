import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export default ({ error, loading }) => {
    return (
        <>
            {!error && 
                <Dimmer className="dimmer" active={loading} inverted>
                    <Loader inverted>Please Wait...</Loader>
                </Dimmer>
            }
        </>
    )
}
