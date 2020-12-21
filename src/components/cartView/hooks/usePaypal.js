import { useContext } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { errPay, successPurchase } from '../../../Context/UserCart/actions'

export default () => {
    const { userCartDispatch, userCartState: { totalPrice } } = useContext(GlobalContext)
    
    const handleAction = (data, success) => {
        if (!success) return errPay(data)(userCartDispatch)
        successPurchase(data)(userCartDispatch)
    }

    const onSuccess = (payment) => { handleAction(payment, true) }
    const onError = (err) => { handleAction('Payment Failed', false) }
    const onCancel = (data) => { handleAction('Payment Canceled', false) }

    let env = 'sandbox' 
    let currency = 'USD'
    const client = { sandbox: process.env.REACT_APP_PAYPAL_ID, production: 'YOUR-PRODUCTION-APP-ID' }

    return { env, currency, client, total: totalPrice, onSuccess, onCancel, onError }
}