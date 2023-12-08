import {
    FRIENDS_SUCCESS,
    FRIENDS_FAIL,
    GROUPS_SUCCESS,
    GROUPS_FAIL
} from '../actions/types';

const initialState = {
    friends: [],
    friendsLoaded: false,
    groups: [],
    groupsLoaded: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case FRIENDS_SUCCESS:
            return {
                ...state,
                friends: payload,
                friendsLoaded: true,
            }
        case FRIENDS_FAIL:
            return {
                ...state,
                friends: []
            }
        case GROUPS_SUCCESS:
            return {
                ...state,
                groups: payload,
                groupsLoaded: true,
            }
        case GROUPS_FAIL:
            return {
                ...state,
                groups: []
            }
        default:
            return state
    };
};