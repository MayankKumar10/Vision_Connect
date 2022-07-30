import React from 'react'
import { followUser, getAllUsers, getPosts, getUserPost, getUsers, logout, resetProfile, unfollowUser, useProfile } from "../../Redux";
import { sortByDate, userPresentFunc } from "../../helper";
import { Box, IconButton } from "@mui/material";
import { ProfileEditForm } from "./ProfileEditForm";
import {
  MdLocationOn,
} from "react-icons/md";
import {
  IoBalloonOutline,
  IoCalendar,
} from "react-icons/io5";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const ProfileDetail = ({user, userPostsLength}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user:{username:usernameProfile,}, token} = useSelector((state)=> state.auth)
  
  const {
    username: currUserName,
    DOB,
    Location,
    Joined,
    avatarURL,
    following,
    followers,
  } = user;



  return (
    <div className="profile-edit-container col-12">
        <div className="profile-avatar col-12">
          <img
            class="AvatarImage profile-avatar-img box-shadow-round"
            src={avatarURL}
            alt=""
            sizes=""
            srcset=""
          />

          <div className="profile-btn-container col-12">
            { usernameProfile === currUserName ? (
            <Box className='flex-space-between'>
            <ProfileEditForm />
            <IconButton
              id="myBtn"
              variant='contained'
              className="header-btn transparent-bg button-filter 
              icon-button-profile  buttonHoverShadow"
              onClick={()=>{
                dispatch(logout());
                navigate('/');
                localStorage.clear();
              }}
            >
              <LogoutRoundedIcon />
            </IconButton>
            </Box>
            ) : userPresentFunc(usernameProfile, followers) ? (
              <button
              id="myBtn"
              className="header-btn transparent-bg button-filter button-post  buttonHoverShadow"
              onClick={()=>{
                dispatch &&
                dispatch(unfollowUser({ followUserId: user._id, token }))
              }}
            >
              <div
                className="headerAnchorTag flex-column-center"
              >
                <span className="button-inner-txt">
                  UnFollow
                </span>
              </div>
            </button>
            ) : (
              <button
              id="myBtn"
              className="header-btn transparent-bg button-filter button-post  buttonHoverShadow"
              onClick={()=>{
                dispatch &&
                dispatch(followUser({ followUserId: user._id, token }))
              }}
            >
              <div
                className="headerAnchorTag flex-column-center"
              >
                <span className="button-inner-txt">
                  Follow
                </span>
              </div>
            </button>
            )
          }
          </div>
            
        </div>
        <div className="profile-info col-12">
          <div className="profile-info-name">
            {/* <h4>{`${firstName} ${lastName}`}</h4>
            <p>{`@${currUserName}`}</p> */}
          </div>
          <div className="profile-info-location col-12">
            <span className="pf-info-icons-cont">
              <MdLocationOn
                className="pf-info-icons"
                size="40"
              />
              {Location}
            </span>
            <span className="pf-info-icons-cont">
              <IoBalloonOutline
                className="pf-info-icons"
                size="40"
              />
              {`Born On ${DOB}`}
            </span>
            <span className="pf-info-icons-cont">
              <IoCalendar
                className="pf-info-icons"
                size="40"
              />
              {`Joined ${Joined}`}
            </span>
          </div>
          <div className="profile-info-follow col-12">
            <span className="pf-follow-ic-cont">
              <p className="pf-info-icons fl-num">{following.length}</p>
              <p>Following</p>
            </span>
            <span className="pf-follow-ic-cont">
              <p className="pf-info-icons fl-num">{followers.length}</p>
              <p>Followers</p>
            </span>
          </div>
        </div>
      </div>
  )
}
