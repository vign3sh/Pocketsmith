import {
    FRIENDS_SUCCESS,
    FRIENDS_FAIL,
    FILTER_FRIENDS
} from '../actions/types';

const initialState = {
    friends: [],
    friendsLoaded: false,
    friendsFilters: {
        searchTerm:"",
        filters: 1
    }
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
                friends: [],
            }
        case FILTER_FRIENDS:
            return {
                ...state,
                friendsFilters: payload,
            }
        default:
            return state
    };
};