import { Avatar, Box, Checkbox, FormControlLabel, FormGroup, Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { userPresentFunc } from '../../helper';
import "../../styles/root.css";

export const HorizontalCard = ({usersList}) => {
  const [secondary, setSecondary] = useState(false);
  const {allUsers} = useSelector((state)=>state.users);
  
  
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
        <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Show user name"
        />
      </FormGroup>
          <Demo>
            <List >
              {usersToDisplay.map((user)=>(<Link to={`/profile/${user.username}`} 
                  state={{pageToShow:'profile'}}
                  key={user.username}
                  sx={{cursor:'pointer'}}
                  >
                  <ListItem>
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
                  </ListItem>
                  </Link>
                
              ))
              }
            </List>
          </Demo>
        </Grid>
        </Grid>
        </Box>
        
  )
}
