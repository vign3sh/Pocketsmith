import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CSRFToken = () => {
    //console.log('In CSRFToken');
    const [csrftoken, setcsrftoken] = useState('a');

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let base_url = window.location.origin;
                if (base_url==='http://localhost:5173'){
                    //base_url = 'http://localhost:8000'
                    base_url = 'http://127.0.0.1:8000'
                }
                console.log(base_url);
                axios.defaults.baseURL = base_url;
                await axios.get('/authenticate/csrf_cookie');
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        //console.log(document.cookie);
        setcsrftoken(getCookie('csrftoken'));
    }, []);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    );
};

export default CSRFToken;
