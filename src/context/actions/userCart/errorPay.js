import { ERROR_PAY } from '../../../constants/userCart'

export default (err) => (dispatch) => {
    dispatch({ type: ERROR_PAY, payload: err })
}
