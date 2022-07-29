import React, { useState } from 'react'
import {
  ImageRounded,
  CalendarMonthRounded,
  GifRounded,
  MoodRounded,
  LocationOnRounded,
  Image,
  CloseRounded} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, gifClicked } from '../../Redux';
import axios from 'axios';
import { Button, IconButton, Input, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { GifInput } from './GifInput';

export const NewPost = ({close = null}) => {
  const [postData, setPostData] = useState({content:'', postImage:''});
  const [posting, setPosting] = useState();
  const {gifSelected} = useSelector((state)=>state.posts);

  const dispatch = useDispatch();
  const {user:{avatarURL}, token} = useSelector((state)=>state.auth);

  const {content, postImage} = postData;
  
  const submitHandler = async(e) =>{
    e.preventDefault();

    if(!postImage){
      dispatch(createPost({ token, postData:{...postData, gifSelected} }))

      setPostData({ content: ''});
      dispatch(gifClicked(''));
    }else{
      const data = new FormData();
      setPosting(true);
      data.append('file', postData.postImage);
      data.append('upload_preset', 'zkt6a4hd');
      // data.append('upload_preset', process.env.REACT_APP_PRESET);
      const requestOptions = {
        method: 'POST',
        body: data,
      };
      await fetch('https://api.cloudinary.com/v1_1/mak28/image/upload',requestOptions)
      .then((res) => console.log(res))
      .then((json)=>{
        dispatch(
          createPost({
            token,
            postData: {content: postData.content, postImage: json.url},
          })  
        );
        setPosting(false);
        setPostData({content:'', postImage:''});
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    if(close) close();
  }

  //let imageURL= URL.createObjectURL(postData.postImage);  

  // console.log('postDataImage', imageURL);

  return (
    <div class="AvatarDomContainer post-card-container post-flex">
      <Stack spacing={2}>
      <div className="post-img-text">
        <img
          class="AvatarImage smallAvatar box-shadow-round"
          src={avatarURL}
          alt="avatarURL"
          sizes=""
          srcset=""
        />

        <textarea
          className="home-text"
          placeholder="What's happening?"
          maxlength="240"
          value={postData.content}
          onChange={(e)=>
          setPostData((prev)=> ({ ...prev, content: e.target.value })) 
          }
          autofocus
        />
       </div>
        {postData.postImage && (
          <Box sx={{ 
            width:'fit-content',
            padding: '0 1rem',
            width: '100%',
            position:'relative'
          }}  m='auto'>
          
          <Box
            component="img"
            sx={{
            width:'100%',
            height: '20rem',
            borderRadius:'1rem',}}
            src={`${URL.createObjectURL(postData.postImage)}`}
            alt='postImage'
            objectFit={'contain'}
            loading='lazy'
           
          />

          <IconButton 
            sx={{
            position:'absolute',
            top:'4%',
            right:'4%',
            border:'1px solid black'}}
            variant='iconButton'
            fontSize={'30'}
            onClick={()=>
            setPostData((prev)=>({...prev, postImage: ''}))
          }
          ><CloseRounded size='30' color='black'/></IconButton>
          </Box>
        )}
        {gifSelected &&  (
         <Box sx={{ 
          width:'fit-content',
          padding: '0 1rem',
          width: '100%',
          position:'relative'
        }}  m='auto'>
        <Box
          component="img"
          sx={{
          width:'100%',
          height: '20rem',
          borderRadius:'1rem',}}
          src={gifSelected}
          alt='postImage'
          objectFit={'contain'}
          loading='lazy'
        />

        <IconButton 
          sx={{
          position:'absolute',
          top:'4%',
          right:'4%',
          border:'1px solid black'}}
          variant='iconButton'
          fontSize={'30'}
          onClick={()=>{
          setPostData((prev)=>({...prev, postImage: ''}));
          dispatch(gifClicked(''));
        }}
        ><CloseRounded size='30' color='black'/></IconButton>
        </Box>
        )}
      
      <div className="post-btn-container post-card-container">
        <div className="post-icon-container">
        
        {/* <label htmlFor="icon-button-file" >
          <Input accept="image/*" 
          id="icon-button-file" 
          type="file" 
          sx={{visibility:"hidden", display:"none"}} 
          onChange={(e)=>setPostData((prev)=>({
            ...prev, postImage: e.target.files[0],
          }))
          }/>
          <IconButton color="primary" aria-label="upload picture" component="span">
            
            {gifSelected ? (
              <ImageRounded 
              sx={{color:'gray',
              cursor:'not-allowed'}}
              />)
              :
              (<ImageRounded />)}
          </IconButton>
        </label>    */}
        
          <GifInput imageSelected={postImage}/>

          <MoodRounded className="post-icons" />
          <CalendarMonthRounded className="post-icons" />
          <LocationOnRounded className="post-icons" />
        </div>

        {posting ?
        (<Button isLoading loadingText='posting'></Button>)
        : (
        <Button
          id="myBtn"
          variant='contained'
          type='submit'
          sx={{backgroundColor: 'var(--color-primary)',borderRadius:'2rem'}}
          className="header-btn transparent-bg button-filter button-post buttonHoverShadow"
          onClick={(e)=>submitHandler(e)}
          isDisabled={
            (content.trim().length === 0 && 
            postImage === '' && gifSelected === '') ||
            content.length > 240
            }
        >
        Tweet
        </Button>)}
      </div>
      </Stack>
    </div>
  )
}
