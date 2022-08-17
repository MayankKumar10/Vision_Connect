import React from 'react'
import { useEffect } from 'react'
import { MdVerified } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { timeDifference } from '../../helper'
import { getAllUsers } from '../../Redux'

export const UserAvatarCard = ({userDetails}) => {
  const dispatch = useDispatch();

  const{allUsers} = useSelector((state)=>state.users);
  const foundUser = allUsers?.find((user)=>user.username === userDetails?.username)

  useEffect(()=>{
    dispatch(getAllUsers());
  },[])

  return (
    <div className="post-card-avatar">
          <img
            className="AvatarImage user-card-avatar box-shadow-round"
            src={foundUser?.avatarURL}
            alt=""
            sizes=""
            srcSet=""
          />
          <div className="postCard-text-container">
            <span className="postCard-text">
              {`${foundUser?.firstName} ${foundUser?.lastName}`}
              <MdVerified className="verification-icon" />
             {`@${foundUser?.username}`}.{timeDifference(userDetails?.createdAt)}
            </span>
          </div>
    </div>
  )
}
