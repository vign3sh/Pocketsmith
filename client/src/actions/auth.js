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

export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ 
        
    });


    try {
        //console.log(config);
        
        let base_url = window.location.origin;
        if (base_url==='http://localhost:5173'){
            //base_url = 'http://localhost:8000'
            base_url = 'http://127.0.0.1:8000'
        }
        axios.defaults.baseURL = base_url;
        let reg_url='/authenticate/authenticated';
        const res = await axios.get(reg_url, body, config);
        const {isAuthenticated, ...userDetails}=res.data;

        if (res.data.error || res.data.isAuthenticated === 'error') {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            });
        } 
        else if (res.data.isAuthenticated === 'success') {
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: userDetails
            });
        }
        else {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            });
        }
    } 
    
    catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
        });
    }
};


export const register = (username, password, re_password) => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ 
        "username": username,
        "password": password,
        "re_password": re_password });
    try {
        let reg_url='/authenticate/register';
        const res = await axios.post(reg_url, body, config);
        //console.log(res);
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
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


export const login = (username, password) => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ 
        "username": username,
        "password": password
    });

    
    try {
        let reg_url='/authenticate/login';
        const res = await axios.post(reg_url, body, config);
        const {success, ...userDetails}=res.data;
        if (res.data.error) {
            dispatch({
                type: LOGIN_FAIL
            });
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: userDetails
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        });
    }
};


export const logout = () => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };
    const body = JSON.stringify({ 
        
    });


    try {
        //console.log(config);
        let reg_url='/authenticate/logout';
        const res = await axios.post(reg_url, body, config);
        if (res.data.error) {
            dispatch({
                type: LOGOUT_FAIL
            });
        } else {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: LOGOUT_FAIL
        });
    }
};