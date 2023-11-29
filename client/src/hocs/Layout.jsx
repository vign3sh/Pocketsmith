import React, { useEffect } from "react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated } from "../actions/auth";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const layout = ({checkAuthenticated}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated === undefined || isAuthenticated === null){
            checkAuthenticated();
        }
        
    });
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    );
}

export default connect(null, {checkAuthenticated})(layout);

