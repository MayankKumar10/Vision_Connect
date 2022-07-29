import React, { useEffect } from "react";
import "../../styles/root.css";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link, useNavigate, useParams} from "react-router-dom";
import {MdKeyboardBackspace} from "react-icons/md";
import {
  MdLocationOn,
} from "react-icons/md";
import {
  IoBalloonOutline,
  IoCalendar,
} from "react-icons/io5";
import {UserPostCard} from "../../components/UserPostCard/UserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { followUser, getUserPost, getUsers, logout, resetProfile, unfollowUser, useProfile } from "../../Redux";
import { sortByDate, userPresentFunc } from "../../helper";
import { Box, IconButton } from "@mui/material";
import { ProfileEditForm } from "./ProfileEditForm";

export const Profile = () => {
  const params = useParams();
  const {username} = params;
  const navigate = useNavigate();
  const {user:{username:usernameProfile, id}, token} = useSelector((state)=> state.auth)

  const dispatch = useDispatch();
  let {userToDisplay, userPosts} = useProfile();
  let {allPosts} = useSelector((state)=>state.posts);
  userPosts = sortByDate(userPosts);

  // useEffect(()=> dispatch ? (
  //     dispatch(getUsers({username})),
  //     dispatch(getUserPost({username})))
  //     :   
  //     dispatch(resetProfile())
  // ,[username,allPosts,dispatch]);

  useEffect(() => {
		if (dispatch) {
			dispatch(getUsers({ username }));
			dispatch(getUserPost({ username }));
		}

		return () => {
			dispatch(resetProfile());
		};
	}, [username, dispatch]);
	
	useEffect(() => dispatch && dispatch(getUserPost({ username })), [allPosts]);

  const userObj = {...userToDisplay}

  const {
    firstName,
    lastName,
    username: currUserName,
    DOB,
    Location,
    Joined,
    avatarURL,
    backgroundURL,
    followers,
    following,
    bio,
    portfolio,
    _id,
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
                dispatch(unfollowUser({ followUserId: userToDisplay._id, token }))
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
                dispatch(followUser({ followUserId: userToDisplay._id, token }))
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
              <p className="pf-info-icons fl-num">10</p>
              <p>Following</p>
            </span>
            <span className="pf-follow-ic-cont">
              <p className="pf-info-icons fl-num">10M</p>
              <p>Followers</p>
            </span>
          </div>
        </div>
      </div>

  {userPosts?.map((post)=>(
    <UserPostCard className="post-card-outer-cont" postDetails={post} key={post.id}/>
  )) 
  }
    </div>
  );
};
