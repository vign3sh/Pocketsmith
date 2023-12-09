import React, { useEffect } from "react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated } from "../actions/auth";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFriends } from "../actions/friends";
import { getGroups } from "../actions/groups";

const layout = ({checkAuthenticated, getFriends, getGroups}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    let friendsLoaded = useSelector((state) => state.bill.friendsLoaded);
    let groupsLoaded = useSelector((state) => state.bill.groupsLoaded);
    
    useEffect(() => {
        if (isAuthenticated === undefined || isAuthenticated === null){
            checkAuthenticated();
            if(!friendsLoaded){
                getFriends();
            }
            if(!groupsLoaded){
                getGroups();
            }
        }
        
    });
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    );
}

export default connect(null, {checkAuthenticated, getFriends, getGroups})(layout);

