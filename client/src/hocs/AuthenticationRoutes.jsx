import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkAuthenticated } from '../actions/auth';
import LoadingScreen from '../components/LoadingScreen';
import BottomNavbar from '../components/BottomNavbar';

const AutenticationRoutes = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);    
    return(<div>
        { (isAuthenticated === undefined || isAuthenticated === null)  ? (
        // Render a loading message or spinner while checking authentication
        <LoadingScreen/>
        ) : (
            isAuthenticated === false ? (
            // Render your protected content when authenticated
            <Fragment>
                {children}
            </Fragment>
            
        ) :(
            // Render something else if not authenticated
            <Navigate to="/friends" replace={true} />
        )
        )}
        </div>);
    
};

export default AutenticationRoutes;
