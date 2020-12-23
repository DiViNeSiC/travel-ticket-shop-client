import { 
    LOADING,
    ERROR,
    GET_USER_INFO,
    UPDATE_USER_INFO,
    UPDATE_USER_PASS,
    UPDATE_AVATAR,
    DELETE_AVATAR,
    DELETE_ACCOUNT
} from '../../constants/userSettings'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default (state, { type, payload }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state, 
                segmentShow: false
            }
        }

        case LOADING: {
            return {
                ...state, 
                loading: true
            }
        }

        case ERROR: {
            return {
                ...state, 
                loading: false,
                success: null,
                segmentShow: true,
                error: payload
            }
        }

        case GET_USER_INFO: {
            return {
                loading: false,
                segmentShow: false,
                error: null,
                success: null,
                user: payload
            }
        }

        case UPDATE_USER_INFO: {
            return {
                ...state,
                loading: false,
                segmentShow: true,
                error: null,
                success: payload
            }
        }

        case UPDATE_USER_PASS: {
            return {
                ...state,
                loading: false,
                segmentShow: true,
                error: null,
                success: payload
            }
        }

        case UPDATE_AVATAR: {
            return {
                ...state,
                loading: false,
                segmentShow: true,
                error: null,
                success: payload,
                avatarUpdating: true
            }
        }

        case DELETE_AVATAR: {
            return {
                ...state,
                loading: false,
                segmentShow: true,
                error: null,
                success: payload,
                avatarUpdating: true
            }
        }

        case DELETE_ACCOUNT: {
            return {
                ...state,
                loading: false,
                segmentShow: false,
                error: null,
                success: payload
            }
        }

        default:
            return state
    }
}