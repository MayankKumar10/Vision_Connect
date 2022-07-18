import React from "react";
import {
  MdCalendarToday,
  MdLocationOn,
  MdOutlineGif,
  MdOutlineImage,
  MdOutlineMood,
} from "react-icons/md";
import {Link} from "react-router-dom";
import {steve} from "../../assets/images";

export const Comment_Reply = () => {
  return (
    <div class="AvatarDomContainer post-card-container post-flex">
      <div className="cmt-img-text">
        <img
          class="AvatarImage smallAvatar box-shadow-round"
          src={steve}
          alt=""
          sizes=""
          srcset=""
        />

        <input
          type="text"
          className="home-text"
          placeholder="What's happening?"
          maxlength="240"
          autofocus
        />
      </div>
      <div className="post-btn-container post-card-container">
        <div className="post-icon-container">
          <MdOutlineImage className="post-icons" />
          <MdOutlineGif className="post-icons" />
          <MdOutlineMood className="post-icons" />
          <MdCalendarToday className="post-icons" />
          <MdLocationOn className="post-icons" />
        </div>

        <button
          id="myBtn"
          className="header-btn transparent-bg button-filter button-post  buttonHoverShadow"
        >
          <Link
            className="headerAnchorTag flex-column-center"
            to="./login"
          >
            <span className="button-inner-txt">Tweet</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
