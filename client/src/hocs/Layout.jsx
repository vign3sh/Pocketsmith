import React, { useEffect } from "react";
import { Fragment } from "react";
import BottomNavbar from "../components/BottomNavbar";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated } from "../actions/auth";

const layout = ({children, checkAuthenticated}) => {
    useEffect(() => {
        checkAuthenticated();
    }, []);
    let layoutLoc = useLocation().pathname;
    layoutLoc = layoutLoc.substring(0,15);
    
    return (
        <Fragment>
            
            {layoutLoc !== "/authentication" ? <BottomNavbar/>:null} 
            {children}
        </Fragment>
    );
}
export default connect(null, {checkAuthenticated})(layout);

