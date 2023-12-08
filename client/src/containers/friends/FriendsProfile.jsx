import React from "react";
import { useParams } from "react-router-dom";
const friends = () => {
    // get the id from the url
    const { id } = useParams();
    return(
    <div>Friend {id} Profile</div>
    );
}
export default friends;