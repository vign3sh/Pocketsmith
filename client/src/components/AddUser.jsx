import React from 'react'
import { useEffect, useMemo, useState, useCallback } from "react";
import debounce from 'lodash.debounce';
import {GetSearchedUsers} from "../actions/users"
import {TextField,Box} from '@mui/material';
import _debounce from 'lodash.debounce';
import {Grid, Button} from '@mui/material';

const AddUser = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async (searchTerm) => {
            console.log('searchTerm: ', searchTerm);
            let searchedUsers= await GetSearchedUsers(searchTerm);
            console.log('number of users: ', searchedUsers.length,'Current searchTerm: ', searchTerm);
            setUsers(searchedUsers);       
        };
        getUsers(searchTerm);
    },[searchTerm]);

    const getUserView=(user,i)=>{
        return ( 
            
            
            <Grid key={i} item xs={6} sm={4} md={3} lg={2} style={{ textDecoration: "none"}}> 
                <Button className="customButton">
                    {user.name}
                </Button>
            </Grid>
            
        
        )
    }
    const getUsers = () => {
        if (users.length===0) {
            return (<div></div>)
        }
        return (
            <Grid container spacing={{xs:1 , sm:2}} padding={{xs:2,sm:4}}>
                {users.map((user, i)=>getUserView(user,i))}
            </Grid>
        )
        
    };

   /* 
   const handleChange = (e) => {
        if (e.target.value === '') {
            console.log('cancel');
            debouncedHandleChange.cancel();
            setSearchTerm(e.target.value);
        }
        else{
            debouncedHandleChange(e.target.value);
        }
        
    };
    const debouncedHandleChange = useCallback(
        debounce((searchInput) => {
          if (searchInput !== '') {
            // Your handleChange logic here
            setSearchTerm(searchInput);
          }
        }, 50),
        [],
      );

    */

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };



    

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-center', flexWrap: 'wrap', padding:2}}>
            <TextField
                label="Search"
                fullWidth
                type="text" onChange={handleSearchChange} 
                style={{margin: 10}}
            />
            {getUsers()}
        </Box>
  )
}

export default AddUser