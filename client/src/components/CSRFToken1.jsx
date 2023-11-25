import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const CSRFToken = async() => {
    console.log('In CSRFToken');
    let cookie_req=await axios.get(`${import.meta.env.VITE_API_URL}/authenticate/csrf_cookie`);
    const csrftoken = Cookies.get('csrftoken');
    console.log('csrftoken',csrftoken);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value="0" />
    );
    
};

export default CSRFToken;
