import React from "react";
import { useParams } from "react-router-dom";
const friends = () => {
    // get the id from the url
    const { id } = useParams();
    console.log(id);
    return(
    <div>Friends Profile</div>
    );
}
export default friends;