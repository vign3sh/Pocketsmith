import React from "react";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector, connect } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { logout } from '../../actions/auth';
const account = ({dispatch}) => {

    const logout_request = () => {    
        //console.log('logging out');
        dispatch(logout())
      };
  
        
      const onSubmit = e => {
          e.preventDefault();
          logout_request();
          
      };
      /*
      const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
      const navigate = useNavigate();
      let base_url = window.location.origin;
      if (base_url!=='http://localhost:5173'){ 
      useEffect(() => {
        // Checking if user is loggedOut
        if (!isAuthenticated) {
          navigate("/authentication");
        }
      }, [navigate, isAuthenticated]);
    }
    */
    return(
        <Box>
            <form onSubmit={onSubmit}>   
                    
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Logout
                </Button>
            </form>
        </Box>
    );
}
export default connect()(account);
