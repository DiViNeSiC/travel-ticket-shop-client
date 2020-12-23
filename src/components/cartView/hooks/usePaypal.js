import { useContext } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import successPayment from '../../../context/actions/userCart/successPurchase'
import errorPayment from '../../../context/actions/userCart/errorPay'

export default () => {
    const {
        userCartDispatch,
        userCartState: {
            totalPrice,
        }
    } = useContext(GlobalContext)
    
    const handleAction = (data, success) => {
        if (!success) {
            return errorPayment(data)(userCartDispatch)
        }

        successPayment(data)(userCartDispatch)
    }

    const onSuccess = (payment) => {
        handleAction(payment, true)
    }

    const onError = (err) => {
        handleAction('Payment Failed', false)
    }

    const onCancel = (data) => {
        handleAction('Payment Canceled', false)
    }

    let env = 'sandbox' 
    let currency = 'USD'

    const client = {
        sandbox: process.env.REACT_APP_PAYPAL_ID,
        production: 'YOUR-PRODUCTION-APP-ID',
    }

    return {
        env,
        currency,
        client,
        total: totalPrice,
        onSuccess,
        onCancel,
        onError
    }
}