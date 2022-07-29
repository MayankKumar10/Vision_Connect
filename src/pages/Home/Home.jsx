import React from "react";
import "../../styles/root.css";
import {Outlet, useLocation} from "react-router-dom";
import {BsStars} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getPosts } from "../../Redux";
import {Profile,Bookmark,Explore,Comments} from '..'
import { AllPosts, Filter, Footer, NewPost, SideNav } from "../../components";
import { Box } from "@mui/material";

export const Home = () => {
  const dispatch = useDispatch();

  const {allPosts,} = useSelector((state)=> state.posts)
  const {user,} = useSelector((state)=> state.users)
  
  
    useEffect(()=>{
      dispatch(getAllUsers());
      dispatch(getPosts());
    },[])

  let location = useLocation();
  let currPage = location.state?.pageToShow;

  const {openLikesList, likesList} = useSelector((state)=>state.posts)
  
  return (
    <>   
      {(()=>{
           if (currPage==='profile') return <Profile />;
            else if(currPage==='bookmarks') return  <Bookmark />;
            else if(currPage==='explore') return  <Explore />;
            else if(currPage==='comments') return  <Comments />;
            else{
              return (
                <div className="home-container post-card-container col-6">
                <div className="home-trending">
                  <h4>Home</h4>
                  <BsStars size="25" />
                </div>
                <Box>
                <NewPost />
                <AllPosts />
                </Box>
                </div>
              )
          }
        })()}
        <SideNav />
      <Footer />
    </>
  )
};
