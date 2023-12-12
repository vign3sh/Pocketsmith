import {
    GROUPS_SUCCESS,
    GROUPS_FAIL,
    FILTER_GROUPS
} from '../actions/types';

const initialState = {
    groups: [],
    groupsLoaded: false,
    groupsFilters: {
        searchTerm:"",
        filters: 1
    },
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
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
        case FILTER_GROUPS:
            return {
                ...state,
                groupsFilters: payload,
            }
        default:
            return state
    };
};

