import React from "react";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineRetweet} from "react-icons/ai";
import {BsHeart} from "react-icons/bs";

import {
  MdOutlineGif,
  MdOutlineMood,
  MdVerified,
} from "react-icons/md";
import {steve} from "../../assets/images";
import {useNavigate} from "react-router-dom";
import {Comment_Reply} from "./Comment_Reply";
import {UserPostCard} from "../../components/UserPostCard/UserPostCard";

export const CommentCard = () => {
  return (
    <>
      <div className="post-flex post-card-container">
        <div className="post-card-img-text">
          <img
            className="AvatarImage user-card-avatar box-shadow-round"
            src={steve}
            alt=""
            sizes=""
            srcSet=""
          />
          <div className="postCard-text-container">
            <span className="commentCard-text">
              <span className="commentCard-text-icon">
                Mayank
                <MdVerified className="verification-icon1" />
              </span>
              @UserName
            </span>
          </div>
        </div>
        <div className="user-card-text-container">
          <p className="user-card-text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis maiores quidem
            modi. Voluptates maxime voluptas magnam,
            temporibus placeat nihil officia doloribus
            voluptatibus ratione quos molestias distinctio
            error tempora explicabo vero.
          </p>
          <img
            className="user-card-img"
            src={steve}
            alt=""
            sizes=""
            srcSet=""
          />
        </div>

        <div className="comment-btn-container ">
          <div className="comment-card-container cmt-time-cont col-11">
            <span className=" cmt-time-text">
              5.20 AM . Jun 1, 2022.
            </span>
            <span className=" cmt-time-text">
              Twitter for iPhone
            </span>
          </div>

          <div className="user-post-icon-container comment-card-container col-11">
            <div className="post-card-icons icons1">
              <FaRegComment size="20" />
              <p>12</p>
            </div>

            <div className="post-card-icons icons2">
              <AiOutlineRetweet size="20" />
              <p>6</p>
            </div>
            <div className="post-card-icons icons3">
              <BsHeart size="20" />
              <p>24</p>
            </div>
          </div>
        </div>
        <Comment_Reply />
        <UserPostCard />
      </div>
    </>
  );
};
