import React from "react";
import { Link } from "react-router-dom";
import {Card, Box, Grid,Typography} from '@mui/material';
import '../assets/css/Cards.css';
import userPfp from '../assets/images/userProfile/128x128/128_01.png';


const cards = ({data, componentType, loaded}) => {
    //check if friends is undefined
    if (!data || !loaded) {
        return (<div></div>)
    }
    if ( data.length===0 ) {
        return (<div>New to App! Add an expense/group and see friends ove here!!</div>)
    }
        

    // Round amount to 2 decimal places if needed
    const roundAmount = (amount) => {
        amount=amount.toPrecision(4);
        amount=Math.round((amount) * 100) / 100;
        return amount;
    }

    const setFriendName = (first, last) => {
        return first.charAt(0).toUpperCase() + first.slice(1) + " " + last.charAt(0).toUpperCase();
    }
   
    return (<Grid container spacing={{xs:2}} style={{marginTop: "25px" }} padding={{xs:2,sm:4}}>
                {data.map(({id, first_name, last_name, grp_name, pfp, amount, description},i) =>{
                    amount=roundAmount(amount);
                    first_name=first_name?setFriendName(first_name,last_name):first_name;
                    //const randomImageIndex = Math.floor(Math.random() * imageList.length);
                    //const randomImageIndex = i%imageList.length;
                    return (
                        
                        <Grid item xs={12} sm={6} md={4} key={id} component={Link}  to={`/${componentType}/${id}`} style={{ textDecoration: "none"}}> 
                            <Card className='card' variant="outlined">
                                <Box className="cardGrid">
                                        <Box >
                                            {/*<img className="cardAvatar" src={pfp?imageList[pfp]:imageList[randomImageIndex]}
                                                style={{}}/>*/}
                                                <img className="cardAvatar" src={userPfp}
                                                style={{}}/>
                                        </Box>
                                        
                                        <Box className="cardDetails">
                                            <Typography className="cardName" gutterBottom variant="h6" component="div">
                                                {grp_name? grp_name: first_name}
                                            </Typography>
                                            
                                            {description
                                                ? <Typography variant="body2" color="text.secondary">
                                                    {description}
                                                </Typography>
                                                : ""
                                            }

                                        </Box>
                                        <Box className="cardAmount" color={(amount===0 || !amount)?"yellow":amount>0?"green":"red"}>
                                            <Typography variant="body2">
                                                    {(amount===0 || !amount)
                                                    ? "All settled"
                                                    :amount>0
                                                    ? "You owe "
                                                    : "Owes you "}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                    {amount===0 || !amount? "":amount>0? `$${amount}`: `$${-amount}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            );

}
export default cards;

