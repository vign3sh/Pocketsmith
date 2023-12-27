import Cookies from 'js-cookie';
import axios from 'axios';
import {
    FRIENDS_SUCCESS,
    FRIENDS_FAIL,
    FILTER_FRIENDS
} from './types';

export const getFriends = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {        
        const search_url="/user/getFriends";
        const res = await axios.get(search_url, config);
        // JSON.stringify(res.data)
        const data=res.data;
        if (res.data.error) {
            dispatch({
                type: FRIENDS_FAIL

            });
        } else {
            dispatch({
                type: FRIENDS_SUCCESS,
                payload: data['friends']
            });
        }
    } 
    
    catch (err) {
        console.log(err);
        dispatch({
            type: FRIENDS_FAIL
        });
    }
};


export const filterFriends = (friendsFilter) => async dispatch => {
    console.log("updated filters");
    dispatch({
        type: FILTER_FRIENDS,
        payload: friendsFilter
    });
};