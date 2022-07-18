import { Box } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddBookmark } from '../../assets/images'
import { UserPostCard } from '../../components/UserPostCard/UserPostCard'
import { getBookmarks } from '../../Redux'

export const Bookmark = () => {
 const {token} = useSelector((state)=>state.auth)
 const {bookmarkedPosts, allPosts} = useSelector((state)=>state.posts)
 const dispatch = useDispatch();

 useEffect(()=> dispatch && dispatch(getBookmarks({token})),[])

 const BookmarkPostsData = allPosts.filter((post)=>bookmarkedPosts.find((id)=> post._id === id)
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
  {BookmarkPostsData?.map((post)=>(
    <Box key={post._id}>
    <UserPostCard  postDetails={post}/>
    </Box>
  ))}
  </div>
 )
}
