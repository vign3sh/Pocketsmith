import Cookies from 'js-cookie';
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
} from './types';
import axios from 'axios';


export const register = (username, password, re_password) => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    //const body = JSON.stringify({ username, password, re_password });
    const body =JSON.stringify(
    {
        "username": "test_user1",
        "password": "testpassword1",
        "re_password": "testpassword1",
        "first_name" : "test_user1",
        "last_name" : "",
        "phone" : "",
        "email" : "",
        "is_public" :true
    });
    console.log(body);
    try {
        let base_url = window.location.origin;
                if (base_url==='http://localhost:5173'){
                    base_url = 'http://localhost:8000'
                }
                
        let reg_url=base_url+'/authenticate/register';
        /*
        let isAuthenticated=await axios.get('http://127.0.0.1:8000/authenticate/authenticated');
        console.log(isAuthenticated);*/
        const res = await axios.post(reg_url, body, config);
        console.log(res);
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            alert('Sucessfully registered');
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: REGISTER_FAIL
        });
    }
};
