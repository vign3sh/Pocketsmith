import React from "react";
import { useSelector, connect } from "react-redux";
import Cards from "../../components/Cards";
import Filters from "../../components/Filters";
import {useState, useEffect} from 'react';
import {filterGroups} from '../../actions/groups';

const groups = ({filterGroups}) => {
    let groups = useSelector((state) => state.groups.groups);
    let groupsLoaded = useSelector((state) => state.groups.groupsLoaded);
    let groupsfilters = useSelector((state) => state.groups.groupsFilters);
    let aws_link = "https://pocketsmith.s3.us-east-2.amazonaws.com/images/groupAvatar/";
    let noCards ="Create a group and see them over here!!";
    /*useEffect(() => {
      if(!groupsLoaded){
          getGroups();
      }
    },[]);*/

    const [filteredGroups, setFilteredGroups ]= useState([...groups]);

    const getFilteredGroups = (group, filters) => {
        let searchTerm = filters.searchTerm;        
        let searchFilter=true;
        if(searchTerm){
            searchFilter=group.grp_name.toLowerCase().includes(filters.searchTerm)
        }
        console.log("searchTerm:",searchTerm);
        if(filters.filters === 2){
            return (group.amount > 0 || group.amount < 0) && searchFilter;
        }
        else if(filters.filters === 3){
            return group.amount < 0 && searchFilter;
        }
        else if (filters.filters === 4){
            return group.amount > 0 && searchFilter;
        }
        else{
            return true && searchFilter;
        }
    }

    useEffect(() => {
        let tempFilteredGroups = groups;
        
        tempFilteredGroups = groups.filter(group => getFilteredGroups(group, groupsfilters));
        setFilteredGroups(tempFilteredGroups);
    },[groupsfilters, groups]);

    let items=[
        { "key": "None", "value": 1},
        { "key": "Non-settled", "value": 2 },
        { "key": "You Owe", "value": 3 },
        { "key": "You are Owed", "value": 4}
      ];
    
    
    /*useEffect(() => {
        if(!groupsLoaded){
            getGroups();
        }
    },[]);*/

    

    const handleFilters = (e) => {
        let tempFilters = {
            ...groupsfilters,
            'filters': e.target.value
        }
        filterGroups(tempFilters);
    };

    const handleSearch = (e) => {
        let tempFilters = {
            ...groupsfilters,
            'searchTerm': e.target.value
        }
        filterGroups(tempFilters);
    };

    
    const showGroups = (filteredGroups) => {
        return (
        <>
            <Filters selectedFilters={groupsfilters} items={items} filterType='groups' handleFilters={handleFilters} handleSearch={handleSearch} data={filteredGroups}/>
            <Cards data={filteredGroups} componentType={'groups'} loaded={groupsLoaded} aws_link={aws_link} noCards={noCards} total_data={groups}/>
        </>);
            
    }

    return(<>
        {showGroups(filteredGroups)}
    </>);
}
export  default connect(null,{filterGroups}) (groups);

