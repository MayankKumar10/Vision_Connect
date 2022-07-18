import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { userPresentFunc } from "../../helper";
import { followUser, getAllUsers, unfollowUser } from "../../Redux";

export const SuggestedFollowers = ({ users, usersList, token}) => {
  const dispatch = useDispatch();
  const [secondary, setSecondary] = useState(false);
  const {allUsers} = useSelector((state)=>state.users);
  const {user} = useSelector((state)=>state.auth);
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));


  const usersToDisplay = usersList.filter((user)=> 
  userPresentFunc(user.username, allUsers))

  return (
  <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
  <Grid container spacing={2}sx={{
  padding: '1rem',
  width: 'calc(100% + 4rem)',
  }}>
  <Grid item xs={12} md={6} >
  
    <Demo>
      <List >
        {usersToDisplay.map((user)=>(
            <ListItem 
            key={user._id}
            sx={{width:'50%', display:'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'}}>
              <Link to={`/profile/${user?.username}`}
                sx={{display:'flex',padding:'.5rem',cursor:'pointer'}} 
                state={{pageToShow:'profile'}}
                key={user.username}
                >
              <ListItemAvatar>
                <Avatar>
                <img
                  className='AvatarImage user-card-avatar box-shadow-round'
                  src={`${user.avatarURL}?w=248&fit=crop&auto=format`}
                  srcSet={`${user.avatarURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={user.username}
                  loading="lazy"
                />
                </Avatar>
              </ListItemAvatar>

                
                <ListItemText
                      primary={`${user.firstName} ${user.lastName}`}
                      secondary={secondary ? `@${user.username}` : null}
                />
                </Link>
                {userPresentFunc(user.username, users?.followers) ?
                  (
                  <Button size='medium' variant="contained" sx={{fontSize:'.75rem', padding:"0"}}
                  onClick={()=>dispatch && dispatch(unfollowUser({ followUserId: user._id, token}))}
                  >UnFollow</Button>
                  )
                :
                (
                <Button size='medium' variant="contained" sx={{fontSize:'.75rem', padding:"0"}}
                onClick={()=>dispatch && dispatch(followUser({ followUserId: user._id, token}))}
                >Follow</Button>
                )
                }
                
                </ListItem>
        ))
        }
      </List>
    </Demo>
  </Grid>
  </Grid>
  </Box>
        
  )
}

