import { Box } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { AddBookmark } from '../../assets/images'
import { UserPostCard } from '../../components/UserPostCard/UserPostCard'
import { getAllUsers, getBookmarks, getPosts } from '../../Redux'

export const Bookmark = () => {
const dispatch = useDispatch();
const {token} = useSelector((state)=>state.auth)
const {bookmarkedPosts, allPosts} = useSelector((state)=>state.posts)
 
useEffect(()=> {
  dispatch(getBookmarks({token}))
}, [])

useEffect(()=>{
  dispatch(getAllUsers());
  dispatch(getPosts());
},[])

const bookmarkPostsData = allPosts.filter((post)=> bookmarkedPosts.find((id)=> post._id === id)
 );

 return bookmarkedPosts?.length ===0 ? (
  <div className="home-container post-card-container col-6">
    <img 
    src={AddBookmark}
    alt='bookmark'
    />
  </div> 
 ) : (
  <div className="home-container post-card-container col-6">
  {bookmarkPostsData?.map((post)=>(
    <Box key={post._id}>
    <UserPostCard  postDetails={post}/>
    </Box>
  ))}
  </div>
 )
}
