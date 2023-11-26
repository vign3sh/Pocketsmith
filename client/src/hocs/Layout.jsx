import React from "react";
import { Fragment } from "react";
import BottomNavbar from "../components/BottomNavbar";
import { useLocation } from "react-router-dom";
import CSRFToken from "../components/CSRFToken";
const layout = ({children}) => {
    let layoutLoc = useLocation().pathname;
    layoutLoc = layoutLoc.substring(0,15);
    
    return (
        <Fragment>
            <CSRFToken/>
            {layoutLoc !== "/authentication" ? <BottomNavbar/>:null} 
            {children}
        </Fragment>
    );
}
export default layout;

