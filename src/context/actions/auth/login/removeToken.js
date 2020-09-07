import { REMOVE_TOKEN } from "../../../../constants/auth"

export default (dispatch) => {
    dispatch({ type: REMOVE_TOKEN })
}