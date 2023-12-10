import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards";

const groups = () => {
    let groups = useSelector((state) => state.bill.groups);
    let groupsLoaded = useSelector((state) => state.bill.groupsLoaded);
    let aws_link = "https://pocketsmith.s3.us-east-2.amazonaws.com/images/groupAvatar/";
    let noCards ="Create a group and see them over here!!";
    /*useEffect(() => {
      if(!groupsLoaded){
          getGroups();
      }
    },[]);*/

    
    const showGroups = (groups) => {
        return <Cards data={groups} componentType={'groups'} loaded={groupsLoaded} aws_link={aws_link} noCards={noCards}/>;       
    }

    return(<>
        {showGroups(groups)}
    </>);
}
export default groups;

