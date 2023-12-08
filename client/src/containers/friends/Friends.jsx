import React from "react";
import { useSelector,connect } from "react-redux";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { getFriends } from "../../actions/friends";

const friends = ({getFriends}) => {
    let friends = useSelector((state) => state.bill.friends);
    let friendsLoaded = useSelector((state) => state.bill.friendsLoaded);
    useEffect(() => {
        if(!friendsLoaded){
            getFriends();
        }
    },[]);
    /*
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
          const importAll = import.meta.glob("/src/assets/images/userProfile/128x128//*.png");
          const images = [];
          for (const path in importAll) {
            const image = await importAll[path]();
            images.push(image.default);
          }
          setImageList(images);
          
        };
        loadImages();
      }, []);
      */

    
    const showFriends = (friends) => {
        return <Cards data={friends} componentType={'friends'} loaded={friendsLoaded}/>;       
    }

    return(<>
        {showFriends(friends)}
    </>);
}
export default connect(null, {getFriends})(friends);

