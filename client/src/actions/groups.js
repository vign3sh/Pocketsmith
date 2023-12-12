import Cookies from 'js-cookie';
import axios from 'axios';
import {
    GROUPS_SUCCESS,
    GROUPS_FAIL,
    FILTER_GROUPS
} from './types';

export const getGroups = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {        
        const search_url="/group/getGroups";
        const res = await axios.get(search_url, config);
        // JSON.stringify(res.data)
        const data=res.data;
        if (res.data.error) {
            dispatch({
                type: GROUPS_FAIL

            });
        } else {
            dispatch({
                type: GROUPS_SUCCESS,
                payload: data['groups']
            });
        }
    } 
    
    catch (err) {
        console.log(err);
        dispatch({
            type: GROUPS_FAIL
        });
    }
};



export const filterGroups = (groupsFilter) => async dispatch => {
    console.log("updated filters");
    dispatch({
        type: FILTER_GROUPS,
        payload: groupsFilter
    });
};