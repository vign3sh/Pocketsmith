import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkAuthenticated } from '../actions/auth';
import LoadingScreen from '../components/LoadingScreen';
import BottomNavbar from '../components/BottomNavbar';

const PrivateRoutes = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    /*
      useEffect(() => {
        const checkAuthStatus = async () => {
          try {
            // Perform your asynchronous authentication check here
            // For example, you might make an API request to verify the user's token
            // Replace the following line with your authentication logic
            const isAuthenticatedAsync = checkAuthenticated();
          } catch (error) {
            console.error('Error checking authentication:', error);
          } finally {
            // Set checkingAuth to false once the authentication check is complete
            
          }
        };
    
        checkAuthStatus();
      },[]);
      */

    return(<div>
        { (isAuthenticated === undefined || isAuthenticated === null)  ? (
        // Render a loading message or spinner while checking authentication
        <LoadingScreen/>
        ) : (
            isAuthenticated == true ? (
            // Render your protected content when authenticated
            <Fragment>
                <BottomNavbar/>
                {children}
            </Fragment>
            
        ) :(
            // Render something else if not authenticated
            <Navigate to="/authentication" replace={true} />
        )
        )}
        </div>);
    
};

export default PrivateRoutes;
