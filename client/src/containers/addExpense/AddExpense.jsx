import React from "react";
import {useLocation} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import debounce from 'lodash.debounce';
import {GetSearchedUsers} from "../../actions/users"
import {TextField,Box} from '@mui/material';

const addExpense = () => {
    const getView = () => {
        const location = useLocation();
        let prevPage = location.state?.from;
        let addExpenseViews = {friends:'/friends', groups:'/groups'};
        let addExpenseView= Object.keys(addExpenseViews).find(key => prevPage.startsWith(addExpenseViews[key]));
        addExpenseView = addExpenseView===undefined? 'default':addExpenseView;
        return addExpenseView;
    };


    let addExpenseView = getView();
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async (searchTerm) => {
        console.log('searchTerm: ', searchTerm);
        if(searchTerm === ""){
            setUsers([]);
            return;
        }
        else{
            let searchedUsers= await GetSearchedUsers(searchTerm);
            console.log('number of users: ', searchedUsers.length);
            setUsers(searchedUsers);
        }
        
        };
        getUsers(searchTerm);
    },[searchTerm]);

    const getUserView=(user,i)=>{
        return ( <p style={{margin: 10}} key={i}>{user.name}</p> );
    }
    const getUsers = () => {
        if (users.length===0) {
            return (<div></div>)
        }
        return (users.map((user, i)=>getUserView(user,i)));
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 1000);
    }, []);
    
    return(
    <div>
        Add Expenses: {addExpenseView} first
        <Box sx={{ display: 'flex', alignItems: 'flex-center', flexWrap: 'wrap', padding:2}}>
            <TextField
                label="Search"
                fullWidth
                type="text" onChange={debouncedResults} 
                style={{margin: 10}}
            />
            {getUsers()}
        </Box>
        
    </div>
    );
}
export default addExpense;