import { HIDE_SEGMENT } from '../../Constants/hideSegment'
import { 
    ERROR,
    LOADING,
    UPDATE_AVATAR,
    DELETE_AVATAR,
    GET_USER_INFO,
    DELETE_ACCOUNT,
    UPDATE_USER_INFO,
    UPDATE_USER_PASS,
} from '../../Constants/userControls'

export default (state, { type, payload }) => {
    switch(type) {
        case HIDE_SEGMENT: return { ...state, segmentShow: false }

        case LOADING: return { ...state, loading: true }

        case ERROR: return {
            ...state, 
            loading: false,
            success: null,
            segmentShow: true,
            error: payload.message
        }

        case GET_USER_INFO: return {
            loading: false,
            segmentShow: false,
            error: null,
            success: null,
            user: payload
        }

        case UPDATE_USER_INFO: return {
            ...state,
            loading: false,
            segmentShow: true,
            error: null,
            success: payload
        }

        case UPDATE_USER_PASS: return {
            ...state,
            loading: false,
            segmentShow: true,
            error: null,
            success: payload
        }

        case UPDATE_AVATAR: return {
            ...state,
            loading: false,
            segmentShow: true,
            error: null,
            success: payload,
            avatarUpdating: true
        }

        case DELETE_AVATAR: return {
            ...state,
            error: null,
            loading: false,
            success: payload,
            segmentShow: true,
            avatarUpdating: true
        }

        case DELETE_ACCOUNT: return {
            ...state,
            loading: false,
            segmentShow: false,
            error: null,
            success: payload
        }

        default: return state
    }
}