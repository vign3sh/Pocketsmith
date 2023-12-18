import React from 'react'
import { Box, Select, MenuItem, FormControl, Typography } from '@mui/material';
import debounce from 'lodash.debounce';
import { useMemo, useState } from 'react';
import {ExpandMoreRounded as ExpandMoreRoundedIcon, GroupAddOutlined as GroupAddOutlinedIcon, PersonAddAltOutlined as PersonAddAltOutlinedIcon} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { roundAmount } from '../utils/utils';
import {CustomBorderTextField} from './CustomTextField';

export const Filters = ({selectedFilters, items, filterType, handleFilters, handleSearch, data}) => {

    let total_amount=0;
    total_amount=data.reduce((acc, curr) => acc + curr.amount, 0);
    total_amount=roundAmount(total_amount);
    let amount_color=total_amount===0?"var(--main-bg-color)":(total_amount>0?"var(--main-bg-color)":"var(--main-bg-color)");
    let amount_span=(<Typography variant="span" sx={{ color:`${amount_color}`}}>${Math.abs(total_amount)}</Typography>);


    const selectedFilter= selectedFilters['filters']?selectedFilters['filters']:'';
    const searchTerm = selectedFilters['searchTerm']?selectedFilters['searchTerm']:'';

    const [search, setSearch] = useState(searchTerm);
    
    const updateSearch = (e) => {
        setSearch(e.target.value);
        debouncedResults(e);
    }
        const debouncedResults = useMemo(() => {
        return debounce(handleSearch, 1000);
    }, []);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent:{xs: "center", sm: "space-between"}, mt:"10px"}}>

            <Typography gutterBottom variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' }, pl:3, mb:"0px", fontSize: "24px"}}>
                {
                total_amount===0?
                "All Settled":
                    total_amount>0
                    ?"You are Owed: "
                    :"You Owe: "
                }
                {total_amount===0?
                null:amount_span}
            </Typography>
            

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent:{xs: "space-between", sm: "center"} , mx: "10px", width:{xs: "100%", sm:"auto"} }}>
                <CustomBorderTextField
                    $secondaryColor={true}
                    label="Search"
                    type="text"
                    value={search}
                    onChange={updateSearch} 
                    style={{maxWidth: "160px"}}/>

                <Box sx={{ display: "flex", alignItems: "center"}}>
                    <FormControl
                        sx={{
                            "& .MuiInputBase-root": {
                                color: `var(--main-bg-color)!important`,
                                borderColor: `var(--main-bg-color)!important`,
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderRadius: "100px",
                                minWidth: "130px",
                                justifyContent: "center",
                                margin: "10px",
                            },

                            "fieldset":{
                                borderColor: `var(--main-bg-color)!important`,
                                borderWidth: "1px",
                            },

                            ".MuiSvgIcon-root": {    
                                color: `var(--main-bg-color)!important`,
                            },
                            ".MuiSelect-select": {
                                paddingRight: "12px!important",
                                paddingLeft: "0px!important",
                                width: 'min-content',
                            }
                        }}
                        >
                        <Select
                            className='removeBoundary'
                            value={selectedFilter}
                            onChange={handleFilters}
                            IconComponent={ExpandMoreRoundedIcon}
                            sx={{
                                fontSize: "14px",
                                textAlign: "center",
                            }}
                            
                            MenuProps={{
                                PaperProps: {
                                sx: {
                                    bgcolor: 'white',
                                    borderRadius: "12px",
                                    width: "120px",
                                    '& .MuiMenuItem-root': {
                                        padding: 2,
                                        fontWeight: "200",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        fontSize: "12px",
                                        justifyContent: "center"
                                    },
                                    '& .Mui-selected': {
                                        bgcolor: `var(--main-bg-color)!important`,
                                        color: 'white'
                                    },
                                },
                                },
                            
                                
                            }}
                        >
                            {items.map((item) => (
                            <MenuItem key={item.key} value={item.value}>
                                {item.key}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box style={{ textDecoration: "none", color:`var(--main-bg-color)`, height:"45px" }} component={Link}  to={`/${filterType}add`} >
                        {filterType=='friends'?<PersonAddAltOutlinedIcon style={{ fontSize: "45px" }} />:<GroupAddOutlinedIcon style={{ fontSize: "45px" }} />}
                    </Box>
                </Box>
                
                
            </Box>
                {/*getUsers()*/}
        </Box>
    )
}

export default Filters;