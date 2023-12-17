import React from "react";
import { Link } from "react-router-dom";
import {Card, Box, Grid,Typography} from '@mui/material';
import '../assets/css/Cards.css';
import { roundAmount } from "../utils/utils";



const cards = ({data, componentType, loaded, aws_link, noCards, total_data}) => {

    if (!data || !loaded) {
        return (<div></div>)
    }
    if ( data.length===0 ) {
        if(total_data.length===0){
            return (<div>New to App! {noCards}</div>);            
        }
        return (<div>No {componentType} with filters found</div>);
    }
        

    // Round amount to 2 decimal places if needed
    

    const setFriendName = (first, last) => {
        return first.charAt(0).toUpperCase() + first.slice(1) + " " + last.charAt(0).toUpperCase();
    }
   
    return (<Grid container spacing={{xs:2}} padding={{xs:2,sm:4}}>
                {data.map(({id, first_name, last_name, grp_name, pfp, amount, description},i) =>{
                    amount=roundAmount(amount);
                    first_name=first_name?setFriendName(first_name,last_name):first_name;
                    pfp=pfp? pfp: i+1%16;
                    //const randomImageIndex = Math.floor(Math.random() * imageList.length);
                    //const randomImageIndex = i%imageList.length;
                    return (
                        
                        <Grid item xs={12} sm={6} md={4} key={id} component={Link}  to={`/${componentType}/${id}`} style={{ textDecoration: "none"}}> 
                            <Card className='card' variant="outlined" sx={{ ':hover': {boxShadow: 20,}}}>
                                {/*"&:hover": {borderColor:(amount===0 || !amount)?"orange":amount>0?"green":"red", borderBlockWidth:"1px", },}}>*/}
                                <Box className="cardGrid">
                                        <Box >
                                            {/*<img className="cardAvatar" src={pfp?imageList[pfp]:imageList[randomImageIndex]}
                                                style={{}}/>*/}
                                                <img className="cardAvatar" src={`${aws_link}${pfp}.png`}
                                                style={{}}/>
                                        </Box>
                                        
                                        <Box className="cardDetails">
                                            <Typography className="cardName" gutterBottom variant="h6" component="div">
                                                {grp_name? grp_name: first_name}
                                            </Typography>
                                            
                                            {description
                                                ? <Typography variant="body2" color="text.secondary" sx={{ marginLeft:"5px"}}>
                                                    {description}
                                                </Typography>
                                                : ""
                                            }

                                        </Box>
                                        <Box className="cardAmount" color={(amount===0 || !amount)?"var(--neutral-color)":amount>0?"var(--positive-color)":"var(--negative-color)"}>
                                            
                                            <Typography variant={(amount===0 || !amount)?"body1":"body2"}>
                                                    {(amount===0 || !amount)
                                                    ? "All settled"
                                                    :
                                                    (
                                                        amount>0
                                                        ? "Owes you "
                                                        : "You owe "
                                                    )
                                                    }
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ display:`${(amount===0 || !amount)?"none":"flex"}` }}>
                                                    {amount>0? `$${amount}`: `$${-amount}`}
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

