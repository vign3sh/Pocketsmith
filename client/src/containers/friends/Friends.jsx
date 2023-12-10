import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards";

const friends = () => {
    let friends = useSelector((state) => state.bill.friends);
    let friendsLoaded = useSelector((state) => state.bill.friendsLoaded);
    let aws_link = "https://pocketsmith.s3.us-east-2.amazonaws.com/images/userAvatar/128_";
    let noCards ="Add an expense/group and see friends over here!!";

    /*useEffect(() => {
        if(!friendsLoaded){
            getFriends();
        }
    },[]);*/


    
    const showFriends = (friends) => {
        return <Cards data={friends} componentType="friends" loaded={friendsLoaded} aws_link={aws_link} noCards={noCards}/>;       
    }

    return(<>
        {showFriends(friends)}
    </>);
}
export default friends;

