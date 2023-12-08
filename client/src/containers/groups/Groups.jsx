import React from "react";
import { useSelector, connect } from "react-redux";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { getGroups } from "../../actions/groups";

const groups = ({getGroups}) => {
    let groups = useSelector((state) => state.bill.groups);
    let groupsLoaded = useSelector((state) => state.bill.groupsLoaded);
    useEffect(() => {
      if(!groupsLoaded){
          getGroups();
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
    
    const showGroups = (groups) => {
        return <Cards data={groups} componentType={'groups'} loaded={groupsLoaded}/>;       
    }

    return(<>
        {showGroups(groups)}
    </>);
}
export default connect(null, {getGroups})(groups);

