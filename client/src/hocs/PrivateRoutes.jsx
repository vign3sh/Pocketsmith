import React, { Fragment, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import BottomNavbar from '../components/BottomNavbar';
import DrawerAppBar from '../components/DrawerAppBar';
import { getFriends } from "../actions/friends";
import { getGroups } from "../actions/groups";
const PrivateRoutes = ({children, bottomBar=true, getFriends, getGroups}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    let friendsLoaded = useSelector((state) => state.friends.friendsLoaded);
    let groupsLoaded = useSelector((state) => state.groups.groupsLoaded);

    
    useEffect(() => {
            if(!friendsLoaded){
                getFriends();
            }
            if(!groupsLoaded){
                getGroups();
            }
    },[]);

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

export default connect(null, {getFriends, getGroups})(PrivateRoutes);