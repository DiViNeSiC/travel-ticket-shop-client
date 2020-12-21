import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

export default ({ env, currency, client, total, onSuccess, onCancel, onError }) => {
    return (
        <PaypalExpressBtn 
            env={env} 
            client={client} 
            currency={currency} 
            total={total} 
            onError={onError} 
            onSuccess={onSuccess} 
            onCancel={onCancel} 
        />
    )
}
