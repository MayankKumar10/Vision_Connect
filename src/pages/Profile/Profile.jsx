import React, { useEffect } from "react";
import "../../styles/root.css";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {MdKeyboardBackspace} from "react-icons/md";
import {
  MdLocationOn,
} from "react-icons/md";
import {
  IoBalloonOutline,
  IoCalendar,
} from "react-icons/io5";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import {UserPostCard} from "../../components/UserPostCard/UserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { followUser, getAllUsers, getPosts, getUserPost, getUsers, logout, resetProfile, unfollowUser, useProfile } from "../../Redux";
import { sortByDate, userPresentFunc } from "../../helper";
import { Box, IconButton } from "@mui/material";
import { ProfileEditForm } from "./ProfileEditForm";
import { ProfileDetail } from "./ProfileDetail";

export const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const {username} = params;

  const navigate = useNavigate();
  
  useEffect(() => {
		(()=>{if (dispatch) {
			dispatch(getUsers({ username }));
			dispatch(getUserPost({ username }));
		}
    
		return () => {
			dispatch(resetProfile());
		}})();
	}, [username, dispatch]);
  

  

  let {userToDisplay, userPosts} = useProfile();
  let {allPosts} = useSelector((state)=>state.posts);
  userPosts = sortByDate(userPosts);

	
	useEffect(() => {
    dispatch(getUserPost({ username }))
  }, [allPosts]);

  const userObj = {...userToDisplay}

  const {
    firstName,
    lastName,
    backgroundURL,
  } = userObj;

  

  return (
    <div className="home-container post-card-container col-6">
      <div className="profile-top-txt-container">
        <MdKeyboardBackspace size="25" onClick={() => navigate(-1)} />
        <span className="profile-top-text">
          {userObj.firstName===undefined
          ?
          <h4>Loading</h4>
          :<h4>{`${firstName} ${lastName}`}</h4>
        }
            <p>{`${userPosts.length} Tweet${userPosts.length===1 ? '': 's'}`}</p>
          </span>
      </div>
      <div class="AvatarDomContainer post-card-container post-flex">
        <div className="profile-img-container">
          <img
            class="Profile-main-img  "
            src={backgroundURL}
            alt=""
            sizes=""
            srcset=""
          />
        </div>
      </div>

      {
        userToDisplay?.username && (
          <ProfileDetail 
          user={userToDisplay}
          userPostsLength={userPosts.length}
          />
        )
      }
      

      {userPosts?.map((post)=>(
        <UserPostCard className="post-card-outer-cont" postDetails={post} key={post.id}/>
      )) 
      }
        </div>
      );
    };
