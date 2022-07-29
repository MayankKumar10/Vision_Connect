// import React from 'react'
// import { AllPosts } from '../../components'

// export const Explore = () => {
//   return (
//     <div className="home-container post-card-container col-6">
//       <AllPosts />
//     </div>
//   )
// }


import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingPosts, sortByDate, userFeed } from '../../helper';
import { InfiniteScrollHook } from '../../hooks';
import ReactLoading from 'react-loading'
import { UserPostCard } from '../../components/UserPostCard/UserPostCard';
import { getAllUsers, getPosts } from '../../Redux';
import { SideNav } from '../../components';
import { useLocation } from 'react-router-dom';

export const Explore = () => {

  const oldPost = useRef(null);
  const dispatch = useDispatch();
  let {allPosts} = useSelector((state)=>state.posts);
  let {user} = useSelector((state)=>state.users) 
  allPosts = sortByDate(allPosts);

  let {pageNum, loading} = InfiniteScrollHook({allPosts, oldPost})


  let firstSlice = [...allPosts.slice(0, (pageNum) * 6)];
  let lastSlice = allPosts.slice((pageNum - 1) * 6, pageNum );

  useEffect(()=>{
    dispatch(getAllUsers());
    dispatch(getPosts());
  },[])


  console.log('LastSlice', lastSlice);

  let location = useLocation();
  let currPage = location?.state?.pageToShow;

  console.log('location', location)


  return (
    <div className="home-container post-card-container col-6">
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
    </div>
     
  
  )
}
