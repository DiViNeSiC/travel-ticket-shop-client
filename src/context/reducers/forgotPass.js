import {
    FORGOT_PASS_LOADING,
    FORGOT_PASS_SUCCESS,
    FORGOT_PASS_ERROR,
    FORGOT_PASS_CLEAR_MESSAGE,
    RESET_PASS_LOADING,
    RESET_PASS_SUCCESS,
    RESET_PASS_ERROR
} from '../../constants/forgotPass'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state,
                segmentShow: false
            }
        }

        case FORGOT_PASS_LOADING: {
            return {
                ...state,
                forgot: {
                    ...state.forgot,
                    loading: true
                }
            }
        }

        case FORGOT_PASS_SUCCESS: {
            return {
                ...state,
                segmentShow: true,
                forgot: {
                    loading: false,
                    error: null,
                    successMessage: payload
                }
            }
        }

        case FORGOT_PASS_ERROR: {
            return {
                ...state,
                segmentShow: true,
                forgot: {
                    loading: false,
                    error: payload,
                    successMessage: null
                }
            }
        }

        case FORGOT_PASS_CLEAR_MESSAGE: {
            return {
                ...state,
                forgot: {
                    ...state.forgot,
                    successMessage: null
                }
            }
        }

        case RESET_PASS_LOADING: {
            return {
                ...state,
                reset: {
                    ...state.reset,
                    loading: true,
                }
            }
        }

        case RESET_PASS_SUCCESS: {
            return {
                ...state,
                segmentShow: true,
                reset: {
                    loading: false,
                    error: null,
                    successMessage: payload
                }
            }
        }

        case RESET_PASS_ERROR: {
            return {
                ...state,
                segmentShow: true,
                reset: {
                    loading: false,
                    error: payload,
                    successMessage: null
                }
            }
        }

        default: 
            return state
    }
}