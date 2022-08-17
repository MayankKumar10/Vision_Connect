import React, { useEffect, useState } from "react";
import "../../styles/root.css";
import {Link, useParams} from "react-router-dom";
import {MdKeyboardBackspace} from "react-icons/md";
import {UserPostCard} from "../../components/UserPostCard/UserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, IconButton, Input, TextField } from "@mui/material";
import { addComments, deleteComment, getAllUsers, getPosts } from "../../Redux";
import { UserAvatarCard } from "../../components";
import DeleteIcon from '@mui/icons-material/Delete';

export const Comments = () => {
  const params = useParams();
  const {postId} = params;
  const {allPosts} = useSelector((state)=> state.posts);
  const {token, user:{username}} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const currPost = allPosts?.find((post)=> post._id === postId);
  const [text, setText] = useState('');

  // useEffect(()=>{
  //    dispatch(getAllUsers());
  //   dispatch(getPosts());
  // },[])
  
  return (
    <div className="home-container post-card-container col-6">
      <div className="profile-top-txt-container">
        <MdKeyboardBackspace size="25" />
        <span className="profile-top-text">
          <h4>Tweet</h4>
        </span>
      </div>
      
      
      {currPost && <UserPostCard postDetails={currPost} key={currPost?._id} /> }

      {/* <CommentCard /> */}

      {/* <div className="post-flex post-card-container">
        
        
      </div> */}
    <Grid container >
        <Grid item xs={8}>
        <Box
          sx={{
            width: 500,
            height:'10%',
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="fullWidth" id="fullWidth" value={text} onChange={(e)=> setText(e.target.value)}/>
        </Box>

        </Grid>
        <Grid item xs={4}>
        <Button className='padding-normal' variant="contained" sx={{backgroundColor:'var(--color-primary)',borderRadius:'2rem'}} onClick={()=> {dispatch(
          addComments({ postId, commentData:{text}, token})
         );
         setText('');
         }}>Comment</Button>
        </Grid>
    </Grid>
      {currPost?.comments?.map((comment)=>(
      <div className="post-flex post-card-container" key={comment.id}>
      <div className="post-card-img-text" >
      
      <UserAvatarCard userDetails={comment} />
     {comment.username === username && (
      <IconButton aria-label="delete" size="large">
      <DeleteIcon onClick={()=>{
        dispatch(
          deleteComment({
            postId,
            commentId: comment._id,
            token,
          })
        )
      }}/>
    </IconButton>
     )} 
     
     
     </div>
     <div className="user-card-text-container">
          <p className="user-card-text">
            {comment.text}
          </p>
        </div>
     </div>
      ))}
    </div>
  );
};
