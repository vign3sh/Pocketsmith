import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    user:[]
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        case LOGOUT_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: []
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case DELETE_USER_FAIL:
            return state
        default:
            return state
    };
};