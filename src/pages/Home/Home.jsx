import React from "react";
import "../../styles/root.css";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {BsStars} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getPosts, getUserPost } from "../../Redux";
import {Profile,Bookmark,Explore,Comments, HomePage} from '..'
import { AllPosts, Filter, Footer, NewPost, SideNav } from "../../components";
import { Box } from "@mui/material";

export const Home = () => {
  const dispatch = useDispatch();

  const {allPosts,} = useSelector((state)=> state.posts)
  const {user,} = useSelector((state)=> state.users)
  
  let location = useLocation();
  let currPage = location?.state?.pageToShow;
  let pathname = location?.pathname;

    useEffect(()=>{
      dispatch(getAllUsers());
      dispatch(getPosts());
    },[])
  
    

  const {openLikesList, likesList} = useSelector((state)=>state.posts)
  
  return (
    <>   
      {(()=>{
           if (currPage==='profile' || pathname==='/profile') return <Profile />;
            else if(currPage==='bookmarks' || pathname==='/bookmarks') return  <Bookmark />;
            else if(currPage==='explore' || pathname==="/explore") return  <Explore />;
            else if(currPage==='comments'|| pathname==='/comments') return  <Comments />;
            else {
              return (
              <HomePage />
               )
          }
        })()}  
        <SideNav />
    </>
  )
};
