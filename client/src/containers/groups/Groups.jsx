import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards";

const groups = () => {
    let groups = useSelector((state) => state.bill.groups);
    let groupsLoaded = useSelector((state) => state.bill.groupsLoaded);
    /*useEffect(() => {
      if(!groupsLoaded){
          getGroups();
      }
    },[]);*/

    
    const showGroups = (groups) => {
        return <Cards data={groups} componentType={'groups'} loaded={groupsLoaded} aws_link="https://pocketsmith.s3.us-east-2.amazonaws.com/images/groupAvatar/"/>;       
    }

    return(<>
        {showGroups(groups)}
    </>);
}
export default groups;

