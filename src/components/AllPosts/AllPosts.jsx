import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { getTrendingPosts, sortByDate, userFeed } from '../../helper';
import { InfiniteScrollHook } from '../../hooks';
import ReactLoading from 'react-loading'
import { UserPostCard } from '../UserPostCard/UserPostCard';

export const AllPosts = () => {

  const oldPost = useRef(null);
  let {allPosts, sortBy} = useSelector((state)=>state.posts);
  const {user:{following, username}} = useSelector((state)=>state.auth);

  
  if(sortBy === 'trending'){
    allPosts = getTrendingPosts(allPosts);
  }else{
    const userFeedPosts = userFeed(allPosts, following, username);

    
    if(sortBy === 'Oldest'){
      allPosts = sortByDate(userFeedPosts, true);
    }else{
      allPosts = sortByDate(userFeedPosts);
    }
  }

let {pageNum, loading} = InfiniteScrollHook({allPosts, oldPost})

let firstSlice = [...allPosts.slice(0, (pageNum) * 6)];
let lastSlice = allPosts.slice((pageNum - 1) * 6, pageNum )
  return (
    <>
    {firstSlice.map((post)=>{
        return <UserPostCard key={post.id} postDetails={post}/>
      })
    }
    {
      loading ? (
        <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'}/>
      ) : (
        !loading && lastSlice.map((post)=>{return <UserPostCard key={post.id} postDetails={post}/>})
      )
    }
    <div ref={oldPost} key="oldPost"></div>
    </>
  )
}
