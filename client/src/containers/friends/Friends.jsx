import React from "react";
import { useSelector, connect } from "react-redux";
import Cards from "../../components/Cards";
import Filters from "../../components/Filters";
import {filterFriends} from '../../actions/friends';
import {useState, useEffect} from 'react';

const friends = ({filterFriends}) => {
    let friends = useSelector((state) => state.friends.friends);
    let friendsLoaded = useSelector((state) => state.friends.friendsLoaded);
    let friendsfilters = useSelector((state) => state.friends.friendsFilters);

    //let filteredFriends = useSelector((state) => state.friends.filteredFriends);
    let aws_link = "https://pocketsmith.s3.us-east-2.amazonaws.com/images/userAvatar/128_";
    let noCards ="Add an expense/group and see friends over here!!";
    const [filteredFriends, setFilteredFriends ]= useState([...friends]);

    const getFilteredFriends = (friend, filters) => {
        let searchTerm = filters.searchTerm;        
        let searchFilter=true;
        if(searchTerm){
            searchFilter=friend.first_name.toLowerCase().includes(filters.searchTerm)
        }
        console.log("searchTerm:",searchTerm);
        if(filters.filters === 2){
            return (friend.amount > 0 || friend.amount < 0) && searchFilter;
        }
        else if(filters.filters === 3){
            return friend.amount < 0 && searchFilter;
        }
        else if (filters.filters === 4){
            return friend.amount > 0 && searchFilter;
        }
        else{
            
            return true && searchFilter;
        }
    }

    useEffect(() => {
        let tempFilteredFriends = friends;
        
        tempFilteredFriends = friends.filter(friend => getFilteredFriends(friend, friendsfilters));
        //console.log('tempFilteredFriends: ', tempFilteredFriends);
        setFilteredFriends(tempFilteredFriends);
    },[friendsfilters, friends]);

    let items=[
        { "key": "None", "value": 1},
        { "key": "Non-settled", "value": 2 },
        { "key": "You Owe", "value": 3 },
        { "key": "You are Owed", "value": 4}
      ];
    
    
    /*useEffect(() => {
        if(!friendsLoaded){
            getFriends();
        }
    },[]);*/

    

    const handleFilters = (e) => {
        let tempFilters = {
            ...friendsfilters,
            'filters': e.target.value
        }
        filterFriends(tempFilters);
    };

    const handleSearch = (e) => {
        let tempFilters = {
            ...friendsfilters,
            'searchTerm': e.target.value
        }
        filterFriends(tempFilters);
    };
    
    const showFriends = (filteredFriends) => {
        return (
            <>
                <Filters selectedFilters={friendsfilters} items={items} filterType='friends' handleFilters={handleFilters} handleSearch={handleSearch} data={filteredFriends}/>
                <Cards data={filteredFriends} componentType="friends" loaded={friendsLoaded} aws_link={aws_link} noCards={noCards} total_data={friends}/>
            </>);
              
    }

    return(<>
        {showFriends(filteredFriends)}
    </>);
}
export default connect(null,{filterFriends}) (friends);

