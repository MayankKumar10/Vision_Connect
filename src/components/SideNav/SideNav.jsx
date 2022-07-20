import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPresentFunc } from "../../helper";
import { getAllUsers, useProfile } from "../../Redux";
import {FollowerCard} from "../FollowCard/FollowerCard";
import { SuggestedFollowers } from "../FollowCard/SuggestedFollowers";
import { SearchComp } from "./SearchComp";

export const SideNav = () => {
  const dispatch = useDispatch();
  const {allUsers} = useSelector((state)=>state.users);
  const {user, token}= useSelector((state)=>state.auth);
  const {userToDisplay} = useProfile();
  
  const currUser = allUsers.find((allUser)=>allUser.username === user?.username);
  
  useEffect(()=>dispatch(getAllUsers()) ,[dispatch])

  const SuggestedUsers = allUsers.filter((SuggestUser)=> !userPresentFunc(SuggestUser.username, currUser?.following) && user?.username !== SuggestUser.username).slice(0, 3)
  
  const FollowedUsers = allUsers.filter((FollowUser)=> userPresentFunc(FollowUser.username, currUser?.following) && user?.username !== FollowUser.username).slice(0, 3)
 
  return (
    <>
      <div className="SideNav-container col-3">
       <SearchComp />
        <nav className="sidenav-container post-card-container ">
          <form className="form-container">
          <p>Who to Follow</p>
          <SuggestedFollowers user={user} users={userToDisplay} usersList={SuggestedUsers} 
            username={user?.username} token={token}/>
          </form>
        </nav>
        <nav className="sidenav-container post-card-container ">
          <form className="form-container">
          <p>Followed</p>
            <FollowerCard users={userToDisplay} usersList={FollowedUsers} 
            username={user?.username} token={token}
            />
          </form>
        </nav>
      </div>
    </>
  );
};
