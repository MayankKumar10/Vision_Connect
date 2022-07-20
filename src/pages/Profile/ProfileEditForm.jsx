import React, { useState } from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Badge, Box, Button, Divider, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, Modal, Paper, Radio, RadioGroup, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import ReactLoading from 'react-loading';
import { updateUser, useProfile } from '../../Redux';
import { toast } from 'react-toastify';
import { SmallAvatar } from '../../styles/MatrialUI';
import { CameraAltRounded, ImageRounded } from '@mui/icons-material';

export const ProfileEditForm = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();
  const [searchText, setSearchText] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const dispatch = useDispatch();
  const {userToDisplay} = useProfile();
  const {
    username,
    firstName,
    lastName,
    bio,
    portfolio,
    avatarURL,
  } = userToDisplay;
  const {token} = useSelector((state)=>state.auth);
  const [formValue, setFormValue] = useState({...userToDisplay});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const{
    REACT_APP_CLOUDINARY_URL,
    REACT_APP_PRESET
  }=process.env

  const uploadImage = async(image)=>{
  if(Math.round(image.size/ 102400)>2)
  toast.error('file size should not be more tha 2MB');
  else{
   const data = new FormData();
   data.append('file', image);
   data.append('upload_preset',REACT_APP_PRESET);
   const requestOptions = {
    method: 'POST',
    body: data,
   };
   console.log('ImageData', data);
   await fetch(REACT_APP_CLOUDINARY_URL, requestOptions)
   .then((res)=>res.json())
   .then((json)=>{
    setFormValue((prev)=>({...prev, avatarURL: json.url}));
  })
  .catch((err)=>{
    console.log(err);
  })
  }
  }

  const updateHandler = () =>{
    dispatch(updateUser({formValue, token}));
    toast.success('Profile updated');
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#f7f7f7',
    border: '1px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };

  console.log('userToDisplay',userToDisplay);

  return (
    <Box>
        <Button variant='contained'
        className='icon-button-profile' 
        endIcon={<EditRoundedIcon />}
        onClick={handleOpen}
        >Profile
        </Button>
      

      <Modal
        keepMounted
        isOpen={open}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >

    <Box sx={style} m='auto'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl 
      component="fieldset" 
      variant="filled" 
      >
        <Box >
          <Typography variant='h4' className='flex-row-center pad-small'>
            Yours Details
          </Typography>
        <Stack spacing={4}>
          <Stack direction='col' spacing={2}>
            
              <Badge
              overlap="circular"
              className='padding-normal'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <label> 
                <Input type='file' 
                visibility='hidden' 
                accept='image/*' 
                sx={{visibility:"hidden", display:"none"}}
                onChange={(e)=> uploadImage(e.target.files[0])}
                />  
                <SmallAvatar alt="Remy Sharp">
                  <CameraAltRounded fontSize='small' sx={{color:'black'}}/>
                </SmallAvatar>
                </label>
                
              }
            >
            <Avatar 
              src={formValue.avatarURL}
              alt='profile-image'
              size='md'
              marginRight='2'
              name={`${firstName} ${lastName}`} />
            </Badge>
            
          </Stack>
        </Stack>
        <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
          <TextField label='UserName' variant='outlined' 
          value={formValue.username} 
          onChange={(e)=>setFormValue((prev)=>({...prev, username: e.target.value}))}
          required />

          <TextField label='FirstName' variant='outlined' 
          value={formValue.firstName}
          onChange={(e)=>setFormValue((prev)=>({...prev,
          firstName:e.target.value}))}
          required />

        <TextField label='LastName' variant='outlined' 
          value={formValue.lastName}
          onChange={(e)=>setFormValue((prev)=>({...prev,
          lastName:e.target.value}))}
          required />
        </Stack>

      <Stack direction='row' spacing={2}>
        <label>
        <Typography variant='title' className='flex pad-small'>Bio</Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          minCols={3}
          value={formValue.bio}
          onChange={(e)=>setFormValue((prev)=>({...prev,
          bio:e.target.value}))}
          
          style={{ width: 200, hight:200}}
        />
        </label>
      </Stack>
      <Stack direction='row' spacing={4} >
        <label>
          <Typography variant='title' className='flex pad-small'>Website</Typography>
        <TextField label='Name' variant='outlined' required/>
        </label>
      </Stack>
      </Stack>
      </Box>
      
      <Button 
          variant='contained'
          mr={3}
          onClick={()=>{
            handleClose();
            updateHandler();
          }}  
          >
          Update  
        </Button>
      </FormControl>

        
      
    </Box>
           
        </Box>
      </Modal>


    </Box>
  )
}
