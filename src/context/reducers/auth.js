import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_USER_LOADING,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    REGISTER_CLEAR_MESSAGE,
    ACTIVE_ACCOUNT_LOADING,
    ACTIVE_ACCOUNT_SUCCESS,
    ACTIVE_ACCOUNT_ERROR,
    REMOVE_TOKEN
} from '../../constants/auth'

import { HIDE_SEGMENT } from '../../constants/hideSegment'

export default (state, { payload, type }) => {
    switch(type) {
        case HIDE_SEGMENT: {
            return {
                ...state,
                segmentShow: false,
                login: { 
                    ...state.login,
                    error: null
                },
                register: {
                    ...state.register,
                    error: null
                },
            }
        }

        case LOGIN_LOADING: {
            return {
                ...state, 
                login: {
                    ...state.login,
                    loading: true
                }
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                segmentShow: true,
                login: {
                    loading: false,
                    error: null,
                    user: payload.user,
                    token: payload.token
                }
            }
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                segmentShow: true,
                login: {
                    loading: false,
                    error: payload,
                    user: null,
                    token: null
                }
            }
        }

        case REGISTER_LOADING: {
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: true
                }
            }
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
                segmentShow: true,
                register: {
                    loading: false,
                    error: null,
                    successMessage: payload
                }
            }
        }

        case REGISTER_ERROR: {
            return {
                ...state,
                segmentShow: true,
                register: {
                    loading: false,
                    error: payload,
                    successMessage: null 
                }
            }
        }

        case REGISTER_CLEAR_MESSAGE: {
            return {
                ...state,
                register: {
                    ...state.register,
                    successMessage: null 
                }
            }
        }

        case ACTIVE_ACCOUNT_LOADING: {
            return {
                ...state,
                activeAcc: {
                    ...state.activeAcc,
                    loading: true
                }
            }
        }

        case ACTIVE_ACCOUNT_SUCCESS: {
            return {
                ...state,
                activeAcc: {
                    loading: false,
                    error: null,
                    successMessage: payload
                }
            }
        }

        case ACTIVE_ACCOUNT_ERROR: {
            return {
                ...state,
                activeAcc: {
                    loading: false,
                    error: payload,
                    successMessage: null 
                }
            }
        }

        case LOGOUT_USER_LOADING: {
            return {
                ...state,
                logout: {
                    ...state.logout,
                    loading: true
                }
            }
        }

        case LOGOUT_USER_SUCCESS: {
            return {
                ...state,
                logout: {
                    loading: false,
                    error: null,
                    success: true
                }
            }
        }

        case LOGOUT_USER_ERROR: {
            return {
                ...state,
                segmentShow: true,
                logout: {
                    loading: false,
                    error: payload,
                    success: false
                }
            }
        }

        case REMOVE_TOKEN: {
            return {
                ...state,
                login: {
                    ...state.login,
                    token: null
                }
            }
        }

        default: 
            return state

    }
}