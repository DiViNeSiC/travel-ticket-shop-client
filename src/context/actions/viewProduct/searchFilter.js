import { SEARCH_PRODUCT } from '../../../constants/viewProduct'

export default (payload) => (dispatch) => {
    dispatch({ type: SEARCH_PRODUCT, payload })
}