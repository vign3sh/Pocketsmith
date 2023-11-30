import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import BottomNavbar from '../components/BottomNavbar';
import DrawerAppBar from '../components/DrawerAppBar';
const PrivateRoutes = ({children, bottomBar=true}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return(<div>
        { (isAuthenticated === undefined || isAuthenticated === null)  ? (
        // Render a loading message or spinner while checking authentication
        <LoadingScreen/>
        ) : (
            isAuthenticated == true ? (
            // Render your protected content when authenticated
            <Fragment>
                <DrawerAppBar/>
                {children}
                {bottomBar?<BottomNavbar/>:null}
            </Fragment>
            
        ) :(
            // Render something else if not authenticated
            <Navigate to="/authentication" replace={true} />
        )
        )}
        </div>);
      
};

export default PrivateRoutes;
