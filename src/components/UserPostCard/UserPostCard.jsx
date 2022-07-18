import React, { useEffect, useState } from "react";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineRetweet} from "react-icons/ai";
import {BsHeart} from "react-icons/bs";

import {
  MdBookmark,
  MdBookmarkBorder,
  MdOutlineGif,
  MdOutlineMood,
  MdOutlineMoreVert,
  MdVerified,
} from "react-icons/md";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {steve} from "../../assets/images";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, createPost, deletePost, dislikePost, editComment, editPost, getBookmarks, getUsers, likePost, removeBookmark } from "../../Redux";
import axios from "axios";
import { UserAvatarCard } from "./UserAvatarCard";
import { Button, IconButton, Input, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { userPresentFunc } from "../../helper";
import { CalendarMonthRounded, CloseRounded, ImageRounded, LocationOnRounded, MoodRounded } from "@mui/icons-material";
import { GifInput } from "../NewPost/GifInput";
import { Box } from "@mui/system";

export const UserPostCard = ({postDetails}) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {bookmarkedPosts} = useSelector((state)=>state.posts);
  const {user:{username: currUser, id: userId}, token} = useSelector((state)=> state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [postEdited, setPostEdited] = useState({...postDetails});
  const checkInBookmarks = () => bookmarkedPosts.find((bookmarkId)=> bookmarkId === postDetails?._id);

  useEffect(()=> getBookmarks(),[]) 
  
  const saveHandler = async()=>{
    if(postEdited.postImage === ''){
      dispatch()
      editPost({ token, postId: postDetails?._id, postData: postEdited })
    } else {
      const data = new FormData();
      data.append('file', postEdited.postImage);
      data.append('upload_preset', process.env.REACT_APP_PRESET);
      const postImgData = {
        method: 'POST',
        body: data,
      };
      await axios('https://api.cloudinary.com/v1_1/mak28/image/upload', postImgData)
      .then((res)=>res.json())
      .then((json)=>{
        dispatch(createPost({
          token,
          postData: {content:postEdited.content, postImage: json.url},
        }));
      })
      .catch((err)=>{ 
        console.log(err);
      });
    }
    setIsEditing(false);
  };

  // const likeUsersDetails = () =>{
  //   const{likeCount, likedBy} = postDetails?.likes;
  //   if(likeCount === 0) return '';
  //   if(likeCount === 1) return `Liked by ${likedBy[0]?.username}`;
  //   return `Liked by ${postDetails?.likes?.likedBy[0]?.username} and 
  //   ${postDetails?.likes?.likeCount-1} others`; 
  // }


  return (
    <>
      <div className="post-flex post-card-container">
         <div className="post-card-img-text">

         <Link to={`/profile/${postDetails?.username}`}
         state={{pageToShow: 'profile'}}
         >
         <UserAvatarCard userDetails={postDetails} />
         </Link>

          {postDetails?.username === currUser && (    
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                <React.Fragment>
                  <IconButton variant="contained" size='small' {...bindTrigger(popupState)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={()=>setIsEditing(true)}>
                      Edit
                      </MenuItem>  
                    <MenuItem onClick={()=>
                    dispatch(deletePost({token, postId: postDetails?._id }))}>
                      Delete
                    </MenuItem>
                  </Menu>
                </React.Fragment>
                    )}
              </PopupState>
          )}
         </div>

         {isEditing ? (
          <Stack
          direction={{ xs: 'row', sm: 'column' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
           <textarea
            className="home-text"
            placeholder="What's happening?"
            maxlength="240"
            sx={{ 
              height:'200'
            }}
            value={postEdited.content}
            onChange={(e)=>
            setPostEdited((prev)=> ({ ...prev, content: e.target.value })) 
            }
            autofocus
          />
          <div className="post-btn-container">
           <div className="post-icon-container">
        
          <label htmlFor="icon-button-file" >
            <Input 
            accept="image/*" 
            id="icon-button-file" 
            type="file" 
            sx={{visibility:"hidden", display:"none"}} 
            onChange={(e)=>
              setPostEdited((prev)=>({
              ...prev, postImage: e.target.files[0],
            }))
            }/>
            <IconButton color="primary" aria-label="upload picture" component="span">
              
              {postEdited?.gifSelected ? (
                <ImageRounded 
                sx={{color:'gray',
                cursor:'not-allowed'}}
                />)
                :
                (<ImageRounded />)}
            </IconButton>
          </label>   
        
          <GifInput imageSelected={postEdited?.postImage}/>

          <MoodRounded className="post-icons" />
          <CalendarMonthRounded className="post-icons" />
          <LocationOnRounded className="post-icons" />
        </div>

        <Button
          id="myBtn"
          variant='contained'
          sx={{backgroundColor: 'var(--color-primary)',borderRadius:'2rem'}}
          className="header-btn transparent-bg button-filter button-post buttonHoverShadow"
          onClick={saveHandler}
          isDisabled={
            (postEdited?.content.length === 0 && 
              postEdited?.postImage === '' && postEdited?.gifSelected === '')
            }
        >
        Tweet
        </Button>

        <Button isLoading loadingText='posting'
          variant='contained'
          sx={{backgroundColor: 'var(--color-primary)'
          ,borderRadius:'2rem'}}
          className="header-btn transparent-bg 
          button-filter button-post buttonHoverShadow"
          onClick={()=>{
            setIsEditing(false);
            setPostEdited((prev)=>({
              ...prev,
              content: postDetails?.content,
              postImage: postDetails?.postImage,
            }))
          }}>
            Cancel
          </Button>
      </div>
        </Stack>
         ):
         (
          <div className="user-card-text-container">
          <Typography variant="body2" sx={{width:'100%'}} gutterBottom >
            {postEdited?.content}
          </Typography>
          </div>
         )}
        {postEdited?.postImage && (
        <div className="user-card-text-container"
          key={postEdited?.id} >
          <Box
          component="img"
          className="user-card-img"
          sx={{
          width:'100%',
          height: '20rem',
          borderRadius:'1rem',}}
          src={typeof postEdited?.postImage === 'string'
          ? postEdited?.postImage : URL.createObjectURL(postEdited?.postImage)}
          alt='postImage'
          objectFit={'contain'}
          loading='lazy'
          
          />

          {isEditing && (
            <IconButton 
            sx={{
            position:'absolute',
            top:'4%',
            right:'4%',
            border:'1px solid black'}}
            variant='iconButton'
            fontSize={'30'}
            onClick={()=>
            setPostEdited((prev)=>({...prev, postImage: ''}))
          }
          ><CloseRounded size='30' color='black'/></IconButton>
          )}

        </div>) }
        
        {postEdited?.gifSelected && (
        <div className="user-card-text-container"
          key={postEdited?.id} >
          <Box
          component="img"
          className="user-card-img"
          sx={{
          width:'100%',
          height: '20rem',
          borderRadius:'1rem',}}
          src={postEdited.gifSelected}
          alt='postImage'
          objectFit={'contain'}
          loading='lazy'
          
          />
          {isEditing && (
            <IconButton 
            sx={{
            position:'absolute',
            top:'4%',
            right:'4%',
            border:'1px solid black'}}
            variant='iconButton'
            fontSize={'30'}
            onClick={()=>
            setPostEdited((prev)=>({...prev, gifSelected: ''}))
          }
          ><CloseRounded size='30' color='black'/>
          </IconButton>
          )}

        </div>) }

        <div className="post-btn-container ">
          <div className="user-post-icon-container col-12">
            
            <Link
              className="post-card-icons icons1 "
              to={`/comments/${postDetails?._id}`}
              state={{pageToShow:'comments'}}
            >
              <FaRegComment size="20" />
              <p>{postDetails?.comments?.length}</p>
            </Link>
            
              {
                checkInBookmarks() ? 
                ( <div className="post-card-icons icons2"
                onClick={()=>dispatch(removeBookmark({
                  token,postId:postDetails?._id}))} >
                <MdBookmarkBorder size="20" />
              </div>) 
              : 
                ( <div className="post-card-icons icons2"
               onClick={()=>dispatch(addBookmark({
                token, postId:postDetails?._id
               })) } >
                <MdBookmarkBorder size="20" />
              </div>)
              }

              {userPresentFunc(currUser, postDetails?.likes.likedBy) ?
                (
                  <div className="post-card-icons icons3"
                  onClick={()=>dispatch(dislikePost({
                    token, postId:postDetails?._id
                  }))}>
                    <BsHeart size="20" />
                    <p>{postDetails?.likes.likeCount}</p>
                  </div>
      
                ):(
                  <div className="post-card-icons icons3"
                  onClick={()=>dispatch(likePost({
                    token, postId:postDetails?._id
                  }))}>
                    <BsHeart size="20" />
                    <p>{postDetails?.likes.likeCount}</p>
                  </div>
                )
              }

          </div>
        </div>
      </div>
    </>
  );
};
