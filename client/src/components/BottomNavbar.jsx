import React from "react";

import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Paper,
  } from '@mui/material';
  import { Link } from 'react-router-dom';
  import { useLocation } from 'react-router-dom';

  import {PersonOutline as PersonOutlineIcon, Person as PersonIcon,
    PeopleOutlined as PeopleOutlinedIcon, People as PeopleIcon,
    AddCircle as AddCircleIcon,
    ReceiptOutlined as ReceiptOutlinedIcon, Receipt as ReceiptIcon,
    Settings as SettingsIcon
  } from '@mui/icons-material';
 

const bottomNavbar = () => {
  const location = useLocation().pathname;
  let links = {'/friends':'/friends', '/groups':'/groups', '/addExpense':'/addExpense', '/activity':'/activity', '/account':'/account'};
  let selectedPage= Object.keys(links).find(key => location.startsWith(links[key]));
    return (
      
        
        <Paper
          elevation={3}
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
        >
          <BottomNavigation
            showLabels
            value={selectedPage}
            sx={{ backgroundColor: 'background.paper' }}
            >
            <BottomNavigationAction component={Link}  to="/friends"  value="/friends" label="Friends" icon={selectedPage=== '/friends' ? <PersonIcon/> : <PersonOutlineIcon/>}/>
            <BottomNavigationAction component={Link}  to="/groups" value="/groups" label="Groups" icon={selectedPage === '/groups' ? <PeopleIcon /> : <PeopleOutlinedIcon />} />
            <BottomNavigationAction component={Link}  to="/addExpense" state={ { from: selectedPage } } value='/addExpense' icon={<AddCircleIcon style={{ fontSize: 40, color:"teal" }} />}/>
            <BottomNavigationAction component={Link}  to="/activity" value="/activity" label="Activity" icon={selectedPage==='/activity' ? <ReceiptIcon/> : <ReceiptOutlinedIcon/>}/>
            <BottomNavigationAction component={Link}  to="/account" value="/account" label="Account" icon={<SettingsIcon/>}/>
          
          </BottomNavigation>
        </Paper>
      
    );
  };
  
export default bottomNavbar;



  
 
