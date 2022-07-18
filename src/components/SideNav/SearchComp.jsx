import { CloseRounded } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { searchUser } from '../../helper';
import { useDebounceHook } from '../../hooks';
import { HorizontalCard } from '../UserPostCard/HorizontalCard';
import "../../styles/root.css";

export const SearchComp = () => {
  const {allUsers} = useSelector((state)=>state.users);
  const {pathname} = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchUsers, setSearchUsers] = useState([]);
  const debounceSearchVal = useDebounceHook(searchText, 500);
  
  useEffect(()=>{
    setSearchUsers(searchUser(allUsers, searchText));
  },[debounceSearchVal]);

  useEffect(()=>{
    setSearchText('');
  },[pathname])
  
  return (
    <Box>
       <Box
          className="sidenav-search-container"
          action="#"
        >
          <InputBase
            className="boxShadow search-container"
            type="search"
            name=""
            placeholder="search"
            value={searchText}
            onChange={(e)=>(
              setSearchText(e.target.value.trim())
            )}
          />

          <IconButton  
              sx={{ p: '10px' }} 
              aria-label="search" >   
          {
            searchText.length ? 
            <CloseRounded 
            onClick={()=> setSearchText('')} /> 
            : 
            <SearchIcon />
          }</IconButton>
        </Box>
        {
          searchText.length !==0 && (
            <Box
            sx={{
              position:'absolute',
              top:'10%',
              width:'50%',
              backgroundColor:'#fff',
            }}
            >
              <HorizontalCard usersList={searchUsers} />
            </Box>
          )
        }
    </Box>
  )
}
