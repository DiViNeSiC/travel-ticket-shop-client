import { REGISTER_CLEAR_MESSAGE } from "../../../../constants/auth"
import { FORGOT_PASS_CLEAR_MESSAGE } from "../../../../constants/forgotPass"
import { REGISTER_CLEAR } from "../../../../constants/clearMessage"

export default (action) => (dispatch) => {
    const type = 
        action === REGISTER_CLEAR ? 
        REGISTER_CLEAR_MESSAGE : 
        FORGOT_PASS_CLEAR_MESSAGE

    dispatch({ type })
}