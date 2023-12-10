import Cookies from 'js-cookie';
import axios from 'axios';

export const GetSearchedUsers = async(search) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            search: search,
        }
    };



    try {

        
        const search_url="/user/addUsers";
        const res = await axios.get(search_url, config);
        // JSON.stringify(res.data)
        const data=res.data;
        
        if (res.data.error || !data.profiles.length) {
            return []
        } 
        else {
            return data.profiles.map(profile => {
                return {
                    id: profile.id,
                    name: profile.first_name,
                }
            });
        }
    } 
    
    catch (err) {
        console.log(err);
        return []
    }
};
